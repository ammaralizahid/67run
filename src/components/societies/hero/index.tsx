"use client";

import Image from "next/image";

export default function ImageTextSection() {
  return (
    <>
      {/* ===== Hero Section ===== */}
      <section className="w-full bg-white">
        <div className="relative max-w-[1366px] h-[345px] mx-auto overflow-hidden">
          {/* Background Image */}
          <Image
            src="/societies/Societies.svg"
            alt="Für Veranstalter"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h2 className="font-poppins font-bold text-white capitalize tracking-[0.02em] leading-[39px] text-[32px] sm:text-[40px] md:text-[51px]">
              Vereine
            </h2>
            <p className="mt-2 font-poppins font-normal text-white capitalize tracking-[0.02em] leading-[39px] text-[14px] sm:text-[16px] md:text-[19px]">
              Home-Vereine
            </p>
          </div>
        </div>
      </section>

     
    </>
  );
}
