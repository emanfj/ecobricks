import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className="header-box">
        <div className="logo-small-1">
          <img src={require('./Fav_Icon.png')} alt="" />
        </div>
        <div className="ecobricks-website">Ecobricks Website</div>
        <div>
          {/* Menu Icon */}
          <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={handleClick}>
            <div className="hamburger"></div>
            <div className="hamburger" style={{ top: '28px' }}></div>
            <div className="hamburger" style={{ top: '37px' }}></div>
          </div>

          {/* Menu Items */}
          {isOpen && (
            <>
              <div className="crossbox">
                <div className="line_7"></div>
                <div className="line_8"></div>
              </div>
              <div className="about">
                <div className="about_text">About</div>
              </div>
              <div className="blog">
                <div className="blog_text">Blog</div>
              </div>
              <div className="contact">
                <div className="contact_text">Contact</div>
              </div>
              <div className="products">
                <div className="products_text">Products</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
