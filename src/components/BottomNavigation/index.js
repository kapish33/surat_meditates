import React from 'react';

const BottomNavigation = () => {
  return (
    <nav className='fixed bottom-0 flex w-full gap-2 border-t border-gray-300 bg-white p-2 text-center md:relative md:hidden'>
      <button className='bottom-nav-buttons' aria-label='Home'>
        Home
      </button>
      <button className='bottom-nav-buttons' aria-label='About'>
        About
      </button>
    </nav>
  );
};

export default BottomNavigation;
