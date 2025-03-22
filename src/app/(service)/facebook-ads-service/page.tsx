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
                          src="/assets/img/services/META.webp"
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
                          Meta Ads
                        </span>
                        <h4 className="project-details-1-title">
                          Facebook & Meta Ads
                        </h4>
                        <p>
                          Throughout its ecosystem, Meta Ads creates visually
                          striking ads with precise targeting, turning it into a
                          digital powerhouse. It ensures that your brand is
                          persistent by integrating messaging across social
                          media platforms like Facebook and Instagram. Meta Ads
                          optimises each ad dollar while boosting engagement and
                          conversions with real-time optimisation.
                        </p>
                      </div>
                      <div className="project-details-1-info-wrap">
                        <div className="project-details-1-info">
                          <span>The Meta Maestro </span>
                          <p>
                            Meta Ads Mastery- The ability to plan and carry out
                            strategically accurate and aesthetically appealing
                            advertising campaigns within Meta&apos;s ecosystem.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span>The Social Synergist </span>
                          <p>
                            Cross-Platform Integration-The power to balance
                            messaging across several social media platforms and
                            effectively integrate Meta ad campaigns into a
                            larger digital ecosystem.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span> The Targeting Titan</span>
                          <p>
                            Precision Audience Targeting- Exhibiting laser-like
                            accuracy in identifying and interacting with the
                            ideal audience together.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span> The Creative Conjurer </span>
                          <p>
                            Innovative Creative Strategy- The potential for
                            transforming brand messages into dynamic,
                            eye-catching ad.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span>The Retargeting Renegade</span>
                          <p>
                            Advanced Retargeting Techniques-The competence to
                            re-engage visitors and convert their initial
                            interest into persistent conversions.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span>The Budget Balancer</span>
                          <p>
                            Efficient Budget Management- The art of maximising
                            performance while minimising expenses through ad
                            spend planning.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span>The Engagement Evangelist</span>
                          <p>
                            Audience Interaction Mastery- The power to create
                            advertisements that not only grab viewers attention
                            but also encourage continued engagement, creating an
                            engaging discussion with them.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span>The Instant Innovator</span>
                          <p>
                            Real-Time Adaptation- The ability to quickly modify
                            and improve ad elements in response to real-time
                            data and shifts in the market.
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
