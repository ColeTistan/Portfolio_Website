import React from 'react';
import './App.css';
import Navbar from './layout/Navbar';
import Home from './layout/Home';
import Work from './layout/Work';
import Contact from './layout/Contact';
import Footer from './layout/Footer';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
          <div className='flex flex-col h-min-screen text-gray-700 pt-[150px]'> 
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/work' element={<Work />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </div>
        </Router>
      <Footer />
    </div>
  )
}

export default App
