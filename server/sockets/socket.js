const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario Conectado');

    client.emit('messageCli', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido'
    });

    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    });

    // Escuchar cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        // client.emit('messageCli', data);
        client.broadcast.emit('messageCli', data);
        // if (data.usuario) {
        //     callback({
        //         resp: 'Todo salio bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salió mal!!!'
        //     })
        // }
    });
});