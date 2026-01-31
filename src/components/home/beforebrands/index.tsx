'use client'

import Button from "@/components/layout/button"
import Image from "next/image"

export default function DiscoverSection() {
  return (
    <section className="relative w-full bg-[#435CBC] h-[501px] overflow-visible">
      <div className="max-w-[1366px] h-full mx-auto flex items-center justify-between px-4 relative z-10">

        {/* Left Content */}
        <div className="ml-[50px] max-w-[619px]">
          <h2 className="font-poppins font-semibold text-[41px] leading-[42px] text-white capitalize">
            Entdecken Sie Die Freude Am Laufen – Tritt Heute Bel!
          </h2>

          <p className="mt-4 font-poppins font-normal text-[17px] leading-[25px] text-white capitalize">
            Aliquam lorem ante dapibus in viverra quis feugiat a tellus.
            Phasellus viverra metus varius laoreet.
          </p>

          <div className="mt-6">
            <Button
              variant="secondary"
              className="w-[171px] h-[48px] rounded-[5px] text-white font-poppins font-medium bg-[#FC7BA2]"
            >
              Jetzt Starten
            </Button>
          </div>
        </div>

        {/* Right Image Overflow */}
        <div className="relative w-[578px] h-auto -mr-[50px]">
          <Image
            src="/brands/Runner.svg"
            alt="Runners"
            width={578}
            height={610} // actual image height
            className="object-contain"
          />
        </div>

      </div>
    </section>
  )
}
