import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Impact.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

const ImpactColumn = ({ value, heading, icon }) => (
  <Col
    lg={2}
    md={4}
    sm={12}
    className="analytics-item mx-auto"
    style={{ marginBottom: '1rem', textAlign: 'center' }}
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="100"
  >
    <div className="analytic">
      <span className="analytic-value">{value}</span><br/>
      <span className="analytic-heading">{heading}</span>
    </div>
    <hr className="impact-divider" style={{ margin: '1.5rem auto 1.5rem' }} />
    <div className="circle">
      <div className="gradient-overlay"></div>
      <img
        src={`${PUBLIC_URL}/${icon}.png`}
        alt={`${icon} Icon`}
        className="circle-icon"
        style={{ width: '10em', height: '10em',  }}
      />
    </div>
  </Col>
);

const Impact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container fluid className="impact-container">
      <Row className="impact-analytics text-center" style={{ margin: '4rem auto 4rem' }} data-aos="fade-up" data-aos-duration="1000">
        <ImpactColumn value="2 kg/sq" heading="plastic waste reduction" icon="plastic-waste" />
        <ImpactColumn value="20%" heading="reduction in air pollution" icon="air-pollution" />
        <ImpactColumn value="98%" heading="conservation of water" icon="save-water" />
      </Row>
    </Container>
  );
};

export default Impact;
