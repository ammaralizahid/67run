"use client";

import Image from "next/image";
import Button from "@/components/layout/button";

export default function HeroSection() {
  return (
<section className="relative w-full h-auto lg:h-[501px] py-24">
  {/* Background Image */}
  <div className="absolute inset-0 -z-10 w-full h-full">
    <Image
      src="/brands/running.svg"
      alt="Background"
      fill
      className="object-cover"
      style={{ objectPosition: "center" }}
      priority
    />
  </div>

  {/* Content Wrapper */}
  <div className="relative max-w-[1366px] mx-auto px-4 md:px-6 w-full flex flex-col md:flex-row items-center justify-center gap-12 lg:h-full">
    {/* Left Column */}
    <div className="flex-1 flex flex-col gap-6">
      <h1 className="font-poppins font-semibold text-[41px] md:text-[48px] leading-[1.1] text-white capitalize tracking-[-0.02em] max-w-xl">
        Bleiben Sie hydriert und laufen Sie jeden Tag
      </h1>

      <p className="font-dmSans font-normal text-[17px] md:text-[18px] leading-[25px] text-white capitalize max-w-xl">
        Wenn du ein Laufevent veranstalten möchtest, sind wir hier, um dich
        bei jedem Schritt des Prozesses zu unterstützen. Bei Runnersmeet
        verstehen wir die Bedeutung von Laufveranstaltungen für die
        Laufgemeinschaft und sind bereit,
      </p>

      <Button
        variant="primary"
        className="w-[171px] h-[48px] text-[#435CBC] rounded-[5px] font-semibold"
      >
        Mehr Sehen
      </Button>
    </div>

    {/* Right Column */}
    <div className="flex-1 flex flex-col gap-6">
      <div className="w-full rounded-[10px] border border-dashed border-white/50 bg-[#D9D9D945] p-4 flex flex-col justify-center">
        <h2 className="font-poppins font-bold text-[20px] leading-[1.5] text-white capitalize mb-2">
          Eventregistrierung
        </h2>
        <p className="font-dmSans font-normal text-[15px] leading-[19px] text-white capitalize">
          Du kannst dein Laufevent in unserem Kalender eintragen, damit es
          von der Laufgemeinschaft gesehen und gefunden werden kann.
        </p>
      </div>

      <div className="w-full rounded-[10px] border border-dashed border-white/50 bg-[#D9D9D945] p-4 flex flex-col justify-center">
        <h2 className="font-poppins font-bold text-[20px] leading-[1.5] text-white capitalize mb-2">
          Planung & Vorbereitung
        </h2>
        <p className="font-dmSans font-normal text-[15px] leading-[19px] text-white capitalize">
          Wir bieten Unterstützung bei der Planung und Vorbereitung deines
          Laufevents, einschließlich Streckenplanung, Zeitplanung und
          Sicherheitsmaßnahmen.
        </p>
      </div>
    </div>
  </div>
</section>

  );
}
