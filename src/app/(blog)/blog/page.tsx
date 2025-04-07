import React from "react";
import { Metadata } from "next";
import BlogClassicMain from "@/demoPages/blog/blog-classic";

export const metadata: Metadata = {
  title: "Blogs - Biztalbox",
};

const BlogClassicPage = () => {
  return (
    <BlogClassicMain/>
  );
};

export default BlogClassicPage;
