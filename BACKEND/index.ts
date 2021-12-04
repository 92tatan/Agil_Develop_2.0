import  express, { Router } from "express";
import  cors  from "cors";
import {ApolloServer} from "apollo-server-express";
import dotenv from "dotenv";
import {typeDefs}  from "./graphql/types";
import {resolvers} from "./graphql/resolvers";
import conectarBD from "./mongo/db"

const port = process.env.PORT || 3002;



dotenv.config();


const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,

});

const app = express();
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(cors());

app.listen({ port: process.env.PORT || 3002 }, async () => {
    await conectarBD();
    await server.start();
  
    server.applyMiddleware({ app });
  
    console.log('servidor listo');
  });

