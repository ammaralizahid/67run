'use client'

import Image from "next/image"
import Button from '@/components/layout/button'

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
    <section className="w-full  bg-white ">
      <div className="max-w-[1366px] mx-auto px-5">
        <div className="flex flex-col gap-20 lg:flex-row lg:items-start">

          {/* Column 1 – Image with background */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[620px] h-[641px]">

              {/* Background box */}
              <div className="absolute top-6 left-0 w-[538px] h-[641px] bg-[#435CBC] rounded-[10px]" />

              {/* Image */}
              <div className="absolute top-0 left-6 w-[561px] h-[641px] rounded-[10px] overflow-hidden">
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
          <div className="w-full lg:w-1/2 max-w-[550px] flex flex-col items-start ">

            {/* Title */}
            <p className="font-['DM_Sans'] text-[20px] leading-[100%] capitalize text-black mb-3 mt-5">
              {title}
            </p>

            {/* Heading */}
            <h2 className="font-['Poppins'] text-[43px] leading-[42px] font-semibold capitalize text-[#262626] mb-4">
              {heading}
            </h2>

            {/* Description */}
            <p className="font-['DM_Sans'] text-[17px] leading-[25px] capitalize text-[#424242] mb-8">
              {description}
            </p>

            {/* Button */}
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
