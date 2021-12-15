import Usuario from "../models/model.usuario.js";
import jwt from 'jsonwebtoken';


// busqueda total  de usuarios
const AllUsuarios = async () => {
    const usuarios = await Usuario.find();
    return usuarios;
};

// Busqueda de por Id de usuarios
const UsuarioxId = async (parent,args) => {
    //console.log(le= );t id=1
    //console.log(`Valor de los argumentos ${args}`)
    const usuid = await Usuario.findOne({Documento:args.Documento});
    console.log(`Valor de   ${usuid}`)
    return usuid;
};

//Creacion de usuario 
const CrearUsu = async (parent, args) => {
    const estusu = 'PENDIENTE' 
    const crearusua = await Usuario.create([{Nombres:args.Nombres, Apellidos:args.Apellidos, Documento:args.Documento, Email:args.Email, Rol:args.Rol, Status:estusu, Password:args.Password}]);
    const buscusua = await Usuario.findOne({Documento:args.Documento});
    console.log(`NUEVO usuario creado: ${crearusua} ` );
    return buscusua;
};


//Update usuario 
const EditUsu = async (parent, args) => {
    const editusua = await Usuario.findOneAndUpdate({Documento:args.Documento},{$set:{Nombres:args.Nombres, Apellidos:args.Apellidos, Documento:args.Documento, Email:args.Email, Rol:args.Rol, Password:args.Password}},{new:true});
    console.log(`Usario ${args.Nombres} ${args.Apellidos} ha editado su datos` );
    return editusua;
};

//Update Status de ususario
const StatusUsu = async (parent, args) => {
    const statususu = await Usuario.findOneAndUpdate({Documento:args.Documento},{$set:{Status:args.Estado_usuario}},{new:true});
    console.log(`STATUS del usuario del DNI ${args.Documento} ha cambiado a ${args.Estado_usuario}` );
    return statususu;
};

const LoginUsu = async (parent, args) => {
    const user = await Usuario.findOne({ Email: args.Email });
    if (!user) {
      throw new Error('User not found');
    }
    const isValid = await Usuario.findOne({Password: args.Password });
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
    },
    Mutationsusuario:{
        CrearUsu,
        EditUsu,
        StatusUsu,
        LoginUsu,        
    }
};