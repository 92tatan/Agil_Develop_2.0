/// conusltas necesarias para las interfaces de Avances
import  {gql} from "@apollo/client";

 const crearAvance = gql`
    mutation (
        $IdProyecto: Int!,
        $DescripciOnAvance: String!,
        $ObservacionesLider: String!) 
        {
        CrearAvan(
            Id_proyecto: $IdProyecto,
            DescripciOn_avance: $DescripciOnAvance,
            Observaciones_lider: $ObservacionesLider
            ) 
            {
                Id_proyecto
                DescripciOn_avance
                Observaciones_lider
            }
    }`;


    const modificarEstado   = gql`
    mutation EstadoProy($idProyecto: Int, $estadoProyecto: Estado_proyecto) {
        EstadoProy(Id_proyecto: $idProyecto, Estado_proyecto: $estadoProyecto) {
            Id_proyecto
            Nombre_proyecto
            Objetivo_general
            Objetivo_especifico
        }
    }`;


    export default [
        crearAvance,
        modificarEstado
    ];