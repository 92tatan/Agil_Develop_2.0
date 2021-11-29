import { Schema, model } from "mongoose";
import { Enum_Estado } from './enums';


interface Inscription {
    id_proyecto: string;
    id_estudiante: string;
    estado: Enum_Estado;
    fecha_ingreso: Date
    fecha_egreso: Date;
}

const inscriptionSchema = new Schema<Inscription>({
    id_proyecto:{
        type: String,               // cambiarlo a tipo proyecto 
        required: true,
        //unique: true                  
    } ,
    id_estudiante:{
        type:String,                // cambiarlo a tipo user
        required:true, 
        //unique:true
    },
    estado:{
        type:String,
        required:true,
        enum:Enum_Estado
    },
    fecha_ingreso:{
        type:Date,
        required:true
    },
    fecha_egreso:{
        type:Date,
        required:true
    } 
});

const inscriptionModel =  model('Inscription', inscriptionSchema);

export  {inscriptionModel};
