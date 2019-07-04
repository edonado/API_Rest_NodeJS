'use strict'


//Cargar archivos y variables para servidor
var app = require('./app.js');
var port = 3700;

//Conexión con base de datos MongoDB
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Portafolio') //Dirección de la DB
        .then(() => {
            console.log('**** Conexión con DataBase Exitosa ****');

            //Creación del Servidor
            app.listen(port,() =>{
                console.log('Servidor corriendo en URL = localhost:3700');

            });

        })
        .catch(e => console.log(e)); //Error
        