import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Privacy from './components/Privacy';
import Versions from './components/Versions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/versions" element={<Versions />} />
      </Routes>
    </Router>
  );
}

export default App;