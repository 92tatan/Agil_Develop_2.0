import { gql } from "@apollo/client";

const GET_INSCRIPCIONES = gql`
  query AllInscripciones {
    AllInscripciones {
      _id
      Id_inscripcion
      Id_proyecto
      Documento
      Estado_inscripcion
      Fecha_ingreso
      Fase_proyecto
      Fecha_egreso
    }
  }
`;

const GET_INCRIPCION_OBJ = gql`

query InscripcionObj($id: String!) {
  InscripcionPorId(_id: $id) {
    _id
    Id_inscripcion
    Id_proyecto
    Documento
    Estado_inscripcion
    Fecha_ingreso
    Fase_proyecto
    Fecha_egreso
  }
}

`;

const GET_INSCRIPCION = gql`
query InscripcionesxId($idInscripcion: Int) {
  InscripcionesxId(Id_inscripcion: $idInscripcion) {
    Id_inscripcion
      Id_proyecto
      Documento
      Estado_inscripcion
      Fecha_ingreso
      Fase_proyecto
      Fecha_egreso
  }
}
`;

export { GET_INSCRIPCIONES, GET_INSCRIPCION, GET_INCRIPCION_OBJ };
