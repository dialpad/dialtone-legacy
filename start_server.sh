SERVER_PORT=$1

if [[ -z "$SERVER_PORT" ]]; then
  SERVER_PORT=8080;
fi;

echo "starting local server on http://localhost:${SERVER_PORT} (mash CTRL + C to stop)"
python -m SimpleHTTPServer $SERVER_PORT


