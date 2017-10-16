# Tank3-python

This is the new version of [Tank3](https://www.github.com/Billijk/Tank3), a real-time HTML tank shooting game. This version is built upon [Tornado]() (as backend) and [Nodejs]() (as frontend), conducting full-duplex communication with WebSocket protocal.

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
2. Start server:
```bash
cd ../server
python server.py [--port PORT] [--debug]
```
3. Have fun!