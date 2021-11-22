import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function FormProducts(props){
      const { index, show, onClose, setProducts, product } = props;

      const objForm = {
        tipo: '',
        nombre: '',
        peso: '',
        precio: ''
      }

      function handleSave(){
        console.log(localStorage.getItem('products'));
        console.log(Array.isArray(localStorage.getItem('products')));
        if(Array.isArray(JSON.parse(localStorage.getItem('products')))){
          const products = JSON.parse(localStorage.getItem('products'));
          const arraySave = [...products, objForm];
          localStorage.setItem('products', JSON.stringify(arraySave));
          setProducts(arraySave);
          onClose();
        }
      }

      function handleChange() {
        console.log(objForm);
      }

       return (
       <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo producto</Modal.Title>
        </Modal.Header>
      
        <Modal.Body>
        <Form>              
              <Form.Group controlId="formGridEmail">
                <Form.Label>Tipo Producto</Form.Label>
                <Form.Select defaultValue="Choose..."                  
                  onChange={(e)=> objForm.tipo = e.target.value}>
                    <option>Vehiculo</option>
                    <option>Electrodomestico</option>
                    <option>Oro</option>
                    
                  </Form.Select>
              </Form.Group>

              <Form.Group controlId="formGridPassword">
                <Form.Label>Nombre Producto</Form.Label>
                <Form.Control placeholder="" onChange={(e)=> objForm.nombre = e.target.value}/>
              </Form.Group>              

              <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>peso</Form.Label>
              <Form.Control placeholder="" onChange={(e)=> objForm.peso = e.target.value}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Precio</Form.Label>
              <Form.Control placeholder="" onChange={(e)=> objForm.precio = e.target.value}/>
              </Form.Group>

              

          </Form>

        </Modal.Body>
      
        <Modal.Footer>
          <Button variant="primary" onClick={handleSave}>Guardar</Button>
        </Modal.Footer>
      </Modal>
      );


}

export default FormProducts;