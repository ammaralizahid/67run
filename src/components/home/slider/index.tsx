'use client';

import { useState } from 'react';
import Button from '@/components/layout/button'

interface DotSliderProps {
  slides: string[];
}

const DotSlider: React.FC<DotSliderProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative w-full max-w-[1366px] mx-auto">
      {/* Slider */}
      <div className="relative w-full aspect-[1366/697] overflow-hidden">
        {/* Images */}
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {/* Text + Button */}
        <div className="absolute flex flex-col gap-4 sm:gap-5 md:gap-6 left-[16px] sm:left-[32px] md:left-[52px] bottom-[24px] sm:bottom-[40px] md:bottom-[55px] max-w-[90%] md:max-w-[507px]">
          <h2 className="text-white font-poppins font-bold text-[20px] sm:text-[24px] md:text-[31px] leading-[28px] sm:leading-[32px] md:leading-[39px] capitalize">
            Entdecken Sie den <br />
            verborgenen Läufer in Ihnen
          </h2>

          {/* Use your Button component here */}
          <Button
            variant="primary"
            className="w-[140px] sm:w-[155px] md:w-[171px] h-[42px] sm:h-[45px] md:h-[48px] text-[15px] sm:text-[16px] md:text-[18px] flex items-center justify-center"
          >
            Get Started
          </Button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-[24px] right-[16px] sm:right-[24px] md:right-[32px] flex gap-3 z-10">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-[15px] h-[15px] rounded-full cursor-pointer ${
                index === currentIndex ? 'bg-[#FC7BA2]' : 'bg-[#C1CEFF]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DotSlider;
