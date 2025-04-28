"use client";
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
// import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import { projectDetailsPin } from "@/utils/project-anim";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import FooterFour from "@/layouts/footers/footer-four";
import ScrollPinImage from "@/components/ScrollPinImage";

const MotionGraphicsPage = () => {
  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      projectDetailsPin();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven cls="tp-inner-header-border" />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* portfolio details area */}
            <ScrollPinImage 
              imageSrc="/assets/img/services/CAPTAIN_CUT.webp"
              imageAlt="CAPTAIN CUT Video Editing / Motion Graphics"
            >
              <div className="project-details-1-right p-relative">
                <div className="project-details-1-title-box">
                  <span className="project-details-1-subtitle">
                    CAPTAIN CUT
                  </span>
                  <h1 className="project-details-1-title">
                    Video Editing / Motion Graphics
                  </h1>
                  <p>
                    A video editor is a multimedia guru who turns in raw footage into cinematic masterpieces. Mastering transitions, color grading, and visual effects, they craft fascinating narratives with perfect audio-visual synchronisation and optimized standards.
                  </p>
                </div>
                <div className="project-details-1-info-wrap">
                  <div className="project-details-1-info">
                    <span>The Cut Commander- </span>
                    <p>
                      Editing Mastery- The ability to precisely trim, rearrange, and combine raw footage into a seamless narrative.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Transition Titan- </span>
                    <p>
                      Seamless Scene Transitions- The ability to put together visually appealing, seamless transitions that lead viewers from one scene to the next with ease.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Color Curator- </span>
                    <p>
                      Mastery of Color Grading- The power to transform ordinary footage into cinematic masterpieces through expert color correction and grading.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The FX Wizard-</span>
                    <p>
                      Visual Effects Mastery- The ability to expertly integrate cutting-edge visual effects to video projects, giving each frame an element of magic.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Sync Savior-</span>
                    <p>
                      Perfect Audio-Visual Synchronization- The tendency to perfectly sync audio recordings with video footage, ensuring each sound effect, beat, and dialogue is in perfect balance.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Resolution Renegade-</span>
                    <p>
                      Video Quality Enhancement- The ability to use advanced restoration and upscaling techniques to turn old or low-quality footage into clear, high-definition images.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Format Flexer-</span>
                    <p>
                      Cross-Platform Adaptation- The ease to effortlessly convert and adjust videos for multiple platforms and formats without sacrificing quality.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollPinImage>
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

export default MotionGraphicsPage;
