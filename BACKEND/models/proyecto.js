const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const proyectoSchema = new Schema({
    Id_proyecto:Number,
    Nombre_proyecto:String,
    Objetivo_general:String,
    Objetivo_especifico:String,
    Presupuesto:Number,
    Fecha_inicio:String,
    Fecha_terminacion:String,
    Nombres:String,
    Apellidos:String,
    Documento:Number,
    Estado_proyecto:String,
    Fase_proyecto:String
});

// crear modelo Proyectos

const Proyecto = mongoose.model('Proyecto', proyectoSchema);

module.exports=Proyecto;