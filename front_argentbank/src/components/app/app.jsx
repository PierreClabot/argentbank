import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/home';
import Authentification from "../../pages/authentification/authentification"
import Dashboard from '../../pages/dashboard/dashboard';
import LogOut from '../logout/logout';
import PrivateRoute from "./privateRoute.jsx";
function App(){

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={ <Home />} />
                <Route path="/login" element={ <Authentification />} />
                <Route path="/profile" element={<PrivateRoute Component={Dashboard}/>} />
                <Route path="/logout" element={ <LogOut />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App