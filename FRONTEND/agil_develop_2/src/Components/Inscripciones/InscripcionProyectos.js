
import { useEffect, React, useState } from "react";
import { BarNavegador } from "../../NavBar";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Form, Button, Container, Row, Col, Card, InputGroup, FormControl } from "react-bootstrap";
import { GET_INSCRIPCION, GET_INSCRIPCIONES } from "./graphql/queries";
import useFormData from "./graphql/hooks/useFormData";
import Input from "./graphql/components/Input";
import ButtonLoading from "./graphql/components/ButtonLoading";


export const InscripcionProyecto = () => {


  const {form, formData,  updateFormData} = useFormData(null);
  //const  {id}  = useParams();
  const valor = parseInt(useParams().id);
  console.log("vamos aqui:", valor);
  const  datoUno  = useQuery(GET_INSCRIPCION,{variables:{idInscripcion:valor}}).data;
  //nst data2 = useQuery(GET_INSCRIPCION,{variables: {idProyecto:IDPrbuscado.IdProyecto}}).data;
  //console.log("identificacion: ", {id}, "datoUno ...", datoUno);
  /* const { data, error, loading } = useQuery(GET_INCRIPCION_OBJ, {
    variables:{_id},
  }); */
  //const {data} = useQuery(GET_INSCRIPCION,);
  //const [DatosShow, setDatosShow] = useState([]);

  /* useEffect(() => {
    

    
    
  }); */

  

  /* const llamar = ()=>{
    
    const datoss = data.map((task) => task );
    console.log("ui: ", datoss)
    return datoss
  }; */

 

  //if(loading) return <div>Cargando la inscripción...</div>;

   
  
  /* const TraerTodos = ()=>{
    const DataTodos = data1?.AllInscripciones
    console.log(DataTodos)
    setDatosShow([...DataTodos])
    }; */

 /*  const submitForm = (e) =>{
    e.preventDefault();
    console.log("fd", formData);
;  } */


  //console.log("data :",data);


  
  

  return (
    <div>
    
      <BarNavegador />
      <h1 className="text-center mt-5">Editar Inscripcion:</h1>
      <Container className="product-container">
        <Row className="justify-content-md-center">
        <Col xs={7} className="form-MasterProducts">
            <h2> Por favor seleccione el nuevo estado:  </h2>{" "}
            <form /*onSubmit={submitForm}> onChange={updateFormData} ref={form}*/>
              <Row className="mb-3">               
                <Row className="mb-1">
                  <Form.Group as={Col}>
                    <Form.Label>Codigo de la Inscripcion</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Identificador de inscripcion"
                      name="codigoInscripcion"                  
                      defaultValue={datoUno?.InscripcionesxId?.Documento}
                      //value={productoEncontrado.Titulo}
                    />
                    {/* <Form.Control
                      type="text"
                      placeholder="Identificador de inscripcion"
                      name="codigoInscripcion"                  
                      //defaultValue={nm}
                      //value={productoEncontrado.Titulo}
                    /> */}

                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Estado </Form.Label>
                    {/* <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                    <FormControl
                      placeholder={data.InscripcionObj.Estado_inscripcion}
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      name="estado"
                    />
                  </InputGroup> */}
                    <Input 
                      type="text"
                      placeholder="0"
                      required={true}
                      name="estado"
                      //defaultValue={data.InscripcionObj.Estado_inscripcion}
                      
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-2">
                  <Form.Group as={Col}>
                    <Form.Label>Documento </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="0"
                      name="Stock"
                      //defaultValue={data.InscripcionObj.Documento}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Fecha Ingreso</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="DD/MM/YY"
                      name="fechaIngreso"
                      //defaultValue={data.InscripcionObj.Fecha_ingreso}
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label>Fecha Egreso </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="DD/MM/YY"
                      name="fechaEgreso"                                         
                      //defaultValue={data.InscripcionObj.Fecha_egreso}
                    />
                  </Form.Group>
                </Row>                
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="labelMostrar">
                  <Form.Label>Estado de la Inscripcion: </Form.Label>
                </Form.Group>
                <Form.Group as={Col} controlId="labelSelector">
                  <Form.Select>
                    <option value="1">Pendiente</option>
                    
                  </Form.Select>
                  <Form.Text className="text-Descriptive">
                    Seleccione un nuevo estado
                  </Form.Text>
                </Form.Group>
                <Form.Group as={Col} controlId="buttonMostrar">
                  <Button variant="primary" type="submit">
                    Actualizar
                  </Button>
                  {/* <ButtonLoading 
                  text="Actualizarrrr"
                  disabled={Object.keys(formData.length===0)}
                  loading={loadingMutation}
                  /> */}
                </Form.Group>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
