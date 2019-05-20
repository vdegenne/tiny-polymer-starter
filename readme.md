## Usage

### Back server

You need `pm2` to be installed globally to run the server

- Change information in `.server`
  - first line : server name (for pm2)
  - second line : server port (don't add a new line)
- `chmod +x serve.sh` to make the script if not already executable
- `./serve.sh` to start the server

(note: remove `--watch` from the command in *server.sh* if you wish to disable server restart on files change)

### Front-end (development)

- `yarn polymer` (use `-p` to change the front port)

### Front-end (production)

To build the front

`yarn build`

After building you can request the application from the backend urls (see *Back server* above)