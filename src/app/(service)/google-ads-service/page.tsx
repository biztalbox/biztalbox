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
                          src="/assets/img/services/GOOGLE_ADS.webp"
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
                    <div className="project-details-1-right p-relative">
                      <div className="project-details-1-title-box">
                        <span className="project-details-1-subtitle">
                          Google Ads
                        </span>
                        <h4 className="project-details-1-title">Performance Marketing</h4>
                        <p>
                          Google Ads is a versatile tool that makes every click
                          an instant hit. It improves return on investment (ROI)
                          and generates high-value leads through strategic
                          bidding, precise targeting, and smart keyword
                          execution. Its constant optimisation maintains it at
                          the forefront of the digital scene.
                        </p>
                      </div>
                      <div className="project-details-1-info-wrap">
                        <div className="project-details-1-info">
                          <span>The Click Conqueror </span>
                          <p>
                            Google Ads Mastery- The capacity to create,
                            implement, and refine precise advertising campaigns
                            that turn each click into measurable success.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span> The Conversion Catalyst </span>
                          <p>
                            Conversion Optimization- The aptitude to execute
                            effective strategies to convert traffic into
                            high-value leads and sales.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span>The Bid Boss</span>
                          <p>
                            Automated Bidding Excellence- Mastered with bidding
                            strategies that enhance efficiency and reduce
                            expenses.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span>The Keyword King </span>
                          <p>
                            Keyword Research & Targeting- The abilityto identify
                            and use powerful keywords that dominate search
                            results.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span>The Data Dominator</span>
                          <p>
                            Analytics and Performance Tracking- The aptitude to
                            decode complex data into valuable insights that
                            promote continuous campaign improvement.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span>The ROI Renegade</span>
                          <p>
                            Return on Investment Optimization- The expertise to
                            maximize profitability by balancing ad spend and
                            returns through strategic campaign management.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span>The Audience Amplifier </span>
                          <p>
                            Remarketing & Audience Targeting- The ability for
                            identifying, retargeting, and expanding your
                            audience through precise, data-driven campaigns.
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
