import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/home';
import Authentification from "../../pages/authentification/authentification"
import Dashboard from '../../pages/dashboard/dashboard';
import LogOut from '../logout/logout';
function App(){

    return (
        <Router>
            <Routes>
                <Route path="/login" element={ <Authentification />} />
                <Route path="/profil" element={ <Dashboard />} />
                <Route exact path="/logout" element={ <LogOut />} />
                <Route exact path="/" element={ <Home />} />
            </Routes>
        </Router>
    );
}

export default App