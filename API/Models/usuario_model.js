const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    sub: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Usuario', usuarioSchema);