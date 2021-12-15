import React, { useState } from "react";
import {Container, Row,Col,Button,Form} from "react-bootstrap";
import {BarNavegador} from '../../../NavBar';
import {CardProyect} from "./CardProyect";
import {useQuery} from "@apollo/client";
import queries from '../queries';



export const ExplorarProyecto = ()=> {
    const [DatosShow, setDatosShow] = useState([]);
    const [IDPrbuscado, setIDPrbuscado] = useState({IdProyecto:0});
    const [IDLider, setIDLider] = useState({Documento:0});
    /// HU006 y HU019
    const  data1 = useQuery(queries[0]).data;
    const TraerTodos = ()=>{
        const DataTodos = data1?.AllProyectos
        console.log(DataTodos)
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
        <BarNavegador />
        <Container>
            <Row className="mb-3">
            <h2 className="text-center"> Explorador de Proyectos</h2>
            </Row>
            
            <Col xs={3}>
            <Button  variant="success"  disabled={false} onClick={TraerTodos}>Buscar todos</Button>
            </Col><br />
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
            </Col ><br />
            <Col xs={3}>
            <Form.Label>ID Lider</Form.Label>
            <Form.Control 
                className="mb-2"
                type="number" 
                placeholder="Ingresa Id Lider" 
                name="Documento"
                onChange={changeinputLider} />
            <Button  variant="success"  disabled={false} onClick={TraerXIdLider}>Buscar por ID Lider</Button>
            </Col></Row><br /><br />

            <Row className="mb-3">
            {DatosShow.map((Proy)=>(
                <Col xs={6} key={Proy.Id_proyecto}>
                <CardProyect Project={Proy}/>
                </Col>
            ))}
            </Row>
        </Container>
        </>
    )
}




/* const listaProyectos2 = data?.AllProyectos

    console.log(listaProyectos2);

    const listaProyectos = [
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
            Fase_proyecto:"TERMINADO"   
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
    ]; */