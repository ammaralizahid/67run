"use client";

import Button from "@/components/layout/button";

export default function ContactForm() {
  return (
    <section className="w-full py-12 sm:py-14 md:py-16">
      <div className="mx-auto w-full max-w-[1366px] px-6 sm:px-6 lg:px-6">
        <h2 className="text-center font-poppins font-bold text-[26px] sm:text-[30px] md:text-[34px] text-[#262626]">
          Kontaktiere Uns
        </h2>

        <form className="mt-8 mx-auto w-full max-w-[900px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div>
              <label className="block font-poppins text-[18px] text-[#4B4B4B] mb-2">
                Vorname
              </label>
              <input
                type="text"
                placeholder="John"
                className="w-full h-[60px] rounded-[12px] bg-[#F6F6F6] px-4 font-poppins text-[16px] text-[#333] outline-none focus:ring-2 focus:ring-[#435CBC]/30 placeholder:font-medium placeholder:text-[16px] placeholder:text-[#A0A0A0]"
              />
            </div>

            <div>
              <label className="block font-poppins text-[18px] text-[#4B4B4B] mb-2">
                Nachname
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full h-[60px] rounded-[12px] bg-[#F6F6F6] px-4 font-poppins text-[16px] text-[#333] outline-none focus:ring-2 focus:ring-[#435CBC]/30 placeholder:font-medium placeholder:text-[16px] placeholder:text-[#A0A0A0]"
              />
            </div>

            <div>
              <label className="block font-poppins text-[18px] text-[#4B4B4B] mb-2">
                Telefon Nummer
              </label>
              <input
                type="tel"
                placeholder="+1 647 374 3832"
                className="w-full h-[60px] rounded-[12px] bg-[#F6F6F6] px-4 font-poppins text-[16px] text-[#333] outline-none focus:ring-2 focus:ring-[#435CBC]/30 placeholder:font-medium placeholder:text-[16px] placeholder:text-[#A0A0A0]"
              />
            </div>

            <div>
              <label className="block font-poppins text-[18px] text-[#4B4B4B] mb-2">
                E-Mail-Adresse
              </label>
              <input
                type="email"
                placeholder="johndoe384@gmail.com"
                className="w-full h-[60px] rounded-[12px] bg-[#F6F6F6] px-4 font-poppins text-[16px] text-[#333] outline-none focus:ring-2 focus:ring-[#435CBC]/30 placeholder:font-medium placeholder:text-[16px] placeholder:text-[#A0A0A0]"
              />
            </div>

          </div>

          <div className="mt-4">
            <label className="block font-poppins text-[18px] text-[#4B4B4B] mb-2">
              Nachricht
            </label>
            <textarea
              placeholder="Geben Sie hier eine Nachricht ein..."
              rows={5}
              className="w-full rounded-[12px] bg-[#F6F6F6] px-4 py-3 font-poppins text-[16px] text-[#333] outline-none focus:ring-2 focus:ring-[#435CBC]/30 placeholder:font-medium placeholder:text-[16px] placeholder:text-[#A0A0A0]"
            />
          </div>

          <div className="mt-5">
            <Button
              type="submit"
              className="w-full sm:w-[169px] h-[50px] rounded-[5px] bg-[#435CBC] text-white font-dmSans text-[14px] font-medium"
            >
              Einreichen
            </Button>
          </div>

        </form>
      </div>
    </section>
  );
}
