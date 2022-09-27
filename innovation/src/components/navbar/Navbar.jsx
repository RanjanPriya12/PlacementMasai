import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';



export const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <ul>
          <li><Link className='link' to='/'>Home</Link></li>
          <li><Link className='link' to='/favourite'>Favourite</Link></li>
        </ul>
      </nav>
    </div>
  )
}
