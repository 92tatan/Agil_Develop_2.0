import { userModel } from "../models/user"; // mucho cuidado con el punto
import { inscriptionModel } from "../models/inscription";
import { Enum_EstadoInscripcion } from "../models/enums";

const resolvers = {
    Query:{
        Usuarios: async (parent, args) => {
            const users = await userModel.find();
            console.log("Usuarios Consultados OK ");
            return users;
        },
        Inscripciones: async (parent, args) => {
            const inscripciones = await inscriptionModel.find();
            console.log("Inscripciones Consultadas OK ");
            return inscripciones;
            
        },
        InscripcionPorId: async (parent, args) => {
            const inscripcion = await inscriptionModel.findOne({_id:args._id});
            console.log("Inscripcion Encontrada OK")
            return inscripcion;
        }
        
    },
    Mutation:{
        crearUsuario:async (parent , args ) => {
            const UsuarioCreado = await userModel.create({
                nombre: args.nombre,
                apellido: args.apellido,
                telefono: args.telefono,
                correo: args.correo
            }); 
            console.log("Usuario Creado Ok ");
            return UsuarioCreado;
        },
        crearInscripcion: async (parent, args)=>{
            const InscripcionCreada = await inscriptionModel.create({
                estado:args.estado    
                
            });

            if(Object.keys(args).includes('estado')){
                InscripcionCreada.estado = args.estado;
            }
            console.log("Inscripcion Creada OK");
            return InscripcionCreada;
            
        },
        eliminarInscripcion: async (parent, args)=>{
            const inscripcionEliminada = await inscriptionModel.findOneAndDelete({_id:args._id});
            return inscripcionEliminada;
        },
        modificarInscripcion: async(parent, args)=>{
            const inscripcionEliminada = await inscriptionModel.findByIdAndUpdate(args._id,{estado:args.estado});
            
            return inscripcionEliminada;
        }
        

    }
    
}

export {resolvers}