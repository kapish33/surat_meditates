import React from 'react';
import { pricingData } from './pricingdata.js';
import { PricingCard } from './PricingCard';

const Pricing = () => {
  return (
    <section className='body-font overflow-hidden text-gray-600'>
      <div className='container mx-auto px-5 py-24'>
        <div className='mb-20 flex w-full flex-col text-center'>
          <h1 className='bg-gradient-clip-content animate-spin-slow mb-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl'>
            Pricing
          </h1>
          <p className='mx-auto text-base leading-relaxed text-gray-500 lg:w-2/3'>
            {`Are you ready to tap into your inner strength and find peace amidst
              the chaos? Join us for our meditation course and learn how to unlock
              your potential. Our program is designed to help you reduce stress,
              increase focus, and improve your overall well-being. Don't miss out
              on this opportunity to transform your life. Enroll today and
              discover the power within you.`}
          </p>
        </div>
        <div className='-m-4 flex flex-wrap justify-center'>
          {pricingData.pricingModel &&
            pricingData.pricingModel.map((cardData, keying) => (
              <PricingCard key={keying} {...cardData} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
