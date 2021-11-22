import React, {useState} from 'react';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function ListProducts(props){    
    const { products, setProducts, } = props;    

    function handleDelete(i){        
        const products = JSON.parse(localStorage.getItem('products'));
        products.splice(i,1);
        localStorage.setItem('products', JSON.stringify(products));
        setProducts(products);
    }        

    return (
        <div>
            <Table  striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Tipo</th>
                <th>Nombre</th>
                <th>Peso</th>
                <th>Valor</th>
                <th>Acción</th>               
                </tr>
            </thead>
            <tbody>
                
                {products.map(function(value, index){                
                    return (
                        <tr key={index}>
                            <td >{value.tipo}</td>
                            <td >{value.nombre}</td>
                            <td >{value.peso}</td>
                            <td >{value.precio}</td>
                            <td >                                
                                <Button variant="danger" onClick={()=>handleDelete(index)}>Eliminar</Button>
                            </td>
                        </tr>
                    )                    
                })}                               
            </tbody>
            </Table>
        </div>
    );
}

export default ListProducts;