@echo off
echo O'zbekiston Davlat Konservatoriyasi - Start Script
echo.

start cmd /k "cd backend && npm install && npm run dev"
timeout /t 5
start cmd /k "cd frontend && npm install && npm run dev"

echo Backend va Frontend yangi oynada ochilmoqda...
echo.
echo URL: http://localhost:5173
pause
