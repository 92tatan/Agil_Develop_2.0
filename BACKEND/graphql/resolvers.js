import { userModel } from "../models/user.js"; // mucho cuidado con el punto
import { inscriptionModel } from "../models/inscription.js";
//import { Enum_EstadoInscripcion } from "../models/enums.js";

const resolvers = {
    Query:{
        Usuarios: async (parent, args) => {
            const users = await userModel.find();
            console.log("Usuarios Consultados OK ");
            return users;
        },
        Inscripciones: async (parent, args) => {
            const inscripciones = await inscriptionModel.find().populate('id_estudiante');
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
                correo: args.correo,
                rol:args.rol
            }); 
            console.log("Usuario Creado Ok ");
            return UsuarioCreado;
        },
        crearInscripcion: async (parent, args)=>{
            const InscripcionCreada = await inscriptionModel.create({
            estado:args.estado,    
            id_estudiante:args.id_estudiante,
            fecha_ingreso: args.fecha_ingreso,
            fecha_egreso: args.fecha_egreso,
            id_proyecto:args.id_proyecto
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