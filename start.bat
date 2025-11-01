@echo off
title Ashy Thoughts - Full Stack Blog App
color 0A
echo.
echo 🌿 Starting Ashy Thoughts Blog App...
echo.

:: Start the backend
cd backend
echo 🚀 Launching backend server...
start cmd /k "node server.js"
cd ..

:: Wait a little before starting frontend
timeout /t 2 /nobreak >nul

:: Start the frontend
cd frontend
echo 💻 Launching React frontend...
start cmd /k "npm start"
cd ..

echo.
echo ✅ Both servers are running! 
echo Open your browser at: http://localhost:3000/
echo.
pause
