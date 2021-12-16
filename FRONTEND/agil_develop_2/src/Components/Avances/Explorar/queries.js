/// conusltas necesarias para las interfaces de Avances
import  {gql} from "@apollo/client";

const traerAvances = gql`
    query  {
        AllAvances {
            Id_proyecto
            Fecha_avance
            DescripciOn_avance
            Observaciones_lider
        }
    }`;

const traerAvance = gql`
query ($idProyecto: Int) {
    AvancesxProyecto(Id_proyecto: $idProyecto) {
        Id_avance
        Id_proyecto
        Fecha_avance
        Documento
        DescripciOn_avance
        Observaciones_lider
    }
}`;

export {traerAvances, traerAvance};