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
    _id: ID
    Nombres: String!
    Apellidos : String!
    Documento : String!
    Email : String!
    Status: enum_EstadoUsuario!
    Rol : enum_Rol!


  }
  type Query{
    Usuarios: [Usuario]
  }
`;
 

export {typeDefs};
