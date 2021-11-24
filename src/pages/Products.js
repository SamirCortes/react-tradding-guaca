import React, {useState} from 'react';

import Button from 'react-bootstrap/Button';
import ListProducts from '../components/ListProducts.js';
import FormProducts from '../components/FormProducts.js';

function Products() {
    // Hooks
    const [show, setShow] = useState(false);  
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || []);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <div className="App">
        <header className="App-header">
        <div>
            <h1>Productos compraventa <Button variant="primary" onClick={handleShow}>Nuevo producto</Button></h1>
            
        </div>        
        <ListProducts handleForm={handleShow} products={products} setProducts={setProducts} ></ListProducts> 
        <FormProducts show={show} onClose={handleClose} setProducts={setProducts} ></FormProducts>

        </header>
    </div>
    );
}

export default Products;