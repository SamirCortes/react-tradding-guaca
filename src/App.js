import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import ListProducts from './components/ListProducts.js';
import FormProducts from './components/FormProducts.js';


function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
      <header className="App-header">
      <div><Button variant="primary" onClick={handleShow}>Nuevo producto</Button></div>        
      <ListProducts></ListProducts> 
      <FormProducts show={show} onClose={handleClose}></FormProducts>

      </header>
    </div>
  );
}

export default App;
