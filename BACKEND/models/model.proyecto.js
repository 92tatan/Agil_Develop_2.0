import mongoose from 'mongoose';
const { Schema } = mongoose;

const proyectoSchema = new Schema({
    Id_proyecto:{type: Number, requeried:true,},
    Nombre_proyecto:{type: String,required: true,},
    Objetivo_general:{type: String,required: true,},
    Objetivo_especifico:{type: String,required: true,},
    Presupuesto:{type: Number,required: true,},
    Fecha_inicio:{type: Date,required: true,},
    Fecha_terminacion:{type: Date,required: true,},
    Nombres:{type: String,required: true,},
    Apellidos:{type: String,required: true,},
    Documento:{type: Number,required: true,},
    Estado_proyecto:{type: String,required: true,},
    Fase_proyecto:{type: String},
});

// crear modelo Proyectos

const Proyecto = mongoose.model('Proyecto', proyectoSchema);

export default Proyecto;