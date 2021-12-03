import React from "react";
import {Container, Row,Col} from "react-bootstrap";
import {BarNavegador} from '../../../NavBar';
import {CardProyect} from "./CardProyect";


export const ExplorarProyecto = ()=> {

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
    ];

    return(
        <>
        <BarNavegador />
        <Container>
            <Row className="mb-3">
            <h2 className="text-center"> Explorador de Proyectos</h2>
            </Row>
            <Row className="mb-3">
            {listaProyectos.map((Proy)=>(
                <Col xs={6}>
                <CardProyect Project={Proy}/>
                </Col>
            ))}
            </Row>
        </Container>
        </>
    )


}