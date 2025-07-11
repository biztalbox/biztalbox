import { Metadata } from "next";
import { getBlogPostBySlug } from "@/utils/api";
import BlogDetailsMain from "@/demoPages/blog/blog-details";
import { notFound } from "next/navigation";
import { createMetadata } from "@/utils/metadata";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const blog = await getBlogPostBySlug(params.slug);
    
    if (!blog) {
      console.warn(`Blog post not found for slug: ${params.slug}`);
      return createMetadata({
        title: 'Blog post not found - Biztal Box',
        description: 'The requested blog post could not be found. Please check the URL or browse our other blog posts.',
      }, '/blog/not-found');
    }
    
    const baseMetadata = {
      title: blog.yoast_head_json?.title || blog.title?.rendered || `Blog Post - Biztal Box`,
      description: blog.yoast_head_json?.description || 
                  (blog.excerpt?.rendered ? blog.excerpt.rendered.replace(/<[^>]*>/g, '').slice(0, 160) : 
                  'Read this blog post on Biztal Box - Your digital marketing partner'),
    };
    
    return createMetadata(baseMetadata, `/blog/${params.slug}`);
  } catch (error) {
    console.error(`Error generating metadata for blog post ${params.slug}:`, error);
    
    // Fallback metadata in case of API failure
    return createMetadata({
      title: 'Blog Post - Biztal Box',
      description: 'Discover insights and expertise from Biztal Box - Your trusted digital marketing partner.',
    }, `/blog/${params.slug}`);
  }
}

export default async function BlogDetailsPage({params}:{params:{slug:string}}) {
  try {
    const blog = await getBlogPostBySlug(params.slug);
    
    if (!blog) {
      console.warn(`Blog post not found for slug: ${params.slug}`);
      notFound();
    }

    // Validate required fields before transformation
    if (!blog.title?.rendered || !blog.content?.rendered) {
      console.error(`Blog post ${params.slug} missing required fields:`, {
        hasTitle: !!blog.title?.rendered,
        hasContent: !!blog.content?.rendered
      });
      notFound();
    }

    // Transform WordPress post to match your blog component's expected format
    const transformedBlog = {
      id: blog.id || 0,
      title: blog.title.rendered,
      date: blog.date ? new Date(blog.date).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }) : new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      content: blog.content.rendered,
      excerpt: blog.excerpt?.rendered || '',
      featuredImage: blog._embedded?.['wp:featuredmedia']?.[0]?.source_url || 
                    '/assets/img/inner-blog/blog-details/blog-details-1.jpg',
      category: 'Blog',
      author: 'Biztal Box',
      desc: blog.content.rendered,
      categories: blog.categories || []
    };

    return <BlogDetailsMain blog={transformedBlog} />;
  } catch (error) {
    console.error(`Error loading blog post ${params.slug}:`, error);
    
    // In case of any unexpected error, show 404 instead of crashing
    notFound();
  }
}
