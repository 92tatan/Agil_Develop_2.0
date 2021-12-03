import Proyecto from "../models/model.proyecto.js";

// busqueda total  HU_06  HU_019
const AllProyectos = async () => {
    const proyectos = await Proyecto.find();
    return proyectos;
};

// BUsqueda de por Id_proyecto HU_017
const ProyectoxId = async (parent,args) => {
    //console.log(le= );t id=1
    //console.log(`Valor de los argumentos ${args}`)
    const proyid = await Proyecto.findOne({Id_proyecto:args.Id_proyecto});
    //console.log(`Valor de   ${proyid}`)
    return proyid;
};

// BUsqueda de por Documento de lider HU_013
const ProyectoxCC = async (parent,args) => {
    const proycc = await Proyecto.find({Documento:args.Documento});
    return proycc;
};


//Update estado HU_007 y HU_008
const EstadoProy = async (parent, args) => {
    const estaproy = await Proyecto.findOneAndUpdate({Id_proyecto:args.Id_proyecto},{$set:{Estado_proyecto:args.Estado_proyecto}},{new:true});
    console.log(`ESTADO del proyecto ${args.Id_proyecto} cambiado a ${args.Estado_proyecto}` );
    return estaproy;
};

//Update Fase HU_009
const FaseProy = async (parent, args) => {
    const faseproy = await Proyecto.findOneAndUpdate({Id_proyecto:args.Id_proyecto},{$set:{Fase_proyecto:args.Fase_proyecto}},{new:true});
    console.log(`FASE del proyecto ${args.Id_proyecto} cambiado a ${args.Fase_proyecto}` );
    return faseproy;
};

//Update creacion de proyeto HU_012
const CrearProy = async (parent, args) => {
    console.log(`Valor de los argumentos ${args.Id_proyecto}`)
    const idproy = await Proyecto.find().sort({Id_proyecto:-1}).limit(1)
    const newid= idproy[0].Id_proyecto + 1
    console.log(newid) // ID incremental generado por consola
    //const crearproy = await Proyecto.findOneOrCreate ({Id_proyecto:args.Id_proyecto},{Id_proyecto:args.Id_proyecto, Nombre_proyecto:args.Nombre_proyecto, Objetivo_general:args.Objetivo_general, Objetivo_especifico:args.Objetivo_especifico, Presupuesto:args.Presupuesto, Fecha_inicio:args.Fecha_inicio, Fecha_terminacion:args.Fecha_terminacion, Nombres:args.Nombres, Apellidos:args.Apellidos, Documento:args.Documento, Estado_proyecto:args.Estado_proyecto, Fase_proyecto:args.Fase_proyecto});
    const crearproy = await Proyecto.create([{Id_proyecto:newid, Nombre_proyecto:args.Nombre_proyecto, Objetivo_general:args.Objetivo_general, Objetivo_especifico:args.Objetivo_especifico, Presupuesto:args.Presupuesto, Fecha_inicio:args.Fecha_inicio, Fecha_terminacion:args.Fecha_terminacion, Nombres:args.Nombres, Apellidos:args.Apellidos, Documento:args.Documento, Estado_proyecto:args.Estado_proyecto, Fase_proyecto:args.Fase_proyecto}]);
    console.log(`NUEVO proyecto creado: ${crearproy} ` );
    return crearproy;
};

// Actualizar proyecto por Documento de lider HU_014
const ActProy = async (parent, args) => {
    const actproy = await Proyecto.findOneAndUpdate({Id_proyecto:args.Id_proyecto},{$set:{Nombre_proyecto:args.Nombre_proyecto,Objetivo_general:args.Objetivo_general,Objetivo_especifico:args.Objetivo_especifico,Presupuesto:args.Presupuesto}},{new:true});
    console.log(`Proyecto ${args.Id_proyecto} actualizado por el Lider ${args.Documento}` );
    return actproy;
};


export default {
    Queriesproyecto: {
        AllProyectos,
        ProyectoxId,
        ProyectoxCC,
    },
    Mutationsproyecto:{
        EstadoProy,
        FaseProy,
        CrearProy,
        ActProy,
    }
};