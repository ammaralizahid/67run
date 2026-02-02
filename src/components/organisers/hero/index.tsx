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
            src="/organisers/Organisers.svg"
            alt="Für Veranstalter"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h2 className="font-poppins font-bold text-white capitalize tracking-[0.02em] leading-[39px] text-[32px] sm:text-[40px] md:text-[51px]">
              Für Veranstalter
            </h2>
            <p className="mt-2 font-poppins font-normal text-white capitalize tracking-[0.02em] leading-[39px] text-[14px] sm:text-[16px] md:text-[19px]">
              Home – Für Veranstalter
            </p>
          </div>
        </div>
      </section>

      {/* ===== Text Section ===== */}
      <section className="w-full bg-white py-16">
        <div className="max-w-[1366px] mx-auto px-[50px]">
          {/* Title */}
          <h2 className="font-poppins font-bold capitalize leading-[39px] text-[24px] sm:text-[30px] md:text-[39px]">
            Aktuell nur D, CH, A
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-[1068px] font-poppins font-normal capitalize leading-[34px] text-[16px] sm:text-[17px] md:text-[18px]">
            Wenn du ein Laufevent veranstalten möchtest, sind wir hier, um dich
            bei jedem Schritt des Prozesses zu unterstützen. Bei Runnersmeet
            verstehen wir die Bedeutung von Laufveranstaltungen für die
            Laufgemeinschaft und sind bereit, unsere Ressourcen zur Verfügung zu
            stellen.
          </p>

          {/* Sub Heading */}
          <p className="mt-6 max-w-[1068px] font-poppins font-medium capitalize leading-[34px] text-[18px] sm:text-[19px] md:text-[21px]">
            Hier ist, wie wir dir bei der Organisation deines Laufevents helfen
            können:
          </p>

          {/* Icon + Right Content */}
          <div className="mt-6 flex items-center space-x-6">
            {/* Icon */}
            <div className="flex-shrink-0 w-24 h-24">
              <Image
                src="/organisers/1.svg"
                alt="Feature Icon"
                width={93}
                height={90}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Right Text with Inline Span */}
            <p className="font-poppins font-semibold capitalize text-[#3652BD] leading-7 text-[16px] sm:text-[17px] md:text-[18px] max-w-[1018px]">
              Eventregistrierung:{" "}
              <span className="font-normal text-[#2B2B2B] capitalize">
                Du kannst dein Laufevent in unserem Kalender eintragen, damit es
                von der Laufgemeinschaft gesehen und gefunden werden kann.
              </span>
            </p>
          </div>
          <div className="mt-2 flex items-center space-x-6">
            {/* Icon */}
            <div className="flex-shrink-0 w-24 h-24">
              <Image
                src="/organisers/2.svg"
                alt="Feature Icon"
                width={93}
                height={90}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Right Text with Inline Span */}
            <p className="font-poppins font-semibold capitalize text-[#3652BD] leading-7 text-[16px] sm:text-[17px] md:text-[18px] max-w-[1018px]">
              Planung und Vorbereitung:{" "}
              <span className="font-normal text-[#2B2B2B] capitalize">
                Wir bieten Unterstützung bei der Planung und Vorbereitung deines
                Laufevents, einschließlich Streckenplanung, Zeitplanung und
                Sicherheitsmaßnahmen.
              </span>
            </p>
          </div>

          <div className="mt-2 flex items-center space-x-6">
            {/* Icon */}
            <div className="flex-shrink-0 w-24 h-24">
              <Image
                src="/organisers/3.svg"
                alt="Feature Icon"
                width={93}
                height={90}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Right Text with Inline Span */}
            <p className="font-poppins font-semibold capitalize text-[#3652BD] leading-7 text-[16px] sm:text-[17px] md:text-[18px] max-w-[1018px]">
              Ergebnislisten und Statistiken:{" "}
              <span className="font-normal text-[#2B2B2B] capitalize">
                Wir helfen dir dabei, Ergebnislisten zu erstellen und
                Statistiken zu deinem Event zu verfolgen. Dies ermöglicht den
                Teilnehmern, ihre Leistungen zu überwachen und sich mit anderen
                Läufern zu vergleichen.
              </span>
            </p>
          </div>
          <div className="mt-2 flex items-center space-x-6">
            {/* Icon */}
            <div className="flex-shrink-0 w-24 h-24">
              <Image
                src="/organisers/4.svg"
                alt="Feature Icon"
                width={93}
                height={90}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Right Text with Inline Span */}
            <p className="font-poppins font-semibold capitalize text-[#3652BD] leading-7 text-[16px] sm:text-[17px] md:text-[18px] max-w-[1018px]">
              Sponsoring:{" "}
              <span className="font-normal text-[#2B2B2B] capitalize">
                Wenn du Unterstützung beim Sponsoring für dein Event benötigst,
                stehen wir dir zur Seite. Wir können dir dabei helfen, Sponsoren
                zu identifizieren und Partnerschaften zu entwickeln, um dein
                Event noch erfolgreicher zu machen
              </span>
            </p>
          </div>
          <div className="mt-2 flex items-center space-x-6">
            {/* Icon */}
            <div className="flex-shrink-0 w-24 h-24">
              <Image
                src="/organisers/5.svg"
                alt="Feature Icon"
                width={93}
                height={90}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Right Text with Inline Span */}
            <p className="font-poppins font-semibold capitalize text-[#3652BD] leading-7 text-[16px] sm:text-[17px] md:text-[18px] max-w-[1018px]">
              Werbung und Promotion:{" "}
              <span className="font-normal text-[#2B2B2B] capitalize">
                Wir unterstützen dich bei der Werbung für dein Event auf unserer
                Plattform und in den sozialen Medien, um sicherzustellen, dass
                es die maximale Aufmerksamkeit erhält.
              </span>
            </p>
          </div>
          <div className="mt-2 flex items-center space-x-6">
            {/* Icon */}
            <div className="flex-shrink-0 w-24 h-24">
              <Image
                src="/organisers/6.svg"
                alt="Feature Icon"
                width={93}
                height={90}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Right Text with Inline Span */}
            <p className="font-poppins font-semibold capitalize text-[#3652BD] leading-7 text-[16px] sm:text-[17px] md:text-[18px] max-w-[1018px]">
              Teilnehmerverwaltung:{" "}
              <span className="font-normal text-[#2B2B2B] capitalize">
                Wir bieten Tools zur einfachen Verwaltung von
                Teilnehmerregistrierungen und zur Kommunikation mit den
                Teilnehmern.
              </span>
            </p>
          </div>
          {/* Description */}
          <p className="mt-4 max-w-[1126px] font-poppins font-normal capitalize leading-[34px] text-[16px] sm:text-[17px] md:text-[18px]">
            Wenn du bereit bist, dein Laufevent zu planen und möchtest, dass
            Runnersmeet dich dabei unterstützt, kontaktiere uns einfach, und wir
            werden gerne mit dir zusammenarbeiten, um sicherzustellen, dass dein
            Event ein großer Erfolg wird. Laufen verbindet Menschen, und wir
            freuen uns darauf, dazu beizutragen, dass dein Event ein
            unvergessliches Erlebnis wird.
          </p>
        </div>
      </section>
    </>
  );
}
