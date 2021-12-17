import Usuarios from "../models/model.usuario.js";
//import Usermodel from "../models/model.usuario.js";
//import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
//import { AuthenticationError, ForbiddenError } from 'apollo-server';


const AllUsuarios = async () => {
    console.log("llega hasta aqui")
    const usuarios = await Usuarios.find();
    return usuarios;
};

const UsuarioxId = async (parent,args) => {
    //let id=1
    console.log(`Valor de los argumentos ${args}`)
    const usuaid = await Usuarios.findOne({Documento:args.Documento});
    console.log(`Valor de   ${usuaid}`)
    return usuaid;
};


const crearUsuario =  async (parent, args) =>{
        const esta = "PENDIENTE"
        const usuarioCreado = await Usuarios.create({
            Nombres: args.Nombres,
            Apellidos : args.Apellidos,
            Documento : args.Documento,
            Email : args.Email,
            Status: esta,
            Rol : args.Rol,
            Password : args.Password,

        });
        return usuarioCreado;
};


const editarUsuario = async (parent, args) => {
    const editusua = await Usuarios.findOneAndUpdate({Documento:args.Documento},{$set:{Nombres:args.Nombres, Apellidos:args.Apellidos, Documento:args.Documento, Email:args.Email, Rol:args.Rol, Password:args.Password}},{new:true});
    console.log(`Usario ${args.Nombres} ${args.Apellidos} ha editado su datos` );
    return editusua;
};
const Modifuser = async (parent, args) => {
    const Modifuser = await Usuarios.findOneAndUpdate({Documento:args.Documento},{$set:{Status:args.Status}},{new:true});
    console.log(`Estado de usuario ${args.Documento} modificado a ${args.Status}` );
    return Modifuser;
    };


    const login = async (parent, args) => {
        const user = await Usuarios.findOne({ Email: args.Email });
        if (!user) {
          throw new Error('User not found');
        }
        const isValid = await Usuarios.findOne({Password: args.Password });
        if(!isValid) {
          throw new Error('Wrong password');
        }
        const token = await jwt.sign(
          { user },
          // eslint-disable-next-line no-undef
          process.env.SECRET,
          { expiresIn: '30m' }
        );
        return token;
      }; 


    

export default {
    Queriesusuario: {
        AllUsuarios,
        UsuarioxId,
       //loginUsuario,
    },
    Mutationsusuario: {
        crearUsuario,
        editarUsuario,
        Modifuser,
        login,
    },
 };