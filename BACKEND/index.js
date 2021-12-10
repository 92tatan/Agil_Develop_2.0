"use strict";
import express from 'express';
//const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

//import { isConstructorDeclaration } from "typescript";

import { inscriptionModel } from "./models/inscription.js";
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv'
import conectarBD from "./db/db.js"
import { typeDefs } from "./graphql/types.js";
import { resolvers } from "./graphql/resolvers.js";

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
//app.use("/test", require("./router/Routertest"));
//app.use('/test',response('./router/Routertest'));

// Rutas de web para proyectos
//app.use("/proyectos", require("./router/Proyectos"));

// Rutas de web para Inscripciones
//app.use("/inscripciones", require("./router/Inscripciones"));



