import {gql} from "apollo-server-express";

const typeDefs = gql`
  enum Enum_EstadoUsuario{
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
  }
  enum Enum_Rol{
    ESTUDIANTE 
    LIDER 
    ADMINISTRADOR
  }


  type Usuario{
    _id: ID!
    Nombres: String!
    Apellidos : String
    Documento : Int
    Email : String!
    Rol : Enum_Rol!
    Status: Enum_EstadoUsuario!
   


  }
  type Query{
    Usuarios: [Usuario]
  }
  type Mutation{
    crearUsuario(
    Nombres: String!
    Apellidos : String!
    Documento : Int!
    Email : String!
    Status:Enum_EstadoUsuario!
    Rol : Enum_Rol!

    ): Usuario
  }
`;
 

export {typeDefs};
