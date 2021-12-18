import React, { useState } from "react";
import { Container,Row,Button,Form,Col } from "react-bootstrap";
import {BarNavegador} from '../../../NavBar';
import {Formulario} from "./EstadoUsuario";
import {useQuery} from "@apollo/client";
import queries from '../queries';


export const ActualizarUsuario = ()=> {
    const [DatosEditar, setDatosEditar] = useState([]);
    const [IDUsbuscado, setIDUsbuscado] = useState({IdUsuario:0});
    /// HU017
    const changeinputUsuario = (event)=>{
        setIDUsbuscado({...IDUsbuscado,[event.target.name]:parseInt(event.target.value)});
        console.log(IDUsbuscado)
        };
    const data2 = useQuery(queries[1],{variables: {IdUsuario:IDUsbuscado.IdUsuario}}).data;
    const TraerXId = ()=>{
        const DataxId = data2?.UsuarioxId
        console.log(DataxId)
        setDatosEditar(DataxId)
        }

    const BuscarUsuario = (UsuModif)=>{
        ///validacion fase terminada o estado inactivo
        if (UsuModif.Estado_Usuario==="PENDIENTE" || UsuModif.Estado_Usuario==="AUTORIZADO"){
            console.log("Estado de usuario actualizado")
            }else{
                (UsuModif.Estado_Usuario==="PENDIENTE" || UsuModif.Estado_Usuario==="NO_AUTORIZADO"){
                    console.log("Estado de usuario actualizado")

            }
        }   
    return(
        <>
        <BarNavegador />
        <Container>
        <h1 className="text-center mt-5" >Actualizar usuario</h1>,
        <Row className="mb-3">
            <Col xs={3}>
            <Form.Label>Documento</Form.Label>
            <Form.Control 
                className="mb-2"
                type="number" 
                placeholder="Ingresa Número de documento" 
                name="Documento"
                onChange={changeinputUsuario} />
            <Button  variant="success"  disabled={false} onClick={TraerXId} >Buscar por documento</Button>
            </Col >
        </Row>
            <br />
        <Formulario  Proy={DatosEditar}/>
        </Container>
        </>
    )


}