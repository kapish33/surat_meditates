import Image from 'next/image';
import React from 'react';
import TaxSavingProHeroimage from '../../assets/images/HeroTaxImage.png';

const Hero = () => {
  return (
    <section className='body-font text-gray-600'>
      <div className='container mx-auto flex flex-col items-center px-5 py-24 md:flex-row'>
        <div className='mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg'>
          <Image
            className='rounded object-cover object-center'
            alt='Tax Saving Pro'
            src={TaxSavingProHeroimage}
            width={'720'}
            height={'600'}
            priority
            sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
          />
        </div>
        <div className='flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24'>
          <h1 className='title-font mb-4 text-4xl font-medium leading-tight text-neutral-800 sm:text-5xl'>
            Find Inner Peace with{' '}
            <span className='bg-gradient-to-r from-hero-400 to-green-600 bg-clip-text font-semibold italic text-transparent'>
              Sudarshan Kriya
            </span>
            <br className='hidden lg:inline-block' /> &amp;{' '}
            <span className='bg-gradient-to-r from-green-600  to-hero-400 bg-clip-text font-semibold italic text-transparent'>
              Sahaj Samadhi
            </span>
          </h1>

          <p className='mb-8 leading-relaxed'>
            Discover inner peace and mindfulness with Surat Meditates. Our
            expert-guided meditation practices include Sudarshan Kriya and Sahaj
            Samadhi for transformative benefits and deep relaxation. Join our
            supportive community today and experience the joy and harmony of
            regular meditation practice
          </p>
          <div className='flex justify-center'>
            {/* <button className='inline-flex rounded border-0 bg-indigo-600 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none'>
              Button
            </button>
            <button className='ml-4 inline-flex rounded border-0 bg-gray-100 py-2 px-6 text-lg text-gray-700 hover:bg-gray-200 focus:outline-none'>
              Button
            </button> */}

            <div className='hidden sm:block'>
              <button
                className='bottom-nav-buttons m-2 mr-2 px-4'
                aria-label='Sudarshan Kriya'>
                Join Sudarshan Kriya
              </button>
              <button
                className='bottom-nav-buttons m-2 px-4'
                aria-label='Sahaj Samadhi'>
                Join Sahaj Samadhi
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
