# Mafia Nights · Online Edition (v2.0)

Private online rooms with a six-character invite code, secret randomized roles, live night action submission, an omniscient narrator screen, and **in-person finger voting**. Supports Arabic and English, browsers on different networks, and mobile phones. **The server must be deployed to the internet before guests can join from anywhere.**

## Experience

1. Narrator opens the public website and clicks **Create room**.
2. Players open the generated invite URL (`https://YOUR-SITE/?room=ABC123`) or visit the site and enter the code.
3. Narrator sees people joining in real time; chooses Mafia count, Doctor and Detective; presses Start.
4. Players privately reveal roles and submit their secret night targets using their own phones.
5. Narrator receives submitted actions and resolves the night; the system calculates Doctor protection, Mafia attack and Detective investigation.
6. Everyone talks and votes **in person**; narrator enters who was eliminated (or nobody). Continue to next night, or reset the same room to play again.

Private roles and full actions are only available to the authorized player or narrator. Players reconnect to their existing session if their browser refreshes (as long as local browser storage isn't cleared).

## Deploy live to Railway (recommended for a small squad)

1. Put the **contents of this folder** in the root of a private GitHub repository (do not upload the ZIP as one file to GitHub).
2. Open [Railway](https://railway.com/), create a project using **Deploy from GitHub Repo**, and select that repository.
3. In Railway, create a **Volume** for this service and mount it at `/data`. Under the service's **Variables**, set `MAFIA_DATA_DIR=/data` and `NODE_ENV=production`. This keeps game rooms after deployments and restarts.
4. In **Settings → Networking**, generate a public HTTPS domain. `PORT` is provided automatically and is already supported by the server.
5. Open that new domain, create a lobby, and send the invite link to your friends. Everyone can play from different networks. The `railway.json` file specifies the start command and health check.
6. Run **one service instance/replica**: this MVP keeps active room state in that process's memory, while persisting it to disk; do not enable horizontal replicas without migrating state to a shared data store.

Railway hosting requires an account, and its compute/volume usage may incur charges. This ZIP is **deployment-ready but not already publicly hosted**.

## Alternative: Render

`render.yaml` describes a Node web service with a `/healthz` check and a persistent disk mounted at `/var/data`. Connect the GitHub repository to Render using its Blueprint deployment workflow. **Persistent disks require a paid Render service**; without persistent storage, rooms may disappear on redeploy. A single instance is required.

## Local testing

Install Node.js 18+, open a terminal in this folder, and run:

```bash
npm start
```

Go to `http://localhost:3000`. To test from phones over local Wi-Fi use your computer's LAN IP rather than localhost. Run all gameplay tests with `npm test`.

## Defaults

- 4–20 players plus narrator.
- 1+ Mafia, with optional Doctor and Detective and at least one Citizen.
- Each Mafia chooses a target; most votes wins. A tie produces no kill.
- Doctor can protect self or another player. Detective sees whether their pick is Mafia after night resolution.
- The real-life vote is recorded by the narrator; the site checks the winner and supports rematches.
- Rooms expire after 48h of inactivity.

## Security and hosting notes

- Serve the game only via HTTPS on public networks. Code and session tokens are secret credentials; don't share narrator tokens, server state files, or browser storage.
- Rooms are private-by-link, not password protected. This version is intended for a known squad, not high-traffic public self-service hosting. For open public use, add account recovery, abuse prevention, anti-automation rate limiting, monitoring and a shared database.
- Current synchronization uses Server-Sent Events (SSE); unlike WebSockets, it operates over standard HTTP reverse proxies that support streaming.
- Rooms persist in `MAFIA_DATA_DIR/rooms.json`; **the path must be on persistent storage**, not an ephemeral deployment filesystem.
- Do not deploy only the `public/` directory; the `server.js` process performs gameplay, authorization, and real-time synchronization.

## Project files

`server.js` (private multiplayer server), `public/` (responsive app), `railway.json` (Railway settings), `render.yaml` (Render service+disk), `test/smoke.js` (gameplay tests), `start-windows.bat` (Windows local launch). No third-party runtime dependencies are needed.
