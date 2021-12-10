import Resolverproyecto from "./resolver.proyecto.js";
import Resolveravance from "./resolver.avance.js";
import Resolverinscripcion from "./resolver.inscripcion.js";

const { Queriesproyecto, Mutationsproyecto, ...Restproyecto } = Resolverproyecto;
const { Queriesavance, Mutationsavance, ...Restavance } = Resolveravance;
const { Queriesinscripcion, Mutationsinscripcion, ...Restinscripcion } = Resolverinscripcion;



export default {
    Query: {
        ...Queriesproyecto,
        ...Queriesavance,
        ...Queriesinscripcion,

    },
    Mutation: {

        ...Mutationsproyecto,
        ...Mutationsavance,
        ...Mutationsinscripcion,
    },
    /*...Restproyecto*/
};

