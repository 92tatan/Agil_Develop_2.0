import React, { useEffect } from "react";
import {BarNavegador} from '../../../NavBar';
import { useParams } from "react-router-dom";
import {Row,  Col,  Container,   Form,  Button,  Placeholder,InputGroup} from "react-bootstrap";
import { useQuery } from "@apollo/client";
import {traerAvances, traerAvance} from "./queries";
import { Link } from "react-router-dom";

export const ExplorarAvance = ()=> {

    const Id_proyecto_Param = parseInt(useParams().id);
    console.log("el id: ",Id_proyecto_Param);
    //const { data, error, loading } = useQuery(traerAvances);
    const data = useQuery(traerAvance,{variables:{idProyecto:Id_proyecto_Param}}).data;

    useEffect(() => {
      console.log("Datos Inscripciones:", data);
    }, [data]);
  
    return(
        <div>
            <BarNavegador />
            <h1 className="text-center mt-5">Avances del Proyecto:</h1>
            <Row className="mb-3">
            <table className="tabla">
                <thead>
                <tr>
                    <th>Id Proyecto</th>
                    <th>Documento </th>
                    <th>Fecha</th>
                    <th>Descripcion</th>
                    <th>Observaciones</th>
                    <th>Modificar</th>
                </tr>
                </thead>
                
                <tbody>
                    {data &&
                    data.AvancesxProyecto.map((avance) => {
                    return (
                        <tr key={avance.Id_avance}>
                            <td>{avance.Id_proyecto}</td>
                            <td>{avance.Documento}</td>
                            <td>{new Date(parseInt(avance.Fecha_avance)).toLocaleDateString("es-CO")}</td>
                            <td>{avance.DescripciOn_avance}</td>
                            <td>{avance.Observaciones_lider}</td>
                            <td>
                                <Link to={`/Actualizar_Observaciones/${avance.Id_avance}`}>
                                    <Button variant="secondary" >Observaciones</Button></Link>&nbsp;
                                <Link to={`/Actualizar_Descripciones/${avance.Id_avance}`}>
                                    <Button variant="secondary" >Decripción</Button></Link>                            
                            </td>
                        </tr>
                    );
                    })}
                </tbody>
            </table>
            </Row>
            </div>
    )


}