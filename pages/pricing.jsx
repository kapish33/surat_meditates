import { NextSeo } from 'next-seo';
import Pricing from '../src/components/Pricing';
import { SEO } from '../utils/SeoConst';

const pricing = () => {
  return (
    <>
      <NextSeo {...SEO.pricing} />
      <Pricing />
    </>
  );
};

export default pricing;
