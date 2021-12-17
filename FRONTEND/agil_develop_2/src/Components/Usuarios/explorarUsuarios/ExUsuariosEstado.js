import React from "react";
import {BarNavegador} from '../../../NavBar';
import { useState } from "react";
import {Row,   Col,  Container,  Table,  Form,  Button,  Placeholder, FormGroup,} from "react-bootstrap";
import {useQuery} from "@apollo/client";
import queries from '../queries';
import { Link } from "react-router-dom";

export const ExUsuarioEstado = () => {
 
  const [DatosMostrar, setDatosMostrar ]  = useState ([]) 
  const [IDUsuariobuscado, setUsuariobuscado] = useState({Documento:0});

  const data = useQuery(queries[1],{variables: {Documento:IDUsuariobuscado.Documento}}).data;
  console.log (data)
    const TraerUsuarioxId = ()=>{
        const DataxId = data?.UsuarioxId
        console.log(DataxId)
        setDatosMostrar([DataxId])
        }

    const  dataAll  = useQuery(queries[0]).data;
        console.log(dataAll)
        const TraerUsuario = ()=>{
            const DataUsuarios = dataAll?.AllUsuarios
            console.log(dataAll)
            setDatosMostrar([...DataUsuarios])
            }
        
        //datoTodos
        

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
        <h2 className="text-center mt-5" >Explorador de Usuarios </h2>
        </div>

        <Row>

        <Button xs ={2} as={Col} 
           variant="primary"  
           type="button" 
           onClick ={TraerUsuario}
           >
             Buscar Todos
             </Button>

        <Row> 
        <br/>
            </Row>
        <h5><Form.Label>Documento Usuario</Form.Label></h5>
            <Form.Group xs ={6} as={Col}  className="mb-1" controlId="formGroup">
              <Form.Control onChange = {changeinputUsuario}
                type= "number" 
                placeholder="Escriba un número de documento" 
                name="Documento"
                             />
            </Form.Group>   

          <Button xs ={2} as={Col} 
           variant="primary"  
           type="button" 
           onClick ={TraerUsuarioxId}
           >
             Buscar Usuario
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
                <th>Modificar Estado</th>
                </tr>
            </thead>
            <tbody>
          {DatosMostrar.map((u) => {
              return (
                <tr key={u._id}>
                  <td>{u.Nombres}</td>
                  <td>{u.Documento}</td>
                  <td>{u.Email}</td>
                  <td>{u.Rol}</td>
                  <td>{u.Status}</td>
                  <td>
                    <Link to={`/Estado_Usuario/Actualizar_Estado/${u.Documento}`}>
                    <i class='fas fa-pen hover:text-yellow-400 cursor-pointer'>Editar</i>
                    </Link>
                  </td>
                 
                </tr>
              );
            })}
        </tbody>
      </Table>
           
    </Row>

    </Row>
        </Container>         

        
    )


          }