import React from 'react';

import Table from 'react-bootstrap/Table'

function ListProducts(){
    return (
        <div>
            <Table  striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>#</th>
                <th>type product</th>
                <th>Name product</th>
                <th>weight</th>
                <th>price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <th>150000</th>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <th>150000</th>
                </tr>
                <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
                <th>150000</th>
                </tr>
            </tbody>
            </Table>
        </div>
    );
}

export default ListProducts;