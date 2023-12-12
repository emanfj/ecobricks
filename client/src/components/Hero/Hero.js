import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
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

  return <span>{currentText}</span>;
};

const Hero = () => {
  const taglineText =
    'Forging a Sustainable Future';

  return (
    <section className="hero-section p-5 d-flex flex-column align-items-left justify-content-flex">
      <div className="hero-tagline mb-4 text-center">
        <p>
          <Typewriter text={taglineText} delay={50} />
        </p>
      </div>
      <div className="cta-button w-100 max-w-299px">
        <Button variant="success" className="w-100">
          Get to know us!
        </Button>
      </div>
    </section>
  );
};

export default Hero;