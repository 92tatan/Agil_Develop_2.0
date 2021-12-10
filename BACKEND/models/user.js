import mongoose from "mongoose";

const {Schema, model} = mongoose; 




const userSchema = new Schema({
    nombre:{
        type: String,         
        required: true,  
        unique:true              
    },
    apellido:{
        type:String,
        //required:true
    },
    telefono:
    {
        type:String
    },
    correo:
    {
        type:String
    },
    rol:
    {
        type:String
    }
    
    
});

const userModel =  model('User', userSchema);

export  {userModel};