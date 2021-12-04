"use strict";
const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

import { isConstructorDeclaration } from "typescript";
import { Enum_EstadoInscripcion } from "./models/enums";
import { inscriptionModel } from "./models/inscription";
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv'
import conectarBD from "./db/db"
import { typeDefs } from "./graphql/types";
import { resolvers } from "./graphql/resolvers";

// Conexion a BDs
//const mongoose = require("mongoose");

//const user = "userB";
//const password = "accesobd";

//const dbname = "Proyecto_test";
//const uri = `mongodb+srv://${user}:${password}@cluster0.isgyv.mongodb.net/${dbname}?retryWrites=true&w=majority`;
//console.log(uri);
/*mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Bases de datos ${dbname} conectada`))
  .catch((e) => console.log(e));*/
dotenv.config();

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers:resolvers
  

});



  const main = async () =>{
    await inscriptionModel.create({
      id_proyecto:'7',
      id_estudiante:'1017125412',
      fecha_egreso:"01/12/21",
      fecha_ingreso:"01/01/20",
      estado:Enum_EstadoInscripcion.ACEPTADA
    }).then((u)=>{
    console.log("creado", u)
    }).catch((e)=>{
      console.log("error al crear", e)
    });
  }

  

// elemento necesario para counicacion URL deco. reconcimiento de JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

// prueba escuchando al puerto
/*app.listen(port, () => {
  console.log(`API REST corriendo en puerto ${port}`);
});*/

// 
app.listen({ port: process.env.PORT || 3002 }, async () => {
  await conectarBD();
  await server.start();

  server.applyMiddleware({ app });

  console.log('servidor listo');
});

// Rutas de test
app.use("/test", require("./router/Routertest"));
//app.use('/test',response('./router/Routertest'));

// Rutas de web para proyectos
app.use("/proyectos", require("./router/Proyectos"));

// Rutas de web para Inscripciones
app.use("/inscripciones", require("./router/Inscripciones"));

//main ();


