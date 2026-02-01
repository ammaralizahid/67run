"use client";

import Image from "next/image";
import Button from "@/components/layout/button";
import { cn } from "@/lib/utils"; // optional if you want to extend button classes

interface DiscoverSectionProps {
  backgroundImageSrc?: string;
  rightImageSrc?: string;
  rightImageAlt?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonVariant?: "primary" | "secondary";
  buttonClass?: string;
  className?: string; // <-- new prop for main div
}

export default function DiscoverSection({
  backgroundImageSrc,
  rightImageSrc,
  rightImageAlt = "Right Image",
  heading,
  description,
  buttonText,
  buttonVariant = "secondary",
  buttonClass,
  className,
}: DiscoverSectionProps) {
  return (
    <section
      className={cn(
        "relative w-full bg-[#273067] overflow-visible py-8 md:py-0 h-auto lg:h-[501px]",
        className
      )}
    >
      {/* Background Image */}
      {backgroundImageSrc && (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={backgroundImageSrc}
            alt="Background Image"
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="max-w-[1366px] h-full mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-4 relative z-10">
        {/* Right Image */}
        {rightImageSrc && (
          <div className="order-1 md:order-2 w-full md:w-[578px] h-auto flex justify-center md:justify-end mb-6 md:mb-0">
            <Image
              src={rightImageSrc}
              alt={rightImageAlt}
              width={578}
              height={610}
              className="object-contain"
            />
          </div>
        )}

        {/* Left Content */}
        {(heading || description || buttonText) && (
          <div className="order-2 md:order-1 w-full md:w-[619px] text-center md:text-left">
            {heading && (
              <h2 className="font-poppins font-semibold text-[41px] leading-[42px] text-white capitalize">
                {heading}
              </h2>
            )}

{description && (
  <p className="mt-4 font-poppins font-normal text-[17px] leading-[25px] text-white whitespace-pre-line">
    {description}
  </p>
)}


            {buttonText && (
              <div className="mt-6 flex justify-center md:justify-start">
                <Button
                  variant={buttonVariant}
                  className={cn(
                    "w-[171px] h-[48px] rounded-[5px] text-white font-poppins font-medium",
                    buttonClass
                  )}
                >
                  {buttonText}
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
