import  gql from 'graphql-tag';

const tipoAvance = gql`
    # Avance
    type Avance {
    Id_avance:Int
    Id_proyecto:Int
    Documento:Int
    Fecha_avance: String
    DescripciOn_avance: String
    Observaciones_lider: String
}
`;

const queries = gql`

type Query {
    AllAvances: [Avance]
}

type Query {
    AvancesxProyecto(Id_proyecto:Int): [Avance]
}

`;

const mutations = gql`
type Mutation {
    CrearAvan(Id_proyecto:Int!,DescripciOn_avance:String!,Observaciones_lider:String!): Avance
}

type Mutation {
    ElimAvan(Id_avance:Int!): Avance
}

type Mutation {
    ModifObsxAvan(Id_avance:Int!,Observaciones_lider:String!): Avance
}

type Mutation {
    ModifDesxAvan(Id_avance:Int!,DescripciOn_avance:String!): Avance
}

`;

export default [
    tipoAvance,
    queries,
    mutations,
];