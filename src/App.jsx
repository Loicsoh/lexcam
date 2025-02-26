
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Templete from './Templete';
import Penal from './Penal'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Templete />} />
        <Route path="/home" element={<Home />} />
        <Route path="/penal" element={<Penal />} />
      </Routes>
    </Router>
  );
}

export default App;