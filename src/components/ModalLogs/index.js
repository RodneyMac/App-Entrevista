import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector, useDispatch} from 'react-redux';
import Graphic from '../Graphic/Graphic';

function ModalLogs(){

    const dispatch = useDispatch(); 

    const {showModalLogs, selectedUser, listaUsuarios} = useSelector((state) => state);

    const user = listaUsuarios.filter((el) => el.id == selectedUser)

   const handleCloseGraphic = () => {
        dispatch({type: "CLOSE_GRAPHIC", payload: {showModal: false}});
   }
    
    return(
        <>
            <Modal show={showModalLogs} size="lg">
                <Modal.Header>
                    <Modal.Title><h4>Ver Logs</h4></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {user[0].apellido}
                    <Graphic user={user[0]}/>
                </Modal.Body>
                <Modal.Footer variant="mb-4">
                    <Button variant="secondary" onClick={handleCloseGraphic}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalLogs;
