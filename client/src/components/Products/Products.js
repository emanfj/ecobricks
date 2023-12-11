import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Products.css';

const ProductsCard = ({ name, description, productImage1, productImage2, productLink }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="card product-card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <a href={productLink} className="product-link">
        <img
          className="card-img-top product-card__image"
          src={isHovered ? productImage1 : productImage2}
          alt={`${name}`}
        />
        <div className="card-body">
          <h3 className="card-title product-card__name">{name}</h3>
          <p className="card-text product-card__about">{description}</p>
        </div>
      </a>
    </div>
  );
};

const Products = () => {
  const products = [
    {
      name: 'Red Clay Bricks',
      description: 'High-quality red clay bricks for construction projects. Durable and eco-friendly.',
      productLink: '/products/red-clay-bricks',
      productImage1: `${process.env.PUBLIC_URL}/product1-a.jpg`,
      productImage2: `${process.env.PUBLIC_URL}/product1-b.jpg`,
    },
    {
      name: 'Recycled Bricks',
      description: 'Environmentally friendly recycled bricks made from reclaimed materials. ',
      productLink: '/products/recycled-bricks',
      productImage1: `${process.env.PUBLIC_URL}/product2-a.jpg`,
      productImage2: `${process.env.PUBLIC_URL}/product2-b.jpg`,
    },  
    {
      name: 'Recycled Bricks',
      description: 'Environmentally friendly recycled bricks made from reclaimed materials. ',
      productLink: '/products/recycled-bricks',
      productImage1: `${process.env.PUBLIC_URL}/product2-a.jpg`,
      productImage2: `${process.env.PUBLIC_URL}/product2-b.jpg`,
    },  
    {
      name: 'Recycled Bricks',
      description: 'Environmentally friendly recycled bricks made from reclaimed materials. ',
      productLink: '/products/recycled-bricks',
      productImage1: `${process.env.PUBLIC_URL}/product2-a.jpg`,
      productImage2: `${process.env.PUBLIC_URL}/product2-b.jpg`,
    },  
    {
      name: 'Recycled Bricks',
      description: 'Environmentally friendly recycled bricks made from reclaimed materials. ',
      productLink: '/products/recycled-bricks',
      productImage1: `${process.env.PUBLIC_URL}/product2-a.jpg`,
      productImage2: `${process.env.PUBLIC_URL}/product2-b.jpg`,
    },  

  ];

  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      // Adjust the number of slidesToShow based on screen width
      if (window.innerWidth <= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(4);
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
    <section className="container-fluid products-container">
      <div className="row">
        <div className="col-12 text-center products-heading">
          <div className="products-dot"></div>
          <div className="products-heading">products</div>
          <div className="products-dot"></div>
        </div>
      </div>
      {products.length <= 4 ? (
        <div className="row justify-content-center"> 
          {products.map((product, index) => (
            <div key={index} className="col-md-3 col-sm-6">
              <ProductsCard {...product} />
            </div>
          ))}
        </div>
      ) : (
        <Slider {...settings} style={{ margin: '0 auto' }}> 
          {products.map((product, index) => (
            <div key={index} className="col-md-3 col-sm-6">
              <ProductsCard {...product} />
            </div>
          ))}
        </Slider>
      )}
    </section>
  );
};

export default Products;
