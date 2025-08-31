import React, {useState} from "react";
import Navbar from '../src/components/navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about.js';
import Wide from '../src/pages/wide.js'
import Home from './pages';

function App() {
  return (
     
      <Router basename="/ah620.github.io">
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/wide" element={ <Wide /> } />
          <Route path="/about" element={ <About /> } />
        </Routes>
      </Router>
  
   );
}

export default App;

