'use strict';
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { URL } = require('node:url');

const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || '0.0.0.0';
const ROOT = __dirname;
const DATA_DIR = process.env.MAFIA_DATA_DIR ? path.resolve(process.env.MAFIA_DATA_DIR) : path.join(ROOT, 'data');
const DB_FILE = path.join(DATA_DIR, 'rooms.json');
const MAX_PLAYERS = 20;
const MAX_ROOMS = 200;
const IS_PRODUCTION = process.env.NODE_ENV === 'production';
const EXPIRE_MS = 48 * 60 * 60 * 1000;
const rooms = new Map();
const streams = new Map();

function uid() { return crypto.randomBytes(12).toString('hex'); }
function token() { return crypto.randomBytes(32).toString('base64url'); }
function newCode() {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let c;
  do { c = Array.from({ length: 6 }, () => alphabet[crypto.randomInt(alphabet.length)]).join(''); }
  while (rooms.has(c));
  return c;
}
function bad(message, status = 400) { const e = new Error(message); e.status = status; throw e; }
function sanitizeName(input) {
  if (typeof input !== 'string') bad('Enter your name.');
  const name = input.trim().replace(/\s+/g, ' ').slice(0, 28);
  if (name.length < 2) bad('Name must contain at least 2 characters.');
  return name;
}
function load() {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(DB_FILE)) return;
  try {
    const records = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
    for (const room of records) {
      if (room && room.code && Date.now() - room.updatedAt < EXPIRE_MS) rooms.set(room.code, room);
    }
    console.log(`Restored ${rooms.size} active room(s).`);
  } catch (err) { console.warn('Could not restore room data:', err.message); }
}
function persist() {
  const tmp = DB_FILE + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify([...rooms.values()]));
  fs.renameSync(tmp, DB_FILE);
}
function touch(room) { room.updatedAt = Date.now(); persist(); broadcast(room); }
function getRoom(code) {
  const room = rooms.get(String(code || '').toUpperCase());
  if (!room) bad('Room not found or expired.', 404);
  return room;
}
function actor(room, credential) {
  if (credential && credential === room.narrator.token) return { type: 'narrator', id: 'narrator', name: room.narrator.name };
  const player = room.players.find(p => p.token === credential);
  if (!player) bad('Session not found. Rejoin the room.', 403);
  return { ...player, type: 'player' };
}
function requireNarrator(room, credential) { const who = actor(room, credential); if (who.type !== 'narrator') bad('Narrator only.', 403); return who; }
function requirePlayer(room, credential) { const who = actor(room, credential); if (who.type !== 'player') bad('Players only.', 403); return who; }
function alive(room) { return room.players.filter(p => p.alive); }
function maxMafia(n) { return Math.max(1, Math.floor((n - 1) / 2)); }
function required(room) { return alive(room).filter(p => ['mafia', 'doctor', 'detective'].includes(p.role)); }
function actionCount(room) { return required(room).filter(p => room.actions[p.id]).length; }
function allActions(room) { return actionCount(room) === required(room).length; }
function gameWinner(room) {
  const active = alive(room);
  const mafia = active.filter(p => p.role === 'mafia').length;
  const town = active.length - mafia;
  if (mafia === 0) return 'town';
  if (mafia >= town) return 'mafia';
  return null;
}
function startGame(room, settings) {
  if (room.phase !== 'lobby') bad('The game has already started.');
  const n = room.players.length;
  if (n < 4) bad('At least 4 players are required.');
  const mafiaCount = Number(settings.mafiaCount);
  const doctor = settings.doctor !== false;
  const detective = settings.detective !== false;
  if (!Number.isInteger(mafiaCount) || mafiaCount < 1 || mafiaCount > maxMafia(n)) bad('Invalid number of Mafia players.');
  if (mafiaCount + Number(doctor) + Number(detective) >= n) bad('Leave at least one Citizen in the game.');
  const roles = [ ...Array(mafiaCount).fill('mafia'), ...(doctor ? ['doctor'] : []), ...(detective ? ['detective'] : []), ...Array(n - mafiaCount - Number(doctor) - Number(detective)).fill('citizen') ];
  for (let i = roles.length - 1; i > 0; i--) { const j = crypto.randomInt(i + 1); [roles[i], roles[j]] = [roles[j], roles[i]]; }
  room.players.forEach((p, i) => { p.role = roles[i]; p.alive = true; });
  room.config = { mafiaCount, doctor, detective };
  room.phase = 'night'; room.round = 1; room.actions = {}; room.nightResult = null; room.winner = null; room.history = [];
  room.history.push({ type: 'started', round: 1, at: Date.now(), text: 'Game started.' });
}
function resolveNight(room) {
  const acts = required(room).map(p => ({ playerId: p.id, playerName: p.name, role: p.role, targetId: room.actions[p.id] || null }));
  const mafiaVotes = acts.filter(a => a.role === 'mafia' && a.targetId);
  const tally = {};
  for (const act of mafiaVotes) tally[act.targetId] = (tally[act.targetId] || 0) + 1;
  const ranks = Object.entries(tally).sort((a, b) => b[1] - a[1]);
  const tie = ranks.length > 1 && ranks[0][1] === ranks[1][1];
  const victimId = ranks.length && !tie ? ranks[0][0] : null;
  const protectId = acts.find(a => a.role === 'doctor')?.targetId || null;
  const detective = acts.find(a => a.role === 'detective');
  const investigated = detective?.targetId ? room.players.find(p => p.id === detective.targetId) : null;
  const saved = !!victimId && victimId === protectId;
  const deadId = saved ? null : victimId;
  return {
    acts, victimId, protectId, deadId, saved, tie,
    investigation: investigated ? { targetId: investigated.id, mafia: investigated.role === 'mafia', detectiveId: detective.playerId } : null,
    at: Date.now()
  };
}
function summarisePublic(room) {
  return room.history.filter(h => ['night', 'day'].includes(h.type)).map(h => ({ type: h.type, round: h.round, text: h.publicText, at: h.at }));
}
function view(room, who) {
  const narrator = who.type === 'narrator';
  const self = narrator ? null : room.players.find(p => p.id === who.id);
  const basicPlayers = room.players.map(p => ({ id: p.id, name: p.name, alive: p.alive }));
  const base = {
    code: room.code, narratorName: room.narrator.name, phase: room.phase, round: room.round,
    players: basicPlayers, totalPlayers: room.players.length, requiredActions: required(room).length,
    submittedActions: actionCount(room), allActions: allActions(room), winner: room.winner,
    history: summarisePublic(room), config: room.config,
    me: narrator ? { id: 'narrator', name: who.name, narrator: true } : {
      id: self.id, name: self.name, narrator: false, role: self.role, alive: self.alive,
      actionTarget: room.actions[self.id] || null,
      mafiaTeammates: self.role === 'mafia' ? room.players.filter(p => p.role === 'mafia' && p.id !== self.id).map(p => ({ id: p.id, name: p.name, alive: p.alive })) : []
    }
  };
  if (narrator) {
    base.roles = room.players.map(p => ({ id: p.id, name: p.name, role: p.role, alive: p.alive }));
    base.historyFull = room.history;
    base.actions = room.phase === 'night' && !allActions(room) ? null :
      required(room).map(p => ({ id: p.id, name: p.name, role: p.role, targetId: room.actions[p.id] || null }));
    base.nightResult = room.nightResult;
    base.maxMafia = maxMafia(room.players.length);
  } else {
    if (room.phase === 'day' || room.phase === 'day-complete' || room.phase === 'ended') {
      if (room.nightResult?.investigation?.detectiveId === self.id) {
        base.investigation = room.nightResult.investigation;
      }
    }
    if (room.phase === 'ended') base.revealedRoles = room.players.map(p => ({ id: p.id, role: p.role }));
  }
  return base;
}
function broadcast(room) {
  const list = streams.get(room.code);
  if (!list) return;
  for (const stream of [...list]) {
    try {
      const who = actor(room, stream.token);
      stream.res.write(`event: state\ndata: ${JSON.stringify(view(room, who))}\n\n`);
    } catch { list.delete(stream); try { stream.res.end(); } catch {} }
  }
}
function json(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
  res.end(JSON.stringify(body));
}
function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => { body += chunk; if (body.length > 32_000) { reject(Object.assign(new Error('Request too large.'), { status: 413 })); req.destroy(); } });
    req.on('end', () => { try { resolve(body ? JSON.parse(body) : {}); } catch { reject(Object.assign(new Error('Invalid JSON.'), { status: 400 })); } });
    req.on('error', reject);
  });
}
function authenticateRequest(data) { const room = getRoom(data.code); const who = actor(room, data.token); return { room, who }; }
async function api(req, res, url) {
  if (req.method === 'GET' && url.pathname === '/api/state') {
    const { room, who } = authenticateRequest(Object.fromEntries(url.searchParams)); return json(res, 200, view(room, who));
  }
  if (req.method === 'GET' && url.pathname === '/api/stream') {
    let room, who;
    try { ({ room, who } = authenticateRequest(Object.fromEntries(url.searchParams))); }
    catch (e) { return json(res, e.status || 400, { error: e.message }); }
    res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache, no-transform', 'Connection': 'keep-alive', 'X-Accel-Buffering': 'no' });
    res.write(`retry: 2200\nevent: state\ndata: ${JSON.stringify(view(room, who))}\n\n`);
    const subscriber = { token: url.searchParams.get('token'), res };
    if (!streams.has(room.code)) streams.set(room.code, new Set());
    streams.get(room.code).add(subscriber);
    const heartbeat = setInterval(() => { try { res.write(': keepalive\n\n'); } catch {} }, 18000);
    req.on('close', () => { clearInterval(heartbeat); streams.get(room.code)?.delete(subscriber); });
    return;
  }
  if (req.method !== 'POST') return json(res, 405, { error: 'Method not allowed.' });
  const data = await readBody(req);
  if (url.pathname === '/api/create') {
    if (rooms.size >= MAX_ROOMS) bad('Room limit reached; try again later.', 503);
    const name = sanitizeName(data.name);
    const room = { code: newCode(), narrator: { name, token: token() }, players: [], phase: 'lobby', round: 0,
      config: null, actions: {}, nightResult: null, history: [], winner: null, updatedAt: Date.now() };
    rooms.set(room.code, room); persist();
    return json(res, 200, { code: room.code, token: room.narrator.token, type: 'narrator' });
  }
  if (url.pathname === '/api/join') {
    const room = getRoom(data.code);
    if (room.phase !== 'lobby') bad('This game is already in progress.');
    if (room.players.length >= MAX_PLAYERS) bad('Room is full.');
    const name = sanitizeName(data.name);
    if (room.players.some(p => p.name.toLowerCase() === name.toLowerCase()) || room.narrator.name.toLowerCase() === name.toLowerCase()) bad('This name is taken.');
    const player = { id: uid(), token: token(), name, role: null, alive: true };
    room.players.push(player); touch(room);
    return json(res, 200, { code: room.code, token: player.token, type: 'player' });
  }
  const { room, who } = authenticateRequest(data);
  if (url.pathname === '/api/start') { requireNarrator(room, data.token); startGame(room, data.settings || {}); touch(room); return json(res, 200, { ok: true }); }
  if (url.pathname === '/api/action') {
    const player = requirePlayer(room, data.token);
    if (room.phase !== 'night') bad('Secret actions are closed.');
    if (!player.alive || !['mafia', 'doctor', 'detective'].includes(player.role)) bad('You do not have a night action.');
    const target = room.players.find(p => p.id === data.targetId);
    if (!target || !target.alive) bad('Choose a living player.');
    if (player.role === 'mafia' && target.role === 'mafia') bad('Mafia cannot target teammates.');
    room.actions[player.id] = target.id;
    touch(room); return json(res, 200, { ok: true });
  }
  if (url.pathname === '/api/resolve') {
    requireNarrator(room, data.token);
    if (room.phase !== 'night') bad('Not in the night phase.');
    if (!allActions(room) && data.force !== true) bad('Some players have not submitted.');
    room.nightResult = resolveNight(room);
    if (room.nightResult.deadId) {
      const fallen = room.players.find(p => p.id === room.nightResult.deadId);
      fallen.alive = false;
    }
    room.phase = 'day';
    const dead = room.players.find(p => p.id === room.nightResult.deadId);
    const publicText = dead ? `${dead.name} was eliminated during the night.` : 'Nobody was eliminated during the night.';
    room.history.push({ type: 'night', round: room.round, publicText, at: Date.now(), result: room.nightResult });
    room.winner = gameWinner(room);
    if (room.winner) room.phase = 'ended';
    touch(room); return json(res, 200, { ok: true });
  }
  if (url.pathname === '/api/eliminate') {
    requireNarrator(room, data.token);
    if (room.phase !== 'day') bad('Not in the discussion phase.');
    let publicText;
    if (data.targetId) {
      const target = room.players.find(p => p.id === data.targetId);
      if (!target || !target.alive) bad('Choose a living player.');
      target.alive = false;
      publicText = `${target.name} was eliminated by the group vote.`;
    } else publicText = 'The group voted to eliminate nobody.';
    room.history.push({ type: 'day', round: room.round, publicText, at: Date.now() });
    room.winner = gameWinner(room);
    room.phase = room.winner ? 'ended' : 'day-complete';
    touch(room); return json(res, 200, { ok: true });
  }
  if (url.pathname === '/api/next-night') {
    requireNarrator(room, data.token);
    if (room.phase !== 'day-complete') bad('Finish the voting first.');
    room.round += 1; room.phase = 'night'; room.actions = {}; room.nightResult = null;
    touch(room); return json(res, 200, { ok: true });
  }
  if (url.pathname === '/api/kick') {
    requireNarrator(room, data.token);
    if (room.phase !== 'lobby') bad('Can only remove players before starting.');
    const previous = room.players.length;
    room.players = room.players.filter(p => p.id !== data.playerId);
    if (room.players.length === previous) bad('Player not found.');
    touch(room); return json(res, 200, { ok: true });
  }
  if (url.pathname === '/api/reset') {
    requireNarrator(room, data.token);
    room.phase = 'lobby'; room.round = 0; room.actions = {}; room.nightResult = null; room.winner = null; room.history = []; room.config = null;
    room.players.forEach(p => { p.role = null; p.alive = true; });
    touch(room); return json(res, 200, { ok: true });
  }
  return json(res, 404, { error: 'Unknown API route.' });
}
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.webmanifest': 'application/manifest+json' };
function serveStatic(res, requestPath) {
  const routes = new Set(['/','/index.html','/app.js','/styles.css','/favicon.svg','/manifest.webmanifest']);
  if (!routes.has(requestPath)) return json(res, 404, { error: 'Not found.' });
  const file = path.join(ROOT, 'public', requestPath === '/' ? 'index.html' : requestPath.slice(1));
  fs.readFile(file, (err, data) => {
    if (err) return json(res, 404, { error: 'Not found.' });
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-cache', 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'no-referrer', 'Content-Security-Policy': "default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'none'" });
    res.end(data);
  });
}
if (IS_PRODUCTION && !process.env.MAFIA_DATA_DIR) console.warn('WARNING: MAFIA_DATA_DIR is not configured. Room data may be lost on deploy or restart. Attach a persistent volume.');
load();
const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    if (req.method === 'GET' && url.pathname === '/healthz') return json(res, 200, { status: 'ok' });
    if (url.pathname.startsWith('/api/')) return await api(req, res, url);
    if (req.method !== 'GET') return json(res, 405, { error: 'Method not allowed.' });
    serveStatic(res, url.pathname);
  } catch (err) {
    if (!res.headersSent && !res.destroyed) json(res, err.status || 500, { error: err.status ? err.message : 'Internal server error.' });
    if (!err.status) console.error(err);
  }
});
const cleanup = setInterval(() => {
  let changed = false;
  for (const [code, room] of rooms) if (Date.now() - room.updatedAt > EXPIRE_MS) { rooms.delete(code); streams.delete(code); changed = true; }
  if (changed) persist();
}, 60 * 60 * 1000);
cleanup.unref();
server.listen(PORT, HOST, () => console.log(`MAFIA NIGHTS ONLINE listening on ${HOST}:${PORT} (production=${IS_PRODUCTION})`));
