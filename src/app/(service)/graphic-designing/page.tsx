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

const PortfolioDetailsOneMain = () => {
  // useScrollSmooth();

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
              imageSrc="/assets/img/services/VECTOR.webp"
              imageAlt="Vector Graphic Designing"
            >
              <div className="project-details-1-right p-relative">
                <div className="project-details-1-title-box">
                  <span className="project-details-1-subtitle">
                    Vector
                  </span>
                  <h1 className="project-details-1-title">
                    Graphic Designing
                  </h1>
                  <p>
                    GRAPHIC DESIGNINGA graphic designer is a creative force that turns concepts into recognised piece of art. They create appealing brand identities that attract and motivate by mastering colour, typography, and composition. They transform every idea into an entertaining tale of excellence with creativity and quality.
                  </p>
                </div>
                <div className="project-details-1-info-wrap">
                  <div className="project-details-1-info">
                    <span>The Design Dynamo-</span>
                    <p>
                      Creativity Unleashed- The ability to generate innovative design concepts that captivate and inspire.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Color Conductor- </span>
                    <p>
                      Mastery of Color Theory- The skill to create expressive and coordinated colour schemes that enhance the personality of the brand.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Typography Titan - </span>
                    <p>
                      Mastery of Typography- The power to modify fonts with precision, creating layouts that communicate messages with clarity and style.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Balance Bringer- </span>
                    <p>
                      Layout and Composition- The expertise to align compositions that are aesthetically pleasing, intuitive, and balanced.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Branding Beast-</span>
                    <p>
                      Brand Identity Design- The talent to craft compelling visual identities that encapsulate the essence of a brand.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Visual Virtuoso-</span>
                    <p>
                      Digital Illustration & Image Editing- The ability to transform ordinary visuals into extraordinary works of art through expert editing and creative illustration.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Idea Igniter- </span>
                    <p>
                      Creative Ideation- The power to spark endless creative ideas from the simplest brief, transforming concepts into visual masterpieces.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Resolution Rescuer </span>
                    <p>
                      Image Quality Mastery- The talent for transforming low-quality visuals into crisp, high-resolution works of art.
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

export default PortfolioDetailsOneMain;
