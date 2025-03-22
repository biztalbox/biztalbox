"use client";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import { projectDetailsPin } from "@/utils/project-anim";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import FooterFour from "@/layouts/footers/footer-four";
import handleScrollService from "@/utils/handleScrollService";

const PortfolioDetailsOneMain = () => {
  const [showSocial, setShowSocial] = React.useState(false);
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      projectDetailsPin();
    }, 100);
    return () => clearTimeout(timer);
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Make sure all refs are available
    if (!sectionRef.current || !imageRef.current || !textRef.current) return;

    // Get the height of the text content to determine scroll distance
    const textHeight = textRef.current.offsetHeight;
   //  const viewportHeight = window.innerHeight;

    // Create the scroll trigger animation
    if (window.innerWidth >= 1025) { // Check if the device is tablet size or larger
      const scrollTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "8% top", // Start when the top of the section hits the top of the viewport
        end: `+=${textHeight}`, // End after scrolling the full height of the text content
        pin: imageRef.current, // Pin the image
        anticipatePin: 1, // Improves performance by preparing the pin before it happens
        pinSpacing: true,
        scrub: true, // Smooth scrubbing effect tied to scroll position
        markers: false, // Set to true for debugging
        onLeave: () => {
          // When leaving the section, ensure the image is no longer pinned
          ScrollTrigger.getById("imagePin")?.kill();
        },
        onUpdate: (self: ScrollTrigger) => {
          // Scale down the imageRef to 0.8 with smooth animation
          const scale = 1 - 0.2 * self.progress;
          gsap.to(imageRef.current, { scale: scale, duration: 0.3, ease: "power1.out" });
        },
      });

      // Clean up on component unmount
      return () => {
        scrollTrigger.kill();
      };
    }

    // Clean up on component unmount
    return () => {
      ScrollTrigger.getById("imagePin")?.kill();
    };
  }, []);

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven cls="tp-inner-header-border" />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* portfolio details area */}
            <div ref={sectionRef} className="project-details-1-area project-details-1-pt">
              <div className="container-fluid p-0">
                <div className="row flex-xl-nowrap" id="service_details_container">
                  <div ref={imageRef} className="col-xl-5">
                    <div className="project-details-1-left">
                      {/* {port_images.map((imgSrc, i) => ( */}
                      <div className="project-details-1-thumb mb-10">
                        <Image
                          src="/assets/img/services/seo.webp"
                          id="service_img"
                          alt="port-img"
                          width={900}
                          height={600}
                          className="h-auto m-auto d-block"
                        />
                      </div>
                      {/* ))} */}
                    </div>
                  </div>
                  <div ref={textRef} className="col-xl-7 overflow-hidden hide-scrollbar" id="service_content" style={{ 
                    overflowY: 'auto', 
                    scrollbarWidth: 'none', 
                    msOverflowStyle: 'none'
                  }}>
                    {/* <div className="project-details-1-right-wrap"> */}
                    <div className="project-details-1-right p-relative">
                      <div className="project-details-1-title-box">
                        <span className="project-details-1-subtitle">
                          Seo Sticker
                        </span>
                        <h4 className="project-details-1-title">
                          Search Engine Optimization
                        </h4>
                        <p>
                          SEO is the key to make sure your website stands out
                          digitally. It enhances your website for search
                          engines, resulting in improved ranks and increased
                          visibility. SEO increases traffic, engagement, online
                          authority, and trust through the use of relevant
                          keywords, excellent content, and technical procedures,
                          resulting in digital success.
                        </p>
                      </div>
                      <div className="project-details-1-info-wrap">
                        <div className="project-details-1-info">
                          <span>Keyword Sight/ Vision/ Radar - </span>
                          <p>
                            The ability to instantly identify the most valuable
                            keywords and search trends, providing a clear path
                            to the top of search engine rankings.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span>The Wordsmith/ Word Master - </span>
                          <p>
                            Content Creation Mastery - The ability to craft
                            perfect, SEO-optimized content that both humans and
                            search engines love.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span>The Link Builder - </span>
                          <p>
                            Backlink Creation - The power to create powerful
                            backlinks that strengthen a website’s reputation and
                            authority.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span>The Rival Finder - </span>
                          <p>
                            Competitor Analysis -The ability to track and
                            uncover everything about a competitor’s SEO
                            strategy.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span>The Data Seer -</span>
                          <p>
                            Analytics Insight - The ability to instantly analyze
                            data and predict future trends to improve
                            performance.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span>Speed Force -</span>
                          <p>
                            Speed Optimization - The ability to instantly
                            accelerate a website’s loading speed, ensuring
                            smooth, lightning-fast performance that improves
                            rankings and user experience.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span>The Stayforcer - </span>
                          <p>
                            Bounce Rate Control - The power to keep visitors on
                            the website longer by making it impossible for them
                            to leave.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* portfolio details area */}
          </main>

          {/* footer area */}
          <FooterFour background="black-bg" />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioDetailsOneMain;
