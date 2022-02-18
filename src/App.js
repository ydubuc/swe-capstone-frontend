import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/aboutUs" element={<About />} />
                <Route exact path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
