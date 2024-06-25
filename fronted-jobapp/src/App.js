import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import AddJob from "./components/AddJob";
import Register from "./components/Register";
import Login from "./components/Login";
import Test from "./components/Test";


const App = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add-job" element={<AddJob />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/test" element={<Test/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
