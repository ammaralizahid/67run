import Image from "next/image";

export default function ContactCards() {
  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-[1366px] px-4 sm:px-6 lg:px-6">
        <div className="-mt-10 md:-mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 relative z-10 max-w-[1200px] mx-auto">
          
          {/* Phone Card */}
          <div className="w-full rounded-[15px] bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.15)] p-6 flex flex-col items-center text-center">
            <div className="w-[33px] h-[33px] flex items-center justify-center text-[#435CBC]">
              <Image
                src="/contact-us/Phone.svg"
                alt=""
                aria-hidden="true"
                width={33}
                height={33}
                className="w-[33px] h-[33px]"
              />
            </div>
            <h3 className="mt-3 font-['DM_Sans'] font-bold text-[24px] leading-[100%] text-black">
              Telefon
            </h3>
            <p className="mt-2 w-full max-w-[260px] font-['DM_Sans'] text-[16px] leading-[24px] text-black">
              Toll-Free: +1 647 374 3832
              <br />
              Fax: +1 647 374 3866
            </p>
          </div>

          {/* Email Card */}
          <div className="w-full rounded-[15px] bg-[#435CBC] shadow-[0px_4px_20px_rgba(0,0,0,0.15)] p-6 flex flex-col items-center text-center text-white">
            <div className="w-[39px] h-[30px] flex items-center justify-center">
              <Image
                src="/contact-us/Email.svg"
                alt=""
                aria-hidden="true"
                width={39}
                height={30}
                className="w-[39px] h-[30px]"
              />
            </div>
            <h3 className="mt-3 font-['DM_Sans'] font-bold text-[24px] leading-[100%]">
              Email
            </h3>
            <p className="mt-2 w-full max-w-[260px] font-['DM_Sans'] text-[16px] leading-[24px]">
              info@therunningevent.com
              <br />
              support@therunningevent.com
            </p>
          </div>

          {/* Address Card (Centered on md) */}
          <div className="w-full md:col-span-2 lg:col-span-1 md:max-w-[367px] md:mx-auto rounded-[15px] bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.15)] p-6 flex flex-col items-center text-center">
            <div className="w-[28px] h-[33px] flex items-center justify-center text-[#435CBC]">
              <Image
                src="/contact-us/Location.svg"
                alt=""
                aria-hidden="true"
                width={28}
                height={33}
                className="w-[28px] h-[33px]"
              />
            </div>
            <h3 className="mt-3 font-['DM_Sans'] font-bold text-[24px] leading-[100%] text-black">
              Adresse
            </h3>
            <p className="mt-2 w-full max-w-[260px] font-['DM_Sans'] text-[16px] leading-[24px] text-black">
              Jl. Dr. Ir Soekarno Kediri,
              <br />
              Tabanan, Bali
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
