import React from "react";
import { Metadata } from "next";
import BlogClassicMain from "@/demoPages/blog/blog-classic";
import { createMetadata, createSchemaProps, createFullUrl } from "@/utils/metadata";
import SchemaProvider from "@/components/schema/SchemaProvider";

const baseMetadata: Metadata = {
  title: "Digital Marketing Blog | SEO, Web Design & Business Growth Tips",
  description: "Stay updated with the latest digital marketing insights, SEO tips, web design trends, and business growth strategies from Biztalbox experts.",
};

export const metadata = createMetadata(baseMetadata, '/blog');

export default function BlogPage() {
  const schemaProps = createSchemaProps('blog', '/blog');

  return (
    <SchemaProvider 
      schemaProps={schemaProps}
      currentUrl={createFullUrl('/blog')}
      title={baseMetadata.title as string}
      description={baseMetadata.description as string}
    >
      <BlogClassicMain />
    </SchemaProvider>
  );
}
