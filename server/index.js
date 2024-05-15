// server\server.js
const express = require('express');
const app = express();
const PORT = 5000;

const socketIo = require('socket.io');


const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const io = socketIo(server, {
    cors: true
});

io.on('connection', (socket) => {
    socket.on('canvasImage', (data) => {
        socket.broadcast.emit('canvasImage', data);
    });
})