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
import ServiceHighlights from "@/components/ashish/ServiceHighlights";

const MotionGraphicsPage = () => {
  const highlightColor = "#9fc2d9"; // You can change this color or make it a prop
  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      projectDetailsPin();
    }, 100);
    return () => clearTimeout(timer);
  });
  const highlights = [
    "10+ Years of SEO Experience",
    "150+ Happy Clients Across the Globe",
    "100% Transparent Reporting",
    "ROI-Focused Strategies",
  ];

  const services = [
    "Technical SEO",
    "Content Optimization",
    "E-commerce SEO",
    "Local SEO",
    "B2B SEO",
    "Enterprise SEO",
    "White Label SEO",
  ];

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
                  <h1
                    className="project-details-1-subtitle"
                    style={{ lineHeight: 1.4 }}
                  >
                    CAPTAIN CUT
                  </h1>
                  <h2
                    className="project-details-1"
                    style={{
                      color: "white",
                      fontSize: "2.2rem",
                      fontWeight: 700,
                    }}
                  >
                    Video Editing / Motion Graphics
                  </h2>
                  <p>
                    A video editor is a multimedia magician who takes raw footage and makes it a cinematic wonder.
                    They know transitions, color grading and vfx like the back of their hands, they put together
                    stories with sharp audio-visual intuitiveness, and exceptional standards. With their tireless attention to
                    detail and a storyteller’s soul,
                    they give life to on-screen disorder, they organize chaos into engaging stories.
                  </p>
                </div>
                <ServiceHighlights color={highlightColor} highlights={highlights} services={services} />
                <hr />
                <div className="project-details-1-info-wrap">
                  <div className="project-details-1-info">
                    <span>The Cut Commander- </span>
                    <p>
                      Editing Mastery – The skill to accurately trim,
                      rearrange, and combine raw content, piecing together one cohesive story.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Transition Titan- </span>
                    <p>
                      Scene-Shift Sorcery – An ability to produce intoxicating fades that have a magnetic
                      pull and steer an audience from one scene to the next. Every small movement,
                      whether its a smooth slide or a slow fade out, is choreographed to maintain the rhythm and
                      he interest of the watcher.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Color Curator- </span>
                    <p>
                      Color Grading Expertise – The ability to turn an ordinary footage into a
                      cinematic masterpiece with professional color correction and grading. Every
                      frame is carefully tinted to set the mood, define the tone,
                      and stir the viewer’s emotions—one shade at a time
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The FX Wizard-</span>
                    <p>
                      Visual Effects Mastery – The ability to expertly integrate
                      cutting-edge visual effects to video projects, giving each frame an element of magic.
                      From subtle sparkles to explosive impact, the magic lies in the details.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Sync Savior-</span>
                    <p>
                      Perfect Audio-Visual Synchronization – The tendency to
                      perfectly sync audio recordings with video footage, ensuring each
                      sound effect, beat, and dialogue is in perfect balance. It’s where sound meets sight—flawlessly.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Resolution Renegade-</span>
                    <p>
                      Video Quality Enhancement- This hero uses restoration
                      spells and upscaling tools to resurrect grainy, old footage,
                      and turning them into  crisp, high definition content. Visual
                      clarity is not only aesthetic; it’s power.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Format Flexer-</span>
                    <p>
                      Cross-Platform Adaptation –  No screen is off-limits for this quick-thinking fighter.
                      Whether it&apo;s a vertical Instagram reel or a widescreen YouTube premiere,
                      they tweak and tailor every frame to fit—without losing quality along the way.
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
      <style jsx>{`
        .project-details-1-info > span {
          color: ${highlightColor} !important;
        }
      `}</style>
    </Wrapper>
  );
};

export default MotionGraphicsPage;
