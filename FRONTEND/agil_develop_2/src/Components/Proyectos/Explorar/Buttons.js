import React, {  useState } from "react";
import {Container, Row,Col,Button,Form} from "react-bootstrap";
import {useQuery} from "@apollo/client";
import queries from '../queries';

export const botones = ()=>{
/* 
    const [DatosShow, setDatosShow] = useState([])
    const [IDPrbuscado, setIDPrbuscado] = useState({IdProyecto:0})
    const [IDLider, setIDLider] = useState({Documento:0})
    /// HU006 y HU019
    const  data1 = useQuery(queries[0]).data;
    const TraerTodos = ()=>{
        const DataTodos = data1?.AllProyectos
        setDatosShow([...DataTodos])
        }
    /// HU017
    const changeinputProyecto = (event)=>{
        setIDPrbuscado({...IDPrbuscado,[event.target.name]:parseInt(event.target.value)});
        console.log(IDPrbuscado)
        };
    const data2 = useQuery(queries[1],{variables: {idProyecto:IDPrbuscado.IdProyecto}}).data;
    const TraerXId = ()=>{
        const DataxId = data2?.ProyectoxId
        console.log(DataxId)
        setDatosShow([DataxId])
        }
    /// HU013
    const changeinputLider = (event)=>{
        setIDLider({...IDLider,[event.target.name]:parseInt(event.target.value)});
        console.log(IDLider)
        };
    const data3 = useQuery(queries[2],{variables: {documento:IDLider.Documento}}).data;
    const TraerXIdLider = ()=>{
        const DataxIdL = data3?.ProyectoxCC
        console.log(DataxIdL)
        setDatosShow([...DataxIdL])
        }
    return(
    <>
        <Row className="mb-3">
            <Button  variant="success"  disabled={false} onClick={TraerTodos}>Buscar todos</Button>
            </Row>

            <Row className="mb-3">
            <Form.Label>ID Proyecto</Form.Label>
            <Form.Control 
                type="number" 
                placeholder="Ingresa Número Proyecto" 
                name="IdProyecto"
                onChange={changeinputProyecto} />
            <Button  variant="success"  disabled={false} onClick={TraerXId} >Buscar por ID Proyecto</Button>
            </Row>
            <Row className="mb-3">
            <Form.Label>ID Lider</Form.Label>
            <Form.Control 
                type="number" 
                placeholder="Ingresa Id Lider" 
                name="Documento"
                onChange={changeinputLider} />
            <Button  variant="success"  disabled={false} onClick={TraerXIdLider}>Buscar por ID Lider</Button>
            </Row>
    </>  
    )  */
    }