import React, { useState, useEffect } from 'react';
import {  Container, Row, Col } from 'react-bootstrap';
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
  const taglineText = 'One Solution, Triple Impact';

  return (
    <section className="hero-section d-flex align-items-center justify-content-center">
      <Container>
        <Row className="mb-4 text-center">
          <Col xs={12}>
            <div className="hero-tagline">
              <p>
                <Typewriter text={taglineText} delay={50} />
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mb-4 text-center">
          <Col xs={12}>
            <div className="hero-description">
              <p>
                People, Profit, & Planet
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mb-4 text-center">
          <Col xs={12}>
            <div className="hero-description">
              <p>
                Innovative concrete alternative for a carbon-negative future. Crafting premium building products from non-recycled plastics. Building the sustainable framework for tomorrow's cities.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;