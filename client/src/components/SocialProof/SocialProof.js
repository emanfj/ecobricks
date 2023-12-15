import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SocialProof.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Card, Container, Row, Col } from 'react-bootstrap';

const TestimonialCard = ({ name, testimonial, blogLink }) => (
  <Card
    className="testimonial-card"
    style={{
      backgroundColor: '#ADCDB6',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '25px',
      height: '300px',
      border: 'none',
    }}
  >
    <Card.Body style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <Card.Title className="testimonial-card__name" style={{ color: '#36CC6B', fontSize: '1.5rem', fontWeight: '300' }}>
          {name}
        </Card.Title>
        <Card.Text className="testimonial-card__testimonial" style={{ color: '#000000', marginTop: '1rem' }}>
          {testimonial}
        </Card.Text>
      </div>
      <div>
        <a className="testimonial-card__link" href={blogLink} style={{ backgroundColor: '#5F7464', color: 'white', paddingLeft: '2rem' }}>
          Read Story{' '}
          <FaLongArrowAltRight
            className="readstory-arrow"
            style={{ fontSize: '2rem', marginLeft: '1rem', verticalAlign: 'baseline' }}
          />
        </a>
      </div>
    </Card.Body>
  </Card>
);

const SocialProof = () => {
  useEffect(() => {
    const testimonials = document.querySelectorAll('.testimonial-card__testimonial');
    const maxCharacters = 150;

    testimonials.forEach((testimonial) => {
      const text = testimonial.textContent;
      if (text.length > maxCharacters) {
        testimonial.style.setProperty('-webkit-line-clamp', '3');
      }
    });
  }, []);

  const testimonialsData = [
    {
      name: 'ABC Company',
      testimonial:
        'Client testimonial about the positive experience with our product.Client testimonial about the positive experience with our product.Client testimonial about the positive experience with our product.',
      blogLink: '/blog/abc-company-story',
    },
    {
      name: 'John Doe',
      testimonial: 'Client testimonial about the positive experience with our product.',
      blogLink: '/blog/john-doe-story',
    },
    {
      name: 'XYZ Corporation',
      testimonial: 'Client testimonial about the positive experience with our product.',
      blogLink: '/blog/xyz-corporation-story',
    },
    {
      name: 'John Doe',
      testimonial: 'Client testimonial about the positive experience with our product.',
      blogLink: '/blog/john-doe-story',
    },
    {
      name: 'XYZ Corporation',
      testimonial: 'Client testimonial about the positive experience with our product.',
      blogLink: '/blog/xyz-corporation-story',
    },
  ];

  const partnerLogos = [
    { image: `${process.env.PUBLIC_URL}/collaborations/BattleofMinds.png`, link: 'https://competition.bat-battleofminds.com/' },
    { image: `${process.env.PUBLIC_URL}/collaborations/Capital_Smart_City.png`, link: 'https://www.smartcitypk.com/' },
    { image: `${process.env.PUBLIC_URL}/collaborations/ClimateLaunchpad.png`, link: 'https://finals.climatelaunchpad.org/regional-finals/asia-pacific/' },
    { image: `${process.env.PUBLIC_URL}/collaborations/GSEA.png`, link: 'https://www.gsea.pk/' },
    { image: `${process.env.PUBLIC_URL}/collaborations/Hatch8.png`, link: 'https://nstp.pk/innovate-pakistan/innovation-centre/hatch-8/' },
    { image: `${process.env.PUBLIC_URL}/collaborations/Molecule.png`, link: 'https://molecule.com.pk/' },
    { image: `${process.env.PUBLIC_URL}/collaborations/NICS.png`, link: 'https://nep.pitb.gov.pk/node/588' },
    { image: `${process.env.PUBLIC_URL}/collaborations/NSTP.png`, link: 'https://nstp.pk/' },
    { image: `${process.env.PUBLIC_URL}/collaborations/NUST.png`, link: 'https://www.nust.edu.pk' },
    { image: `${process.env.PUBLIC_URL}/collaborations/RisingStar.png`, link: 'https://nust.edu.pk/news/nstp-and-u-s-embassy-host-finale-of-rising-stars-startup-competition-empowering-women-and-minority-entrepreneurs-in-pakistan/' },
    { image: `${process.env.PUBLIC_URL}/collaborations/SC.png`, link: 'https://scwomenintech.co.zm/' },
    { image: `${process.env.PUBLIC_URL}/collaborations/SEED.png`, link: 'https://seedventures.org/' },
    { image: `${process.env.PUBLIC_URL}/collaborations/Unilever.png`, link: 'https://www.unilever.pk/' },
  ];

  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      // adjusting the number of slidesToShow based on screen width
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } 
      else if (window.innerWidth <= 992){
        setSlidesToShow(2);
      }
      else {
        setSlidesToShow(3);
      }
    };

    // initial adjustment
    handleResize();

    // event listener for window resize
    window.addEventListener('resize', handleResize);

    // cleaning up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    
  };
  

  
  return (
    <Container fluid className="social-proof-container" style={{ background: '#EEFCEA', textAlign: 'center' }}>
      {/* testimonials Section */}
      <div className="row" style={{ marginTop: '4rem' }}>
        <div className="col-12 text-center products-heading">
          <div className="socialproof-dot"></div>
          <div className="testimonials-heading">testimonials</div>
          <div className="socialproof-dot"></div>
        </div>
      </div>
      <Slider {...slickSettings} className="testimonial-cards " style={{ width: '70%',margin: '4rem auto 4rem'}}>
        {testimonialsData.map((testimonial, index) => (
          <div key={index}>
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </Slider>

      {/* collaborations Section */}
      <div className="row" style={{ marginTop: '4rem', marginBottom: '4rem' }}>
        <div className="col-12 text-center products-heading">
          <div className="socialproof-dot"></div>
          <div className="collaborations-heading">collaborations</div>
          <div className="socialproof-dot"></div>
        </div>
      </div>
      <Row className="collaborations justify-content-center" style={{ marginBottom: '4rem' }}>
        {partnerLogos.map((item, index) => (
          <Col key={index} xs={6} md={4} lg={2}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img className="collaboration-logos medium-size" src={item.image} alt={`Logo ${index + 1}`} />
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SocialProof;
