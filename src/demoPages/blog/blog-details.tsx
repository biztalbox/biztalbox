"use client";
import { gsap } from "gsap";
import React from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import { IBlogDT } from "@/types/blog-d-t";
import BlogDetailsArea from "@/components/blog/details/blog-details-area";
import BlogDetailsBreadcrumb from "@/components/blog/details/blog-details-breadcrumb";
import BlogDetailsRelatedPosts from "@/components/blog/details/blog-details-related-posts";
// animation
import { charAnimation } from "@/utils/title-animation";
import RelatedPostGrid from "@/components/blog/relatedpostgrid";
import FooterFour from "@/layouts/footers/footer-four";

// prop type
type IProps = {
  blog: IBlogDT;
};

const BlogDetailsMain = ({ blog }: IProps) => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven transparent={true} />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* blog details hero */}
            <BlogDetailsBreadcrumb 
              title={blog.title} 
              image={blog.featuredImage || '/assets/img/inner-blog/blog-details/blog-details-1.jpg'} 
              date={blog.date}
            />
            {/* blog details hero */}

            {/* blog details area */}
            <BlogDetailsArea blog={blog} />
            {/* blog details area */}

            {/* related posts */}
            <RelatedPostGrid 
              currentPostId={blog.id}
              currentPostCategories={blog.categories}
            />
            {/* related posts */}
          </main>

          {/* footer area */}
          <FooterFour background='dark-bg' />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default BlogDetailsMain;
