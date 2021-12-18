import React from "react";
import {BarNavegador} from '../../../NavBar';
import { useEffect,useState, useMutation } from "react";
import {Row,  Col,  Container,  Table,  Form,  Button,  Placeholder,} from "react-bootstrap";
import {FormaEditarUsuario}  from "./formEditar";
import queries from '../queries';
//import Login from "./Login"

export const iniciarSesion = ()=> {
    const [UsuGuardar, setUsuGuardar]= useState({});

    const iniciarUsu = ()=>{
        
        console.log(UsuGuardar)
    };

    return(
        <div>
        <BarNavegador />,
        
        <FormainiciarSesion UsuGuardar = {UsuGuardar} setUsuGuardar = {setUsuGuardar} />  
        <Button 
        className="login" 
        variant="primary" 
        type="submit"  onClick={iniciarUsu}
        // disabled={ loading }
        >
         Iniciar sesión
         </Button>

       

        </div>
        
    )


}