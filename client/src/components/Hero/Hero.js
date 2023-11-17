import React, { useState, useEffect } from 'react';
import './Hero.css';

const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span >{currentText}</span>;
};

const Hero = () => {
  const taglineText =
    'Building a Greener Tomorrow, One Recycled Brick at a Time with Ecobricks: Transforming Waste into Sustainable Solutions';

  return (
    <section className="hero-section">
      <div className='hero-tagline'>
        <p><Typewriter text={taglineText} delay={50} /></p>
      </div>
      <div className='cta-button'>
        <button>
          Get to know us!
        </button>
      </div>
    </section>
  );
};

export default Hero;
