import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/home';
import Authentification from "../../pages/authentification/authentification"
import Dashboard from '../../pages/dashboard/dashboard';

function App(){

    return (
        <Router>
            <Routes>
                <Route path="/authentification" element={ <Authentification />} />
                <Route path="/dashboard" element={ <Dashboard />} />
                <Route exact path="/" element={ <Home />} />
            </Routes>
        </Router>
    );
}

export default App