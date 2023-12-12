import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/logo-small.png';
import './Header.css'; 

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <img src={Logo} className="logo" alt="logo"/>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      {isMenuOpen && (
        <div className="dropdown-menu">
          <div>about</div>
          <div>blog</div>
          <div>products</div>
          <div>contact</div>
          <div>gallery</div>
        </div>
      )}
    </header>
  );
};

export default Header;
