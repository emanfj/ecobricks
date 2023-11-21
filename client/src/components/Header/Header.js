import './Header.css';
const React = require('react');
const { useState } = require('react');

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div class="header">
            <div class="header-box">
                <div class="logo-small-1">
                    <img src={require('./pics and vids/Logo Small.png')} alt="" />
                </div>
                <div class="ecobricks-website">Ecobricks Website</div>
                <div>
                {/* Menu Icon */}
                <div class={`hamburger ${isOpen ? 'open' : ''}`} onClick={handleClick}>
                    <div class="hamburger"></div>
                    <div class="hamburger" style="top: 28px;"></div>
                    <div class="hamburger" style="top: 37px;"></div>
                </div>

                {/* Menu Items */}
                {isOpen && (
                    <><div class="crossbox">
                            <div class="line_7"></div>
                            <div class="line_8"></div>
                        </div><div class="about">
                                <div class="about_text">About</div>
                            </div><div class="blog">
                                <div class="blog_text">Blog</div>
                            </div><div class="contact">
                                <div class="contact_text">Contact</div>
                            </div><div class="products">
                                <div class="products_text">Products</div>
                            </div></>

                )}
            </div>
            </div>
        </div>
    );
};


export default Header;