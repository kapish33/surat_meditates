import Head from 'next/head';
import React from 'react';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import Pricing from '../src/components/Pricing';
import Stats from '../src/components/Stats';

const index = () => {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta
          name='description'
          content='Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice.'
          key='desc'
        />
      </Head>
      <Header />
      <Hero />
      <Stats />
      <Pricing />
      <Footer />
    </>
  );
};

export default index;
