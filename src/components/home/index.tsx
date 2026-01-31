"use client";
import Hero from "./hero";
import Title from "./title";
import DynamicCardGrid from "./dynamicticketcard";
import Brand from "./brands";
import BeforeBrands from "./beforebrands";
import Ratings from "./ratings";
export default function Home() {
  const slides = ["/slider/1.svg", "/slider/1.svg", "/slider/1.svg"];
  const cardData = [
    {
      id: 1,
      imageUrl: "/dynamicticketcard/1.svg",
      title1: "Event 1",
      partner: "Partner 1",
    },
    {
      id: 2,
      imageUrl: "/dynamicticketcard/2.svg",
      title1: "Event 2",
      partner: "Partner 2",
    },
    {
      id: 3,
      imageUrl: "/dynamicticketcard/3.svg",
      title1: "Event 3",
      partner: "Partner 3",
    },
    {
      id: 4,
      imageUrl: "/dynamicticketcard/4.svg",
      title1: "Event 4",
      partner: "Partner 4",
    },
    {
      id: 5,
      imageUrl: "/dynamicticketcard/5.svg",
      title1: "Event 5",
      partner: "Partner 5",
    },
    {
      id: 6,
      imageUrl: "/dynamicticketcard/6.svg",
      title1: "Event 6",
      partner: "Partner 6",
    },
  ];
  const brands = [
    { id: 1, name: "Brand 1", logo: "/brands/Mosnta.svg" },
    { id: 2, name: "Brand 2", logo: "/brands/United.svg" },
    { id: 3, name: "Brand 3", logo: "/brands/Vspeed.svg" },
    { id: 4, name: "Brand 4", logo: "/brands/Aelius.svg" },
    { id: 5, name: "Brand 5", logo: "/brands/Power.svg" },
    { id: 6, name: "Brand 6", logo: "/brands/United.svg" },
  ];

  return (
    <div>
      <Hero slides={slides} />
      <section className="w-full bg-gray-50 py-10">
        <DynamicCardGrid title="Kommende Veranstaltungen" cards={cardData} />
      </section>
      <Ratings />
      <BeforeBrands />
      <section className="mx-auto my-8 w-full max-w-[668px] h-auto px-4"></section>
      <Brand brands={brands} />
    </div>
  );
}
