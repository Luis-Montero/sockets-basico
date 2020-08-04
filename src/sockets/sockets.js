const { io } = require('../main');

io.on('connection', (client) => {

    console.log('----connected user-----');

    client.emit('enviarMensaje', {
        usuario: 'admin',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    client.on('disconnect', () => {

        console.log('>>>desconnected user<<<');
    });

    //Escuchar el cliente

    client.on('enviarMensaje', (mensaje, callback) => {
        console.log(mensaje);

        if (!callback) return; // evitar que ocurra error si mensaje del cliente no se hizo con callback

        // si el cliente remoto envio mensaje con peticion de confirmacion en 'callback' en parametro 3 entonces:
        if (mensaje.usuario) {
            callback({
                resp: 'TODO SALIO BIEN' // validacion positiva
            });
        } else {
            callback({
                resp: 'ATENCION!El mensaje NO contiene la llave: usuario' // validacion negativa
            });
        }
    });
});