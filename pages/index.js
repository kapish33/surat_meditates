import React from 'react';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import Pricing from '../src/components/Pricing';
import Stats from '../src/components/Stats';

const index = () => {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Pricing />
      <Footer />
    </>
  );
};

export default index;
