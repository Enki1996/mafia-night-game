'use strict';
const assert = require('node:assert/strict');
const { spawn } = require('node:child_process');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

const port = 40000 + Math.floor(Math.random() * 20000);
const base = `http://127.0.0.1:${port}`;
const dataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'mafia-prod-test-'));
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
let child;
async function start() {
  child = spawn(process.execPath, ['server.js'], {
    cwd: path.join(__dirname, '..'),
    env: { ...process.env, PORT: String(port), HOST: '127.0.0.1', NODE_ENV: 'production', MAFIA_DATA_DIR: dataDir },
    stdio: 'pipe'
  });
  child.stderr.on('data', data => process.stderr.write(data));
  for (let tries = 0; tries < 80; tries++) {
    try {
      const response = await fetch(`${base}/healthz`);
      if (response.ok) return;
    } catch {}
    await delay(70);
  }
  throw new Error('Production service did not start');
}
async function stop() {
  if (!child) return;
  const previous = child;
  child = null;
  await new Promise(resolve => {
    previous.once('exit', resolve);
    previous.kill('SIGTERM');
    setTimeout(resolve, 1500).unref();
  });
}
async function main() {
  await start();
  const response = await fetch(`${base}/api/create`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: 'Narrator' })
  });
  assert.equal(response.status, 200);
  const session = await response.json();
  assert.equal((await (await fetch(`${base}/healthz`)).json()).status, 'ok');
  await stop();
  await start();
  const restored = await fetch(`${base}/api/state?code=${session.code}&token=${encodeURIComponent(session.token)}`);
  assert.equal(restored.status, 200);
  assert.equal((await restored.json()).phase, 'lobby');
  assert(fs.existsSync(path.join(dataDir, 'rooms.json')));
  console.log('PASS: production health check and room/session persistence across process restart.');
}
main().catch(e => { console.error(e); process.exitCode = 1; }).finally(async () => {
  await stop();
  fs.rmSync(dataDir, { recursive: true, force: true });
});
