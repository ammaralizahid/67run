"use client";

import Image from "next/image";
import Button from "@/components/layout/button";

export default function ContactDetail() {
  return (
    <>
      {/* Contact cards */}
      <section className="w-full">
        <div className="mx-auto w-full max-w-[1366px] px-6 sm:px-6 lg:px-6">
          <div className="-mt-10 md:-mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 relative z-10 max-w-[1200px] mx-auto justify-items-center">
            <div className="w-full md:w-[367px] h-auto md:h-[204px] rounded-[15px] bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.15)] p-6 flex flex-col items-center text-center opacity-100">
              <div className="w-[33px] h-[33px] flex items-center justify-center text-[#435CBC]">
                <Image
                  src="/contact-us/Phone.svg"
                  alt=""
                  aria-hidden="true"
                  width={33}
                  height={33}
                  className="w-[33px] h-[33px] opacity-100"
                />
              </div>
              <h3 className="mt-3 font-['DM_Sans'] font-bold text-[24px] leading-[100%] text-black">
                Telefon
              </h3>
              <p className="mt-2 w-[260px] h-[48px] font-['DM_Sans'] text-[16px] leading-[24px] text-black text-center">
                Toll-Free: +1 647 374 3832
                <br />
                Fax: +1 647 374 3866
              </p>
            </div>

            <div className="w-full md:w-[367px] h-auto md:h-[204px] rounded-[15px] bg-[#435CBC] shadow-[0px_4px_20px_rgba(0,0,0,0.15)] p-6 flex flex-col items-center text-center text-white opacity-100">
              <div className="w-[39px] h-[30px] flex items-center justify-center">
                <Image
                  src="/contact-us/Email.svg"
                  alt=""
                  aria-hidden="true"
                  width={39}
                  height={30}
                  className="w-[39px] h-[30px] opacity-100"
                />
              </div>
              <h3 className="mt-3 font-['DM_Sans'] font-bold text-[24px] leading-[100%]">
                Email
              </h3>
              <p className="mt-2 w-[260px] h-[48px] font-['DM_Sans'] text-[16px] leading-[24px] text-center">
                info@therunningevent.com
                <br />
                support@therunningevent.com
              </p>
            </div>

            <div className="w-full md:w-[367px] h-auto md:h-[204px] rounded-[15px] bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.15)] p-6 flex flex-col items-center text-center opacity-100">
              <div className="w-[28px] h-[33px] flex items-center justify-center text-[#435CBC]">
                <Image
                  src="/contact-us/Location.svg"
                  alt=""
                  aria-hidden="true"
                  width={28}
                  height={33}
                  className="w-[28px] h-[33px] opacity-100"
                />
              </div>
              <h3 className="mt-3 font-['DM_Sans'] font-bold text-[24px] leading-[100%] text-black">
                Adresse
              </h3>
              <p className="mt-2 w-[260px] h-[48px] font-['DM_Sans'] text-[16px] leading-[24px] text-center text-black">
                Jl. Dr. Ir Soekarno Kediri,
                <br />
                Tabanan, Bali
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="w-full py-12 sm:py-14 md:py-16">
        <div className="mx-auto w-full max-w-[1366px] px-6 sm:px-6 lg:px-6">
          <h2 className="text-center font-poppins font-bold text-[26px] sm:text-[30px] md:text-[34px] text-[#262626]">
            Kontaktiere Uns
          </h2>

          <form className="mt-8 mx-auto w-full max-w-[900px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-poppins font-normal text-[18px] leading-[100%] text-[#4B4B4B] mb-2">
                  Vorname
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full max-w-[449px] h-[60px] rounded-[12px] bg-[#F6F6F6] px-4 font-poppins text-[16px] text-[#333] outline-none focus:ring-2 focus:ring-[#435CBC]/30 opacity-100 placeholder:font-medium placeholder:text-[16px] placeholder:leading-[100%] placeholder:text-[#A0A0A0]"
                />
              </div>
              <div>
                <label className="block font-poppins font-normal text-[18px] leading-[100%] text-[#4B4B4B] mb-2">
                  Nachname
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full max-w-[449px] h-[60px] rounded-[12px] bg-[#F6F6F6] px-4 font-poppins text-[16px] text-[#333] outline-none focus:ring-2 focus:ring-[#435CBC]/30 opacity-100 placeholder:font-medium placeholder:text-[16px] placeholder:leading-[100%] placeholder:text-[#A0A0A0]"
                />
              </div>
              <div>
                <label className="block font-poppins font-normal text-[18px] leading-[100%] text-[#4B4B4B] mb-2">
                  Telefon Nummer
                </label>
                <input
                  type="tel"
                  placeholder="+1 647 374 3832"
                  className="w-full max-w-[449px] h-[60px] rounded-[12px] bg-[#F6F6F6] px-4 font-poppins text-[16px] text-[#333] outline-none focus:ring-2 focus:ring-[#435CBC]/30 opacity-100 placeholder:font-medium placeholder:text-[16px] placeholder:leading-[100%] placeholder:text-[#A0A0A0]"
                />
              </div>
              <div>
                <label className="block font-poppins font-normal text-[18px] leading-[100%] text-[#4B4B4B] mb-2">
                  E-Mail-Adresse
                </label>
                <input
                  type="email"
                  placeholder="johndoe384@gmail.com"
                  className="w-full max-w-[449px] h-[60px] rounded-[12px] bg-[#F6F6F6] px-4 font-poppins text-[16px] text-[#333] outline-none focus:ring-2 focus:ring-[#435CBC]/30 opacity-100 placeholder:font-medium placeholder:text-[16px] placeholder:leading-[100%] placeholder:text-[#A0A0A0]"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block font-poppins font-normal text-[18px] leading-[100%] text-[#4B4B4B] mb-2">
                Nachricht
              </label>
              <textarea
                placeholder="Geben Sie hier eine Nachricht ein..."
                rows={5}
                className="w-full max-w-[918px] h-[145px] rounded-[12px] bg-[#F6F6F6] px-4 py-3 font-poppins text-[16px] text-[#333] outline-none focus:ring-2 focus:ring-[#435CBC]/30 opacity-100 placeholder:font-medium placeholder:text-[16px] placeholder:leading-[100%] placeholder:text-[#A0A0A0] placeholder:opacity-100"
              />
            </div>

            <div className="mt-5">
              <Button
                type="submit"
                className="w-[169px] h-[50px] rounded-[5px] bg-[#435CBC] text-white font-dmSans text-[14px] font-medium opacity-100"
              >
                Einreichen
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
