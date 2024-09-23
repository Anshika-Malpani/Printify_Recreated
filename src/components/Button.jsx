import React from 'react';

const Button = ({ name, icon, link, theme }) => {
  return (
      <>
      <div className={`select-none py-3 md:py-5 px-4 md:px-4 h-[5vh] md:h-[6vh] rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all duration-150 ease-in-out bg-[#385154] ${theme === 'light' ? 'bg-white border-[1px] border-[#39B75D]' : 'md:bg-[#39B75D]'} hover:scale-105`}>
          {icon && <span className='text-[1.4vw] md:text-[1.6vw] rounded-full flex items-center justify-center text-[#39B75D] mt-[0.1rem]'>{icon}</span>}
          <button className={`${theme === 'light' ? 'text-[#39B75D]' : 'text-white'} w-full h-full font-semibold text-[3.5vw] sm:text-[3vw] md:text-[1.5vw] lg:text-[1.3vw] flex items-center justify-center`}> {/* Added flex properties */}
              {name}
          </button>
      </div>
    </>
  );
};

export default Button;