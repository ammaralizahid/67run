'use client'

import Image from "next/image"

interface HeroProps {
  backgroundImage: string
  title: string
  subtitle: string
}

export default function Hero({ backgroundImage, title, subtitle }: HeroProps) {
  return (
    <section className="w-full bg-white">
      <div className="relative w-full h-[345px] mx-auto overflow-hidden">
        {/* Background Image */}
        <Image
          src={backgroundImage}
          alt="Für Veranstalter"
          fill
          className="object-cover"
          priority
        />

        {/* Center Content */}
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="relative px-14 py-10">
            {/* Ultra-smooth elliptical overlay (no visible edges) */}
            <div className="pointer-events-none absolute inset-x-[-35%] inset-y-[-55%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.35)_35%,rgba(0,0,0,0.2)_55%,rgba(0,0,0,0.1)_70%,transparent_100%)] blur-[1.5px]" />

            {/* Text */}
            <div className="relative z-10">
              <h2 className="font-poppins font-bold text-white capitalize tracking-[0.02em] leading-[39px] text-[32px] sm:text-[40px] md:text-[51px] drop-shadow-[0_4px_14px_rgba(0,0,0,0.75)]">
                {title}
              </h2>
              <p className="mt-2 font-poppins font-normal text-white capitalize tracking-[0.02em] leading-[39px] text-[14px] sm:text-[16px] md:text-[19px] drop-shadow-[0_4px_14px_rgba(0,0,0,0.75)]">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
