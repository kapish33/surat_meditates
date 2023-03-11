import { NextSeo } from 'next-seo';
import { SEO } from '../utils/SeoConst';

const terms = () => {
  return (
    <>
      <NextSeo {...SEO.termsAndConditions} />
      <div className='mcf-cpm container mx-auto'>
        <h1 className='text-center'>Terms and conditions of use</h1>
      </div>
    </>
  );
};

export default terms;
