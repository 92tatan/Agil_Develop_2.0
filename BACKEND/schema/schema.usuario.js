//import {gql} from "apollo-server-express";
import  gql from 'graphql-tag';

const tipoUsuario = gql`
type Usuario{
    
    Nombres: String
<<<<<<< HEAD
    Apellidos : String
    Documento : Int
    Email : String!
    Rol : Rol!
    Status : Estado_usuario!
    Password : String!
=======
<<<<<<< HEAD
    Apellidos : String
    Documento : Int
    Email : String
    Rol : Rol
    Status : Estado_usuario
    Password : String
=======
    Apellidos: String
    Documento: Int
    Email: String!
    Rol: Rol!
    Status: Estado_usuario!
    Password: String!
>>>>>>> 168606523b6d5a9d03a6b9b22fc873652d9d8d73
>>>>>>> 4739fed272a6e5d170b088c632674d0157cc8285
   
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
    
    ModificarEstadoUsuario
    (Documento:Int, Status:Estado_usuario
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