'use client'

import Image from "next/image"

interface HeroProps {
  backgroundImage: string
  title: string
  subtitle: string
}

export default function Hero({ backgroundImage, title, subtitle }: HeroProps) {
  return (
    <section className="w-full max-h-[345px] relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        {/* Optional overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Centered Content */}
      <div className="relative flex flex-col items-center justify-center h-[345px] text-center px-5">
        <h1 className="text-3xl lg:text-[51px] font-bold text-white">{title}</h1>
        <p className="text-lg lg:text-[19px] font-normal text-white mt-2">{subtitle}</p>
      </div>
    </section>
  )
}
