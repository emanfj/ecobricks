import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './BrickColorsInsight.css';


const BrickColorsInsight = () => {
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <Container fluid>
      {/* Row 1 */}
      <Row className="brick-colors-insight">

        <Col xs={2} md={4} className="left-insight-col text-center col-lg-4 col-md-4 col-s-3 order-1 order-md-1 order-s-1 order-xs-1">
          <div className="insight-item" style={{ marginRight: 0, paddingRight: 0, justifyContent: 'flex-end', textAlign: 'right', paddingTop:'6em'}}>
            <Image src={`${publicUrl}/economical.png`} alt="Economical Icon" className="insight-icon" />
            <div className="insight-title">Economical</div>
            <div className="insight-description">
              <ul style={{listStyleType:'none', margin:'0',padding:'0'}}>
                <li>Cost effective raw material</li>
                <li>Lower maintaince costs</li>
                <li>Reduced production costs</li>
              </ul>
            </div>
          </div>
          <div className="insight-item" style={{ marginRight: 0, paddingRight: 0, justifyContent: 'flex-end', textAlign: 'right' }}>
            <Image src={`${publicUrl}/functional.png`} alt="Functional Icon" className="insight-icon" />
            <div className="insight-title">Functionality</div>
            <div className="insight-description">
              <ul style={{listStyleType:'none', margin:'0',padding:'0'}}>
                <li>Ease in installation</li>
                <li>Variety of constructed structures</li>
                <li>Interlocking design</li>
              </ul>
            </div>
          </div>
        </Col>

        {/* Main Image Column for Small Screens (hidden on larger screens) */}
        <Col md={4} className="text-center main-image-column d-none d-lg-table d-md-table order-2 " style={{ margin: 0, padding: 0 }}>
          {/* large image of a brick */}
          <Image src={`${publicUrl}/sample_brick.png`} alt="Large Brick" className="main-image" fluid />
        </Col>

        <Col xs={2} md={4} className="right-insight-col text-center col-md-4 col-s-3 order-3 order-md-2 order-lg-2 ">
          <div className="insight-item" style={{ marginLeft: 0, paddingLeft: 0, justifyContent: 'flex-start', textAlign: 'left', paddingTop:'6em', }}>
            <Image src={`${publicUrl}/physical.png`} alt="Physical Icon" className="insight-icon" />
            <div className="insight-title">Physical</div>
            <div className="insight-description">
              <ul style={{listStyleType:'none', margin:'0',padding:'0'}}>
                <li>1.5x stronger</li>
                <li>20% lighter</li>
                <li>30% more durable</li>
              </ul>
            </div>
          </div>
          <div className="insight-item" style={{ marginLeft: 0, paddingLeft: 0, justifyContent: 'flex-start', textAlign: 'left' }}>
            <Image src={`${publicUrl}/environmental.png`} className="insight-icon" />
            <div className="insight-title">Environmental</div>
            <div className="insight-description">
              <ul style={{listStyleType:'none', margin:'0',padding:'0'}}>
                <li>0% cement</li>
                <li>Carbon negative</li>
                <li>100% recyclable</li>
              </ul>
            </div>
          </div>
        </Col>

      </Row>

      {/* Row 2 */}
      <Row className="brick-colors-row" style={{ textAlign: 'center' }}>
        {/* %PUBLIC_URL% to reference images in the public folder */}
        <Image src={`${publicUrl}/sample_brick.png`} alt="Brick Color 1" fluid />
        <Image src={`${publicUrl}/sample_brick.png`} alt="Brick Color 2" fluid />
        <Image src={`${publicUrl}/sample_brick.png`} alt="Brick Color 3" fluid />
        <Image src={`${publicUrl}/sample_brick.png`} alt="Brick Color 4" fluid />
        <Image src={`${publicUrl}/sample_brick.png`} alt="Brick Color 5" fluid />
      </Row>
    </Container>
  );
};

export default BrickColorsInsight;
