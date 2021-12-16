import React, { useState,useEffect } from "react";
import { Card,Button,Row ,Col,Accordion,ButtonGroup} from "react-bootstrap";
import { Link } from "react-router-dom";


export const CardProyect = ({Project})=>{
    const [projectActivo, setProjectActivo] = useState(false)

    var utcSeconds = parseInt(Project.Fecha_inicio);
    function dateDisplayed(utcSeconds) {
        var date = new Date(utcSeconds);
        return (date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear());
    }

    useEffect(() => {
    const valproject = ()=>{
        if (Project.Fase_proyecto !=="TERMINADO"){
        setProjectActivo(true)}}
    valproject()
    
    }, []);

    //var utcSeconds = Project.Fecha_inicio;
    //console.log(utcSeconds)
    //var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    //const fechabien = dateDisplayed() //d.setUTCSeconds(utcSeconds);
    //console.log(fechabien)

    

    return (
        <>
        <Card style={{ width: '32rem' }} className="mb-3">
        <Card.Body>
            <Card.Title>{Project.Nombre_proyecto}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted"> Lider: {Project.Nombres} {Project.Apellidos}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted"> ID: {Project.Id_proyecto} </Card.Subtitle>

                <Accordion defaultActiveKey="0" className="mb-3">
                <Accordion.Item eventKey="1">
                <Accordion.Header>Información Proyecto</Accordion.Header>
                <Accordion.Body>Objetivo General: {Project.Objetivo_general}</Accordion.Body>
                <Accordion.Body>Objetivos Especificos: {Project.Objetivo_especifico}</Accordion.Body>
                <Accordion.Body>Presupuesto: $ {Project.Presupuesto}</Accordion.Body>
                <Accordion.Body>Fecha Inicio: {Project.Fecha_inicio}</Accordion.Body>
                <Accordion.Body>Fecha Terminacion: {Project.Fecha_terminacion}</Accordion.Body>
                <Accordion.Body>Estado Proyecto: {Project.Estado_proyecto}</Accordion.Body>
                <Accordion.Body>Fase Proyecto: {Project.Fase_proyecto}</Accordion.Body>
                </Accordion.Item>
                </Accordion>
            
            <Button  variant="success" href="/Inscripcion_Proyectos" disabled={!projectActivo}>Inscripción</Button>
            <br /><br />
            <Row className="mb-3">
            <Col><Link to={`/Registro_Avances/${Project.Id_proyecto}`}>
            <Button variant="secondary"  disabled={!projectActivo}>Nuevo Avance</Button></Link>
            </Col>
            <Col><Link to={`/Explorar_Avances/${Project.Id_proyecto}`}>
            <Button variant="secondary"  disabled={!projectActivo}>Ver Avances</Button></Link>
            </Col>            
            <Col>
            <Button variant="secondary" href="/Actualizar_Proyectos" disabled={!projectActivo}>Actualizar</Button>
            </Col>
            </Row>
        </Card.Body>
        </Card>
        </>
    )
}