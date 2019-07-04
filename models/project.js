'use strict'

//Modelo para base de datos
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    langs: String,
    year: Number,
    image: String
});

module.exports = mongoose.model('projects',ProjectSchema);