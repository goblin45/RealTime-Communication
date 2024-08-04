const io = require('socket.io') (3000, {
    cors: {
        origin: '*'
    }
})

io.on('connection', socket => {
    console.log('new connection with client ' + socket.id)
    socket.on('send-message', (message) => {
        console.log(message)
        io.emit('blue-tick', message)
    })
})

