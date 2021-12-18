import mongoose, { model, Model } from 'mongoose'
import { Enum_EstadoUsuario, Enum_Rol } from './enums';
const { Schema } = mongoose;


interface usuario{
    Nombres: String;
    Apellidos: String;
    Documento: Number;
    Email: string;
    Rol: Enum_Rol;
    Status: Enum_EstadoUsuario;
}

const UsuarioSchema = new Schema<usuario>({
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
        enum: Enum_Rol,
    },
    Status: {
        type: String,
        required: true,
        enum : Enum_EstadoUsuario,
        default: Enum_EstadoUsuario.PENDIENTE,
    },
    Password: {
        type: String,
        required: true
    }
});
const UserModel =  model("usuarios", UsuarioSchema);

export  {UserModel};
