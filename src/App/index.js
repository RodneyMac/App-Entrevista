import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


import Log from '../components/Login';
import Table from '../components/Table/Table';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Log />
                </Route>
                <Route path="/table">
                    <Table />
                </Route>
            </Switch>
        </Router>
    )
}

export default  App;
