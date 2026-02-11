import Layout from "@/components/layout";
import BlogDetail from "@/components/blog-detail";
import { blogPosts, getBlogPostById } from "@/data/blogs";
import { notFound } from "next/navigation";
import type { BlogDetailCardData } from "@/components/blog-detail/detail/BlogDetailCard";

type PageProps = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function BlogDetailPage({ params }: PageProps) {
  const post = getBlogPostById(params.id);

  if (!post) {
    return notFound();
  }

  const relatedPosts: BlogDetailCardData[] = blogPosts
    .filter((item) => item.id !== post.id)
    .slice(0, 4)
    .map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      linkLabel: "Mehr erfahren",
      href: `/blog/${item.id}`,
      image: item.image,
    }));

  return (
    <Layout>
      <BlogDetail post={post} relatedPosts={relatedPosts} />
    </Layout>
  );
}
