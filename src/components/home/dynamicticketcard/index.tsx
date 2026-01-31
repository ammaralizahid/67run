'use client' 
import React from 'react' 
import Button from '@/components/layout/button' 
interface CardData 
{ id: number 
    imageUrl: string 
    title1: string 
    partner: string } 
    interface DynamicCardGridProps { cards: CardData[] } 
    const DynamicCardGrid: React.FC<DynamicCardGridProps> = ({ cards }) => { 
        return ( 
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 justify-items-center"> 
        {cards.map((card) => (
             <div key={card.id} className="flex w-[602px] h-[174px] shadow-md overflow-hidden mx-auto hover:shadow-xl transition-shadow" > 
                {/* Part 1: Image */} 
                <div className="w-[250px] h-[174px] flex-shrink-0"> 
                    <img src={card.imageUrl} alt={card.title1} className="w-[250px] h-[174px] object-cover" /> 
                </div> 
                {/* Part 2: Middle content */} 
                <div className="w-[200px] h-[174px] bg-[#435CBC] flex flex-col justify-start items-start px-4 py-2"> 
                    {/* Row 1: Event name, left-aligned, 2 lines */} 
                    <p className="w-[174px] h-[42px] flex flex-col justify-center font-poppins font-bold text-[14px] leading-[16px] text-[#FC7BA2] capitalize text-left"> 
                        <span>Denpasar Marathon</span> 
                        <span>2023</span> 
                    </p> 
                    {/* Row 2: Icon + Date */} 
                    <div className="flex items-center space-x-2 mt-2"> 
                        <img src="/dynamicticketcard/Calendar.svg" alt="calendar" className="w-[11.41px] h-[12.41px] object-contain" /> 
                        <p className="w-[167px] font-poppins font-normal text-[10px] leading-[15px] capitalize text-white"> November 22, 2023 
                        </p> 
                    </div> 
                    <div className="flex items-center space-x-2 mt-2"> 
                        <img src="/dynamicticketcard/Person.svg" alt="person" className="w-[11.41px] h-[12.41px] object-contain" /> 
                        <p className="w-[167px] font-poppins font-normal text-[10px] leading-[15px] capitalize text-white"> 10 Km Run ( 10 KM ) </p> 
                    </div> 
                    <div className="flex items-center space-x-2 mt-2"> 
                        <img src="/dynamicticketcard/Clock.svg" alt="clock" className="w-[12.84px] h-[13.97px] object-contain" /> 
                        <p className="w-[167px] font-poppins font-normal text-[10px] leading-[15px] capitalize text-white"> Start 06:00 AM - Until Finish </p> 
                    </div> 
                    <div className="flex items-center space-x-2 mt-2"> 
                        <img src="/dynamicticketcard/Location.svg" alt="location" className="w-[16.22px] h-[16.62px] object-contain" /> 
                        <p className="w-[167px] font-poppins font-normal text-[10px] leading-[15px] capitalize text-white"> Gor Ngurah Rai, Denpasar - Bali </p> 
                    </div> 
                </div> 
                {/* Part 3: Ticket Section */} 
                <div className="w-[152px] h-[174px] bg-black relative"> 
                    {/* Row 1: Ticket */} 
                    <p className="absolute top-[10px] left-[15px] w-[123px] h-[21px] font-poppins font-semibold text-[30px] leading-[42px] capitalize text-white"> Ticket </p> 
                    {/* Row 2: Starting From : */} 
                    <p className="absolute top-[35px] left-[15px] w-[123px] h-[21px] font-poppins font-semibold text-[11px] leading-[42px] capitalize text-white"> Starting From : </p> {
                    /* Row 3: Price + / Ticket */} 
                    <div className="absolute top-[75px] left-[15px] flex items-center"> 
                        <p className="font-poppins font-semibold text-[32px] leading-[42px] capitalize text-[#FC7BA2]"> €10 </p> 
                        <p className="font-poppins font-medium text-[12px] leading-[42px] capitalize text-white ml-1"> / Ticket </p> 
                    </div> 
                    {/* Row 4: Mehr Sehen Button */} 
                    <div className="absolute top-[120px] left-[15px]"> 
                        <Button variant="primary" className="w-[81.31px] h-[24.83px] text-[8px] font-dmsans font-medium leading-[100%] text-center" > Mehr Sehen </Button> 
                    </div> 
                </div> 
            </div> ))} 
        </div> ) 
    } 
export default DynamicCardGrid