import Proyecto from "../models/model.proyecto.js";

const AllProyectos = async () => {
    const proyectos = await Proyecto.find();
    return proyectos;
};

const ProyectoxId = async (parent,args) => {
    //let id=1
    console.log(`Valor de los argumentos ${args}`)
    const proyid = await Proyecto.findOne({Id_proyecto:args.Id_proyecto});
    console.log(`Valor de   ${proyid}`)
    return proyid;
};

export default {
    Queriesproyecto: {
        AllProyectos,
        ProyectoxId,
    }
};