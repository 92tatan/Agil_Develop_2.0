import React, { useState , useEffect } from "react";
import {Row,  Col,  Container,   Form,  Button,  Placeholder,InputGroup} from "react-bootstrap";
import {useQuery} from "@apollo/client";
import queries from '../queries';

export const Formulario = ({Proy})=>{
    
    const Proyecto = {Proy};
    console.log(Proyecto.Proy)
    useEffect(() => {      
        
    }, []);
    const [proyEditado, setProyEditado] = useState ({});
    const changeinput = (event)=> {
        setProyEditado({...proyEditado,[event.target.name]:event.target.value})
        console.log(proyEditado)};

    return(
        <>
        <Form>
        <Row className="mb-3">
            <Form.Group as={Col} >
            <Form.Label>Titulo del Proyecto</Form.Label>
                <Form.Control 
                as="textarea" 
                placeholder="Ingresa Titulo" 
                name="Nombre_proyecto" disabled
                value= {Proyecto.Proy.Nombre_proyecto}
                />
            </Form.Group>
            <Form.Group as={Col} >
            <Form.Label>ID Proyecto</Form.Label>
                <Form.Control
                type="text"
                placeholder=" Número Proyecto Automatico "
                disabled
                name="Id_proyecto"
                value= {Proyecto.Proy.Id_proyecto}
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
                value= {Proyecto.Proy.Objetivo_general}
                onChange ={changeinput}/>
            </Form.Group>
            <Form.Group as={Col} >
            <Form.Label>Objetivos Especificos </Form.Label>
            <Form.Control 
                as="textarea" 
                placeholder="Ingresar Objetivos Especificos"
                name="Objetivo_especifico"
                value= {Proyecto.Proy.Objetivo_especifico}
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
                name="Presupuesto"  disabled
                value= {Proyecto.Proy.Presupuesto}
                />
            </InputGroup>
            </Form.Group>
            <Form.Group as={Col} >
                <Form.Label>Estado Proyecto</Form.Label>
                <Form.Select aria-label="Default select example" name="Estado_proyecto" 
                            onChange ={changeinput} value= {Proyecto.Proy.Estado_proyecto}>
                <option value="INACTIVO">Inactivo</option>
                <option value="ACTIVO">Activo</option>
                </Form.Select>
            </Form.Group>
            <Form.Group as={Col} >
                <Form.Label>Fase Proyecto</Form.Label>
                <Form.Select aria-label="Default select example" name="Fase_proyecto" 
                            onChange ={changeinput} value= {Proyecto.Proy.Fase_proyecto}>
                <option>Seleccione...</option>
                <option value="INICIADO">Iniciado</option>
                <option value="EN_PROGRESO">En Progreso</option>
                <option value="TERMINADO">Terminado</option>
                </Form.Select>
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
                name="Nombres" disabled
                value= {Proyecto.Proy.Nombres}
            />
            </Form.Group>
            <Form.Group as={Col} >
            <Form.Label>Apellidos Lider</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="Ingresa Apellido" 
                name="Apellidos" disabled
                value= {Proyecto.Proy.Apellidos}
            />
            </Form.Group>
            <Form.Group as={Col} >
            <Form.Label>Documento </Form.Label>
            <Form.Control 
                type="number" 
                placeholder="Ingresa Documento" 
                name="Documento" disabled
                value= {Proyecto.Proy.Documento}
            />
            </Form.Group>
        </Row>
        </Form>
        </>
    ) 


}