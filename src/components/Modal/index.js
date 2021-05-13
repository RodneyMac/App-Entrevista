import React, {useState} from 'react';
import { Button, FormControl, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector, useDispatch} from 'react-redux';

function ModalEdit(props) {

    const usuarios = useSelector((state) => state.listaUsuarios);

    const personaSeleccionada = usuarios.find((user) => user.id === props.id);

    const dispatch = useDispatch();

    const [persona, setPersona] = useState(personaSeleccionada);

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
        setShow(true);
  }

  const handleChange = (e) => {
    setPersona((state) => ({
        ...state,
        [e.target.id] : e.target.value
    }))
  }

  const handleSave = () => {
    dispatch({type: "SAVE_USER", payload: persona});

    handleClose();
}

    return (
        <>
        <Button variant="outline-primary" onClick={handleShow}>
        <i className="fas fa-pencil-alt"></i>
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title><h4>Editar Usuario</h4></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <h6>Nombre:</h6>
                    <FormControl  value={persona.nombre} onChange={handleChange} id="nombre"/>
                    <h6 className="mt-2">Apellido:</h6>  
                    <FormControl  value={persona.apellido} onChange={handleChange} id="apellido" />
                    <h6 className="mt-2">Email:</h6>
                    <FormControl  value={persona.email} onChange={handleChange} id="email" />
                    <h6 className="mt-2">DNI:</h6>
                    <FormControl  value={persona.dni} onChange={handleChange} id="dni" />
                    <h6 className="mt-2">Fecha de alta:</h6>
                    <FormControl  value={persona.fecha_de_alta} onChange={handleChange} id="fecha_de_alta" />
                    <h6 className="mt-2">Domicilio:</h6>
                    <FormControl  value={persona.domicilio} onChange={handleChange} id="domicilio" />
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="primary" onClick={handleSave}>Guardar</Button>
            <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default ModalEdit;
