import React from "react";
import {Row,  Col,  Container,   Form, } from "react-bootstrap";
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import queries from '../queries';

export const FormaActualizar = ()=>{
    const Documento = parseInt(useParams().id);
    const data = useQuery(queries[1],{variables: {Documento:Documento}}).data;

    

    return (
        <Container className="perfil-container">
        <Row className="justify-content-md-center">
        <Col xl={15} className="perfil-form"></Col>
        
        <Row  className="mb-1">
        <center><h5><Form.Label  className="text-center" > Nombres</Form.Label> </h5>
            <Form.Group xs ={6} as={Col}  className="mb" controlId="formGroupCode">
            <Form.Control 
                type="text" 
                placeholder="Escriba un nombre" 
                name="NombreUsuario" 
                value={data?.UsuarioxId.Nombres}
                disabled
                />
            </Form.Group>   </center>
            </Row> 
        
            <Row className="mb-1">
            <center><h5><Form.Label  className="text-center" > Apellidos</Form.Label> </h5>
            <Form.Group xs ={6} as={Col}  className="mb" controlId="formGroupCode">
            <Form.Control 
                type="text" 
                placeholder="Apellidos" 
                name="ApellidoUsuario" 
                value={data?.UsuarioxId.Apellidos}
                disabled
            />
            </Form.Group> </center>
            </Row>    
            <Row className="mb-1">
            <center><h5><Form.Label >Correo Electrónico</Form.Label></h5>
            <Form.Group xs ={6} as={Col} className="mb" controlId="formGroupDescription">
            <Form.Control 
                type="text" 
                placeholder="Correo electrónico" 
                abled 
                name="Correo"  
                value={data?.UsuarioxId.Email}
                disabled
                />    
            </Form.Group></center>
            </Row>  
            <Row className="mb-1">
            <center><h5> <Form.Label >Número de identificación</Form.Label> </h5>
                <Form.Group xs ={6} as={Col} className="mb" controlId="formGroupDescription">
                    <Form.Control 
                    type="number" 
                    placeholder="Documento" 
                    name="Documento" 
                    value={data?.UsuarioxId.Documento}
                    disabled
                    />  
            </Form.Group> </center>
            </Row>  
           

        </Row>
        </Container>
        )


}