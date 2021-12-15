import React from "react";
import {BarNavegador} from '../../NavBar';
import { useEffect } from "react";
import {Row,  Col,  Container,  Table,  Form,  Button,  Placeholder,} from "react-bootstrap";


export const Perfil = ()=> {
    return(
        <Container className="perfil-container">
          <Row className="justify-content-md-center">
          <Col xl={15} className="perfil-form"></Col>
        <div>
        <BarNavegador />
        <h2 className="text-left mt-5" >Detalles de Usuario </h2>
        </div>

        <Row className="justify-content-md-center">
        <center><h5><Form.Label  className="text-center" > Nombre Completo</Form.Label> </h5></center>
            <Form.Group xs ={6} as={Col}  className="mb" controlId="formGroupCode">
              <Form.Control 
                type="number" 
                placeholder="Escriba un nombre" 
                name="NombreUsuario" 
                
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