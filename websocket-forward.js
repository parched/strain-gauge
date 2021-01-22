const ws = require('websocket-stream');
const net = require('net');

const wss = new ws.Server({ port: 8080 }, onSocketConnect);
console.log('server started');

function onSocketConnect(websocket) {
    console.log('new connection');

    const server = net.createServer();
    server.listen(5555, function () {
        console.log('server listening to %j', server.address());
    });

    server.on('connection', function (tcps) {
        var remoteAddress = tcps.remoteAddress + ':' + tcps.remotePort;
        console.log('new client connection from %s', remoteAddress);
        websocket.pipe(tcps).pipe(websocket);
    });
}
