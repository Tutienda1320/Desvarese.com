const express = require('express');
const Usuario = require('../Models/usuario_model');
const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const ruta = express.Router();


ruta.post('/', (req, res) => {

    res.json(req.body);

});

module.exports = ruta;