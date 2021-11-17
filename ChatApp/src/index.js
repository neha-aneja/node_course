const express = require('express')
const http = require('http')
const path = require('path')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const port = process.env.port || 3000
const publicDirectoryPath = path.join(__dirname, '../public')
const io = socketio(server)

app.use(express.static(publicDirectoryPath))
io.on('connection', () => {
    console.log('new web socket connection');
})

server.listen(port, () => {
    console.log(`server is up on port ${port}!`);
})