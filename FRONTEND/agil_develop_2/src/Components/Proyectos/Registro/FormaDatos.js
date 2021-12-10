import React, { useState , useEffect } from "react";
import {Row,  Col,  Container,   Form,  Button,  Placeholder,InputGroup} from "react-bootstrap";
import {useQuery} from "@apollo/client";
import queries from '../queries';

export const Formulario = ({ProyGuardar, setProyGuardar})=>{
    
    const  data1 = useQuery(queries[0]).data;
    

    const buscartodos = ()=>{
        const DataTodos = data1?.AllProyectos
        const ultimo = DataTodos[50].Id_proyecto+1
        
        console.log(DataTodos)
        //setListaProyectos([DataTodos,...DataTodos])
        console.log(ultimo)
        return (ultimo)
            }

    const ultimoId = 4

    useEffect(() => {      
        
    }, []);
    
    const changeinput = (event)=> {
        setProyGuardar({...ProyGuardar,[event.target.name]:event.target.value})};

    return(
        <>
        <Form>
        <Row className="mb-3">
            <Form.Group as={Col} >
            <Form.Label>Titulo del Proyecto</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Ingresa Titulo" 
                name="Nombre_proyecto"
                onChange ={changeinput}
                />
            </Form.Group>
            <Form.Group as={Col} >
            <Form.Label>ID Proyecto</Form.Label>
                <Form.Control
                type="text"
                placeholder=" Número Proyecto Automatico "
                disabled
                name="Id_proyecto"
                value= {ultimoId}
                />
            </Form.Group>
        </Row>
        <Row className="mb-1">
            <Form.Group as={Col} >
            <Form.Label>Objetivo General </Form.Label>
            <Form.Control 
                as="textarea" 
                placeholder="Ingresar Objetivo General"
                name="Objetivo_general" 
                onChange ={changeinput}/>
            </Form.Group>
            <Form.Group as={Col} >
            <Form.Label>Objetivos Especificos </Form.Label>
            <Form.Control 
                as="textarea" 
                placeholder="Ingresar Objetivos Especificos"
                name="Objetivo_especifico"
                onChange ={changeinput} />
            </Form.Group>
        </Row>
        <Row className="mb-3">
        <Placeholder xs={12} bg="Dark" size="xs" />
        </Row>
        <Row className="mb-2">
            <Form.Group as={Col} >
            <Form.Label>Presupuesto</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control 
                type="number" 
                placeholder="Ingresa Presupuesto" 
                name="Presupuesto" 
                onChange ={changeinput}
                />
            </InputGroup>
            </Form.Group>
            <Form.Group as={Col} >
                <Form.Label>Estado Proyecto</Form.Label>
                <Form.Select aria-label="Default select example" name="Estado_proyecto" onChange ={changeinput}>
                <option value="INACTIVO">Inactivo</option>
                <option value="ACTIVO">Activo</option>
                </Form.Select>
            </Form.Group>
            <Form.Group as={Col} >
                <Form.Label>Fase Proyecto</Form.Label>
                <Form.Select aria-label="Default select example" name="Fase_proyecto" onChange ={changeinput}>
                <option>Default Null</option>
                <option value="INICIADO">Iniciado</option>
                <option value="EN DESARROLLO">En Desarrollo</option>
                <option value="TERMINADO">Terminado</option>
                </Form.Select>
            </Form.Group>
        </Row>
        <Row className="mb-2">
            <Form.Group as={Col} >
                <Form.Label>Fecha Actual</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Muestra Fecha" 
                disabled name="Fecha" 
                value = {new Date().toLocaleDateString()}/>
            </Form.Group>
            <Form.Group as={Col} >
                <Form.Label>Fecha Inicio</Form.Label>
                <Form.Control 
                type="Date" 
                placeholder="Ingresa Fecha Inicio" 
                name="Fecha_inicio" 
                onChange ={changeinput}
                />
            </Form.Group>
            <Form.Group as={Col} >
                <Form.Label>Fecha Finalizacion</Form.Label>
                <Form.Control 
                type="Date" 
                placeholder="Ingresa Fecha Finalizacion" 
                name="Fecha_terminacion" 
                onChange ={changeinput} 
                />
            </Form.Group>
        </Row>
        <Row className="mb-3">
        <Placeholder xs={12} bg="Dark" size="xs" />
        </Row>
        <Row className="mb-2">
            <Form.Group as={Col} >
            <Form.Label>Nombres Lider</Form.Label>
            <Form.Control 
                type="Text" 
                placeholder="Ingresa Nombre" 
                name="Nombres" 
                onChange ={changeinput}
            />
            </Form.Group>
            <Form.Group as={Col} >
            <Form.Label>Apellidos Lider</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="Ingresa Apellido" 
                name="Apellidos" 
                onChange ={changeinput}
            />
            </Form.Group>
            <Form.Group as={Col} >
            <Form.Label>Documento </Form.Label>
            <Form.Control 
                type="number" 
                placeholder="Ingresa Documento" 
                name="Documento"
                onChange ={changeinput} />
            </Form.Group>
        </Row>
        </Form>
        </>
    ) 


}