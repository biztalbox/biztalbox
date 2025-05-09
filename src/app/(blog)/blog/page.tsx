import React from "react";
import { Metadata } from "next";
import BlogClassicMain from "@/demoPages/blog/blog-classic";
import { createMetadata } from "@/utils/metadata";

const baseMetadata: Metadata = {
  title: "Blogs - Biztalbox",
  description: "Blogs - Biztalbox",
};

export const metadata = createMetadata(baseMetadata, '/blog');

export default function BlogPage() {
  return <BlogClassicMain />;
}
