"use client";

import Image from "next/image";
import { useState } from "react";

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

type FaqDetailSectionProps = {
  faq: FaqItem[];
};

export type { FaqItem };

export default function Detail({ faq }: FaqDetailSectionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full bg-[#F8F8F8] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-[1366px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-poppins font-bold text-[30px] sm:text-[36px] lg:text-[41px] leading-[1.1] tracking-[0.02em] text-[#373737] capitalize">
          Allgemeine FAQs
        </h2>
        <div className="mt-8 sm:mt-10 mx-auto w-full max-w-[1117px] flex flex-col gap-3 sm:gap-4">
          {faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.id} className="flex w-full flex-col gap-3 sm:gap-4">
                <div className="w-full rounded-[10px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)]">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center gap-3 px-4 sm:px-6 text-left py-4 sm:h-[70px]"
                    aria-expanded={isOpen}
                  >
                    <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#E9F0FF]">
                      <Image
                        src="/faq/Arrow.svg"
                        alt=""
                        aria-hidden="true"
                        width={17}
                        height={18}
                        className={`h-[18px] w-[17px] opacity-100 transition-transform duration-200 ${
                          isOpen ? "rotate-0" : "-rotate-90"
                        }`}
                      />
                    </span>
                    <span className="flex-1 max-w-full sm:max-w-[702px] font-poppins text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.3] sm:leading-[1.4] lg:leading-[18px] font-medium text-[#0B0B0B] capitalize">
                      {item.question}
                    </span>
                  </button>
                </div>
                {isOpen && (
                  <div className="w-full rounded-[10px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)]">
                    <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-4 sm:pt-6 min-h-0 sm:min-h-[220px] lg:min-h-[294px]">
                      <div className="max-w-full sm:max-w-[887px]">
                        {item.answer.split("\n\n").map((paragraph, paragraphIndex) => (
                          <p
                            key={`${item.id}-p-${paragraphIndex}`}
                            className="mt-3 first:mt-0 font-poppins text-[14px] sm:text-[16px] lg:text-[17px] leading-[24px] sm:leading-[28px] lg:leading-[31px] font-normal text-[#585858] capitalize"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
