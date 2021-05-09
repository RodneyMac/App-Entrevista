import React, {useState} from 'react';
import { Button, FormControl, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector} from 'react-redux';

function ModalEdit(props) {

    const usuarios = useSelector((state) => state);

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
        setShow(true);
  }

  const persona = usuarios.find((user) => user.id == props.id);

    return (
        <>
        <Button variant="outline-primary" onClick={handleShow}>
        <i className="fas fa-pencil-alt"></i>
            {/*Launch demo modal*/}
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title><h4>Editar Usuario</h4></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/*<h5 className="text-primary">Datos personales:</h5>*/}
                <div>
                    <h6>Nombre:</h6>
                    <FormControl  value={persona.nombre} />
                    <h6 className="mt-2">Apellido:</h6>  
                    <FormControl  value={persona.apellido} />
                    <h6 className="mt-2">Email:</h6>
                    <FormControl  value={persona.email} />
                    <h6 className="mt-2">DNI:</h6>
                    <FormControl  value={persona.dni} />
                    <h6 className="mt-2">Fecha de alta:</h6>
                    <FormControl  value={persona.fecha_de_alta} />
                    <h6 className="mt-2">Domicilio:</h6>
                    <FormControl  value={persona.domicilio} />
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>Guardar</Button>
            <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default ModalEdit;
