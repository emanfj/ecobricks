import React from 'react';
import Hero from '../components/Hero/Hero'; 
import Products from '../components/Products/Products';
import SocialProof from '../components/SocialProof/SocialProof'
import Impact from '../components/Impact/Impact';
import Footer from '../components/Footer/Footer'; 
import Header from '../components/Header/Header';
// import Story from '../components/Story/Story';

const LandingPage = () => {
  return (
    <div>
      <section id='header'>
        {/* <Header /> */}
        <Hero /> 
      </section>
      <Products />
      {/* <Story />  */}
      <SocialProof />
      <Impact />
      <Footer /> 
    </div>
  );
};

export default LandingPage;
