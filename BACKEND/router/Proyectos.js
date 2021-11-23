const express = require('express');
const router = express.Router();

const Proyecto = require('../models/proyecto')
// busqueda total  HU_06  HU_019
router.get('/', async (req,res)=>{
    try {

        const arrayProyectosDB = await Proyecto.find();
        console.log(arrayProyectosDB);
        res.send({message: `datos traidos ${arrayProyectosDB}`});

    } catch (error){
        console.log(error)
    }

});
// BUsqueda de por Id_proyecto HU_017
router.get('/:id',async (req,res)=>{
    try {

        let id=req.params.id
        const arrayProyectosId = await Proyecto.findOne({Id_proyecto:id});
        console.log(arrayProyectosId);
        if(arrayProyectosId==null){
            res.status(500).json(`${id} NO ENCONTRADO`);
        }else{
            res.status(200).json(`Informacion traida : ${arrayProyectosId} `);
        }
    } catch (error){
        console.log(error);
            }

});

// BUsqueda de por Documento de lider HU_013
router.get('/lider/:cc',async (req,res)=>{
    try {

        let cc=req.params.cc
        const arrayProyectosCC = await Proyecto.find({Documento:cc});
        console.log(arrayProyectosCC);
        if(arrayProyectosCC==null){
            res.status(500).json(`${cc} NO ENCONTRADO`);
        }else{
            res.status(200).json(`Informacion traida : ${arrayProyectosCC} `);
        }
    } catch (error){
        console.log(error);
            }

});
//buscador de estados
router.get('/estado/:name',async (req,res)=>{
    try {

        let name=req.params.name
        const arrayProyectosEstado = await Proyecto.find({Estado_proyecto:name});
        console.log(arrayProyectosEstado);
        if(arrayProyectosEstado==null){
            res.status(500).json(`${name} NO ENCONTRADO`);
        }else{
            res.status(200).json(`Informacion traida : ${arrayProyectosEstado} `);
        }
    } catch (error){
        console.log(error);
            }

});

//buscador de fase
router.get('/fase/:name',async (req,res)=>{
    try {

        let name=req.params.name
        const arrayProyectosFase = await Proyecto.find({Fase_proyecto:name});
        console.log(arrayProyectosFase);
        if(arrayProyectosFase==null){
            res.status(500).json(`${name} NO ENCONTRADO`);
        }else{
            res.status(200).json(`Informacion traida : ${arrayProyectosFase} `);
        }
    } catch (error){
        console.log(error);
            }

});


//Update estado HU_007 y HU_008
router.post('/estado/:id',async (req,res)=>{
    try {
        console.log(`actualizar por metodo POST-Proyectos Estado`);
        let body= req.body;
        let id=req.params.id;
        console.log(body.Estado_proyecto)
        const arrayProyectosUpdateEstado = await Proyecto.updateOne({Id_proyecto:id},{$set:{Estado_proyecto:body.Estado_proyecto}});
        console.log(arrayProyectosUpdateEstado);
        if(arrayProyectosUpdateEstado==null){
            res.status(500).json(`${id} NO ENCONTRADO`);
        }else{
            /*const VentaNombre=arrayVentasId.Nombres*/
            res.status(201).json(`Informacion modificada en el ID: ${id} `);
            /* res.send({message: `${arrayVentasId}`}); */
        }
    } catch (error){
        console.log(error);
            }

});

//Update Fase HU_009
router.post('/fase/:id',async (req,res)=>{
    try {
        console.log(`actualizar por metodo POST-Proyectos Fase`);
        let body= req.body;
        let id=req.params.id;
        console.log(body.Fase_proyecto)
        const arrayProyectosUpdateFase = await Proyecto.updateOne({Id_proyecto:id},{$set:{Fase_proyecto:body.Fase_proyecto}});
        console.log(arrayProyectosUpdateFase);
        if(arrayProyectosUpdateFase==null){
            res.status(500).json(`${id} NO ENCONTRADO`);
        }else{
            res.status(201).json(`Informacion modificada en el ID: ${id} `);
        }
    } catch (error){
        console.log(error);
            }

});

//Update creacion de proyeto HU_012
router.post('/create/',async (req,res)=>{
    try {
        console.log(`crear por metodo POST- Un Proyecto`);
        let body= req.body;
        console.log(body)
        const arrayProyectosCreate = await Proyecto.create([{Id_proyecto:body.Id_proyecto, Nombre_proyecto:body.Nombre_proyecto, Objetivo_general:body.Objetivo_general, Objetivo_especifico:body.Objetivo_especifico, Presupuesto:body.Presupuesto, Fecha_inicio:body.Fecha_inicio, Fecha_terminacion:body.Fecha_terminacion, Nombres:body.Nombres, Apellidos:body.Apellidos, Documento:body.Documento, Estado_proyecto:body.Estado_proyecto, Fase_proyecto:body.Fase_proyecto}]);
        console.log(arrayProyectosCreate);
        res.status(200).json(`Informacion creada en el ID: ${body.Id_proyecto} `);
    } catch (error){
        console.log(error);
            }

});
// Actualizar proyecto por Documento de lider HU_014
router.post('/update/',async (req,res)=>{
    try {
        console.log(`Actualizar por metodo POST- Un Proyecto`);
        /*let cc=req.params.cc
        const arrayProyectosCC = await Proyecto.find({Documento:cc});
        console.log(arrayProyectosCC);
        let body= req.body;
        arrayProyectosCC.forEach(element =>{
            if(element.Id_proyecto==body.Id_proyecto){
                /*const arrayProyectoid= await Proyecto.updateOne({Id_proyecto:body.Id_proyecto},{$set:{Fase_proyecto:body.Fase_proyecto,Nombre_proyecto:body.Nombre_proyecto,Objetivo_general:body.Objetivo_general,Objetivo_especifico:body.Objetivo_especifico,Presupuesto:body.Presupuesto}});
                console.log(element);
            }else{
                res.status(500).json(`${body.Id_proyecto} NO ENCONTRADO`)}});*/
        let body= req.body;
        const arrayProyectosUpdateProyecto = await Proyecto.updateOne({Id_proyecto:body.Id_proyecto},{$set:{Nombre_proyecto:body.Nombre_proyecto,Objetivo_general:body.Objetivo_general,Objetivo_especifico:body.Objetivo_especifico,Presupuesto:body.Presupuesto}});
        console.log(arrayProyectosUpdateProyecto);
        if(arrayProyectosUpdateProyecto==null){
            res.status(500).json(`${body.Id_proyecto} NO ENCONTRADO`);
        }else{
            res.status(201).json(`Informacion modificada en el ID: ${body.Id_proyecto} `);
        }Proyecto } catch (error){
        console.log(error);
            }
});




module.exports = router;