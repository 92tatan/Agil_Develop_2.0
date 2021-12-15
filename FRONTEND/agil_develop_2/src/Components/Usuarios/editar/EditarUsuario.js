import React from "react";
import {BarNavegador} from '../../../NavBar';
import { useEffect,useState, useMutation } from "react";
import {Row,  Col,  Container,  Table,  Form,  Button,  Placeholder,} from "react-bootstrap";
import {FormaEditarUsuario}  from "./formEditar";
import queries from '../queries';

export const EditarUsuario = ()=> {
    const [UsuGuardar, setUsuGuardar]= useState({});

     const [editUsuario] = useMutation(queries[3],{variables: {
              Nombres: UsuGuardar.NombreUsuario,  
               Apellidos: UsuGuardar.ApellidoUsuario, 
               Documento: parseInt(UsuGuardar.id), 
               Email: UsuGuardar.Correo, 
               Password: UsuGuardar.contraseña
            
            }}) 


    const editarUsu = ()=>{
        
        console.log(UsuGuardar)
    };



    return(
        <div>
        <BarNavegador />,
        
        <FormaEditarUsuario UsuGuardar = {UsuGuardar} setUsuGuardar = {setUsuGuardar} />  
        <Button xs ={4} as={Col} 
           variant="primary"  
           type="button" onClick={editarUsu}
           >
             Actualizar Información Personal
             </Button>

       

        </div>
        
    )


}