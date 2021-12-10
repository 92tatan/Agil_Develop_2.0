import Avance from "../models/model.avance.js";
import Proyecto from "../models/model.proyecto.js";

// busqueda total  de avances HU_??
const AllAvances = async () => {
    const avances = await Avance.find();
    return avances;
};

// Busqueda de avance por Id_proyecto
const AvancesxProyecto = async (parent,args) => {
    //console.log(le= );t id=1
    console.log(`Valor de los argumentos ${args.Id_proyecto}`)
    const avanxproyid = await Avance.findOne({Id_proyecto:args.Id_proyecto});
    console.log(`Valor de   ${avanxproyid}`)
    return avanxproyid;
};

// Crear avance por proyecto
const CrearAvan = async (parent,args) => {
    const proyid = await Proyecto.findOne({Id_proyecto:args.Id_proyecto});
    const cclid= proyid.Documento
    console.log(`Cedula del lider ${cclid}`)
    const idavan = await Avance.find().sort({Id_avance:-1}).limit(1)
    const newid= idavan[0].Id_avance + 1
    console.log(`numero de avance ${newid}`)
    const fecha_actual=Date.now();
    console.log(`Fecha del avance ${fecha_actual}`)
    const crearavanc = await Avance.create([{Id_avance:newid, Id_proyecto:args.Id_proyecto,Documento:cclid,Fecha_avance:fecha_actual,DescripciOn_avance:args.DescripciOn_avance,Observaciones_lider:args.Observaciones_lider,}]);
    const busavanid = await Avance.findOne({Id_avance:newid});
    console.log(`NUEVO avance creado: ${crearavanc} ` );
    return busavanid;
};


//eliminar avance
const ElimAvan = async (parent, args) => {
    const elimavan = await Avance.findOneAndDelete({Id_avance:args.Id_avance},{new:true});
    console.log(`Avance ${args.Id_avance} eliminado` );
    return elimavan;
};

//Modificar Observacion de avance
const ModifObsxAvan = async (parent, args) => {
    const modobs = await Avance.findOneAndUpdate({Id_avance:args.Id_avance},{$set:{Observaciones_lider:args.Observaciones_lider}},{new:true});
    console.log(`Observaciones del proyecto ${args.Id_proyecto} del # avance ${args.Id_avance} modificado a ${args.Observaciones_lider}` );
    return modobs;
};

//Modificar Descripción de avance
const ModifDesxAvan = async (parent, args) => {
    const moddes = await Avance.findOneAndUpdate({Id_avance:args.Id_avance},{$set:{DescripciOn_avance:args.DescripciOn_avance}},{new:true});
    console.log(`Descripciones del avance ${args.Id_avance} cambiado a ${args.DescripciOn_avance}` );
    return moddes;
};



export default {
    Queriesavance: {
        AllAvances,
        AvancesxProyecto,
    },
    Mutationsavance:{
        CrearAvan,
        ElimAvan,
        ModifObsxAvan,
        ModifDesxAvan,
    }
};