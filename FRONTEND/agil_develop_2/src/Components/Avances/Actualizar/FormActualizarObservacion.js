import React, { useState, useEffect } from "react";
import {Row,  Col,  Container,   Form,  Button,  Placeholder,InputGroup} from "react-bootstrap";
import { useParams } from "react-router-dom";

export const Formulario = ({AvanceGuardar, setAvanceGuardar})=>{

    const Id_avance_Param1 = parseInt(useParams().id);

    useEffect(() => {
        setAvanceGuardar({...AvanceGuardar,["Id_avance"]:Id_avance_Param1});
        const variable = 1 + 1;
        console.log("vale:",variable);
    
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
                        <Form.Label>Id Avance</Form.Label>
                        <Form.Control  type="number" placeholder="" name="Id_avance" id="Id_avance"  onChange ={changeinput} value = {Id_avance_Param1} disabled />
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