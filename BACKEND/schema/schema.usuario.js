//import {gql} from "apollo-server-express";
import  gql from 'graphql-tag';

const tipoUsuario = gql`
type Usuario{
    Nombres: String
    Apellidos : String
    Documento : Int
    Email : String
    Rol : Rol
    Status : Status
    Password : String
  }
  `;

const enums = gql`
  enum Status{
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
    Nombres: String
    Apellidos : String
    Documento : Int
    Email : String
    Rol : Rol
    Password : String
    ): Usuario
    
    editarUsuario(
      Nombres: String
      Apellidos : String
      Documento : Int
      Email : String
      Password : String
    ): Usuario
    
    Modifuser
    (Documento:Int, Status :Status
    ): Usuario
    
    login
    (Email: String, Password: String
    ): String
    
   
    
  }
`;
 
 

export default [
    tipoUsuario,
    enums,
    queries,
    mutations
];