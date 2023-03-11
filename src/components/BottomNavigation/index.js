import React from 'react';

const BottomNavigation = () => {
  return (
    <nav className='fixed bottom-0 flex w-full gap-2 border-t border-gray-300 bg-white p-2 text-center md:relative md:hidden'>
      <button
        className='grow rounded bg-neutral-800 py-2 font-bold text-white transition duration-300
        ease-in-out hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 active:scale-95 active:bg-secondary-500'
        aria-label='Home'>
        Home
      </button>
      <button
        className='grow rounded bg-neutral-800 py-2 font-bold text-white transition duration-300
         ease-in-out hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2 active:scale-95 active:bg-secondary-500'
        aria-label='About'>
        About
      </button>
    </nav>
  );
};

export default BottomNavigation;
