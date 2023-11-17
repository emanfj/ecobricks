
import React from 'react';
import { useState } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Products.css';

const ProductsCard = ({ name, description, productImage1, productImage2, productLink }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div
        className="product-card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="product-content">
          <a href={productLink} className="product-link">
            <img
              className="product-card__image"
              src={isHovered ? productImage1 : productImage2}
              alt={`${name}`}
            />
            <div />
            <h3 className="product-card__name">{name}</h3>
          </a>
          <p className="product-card__about">{description}</p> {/* Use 'description' instead of 'about' */}
        </div>
      </div>
    );
  };

const Products = () => {
  const products = [
    {
        name: 'Red Clay Bricks',
        description: 'High-quality red clay bricks for construction projects. Durable and eco-friendly.',
        productLink: '/products/red-clay-bricks',
        productImage1: `${process.env.PUBLIC_URL}/product1-1.png`,
        productImage2: `${process.env.PUBLIC_URL}/product1-2.png`,
      },
      {
        name: 'Recycled Bricks',
        description: 'Environmentally friendly recycled bricks made from reclaimed materials. Perfect for sustainable building.',
        productLink: '/products/recycled-bricks',
        productImage1: `${process.env.PUBLIC_URL}/product1-1.png`,
        productImage2: `${process.env.PUBLIC_URL}/product1-2.png`,
      },
      {
        name: 'Fire Bricks',
        description: 'Specialized fire-resistant bricks designed for use in fireplaces, ovens, and high-temperature applications.',
        productLink: '/products/fire-bricks',
        productImage1: `${process.env.PUBLIC_URL}/product1-1.png`,
        productImage2: `${process.env.PUBLIC_URL}/product1-2.png`,
      },
      {
        name: 'Brick Pavers',
        description: 'Versatile brick pavers for creating beautiful and durable outdoor spaces. Ideal for patios and walkways.',
        productLink: '/products/brick-pavers',
        productImage1: `${process.env.PUBLIC_URL}/product1-1.png`,
        productImage2: `${process.env.PUBLIC_URL}/product1-2.png`,
      },
      {
          name: 'Red Clay Bricks',
          description: 'High-quality red clay bricks for construction projects. Durable and eco-friendly.',
          productLink: '/products/red-clay-bricks',
          productImage1: `${process.env.PUBLIC_URL}/product1-1.png`,
          productImage2: `${process.env.PUBLIC_URL}/product1-2.png`,
        },
        {
          name: 'Recycled Bricks',
          description: 'Environmentally friendly recycled bricks made from reclaimed materials. Perfect for sustainable building.',
          productLink: '/products/recycled-bricks',
          productImage1: `${process.env.PUBLIC_URL}/product1-1.png`,
          productImage2: `${process.env.PUBLIC_URL}/product1-2.png`,
        },
        {
          name: 'Fire Bricks',
          description: 'Specialized fire-resistant bricks designed for use in fireplaces, ovens, and high-temperature applications.',
          productLink: '/products/fire-bricks',
          productImage1: `${process.env.PUBLIC_URL}/product1-1.png`,
          productImage2: `${process.env.PUBLIC_URL}/product1-2.png`,
        },
        {
          name: 'Brick Pavers',
          description: 'Versatile brick pavers for creating beautiful and durable outdoor spaces. Ideal for patios and walkways.',
          productLink: '/products/brick-pavers',
          productImage1: `${process.env.PUBLIC_URL}/product1-1.png`,
          productImage2: `${process.env.PUBLIC_URL}/product1-2.png`,
        },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <section className="products-container">
      <div className="products-heading">
        <div className="products-dot"></div>
        <div className="products-heading">products</div>
        <div className="products-dot"></div>
      </div>
      <Slider {...settings}>
        {products.map((product, index) => (
          <ProductsCard key={index} {...product} />
        ))}
      </Slider>
    </section>
  );
};

export default Products;
