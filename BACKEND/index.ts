"use strict";
const express = require("express");
const app = express();
const port = process.env.PORT || 3002;
import { isConstructorDeclaration } from "typescript";
import { Enum_Estado } from "./models/enums";
import { inscriptionModel } from "./models/inscription";

// Conexion a BDs
const mongoose = require("mongoose");

const user = "userB";
const password = "accesobd";

const dbname = "Proyecto_test";
const uri = `mongodb+srv://${user}:${password}@cluster0.isgyv.mongodb.net/${dbname}?retryWrites=true&w=majority`;
console.log(uri);
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Bases de datos ${dbname} conectada`))
  .catch((e) => console.log(e));

  const main = async () =>{
    await inscriptionModel.create({
      id_proyecto:'7',
      id_estudiante:'1017125412',
      fecha_egreso:"01/12/21",
      fecha_ingreso:"01/01/20",
      estado:Enum_Estado.aceptada
    }).then((u)=>{
    console.log("creado", u)
    }).catch((e)=>{
      console.log("error al crear", e)
    });
  }

  

// elemento necesario para counicacion URL deco. reconcimiento de JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// prueba escuchando al puerto
app.listen(port, () => {
  console.log(`API REST corriendo en puerto ${port}`);
});

// Rutas de test
app.use("/test", require("./router/Routertest"));
//app.use('/test',response('./router/Routertest'));

// Rutas de web para proyectos
app.use("/proyectos", require("./router/Proyectos"));

// Rutas de web para Inscripciones
app.use("/inscripciones", require("./router/Inscripciones"));

main ();


