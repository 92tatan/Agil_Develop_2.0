import React, { useState, useEffect } from "react";
import { Container,Row,Button,Form,Col } from "react-bootstrap";
import {BarNavegador} from '../../../NavBar';
import {Formulario} from "./FormActualizarDescripcion";
import {useQuery,useMutation} from "@apollo/client";
import queries from './queries';
import { useParams } from "react-router-dom";


export const ActualizarDescripcion = ()=> {

    const id_avance_param = parseInt(useParams().id);
    
    const [AvanceGuardar, setAvanceGuardar]= useState({});

    const [ActualizarLaDescripcion] = useMutation(queries[1],{variables:{
        idAvance: parseInt(AvanceGuardar.Id_avance), 
        descripciOnAvance: AvanceGuardar.DescripciOn_avance
        }})    

    const ActualizarDescripciones = ()=>{

        ActualizarLaDescripcion();
        }


    useEffect(() => {    
        setAvanceGuardar({...AvanceGuardar,["Id_avance"]:id_avance_param});
             
    }, []);
    return(
        <>
        <BarNavegador />
        <Container>
        <h1 className="text-center mt-5" >Actualizar Descripcion</h1>,

        <Formulario   AvanceGuardar={AvanceGuardar} setAvanceGuardar={setAvanceGuardar}  />
        <Row className="mb-2">
        <Col xs="7">
        <Button variant="dark"  className="float-end" mb-3 size="lg" onClick={ActualizarDescripciones}>
            Actualizar Descripción
        </Button>
        </Col>
        </Row>
        </Container>
        </>
    )
}