'use client';

import React from 'react';

interface TitleProps {
  text: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ text, className = '' }) => {
  return (
    <h2
      className={`
        font-poppins font-semibold text-titleColor capitalize text-center
        text-[36px] leading-[34px] tracking-[-0.5px]       /* mobile default */
        sm:text-[40px] sm:leading-[38px] sm:tracking-[-1px] /* tablet */
        lg:text-[44px] lg:leading-[42px] lg:tracking-[-2%]  /* desktop */
        ${className}
      `}
    >
      {text}
    </h2>
  );
};

export default Title;
