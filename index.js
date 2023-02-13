// Importaciones necesarias
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();



// Crear el servidor/Aplicacion de Express
const app = express();

// CORS
app.use( cors() );

// Lectura y Parseo del body
app.use( express.json() );

// Rutas
app.use( '/api/auth', require('./routes/auth'));


// Apertura del puerto en escucha
app.listen( process.env.PORT , ()=>{
    console.log(`Servidor corriendo en el puerto -> ${ process.env.PORT }`)
});

