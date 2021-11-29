import React from 'react'
import { Button, Form, Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import proyecto from '../assets/pr.jpg'
import './FormLogin.css'
import { useForm } from '../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';


export const Login = () =>{

    /* const dispatch = useDispatch();
    const { loading } = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        email: 'aleja@gmail.com',
        password: '1225'
    });


    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(email, password)
        dispatch(startLoginEmailPassword(email, password));
    } */

   
    return (
        <div>
            <Container className="login-container">
                <Row>

                    <Col xs={8}>
                        <Image src={proyecto} rounded fluid />
                    </Col>
                    <Col xs={4}>
                        <h1> Bienvenido </h1>
                        <br />
                        <Form  className="text-start">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Ingresa tu email"
                                    name="email"
                                    // value={email}
                                    // onChange={handleInputChange}
                                />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Ingresa tu contraseña" name="password"  />
                            </Form.Group>
                            <Link to={'/home'} className="link">¿Has olvidado tu contraseña?</Link>
                            <br />
                            <br />
                            <Button 
                                className="login" 
                                variant="primary" 
                                type="submit"  
                                // disabled={ loading }
                            >
                                Iniciar sesión
                            </Button>
                            
                        </Form>
                        
                        
                    </Col>
                </Row>

            </Container>



        </div>
    )
}