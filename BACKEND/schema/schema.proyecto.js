import  gql from 'graphql-tag';

const tipoProyecto = gql`
    # Proyecto
    type Proyecto {
    Id_proyecto:Number!
    Nombre_proyecto: String!
    Objetivo_general: String!
    Objetivo_especifico: String!
    Presupuesto: Float!
    Fecha_inicio: Date!
    Fecha_terminacion: Date!
    Nombres: String!
    Apellidos: String!
    status: ProjectStatus!
    Documento:Number!
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
    AllProyectos: [Project]
}`;

export default [
    tipoProyecto,
    enums,
    queries
];