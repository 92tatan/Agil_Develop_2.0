/*
    Event Routes
    /api/usuarios
*/
const express = require('express');
const router = express.Router();

const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validarCampos');
const {  getUsuarios, crearUsuario, actualizarUsuario } = require('../controllers/usuarios');


// Obtener eventos 
router.get('/', getUsuarios);


// Crear un nuevo usuario
router.post(
    '/nuevo',
    [ // middlewares
        check('Nombres', 'El nombre es obligatorio').not().isEmpty(),
        check('Email', 'El email es obligatorio').isEmail(),
        check('Rol', 'El rol es obligatorio').not().isEmpty(),
        check('Status', 'El estado es obligatorio').not().isEmpty(),
        check('Password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    crearUsuario
);

//Actualizar Evento
router.put(
    '/:id',
    [

        check('Rol', 'El rol es obligatorio').not().isEmpty(),
        check('Status', 'El estado es obligatorio').not().isEmpty(),

        validarCampos
    ],
    actualizarUsuario
);

module.exports = router;