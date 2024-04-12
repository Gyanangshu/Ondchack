import React from 'react';
import logo from "./navLogo.png";

const Navbar = () => {
  return (
    <nav>
      <img className='navlogo' src={logo} alt="Axai Logo" />
    </nav>
  )
}

export default Navbar
