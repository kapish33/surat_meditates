import React from 'react';
import { NextSeo } from 'next-seo';
import { SEO } from '../utils/SeoConst';

const second = () => {
  return (
    <div>
      <NextSeo {...SEO.aboutUsSeo} />
      second
      {process.env.NODE_ENV}
    </div>
  );
};

export default second;
