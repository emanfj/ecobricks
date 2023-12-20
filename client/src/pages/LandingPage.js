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
      <Heading title="STORY" detail="Lorem Gpsum Dolor Sit Amet" />
      <Story /> 
      <Heading title="PRODUCTS" detail="Lorem Gpsum Dolor Sit Amet" />
      <Products />
      <Heading title="GREEN INTERLOCKING PAVING TILE" detail="Lorem Gpsum Dolor Sit Amet" />
      <BrickColorsInsight />
      <Heading title="PROJECTS" detail="Lorem Gpsum Dolor Sit Amet" />
      <CompanyProjects />
      <Heading title="IMPACT" detail="Lorem Gpsum Dolor Sit Amet" />
      <Impact />
      <Heading title="SUSTAINABLE DEVELOPMENT GOALS" detail="Lorem Gpsum Dolor Sit Amet" />
      <SDG />
      <Heading title="SOCIAL PROOF" detail="Lorem Gpsum Dolor Sit Amet" />
      <SocialProof />
      <Footer /> 
    </div>
  );
};

export default LandingPage;
