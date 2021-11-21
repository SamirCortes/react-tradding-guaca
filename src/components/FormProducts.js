import React from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function FormProducts(){

       return (
       <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
      
        <Modal.Body>
        <Form>
              <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>type product</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>vehiculo</option>
                    <option>electrodomestico</option>
                    <option>oro</option>
                    
                  </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>name produc</Form.Label>
                <Form.Control type="password" placeholder="" />
              </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>weight</Form.Label>
              <Form.Control placeholder="" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>price</Form.Label>
              <Form.Control placeholder="" />
              </Form.Group>

              

              <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit">
              Submit
              </Button>
          </Form>

        </Modal.Body>
      
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
      );


}

export default FormProducts;