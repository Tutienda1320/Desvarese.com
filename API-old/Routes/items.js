const express = require('express');
const Usuario = require('../Models/usuario_model');
const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const ruta = express.Router();

let json = "";

ruta.post('/', (req, res) => {

    json = req.body;
    console.log(json);
    res.json(json);

});

ruta.get('/', (req, res) => {
    res.json(json);
});

module.exports = ruta;