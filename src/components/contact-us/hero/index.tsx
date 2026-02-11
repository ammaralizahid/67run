import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="w-full">
      <div className="relative w-full h-[320px] sm:h-[360px] md:h-[380px]">
        <Image
          src="/contact-us/Hero.svg"
          alt="Kontaktiere Uns"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-poppins font-bold text-white text-[30px] sm:text-[38px] md:text-[44px] leading-[1.1]">
            Kontaktiere Uns
          </h1>
          <p className="mt-2 font-poppins text-white text-[13px] sm:text-[15px] md:text-[16px]">
            Home - Kontaktiere Uns
          </p>
        </div>
      </div>
    </section>
  );
}
