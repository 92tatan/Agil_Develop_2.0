import './App.css';
import {RutasNavegacion} from './RouterApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AuthContext} from "./context/authContext"
import {useState, useEffect} from "react";
import React from 'react';
import {jwt_decode} from "jwt-decode"
import {UserContext} from "./context/userContext"

import {Home} from './Components/ModuloHome/Home';
import {Login} from './Components/Login';
import {RegistroProyecto} from './Components/Proyectos/Registro/RegistroProyectos';
import {ExplorarProyecto} from './Components/Proyectos/Explorar/ExplorarProyectos';
import {ActualizarProyecto} from './Components/Proyectos/Actualizar/ActualizarProyectos';
import {InscripcionProyecto} from './Components/Inscripciones/InscripcionProyectos';
import {ExplorarInscripcion} from './Components/Inscripciones/ExplorarInscripciones';
import {RegistrarAvance} from './Components/Avances/RegistrarAvances';
import {ExplorarAvance} from './Components/Avances/ExplorarAvances';
import { CrearUsuario } from "./Components/Usuarios/crear/CrearUsuario";
import {EditarUsuario} from './Components/Usuarios/editar/EditarUsuario';
import {EstadoUsuario} from './Components/Usuarios/EstadoUsuario';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";


function App() {
    const [userData, setUserData] = useState({});
  const [authToken, setAuthToken] = useState('');

  const setToken = (token) => {
    setAuthToken(token)
    if (token) {
      localStorage.setItem('token', JSON.stringify(token));
    } else {
      localStorage.removeItem('token');
    }
  };

  useEffect(() => {
    if (authToken) {
      const decoded = jwt_decode(authToken);
      setUserData({
        _id: decoded._id,
        Email:decoded.Email,
        Rol:decoded.Rol,
        Status : decoded.Status})
  return (
    <>
    <AuthContext.Provider value={{ authToken, setAuthToken, setToken }}>
        <UserContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
                <Routes>
                    <Route
                        
                        path="/"
                        element={<Login/>}
                    
                    />
                    <Route
                        
                        path="/home"
                        element={<Home/>}
                    />
                    <Route
                        
                        path="/Registro_Proyectos"
                        component={<RegistroProyecto/>}
                    /> 
                    <Route
                        exact
                        path="/Explorar_Proyectos"
                        component={ExplorarProyecto}
                    />
                    <Route
                        exact
                        path="/Actualizar_Proyectos/:id"
                        component={ActualizarProyecto}
                    />
                    <Route
                        exact
                        path="/Estado_Usuario"
                        component={EstadoUsuario}
                    />

                    <Route
                        exact
                        path="/Crear_Usuario"
                        component={CrearUsuario}
                    />
                    <Route
                        exact
                        path="/perfil"
                        component={EditarUsuario}
                    />
                
                    <Route
                        exact
                        path="/Inscripcion_Proyectos"
                        component={InscripcionProyecto}
                    />
                    <Route
                        exact
                        path="/Explorar_Inscripciones"
                        component={ExplorarInscripcion}
                    />
                    <Route
                        exact
                        path="/Registro_Avances"
                        component={RegistrarAvance}
                    />
                    <Route
                        exact
                        path="/Explorar_Avances"
                        component={ExplorarAvance}
                    />
                    
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    
    </AuthContext.Provider>
    
    </>
  );
}

export default App;