import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import Home from './pages/Home/home.tsx';
import './App.css';
import Login from './pages/login/Login.tsx';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;