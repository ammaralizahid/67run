"use client";
import Hero from "./hero";
import Title from "./title";
import DynamicCardGrid from "./dynamicticketcard";
import Brand from "./brands";
import Ratings from "./ratings";
import Reviews from "./reviews";
import Runner from "./runner";
import DiscoverSection from "./discover-section";
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
  const sectionData = {
    imageSrc: "/brands/FriendsRunning.svg",
    imageAlt: "About image",
    title: "Über uns ",
    heading: "Willkommen bei Runnersmeet ",
    description:
      "Willkommen bei Runnersmeet – Deiner Plattform für Laufbegeisterte und Vereine! Wir sind ein Team von vier Gründern, jeder mit seiner eigenen einzigartigen Rolle und Leidenschaft für das Laufen.\n\nSebastian, unser Experte für Mediengestaltung, sorgt dafür, dass Runnersmeet nicht nur funktional, sondern auch visuell ansprechend ist. Seine kreative Expertise verwandelt unsere Plattform in ein Erlebnis, das Läufer lieben werden.\n\nJoel, unser Ideengeber und leidenschaftlicher Läufer, ist das Herzstück von Runnersmeet. Mit seiner Vision haben wir diese Plattform ins Leben gerufen, um Läufern weltweit zu helfen, ihre Ziele zu erreichen und ihre Leidenschaft für das Laufen zu teilen.\n\nSteve, unser Arbeitstier und kreativer Kopf, ist der Mann hinter den Kulissen. Seine technischen Fähigkeiten und seine unermüdliche Arbeitsethik sorgen dafür, dass Runnersmeet reibungslos läuft und ständig innoviert wird.",
    buttonText: "Mehr Sehen",
  };
  return (
    <div>
      <Hero slides={slides} />
      <section className="w-full bg-gray-50 py-10">
        <DynamicCardGrid title="Kommende Veranstaltungen" cards={cardData} />
      </section>
      <Runner {...sectionData} />
      <Ratings />
      <Reviews />
      <DiscoverSection
        backgroundImageSrc="/flash.svg"
        rightImageSrc="/brands/Runner.svg"
        rightImageAlt="Runners"
        heading="Entdecken Sie Die Freude Am Laufen – Tritt Heute Bei!"
        description="Aliquam lorem ante dapibus in viverra quis feugiat a tellus.\nPhasellus viverra metus varius laoreet."
        buttonText="Jetzt Starten"
        buttonVariant="secondary"
        buttonClass="bg-[#FC7BA2] hover:bg-pink-600"
      />

      <section className="mx-auto my-8 w-full max-w-[668px] h-auto px-4"></section>
      <Brand brands={brands} />
    </div>
  );
}
