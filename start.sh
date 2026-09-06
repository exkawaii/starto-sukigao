#!/bin/sh
set -eu
cd "$(dirname "$0")"
PORT="${PORT:-4173}"
if command -v python3 >/dev/null 2>&1; then
  BROWSER_PYTHON=python3
elif command -v python >/dev/null 2>&1; then
  BROWSER_PYTHON=python
else
  echo "Python 3 が必要です。https://www.python.org/downloads/ からインストールしてください。"
  exit 1
fi
echo "STARTO 好き顔セレクションを http://127.0.0.1:${PORT}/ で起動します。"
"$BROWSER_PYTHON" -m http.server "$PORT"
