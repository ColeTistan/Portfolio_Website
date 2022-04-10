import React from 'react'
import './App.css'
import Navbar from './layout/Navbar'
import Home from './layout/Home'
// import Footer from './layout/Footer'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='w-full min-h-screen bg-gray-300 text-gray-700 pt-[150px]'> 
        <Home />
      </div>
    </div>
  )
}

export default App
