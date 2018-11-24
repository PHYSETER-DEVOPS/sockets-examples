var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Escuchar sucesos 'on'
socket.on('disconnect', function() {
    console.log('Connection Lost');
});

// Para enviar informacion - No caracteres especiales
socket.emit('enviarMensaje', {
    usuario: 'Pablo',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Server response: ', resp);
});

//Escuchar infromacion
socket.on('messageCli', function(mensaje) {
    console.log('Server', mensaje);
});