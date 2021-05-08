import React from 'react';

function TableRow(props) {

    const {item} = props;

    return(
        <tr className="">
            <th scope="row">{item.id}</th>
            <td>{item.nombre}</td>
            <td>{item.apellido}</td>
            <td>{item.email}</td>
            <td>{item.dni}</td>
            <td>{item.fecha_de_alta}</td>
            <td>{item.domicilio}</td>
            <td>
                <button className="btn btn-outline-primary"><i className="fas fa-chart-bar"></i></button>
                <button className="btn btn-outline-primary m-2"><i className="fas fa-pencil-alt"></i></button>
                <button className="btn btn-outline-primary"><i className="fas fa-trash-alt"></i></button>
            </td>
        </tr>   
    )
}

export default TableRow;