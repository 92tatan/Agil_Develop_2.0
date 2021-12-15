import  gql from 'graphql-tag';

const tipoInscripcion = gql`
    # Inscripcion
    type Inscripcion {
    Id_inscripcion:Int
    Id_proyecto:Int
    Documento:Int
    Estado_inscripcion:Estado_inscripcion
    Fecha_ingreso: String
    Fase_proyecto: Fase_proyecto
    Fecha_egreso: String
}
`;
const enums = gql`
enum Estado_inscripcion {
    ACEPTADA
    RECHAZADA
    PENDIENTE
}
enum Fase_proyecto {
    INICIADO
    EN_PROGRESO
    TERMINADO
}
`;

const queries = gql`

type Query {
    AllInscripciones: [Inscripcion]
}

type Query {
    InscripcionesxId(Id_inscripcion:Int): Inscripcion
}

`;

const mutations = gql`
type Mutation {
    CrearInsc(Id_proyecto:Int!,Documento:Int!): Inscripcion
}

type Mutation {
    ElimInsc(Id_inscripcion:Int!): Inscripcion
}

type Mutation {
    ModifInsc(Id_inscripcion:Int!,Estado_inscripcion:Estado_inscripcion!): Inscripcion
}
`;

export default [
    tipoInscripcion,
    enums,
    queries,
    mutations,
];