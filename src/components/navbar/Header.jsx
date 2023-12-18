import React from 'react';
import './navbar.css';
import Logo from '../images/ministry.png';
import Logo from '../images/logo.jpg';
import Chatbot from '../chatbot/Chatbot.jsx';


const Navbar = () => {

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={Logo} alt="Logo" width={50} height={50} />
        </div>
        <div className="navbar-links" id="menuitems">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </div>

     
        <div className='chatbot'>
          <Chatbot />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
