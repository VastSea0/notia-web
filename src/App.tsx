import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Privacy from './components/Privacy';
import Versions from './components/Versions';
import Pricing from './components/Pricing';

function App() {
  const baseName = (import.meta.env.BASE_URL || '/').replace(/\/$/, '') || '/';

  return (
    <Router basename={baseName === '/' ? undefined : baseName}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/versions" element={<Versions />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;
