import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="navContainer">
          <Link to="/" style={{color: 'white',textDecoration:'none'}}>
          <div className="logo">Booking</div>
          </Link>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
        </div>
    </div>
  )
}
