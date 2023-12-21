import React, { useState } from 'react';
import Burger from '@animated-burgers/burger-arrow';
import '@animated-burgers/burger-arrow/dist/styles.css';
import { Image } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const publicUrl = process.env.PUBLIC_URL;

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <Image src={`${publicUrl}/logo-transparent-white.png`} alt="Ecobricks LOGO" className="logo" />
      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <Burger isOpen={isMenuOpen} direction="down" />
      </div>
      {isMenuOpen && (
        <div className="dropdown">
          <ul className="dropdown-content">
            <li className="slide-in-right"style={{ fontSize:'1.1em',fontWeight:'650' }}><a href="#">About</a></li>
            <li className="slide-in-right"style={{ fontSize:'1.1em',fontWeight:'650' }}><a href="#">Product</a></li>
            <li className="slide-in-right"style={{ fontSize:'1.1em',fontWeight:'650' }}><a href="#">Blog</a></li>
            <li className="slide-in-right"style={{ fontSize:'1.1em',fontWeight:'650' }}><a href="#">Contact</a></li>
            <li className="slide-in-right"style={{ fontSize:'1.1em',fontWeight:'650' }}><a href="#">Gallery</a></li>
          </ul>
        </div>

            )}
    </header>
  );
};

export default Header;
