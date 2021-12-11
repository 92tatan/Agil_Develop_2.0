import { gql } from "@apollo/client";

const GET_INSCRIPCIONES = gql`
  query AllInscripciones {
    AllInscripciones {
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

export { GET_INSCRIPCIONES, GET_INSCRIPCION };
