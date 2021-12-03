import React, { useState } from "react";
import {BarNavegador} from '../../NavBar';
import {Row,  Col,  Container,   Form,  Button,  Placeholder,InputGroup} from "react-bootstrap";


export const RegistroProyecto = ()=> {
    const [ProyGuardar, setProyGuardar]= useState({});
    const changeinput = (event)=> {
        setProyGuardar({...ProyGuardar,[event.target.name]:event.target.value})};
    const registrarProyecto = ()=>{
        console.log(ProyGuardar);
        ///validacion fase terminada a estado inactivo
        if (ProyGuardar.Fase_proyecto==="TERMINADO"){
            ProyGuardar.Estado_proyecto="INACTIVO"
            }
        }   
    ///datos prueba
    const listaProyectos=[
        {   Id_proyecto: 1,
            Nombre_proyecto: "INVESTIGACION EVALUACION DEL CAMBIO GLOBAL EN UN HUMEDAL DEL MEDIO AMAZONAS: SISTEMA YAHUARCACA. FASE I. LETICIA, AMAZONAS",
            Objetivo_general: "Construir colectivamente con el grupo intergeneracional de abuelas, ninos y jovenes de la comunidad ticuna de San Sebastian de los Lagos, un proceso de reflexion/accion en torno a los conceptos tradicionales sobre la Naturaleza",
            Objetivo_especifico: "Construccion de la maloca: simbolo maximo de la cultura. Ampliacion del resguardo mediante la adquisicion de terrenos.",
            Presupuesto:"378000000",
            Fecha_inicio: "21/10/2021",
            Fecha_terminacion: "21/10/2022",
            Nombres: "ANDRES ALEJANDRO",
            Apellidos: "GUEVARA DIAZ",
            Documento: "93383696",
            Estado_proyecto: "ACTIVO",
            Fase_proyecto: "EN_PROGRESO"
        },
        {   Id_proyecto: 2,
            Nombre_proyecto:"INVESTIGACION, INNOVACION Y DESARROLLO DE PRODUCTOS AGROBIODIVERSOS A ...",
            Objetivo_general:"Suministrar conocimiento sobre la diversidad biologica en diferentes e...",
            Objetivo_especifico:"Difundir informacion y conocimiento sobre la amazonia colombiana",
            Presupuesto:835639000,
            Fecha_inicio:2012-12-20,
            Fecha_terminacion:2021-12-20,
            Nombres:"JOSE",
            Apellidos:"ABELLA CALLE",
            Documento:80034003,
            Estado_proyecto:"INACTIVO",
            Fase_proyecto:"EN_PROGRESO"   
        },
        {   Id_proyecto:3,
            Nombre_proyecto:"INVESTIGACION, INVENTARIO, DELIMITACION, CARACTERIZACION Y GESTION DE ...",
            Objetivo_general:"suministrar con criterios de sostenibilidad, las bases cientiificas pa...",
            Objetivo_especifico:"Adelantar la caracterizacion de los ecosistemas y recursos naturales d...",
            Presupuesto:433285000,
            Fecha_inicio:2012-12-20,
            Fecha_terminacion:2021-12-20,
            Nombres:"ANDREA GIOVANNA",
            Apellidos:"BELTRAN RAMIREZ",
            Documento:86008152,
            Estado_proyecto:"INACTIVO",
            Fase_proyecto:"EN_PROGRESO"
        }
    ];

    return(
        <div>
        <BarNavegador />
        <Container>   
            <Row className="mb-3">
            <h2 className="text-center"> Registro de Proyectos</h2>
            </Row>
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
                value= {listaProyectos[listaProyectos.length-1].Id_proyecto+1}
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
        <Row className="mb-2">
        <Col xs="7">
        <Button variant="dark"  className="float-end" mb-3 size="lg" onClick={registrarProyecto}>
            Registrar Proyecto
        </Button>
        </Col>
        </Row>
        </Container>
        </div>
    )
}