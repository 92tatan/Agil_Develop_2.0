import mongoose from 'mongoose';
const { Schema } = mongoose;

const inscripcionSchema = new Schema({
    Id_inscripcion:{type: Number, requeried:true,},
    Id_proyecto:{type: Number, requeried:true,},
    Documento:{type: Number,required: true,},
    Estado_inscripcion:{type: String,required: true,},
    Fecha_ingreso:{type: Date,required: true,},
    Fase_proyecto:{type: String,required: true,},
    Fecha_egreso:{type: Date},
});

// crear modelo Inscripciones

const Inscripcion = mongoose.model('inscripciones', inscripcionSchema);

export default Inscripcion;