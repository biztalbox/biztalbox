import { Metadata } from "next";
import { getBlogPostBySlug } from "@/utils/api";
import BlogDetailsMain from "@/demoPages/blog/blog-details";
import { notFound } from "next/navigation";
import { createMetadata } from "@/utils/metadata";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = await getBlogPostBySlug(params.slug);
  
  if (!blog) {
    return createMetadata({
      title: 'Blog post not found',
      description: 'The requested blog post could not be found',
    }, '/blog/not-found');
  }
  
  const baseMetadata = {
    title: blog.title.rendered,
    description: blog.excerpt.rendered.replace(/<[^>]*>/g, '').slice(0, 160),
  };
  
  return createMetadata(baseMetadata, `/blog/${params.slug}`);
}

export default async function BlogDetailsPage({params}:{params:{slug:string}}) {
  const blog = await getBlogPostBySlug(params.slug);
  
  if (!blog) {
    notFound();
  }

  // Transform WordPress post to match your blog component's expected format
  const transformedBlog = {
    id: blog.id,
    title: blog.title.rendered,
    date: new Date(blog.date).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }),
    content: blog.content.rendered,
    excerpt: blog.excerpt.rendered,
    featuredImage: blog._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/assets/img/inner-blog/blog-details/blog-details-1.jpg',
    category: 'Blog',
    author: 'Biztal Box',
      desc: blog.content.rendered,
    categories: blog.categories || []
  };

  return <BlogDetailsMain blog={transformedBlog} />;
}
