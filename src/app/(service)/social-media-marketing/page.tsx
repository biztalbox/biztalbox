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

const SocialMediaMarketingPage = () => {
  const [showSocial, setShowSocial] = React.useState(false);
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
              imageSrc="/assets/img/services/social.webp"
              imageAlt="Social Media Marketing"
            >
              <div className="project-details-1-right p-relative">
                <div className="project-details-1-title-box">
                  <span className="project-details-1-subtitle">
                    Social Crawler
                  </span>
                  <h4 className="project-details-1-title">
                    Social Media Marketing
                  </h4>
                  <p>
                    Social media is the digital arena where brands
                    connect, captivate, and communicate with their
                    audience. Through correct strategies, dynamic content
                    creation, and targeted interactions across multiple
                    platforms, it drives value, inspires community, and
                    generates viral growth. With analytical knowledge and
                    persistent adaptability, it enables brand success and
                    influence.
                  </p>
                </div>
                <div className="project-details-1-info-wrap">
                  <div className="project-details-1-info">
                    <span>The Content Commander</span>
                    <p>
                      Content Creation & Curation- Mastery in creating
                      engaging, on-brand content that resonates with your
                      audience.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Engagement Enchanter</span>
                    <p>
                      Audience Interaction Mastery- The ability to ignite
                      meaningful conversations and nurture deep
                      connections with your audience.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Viral Vanguard</span>
                    <p>
                      Viral Content Creation- The potential for crafting
                      content that captures attention and spreads like
                      wildfire across social platforms.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Analytics Ace</span>
                    <p>
                      Data-Driven Insights- Knowledge in turning complex
                      metrics into practical strategies that boost
                      marketing success.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Platform Prodigy</span>
                    <p>
                      Multi-platform mastery- Whether it's Instagram,
                      LinkedIn, Twitter, or Facebook, his superpower
                      adapts
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Community Cultivator</span>
                    <p>
                      Community Engagement & Growth- The ability to
                      create, nurture, and sustain a dynamic digital
                      network that turns casual observers into keen
                      consumers of a brand.
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

export default SocialMediaMarketingPage;
