@echo off
cd /d "%~dp0"
echo.
echo  PDF Tools - local server
echo  Open in browser:  http://localhost:8080/
echo  Press Ctrl+C to stop.
echo.
where py >nul 2>&1
if not errorlevel 1 (
  py -m http.server 8080
  exit /b %errorlevel%
)
where python >nul 2>&1
if not errorlevel 1 (
  python -m http.server 8080
  exit /b %errorlevel%
)
echo Python was not found. Use IIS or install Python locally.
if errorlevel 1 (
  echo Server failed to start.
  pause
  exit /b 1
)
