import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className='hero-tagline'>
        <p>Animated Text flow with a tagline</p>
      </div>
      <div className='cta-button'>
        <button>
            Some CTA
        </button>
      </div>
    </div>
  );
};

export default Hero;
