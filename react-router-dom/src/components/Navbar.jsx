import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <img src="" alt="" />
        <ul>
            {/* remove anchor tag */} 
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
       <div>
           <p>Some additional content</p>
       </div>
    </div>
  )
}

export default Navbar