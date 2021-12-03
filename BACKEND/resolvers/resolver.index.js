import Resolverproyecto from "./resolver.proyecto.js";

const { Queriesproyecto, Mutationsproyecto, ...Restproyecto } = Resolverproyecto;



export default {
    Query: {
        ...Queriesproyecto,
    },
    Mutation: {

        ...Mutationsproyecto,
    },
    /*...Restproyecto*/
};

