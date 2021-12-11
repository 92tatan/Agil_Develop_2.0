import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./Components/ModuloHome/Home";
import { Login } from "./Components/Login";
import { RegistroProyecto } from "./Components/Proyectos/Registro/RegistroProyectos";
import { ExplorarProyecto } from "./Components/Proyectos/Explorar/ExplorarProyectos";
import { ActualizarProyecto } from "./Components/Proyectos/Actualizar/ActualizarProyectos";
import { InscripcionProyecto } from "./Components/Inscripciones/InscripcionProyectos";
import { ExplorarInscripcion } from "./Components/Inscripciones/ExplorarInscripciones";
import { RegistrarAvance } from "./Components/Avances/RegistrarAvances";
import { ExplorarAvance } from "./Components/Avances/ExplorarAvances";
import { Perfil } from "./Components/Usuarios/Perfil";
import { EstadoUsuario } from "./Components/Usuarios/EstadoUsuario";

export const RutasNavegacion = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/Home" component={Home} />,
        <Route exact path="/Registro_Proyectos" component={RegistroProyecto} />
        <Route exact path="/Explorar_Proyectos" component={ExplorarProyecto} />
        <Route
          exact
          path="/Actualizar_Proyectos"
          component={ActualizarProyecto}
        />
        <Route exact path="/Estado_Usuario" component={EstadoUsuario} />
        <Route exact path="/Perfil" component={Perfil} />
        <Route
          exact
          path="/Inscripcion_Proyectos/:_id"
          component={InscripcionProyecto}
        />
        <Route
          exact
          path="/Explorar_Inscripciones"
          component={ExplorarInscripcion}
        />
        <Route exact path="/Registro_Avances" component={RegistrarAvance} />
        <Route exact path="/Explorar_Avances" component={ExplorarAvance} />
      </Router>
    </>
  );
};
