import React, { useState } from "react";
import {BarNavegador} from '../../../NavBar';
import { useMutation } from "@apollo/client";
import {Row,  Col,  Container,  Table,  Form,  Button,  Placeholder,} from "react-bootstrap";
import {Formausuario}  from "./formUsuario";
import queries from '../queries';
import Swal from 'sweetalert2';

export const CrearUsuario = ()=> {
    const [UsuGuardar, setUsuGuardar]= useState({});
    
    const [addUsuario] = useMutation(queries[2],{variables: {
        Nombres: UsuGuardar.NombreUsuario,  
        Apellidos: UsuGuardar.ApellidoUsuario, 
        Documento: parseInt(UsuGuardar.Usuarioid), 
        Email: UsuGuardar.Correo, 
        Rol: UsuGuardar.Rol, 
        Password: UsuGuardar.contraseña
        
    }}) 

    const crearUsu = ()=>{
        //console.log(UsuGuardar)
        addUsuario()
        console.log(UsuGuardar)
        Swal.fire({
            title: 'Registro Exitoso!',
            text: " ",
            icon: 'success',
            confirmButtonText: "Home",
        }).then(function() {
            window.location = "/Home";
        })
    };
    
    return(
        <div>
        <BarNavegador />
        <Container>
        <Row className="mb-3">
        <h2 className="text-center"> Registro de Usuarios</h2>
        </Row> 
        <Formausuario UsuGuardar = {UsuGuardar} setUsuGuardar = {setUsuGuardar} />
        <Col xs="7">
        <Button variant="dark" className="float-end" mb-3 size="lg" onClick={crearUsu}>
            Crear Usuario
        </Button>
        </Col>
        </Container>
        </div>
    )


}