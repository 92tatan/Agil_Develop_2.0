import Proyecto from "../models/model.proyecto.js";

const AllProyectos = async () => {
    const proyectos = await Proyecto.find();
    return proyectos;
};

export default {
    projectQueries: {
        AllProyectos,
    }
};