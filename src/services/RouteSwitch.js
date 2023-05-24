import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from '../views/About';
import Projects from '../views/Projects';
import App from '../App';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;