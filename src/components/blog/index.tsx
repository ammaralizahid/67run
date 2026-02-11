import Hero from "./hero";
import BlogBrands from "./brands";
import { blogPosts } from "@/data/blogs";
import type { BlogBrandCard } from "./brands/BlogCard";

export default function Blog() {
  const linkLabel = "Mehr erfahren";

  const cards: BlogBrandCard[] = blogPosts.map((post) => ({
    id: post.id,
    title: post.title,
    description: post.description,
    linkLabel,
    href: `/blog/${post.id}`,
    image: post.image,
  }));

  return (
    <>
      <Hero />
      <BlogBrands cards={cards} />
    </>
  );
}

