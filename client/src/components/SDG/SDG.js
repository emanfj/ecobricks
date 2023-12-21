import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './SDG.css';

const SDG = () => {
  // array of SDGs with their corresponding image paths and links
  const sdgGoals = [
    {
      number: 3,
      image: `${process.env.PUBLIC_URL}/SDGs/sdg3.svg`,
      link: 'https://sdgs.un.org/goals/goal3',
    },
    {
      number: 6,
      image: `${process.env.PUBLIC_URL}/SDGs/sdg6.svg`,
      link: 'https://sdgs.un.org/goals/goal6',
    },
    {
      number: 11,
      image: `${process.env.PUBLIC_URL}/SDGs/sdg11.svg`,
      link: 'https://sdgs.un.org/goals/goal11',
    },
    {
      number: 12,
      image: `${process.env.PUBLIC_URL}/SDGs/sdg12.svg`,
      link: 'https://sdgs.un.org/goals/goal12',
    },
    {
      number: 13,
      image: `${process.env.PUBLIC_URL}/SDGs/sdg13.svg`,
      link: 'https://sdgs.un.org/goals/goal13',
    },
    {
      number: 14,
      image: `${process.env.PUBLIC_URL}/SDGs/sdg14.svg`,
      link: 'https://sdgs.un.org/goals/goal14',
    },
    {
      number: 15,
      image: `${process.env.PUBLIC_URL}/SDGs/sdg15.svg`,
      link: 'https://sdgs.un.org/goals/goal15',
    },
  ];

  return (
    <Container className="sdg-container">
      <Row className="sdg-row justify-content-center align-items-center" style={{paddingLeft:'5em',paddingRight:'5em'}}>
        {sdgGoals.map((goal) => (
          <Col key={goal.number} xs={6} sm={4} md={3} lg = {3} className="sdg-col">
            <div className="sdg-card">
              <a href={goal.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={goal.image}
                  alt={`Goal ${goal.number}`}
                  className="sdg-image"
                  style={{ width: '100%', height: 'auto' }}
                />
              </a>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};



export default SDG;
