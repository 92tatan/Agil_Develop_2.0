/// conusltas necesarias para las interfaces de proyectos
import  {gql} from "@apollo/client";

const TraerProyectos = gql`
    query  {
        AllProyectos {
            Id_proyecto
            Nombre_proyecto
            Objetivo_general
            Presupuesto
            Objetivo_especifico
            Fase_proyecto
            Estado_proyecto
            Documento
            Apellidos
            Nombres
            Fecha_terminacion
            Fecha_inicio
        }
    }`;

const traerProyectoId  = gql`
    query ($idProyecto: Int) {
        ProyectoxId(Id_proyecto: $idProyecto) {
            Id_proyecto
            Nombre_proyecto
            Objetivo_general
            Presupuesto
            Objetivo_especifico
            Fase_proyecto
            Estado_proyecto
            Documento
            Apellidos
            Nombres
            Fecha_terminacion
            Fecha_inicio
        }
    }`;
const traerProyectoxCC   = gql`
    query ($documento: Int) {
        ProyectoxCC(Documento: $documento) {
            Id_proyecto
            Nombre_proyecto
            Objetivo_general
            Presupuesto
            Objetivo_especifico
            Fase_proyecto
            Estado_proyecto
            Documento
            Apellidos
            Nombres
            Fecha_terminacion
            Fecha_inicio
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

const crearProyecto = gql`
    mutation (
        $idProyecto: Int, 
        $nombreProyecto: String, 
        $objetivoGeneral: String, 
        $objetivoEspecifico: String, 
        $presupuesto: Float, 
        $fechaInicio: String, 
        $fechaTerminacion: String, 
        $nombres: String, 
        $apellidos: String, 
        $documento: Int, 
        $estadoProyecto: Estado_proyecto, 
        $faseProyecto: Fase_proyecto) {
    CrearProy(
        Id_proyecto: $idProyecto, Nombre_proyecto: $nombreProyecto, 
        Objetivo_general: $objetivoGeneral, Objetivo_especifico: $objetivoEspecifico, 
        Presupuesto: $presupuesto, Fecha_inicio: $fechaInicio, Fecha_terminacion: $fechaTerminacion, 
        Nombres: $nombres, Apellidos: $apellidos, Documento: $documento, 
        Estado_proyecto: $estadoProyecto, Fase_proyecto: $faseProyecto) {
            Id_proyecto
            Nombre_proyecto
            Objetivo_general
            Presupuesto
            Objetivo_especifico
            Fase_proyecto
            Estado_proyecto
            Documento
            Apellidos
            Nombres
            Fecha_terminacion
            Fecha_inicio
    
    }
}

`;

    export default [
        TraerProyectos,
        traerProyectoId,
        traerProyectoxCC,
        modificarEstado,
        crearProyecto
    ];