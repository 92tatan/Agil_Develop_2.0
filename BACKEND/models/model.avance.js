import mongoose from 'mongoose';
const { Schema } = mongoose;

const avanceSchema = new Schema({
    Id_avance:{type: Number, required:true,},
    Id_proyecto:{type: Number, required:true,},
    Documento:{type: Number,required: true,},
    Fecha_avance:{type: Date,required: true,},
    DescripciOn_avance:{type: String,required: true,},
    Observaciones_lider:{type: String,required: true,},
});

// crear modelo Avances

const Avance = mongoose.model('avance', avanceSchema);

export default Avance;