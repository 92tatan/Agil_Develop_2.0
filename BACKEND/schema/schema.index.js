import Schemaproyecto from "./schema.proyecto.js";
import Schemaavance from "./schema.avance.js";
import Schemainscripcion from "./schema.inscripcion.js";
import Schemausuario from "./schema.usuario.js";

export default [
    ...Schemaproyecto,
    ...Schemaavance,
    ...Schemainscripcion,
    ...Schemausuario,
]