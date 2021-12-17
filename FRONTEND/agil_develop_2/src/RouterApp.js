import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import {Home} from './Components/ModuloHome/Home';
import {Login} from './Components/Login';
import {RegistroProyecto} from './Components/Proyectos/Registro/RegistroProyectos';
import {ExplorarProyecto} from './Components/Proyectos/Explorar/ExplorarProyectos';
import {ActualizarProyecto} from './Components/Proyectos/Actualizar/ActualizarProyectos';
import {InscripcionProyecto} from './Components/Inscripciones/InscripcionProyectos';
import {ExplorarInscripcion} from './Components/Inscripciones/ExplorarInscripciones';
import {RegistroAvance} from './Components/Avances/Registro/RegistrarAvances';
import {ExplorarAvance} from './Components/Avances/Explorar/ExplorarAvances';
import {ActualizarObservacion} from './Components/Avances/Actualizar/ActualizarObservacion';
import {ActualizarDescripcion} from './Components/Avances/Actualizar/ActualizarDescripcion';
import {EstadoUsuario} from './Components/Usuarios/EstadoUsuario';
import { CrearUsuario } from "./Components/Usuarios/crear/CrearUsuario";
import {EditarUsuario} from './Components/Usuarios/editar/EditarUsuario';

export const RutasNavegacion = ()=> {

    return(
        <>
        <Router>
            <Route
                exact
                path="/"
                component={Login}
            />
            <Route
                exact
                path="/Home"
                component={Home}
            />, 
            <Route
                exact
                path="/Registro_Proyectos"
                component={RegistroProyecto}
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
                path="/EditarUsuario"
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
                path="/Registro_Avances/:id"
                component={RegistroAvance}
            />
            <Route
                exact
                path="/Explorar_Avances/:id"
                component={ExplorarAvance}
            />
            <Route
                exact
                path="/Actualizar_Observaciones/:id"
                component={ActualizarObservacion}
            />            
            <Route
                exact
                path="/Actualizar_Descripciones/:id"
                component={ActualizarDescripcion}
            />            
            
            </ Router>
</>
    )
}