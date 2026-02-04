import Hero from "./hero";
import SocietiesBrands from "./brands";

export default function Society() {
  const cards = [
    { id: 1, title: "Runners Edge Club", image: "/societies/1.svg" },
    { id: 2, title: "Runners Edge Club", image: "/societies/2.svg" },
    { id: 3, title: "Running Club", image: "/societies/3.svg" },
    { id: 4, title: "Stapleford Club", image: "/societies/4.svg" },
    { id: 5, title: "Portishead Club", image: "/societies/5.svg" },
    { id: 6, title: "Hunters Creek Club", image: "/societies/6.svg" },
    { id: 7, title: "Hedge & Running Club", image: "/societies/7.svg" },
    { id: 8, title: "Knoxville Club", image: "/societies/8.svg" },
    { id: 9, title: "Belsall Common Club", image: "/societies/9.svg" },
    { id: 10, title: "Your Pace Or Mine Club", image: "/societies/10.svg" },
    { id: 11, title: "Dayton Running Club", image: "/societies/11.svg" },
    { id: 12, title: "6AM Run Club", image: "/societies/12.svg" },
  ];

  return (
    <>
      <Hero />
      <SocietiesBrands cards={cards} />
    </>
  );
}
