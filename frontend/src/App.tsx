import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeNav from './components/HomeNav';
import Home from './pages/Home';
import Login from './pages/Login';
import AddReview from './pages/AddReview';
import Watchlist from './pages/Watchlist';

function App() {
  
  return (

    <div>
      <Router>
      <HomeNav />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Login />} />
          <Route path="/add" element={<AddReview />} />
          <Route path="/edit/:id" element={<AddReview />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
    </div>

  )
}

export default App
