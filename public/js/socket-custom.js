var socket = io();

socket.on('connect', function() {

    console.log('Conectado al servidor');


    //escuchar
    socket.on('disconnect', function() {

        console.log('Conexion con el servidor PERDIDA');

    });

    //Enviar Informacion

    socket.emit('enviarMensaje', {
        usuario: 'Damon',
        mensaje: 'Hola Mundo'
    }, function(resp) {

        console.log('respuesta server: ', resp);

    });

    //Escuchar Informacion
    socket.on('enviarMensaje', function(mensaje) {

        console.log('servidor: ', mensaje);

    });


});