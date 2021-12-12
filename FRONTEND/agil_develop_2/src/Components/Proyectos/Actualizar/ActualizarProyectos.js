import React, { useState } from "react";
import { Container,Row,Button,Form,Col } from "react-bootstrap";
import {BarNavegador} from '../../../NavBar';
import {Formulario} from "./FormaActualizacion";
import {useQuery} from "@apollo/client";
import queries from '../queries';


export const ActualizarProyecto = ()=> {
    const [DatosEditar, setDatosEditar] = useState([]);
    const [IDPrbuscado, setIDPrbuscado] = useState({IdProyecto:0});
    /// HU017
    const changeinputProyecto = (event)=>{
        setIDPrbuscado({...IDPrbuscado,[event.target.name]:parseInt(event.target.value)});
        console.log(IDPrbuscado)
        };
    const data2 = useQuery(queries[1],{variables: {idProyecto:IDPrbuscado.IdProyecto}}).data;
    const TraerXId = ()=>{
        const DataxId = data2?.ProyectoxId
        console.log(DataxId)
        setDatosEditar(DataxId)
        }

    const BuscarProyecto = (ProyModif)=>{
        ///validacion fase terminada o estado inactivo
        if (ProyModif.Fase_proyecto==="TERMINADO" || ProyModif.Estado_proyecto==="INACTIVO"){
            console.log("Este proyecto esta inactivo")
            }else{

            }
        }   
    return(
        <>
        <BarNavegador />
        <Container>
        <h1 className="text-center mt-5" >Actualizar Proyecto</h1>,
        <Row className="mb-3">
            <Col xs={3}>
            <Form.Label>ID Proyecto</Form.Label>
            <Form.Control 
                className="mb-2"
                type="number" 
                placeholder="Ingresa Número Proyecto" 
                name="IdProyecto"
                onChange={changeinputProyecto} />
            <Button  variant="success"  disabled={false} onClick={TraerXId} >Buscar por ID Proyecto</Button>
            </Col >
        </Row>
            <br />
        <Formulario  Proy={DatosEditar}/>
        </Container>
        </>
    )


}