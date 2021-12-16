import React, { useState } from "react";
import { Container,Row,Button,Col } from "react-bootstrap";
import {BarNavegador} from '../../../NavBar';
import {Formulario} from "./FormaActualizacion";
import {useQuery,useMutation} from "@apollo/client";
import queries from '../queries';
import { useParams } from "react-router-dom";


export const ActualizarProyecto = ()=> {
    const valor = parseInt(useParams().id);
    
    const [DatosEditar, setDatosEditar] = useState({"Nombres":"","Apellidos":""});
    console.log(DatosEditar)
    const [proyEditado, setProyEditado] = useState ({IdProyecto: valor,  estadoProyecto: "" , Fase_proyecto:""});
    const[proyecTerminado, setProyecTerminado] = useState(true)
    const data = useQuery(queries[1],{variables: {idProyecto:valor}}).data;
    const TraerXId = ()=>{
        ///validacion fase terminada o estado inactivo
        if (data?.ProyectoxId.Fase_proyecto==="TERMINADO" ){
            console.log("Este proyecto esta terminado")
            setProyecTerminado(true)
            }else{
        const DataxId2 = data?.ProyectoxId
        //console.log(DataxId)
        setDatosEditar(DataxId2)
        setProyecTerminado(false)
        //console.log(proyEditado)
        }
        }

    const [actProyecto] = useMutation(queries[3],{variables: {
        idProyecto: parseInt(proyEditado.IdProyecto), 
        estadoProyecto: proyEditado.estadoProyecto
        }}) 
    const [actFase] = useMutation(queries[5],{variables: {
        idProyecto: parseInt(proyEditado.IdProyecto), 
        faseProyecto: proyEditado.Fase_proyecto
        }}) 

    const registrarEstadoFase = ()=>{
        console.log(proyEditado);
        actProyecto()
        actFase()
        }   

    return(
        <>
        <BarNavegador />
        <Container>
        <h1 className="text-center mt-5" >Actualizar Proyecto</h1>,
        <Row className="mb-3">
            <Col xs={3}>
            <Button  variant="success"  disabled={false} onClick={TraerXId} >Editar Proyecto {valor}</Button>
            </Col >
        </Row>
            <br />
        <Formulario  Proy={DatosEditar} proyEditado={proyEditado} setProyEditado={setProyEditado}/>
        <Button  variant="success"  disabled={proyecTerminado} onClick={registrarEstadoFase} >Actualizar Estado y Fase</Button>
        
        </Container>
        </>
    )


}