const express = require("express");
const router = express.Router();

const Inscripcion = require("../models/inscripcion");

// lista todas las inscripciones
router.get("/", async (req, res) => {
  try {
    const arrayInscripcionesDB = await Inscripcion.find();
    console.log(arrayInscripcionesDB);
    res.send({ message: `Total Inscripciones ${arrayInscripcionesDB}` });
  } catch (error) {
    console.log(error);
  }
});

/*await Inscripcion.find()
  .then((u) => {
    console.log("inscripciones: ", u);
  })
  .catch((e) => {
    console.log("error en inscripcion: ", e);
  });*/

// Buscar una inscripcion por Id_inscripcion

router.get("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    const arrayInscripcionesId = await Inscripcion.findOne({
      Id_inscripcion: id,
    });
    console.log(arrayInscripcionesId);
    if (arrayInscripcionesId == null) {
      res.status(500).json(`No se encuentra la inscripcion: ${id}`);
    } else {
      res.status(200).json(`Data  : ${arrayInscripcionesId} `);
    }
  } catch (error) {
    console.log(error);
  }
});

// Aceptar - rechazar :  inscripcion  HU_016

router.post("/actualizarInscripcion/:id", async (req, res) => {
  try {
    console.log(`Actualizar inscripcion aceptada rechazada`);
    let body = req.body;
    let id = req.params.id;
    const arrayEstado_inscripcion = await Inscripcion.updateOne(
      { Id_inscripcion: id },
      { $set: { Estado_proyecto: body.Estado_proyecto } }
    );
    if (arrayEstado_inscripcion == null) {
      res.status(500).json(`${id} No Existe`);
    } else {
      res.status(201).json(`Informacion modificada en el ID: ${id} `);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
