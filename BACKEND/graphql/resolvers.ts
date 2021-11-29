import {Usermodel} from "../models/Usuario"

const resolvers = {
    Query: {
        Usuarios: async(parent,args) =>{
            const usuarios = await Usermodel.find():
            return usuarios;
        },
    },
                   
};
   


export{resolvers};