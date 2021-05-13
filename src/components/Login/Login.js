import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import {useSelector} from 'react-redux';

function Login({error}) {

    const userDefault = useSelector((state) => state.userDefault);

    const [details, setDetails] = useState({name: "", email: "", password: ""});

    let history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        if(userDefault.username == ) {

        }
        history.push("/table");
    }

    return(
        <div className="container mt-5">
            <form onSubmit={handleSubmit} className="justify-content-center text-center">
                <div className="card-header text-center grey lighten-3">
                    <div className="row justify-content-center">
                        <div className="">
                            <h4 className="mb-5 mt-5">Iniciar sesión</h4>
                            {(error !== "") ? (<div>{error}</div>) : ""}
                            <i className="fas fa-user text-primary d-flex m-2"></i>
                            <input type="text" className="form-control mb-4 has-validation" placeholder="Usuario" name="email" id="validationCustomUsername" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                            <i className="fas fa-lock text-primary d-flex m-2"></i>
                            <input type="password" className="form-control" placeholder="Contraseña" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                            <button className="btn btn-primary mt-4 mb-4" value="LOGIN">Enviar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;
