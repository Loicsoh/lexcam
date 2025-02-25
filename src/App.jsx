import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Templete from './Templete';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Templete />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;