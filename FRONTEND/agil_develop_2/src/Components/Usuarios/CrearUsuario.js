import React from "react";
import {BarNavegador} from '../../NavBar';
import { useEffect } from "react";
import {Row,  Col,  Container,  Table,  Form,  Button,  Placeholder,} from "react-bootstrap";


export const CrearUsuario = ()=> {
    return(
        <Container className="perfil-container">
          <Row className="justify-content-md-center">
          <Col xl={15} className="perfil-form"></Col>
        <div>
        <BarNavegador />
        <h2 className="text-left mt-5" >Datos Usuario </h2>
        </div>

        <Row className="justify-content-md-center">
        <center><h5><Form.Label  className="text-center" > Nombre Completo</Form.Label> </h5></center>
            <Form.Group xs ={6} as={Col}  className="mb" controlId="formGroupCode">
              <Form.Control 
                type="text" 
                placeholder="Escriba un nombre" 
                name="NombreUsuario" 
                
                 />
            </Form.Group>   
         

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
        <Row>
        <br ></br >
        </Row>

        <center><h5><Form.Group xs ={6} as={Col} > 
            <Row> 
        
        <Form.Select  className="me-sm-2" name="Rol" >
            <option value="0">Rol</option>
            <option value="cancelada">Administrador</option>
            <option value="En proceso">Estudiante</option>
            <option value="entregada">Lider</option>
            </Form.Select>
           
            </Row>

            </Form.Group></h5></center>

      

        

        

          <Button xs ={4} as={Col} 
           variant="primary"  
           type="button" 
           >
             Crear Usuario
             </Button>

         

             
         
          <Row className="mb-2">
              
        
    </Row>


        </Row>



        </Container>         

        
    )


}