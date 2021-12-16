import React from "react";
import {Row,  Col,  Container,   Form,  Button,  Placeholder,InputGroup} from "react-bootstrap";


export const Formausuario = ({UsuGuardar, setUsuGuardar}) =>{

    const changeinput = (event)=> {
        setUsuGuardar({...UsuGuardar,[event.target.name]:event.target.value})};

    return (
        <Container className="perfil-container">
        <Row className="justify-content-md-center">
        <Col xl={15} className="perfil-form"></Col>
    
    <Row  className="mb-1">
    <center><h5><Form.Label  className="text-center" > Nombres </Form.Label> </h5>
        <Form.Group xs ={6} as={Col}  className="mb-2" controlId="formGroupCode">
            <Form.Control 
            type="text" 
            placeholder="Ingrese Nombres" 
            name="NombreUsuario" 
            onChange ={changeinput}
            />
        </Form.Group> </center>
    </Row> 
    <Row className="mb-1">
    <center><h5><Form.Label  className="text-center" > Apellidos</Form.Label> </h5>
        <Form.Group xs ={6} as={Col}  className="mb-2" controlId="formGroupCode">
            <Form.Control 
            type="text" 
            placeholder="Ingrese Apellidos" 
            name="ApellidoUsuario" 
            onChange ={changeinput}
            />
        </Form.Group> </center>
    </Row>    

    <Row className="mb-1">
    <center><h5> <Form.Label >Número de identificación</Form.Label> </h5> 
        <Form.Group xs ={6} as={Col} className="mb-2" controlId="formGroupDescription">
            <Form.Control 
            type="number" 
            placeholder="Ingrese Id" 
            name="Usuarioid"  
            onChange ={changeinput}
            />  
        </Form.Group> </center>
    </Row>  

    <Row className="mb-1">
    <center><h5><Form.Label >Correo Electrónico</Form.Label></h5>
        <Form.Group xs ={6} as={Col} className="mb-2" controlId="formGroupDescription">
            <Form.Control 
            type="text" 
            placeholder="Ingrese Correo electronico" 
            name="Correo" 
            onChange ={changeinput} 
            />    
        </Form.Group></center>
    </Row>  

    <Row className="mb-1">
    <center><h5><Form.Label>Contraseña</Form.Label></h5>
        <Form.Group xs ={6} as={Col} className="mb-2" controlId="formGroupDescription">
            <Form.Control 
            type="text" 
            placeholder="Ingrese contraseña" 
            name="contraseña" 
            onChange ={changeinput} 
            />  
        </Form.Group> </center>
    </Row> 

    <Row className="mb-1"> 
    <center><h5><Form.Label>Rol</Form.Label></h5>
    <Form.Group xs ={6} as={Col} className="mb-2" controlId="formGroupDescription">
    <Form.Select  className="mb-2" name="Rol" onChange ={changeinput} >
        <option value="0">Seleccione Rol</option>
        <option value="ADMINISTRADOR">Administrador</option>
        <option value="ESTUDIANTE">Estudiante</option>
        <option value="LIDER">Lider</option>
    </Form.Select></Form.Group></center>
    </Row>

    </Row>
    </Container>   
    )
}