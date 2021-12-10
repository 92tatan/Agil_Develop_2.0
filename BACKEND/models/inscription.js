import mongoose from "mongoose";
//import { Enum_EstadoInscripcion } from './enums.js';
import { projectModel } from './project.js';
import { userModel } from "./user.js";
 
const {Schema, model} = mongoose;

/* interface Inscription {
    id_proyecto: Schema.Types.ObjectId;
    id_estudiante: Schema.Types.ObjectId;
    estado: Enum_EstadoInscripcion;
    fecha_ingreso: Date
    fecha_egreso: Date;
} */

const inscriptionSchema = new Schema({
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
        enum:["ACEPTADA", "RECHAZADA", "PENDIENTE"],
        default: "PENDIENTE"
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
