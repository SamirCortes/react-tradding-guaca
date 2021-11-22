import React from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function FormProducts(props){
      const { show, onClose } = props;
       return (
       <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo producto</Modal.Title>
        </Modal.Header>
      
        <Modal.Body>
        <Form>
              <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Tipo Producto</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>vehiculo</option>
                    <option>electrodomestico</option>
                    <option>oro</option>
                    
                  </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Nombre Producto</Form.Label>
                <Form.Control type="password" placeholder="" />
              </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Valor</Form.Label>
              <Form.Control placeholder="" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Precio</Form.Label>
              <Form.Control placeholder="" />
              </Form.Group>

              

          </Form>

        </Modal.Body>
      
        <Modal.Footer>
          <Button variant="primary">Guardar</Button>
        </Modal.Footer>
      </Modal>
      );


}

export default FormProducts;