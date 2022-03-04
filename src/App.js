import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import About from './Pages/About';
import AppBar from './Components/ButtonAppBar';

function App() {
    return (
        <Router>
            <AppBar />
            <Routes>
                <Route path="/about-us" element={<About />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route exact path="/" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
