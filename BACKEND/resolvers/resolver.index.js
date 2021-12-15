import Resolverproyecto from "./resolver.proyecto.js";
import Resolveravance from "./resolver.avance.js";
import Resolverinscripcion from "./resolver.inscripcion.js";
import Resolverusuario from "./resolver.usuario.js";

const { Queriesproyecto, Mutationsproyecto, ...Restproyecto } = Resolverproyecto;
const { Queriesavance, Mutationsavance, ...Restavance } = Resolveravance;
const { Queriesinscripcion, Mutationsinscripcion, ...Restinscripcion } = Resolverinscripcion;
const { Queriesusuario, Mutationsusuario, ...Restusuario } = Resolverusuario;



export default {
    Query: {
        ...Queriesproyecto,
        ...Queriesavance,
        ...Queriesinscripcion,
        ...Queriesusuario,

    },
    Mutation: {

        ...Mutationsproyecto,
        ...Mutationsavance,
        ...Mutationsinscripcion,
        ...Mutationsusuario,
    },
    /*...Restproyecto*/
};

