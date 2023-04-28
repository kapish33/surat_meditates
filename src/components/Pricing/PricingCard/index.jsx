export const PricingCard = ({
  popular,
  planName,
  price,
  monthlyOrYearlyPrice,
  list,
  butonText,
  buttonAction,
  buttonBelowText,
}) => {
  return (
    <div className='w-full p-4 md:w-1/2 xl:w-1/4'>
      <div
        className={`relative flex h-full flex-col overflow-hidden rounded-lg border-2 ${
          popular ? ' border-[#F8B31C]' : 'border-gray-400'
        }  p-6  `}>
        {popular && (
          <span className='absolute right-0 top-0 rounded-bl bg-[#F8B31C] px-3 py-1 text-xs tracking-widest text-white'>
            {popular}
          </span>
        )}
        <h2 className='title-font mb-1 text-sm font-medium tracking-widest'>
          {planName ? planName : 'SPECIAL'}
        </h2>
        <h1 className='mb-4 flex items-center border-b border-gray-200 pb-4 text-5xl leading-none text-gray-900'>
          <span>{price ? price : '- - -'}</span>
          <span className='ml-1 text-lg font-normal text-gray-500'>
            /{monthlyOrYearlyPrice ? monthlyOrYearlyPrice : 'mo'}
          </span>
        </h1>
        {list &&
          list.map((item, keyind) => {
            return (
              <p key={keyind} className='mb-2 flex items-center text-gray-600'>
                <span className='mr-2 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-gray-400 text-white'>
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2.5'
                    className='h-3 w-3'
                    viewBox='0 0 24 24'>
                    <path d='M20 6L9 17l-5-5'></path>
                  </svg>
                </span>
                {item}
              </p>
            );
          })}

        <button
          onClick={() => buttonAction}
          className={`mt-auto flex w-full items-center rounded border-0 ${
            popular
              ? 'bg-[#F8B31C] hover:bg-[#08254F] '
              : 'bg-neutral-800 hover:bg-hero-400 '
          }  py-2 px-4 text-white transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-hero-400 focus:ring-offset-2 active:scale-95  active:bg-hero-300 active:text-neutral-700`}>
          {butonText ? butonText : 'Button'}
          <svg
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            className='ml-auto h-4 w-4'
            viewBox='0 0 24 24'>
            <path d='M5 12h14M12 5l7 7-7 7'></path>
          </svg>
        </button>
        <p className='mt-3 text-xs text-gray-500'>
          {buttonBelowText ? buttonBelowText : 'some Error'}
        </p>
      </div>
    </div>
  );
};
