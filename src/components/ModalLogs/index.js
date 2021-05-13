import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector, useDispatch} from 'react-redux';
import Graphic from '../Graphic/Graphic';

function ModalLogs(){

    const dispatch = useDispatch(); 

    const {showModalLogs, selectedUser, listaUsuarios} = useSelector((state) => state);

    const user = listaUsuarios.filter((el) => el.id === selectedUser)

   const handleCloseGraphic = () => {
        dispatch({type: "CLOSE_GRAPHIC", payload: {showModal: false}});
   }
    
    return(
        <>
            <Modal show={showModalLogs} size="lg">
                    <h4 className="text-center pt-4">{user[0].nombre} {user[0].apellido}</h4>
                <Modal.Body>
                    <div className="mt-1 mb-4">
                        <Graphic user={user[0]}/>
                    </div>
                </Modal.Body>
                <Modal.Footer variant="mb-4">
                    <Button variant="secondary" onClick={handleCloseGraphic}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalLogs;
