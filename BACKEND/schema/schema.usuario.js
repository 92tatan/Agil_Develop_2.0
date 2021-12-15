import  gql from 'graphql-tag';

const tipoUsuario = gql`
    # Usuario
    type Usuario {
    Nombres: String
    Apellidos: String
    Documento:Int
    Rol:Rol
    Status: Estado_usuario
    Password: String
}
`;

const enums = gql`
enum Rol {
    ESTUDIANTE 
    LIDER 
    ADMINISTRADOR
}
enum Estado_usuario {
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
}
`;
const queries = gql`

type Query {
    AllUsuarios: [Usuario]
}

type Query {
    UsuarioxId(Documento:Int): Usuario
}
`;

const mutations = gql`
type Mutation {
    CrearUsu(Nombres:String, Apellidos:String, Documento:Int, Email:String, Rol:Rol, Password:String): Usuario
}

type Mutation {
    EditUsu(Nombres:String, Apellidos:String, Documento:Int, Email:String, Rol:Rol, Password:String): Usuario
}

type Mutation {
    StatusUsu(Documento:Int, Status:Estado_usuario): Usuario
}

type Mutation {
    LoginUsu(Email:String,Password:String): String
}

`;

export default [
    tipoUsuario,
    enums,
    queries,
    mutations,
];