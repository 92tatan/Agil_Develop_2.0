import { Schema, model } from "mongoose";

const inscriptionSchema = new Schema({
    id_proyecto:{
        type: String,               // cambiarlo a tipo proyecto 
        required: true,
        //unique: true                // Solo para pruebas    
    }/* ,
    id_estudiante:{
        type:String,                // cambiarlo a tipo user
        required:true
    },
    estado:{
        type:String,
        required:true
    },
    fecha_ingreso:{
        type:String,
        required:true
    },
    fecha_egreso:{
        type:String,
        required:true
    } */
});

const inscriptionModel =  model('Inscription', inscriptionSchema);

export  {inscriptionModel};
