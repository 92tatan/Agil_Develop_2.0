import React from "react";
import {BarNavegador} from '../../../NavBar';
import { useState } from "react";
import {Row,   Col,  Container,   Form,  Button,  Placeholder, FormGroup,} from "react-bootstrap";
import {useQuery, useMutation} from "@apollo/client";
import queries from '../queries';
import { Link } from "react-router-dom";
import { useEffect,} from "react";
import { useParams } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import {FormaActualizar} from "./FormaActualizar";



export const ActualizarEstado = () => {

    const Documento = parseInt(useParams().id);
    const [NuevoEstado, setNuevoEstado] = useState ({documento: Documento, status: ""})

    const changeinputEstado = (event)=>{
        setNuevoEstado({...NuevoEstado,[event.target.name]:event.target.value});
          console.log(NuevoEstado)
          };

          const [actEstado] = useMutation(queries[4],{variables: {
            documento: parseInt(NuevoEstado.documento), 
            status: NuevoEstado.status
            }})


  
   
        return(
            <>
            <BarNavegador />
            <Container>
            <h1 className="text-center mt-5" >Actualizar Estado Usuario  { Documento} </h1>
            <FormaActualizar />
            
                <br />

                <Row> 
   
            <center><FormGroup xs ={5} as={Col} >
            <Form.Select  className="me-sm-2" onChange={ changeinputEstado } name="status" >
                <option>Seleccionar Nuevo Estado</option>
                <option value="PENDIENTE">Pendiente</option>
                <option value="AUTORIZADO">Autorizado</option>
                <option value="NO_AUTORIZADO">No Autorizado</option>
                </Form.Select>
                </FormGroup></center>
                </Row>

                <Row>
                <br />
                </Row>

                <Row className="mb-3">
               
                <center><Button onClick={actEstado} variant="primary"  
                disabled={false} >Modificar Estado de Usuario </Button></center>
                
            </Row>
            
            </Container>
           
  

        </>
 
 )

}
   

      