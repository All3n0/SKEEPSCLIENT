import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BagsPage from './components/BagsPage';
import InspiratonPage from './components/InspiratonPage';
import Home from './components/Home';
import Cart from './components/Cart';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/bags" element={<BagsPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/bags/inspiration/:inspiration" element={<InspiratonPage />} />
      </Routes>
    </Router>
  );
}

export default App;
