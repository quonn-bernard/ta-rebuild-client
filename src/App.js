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
          <Route path={`${process.env.REACT_APP_API_SVC_URL}`} element={<ServicesList />} />
          <Route path={`${process.env.REACT_APP_API_SVC_URL}:slug`} element={<Services />} />
          <Route path={`${process.env.REACT_APP_API_CAT_URL}:slug`} element={<Categories />} />
          <Route path={`${process.env.REACT_APP_API_CAT_URL}`} element={<CategoriesList />} />
          <Route path="/admin" element={<AdminDashbaord />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;
