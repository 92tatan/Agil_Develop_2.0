import React from "react";
import {BarNavegador} from '../../NavBar';
import fondo from '../../assets/fondo.jpeg'
import {Row,   Col, Image} from "react-bootstrap"; 

export const Home = ()=> {
    return(
        <div>
        <BarNavegador />
        <h1 className="text-center mt-5" >Home</h1>

        <Row>
            br
        </Row>
        

            <Col xs={14}>
            <center><Image src={fondo} rounded fluid /></center>
            </Col>
</div>
    )

}