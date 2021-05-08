import React from 'react';
import usuarios from '../../services/database/usuarios.json';
import TableRow from './TableRow';

function Table() {
    return(
        <div className="text-center table-responsive">
            <nav className="navbar navbar-dark bg-dark sticky-top">
                <div className="container-fluid justify-content-center">
                    <a className="navbar-brand" href="#!">Usuarios</a>
                </div>
            </nav>
            {/*<h3>Usuarios</h3>*/}
                <table className="table align-middle table-hover justify-content-center">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Email</th>
                            <th scope="col">DNI</th>
                            <th scope="col">Alta</th>
                            <th scope="col">Domicilio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map(listaUsuario => (
                            <TableRow item={listaUsuario} key={listaUsuario.id} />
                        ))}
                    </tbody>
                </table>
        </div>
    )
}

export default Table;