"use client";

import Image from "next/image";

import Button from "@/components/layout/button";

type SocietiesBrandCard = {
  id: number;
  title: string;
  image: string;
};

type SocietiesBrandsProps = {
  cards: SocietiesBrandCard[];
};

export default function SocietiesBrands({ cards }: SocietiesBrandsProps) {
  return (
    <section className="w-full mt-[40px] opacity-100 overflow-x-hidden">
      <div className="relative w-full max-w-[1366px] mx-auto px-6 sm:px-6 lg:px-6">
        <div className="mt-6 flex w-full flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <p className="w-full max-w-[586px] font-dmSans font-medium text-[20px] sm:text-[25px] leading-[100%] text-black text-left">
          Hier ist eine Übersicht über einige der Laufvereine, die auf
          Runnersmeet aktiv sind:
          </p>
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 lg:w-auto lg:flex-none lg:justify-end">
            <div className="w-full sm:flex-1 sm:max-w-[446px] lg:w-[446px] opacity-100">
            <label className="sr-only" htmlFor="societies-search">
              Suche
            </label>
            <input
              id="societies-search"
              type="search"
              placeholder="Name des Teams"
              className="w-full h-[48px] rounded-[5px] border border-[#DADADA] bg-white px-4 font-poppins font-light text-[17px] leading-[39px] text-[#494949] capitalize placeholder:text-[#494949] shadow-[0px_4px_4px_0px_#0000000D] focus:outline-none focus:ring-2 focus:ring-black/20"
            />
          </div>
            <Button className="w-full sm:w-[172.88px] h-[48px] rounded-[5px] p-0 flex items-center justify-center sm:flex-none">
              Suchen
            </Button>
          </div>
        </div>
        <div className="mt-10 w-full">
          <h2 className="mx-auto w-full max-w-[617px] font-poppins font-bold text-[32px] sm:text-[40px] lg:text-[43px] leading-[39px] text-[#373737] text-center capitalize">
          Teamübersicht Vereine
          </h2>
        </div>
        <div className="mt-8 mb-8 w-full grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-[20px]">
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-full h-[336px] rounded-[5px] border border-[#C3C3C3] bg-white p-10 flex flex-col items-center"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={208}
                height={202}
                className="w-[208px] h-[202px] object-contain"
              />
              <h3 className="mt-4 font-poppins font-medium text-[18px] leading-[24px] text-black text-center">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
