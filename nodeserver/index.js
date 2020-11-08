// DdD
const io = require('socket.io')(8000);

const users = {};


io.on('connection', socket => {

    socket.on('new-user-enter', name => {

        users[socket.id] = name;
        socket.broadcast.emit('user-enter', name);
    });

    socket.on("written", message => {

        socket.broadcast.emit('detail', { message:message , name: users[socket.id]});
    });
    
    socket.on("disconnect", message => {

        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    });


})