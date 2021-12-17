import { gql } from "@apollo/client";

const TraerUsuarios = gql`
  query   {
    AllUsuarios {
        Nombres
        Apellidos 
        Documento 
        Email 
        Rol
        Status
        Password 
    }
  }
`;

const TraerUsuarioxId = gql`
  query ($Documento: Int) {
    UsuarioxId (Documento: $Documento) {
      Nombres
      Apellidos 
      Documento 
      Email 
      Rol
      Status
      Password 
    }
  }
`;

const crearUsuario= gql`
    mutation (
        $Nombres: String, 
        $Apellidos: String, 
        $Documento: Int,
        $Email : String,
        $Rol: Rol,
        $Password: String){  
    crearUsuario(
        Nombres: $Nombres, 
        Apellidos: $Apellidos, 
        Documento: $Documento, 
        Email : $Email,
        Rol : $Rol,
        Password: $Password) 
        {
          Nombres
          Apellidos 
          Documento 
          Email 
          Rol
          Password
        }
}

`;
const editarUsuario = gql`
  mutation (
    $Nombres: String, 
    $Apellidos: String, 
    $Documento: Int,
    $Email : String, 
    $Password: String){
    editarUsuario(
      Nombres: $Nombres, 
      Apellidos: $Apellidos, 
      Documento: $Documento, 
      Email: $Email,
      Password: $Password){
        Nombres
        Apellidos 
        Documento 
        Email 
        Password 

      }
    
  }
`;
const modificarEstado   = gql`
    mutation ($documento: Int, $status: Status) {
        Modifuser(Documento: $documento, Status: $status) {

        Documento 
       
        Status
          
        }
    }`;

export default [
  TraerUsuarios,
  TraerUsuarioxId,
  crearUsuario,
  editarUsuario,
  modificarEstado
];
