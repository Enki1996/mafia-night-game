'use strict';
const assert = require('node:assert/strict');
const { spawn } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');

const PORT = 32000 + Math.floor(Math.random() * 10000);
const URL = `http://127.0.0.1:${PORT}`;
const testDir = fs.mkdtempSync(path.join(os.tmpdir(),'mafia-test-'));
let server;
const sleep = (n) => new Promise(r => setTimeout(r, n));
async function post(route, body, status=200) {
  const res = await fetch(`${URL}/api/${route}`, {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
  const payload = await res.json();
  assert.equal(res.status,status,`${route}: ${JSON.stringify(payload)}`);
  return payload;
}
async function state(session) {
  const res = await fetch(`${URL}/api/state?code=${session.code}&token=${encodeURIComponent(session.token)}`);
  assert.equal(res.status,200);
  return res.json();
}
async function main() {
  server = spawn(process.execPath,['server.js'],{cwd:path.resolve(__dirname,'..'),env:{...process.env,PORT:String(PORT),HOST:'127.0.0.1',MAFIA_DATA_DIR:testDir},stdio:'pipe'});
  server.stderr.on('data',d=>process.stderr.write(d));
  for(let i=0;i<50;i++) {try{await fetch(URL);break;}catch{await sleep(80);}}
  const host=await post('create',{name:'Narrator'});
  assert.equal(host.code.length,6);
  const players=[];
  for(let i=0;i<6;i++)players.push(await post('join',{name:`Player${i+1}`,code:host.code}));
  await post('join',{name:'Player1',code:host.code},400);
  let hostState=await state(host);
  assert.equal(hostState.phase,'lobby');
  assert.equal(hostState.totalPlayers,6);
  const c = new AbortController();
  const events = await fetch(`${URL}/api/stream?code=${host.code}&token=${encodeURIComponent(host.token)}`,{signal:c.signal});
  assert.equal(events.headers.get('content-type'), 'text/event-stream');
  const reader = events.body.getReader();
  const firstEvent = new TextDecoder().decode((await reader.read()).value);
  assert(firstEvent.includes('event: state'));
  c.abort();
  await post('start',{...host,settings:{mafiaCount:2,doctor:true,detective:true}});
  hostState=await state(host);
  assert.equal(hostState.phase,'night');
  assert.equal(hostState.roles.filter(x=>x.role==='mafia').length,2);
  assert.equal(hostState.roles.filter(x=>x.role==='doctor').length,1);
  assert.equal(hostState.roles.filter(x=>x.role==='detective').length,1);
  const statuses=await Promise.all(players.map(state));
  assert(statuses.every(s=>!('roles' in s)),'Players must not see whole secret role ledger');
  assert(statuses.every(s=>!('actions' in s)),'Players must not see all night actions');
  const byRole=(role)=>statuses.map((s,i)=>({s,session:players[i]})).filter(x=>x.s.me.role===role);
  const mafias=byRole('mafia');
  const doctor=byRole('doctor')[0];
  const detective=byRole('detective')[0];
  const towns=statuses.map((s,i)=>({s,session:players[i]})).filter(x=>x.s.me.role!=='mafia');
  const victim=towns[0].s.me.id;
  await post('action',{...mafias[0].session,targetId:mafias[1].s.me.id},400);
  for(const mafia of mafias)await post('action',{...mafia.session,targetId:victim});
  await post('action',{...doctor.session,targetId:victim});
  await post('action',{...detective.session,targetId:mafias[0].s.me.id});
  hostState=await state(host);
  assert.equal(hostState.allActions,true);
  assert.equal(hostState.submittedActions,4);
  assert.equal(hostState.actions.length,4);
  await post('resolve',host);
  hostState=await state(host);
  assert.equal(hostState.phase,'day');
  assert.equal(hostState.nightResult.saved,true);
  assert.equal(hostState.players.filter(x=>!x.alive).length,0);
  const detection=await state(detective.session);
  assert.equal(detection.investigation.mafia,true);
  const citizenStatus=await state(towns.find(x=>x.s.me.role==='citizen').session);
  assert.equal('investigation' in citizenStatus,false,'Only detective gets private investigation result');
  await post('eliminate',{...host,targetId:mafias[0].s.me.id});
  hostState=await state(host);
  assert.equal(hostState.phase,'day-complete');
  await post('next-night',host);
  hostState=await state(host);
  assert.equal(hostState.round,2);
  assert.equal(hostState.requiredActions,3);
  assert.equal(hostState.submittedActions,0);
  // Force resolve supports a disconnected participant; then Mafia wins if parity reached.
  await post('resolve',host,400);
  await post('resolve',{...host,force:true});
  hostState=await state(host);
  assert.equal(hostState.phase,'day');
  await post('eliminate',{...host,targetId:mafias[1].s.me.id});
  hostState=await state(host);
  assert.equal(hostState.phase,'ended');
  assert.equal(hostState.winner,'town');
  const endPlayer=await state(players[0]);
  assert.equal(endPlayer.revealedRoles.length,6);
  await post('reset',host);
  hostState=await state(host);
  assert.equal(hostState.phase,'lobby');
  assert(hostState.roles.every(p=>p.role===null));
  const html=await (await fetch(URL)).text();
  assert(html.includes('Mafia Nights'));
  const js=await (await fetch(`${URL}/app.js`)).text();
  assert(js.includes('renderLobby'));
  console.log('PASS: join, private roles, Mafia teammates, actions, Doctor save, Detective result, in-person vote, next round, win detection, reset and static app.');
}
main().catch(err=>{console.error(err);process.exitCode=1;}).finally(()=>{
  if(server)server.kill('SIGTERM');
  try{fs.rmSync(testDir,{recursive:true,force:true});}catch{}
});
