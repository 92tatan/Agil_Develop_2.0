import React, { useState } from "react";
import {BarNavegador} from '../../../NavBar';
import { useMutation } from "@apollo/client";
import {Row,  Col,  Container,  Table,  Form,  Button,  Placeholder,} from "react-bootstrap";
import {FormaEditarUsuario}  from "./formEditar";
import queries from '../queries';
import Swal from 'sweetalert2';

export const EditarUsuario = ()=> {
    const [UsuGuardar, setUsuGuardar]= useState({});

    const [editUsuario] = useMutation(queries[3],{variables: {
            Nombres: UsuGuardar.NombreUsuario,  
            Apellidos: UsuGuardar.ApellidoUsuario, 
            Documento: parseInt(UsuGuardar.Documento), 
            Email: UsuGuardar.Correo, 
            Password: UsuGuardar.contraseña
            
            }}) 

    const editarUsu = ()=>{
        console.log(UsuGuardar)
        editUsuario()
        Swal.fire({
            title: 'Edicion Exitosa!',
            text: " ",
            icon: 'success',
            confirmButtonText: "Home",
        }).then(function() {
            window.location = "/Home";
        })
    };

    return(
        <div>
        <BarNavegador />,
        <center><h2 className="text-left mt-5" >Editar Detalles de Usuario </h2></center>
        <FormaEditarUsuario UsuGuardar = {UsuGuardar} setUsuGuardar = {setUsuGuardar} />  
        <Col xs="8">
        <Button variant="dark" className="float-end" mb-3 
                onClick={editarUsu}>
            Actualizar Información Personal
            </Button>
            </Col>
        </div>
        
    )


}