import { Schema, model } from "mongoose";
import { Enum_EstadoInscripcion } from './enums';
import { projectModel } from './project';
import { userModel } from "./user";
 

interface Inscription {
    id_proyecto: Schema.Types.ObjectId;
    id_estudiante: Schema.Types.ObjectId;
    estado: Enum_EstadoInscripcion;
    fecha_ingreso: Date
    fecha_egreso: Date;
}

const inscriptionSchema = new Schema<Inscription>({
    id_proyecto:{
        type: Schema.Types.ObjectId,   
        ref: projectModel,      
        //required: true,
        //unique: true                  
    } ,
    id_estudiante:{
        type: Schema.Types.ObjectId,   
        ref:userModel,
        required:true, 
        //unique:true
    },
    estado:{
        type:String,
        //required:true,
        enum:Enum_EstadoInscripcion,
        default: Enum_EstadoInscripcion.PENDIENTE
    },
    fecha_ingreso:{
        type:Date,
        //required:true
    },
    fecha_egreso:{
        type:Date,
        //required:true
    } 
});

const inscriptionModel =  model('Inscription', inscriptionSchema);

export  {inscriptionModel};
