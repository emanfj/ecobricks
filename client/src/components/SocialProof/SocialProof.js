import React, { useEffect } from 'react';
import './SocialProof.css';
import { FaLongArrowAltRight } from 'react-icons/fa';


const TestimonialCard = ({ name, testimonial, blogLink }) => (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <h3 className="testimonial-card__name">{name}</h3>
        <p className="testimonial-card__testimonial">{testimonial}</p>
      </div>
      <a className="testimonial-card__link" href={blogLink}>
        Read Story <FaLongArrowAltRight className="readstory-arrow" />
      </a>
    </div>
  );
  
  

const SocialProof = () => {
    useEffect(() => {
        const testimonials = document.querySelectorAll('.testimonial-card__testimonial');
        const maxCharacters = 150; // Adjust as needed
      
        testimonials.forEach((testimonial) => {
          const text = testimonial.textContent;
          if (text.length > maxCharacters) {
            testimonial.style.setProperty('-webkit-line-clamp', '3');
          }
        });
      }, []); // Empty dependency array ensures the effect runs once on component mount
      
    const testimonials = [
        {
        name: 'ABC Company',
        testimonial: 'Client testimonial about the positive experience with our product.Client testimonial about the positive experience with our product.Client testimonial about the positive experience with our product.',
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
    ];

    const partnerLogos = [
        `${process.env.PUBLIC_URL}/logo192.png`,
        `${process.env.PUBLIC_URL}/logo192.png`,
        `${process.env.PUBLIC_URL}/logo192.png`,
        `${process.env.PUBLIC_URL}/logo192.png`,
        `${process.env.PUBLIC_URL}/logo192.png`,
        `${process.env.PUBLIC_URL}/logo192.png`,
        `${process.env.PUBLIC_URL}/logo192.png`,
    ];

    return (
        <section className="social-proof-container">
        <div className="testimonial-cards">
            {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
            ))}
        </div>

        <div className="collaborations">
            {partnerLogos.map((logo, index) => (
            <img key={index} className="collaboration-logos" src={logo} alt={`Logo ${index + 1}`} />
            ))}
        </div>
        </section>
    );
};

export default SocialProof;
