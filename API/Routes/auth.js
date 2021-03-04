const express = require('express');
const Usuario = require('../Models/usuario_model');
const bcrypt = require('bcrypt');

const ruta = express.Router();