import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home'
import About from './pages/About'

const App = () => {
	return <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
        </Routes>
    </BrowserRouter>
}

export default App