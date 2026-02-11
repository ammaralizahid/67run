export type BlogPost = {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  heroImage: string;
};

const description =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
const date = "Sep 4, 2023";
const author = "Admin";
const heroImage = "/blog-detail/Sport.svg";

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Jakarta 5K Marathon",
    description,
    image: "/blog/1.svg",
    date,
    author,
    heroImage,
  },
  {
    id: 2,
    title: "Fun Run Festival",
    description,
    image: "/blog/2.svg",
    date,
    author,
    heroImage,
  },
  {
    id: 3,
    title: "Outrun City Marathon",
    description,
    image: "/blog/3.svg",
    date,
    author,
    heroImage,
  },
  {
    id: 4,
    title: "S3K Runnin Marathon",
    description,
    image: "/blog/4.svg",
    date,
    author,
    heroImage,
  },
  {
    id: 5,
    title: "Jakarta 5K Marathon",
    description,
    image: "/blog/1.svg",
    date,
    author,
    heroImage,
  },
  {
    id: 6,
    title: "Fun Run Festival",
    description,
    image: "/blog/2.svg",
    date,
    author,
    heroImage,
  },
  {
    id: 7,
    title: "Outrun City Marathon",
    description,
    image: "/blog/3.svg",
    date,
    author,
    heroImage,
  },
  {
    id: 8,
    title: "3K Runnin Marathon",
    description,
    image: "/blog/4.svg",
    date,
    author,
    heroImage,
  },
  {
    id: 9,
    title: "Jakarta 5K Marathon",
    description,
    image: "/blog/1.svg",
    date,
    author,
    heroImage,
  },
  {
    id: 10,
    title: "Fun Run Festival",
    description,
    image: "/blog/2.svg",
    date,
    author,
    heroImage,
  },
  {
    id: 11,
    title: "Outrun City Marathon",
    description,
    image: "/blog/3.svg",
    date,
    author,
    heroImage,
  },
  {
    id: 12,
    title: "3K Runnin Marathon",
    description,
    image: "/blog/4.svg",
    date,
    author,
    heroImage,
  },
];

export function getBlogPostById(id: string | number) {
  const numericId = typeof id === "string" ? Number(id) : id;
  if (!Number.isFinite(numericId)) {
    return undefined;
  }

  return blogPosts.find((post) => post.id === numericId);
}
