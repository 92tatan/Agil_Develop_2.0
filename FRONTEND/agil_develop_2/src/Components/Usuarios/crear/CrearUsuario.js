import React from "react";
import {BarNavegador} from '../../../NavBar';
import { useEffect,useState, useMutation } from "react";
import {Row,  Col,  Container,  Table,  Form,  Button,  Placeholder,} from "react-bootstrap";
import {Formausuario}  from "./formUsuario";
import queries from '../queries';


export const CrearUsuario = ()=> {
    const [UsuGuardar, setUsuGuardar]= useState({});
    
    const [addUsuario] = useMutation(queries[2],{variables: {
        Nombres: UsuGuardar.NombreUsuario,  
        Apellidos: UsuGuardar.ApellidoUsuario, 
        Documento: parseInt(UsuGuardar.Usuarioid), 
        Email: UsuGuardar.Correo, 
        Rol: UsuGuardar.Rol, 
        Status: "PENDIENTE",
        Password: UsuGuardar.contraseña
        
        }}) 


    const crearUsu = ()=>{
        console.log(UsuGuardar)
        addUsuario()
    };

    

    
    return(

<div>
        <BarNavegador />,
        
           
        <Formausuario UsuGuardar = {UsuGuardar} setUsuGuardar = {setUsuGuardar} />
        <Button xs ={4} as={Col} 
         variant="primary"  
         type="button" onClick={crearUsu}
         >
           Crear Usuario
           </Button>

       

        </div>
    )


}