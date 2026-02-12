'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/layout/button';

interface HeroSectionProps {
  slides: string[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isIntroVisible, setIsIntroVisible] = useState(false);

  useEffect(() => {
    if (!slides.length) return;
    const intervalId = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => window.clearInterval(intervalId);
  }, [slides.length]);

  useEffect(() => {
    const rafId = window.requestAnimationFrame(() => setIsIntroVisible(true));
    return () => window.cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="relative w-full mx-auto">
      {/* Slider */}
      <div className="relative w-full aspect-[1366/697] overflow-hidden">
        {/* Images */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
            />
          </div>
        ))}

        {/* Text + Button */}
        <div
          className={`absolute flex flex-col gap-4 sm:gap-5 md:gap-6 left-[16px] sm:left-[32px] md:left-[52px] bottom-[24px] sm:bottom-[40px] md:bottom-[55px] max-w-[90%] md:max-w-[507px] transition-all duration-700 ease-out ${
            isIntroVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <h2 className="text-white font-poppins font-bold text-[20px] sm:text-[24px] md:text-[31px] leading-[28px] sm:leading-[32px] md:leading-[39px] capitalize">
            Entdecken Sie den <br />
            verborgenen Läufer in Ihnen
          </h2>

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

export default HeroSection;
