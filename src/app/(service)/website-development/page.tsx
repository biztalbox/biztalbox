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
import {charAnimation,titleAnimation} from "@/utils/title-animation";
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
      <HeaderEleven cls="tp-inner-header-border"/>
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
                          src="/assets/img/services/WEBDEV.webp"
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
                                 <span className="project-details-1-subtitle">Web Dev</span>
                                 <h4 className="project-details-1-title">Web Development</h4>
                                 <p>A Web Dev is a digital architect who builds, optimizes, and secures seamless websites. Mastering coding, debugging, and responsive design, they build a dynamic experiences that evolve with the brand. Through wireframing, security, and ongoing maintenance, 
                                    they ensure websites thrive in the digital world. 
                                 </p>
                              </div>
                              <div className="project-details-1-info-wrap">
                                 <div className="project-details-1-info">
                                    <span>The Code Titan-</span>
                                    <p>Mastery of Coding Languages: The ability to easily write, optimize, and debug code in varied programming language, ensuring error-free functionality.</p>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>The Flowmaster- </span>
                                    <p>Flowchart Creation- The ability to ease decision-making 
                                       and user experiences by turning complex structure and procedure into understandable, logical flowcharts.</p>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>The Blueprint Weaver- </span>
                                    <p>Wireframing-The ability to develop precise, intuitive wireframes that lay the perfect foundation for any user interface.</p>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>The Bug Buster- </span>
                                    <p>Bug Fixing and Troubleshooting- The ability to examine, debug, and eliminate issues in the code, ensuring smooth and error-free execution.</p>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>The Security Sentinel-</span>
                                    <p>Website Security- The power to safeguard websites with the highest level of security, shielding them from potential threats and vulnerabilities.</p>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>The Design Shapeshifter-</span>
                                    <p>Dynamic Web Design- The ability to create flexible, adaptable, and dynamic web designs that evolve with the brand’s needs.</p>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>The Mobile Maestro-</span>
                                    <p>Responsive Design- The ability to design websites that automatically adapt and function perfectly across all mobile devices and screen sizes.</p>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>The Maintenance Master- </span>
                                    <p>Ongoing Support & Maintenance- The ability to assure websites run smoothly and are kept up to date with regular maintenance and timely updates.</p>
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
