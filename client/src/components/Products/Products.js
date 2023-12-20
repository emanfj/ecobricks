import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Products.css';

const ProductsCard = ({ name, description, productImage1, productImage2, productLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Replace '\n' with <br> for line breaks in description
  const formattedDescription = description.split('\n').map((item, key) => (
    <span key={key}>
      {item}
      <br />
    </span>
  ));

  return (
    <div className="card product-card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <a href={productLink} className="product-link">
        <img
          className="card-img-top product-card__image"
          src={isHovered ? productImage1 : productImage2}
          alt={`${name}`}
        />
        <div className="card-body">
          <p className="card-title product-card__name">{name}</p>
          <p className="card-text product-card__about">{formattedDescription}</p>
        </div>
      </a>
    </div>
  );
};


const Products = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const products = [
    {
      name: 'Rectangular Paver',
      description: 'Size: 200 x 100 x 50 mm\nStrength: 7000 psi\nWater Absorption: 2%',
      productLink: '/products/rectangular-paver',
      productImage1: `${process.env.PUBLIC_URL}/product1-a.jpg`,
      productImage2: `${process.env.PUBLIC_URL}/product1-b.jpg`,
    },
    {
      name: 'Hexagonal Paver',
      description: 'Side length Size: 8 in\nStrength: 7000 psi\nWater Absorption: 2%',
      productLink: '/products/hexagonal-paver',
      productImage1: `${process.env.PUBLIC_URL}/product2-a.jpg`,
      productImage2: `${process.env.PUBLIC_URL}/product2-b.jpg`,
    },  
    
    

  ];

  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the number of slidesToShow based on screen width
      if (window.innerWidth <= 768) {
        setSlidesToShow(1); // for mobile screens
      } else if (window.innerWidth <= 992) {
        setSlidesToShow(2); // for tablet screens
      } else {
        setSlidesToShow(3); // for larger screens
      }
    };
  
    // Initial adjustment
    handleResize();
  
    // Event listener for window resize
    window.addEventListener('resize', handleResize);
  
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    
  };

  return (
    <section
      className="container-fluid products-container"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {products.length <= 4 ? (
        <div className="row justify-content-center">
          {products.map((product, index) => (
            <div
              key={index}
              className="col-md-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={`${index * 100}`}
            >
              <ProductsCard {...product} />
            </div>
          ))}
        </div>
      ) : (
        <Slider {...settings} style={{ maxWidth: '80%', margin: '0 auto' }}>
          {products.map((product, index) => (
            <div
              key={index}
              className="col-md-3 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={`${index * 100}`}
            >
              <ProductsCard {...product} />
            </div>
          ))}
        </Slider>
      )}
    </section>
  );
};

export default Products;

