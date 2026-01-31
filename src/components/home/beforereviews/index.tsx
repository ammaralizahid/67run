'use client'

import Image from 'next/image'
import Button from '@/components/layout/button'

export default function HeroSection() {
  return (
    <section className="relative w-full h-[567px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/brands/running.svg" // replace with your image path
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Main Heading */}
      <div className="absolute top-[159px] left-[49px] w-[566px] h-[90px] flex items-center">
        <h1 className="font-poppins font-semibold text-[41px] leading-[45px] text-white capitalize tracking-[-0.02em]">
          Bleiben Sie hydriert und laufen Sie jeden Tag
        </h1>
      </div>

      {/* Subheading / Paragraph */}
      <div className="absolute top-[263px] left-[49px] w-[566px] h-[103px]">
        <p className="font-dmSans font-normal text-[17px] leading-[25px] text-white capitalize tracking-[0]">
          Wenn du ein Laufevent veranstalten möchtest, sind wir hier, um dich bei jedem Schritt des Prozesses zu unterstützen. Bei Runnersmeet verstehen wir die Bedeutung von Laufveranstaltungen für die Laufgemeinschaft und sind bereit,
        </p>
      </div>

      {/* Button */}
      <div className="absolute top-[392px] left-[51px]">
        <Button variant="primary" className="w-[171px] h-[48px] text-[#435CBC] rounded-[5px] font-semibold">
          Mehr Sehen
        </Button>
      </div>

      {/* First Right-side Transparent Box */}
      <div className="absolute top-[128px] left-[773px] w-[537px] h-[146px] rounded-[10px] border border-dashed border-white/50 bg-[#D9D9D945] p-4 flex flex-col justify-center mb-4">
        {/* Overridden Heading */}
        <h2 className="font-poppins font-bold text-[20px] leading-[45px] text-white capitalize mb-2">
          Eventregistrierung
        </h2>
        {/* Overridden Description */}
        <p className="font-dmSans font-normal text-[15px] leading-[19px] text-white capitalize w-[516px] h-[46px]">
          Du kannst dein Laufevent in unserem Kalender eintragen, damit es von der Laufgemeinschaft gesehen und gefunden werden kann.
        </p>
      </div>

      {/* Second Right-side Transparent Box */}
      <div className="absolute top-[290px] left-[773px] w-[537px] h-[146px] rounded-[10px] border border-dashed border-white/50 bg-[#D9D9D945] p-4 flex flex-col justify-center">
        {/* Overridden Heading */}
        <h2 className="font-poppins font-bold text-[20px] leading-[45px] text-white capitalize mb-2">
          Planung & Vorbereitung
        </h2>
        {/* Overridden Description */}
        <p className="font-dmSans font-normal text-[15px] leading-[19px] text-white capitalize w-[516px] h-[46px]">
          Wir bieten Unterstützung bei der Planung und Vorbereitung deines Laufevents, einschließlich Streckenplanung, Zeitplanung und Sicherheitsmaßnahmen.
        </p>
      </div>
    </section>
  )
}
