"use strict";
const express = require("express");
const app = express();
const port = process.env.PORT || 3002;

// Conexion a BDs
const mongoose = require("mongoose");

const user = "admin";
const password = "Q1w2e3r45t";
/* const dbname = 'veterinaria'; */
const dbname = "Proyecto_test";
const uri = `mongodb+srv://${user}:${password}@cluster0.isgyv.mongodb.net/${dbname}?retryWrites=true&w=majority`;
console.log(uri);
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Bases de datos ${dbname} conectada`))
  .catch((e) => console.log(e));

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
