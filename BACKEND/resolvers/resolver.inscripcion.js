import Inscripcion from "../models/model.inscripcion.js";
import Proyecto from "../models/model.proyecto.js";

// busqueda total  de Inscripciones HU_??
const AllInscripciones = async () => {
    const inscripciones = await Inscripcion.find();
    return inscripciones;
};

// Busqueda Alternativa por uno
const InscripcionObj = async(parent, args) => {
     const inscripcion =  await Inscripcion.findOne({_id:args._id});
    console.log("Inscripcion Encontrada OK")
    return  inscripcion;
};

// Busqueda de inscripcion por Id
const InscripcionesxId = async (parent,args) => {
    console.log(`Id de inscripcion ${args.Id_inscripcion}`)
    const inscxid = await Inscripcion.findOne({Id_inscripcion:args.Id_inscripcion});
    console.log(`Inscripcion: ${inscxid}`)
    return inscxid;
};

// Crear Inscripcion por proyecto
const CrearInsc = async (parent,args) => {
    const proyid = await Proyecto.findOne({Id_proyecto:args.Id_proyecto});
    const nomproy= proyid.Nombre_proyecto
    const fasproy= proyid.Fase_proyecto
    console.log(`Nombre del proyecto a inscribirse ${nomproy}`)
    const idinsc = await Inscripcion.find().sort({Id_inscripcion:-1}).limit(1)
    const newid= idinsc[0].Id_inscripcion + 1
    console.log(`numero de inscripcion ${newid}`)
    const fecha_actual=Date.now();
    console.log(`Fecha de la inscripcion ${fecha_actual}`)
    const estadinic='PENDIENTE'
    const crearinsc = await Inscripcion.create([{Id_inscripcion:newid, Id_proyecto:args.Id_proyecto,Documento:args.Documento,Estado_inscripcion:estadinic,Fecha_ingreso:fecha_actual,Fase_proyecto:fasproy,Fecha_egreso:''}]);
    const businscid = await Inscripcion.findOne({Id_inscripcion:newid});
    console.log(`NUEVA inscripcion creada: ${crearinsc} ` );
    return businscid;
};


//eliminar inscripcion
const ElimInsc = async (parent, args) => {
    const eliminsc = await Inscripcion.findOneAndDelete({Id_inscripcion:args.Id_inscripcion},{new:true});
    console.log(`Inscripcion ${args.Id_inscripcion} eliminado` );
    return eliminsc;
};

//Modificar inscripcion de proyecto
const ModifInsc = async (parent, args) => {
    const modinsc = await Inscripcion.findOneAndUpdate({Id_inscripcion:args.Id_inscripcion},{$set:{Estado_inscripcion:args.Estado_inscripcion}},{new:true});
    console.log(`Estado de Inscripcion numero ${args.Id_inscripcion} modificado a ${args.Estado_inscripcion}` );
    return modinsc;
};


export default {
    Queriesinscripcion: {
        AllInscripciones,
        InscripcionesxId,
    },
    Mutationsinscripcion:{
        CrearInsc,
        ElimInsc,
        ModifInsc,
    }
};