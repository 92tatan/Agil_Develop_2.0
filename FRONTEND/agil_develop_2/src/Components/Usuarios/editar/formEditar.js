import React from "react";
import {Row,  Col,  Container,   Form} from "react-bootstrap";


export const FormaEditarUsuario = ({UsuGuardar, setUsuGuardar}) =>{

    const changeinput = (event)=> {
        setUsuGuardar({...UsuGuardar,[event.target.name]:event.target.value})};

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
                onChange ={changeinput}
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
                onChange ={changeinput}
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
                onChange ={changeinput}
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
                    onChange ={changeinput}
                    />  
            </Form.Group> </center>
            </Row>  
            <Row className="mb-1">
            <center><h5><Form.Label>Contraseña</Form.Label></h5>
                <Form.Group xs ={6} as={Col} className="mb" controlId="formGroupDescription">
                    <Form.Control 
                type="text" 
                placeholder="contraseña" 
                name="contraseña"  
                onChange ={changeinput}
                />  
            </Form.Group> </center>
        </Row> 

        </Row>
        </Container>
        )
}
