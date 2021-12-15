//import {gql} from "apollo-server-express";
import  gql from 'graphql-tag';

const tipoUsuario = gql`
type Usuario{
    _id: ID!
    Nombres: String!
    Apellidos : String
    Documento : Int
    Email : String!
    Rol : Rol!
    Status : Estado_usuario!
    Password : String!
   
  }
  `;

const enums = gql`
  enum Estado_usuario{
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
  }
 
  enum Rol{
    ESTUDIANTE 
    LIDER 
    ADMINISTRADOR
  }
  `;

const queries = gql`
type Query{
  AllUsuarios: [Usuario]
}
type Query {
  UsuarioxId(Documento:Int): Usuario
}
`;

  const mutations = gql`
  type Mutation{
    crearUsuario(
    Nombres: String!
    Apellidos : String!
    Documento : Int!
    Email : String!
    Status: Estado_usuario!
    Rol : Rol!
    Password : String!
    ): Usuario
    
    editarUsuario(
      _id : String!
      Nombres: String!
      Apellidos : String!
      Documento : Int!
      Email : String!
      Status: Estado_usuario!
      Rol : Rol!
      Password : String!
    ): Usuario
    
    ModificarEstadoUsuario
    (Status: String,Estado_usuario:Estado_usuario
    ): Usuario
    
    login
    (Email: String!, Password: String!
    ): String
    
   
    
  }
`;
 
 

export default [
    tipoUsuario,
    enums,
    queries,
    mutations
];