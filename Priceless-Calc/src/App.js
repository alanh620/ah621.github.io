import React, {useState} from "react";
import Navbar from '../src/components/navbar.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wide from '../src/pages/wide.js'
import Home from './pages';

function App() {
  return (
     
      <Router basename="/ah621.github.io">
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/wide" element={ <Wide /> } />
        </Routes>
      </Router>
  
   );
}

export default App;

