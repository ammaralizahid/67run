"use client";

import Image from "next/image";
import Link from "next/link";

import Button from "@/components/layout/button";

type SocietiesBrandCard = {
  id: number;
  title: string;
  description: string;
  linkLabel: string;
  href: string;
  image: string;
};

type SocietiesBrandsProps = {
  cards: SocietiesBrandCard[];
};

export default function SocietiesBrands({ cards }: SocietiesBrandsProps) {
  return (
    <section className="w-full mt-[40px] opacity-100 overflow-x-hidden">
      <div className="relative w-full max-w-[1366px] mx-auto px-6 sm:px-6 lg:px-6">
        
        <div className=" w-full">
          <h2 className="mx-auto w-full max-w-[617px] font-poppins font-bold text-[32px] sm:text-[40px] lg:text-[43px] leading-[39px] text-[#373737] text-center capitalize">
          Ereignisprotokolle
          </h2>
        </div>
        <div className="mt-8 mb-8 w-full grid grid-cols-1 gap-6 sm:grid-cols-2 min-[900px]:grid-cols-3 xl:grid-cols-4 lg:gap-[20px] justify-items-center">
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-[280px] h-[499px] rounded-[15px] border border-[#DDDDDD] bg-white overflow-hidden flex flex-col mx-auto"
            >
              <Image
                src={card.image}
                alt={card.title}
                width={279}
                height={354}
                className="w-[279px] h-[354px] rounded-t-[15px] object-cover"
              />
              <div className="p-4 w-full flex flex-col gap-1">
                <h3 className="w-full max-w-[291px] h-[42px] font-poppins font-semibold text-[20px] leading-[42px] capitalize text-footerBg text-left">
                  {card.title}
                </h3>
                <p className="w-full max-w-[249px] h-[46px] font-poppins font-normal text-[13px] leading-[21px] capitalize text-[#3A3A3A] text-left">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="h-[26px] inline-flex items-center gap-2 whitespace-nowrap font-poppins font-semibold text-[14px] leading-[24px] capitalize text-button-bg text-left"
                >
                  <span className="underline">{card.linkLabel}</span>
                  <Image
                    src="/blog/Arrow.svg"
                    alt=""
                    aria-hidden="true"
                    width={18}
                    height={8}
                    className="shrink-0"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center mb-5">
          <Button className="w-[171px] h-[48px] rounded-[5px] opacity-100">
            Mehr anzeigen
          </Button>
        </div>
      </div>
    </section>
  );
}
