import React, { useState, useEffect } from "react";
import {BarNavegador} from '../../../NavBar';
import {Row,  Col,  Container,   Form,  Button,  Placeholder,InputGroup} from "react-bootstrap";
import {useMutation, useQuery} from "@apollo/client";
import queries from '../queries';
import {Formulario} from './FormAvances';
import { useParams } from "react-router-dom";


export const RegistroAvance = ()=> {

    const Id_proyecto_Param1 = parseInt(useParams().id);

    const [AvanceGuardar, setAvanceGuardar]= useState({});

    const [addAvance] = useMutation(queries[0],{variables: {
        IdProyecto: parseInt(AvanceGuardar.Id_proyecto), 
        DescripciOnAvance: AvanceGuardar.DescripciOn_avance,
        ObservacionesLider: AvanceGuardar.Observaciones_lider
        }}) 
    

    const registrarAvance = ()=>{

        console.log(AvanceGuardar);


        addAvance();
        }
        useEffect(() => {
            setAvanceGuardar({...AvanceGuardar,["Id_proyecto"]:Id_proyecto_Param1});
            const variable = 1 + 1;
            console.log("vale:",variable);
       
        }, []);

    return(
        <>
        <div>
        <BarNavegador />
        <Container>   
            <Row className="mb-3">
            <h2 className="text-center"> Registro de Avances</h2>
            </Row>
        <Formulario   AvanceGuardar={AvanceGuardar} setAvanceGuardar={setAvanceGuardar}  />
        
        <Row className="mb-2">
        <Col xs="7">
        <Button variant="dark"  className="float-end" mb-3 size="lg" onClick={registrarAvance}>
            Registrar Proyecto
        </Button>
        </Col>
        </Row>
        </Container>
        </div>        </>
        
    )

}