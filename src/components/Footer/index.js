import Link from 'next/link';
import React from 'react';
import { Companyname, footerConstRoutes, Slogan } from './footeroConstData';

const Footer = () => {
  return (
    <footer className='bg bg-neutral-900 pt-6 pb-14 md:py-6'>
      <div className='container mx-auto px-4'>
        <div className='items-center justify-between md:flex'>
          <div className='md:w-1/3'>
            <h3 className='text-lg font-semibold text-white'>{Companyname}</h3>
            <p className='mt-2 text-gray-400'>{Slogan}</p>
          </div>
          <div className='mt-4 md:mt-0 md:w-1/3'>
            <h3 className='mb-2 text-lg font-semibold text-white'>Links</h3>
            <ul>
              {footerConstRoutes.footerNav.map(({ path, css, name }, ind) => (
                <li className={css} key={ind}>
                  <Link href={path}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='mt-4 md:mt-0 md:w-1/3'>
            <h3 className='mb-2 text-lg font-semibold text-white'>
              Contact Us
            </h3>
            <ul>
              <li className='mb-2 text-gray-400'>
                <i className='fas fa-map-marker-alt mr-2'></i>123 Street, City
              </li>
              <li className='mb-2 text-gray-400'>
                <i className='fas fa-phone-alt mr-2'></i>(123) 456-7890
              </li>
              <li className='mb-2 text-gray-400'>
                <i className='fas fa-envelope mr-2'></i>info@company.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
