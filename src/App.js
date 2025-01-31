import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BagsPage from './components/BagsPage';
import TshirtsPage from './components/TshirtPage';
import InspirationPage from './components/InspiratonPage'; // Updated to handle both bags and tshirts
import Home from './components/Home';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bags" element={<BagsPage />} />
        <Route path="/tshirts" element={<TshirtsPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:type/inspiration/:inspiration" element={<InspirationPage />} />
      </Routes>
      <Footer /> {/* Ensure Footer is correctly placed */}
    </Router>
  );
}

export default App;
