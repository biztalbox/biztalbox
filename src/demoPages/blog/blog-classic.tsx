"use client";
import { gsap } from "gsap";
import React, { Suspense } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation } from "@/utils/title-animation";
import BlogClassicSlider from "@/components/blog/slider/blog-classic-slider";
import BlogClassicArea from "@/components/blog/blog-classic-area";
import VideoPopup from "@/components/modal/video-popup";

const BlogClassicMain = () => {
  const [isVideoOpen, setIsVideoOpen] = React.useState(false);
  const [videoId, setVideoId] = React.useState("rVHxkxJM3rY");
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
          <main className="mt-3 mt-md-1 mt-lg-0">
            {/* blog classic hero start */}
            {/* <BlogClassicSlider /> */}
            {/* blog classic hero end */}

            {/* blog classic area area */}
            <Suspense fallback={
              <section className="postbox__area tp-blog-sidebar-sticky-area pt-120 pb-80">
                <div className="container">
                  <div className="row">
                    <div className="col-xxl-8 col-xl-8 col-lg-8">
                      <div className="postbox__wrapper">
                        <div className="text-center py-5">
                          <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          <p className="mt-3">Loading blog posts...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            }>
              <BlogClassicArea setIsVideoOpen={setIsVideoOpen} setVideoId={setVideoId} />
            </Suspense>
            {/* blog classic area area */}
          </main>

          {/* footer area */}
          <FooterTwo topCls="" />
          {/* footer area */}
        </div>
      </div>

      {/* video popup */}
      {/* <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={videoId}
      /> */}
      {/* video popup */}
    </Wrapper>
  );
};

export default BlogClassicMain;
