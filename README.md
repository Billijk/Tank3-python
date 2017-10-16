# Tank3-python

This is the new version of [Tank3](https://www.github.com/Billijk/Tank3), a real-time HTML tank shooting game. This version is built upon [Tornado](http://www.tornadoweb.org/) (as backend) and [Nodejs](https://nodejs.org/) (as frontend), conducting full-duplex communication using WebSocket protocol.

### Requirements
1. Python 2.7 with Tornado package installed
2. NodeJS

### How to run
1. Install site packages and compile client codes:
```bash
cd client
npm install
gulp
```
2. Start Tornado server:
```bash
cd ../server
python server.py [--port PORT] [--debug]
```
3. Have fun!