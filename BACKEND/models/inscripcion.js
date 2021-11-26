const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inscripcionSchema = new Schema({
  Id_inscripcion: Number,
  Id_proyecto: Number,
  Documento: Number,
  Estado_inscripcion: String,
  Fecha_ingreso: String,
  Fase_proyecto: String,
  Fecha_egreso: String,
});

// Se crea el modelo inscripcion

// let Inscripcion = mongoose.model('inscripcion', inscripcionSchema,'inscripcion')

// module.exports = Inscripcion

const Inscripcion = mongoose.model("inscripciones", inscripcionSchema);

module.exports = Inscripcion;
