const WebSocket = require('ws');

const server = new WebSocket.Server({
    port: 3000,
});

// Handling Connection Events

server.on('connection', (socket) => {
    console.log('client connected');
});

// Receiving and Sending Messages

server.on('connection', (socket) => {
    socket.on('message', (message) => {
        console.log(message.toString());
    });
});

// You can send data back to a client using the send() method:

socket.send('Hello from the server');

// Handling Close and Error Events
// close is triggered when a connection closes:
socket.on('close', () => {
    console.log('disconnected');
});


// error is triggered when something goes wrong:

socket.on('error', (error) => {
    console.error(error);
});

// Checking Connection State

if (client.readyState === WebSocket.OPEN) {
    // DO SOMETHING
}

// FOR EXAMPLE
server.on('connection', (socket) => {
    socket.on('message', (message) => {
        server.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN){
                client.send(message.toString());
            }
        });
    });
});
