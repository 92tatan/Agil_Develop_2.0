import React, { useState } from "react";
import {BarNavegador} from '../../../NavBar';
import {Row,  Col,  Container, Button} from "react-bootstrap";
import {useMutation} from "@apollo/client";
import queries from '../queries';
import {Formulario} from './FormaDatos'
import Swal from 'sweetalert2';

export const RegistroProyecto = ()=> {
    const [ProyGuardar, setProyGuardar]= useState({});

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
        Swal.fire({
            title: 'Registro Exitoso!',
            text: " ",
            icon: 'success',
            confirmButtonText: "Home",
        }).then(function() {
            window.location = "/Home";
        })
        }

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