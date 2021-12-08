
const express = require('express');
const path = require('path');
require('dotenv').config(); //lee .env y graba ,lee las variables de entorno

// App de Express
const app = express();  //lo inicializa y estoy listo para escuchar peticiones


// me creo el servidor de sockets
// Node server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');



// Path publico
const publicPath = path.resolve( __dirname, 'public' )

app.use( express.static( publicPath) );





server.listen(process.env.PORT, ( err ) =>{    //err es el callback de algun error si sucede!

    if ( err ) throw new Error(err); //lo miramos en consola

    console.log('Servidor corriendo en puerto!!!', process.env.PORT);

})