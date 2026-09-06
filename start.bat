@echo off
cd /d "%~dp0"
set PORT=4173
where py >nul 2>nul
if %errorlevel%==0 (
  echo STARTO 好き顔セレクションを http://127.0.0.1:%PORT%/ で起動します。
  start "" "http://127.0.0.1:%PORT%/"
  py -m http.server %PORT%
  goto :eof
)
where python >nul 2>nul
if %errorlevel%==0 (
  echo STARTO 好き顔セレクションを http://127.0.0.1:%PORT%/ で起動します。
  start "" "http://127.0.0.1:%PORT%/"
  python -m http.server %PORT%
  goto :eof
)
echo Python 3 が必要です。https://www.python.org/downloads/ からインストールしてください。
pause
