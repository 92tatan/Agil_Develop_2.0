import mongoose from 'mongoose';
const { Schema } = mongoose;

const usuarioSchema = new Schema({
    Nombres:{type: String,required: true,},
    Apellidos:{type: String,required: true,},
    Documento:{type: Number,required: true,},
    Email:{type: Number,required: true,},
    Rol:{type: String,required: true,},
    Status:{type: String,required: true,},
    Password:{type: String,required: true,}
});

// crear modelo Usuarios

const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;