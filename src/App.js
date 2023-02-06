import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
function App() {
  return (
    <div>
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
      
  )
}

export default App