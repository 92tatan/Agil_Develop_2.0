const express = require('express');
const router = express.Router();

const usuario = require('../models/model.usuario')

//obtener usuarios 
router.get('/', async (req,res)=>{
    try {

        const arrayUsuariosDB = await usuario.find();
        console.log(arrayUsuariosDB);
        res.send({message: `datos traidos ${arrayUsuariosDB}`});

    } catch (error){
        console.log(error)
    }

});
//busqueda por documento 
router.get('/:Documento',async (req,res)=>{
    try {

        let Documento=req.params.Documento
        const arrayUsuariosId = await usuario.findOne({Documento:Documento});
        console.log(arrayUsuariosId);
        if(arrayUsuariosId==null){
            res.status(500).json(`${Documento} NO ENCONTRADO`);
        }else{
            res.status(200).json(`Informacion traida : ${arrayUsuariosId} `);
        }
    } catch (error){
        console.log(error);
            }

});
//Update creacion de usuario
router.post('/create/',async (req,res)=>{
    try {
        console.log(`crear por metodo POST- Un Usuario`);
        let body= req.body;
        console.log(body)
        const esta = "PENDIENTE"
        const arrayUsuariosCreate = await usuario.create([{
            Nombres: body.Nombres,
            Apellidos : body.Apellidos,
            Documento : body.Documento,
            Email : body.Email,
            Status: esta,
            Rol : body.Rol,
            Password : body.Password,}]);
        console.log(arrayUsuariosCreate);
        res.status(200).json(`Informacion creada con el Documento: ${body.Documento} `);
    } catch (error){
        console.log(error);
            }

});

//Update editar usuario
router.post('/update/',async (req,res)=>{
    try {
        console.log(`actualizar por metodo POST- un usuario`);
        let body= req.body;
        let Documento=req.params.Documento;
        //console.log(body.)
        const arrayUsuariosUpdate = await usuario.updateOne({Documento:body.Documento},{$set:{
            Nombres: body.Nombres,
            Apellidos : body.Apellidos,
            Documento : body.Documento,
            Email : body.Email,
            Rol : body.Rol,
            Password : body.Password,}});
        console.log(arrayUsuariosUpdate);
        if(arrayUsuariosUpdate==null){
            res.status(500).json(`${Documento} NO ENCONTRADO`);
        }else{
            res.status(201).json(`Informacion modificada en el Documento: ${Documento} `);
        }
    } catch (error){
        console.log(error);
            }

});

module.exports = router;
