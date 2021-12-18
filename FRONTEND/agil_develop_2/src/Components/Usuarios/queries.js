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
        $Password: String,) {
    CrearUsuario(
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

const LOGIN =gql`
mutation Login(
  $email: String, 
  $password: String
  ) {
  login(
    Email: $email, 
    Password: $password
    )
}
`;


export default[
  TraerUsuarios,
  TraerUsuarioxId,
  crearUsuario,
  editarUsuario,
  LOGIN
];