import React from "react";
import { Navbar, Container, Nav, NavDropdown,Button, 
        DropdownButton,Dropdown } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';


export const BarNavegador = ()=>{
    return(

    <Navbar  expand={false} bg="dark" variant="dark">
    <Container fluid>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start">
        <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Menú</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
        <Nav  className="justify-content-end flex-grow-1 pe-3">
        <Button variant="secondary" href="/Home" size="lg"  >Home</Button>
        <NavDropdown.Divider /> 

        <DropdownButton variant="secondary" menuVariant="dark" title="Gestión Usuarios" className="mt-2" >
            <Dropdown.Item href="/Estado_Usuario">Estado Usuario</Dropdown.Item>
            <Dropdown.Item href="/Perfil">Perfil</Dropdown.Item>
        </DropdownButton>
        <NavDropdown.Divider />
        <DropdownButton variant="secondary" menuVariant="dark" title="Gestión Proyectos" className="mt-2" >
            <Dropdown.Item href="/Registro_Proyectos">Registro de Proyectos</Dropdown.Item>
            <Dropdown.Item href="/Explorar_Proyectos">Explorar Proyectos</Dropdown.Item>
            <Dropdown.Item href="/Actualizar_Proyectos" disabled >Actualizar Proyectos</Dropdown.Item>
        </DropdownButton>
        <NavDropdown.Divider />
        <DropdownButton variant="secondary" menuVariant="dark" title="Inscripciones" className="mt-2" >
            <Dropdown.Item href="/Inscripcion_Proyectos">Inscripcion a Proyectos</Dropdown.Item>
            <Dropdown.Item href="/Explorar_Inscripciones">Explorar Inscripciones</Dropdown.Item>
        </DropdownButton>
        <NavDropdown.Divider />
        <DropdownButton variant="secondary" menuVariant="dark" title="Avances" className="mt-2" >
            <Dropdown.Item href="/Registro_Avances">Registrar Avances</Dropdown.Item>
            <Dropdown.Item href="/Explorar_Avances">Explorar Avances</Dropdown.Item>
        </DropdownButton>
        <NavDropdown.Divider />
        
        <NavDropdown.Divider />
        <Button variant="secondary" href="/" >Logout</Button>
        </Nav>
        </Offcanvas.Body>
        </Navbar.Offcanvas>
    </Container>
    </Navbar>
    )
    }