const express = require('express');
const Usuario = require('../Models/usuario_model');
const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const ruta = express.Router();

ruta.use(cors());

const schema = Joi.object({
    sub: Joi.string()
        .min(10)
        .required(),
    nickname: Joi.string()
        .min(5)
        .required()
});

ruta.get('/', (req, res) => {
    let resultado = listarUsuarios();
    resultado
        .then(usuarios => {
            res.json(usuarios);
        })
        .catch(error => {
            res.status(400).json({
                error
            });
        });

});

ruta.post('/', (req, res) => {

    const { error, usuario } = schema.validate({
        sub: req.body.sub,
        nickname: req.body.nickname
    });

    if (!error) {

        Usuario.findOne({ sub: req.body.sub })
            .then(usuario => {
                if (usuario) {
                    const jwtoken = jwt.sign({
                        data: { _id: usuario._id, nickname: usuario.nickname }
                    }, 'Token', { expiresIn: 60 * 60 });
                    res.json({
                        usuario,
                        jwtoken
                    });
                    //.send(jwtoken);
                } else {
                    let resultado = crearUsuario(req.body);
                    resultado
                        .then(user => {
                            const jwtoken = jwt.sign({
                                data: { _id: user._id, nickname: user.nickname }
                            }, 'Token', { expiresIn: 60 * 60 });
                            res.json({
                                ususario: user,
                                jwtoken
                            });
                            //.send(jwtoken);
                        })
                        .catch(err => {
                            res.status(400).json({
                                error: err
                            });
                        });
                }
            })
            .catch(error => {
                res.status(400).json({
                    error
                });
            });



    } else {
        res.status(400).json({
            error
        });
    }


});

ruta.delete('/:sub', (req, res) => {
    let resultado = desactivarUsuario(req.params.sub);
    resultado
        .then(usuario => {
            res.json({
                usuario
            });
        })
        .catch(error => {
            res.status(400).json({
                error
            });
        });
});

async function listarUsuarios() {
    let usuarios = await Usuario
        .find({ "estado": true })
        .select({ "nickname": 1, "sub": 1, "_id": 0 });
    return usuarios;
}

async function crearUsuario(body) {
    let usuario = new Usuario({
        sub: body.sub,
        nickname: body.nickname,
    });
    return await usuario.save();
}

async function desactivarUsuario(sub) {
    let usuario = await Usuario.findOneAndUpdate({ sub }, {
        $set: {
            estado: false
        }
    }, { new: true });
    return usuario;
}


module.exports = ruta;