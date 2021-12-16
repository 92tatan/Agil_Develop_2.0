import React, { useState, useEffect } from "react";
import { Container,Row,Button,Form,Col } from "react-bootstrap";
import {BarNavegador} from '../../../NavBar';
import {Formulario} from "./FormActualizarObservacion";
import {useQuery,useMutation} from "@apollo/client";
import queries from './queries';
import { useParams } from "react-router-dom";


export const ActualizarObservacion = ()=> {
    
    const id_avance_param = parseInt(useParams().id);
    
    const [AvanceGuardar, setAvanceGuardar]= useState({});

    const [ActualizarLaObservacion] = useMutation(queries[0],{variables:{
        idAvance: parseInt(AvanceGuardar.Id_avance), 
        observacionesLider: AvanceGuardar.Observaciones_lider
        }})    

    const ActualizarObservaciones = ()=>{


        ActualizarLaObservacion();
        }


    useEffect(() => {    
        setAvanceGuardar({...AvanceGuardar,["Id_avance"]:id_avance_param});
        const variable = 1 + 1;
        console.log("vale:",variable);
             
    }, []);
    return(
        <>
        <BarNavegador />
        <Container>
        <h1 className="text-center mt-5" >Actualizar Observaciones</h1>,

        <Formulario   AvanceGuardar={AvanceGuardar} setAvanceGuardar={setAvanceGuardar}  />
        <Row className="mb-2">
        <Col xs="7">
        <Button variant="dark"  className="float-end" mb-3 size="lg" onClick={ActualizarObservaciones}>
            Actualizar Observaciones
        </Button>
        </Col>
        </Row>
        </Container>
        </>
    )
}