import React from "react";
import { Metadata } from "next";
import BlogClassicMain from "@/demoPages/blog/blog-classic";
import { createMetadata, createSchemaProps, createFullUrl } from "@/utils/metadata";
import SchemaProvider from "@/components/schema/SchemaProvider";

// Generate dynamic metadata based on search params
export async function generateMetadata({ 
  searchParams 
}: { 
  searchParams: { page?: string; category?: string; search?: string } 
}): Promise<Metadata> {
  const { page, category, search } = searchParams;
  
  let title = "Digital Marketing Blog | SEO, Web Design & Business Growth Tips";
  let description = "Stay updated with the latest digital marketing insights, SEO tips, web design trends, and business growth strategies from Biztalbox experts.";
  
  if (category) {
    title = `${category.charAt(0).toUpperCase() + category.slice(1)} Blog Posts | Digital Marketing Blog`;
    description = `Explore ${category} related articles, tips, and insights from our digital marketing experts.`;
  } else if (search) {
    title = `Search Results for "${search}" | Digital Marketing Blog`;
    description = `Find the latest articles and insights about "${search}" from our digital marketing blog.`;
  } else if (page && page !== "1") {
    title = `Blog Page ${page} | Digital Marketing Blog`;
    description = `Browse our digital marketing blog posts - page ${page}.`;
  }
  
  return createMetadata({ title, description }, '/blog');
}

export default function BlogPage({
  searchParams
}: {
  searchParams: { page?: string; category?: string; search?: string }
}) {
  const schemaProps = createSchemaProps('blog', '/blog');

  return (
    <SchemaProvider 
      schemaProps={schemaProps}
      currentUrl={createFullUrl('/blog')}
      title="Digital Marketing Blog | SEO, Web Design & Business Growth Tips"
      description="Stay updated with the latest digital marketing insights, SEO tips, web design trends, and business growth strategies from Biztalbox experts."
    >
      <BlogClassicMain searchParams={searchParams} />
    </SchemaProvider>
  );
}
