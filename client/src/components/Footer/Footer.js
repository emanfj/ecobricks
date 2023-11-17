import React from 'react';
import './Footer.css';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'; 
import { BiMap } from 'react-icons/bi';
import Logo from '../../assets/Fav_Icon.png';

const Footer = () => {
  return (
    <footer className="footer-container">
        <div className="left-section">
            <img src={Logo} alt="logo"/>
            <div className="contact-info">
                <p>Phone: 000-0000000</p>
                <p>Email: contact@ecobricks.com</p>
                <p>Address: NSTP,H12</p>
            </div>
            <div className = "view-map">
                <BiMap className="location-icon" />
                <p>view map</p>
            </div>
        </div>
        <div className="social-links">
            <FaFacebook className="social-icon" />
            <FaLinkedin className="social-icon" />
            <FaInstagram className="social-icon" />
        </div>
        <div className="right-section">
            <div className="newletter">
                <p>Subscribe for Updates</p>
                <div className="input-wrapper">
                    <input type="email" placeholder="Your email here"/> 
                    <button>Subscibe</button>
                </div>
            </div>
        </div>
        <hr className="footer-divider"/>
        <div className="bottom-section">
            <div className="footer-links">
                <p><a href="privacy-policy">privacy policy</a> |  <a href="/sitemap">sitemap</a></p>
            </div>
            <div className="copyright">
                <p>&copy; {new Date().getFullYear()} ecobricks</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
