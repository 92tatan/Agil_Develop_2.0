/// conusltas necesarias para las interfaces de Avances
import  {gql} from "@apollo/client";

    const modificarObservaciones = gql`
    mutation 
        ModifObsxAvan(
            $idAvance: Int!, 
            $observacionesLider: String!
        )   
        {
            ModifObsxAvan(
                Id_avance: $idAvance, 
                Observaciones_lider: $observacionesLider) 
            {
                Observaciones_lider
            }
        }`;

    const modificarDescripciones = gql`
    mutation 
        ModifDesxAvan(
            $idAvance: Int!,  
            $descripciOnAvance: String!
        ) {
            ModifDesxAvan(
                Id_avance: $idAvance,  
                DescripciOn_avance: $descripciOnAvance) 
            {
                DescripciOn_avance
            }
        }`;


    export default [
        modificarObservaciones,
        modificarDescripciones
    ];