import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeNav from './components/HomeNav';
import Home from './pages/Home';
import Login from './pages/Login';
import Reviews from './pages/Reviews';

function App() {
  
  return (

    <div>
      <Router>
      <HomeNav />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
    </div>

  )
}

export default App
