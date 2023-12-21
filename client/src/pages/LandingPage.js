import React from 'react';
import Hero from '../components/Hero/Hero'; 
import Heading from '../components/Heading/Heading';
import Products from '../components/Products/Products';
import SocialProof from '../components/SocialProof/SocialProof';
import Impact from '../components/Impact/Impact';
import Footer from '../components/Footer/Footer'; 
import Header from '../components/Header/Header';
import Story from '../components/Story/Story';
import CompanyProjects from '../components/CompanyProjects/CompanyProjects';
import FeatureImage from '../assets/feature-image.png';
import BrickColorsInsight from '../components/BrickColorsInsight/BrickColorsInsight'
import SDG from '../components/SDG/SDG'

const LandingPage = () => {
  const headerStyle = {
    backgroundImage: `url(${FeatureImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div>
      <section id='header' style={headerStyle}>
        <Header />
        <Hero /> 
      </section>
      <Heading title="STORY" detail="Where the Journey Began" />
      <Story /> 
      <Heading title="PRODUCTS" detail="Innovation in Every Brick" />
      <Products />
      <Heading title="UNIQUENESS OF OUR TILES" detail="Discover the Unmatched Uniqueness of Our Tiles and Pavers" />
      <BrickColorsInsight />
      <Heading title="PROJECTS" detail="Lorem Gpsum Dolor Sit Amet" />
      <CompanyProjects />
      <Heading title="IMPACT" detail="Explore the Transformative Impact of Our Sustainable Solutions" />
      <Impact />
      <Heading title="SUSTAINABLE DEVELOPMENT GOALS" detail="Contributing to Global Progress and Sustainable Practices" />
      <SDG />
      <Heading title="SOCIAL PROOF" detail="Discover What Our Clients Say About Their Experiences" />
      <SocialProof />
      <Footer /> 
    </div>
  );
};

export default LandingPage;
