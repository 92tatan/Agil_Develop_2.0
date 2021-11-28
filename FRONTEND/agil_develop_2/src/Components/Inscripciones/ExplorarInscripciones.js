import { BarNavegador } from "../../NavBar";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import React, { useState } from "react";
import { useEffect } from "react";

export const ExplorarInscripcion = () => {
  // Leer codigo producto
  const [prodreg, setProdref] = useState({});
  const changeinputprod = (event) => {
    setProdref({ ...prodreg, [event.target.name]: event.target.value });
  };

  // conexión a mongo leer producto
  const [listproductos, setListproductos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("");
      const data = await response.json();
      setListproductos(data);
    };
    fetchData();
  }, []);

  //   // conexión a mongo Productos
  // const [listProductos, setListProductos] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("http://localhost:3000/api/Productos");
  //     const data = await response.json();
  //     setListProductos(data);
  //   };
  //   fetchData();
  // }, []);

  // const prodreg = listproductos.find(
  //   (x) => x.Prod_id == prodreg.CodigoProducto
  // );

  const addprod = () => {
    const datosProd = listproductos.find(
      (x) => x.Prod_id == prodreg.CodigoProducto
    );
  };

  const [productoEncontrado, setProductoEncontrado] = useState({});

  const BuscarProducto = (event) => {
    const prodEncontrado = listproductos.find(
      (x) => x.Prod_id == prodreg.CodigoProducto
    );

    setProductoEncontrado({ ...prodEncontrado });
    console.log(prodEncontrado);
  };

  return (
    <>
      <BarNavegador />
      <Container className="incripciones-container">
        <Row className="justify-content-md-center">
          <Col xs={7} className="form-MasterProducts">
            <h1> Buscar Inscripciones </h1>{" "}
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="labelMostrar">
                  <Form.Label>Listar Inscripciones: </Form.Label>
                </Form.Group>
                <Form.Group as={Col} controlId="labelSelector">
                  <Form.Select>
                    <option value="1">Aceptados</option>
                    <option value="2">Rechazados</option>
                    <option value="3">Todos</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="buttonMostrar">
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={BuscarProducto}
                  >
                    Listar
                  </Button>
                </Form.Group>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
