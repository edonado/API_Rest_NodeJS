'use strict'
//Controlador de backend para el proyecto//

var Project = require('../models/project');

var controller = {

    home: function(req,res){
        return res.status(200).send({

            message: 'Home'
        });
    },
    
    test: function(req,res){
        return res.status(200).send({

            message: 'Test'
        });
    },
    
    saveProject: function(req,res){
        var project = new Project();
        
        //Adquirir para pruebas mediante software PostMan
        var params = req.body;
        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.year = params.year;
        project.langs = params.langs;
        project.image = null;

        //Guardar en la base de datos
        project.save((err,projectStored) => {
            if(err) return res.status(500).send({message:'Error al guardar documento'});

            if(!projectStored) return res.status(404).send({message:'Proyecto no guardado'});

            return res.status(200).send({project:projectStored});
        });
    },

    getProject: function(req,res){
        var projectID = req.params.id;

        if(projectID == null){
            return res.status(404).send({message: 'Favor Ingrese un ID'});
        }
        
        Project.findById(projectID,(err,project) => {
            if(err) return res.status(500).send({message:'Error al traer datos / ID no válido'});
            
            if(!project) return res.status(404).send({message: 'El projecto no existe'});

            return res.status(200).send({
                project
            });
        });  
    },

    getProjects:function(req,res){
        
        Project.find({category: 'Desarrollo web'}).sort('year').exec((err,projects) => {
            if(err) return res.status(500).send({message:'Error al devolver datos'});
            
            if(!projects) return res.status(404).send({message: 'No hay coincidencia'});

            return res.status(200).send({
                projects
            });
        });
    }
};

module.exports = controller;