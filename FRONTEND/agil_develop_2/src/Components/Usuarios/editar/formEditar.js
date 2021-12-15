import React, { useState , useEffect } from "react";
import {Row,  Col,  Container,   Form,  Button,  Placeholder,InputGroup} from "react-bootstrap";
import {useQuery} from "@apollo/client";
import queries from '../queries';

export const FormaEditarUsuario = ({UsuGuardar, setUsuGuardar}) =>{

    const changeinput = (event)=> {
        setUsuGuardar({...UsuGuardar,[event.target.name]:event.target.value})};




    return (
          <Container className="perfil-container">
          <Row className="justify-content-md-center">
          <Col xl={15} className="perfil-form"></Col>
        <div>
        
        <h2 className="text-left mt-5" >Detalles de Usuario </h2>
        </div>

        <Row className="justify-content-md-center">
        <center><h5><Form.Label  className="text-center" > Nombres</Form.Label> </h5></center>
            <Form.Group xs ={6} as={Col}  className="mb" controlId="formGroupCode">
              <Form.Control 
                type="text" 
                placeholder="Escriba un nombre" 
                name="NombreUsuario" 
                onChange ={changeinput}
                
                 />
            </Form.Group>   
            </Row>  
        
        <Row className="justify-content-md-center">
        <center><h5><Form.Label  className="text-center" > Apellidos</Form.Label> </h5></center>
         <Form.Group xs ={6} as={Col}  className="mb" controlId="formGroupCode">
            <Form.Control 
              type="text" 
              placeholder="Apellidos" 
              name="ApellidoUsuario" 
              onChange ={changeinput}
              
               />
          </Form.Group> 
          </Row>    
        <Row className="justify-content-md-center">
            <center><h5><Form.Label >Correo Electrónico</Form.Label></h5></center>
             <Form.Group xs ={6} as={Col} className="mb" controlId="formGroupDescription">
               <Form.Control 
                type="text" 
                placeholder="Correo electrónico" 
                abled 
                name="Correo"  
                onChange ={changeinput}
                />    
            </Form.Group>
            </Row>  

        <Row className="justify-content-md-center">
            <center><h5> <Form.Label >Número de identificación</Form.Label> </h5></center> 
                <Form.Group xs ={6} as={Col} className="mb" controlId="formGroupDescription">
                
                    <Form.Control 
                    type="text" 
                    placeholder="Id" 
                    abled 
                    name="Id"  
                    abled
                    onChange ={changeinput}
                    />  
            </Form.Group> 
            </Row>  

        <Row className="justify-content-md-center">
            <center><h5><Form.Label>Contraseña</Form.Label></h5></center>
                <Form.Group xs ={6} as={Col} className="mb" controlId="formGroupDescription">
                    <Form.Control 
                type="text" 
                placeholder="contraseña" 
                abled 
                name="contrasena"  
                abled
                onChange ={changeinput}
                />  
            </Form.Group> 

                                              
        
        </Row> 

        

          <Button xs ={4} as={Col} 
           variant="primary"  
           type="button" 
           >
             Actualizar Información Personal
             </Button>

         

             
         
          <Row className="mb-2">
              
        
    </Row>


        </Row>



        </Container>
        )
}
