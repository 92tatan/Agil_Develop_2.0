import React, { useState , useEffect } from "react";
import {Row,  Col,  Container,   Form,  Button,  Placeholder,InputGroup} from "react-bootstrap";
import { useParams } from "react-router-dom";

export const Formulario = ({AvanceGuardar, setAvanceGuardar})=>{
    const Id_proyecto_Param = parseInt(useParams().id);

    
    let textInput = React.createRef();

    useEffect(() => {
        
        
    }, []);  

    const changeinput = (event)=> {
        setAvanceGuardar({...AvanceGuardar,[event.target.name]:event.target.value})
        console.log(AvanceGuardar);
    };

    return(
        <>
            <div>
            <Col xs="7" >
                        <Form>
                            <Form.Group className="mb-3" >
                                <Form.Label>Id Proyecto</Form.Label>
                                <Form.Control  ref={textInput} type="number" placeholder="" name="Id_proyecto" id="Id_proyecto"  onChange ={changeinput} value = {Id_proyecto_Param} disabled />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Descripcion</Form.Label>
                                <Form.Control type="text" placeholder="" name="DescripciOn_avance" id="DescripciOn_avance"  onChange ={changeinput} />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Observaciones</Form.Label>
                                <Form.Control type="text" placeholder="" name="Observaciones_lider" id="Observaciones_lider" onChange ={changeinput} />
                            </Form.Group>
       
                        </Form>
                </Col>
        </div>    
       </>
    ) 


}