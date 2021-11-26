import ApolloServer  from 'apollo-server-express';
import ApolloServerPluginDrainHttpServer  from 'apollo-server-core';
import typeDefs from './schema/schema.index.js';// typeDefs
import resolvers from './resolvers/resolver.index.js';// resolvers
import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
const app = express();
const port = process.env.PORT ;
const dbname = 'Proyecto_test';
const uri = process.env.DATABASE_CONNECTION_STRING
dotenv.config()

// Conexion a BDs
mongoose.connect(process.env.DATABASE_CONNECTION_STRING,
    {useNewUrlParser:true, useUnifiedTopology: true}
)
    .then(()=> console.log(`Bases de datos ${dbname} conectada`))
    .catch(e => console.log(e))
;

// elemento necesario para counicacion URL deco. reconcimiento de JSON
app.use(express.urlencoded({extended : false}));
app.use(express.json());

// prueba escuchando al puerto
app.listen(port, ()=>{
    console.log(`API REST corriendo en puerto ${process.env.PORT}`);
});


const startApolloServer = async (typeDefs, resolvers) => {
    const app = express();
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
        context: async ({ req }) => await validateAuthentication(req),
    });
    await server.start();
    server.applyMiddleware({ app });
    await new Promise(resolve => httpServer.listen({ port: process.env.PORT }, resolve));
    console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`);
};

startApolloServer(typeDefs, resolvers)