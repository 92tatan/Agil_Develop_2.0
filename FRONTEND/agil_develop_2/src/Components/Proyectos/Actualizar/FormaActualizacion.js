import React from "react";
import {Row,  Col,  Container,   Form,  Button,  Placeholder,InputGroup} from "react-bootstrap";

export const Formulario = ({Proy,proyEditado,setProyEditado})=>{
    
    const Proyecto = {Proy};
    console.log(Proyecto)
    const changeinput = (event)=> {
        setProyEditado({...proyEditado,[event.target.name]:event.target.value})
    };

    return(
        <>
        <Form>
        <Row className="mb-3">
            <Form.Group as={Col} xs={2} >
            <Form.Label>ID Proyecto</Form.Label>
                <Form.Control
                type="text"
                placeholder=" Datos Proyecto Editar "
                disabled
                name="Id_proyecto"
                value= {Proyecto.Proy.Id_proyecto}
                />
                </Form.Group>
            <Form.Group as={Col} >
            <Form.Label>Lider</Form.Label>
            <Form.Control 
                type="Text" 
                placeholder=" Datos Proyecto Editar " 
                name="Nombres" disabled
                value= {Proyecto.Proy.Nombres+" "+Proyecto.Proy.Apellidos }
            />
            </Form.Group>
            <Form.Group as={Col} xs={3}>
            <Form.Label>Documento </Form.Label>
            <Form.Control 
                type="number" 
                placeholder=" Datos Proyecto Editar " 
                name="Documento" disabled
                value= {Proyecto.Proy.Documento}
            />
            </Form.Group>
        </Row>
        <Row className="mb-1">
        <Form.Group as={Col} >
            <Form.Label>Titulo del Proyecto</Form.Label>
                <Form.Control 
                as="textarea" 
                placeholder=" Datos Proyecto Editar "
                name="Nombre_proyecto" disabled
                style={{ height: '150px' }}
                value= {Proyecto.Proy.Nombre_proyecto}
                />
            </Form.Group>
            <Form.Group as={Col} >
            <Form.Label>Objetivo General </Form.Label>
            <Form.Control 
                as="textarea" 
                placeholder=" Datos Proyecto Editar "
                name="Objetivo_general" disabled
                style={{ height: '170px' }}
                value= {Proyecto.Proy.Objetivo_general}
                onChange ={changeinput}/>
            </Form.Group>
        </Row>
        <Row className="mb-3">
        <Placeholder xs={12} bg="Dark" size="xs" />
        </Row>
        <Row className="mb-2">
            <Form.Group as={Col} >
                <Form.Label>Estado Proyecto</Form.Label>
                <Form.Select aria-label="Default select example" name="estadoProyecto" 
                            onChange ={changeinput} value= {proyEditado.estadoProyecto}>
                <option>Seleccione Nuevo Estado...</option>
                <option value="INACTIVO">Inactivo</option>
                <option value="ACTIVO">Activo</option>
                </Form.Select>
            </Form.Group>
            <Form.Group as={Col} >
                <Form.Label>Fase Proyecto</Form.Label>
                <Form.Select aria-label="Default select example" name="Fase_proyecto" 
                            onChange ={changeinput} value= {proyEditado.Fase_proyecto}>
                <option>Seleccione Nueva Fase</option>
                <option value="INICIADO">Iniciado</option>
                <option value="EN_PROGRESO">En Progreso</option>
                <option value="TERMINADO">Terminado</option>
                </Form.Select>
            </Form.Group>
        </Row>
        <Row className="mb-3">
        <Placeholder xs={12} bg="Dark" size="xs" />
        </Row>
        
        </Form>
        </>
    ) 


}