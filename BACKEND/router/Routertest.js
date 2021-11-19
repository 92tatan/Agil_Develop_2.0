const express = require('express');
const router = express.Router();

// ejemplo metodo GET
router.get('/hola/', (req,res)=>{
    console.log(`enviando 1er metodo get`);
    res.send({message: `Hola`});
});

//2do ejemplo con GET
router.get('/hola/:nombre', (req,res)=>{
    console.log(`enviando 2do metodo get`);
    res.send({message: `Hola  ${req.params.nombre}`});
});

// ejemplo metodo POST
router.post('/hola/', (req,res)=>{
    console.log(`enviando 1er metodo POST`);
    let body= req.body.nombre
    res.send({message: `Hola ${body}`});
});
module.exports = router;

