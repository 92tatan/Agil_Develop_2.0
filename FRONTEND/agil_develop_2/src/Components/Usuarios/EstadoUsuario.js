import React from "react";
import {BarNavegador} from '../../NavBar';
import { useState } from "react";
import {Row,  Col,  Container,  Table,  Form,  Button,  Placeholder, FormGroup,} from "react-bootstrap";
import {useQuery} from "@apollo/client";
import queries from '../Usuarios/queries';


export const EstadoUsuario = () => {
 
  const [IDUsuariobuscado, setUsuariobuscado] = useState({Documento:0});

  const data = useQuery(queries[1],{variables: {Documento:IDUsuariobuscado.Documento}}).data;
    const TraerUsuarioxId = ()=>{
        const DataxId = data?.UsuarioxId
        console.log(DataxId)
       // setDatosShow([DataxId])
        }
          
          /// HU017
          const changeinputUsuario = (event)=>{
            setUsuariobuscado({...IDUsuariobuscado,[event.target.name]:parseInt(event.target.value)});
              console.log(IDUsuariobuscado)
              };

    return(
        <Container className="estado-container">
          <Row className="justify-content-md-center">
          <Col xl={15} className="estadousuarios-form"></Col>
        <div>
        <BarNavegador />
        <h2 className="text-center mt-5" >Estado de Usuario </h2>
        </div>

        <Row>
        <h5><Form.Label>Documento Usuario</Form.Label></h5>
            <Form.Group xs ={6} as={Col}  className="mb-1" controlId="formGroup">
              <Form.Control onChange = {changeinputUsuario}
                type="string" 
                placeholder="Escriba un número de documento" 
                name="Documento"
                             />
            </Form.Group>   

          <Button xs ={1} as={Col} 
           variant="primary"  
           type="button" 
           onChange ={TraerUsuarioxId}
           >
             Buscar
             </Button>
                                              
        </Row>
        

        <Row> 
        <br/>
            </Row>

            <Row>
            <center><h5><Form.Label> Usuarios Registrados</Form.Label></h5></center>
            </Row>

                     
        <br />
       <Row className="mb-3">
          <Placeholder xs={12} bg="primary" size="xs" />
        </Row>
        <Row className="mb-2">
              
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Identificación</th>
                <th>Email</th>
                <th>Tipo de Usuario</th>
                <th>Estado</th>
                
              
                
                </tr>
            </thead>
            <tbody>
          {data &&
            data.AllUsuarios.map((u) => {
              return (
                <tr key={u._id}>
                  <td>{u.Nombres}</td>
                  <td>{u.Documento}</td>
                  <td>{u.Email}</td>
                  <td>{u.Rol}</td>
                  <td>{u.Status}</td>
                  <td>
                    
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
           
    </Row>

    <Row> 
        <FormGroup xs ={5} as={Col} >
        <Form.Select  className="me-sm-2" name="Estado" >
            <option value="0">Modificar Estado</option>
            <option value="PENDIENTE">Pendiente</option>
            <option value="AUTORIZADO">Autorizado</option>
            <option value="NO_AUTORIZADO">No Autorizado</option>
            </Form.Select>
            </FormGroup>
            </Row>


        </Row>



        </Container>         

        
    )


          }