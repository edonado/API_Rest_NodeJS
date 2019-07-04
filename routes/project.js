'use strict'

//Archivo para ayudar a gestionar Rutas//


var express = require('express');
var ProjectController = require('../Controllers/project');

//"Enrutador"
var router = express.Router();

//Routas y métodos
router.get('/home',ProjectController.home);
router.post('/test',ProjectController.test);
router.post('/save-project',ProjectController.saveProject);
    /*Los : señalan un parámetro que se le debe introducir a la url para hacer la petición
    Se puede hacer opcional agegando un sigo de ? después de éste*/
router.get('/project/:id?',ProjectController.getProject);
router.get('/projects',ProjectController.getProjects);


module.exports = router;
