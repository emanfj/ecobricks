import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRecycle, faSmog, faTint } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import './Impact.css';

const Impact = () => {
  return (
    <Container fluid className="impact-container">
      <Row className="impact-heading" style={{ marginTop: '4rem' }}>
        <Col xs="auto">
          <div className="impact-dot"></div>
        </Col>
        <Col xs="auto">
          <div className="impact">our impact</div>
        </Col>
        <Col xs="auto">
          <div className="impact-dot"></div>
        </Col>
      </Row>
      <Row className="impact-analytics text-center" style={{ margin: '4rem auto 4rem'}}>
        <Col
          lg={2}
          md={4}
          sm={12}
          className="analytics-item mx-auto"
          style={{ marginBottom: '1rem', textAlign: 'center' }}
        >
          <div className="numeric-analytic">2 kg/sq ft</div>
          <hr className="impact-divider" style={{ margin: '1.5rem auto 1.5rem' }}/>
          <div className="circle">
            <div className="circle-heading">plastic waste reduction</div>
            <FontAwesomeIcon icon={faRecycle} className="circle-icon" alt="Recycle Icon" />
          </div>
        </Col>
        <Col
          lg={2}
          md={4}
          sm={12}
          className="analytics-item mx-auto"
          style={{ marginBottom: '1rem', textAlign: 'center' }}
        >
          <div className="numeric-analytic">20%</div>
          <hr className="impact-divider" style={{ margin: '1.5rem auto 1.5rem' }}/>
          <div className="circle">
            <div className="circle-heading">reduction in air pollution</div>
            <FontAwesomeIcon icon={faSmog} className="circle-icon" alt="Air Pollution Icon" />
          </div>
        </Col>
        <Col
          lg={2}
          md={4}
          sm={12}
          className="analytics-item mx-auto"
          style={{ marginBottom: '1rem', textAlign: 'center' }}
        >
          <div className="numeric-analytic">98%</div>
          <hr className="impact-divider" style={{ margin: '1.5rem auto 1.5rem' }}/>
          <div className="circle">
            <div className="circle-heading">conservation of water</div>
            <FontAwesomeIcon icon={faTint} className="circle-icon" alt="Water Conservation Icon" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Impact;
