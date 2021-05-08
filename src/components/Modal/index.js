import React, {useState} from 'react';
import { Button, FormControl, InputGroup, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ModalEdit() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Editar Usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>Datos personales
                <div>
                    <FormControl placeholder="Nombre" className="mt-2" />  
                    <FormControl placeholder="Apellido" className="mt-3" />
                    <FormControl placeholder="Email" className="mt-3" />
                    <FormControl placeholder="DNI" className="mt-3" />
                    <FormControl placeholder="Fecha de alta" className="mt-3" />
                    <FormControl placeholder="Domicilio" className="mt-3" />
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cerrar
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Guardar
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default ModalEdit;
