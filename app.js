'use strict'
/*
Archivo creado para gurdar las configuraciones de express y las peticiones de
body-parser.
*/

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Archivos Rutas
var project_routes = require('./routes/project');

//Middelware: Métedo que se ejecuta antes que la acción del controldor de backend
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//CORS


//Rutas
app.use('/',project_routes);

// app.get('/',(req,res)=>{
//     res.status(200).send(
//         '<h1>Página de Inicio</h1>'
//     );
// });

// app.get('/test',(req,res)=>{
//     res.status(200).send({
//         message: 'Hola mundo desde API NodeJS'
//     });
// });

//Exportar
module.exports = app;