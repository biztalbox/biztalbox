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
                          src="/assets/img/services/CAPTAIN_CUT.webp"
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
                                 <span className="project-details-1-subtitle">CAPTAIN CUT</span>
                                 <h4 className="project-details-1-title">Video Editing / Motion Graphics</h4>
                                 <p>A video editor is a multimedia guru who turns in raw footage into cinematic masterpieces. Mastering transitions, color grading, and visual effects, they craft fascinating narratives with perfect audio-visual synchronisation and optimized standards.</p>
                              </div>
                              <div className="project-details-1-info-wrap">
                                 <div className="project-details-1-info">
                                    <span>The Cut Commander- </span>
                                    <p>Editing Mastery- The ability to precisely trim, rearrange, and combine raw footage into a seamless narrative.</p>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>The Transition Titan- </span>
                                    <p>Seamless Scene Transitions- The ability to put together visually appealing, seamless transitions that lead viewers from one scene to the next with ease.</p>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>The Color Curator- </span>
                                    <p>Mastery of Color Grading- The power to transform ordinary footage into cinematic masterpieces through expert color correction and grading.</p>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>The FX Wizard-</span>
                                    <p>Visual Effects Mastery- The ability to expertly integrate cutting-edge visual effects to video projects, giving each frame an element of magic.</p>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>The Sync Savior-</span>
                                    <p>Perfect Audio-Visual Synchronization- The tendency to perfectly sync audio recordings with video footage, ensuring each sound effect, beat, and dialogue is in perfect balance.</p>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>The Resolution Renegade-</span>
                                    <p>Video Quality Enhancement- The ability to use advanced restoration and upscaling techniques to turn old or low-quality footage into clear, high-definition images.</p>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>The Format Flexer-</span>
                                    <p>Cross-Platform Adaptation- The ease to effortlessly convert and adjust videos for multiple platforms and formats without sacrificing quality.</p>
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
