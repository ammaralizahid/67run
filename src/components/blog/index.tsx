import Hero from "./hero";
import BlogBrands from "./brands";

export default function Blog() {
  const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
  const linkLabel = "Mehr erfahren";
  const href = "#";

  const cards = [
    { id: 1, title: "Jakarta 5K Marathon", description, linkLabel, href, image: "/blog/1.svg" },
    { id: 2, title: "Fun Run Festival", description, linkLabel, href, image: "/blog/2.svg" },
    { id: 3, title: "Outrun City Marathon", description, linkLabel, href, image: "/blog/3.svg" },
    { id: 4, title: "S3K Runnin Marathon", description, linkLabel, href, image: "/blog/4.svg" },
    { id: 5, title: "Jakarta 5K Marathon", description, linkLabel, href, image: "/blog/1.svg" },
    { id: 6, title: "Fun Run Festival", description, linkLabel, href, image: "/blog/2.svg" },
    { id: 7, title: "Outrun City Marathon", description, linkLabel, href, image: "/blog/3.svg" },
    { id: 8, title: "3K Runnin Marathon", description, linkLabel, href, image: "/blog/4.svg" },
    { id: 9, title: "Jakarta 5K Marathon", description, linkLabel, href, image: "/blog/1.svg" },
    { id: 10, title: "Fun Run Festival", description, linkLabel, href, image: "/blog/2.svg" },
    { id: 11, title: "Outrun City Marathon", description, linkLabel, href, image: "/blog/3.svg" },
    { id: 12, title: "3K Runnin Marathon", description, linkLabel, href, image: "/blog/4.svg" },
  ];

  return (
    <>
      <Hero />
      <BlogBrands cards={cards} />
    </>
  );
}

