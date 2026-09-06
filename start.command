#!/bin/sh
cd "$(dirname "$0")"
PORT="${PORT:-4173}"
if command -v python3 >/dev/null 2>&1; then
  open "http://127.0.0.1:${PORT}/"
  echo "STARTO 好き顔セレクションを http://127.0.0.1:${PORT}/ で起動中。終了するには Ctrl+C。"
  python3 -m http.server "$PORT"
else
  echo "Python 3 が必要です。"
  read -r _
fi
