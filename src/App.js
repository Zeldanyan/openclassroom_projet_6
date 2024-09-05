import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.scss';
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import Error404 from './pages/Error404';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/openclassroom_projet_6' element={<Home />} />
        <Route path='*' element={<Error404 />} />
        <Route path='/about' element={<About />} />
        <Route path='/logement/:id' element={<Logement />} />
      </Routes>
    </Router>
  );
}

export default App;
