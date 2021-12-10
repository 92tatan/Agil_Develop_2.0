import  gql from 'graphql-tag';

const tipoProyecto = gql`
    # Proyecto
    type Proyecto {
    Id_proyecto:Int!
    Nombre_proyecto: String!
    Objetivo_general: String!
    Objetivo_especifico: String!
    Presupuesto: Float!
    Fecha_inicio: String!
    Fecha_terminacion: String
    Nombres: String!
    Apellidos: String!
    Documento:Int!
    Estado_proyecto: Estado_proyecto!
    Fase_proyecto: Fase_proyecto
}
`;

const enums = gql`
enum Estado_proyecto {
    ACTIVO
    INACTIVO
}
enum Fase_proyecto {
    INICIADO
    EN_PROGRESO
    TERMINADO
}
`;
const queries = gql`

type Query {
    AllProyectos: [Proyecto]
}

type Query {
    ProyectoxId(Id_proyecto:Int): Proyecto
}


type Query {
    ProyectoxCC(Documento:Int): [Proyecto]
}
`;

const mutations = gql`
type Mutation {
    EstadoProy(Id_proyecto:Int,Estado_proyecto: Estado_proyecto): Proyecto
}

type Mutation {
    FaseProy(Id_proyecto:Int,Fase_proyecto: Fase_proyecto): Proyecto
}

type Mutation {
    CrearProy(Id_proyecto:Int, Nombre_proyecto:String, Objetivo_general:String, Objetivo_especifico:String, Presupuesto:Float, Fecha_inicio:Int, Fecha_terminacion:Int, Nombres:String, Apellidos:String, Documento:Int, Estado_proyecto:Estado_proyecto, Fase_proyecto:Fase_proyecto): Proyecto
}

type Mutation {
    ActProy(Id_proyecto:Int, Nombre_proyecto:String, Objetivo_general:String, Objetivo_especifico:String, Presupuesto:Float, Documento:Int): Proyecto
}

`;

export default [
    tipoProyecto,
    enums,
    queries,
    mutations,
];