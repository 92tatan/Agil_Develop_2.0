import React, { useState, useEffect } from "react";
import {BarNavegador} from '../../../NavBar';
import {Row,  Col,  Container,   Form,  Button,  Placeholder,InputGroup} from "react-bootstrap";
import {useMutation, useQuery} from "@apollo/client";
import queries from '../queries';
import {Formulario} from './FormaDatos'

export const RegistroProyecto = ()=> {
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
    const [addProyecto] = useMutation(queries[4],{variables: {
        idProyecto: parseInt(ProyGuardar.Id_proyecto), 
        nombreProyecto: ProyGuardar.Nombre_proyecto, 
        objetivoGeneral: ProyGuardar.Objetivo_general, 
        objetivoEspecifico: ProyGuardar.Objetivo_especifico, 
        presupuesto: parseFloat(ProyGuardar.Presupuesto), 
        fechaInicio: ProyGuardar.Fecha_inicio, 
        fechaTerminacion: ProyGuardar.Fecha_terminacion, 
        nombres: ProyGuardar.Nombres, 
        apellidos: ProyGuardar.Apellidos, 
        documento: parseInt(ProyGuardar.Documento), 
        estadoProyecto: ProyGuardar.Estado_proyecto, 
        faseProyecto: ProyGuardar.Fase_proyecto
        }}) 

    const registrarProyecto = ()=>{
        console.log(ProyGuardar);
        //validacion fase terminada a estado inactivo
        if (ProyGuardar.Fase_proyecto==="TERMINADO"){
            ProyGuardar.Estado_proyecto="INACTIVO"
            }
        console.log(ProyGuardar);
        addProyecto()
        console.log(addProyecto.data);
        }
        useEffect(() => {
        
        
    }, []);

    return(
        <div>
        <BarNavegador />
        <Container>   
            <Row className="mb-3">
            <h2 className="text-center"> Registro de Proyectos</h2>
            </Row>
        <Formulario ProyGuardar={ProyGuardar} setProyGuardar={setProyGuardar} />
        
        <Row className="mb-2">
        <Col xs="7">
        <Button variant="dark"  className="float-end" mb-3 size="lg" onClick={registrarProyecto}>
            Registrar Proyecto
        </Button>
        </Col>
        </Row>
        </Container>
        </div>
    )
}