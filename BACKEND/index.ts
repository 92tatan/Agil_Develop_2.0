import  express from "express";
import  cors  from "cors";
import {ApolloServer} from "apollo-server-express";
import dotenv from "dotenv";
import {typeDefs}  from "./graphql/types";
import {resolvers} from "./graphql/resolvers";
import { connect, Mongoose } from "mongoose";
const port = process.env.PORT ;
const dbname = 'Proyecto_test';
const uri = process.env.DATABASE_CONNECTION_STRING;




dotenv.config();


const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,

});

const app = express();

app.use(express.json());

app.use(cors());

app.listen({port: 3002}, async()=>{
    Mongoose.connect(process.env.DATABASE_CONNECTION_STRING,
        {useNewUrlParser:true, useUnifiedTopology: true}
    )
        .then(()=> console.log(`Bases de datos ${app} conectada`))
        .catch(e => console.log(e))
    ;
    await server.start();
    server.applyMiddleware({app});
    console.log("Servidor corriendo");

});