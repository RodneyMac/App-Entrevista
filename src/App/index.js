import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Home from '../components/Home';
import Log from '../components/Login';
import Table from '../components/Table/Table';
import ModalEdit from '../components/Modal';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/home">
                    Barra de navegación
                    <Home />
                </Route>
                <Route path="/login">
                    <Log />
                </Route>
                <Route path="/table">
                    <Table />
                </Route>
                <Route path="/modal">
                    <ModalEdit/>
                </Route>
            </Switch>
        </Router>
    )
}

export default  App;
