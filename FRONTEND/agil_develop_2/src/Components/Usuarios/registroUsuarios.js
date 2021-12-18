import React, { useState, useEffect } from "react";
import {BarNavegador} from '../../../NavBar';
import {Row,  Col,  Container,   Form,  Button,  Placeholder,InputGroup} from "react-bootstrap";
import {useMutation, useQuery} from "@apollo/client";
import queries from '../queries';
import { EstadoUsuario } from "./EstadoUsuario";
import {Formulario} from './CrearUsuario'

export const Registrousuario = ()=> {
    const [ProyGuardar, setProyGuardar]= useState({});

    /* const [listaProyectos, setListaProyectos] = useState([{Id_proyecto:0}]);
    const  data1 = useQuery(queries[0]).data;
    const buscarultimo = ()=>{
            const DataTodos = data1?.AllProyectos
            console.log([...DataTodos])
            setListaProyectos(...DataTodos)
            console.log(listaProyectos)
            }
    useEffect(() => {      
        buscarultimo()
        buscarultimo()
    }, []); */
    const [addUsuario] = useMutation(queries[2],{variables: {
         
        Nombres: ProyGuardar.Nombres, 
        Apellidos: ProyGuardar.Apellidos, 
        Documento: parseInt(ProyGuardar.Documento),
        Email: ProyGuardar.Email, 
        Rol: ProyGuardar.Rol, 
        Status: ProyGuardar.Status, 
        Password: ProyGuardar.Password, 
       
        }}) 

    const registrarUsuario = ()=>{
        console.log(ProyGuardar);
        //validacion fase terminada a estado inactivo
        //if (ProyGuardar.Fase_proyecto==="TERMINADO"){
          //  ProyGuardar.Estado_proyecto="INACTIVO"
            //}
        //console.log(ProyGuardar);
        addUsuario()
        console.log(addUsuario.data);
        }
        useEffect(() => {
        
        
    }, []);

    return(
        <div>
        <BarNavegador />
        <Container>   
            <Row className="mb-3">
            <h2 className="text-center"> Registro de Usuario</h2>
            </Row>
        <Formulario ProyGuardar={ProyGuardar} setProyGuardar={setProyGuardar} />
        
        <Row className="mb-2">
        <Col xs="7">
        <Button variant="dark"  className="float-end" mb-3 size="lg" onClick={registrarUsuario}>
            Registrar usuario
        </Button>
        </Col>
        </Row>
        </Container>
        </div>
    )
}