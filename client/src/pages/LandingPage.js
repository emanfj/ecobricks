import React from 'react';
import Hero from '../components/Hero/Hero'; 
import Products from '../components/Products/Products';
import SocialProof from '../components/SocialProof/SocialProof'
import Impact from '../components/Impact/Impact';
import Footer from '../components/Footer/Footer'; 

const LandingPage = () => {
  return (
    <div>
      <Hero /> 
      <Products /> 
      <SocialProof />
      <Impact />
      <Footer /> 
    </div>
  );
};

export default LandingPage;
