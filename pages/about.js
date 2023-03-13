import React from 'react';
import { NextSeo } from 'next-seo';
import { SEO } from '../utils/SeoConst';

const AboutPage = () => {
  return (
    <>
      <NextSeo {...SEO.aboutUsSeo} />
      <section className='bg-white pt-20 pb-16'>
        <div className='container mx-auto px-4'>
          <h1 className='bg-gradient-clip-content animate-spin-slow mb-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl'>
            About Us
          </h1>
          <p className='mb-8 text-lg leading-7 text-gray-600'>
            At Surat Meditates, we are passionate about bringing the benefits of
            meditation to the community. We are affiliated with the Art of
            Living organization, a global nonprofit dedicated to promoting peace
            and wellness through various programs and initiatives.
          </p>
          <p className='mb-8 text-lg leading-7 text-gray-600'>
            Our mission is to empower individuals with the tools and knowledge
            to cultivate inner peace, reduce stress, and live a more fulfilling
            life. We offer a range of courses and workshops, including the
            popular Sudarshan Kriya and Sahaj Samadhi programs, which have
            helped countless individuals experience profound transformation and
            healing.
          </p>
          <p className='mb-8 text-lg leading-7 text-gray-600'>
            Our team of experienced and certified instructors is dedicated to
            guiding each student on their journey towards greater health,
            happiness, and self-awareness. We believe that meditation is a
            powerful tool for personal growth and transformation, and we are
            committed to sharing its benefits with as many people as possible.
            ence the full benefits of this transformative practice.
          </p>
          <p className='mb-8 text-lg leading-7 text-gray-600'>
            Whether you are new to meditation or an experienced practitioner, we
            invite you to join us on this journey towards greater peace and
            wellbeing. With Surat Meditates, you can experience the power of
            meditation and discover the joy of living a more conscious and
            fulfilling life.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
