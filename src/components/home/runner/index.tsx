'use client'

import Image from "next/image"
import Button from "@/components/layout/button"

interface ImageContentSectionProps {
  imageSrc: string
  imageAlt?: string
  title: string
  heading: string
  description: string
  buttonText: string
}

export default function ImageContentSection({
  imageSrc,
  imageAlt = "section image",
  title,
  heading,
  description,
  buttonText,
}: ImageContentSectionProps) {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1366px] mx-auto px-5">
        {/* Parent flex container takes full height of its tallest child */}
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-20 ml-5">
          
          {/* Column 1 – Image with background */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[600px] aspect-[561/641]">
              {/* Background box */}
              <div className="absolute inset-0 -translate-x-6 translate-y-6 bg-[#435CBC] rounded-[10px]" />

              {/* Image */}
              <div className="absolute inset-0 rounded-[10px] overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Column 2 – Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start ">
            <p className="font-['DM_Sans'] text-[20px] leading-[100%] capitalize text-black mb-3 mt-5">
              {title}
            </p>

            <h2 className="font-['Poppins'] text-[43px] leading-[42px] font-semibold capitalize text-[#262626] mb-4">
              {heading}
            </h2>

            <p className="font-['DM_Sans'] text-[17px] leading-[25px] capitalize text-[#424242] mb-8">
              {description}
            </p>

            <Button
              variant="primary"
              className="w-[171px] h-[48px] rounded-[5px] text-white font-['DM_Sans'] text-[16px] font-medium"
            >
              {buttonText}
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
