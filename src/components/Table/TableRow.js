import React from 'react';
import ModalEdit from '../Modal';
import {useDispatch} from 'react-redux';

function TableRow(props) {

    const {item} = props;

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch({type: "DELETE_USER", payload: {id: item.id}});
    }

    const handleLog = () => {
        dispatch({type: "SHOW_GRAPHIC", payload: {id: item.id, showModal: true}});
    }

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
                <ModalEdit id={item.id} />
                <button onClick={handleLog} className="btn btn-outline-primary m-1"><i className="fas fa-chart-bar"></i></button>
                {/*<button className="btn btn-outline-primary m-2"><i className="fas fa-pencil-alt"></i></button>*/}
                <button onClick={handleDelete} className="btn btn-outline-primary"><i className="fas fa-trash-alt"></i></button>
            </td>
        </tr>   
    )
}

export default TableRow;