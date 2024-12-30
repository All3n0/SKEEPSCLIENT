import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'; // Ensure the correct path to Navbar
import Footer from './components/Footer';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Footer/>} />
      </Routes>
    </Router>
  );
}

export default App;
