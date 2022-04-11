import React from 'react'
import './App.css'
import Navbar from './layout/Navbar'
import Home from './layout/Home'
import Footer from './layout/Footer'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='w-full min-h-screen text-gray-700 pt-[150px]'> 
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default App
