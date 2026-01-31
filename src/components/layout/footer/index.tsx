'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full min-h-[474px] bg-footerBg text-white font-poppins flex flex-col">

  {/* MAIN CONTENT */}
  <div className="flex justify-center items-center flex-grow">
    <div className="max-w-[1366px] w-full px-6 grid grid-cols-1 md:grid-cols-4 gap-y-6 gap-x-6">

      {/* LOGO */}
      <div className="flex flex-col items-center md:items-start">
        <Image
          src="/footer/Logo.svg"
          alt="Logo"
          width={181}
          height={216}
          className="w-[120px] sm:w-[150px] md:w-[181px] h-auto"
        />
      </div>

      {/* QUICK LINKS */}
      <div className="flex flex-col items-center md:items-start">
        <h3 className="font-bold text-footerHeading mb-4">Quick Links</h3>
        <ul className="space-y-1 text-center md:text-left">
          {['Startseite', 'Laufkalender', 'Über uns', 'Vereine', 'Für Veranstalter'].map((item) => (
            <li key={item}>
              <Link
                href="#"
                className="font-normal text-footerItem text-white hover:text-navLinkHover transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* LEGAL */}
      <div className="flex flex-col items-center md:items-start">
        <h3 className="font-bold text-footerHeading mb-4">Legal</h3>
        <ul className="space-y-1 text-center md:text-left">
          {['Hilfezentrum', 'Kontakt', 'FAQ', 'Datenschutzrichtlinie', 'Anmeldung'].map((item) => (
            <li key={item}>
              <Link
                href="#"
                className="font-normal text-footerItem text-white hover:text-navLinkHover transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* NEWSLETTER */}
      <div className="flex flex-col items-center md:items-start">
        <h3 className="font-bold text-footerHeading mb-4">Abonniere den Newsletter</h3>

        <div className="relative w-full max-w-newsletterW h-newsletterH">
          <input
            type="email"
            placeholder="Enter your email"
            className="
              w-full h-full rounded-newsletter bg-inputBg
              pl-5 pr-16 text-black font-dmSans text-newsletterInput
              placeholder:text-black outline-none
            "
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <Image
              src="/footer/Arrow.svg"
              alt="Arrow"
              width={45}
              height={20}
              className="w-[45px] h-auto"
            />
          </div>
        </div>

        {/* FOLLOW US */}
        <div className="flex items-center gap-4 mt-6 flex-wrap justify-center md:justify-start">
          <span className="font-dmSans font-medium text-[14px] leading-none text-white">
            Follow us:
          </span>
          <div className="flex items-center gap-footerIconGap">
            <Image src="/footer/Facebook.svg" alt="Facebook" width={11} height={21} className="w-[11px] h-auto" />
            <Image src="/footer/Twitter.svg" alt="Twitter" width={25} height={19} className="w-[25px] h-auto" />
            <Image src="/footer/Mask.svg" alt="Mask" width={44} height={25} className="w-[44px] h-auto" />
          </div>
        </div>
      </div>

    </div>
  </div>

  {/* BOTTOM BAR */}
  <div>
    <p className="py-4 text-center font-poppins font-normal text-footerBottom capitalize text-white">
      ©2023 Runnersmeet | Designed by Mindpath. All rights reserved | Terms & Conditions
    </p>
  </div>
</footer>

  )
}
