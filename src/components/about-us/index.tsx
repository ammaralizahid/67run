import React from "react";
import Hero from "./hero";
import Runner from "../home/runner";
import Brand from "../home/brands";
import DiscoverSection from "../home/discover-section";

export default function About() {
  const sectionData = {
    imageSrc: "/brands/FriendsRunning.svg",
    imageAlt: "About image",
    title: "Über uns ",
    heading: "Willkommen bei Runnersmeet ",
    description:
      "Willkommen bei Runnersmeet – Deiner Plattform für Laufbegeisterte und Vereine! Wir sind ein Team von vier Gründern, jeder mit seiner eigenen einzigartigen Rolle und Leidenschaft für das Laufen.\n\nSebastian, unser Experte für Mediengestaltung, sorgt dafür, dass Runnersmeet nicht nur funktional, sondern auch visuell ansprechend ist. Seine kreative Expertise verwandelt unsere Plattform in ein Erlebnis, das Läufer lieben werden.\n\nJoel, unser Ideengeber und leidenschaftlicher Läufer, ist das Herzstück von Runnersmeet. Mit seiner Vision haben wir diese Plattform ins Leben gerufen, um Läufern weltweit zu helfen, ihre Ziele zu erreichen und ihre Leidenschaft für das Laufen zu teilen.\n\nSteve, unser Arbeitstier und kreativer Kopf, ist der Mann hinter den Kulissen. Seine technischen Fähigkeiten und seine unermüdliche Arbeitsethik sorgen dafür, dass Runnersmeet reibungslos läuft und ständig innoviert wird.",
    // buttonText: "Mehr Sehen",
  };
  const sectionData1 = {
    imageSrc: "/about-us/about-us-runer.svg",
    imageAlt: "About image",
    description:
      "Vereine sind bei uns ebenfalls bestens aufgehoben. Ihr könnt eure Mannschaft eintragen, Mannschaftsmeldungen machen und detaillierte Statistiken zu euren Läufern einsehen. Aber das ist noch nicht alles – wir bieten auch die Möglichkeit, eigene Läufe zu organisieren und sie in unseren Kalender einzutragen.\n\nUnsere Mission bei Runnersmeet ist es, die Laufgemeinschaft zu stärken und Läufern die Werkzeuge zur Verfügung zu stellen, um ihre Laufziele zu erreichen. Egal, ob du alleine läufst, in einem Verein bist oder deinen eigenen Lauf veranstalten möchtest – Runnersmeet ist deine Plattform.\n\nWir sind stolz darauf, Teil dieser wunderbaren Laufgemeinschaft zu sein und freuen uns darauf, dich auf Runnersmeet willkommen zu heißen. Zusammen werden wir laufen, stärker werden und unsere Laufziele erreichen. Laufen verbindet uns, und Runnersmeet ist der Ort, an dem diese Verbindung lebendig wird.",
    buttonText: "Tritt Heute Bei",
  };
  const brands = [
    { id: 1, name: "Brand 1", logo: "/brands/Mosnta.svg" },
    { id: 2, name: "Brand 2", logo: "/brands/United.svg" },
    { id: 3, name: "Brand 3", logo: "/brands/Vspeed.svg" },
    { id: 4, name: "Brand 4", logo: "/brands/Aelius.svg" },
    { id: 5, name: "Brand 5", logo: "/brands/Power.svg" },
    { id: 6, name: "Brand 6", logo: "/brands/United.svg" },
  ];
  return (
    <>
      <Hero
        backgroundImage="/about-us/about-us-hero.svg"
        title="Über uns"
        subtitle="Home-Über uns"
      />
      <div className="py-20">
        <Runner {...sectionData} />
        <div className="py-20">
          <DiscoverSection
            className="lg:h-[563px]"
            backgroundImageSrc="/about-us/flash.svg"
            rightImageSrc="/about-us/sarah-run.svg"
            rightImageAlt="Runners"
            description={`Marc, unser Software-Spezialist und Entwickler, ist der Mann, der die Magie hinter den Codes vollbringt. Als Computernerd mit einer Leidenschaft für Details stellt er sicher, dass unsere Plattform nicht nur gut aussieht, sondern auch zuverlässig und benutzerfreundlich ist.

Was bietet Runnersmeet? Für Laufbegeisterte haben wir einen umfassenden Kalender, der alle Volksläufe sowohl weltweit als auch lokal auflistet. Du kannst ein persönliches Profil erstellen und deine Teilnahmen mit detaillierten Statistiken verfolgen. Die Anmeldung für Volksläufe war noch nie so einfach wie auf unserer Plattform.`}
            buttonText="Tritt Heute Bei"
            buttonVariant="secondary"
            buttonClass="bg-[#FC7BA2] hover:bg-pink-600"
          />
        </div>
        <Runner {...sectionData1} btnClass="!bg-[#FB7BA2]" />
        <div className="mt-20">
          <Brand brands={brands} />
        </div>
      </div>
    </>
  );
}
