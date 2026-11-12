@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is required. Download it from https://nodejs.org/
  echo After installing Node.js, run this file again.
  pause
  exit /b 1
)
echo Starting Mafia Nights. Keep this window open while playing.
echo Open http://localhost:3000 on this computer.
echo For phones on the same Wi-Fi, use http://YOUR-PC-IP:3000
node server.js
pause
