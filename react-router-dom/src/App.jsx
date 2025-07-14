import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
      <Navbar />
    
    <Routes>
       
      <Route path='/' element={<div>Home</div>} />
      <Route path='/about' element={<div>About</div>} />
      <Route path='/services' element={<div>Services</div>} />
      <Route path='/contact' element={<div>Contact</div>} />
    </Routes>
    </div>
  )
}

export default App