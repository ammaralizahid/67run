"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/layout/button";

interface CardData {
  id: number;
  imageUrl: string;
  title1: string;
  partner: string;
}

interface DynamicCardGridProps {
  cards: CardData[];
  title: string;
}

const DynamicCardGrid: React.FC<DynamicCardGridProps> = ({ cards, title }) => {
  return (
    <>
      <h2 className="font-semibold text-[24px] lg:text-[43px] leading-[42px] font-poppins text-center mb-6">
        {title}
      </h2>

      <div className="max-w-[1366px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col md:flex-row w-full h-auto lg:h-[174px] shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            {/* Part 1: Image */}
            <div className="relative w-full md:w-1/3 h-[174px] md:h-full flex-shrink-0">
              <Image
                src={card.imageUrl}
                alt={card.title1}
                fill
                className="object-cover"
              />
            </div>

            {/* Part 2: Middle content */}
            <div className="flex flex-col justify-start items-center md:items-start px-4 py-2 bg-[#435CBC] w-full md:w-1/3 h-auto md:h-full text-center md:text-left">
              <p className="flex flex-col justify-center font-poppins font-bold text-[14px] leading-[16px] text-[#FC7BA2] capitalize">
                <span>Denpasar Marathon</span>
                <span>2023</span>
              </p>

              <div className="flex items-center justify-center md:justify-start space-x-2 mt-2">
                <Image
                  src="/dynamicticketcard/Calendar.svg"
                  alt="calendar"
                  width={12}
                  height={13}
                />
                <p className="font-poppins font-normal text-[10px] leading-[15px] capitalize text-white">
                  November 22, 2023
                </p>
              </div>

              <div className="flex items-center justify-center md:justify-start space-x-2 mt-2">
                <Image
                  src="/dynamicticketcard/Person.svg"
                  alt="person"
                  width={12}
                  height={13}
                />
                <p className="font-poppins font-normal text-[10px] leading-[15px] capitalize text-white">
                  10 Km Run ( 10 KM )
                </p>
              </div>

              <div className="flex items-center justify-center md:justify-start space-x-2 mt-2">
                <Image
                  src="/dynamicticketcard/Clock.svg"
                  alt="clock"
                  width={13}
                  height={14}
                />
                <p className="font-poppins font-normal text-[10px] leading-[15px] capitalize text-white">
                  Start 06:00 AM - Until Finish
                </p>
              </div>

              <div className="flex items-center justify-center md:justify-start space-x-2 mt-2">
                <Image
                  src="/dynamicticketcard/Location.svg"
                  alt="location"
                  width={16}
                  height={17}
                />
                <p className="font-poppins font-normal text-[10px] leading-[15px] capitalize text-white">
                  Gor Ngurah Rai, Denpasar - Bali
                </p>
              </div>
            </div>

            {/* Part 3: Ticket Section */}
            <div className="w-full md:w-1/3 h-auto md:h-full bg-black relative flex flex-col justify-start items-center md:items-start p-3 text-center md:text-left">
              <p className="font-poppins font-semibold text-[30px] leading-[42px] capitalize text-white">
                Ticket
              </p>

              <p className="font-poppins font-semibold text-[11px] leading-[14px] capitalize text-white">
                Starting From :
              </p>

              <div className="flex items-center justify-center md:justify-start">
                <p className="font-poppins font-semibold text-[32px] leading-[42px] capitalize text-[#FC7BA2]">
                  €10
                </p>
                <p className="font-poppins font-medium text-[12px] leading-[42px] capitalize text-white ml-1">
                  / Ticket
                </p>
              </div>

              <Button
                variant="primary"
                className="w-[81.31px] h-[24.83px] text-[8px] font-dmsans font-medium leading-[100%] text-center mt-2"
              >
                Mehr Sehen
              </Button>
            </div>
          </div>
        ))}
      </div>
            {/* Button below the cards */}
            <div className="flex justify-center mt-8">
        <Button
          variant="primary"
          className="px-6 py-3 text-sm font-medium"
        >
          Weitere Veranstaltungen Anzeigen
        </Button>
      </div>
    </>
  );
};

export default DynamicCardGrid;
