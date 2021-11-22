import React from 'react';

import Table from 'react-bootstrap/Table';

function ListProducts(){
    let products = [{
        tipo: 'ddd',
        nombre: 'motoicleta',
        peso: '',
        valor: '1500000'
    }]

    return (
        <div>
            <Table  striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Tipo</th>
                <th>Nombre</th>
                <th>Peso</th>
                <th>Valor</th>                
                </tr>
            </thead>
            <tbody>
                
                {products.map(function(value, index){                
                    return (
                        <tr key={index}>
                            <td >{value.tipo}</td>
                            <td >{value.nombre}</td>
                            <td >{value.peso}</td>
                            <td >{value.valor}</td>
                        </tr>
                    )                    
                })}                               
            </tbody>
            </Table>
        </div>
    );
}

export default ListProducts;