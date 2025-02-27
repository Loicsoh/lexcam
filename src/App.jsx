
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Templete from './Templete';
import Penal from './Penal'; 
import Civil from './Civil';
import Travail from './travail';
import Raod from './Raod';
import Impot from './Impot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Templete />} />
        <Route path="/home" element={<Home />} />
        <Route path="/penal" element={<Penal />} />
        <Route path="/civil" element={<Civil />} />
        <Route path="/travail" element={<Travail />} />
        <Route path="/raod" element={<Raod />} />
        <Route path="/impot" element={<Impot />} />
      </Routes>
    </Router>
  );
}

export default App;