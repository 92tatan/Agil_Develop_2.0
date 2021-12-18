const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    Nombres: {
        type: String,
        required: true
    },
    Apellidos: {
        type: String,
    },
    Documento: {
        type: String,
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Rol: {
        type: String,
        required: true,
    },
    Status: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true
    }
});


module.exports = model('Usuario', UsuarioSchema );

