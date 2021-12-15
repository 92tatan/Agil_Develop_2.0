import mongoose from 'mongoose';
const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    Nombres: {
        type: String,
        required: true
    },
    Apellidos: {
        type: String,
    },
    Documento: {
        type: Number,
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


const Usuarios= mongoose.model('usuarios', UsuarioSchema );

export default Usuarios;