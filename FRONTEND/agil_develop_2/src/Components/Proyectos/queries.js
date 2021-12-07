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

    export default [TraerProyectos,traerProyectoId,traerProyectoxCC,modificarEstado];