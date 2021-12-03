import React from "react";
import { Container } from "react-bootstrap";
import {BarNavegador} from '../../../NavBar';


export const ActualizarProyecto = ()=> {
    const BuscarProyecto = (ProyModif)=>{
        ///validacion fase terminada o estado inactivo
        if (ProyModif.Fase_proyecto==="TERMINADO" || ProyModif.Estado_proyecto==="INACTIVO"){
            console.log("Este proyecto esta inactivo")
            }else{

            }
        }   
    return(
        <>
        <BarNavegador />
        <Container>
        <h1 className="text-center mt-5" >Actualizar Proyecto</h1>
        </Container>
        </>
    )


}