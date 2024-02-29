const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

const WebSocket = require('ws');

function setupWebSocketServer(server) {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws) => {
        console.log('Client connected');

        ws.on('message', (message) => {
            console.log('Received message:', message+"");

            // Broadcast message to all clients
            ws.send("Server recieved: "+message)
        });

        ws.on('close', () => {
            console.log('Client disconnected');
        });
    });
}

// Set up WebSocket server
setupWebSocketServer(server);

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
