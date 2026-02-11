import Hero from "./hero";
import Detail from "./detail";
import type { BlogPost } from "@/data/blogs";
import type { BlogDetailCardData } from "@/components/blog-detail/detail/BlogDetailCard";

type BlogDetailProps = {
  post: BlogPost;
  relatedPosts: BlogDetailCardData[];
};

export default function BlogDetail({ post, relatedPosts }: BlogDetailProps) {
  return (
    <>
      <Hero />
      <Detail post={post} relatedPosts={relatedPosts} />
    </>
  );
}
