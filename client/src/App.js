import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BagsPage from './components/BagsPage';
import TshirtsPage from './components/TshirtPage';
import InspirationPage from './components/InspiratonPage'; // Updated to handle both bags and tshirts
import Home from './components/Home';
import Cart from './components/Cart';
import CatalogEditor from './components/catalogue';
import ErrorPage from './components/Errorpage';
import AboutPage from './components/About';
import AdminPanel from './components/AdminPanel';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bags" element={<BagsPage />} />
        <Route path="/tshirts" element={<TshirtsPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/catalogue123AllanKiprop" element={<CatalogEditor />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/admin123AllanKiprop" element={<AdminPanel />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/:type/inspiration/:inspiration" element={<InspirationPage />} /> {/* Updated route */}
      </Routes>
    </Router>
  );
}

export default App;
