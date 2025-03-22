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
// import handleScrollService from "@/utils/handleScrollService";
// import scrollServiceContent from "@/utils/handleScrollService";
// import ScrollTriggerService from "@/utils/handleScrollService";

const PortfolioDetailsOneMain = () => {
  
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

//   ScrollTriggerService();
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
                          src="/assets/img/services/ALGANIX.webp"
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
                          ALGANIX
                        </span>
                        <h4 className="project-details-1-title">
                          Analysis-Alogorithm
                        </h4>
                        <p>
                          An algorithm is a precision powerhouse that can
                          instantly analyse vast amount of data to find hidden
                          patterns and insights. Armed with adaptive learning
                          and predictive analytics, it is always changing to
                          improve operations and predict future trends. It
                          converts raw information into insightful and useful
                          decisions that encourage success and innovation
                          through dynamic scalability.
                        </p>
                      </div>
                      <div className="project-details-1-info-wrap">
                        <div className="project-details-1-info">
                          <span>The Efficiency Enforcer </span>
                          <p>
                            Data Processing Speed- The ability to process vast
                            amounts of data at lightning speed while using
                            minimal resources.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span>The Pattern Prophet </span>
                          <p>
                            Pattern Recognition- The remarkable ability to
                            detect hidden patterns and correlations in even the
                            most complex datasets.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span>The Predictive Prodigy </span>
                          <p>
                            Predictive Analytics-The ability to analyse recent
                            as well as past data for forecasting future patterns
                            and results.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span>The Adaptive Analyzer </span>
                          <p>
                            Machine Learning- The ability to continuously learn,
                            evolve, and optimize its own processes based on new
                            data inputs.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span>The Optimization Oracle</span>
                          <p>
                            Process Optimization- The skill for optimising
                            operations and algorithms for optimum efficiency
                            throughout period.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span>The Scalability Sage</span>
                          <p>
                            Dynamic Scaling- The power to effortlessly boost or
                            drop operational capacity in response to evolving
                            requirements.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span>The Data Dynamo </span>
                          <p>
                            Big Data Processing- The capacity to quickly
                            integrate and analyse massive databases,
                            transforming unprocessed data into valuable
                            insights.
                          </p>
                        </div>

                        {/* <div className="project-details-1-info">
                                    <span>The Adaptive Analyzer </span>
                                    <p>Machine Learning- The ability to continuously learn, evolve, and optimize its own processes based on new data inputs.</p>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>The Optimization Oracle</span>
                                    <p>Process Optimization- The skill for optimising operations and algorithms for optimum efficiency throughout period.</p>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>The Scalability Sage</span>
                                    <p>Dynamic Scaling- The power to effortlessly boost or drop operational capacity in response to evolving requirements.</p>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>The Data Dynamo </span>
                                    <p>Big Data Processing- The capacity to quickly integrate and analyse massive databases, transforming unprocessed data into valuable insights.</p>
                                 </div> */}
                      </div>
                    </div>

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
