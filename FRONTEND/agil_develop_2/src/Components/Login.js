import React, {useEffect} from 'react'
import { Button, Form, Container, Row, Col, Image } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import proyecto from '../assets/pr.jpg'
import './FormLogin.css'
import { useForm } from '../hooks/useForm';
//import { useNavigate } from "react-router";
import { useMutation } from '@apollo/client';
import { login } from './Usuarios/queries';
import { useAuth } from '../context/authContext';
import useFormData from '../Components/UseForm/useForm.js'


export const Login = () =>{
   
    const {setToken}=useAuth();

    const navigate= useNavigate();

    const {form, formData, updateFormData}=useFormData();

    const [login, {
        data:mutationData,
        loading:mutationLoading,
        error: mutationError
                                }]=useMutation(Login);
    
    const submitForm=(e)=>{
         e.preventDefault();
         login({
             variables:formData,
            });
        };
    useEffect(()=>{
        if(mutationData){
            if(mutationData.login.token){
                setToken(mutationData.login.token);
                navigate('./Home');
              }
            };
            
          },[mutationData])
          
    if(mutationLoading){return(<div className='min-h-screen flex justify-center items-center bg-gray-500'>
          <div className='bg-yellow-400 rounded-full flex min-w-max p-2'> 
              <p className='md:p-7 animate-pulse text-2xl font-bold'>Cargando Login...just wait</p>
          </div>
          </div>)}
  
  
      if(mutationError){       
          return(
              <div>
                  error de la mutacion:
              </div>
          )
      }
    
    
                            

 

   
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
                        <Form  className="text-start"> onChange={updateFormData} onSubmit={submitForm} ref={form}
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

export default Login