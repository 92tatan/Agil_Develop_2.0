import Resolverproyecto from "./resolver.proyecto.js";
import Resolveravance from "./resolver.avance.js";

const { Queriesproyecto, Mutationsproyecto, ...Restproyecto } = Resolverproyecto;
const { Queriesavance, Mutationsavance, ...Restavance } = Resolveravance;



export default {
    Query: {
        ...Queriesproyecto,
        ...Queriesavance,

    },
    Mutation: {

        ...Mutationsproyecto,
        ...Mutationsavance,
    },
    /*...Restproyecto*/
};

