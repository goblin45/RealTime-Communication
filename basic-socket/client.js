const { io } = require('socket.io-client')

const socket = io('http://localhost:3000')
socket.on('connect', () => {
    console.log('new connection with server ' + socket.id)
    socket.emit('send-message', 'hello')
})
socket.on('blue-tick', () => {
    console.log('message has been read')
})