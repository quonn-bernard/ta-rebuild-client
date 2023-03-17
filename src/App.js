import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home.js'
import ServicesList from './pages/ServicesList';
import CategoriesList from './pages/CategoriesList';
import Services from './pages/Services';
import Categories from './pages/Categories';
import AdminDashbaord from './pages/AdminDashboard';
import Login from './pages/Login';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesList />} />
          <Route path="/services/:slug" element={<Services />} />
          <Route path="/categories/:slug" element={<Categories />} />
          <Route path="/categories" element={<CategoriesList />} />
          <Route path="/admin" element={<AdminDashbaord />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;
