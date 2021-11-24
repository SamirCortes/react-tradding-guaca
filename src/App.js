import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,  
} from "react-router-dom";
import './App.css';

import Home from './pages/Home.js';
import Products from './pages/Products.js';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function App() {  

  return (
    <Router>
      <div>
      {/* Estilos del menu */}
      <Navbar bg="dark" variant="dark">
        <Container>        
        <Nav className="me-auto">
          <Nav.Link href="./">Home</Nav.Link>
          <Nav.Link href="productos">Productos</Nav.Link>          
        </Nav>
        </Container>
      </Navbar>        
      {/* Declaro las rutas */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/productos">
          <Products />
        </Route>          
      </Switch>
      </div>
    </Router>    
  );
}

export default App;
