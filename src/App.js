import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'; // Ensure the correct path to Navbar

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Navbar />} />
      </Routes>
    </Router>
  );
}

export default App;
