const port = require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

const app = express();


let server = http.createServer(app);

//IO= comunicacion del backend

module.exports.io = socketIO(server);
require('./sockets/sockets');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


////middlewares
app.use(express.json());


// static file
app.use(express.static(path.join(__dirname, '../public')));


//listening
server.listen(process.env.PORT, (req, res) => {

    console.log(`Server on port: ${process.env.PORT}`);
});