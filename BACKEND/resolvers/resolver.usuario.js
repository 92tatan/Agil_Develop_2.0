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
        const usuarioCreado = await Usuarios.create({
            Nombres: args.Nombres,
            Apellidos : args.Apellidos,
            Documento : args.Documento,
            Email : args.Email,
            Status: args.Status,
            Rol : args.Rol,
            Password : args.Password,

        });
        return usuarioCreado;
};

const editarUsuario = async (parent, args) =>{
    const modificarUsuario = await Usuarios.findOneAndUpdate(args._id,{
    Nombres: args.Nombres,
    Apellidos : args.Apellidos,
    Documento : args.Documento,
    Email : args.Email,
    Status: args.Status,
    Rol : args.Rol,
    Password : args.Password,
    });
    return modificarUsuario;

};
const ModificarEstadoUsuario = async (parent, args) => {
    const Modifuser = await Usuarios.findOneAndUpdate({Status:args.Status},{$set:{Estado_usuario:args.Estado_usuario}},{new:true});
    console.log(`Estado de usuario ${args.Status} modificado a ${args.Estado_usuario}` );
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
        ModificarEstadoUsuario,
        login,
    },
 };