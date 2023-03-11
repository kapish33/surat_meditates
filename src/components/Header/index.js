// import TaxSavingPro from '../../assets/images/logo.png';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { headerRoutes } from './headconst';

function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () =>
    window.scrollY > 0 ? setIsSticky(true) : setIsSticky(false);

  return (
    <header
      className={`fixed w-full z-50 transition-all bg-white  ${
        isSticky ? 'shadow-lg' : ''
      }`}>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between py-4'>
          <Link
            href={headerRoutes.homePage.path}
            className='text-2xl font-bold text-gray-800'>
            {headerRoutes.homePage.name}
          </Link>
          <div className='flex items-center'>
            {!showMenu && (
              <nav className='hidden md:flex md:items-center'>
                {headerRoutes.pc.map(({ path, css, name }, ind) => (
                  <Link href={path} className={css} key={ind}>
                    {name}
                  </Link>
                ))}
              </nav>
            )}
            <button
              aria-label='navigation menu'
              onClick={() => setShowMenu(!showMenu)}
              className='md:hidden ml-4 text-gray-600 hover:text-gray-800 focus:outline-none'>
              <svg viewBox='0 0 20 20' fill='currentColor' className='h-6 w-6'>
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 110-2h6a1 1 0 110 2h-6z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {showMenu && (
        <div className='md:hidden block bg-white'>
          <nav className='text-gray-600 font-bold animate-fade-in duration-2000'>
            {headerRoutes.mobile.map(({ path, css, name }, ind) => (
              <Link href={path} className={css} key={ind}>
                {name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
