import { UserModel } from "../models/usuario";
import {Enum_EstadoUsuario} from "../models/enums";
import {Enum_Rol} from "../models/enums";




const resolvers = {
    Query: {
        Usuarios: async(parent,args) =>{
            console.log("llega hasta aqui")
            const usuarioEncontrado = await UserModel.find();
            
            return usuarioEncontrado;
        },
    },
    Mutation:{
      crearUsuario: async (parent,args) =>{
          const usuarioCreado = await UserModel.create({
              Nombres: args.Nombres,
              Apellidos : args.Apellidos,
              Documento : args.Documento,
              Email : args.Email,
              Status: args.Status,
              Rol : args.Rol,

          });
          return usuarioCreado;

      },
    },
                   
};
   


export{resolvers};