import React from "react";
import { Navbar, Container, Nav, NavDropdown, 
        Button, Form, FormControl,DropdownButton,Dropdown } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';


export const Navegador = ()=>{

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
        <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown.Divider /> 

        <NavDropdown menuVariant="dark" variant="dark" title="Gestión Usuarios" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Estado Usuario</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Perfil</NavDropdown.Item> 
        </NavDropdown>
            <NavDropdown.Divider />

        <DropdownButton variant="secondary" menuVariant="dark" title="Gestión Proyectos" className="mt-2" >
            <Dropdown.Item href="#/action-2">Registro de Proyectos</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Explorar Proyectos</Dropdown.Item>
            <Dropdown.Item href="#/action-2" disabled >Actualizar Proyectos</Dropdown.Item>
        </DropdownButton>
        <NavDropdown.Divider />

        <NavDropdown title="Gestión Proyectos" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Registro de Proyectos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Explorar Proyectos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" disabled >Actualizar Proyectos</NavDropdown.Item>
        </NavDropdown>
            <NavDropdown.Divider /> 
        <NavDropdown title="Inscripciones" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Inscripcion a Proyectos</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Explorar Inscripciones</NavDropdown.Item>
        </NavDropdown>
            <NavDropdown.Divider />  
        <NavDropdown title="Avances" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Registrar Avances</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Explorar Avances</NavDropdown.Item>
        </NavDropdown>
            <NavDropdown.Divider /> 
            <NavDropdown.Divider />
        </Nav>
        </Offcanvas.Body>

        </Navbar.Offcanvas>
    </Container>
    </Navbar>

        )
    }
    
       /*  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
         



        nav bar con offcanvas
         function OffCanvasExample() {
            const [show, setShow] = useState(false);
          
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);
          
            return (
              <>
                <Button variant="primary" onClick={handleShow} className="me-2">
                  Menú
                </Button>
                <Offcanvas show={show} onHide={handleClose} placement="start" >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menú</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
        
        
                  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        
                        <NavDropdown title="Gestión Usuarios" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Estado Usuario</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Perfil</NavDropdown.Item>
                            <NavDropdown.Divider />  
                        </NavDropdown>
                        <NavDropdown title="Gestión Proyectos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Registro de Proyectos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Explorar Proyectos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Actualizar Proyectos</NavDropdown.Item>
                            <NavDropdown.Divider />  
                        </NavDropdown>
                        <NavDropdown title="Inscripciones" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Inscripcion a Proyectos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Explorar Inscripciones</NavDropdown.Item>
                            <NavDropdown.Divider />  
                        </NavDropdown>
                        <NavDropdown title="Avances" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Registrar Avances</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Explorar Avances</NavDropdown.Item>
                            <NavDropdown.Divider />  
                        </NavDropdown>
        
                        </Nav>
                        
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
        
        
                  </Offcanvas.Body>
                </Offcanvas>
              </>
            /// convocar la funcion offcanvaEXAMPLE
              <OffCanvasExample  />

            );
          } */