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
        $Status: Estado_Usuario,
        $Rol: Rol,
        $Password: String,) {
    CrearUsuario(
        Nombres: $Nombres, 
        Apellidos: $Apellidos, 
        Documento: $Documento, 
        Email : $Email,
        Status: $Estado_usuario,
        Rol : $Rol,
        Password: $Password) 
        {
          
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
const editarUsuario = gql`
  mutation (
    
    $Nombres: String, 
    $Apellidos: String, 
    $Documento: Int, 
    $Status: Estado_Usuario,
    $Rol: Rol,
    $Password: String){
    editarUsuario(
      Nombres: $Nombres, 
      Apellidos: $Apellidos, 
      Documento: $Documento, 
      Email: $Email,
      Status: $Estado_usuario,
      Rol: $Rol,
      Password: $Password){
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


export default [
  TraerUsuarios,
  TraerUsuarioxId,
  crearUsuario,
  editarUsuario,
];