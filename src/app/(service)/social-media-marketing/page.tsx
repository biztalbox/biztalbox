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

const SocialMediaMarketingPage = () => {
  const [showSocial, setShowSocial] = React.useState(false);
  // useScrollSmooth();
  const highlightColor = "#e6abaa"; // You can change this color or make it a prop


  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      projectDetailsPin();
    }, 100);
    return () => clearTimeout(timer);
  });
  const highlights = [
    "6+ Years of SMM Experience",
    "75 + Brands Grown Organically",
    "Platform - Specific Strategies",
    "Creative + Data - Driven Approach",
  ];

  const services = [
    " Instagram Management",
    "Facebook Page Growth",
    "LinkedIn Strategy",
    "Engagement Campaigns",
    "Reel & Post Planning",
    "Community Building",
    "Brand Awareness Ads",

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
              imageSrc="/assets/img/services/social.webp"
              imageAlt="Social Media Marketing"
            >
              <div className="project-details-1-right p-relative">
                <div className="project-details-1-title-box">
                  <h1
                    className="project-details-1-subtitle"
                    style={{ lineHeight: 1.4 }}>
                     Boost Your Brand with Expert Social Media Marketing Services
                  </h1>
                  <h2
                    className="project-details-1"
                    style={{
                      color: "white",
                      fontSize: "2.2rem",
                      fontWeight: 700,
                    }}>
                    Top Social Media Marketing Agencies
                  </h2>
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
                <ServiceHighlights color={highlightColor} highlights={highlights} services={services} />
                <hr />
                <div className="project-details-1-info-wrap">
                   <h3
                    className="project-details-1-subtitle"
                    style={{ lineHeight: 1.4, color: highlightColor }}
                  >
                   Social Crawler
                  </h3>
                  <h3
                    className="project-details-1"
                    style={{
                      color: "white",
                      fontSize: "2.5rem",
                      fontWeight: 700,
                    }}
                  >
                    Social Media Marketing
                  </h3>
                  <h3
                    className="project-details-1-subtitle"
                    style={{ color: "lightgray", marginBottom: "20px" }}
                  >
                    SUPER POWERS :-
                  </h3>
                  <div className="project-details-1-info">
                    <span>The Content Commander</span>
                    <p>
                      Content Creation & Curation –
                      The ability to create compelling on-brand content
                      that speaks to your audience.  A Storyteller at heart,
                      the Content Commander takes ordinary messages and turns
                      them into supercharged moments, infusing brands with life
                      and energy, one scroll-stopping post at a time.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Engagement Enchanter</span>
                    <p>
                      Content Creation & Curation – The ability to create compelling on-brand content that
                      speaks to your audience.  A Storyteller at heart, the Content Commander takes ordinary
                      messages and turns them into supercharged moments,
                      infusing brands with life and energy, one scroll-stopping post at a time.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Viral Vanguard</span>
                    <p>
                      Viral Content Creation – The creation of Shareable Posts that attract attention and flare out quickly on social platforms.
                      Trend-savvy and timing-perfect, the Vanguard isn’t in pursuit of virality; it engineers it
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Analytics Ace</span>
                    <p>
                      Data-Driven Insights – Knowledge in turning complex metrics into practical strategies that boost marketing success.
                      Every campaign has a puzzle to solve — and the Ace is the one who solves it, turning data into narrative and metrics into action

                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Platform Prodigy</span>
                    <p>
                      Multi-platform mastery – Whether it&apos;s Instagram, LinkedIn, Twitter, or Facebook, his superpower adapts.
                      Each platform is a different world, and the Prodigy speaks all its languages fluently.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Community Cultivator</span>
                    <p>
                      Community Engagement & Growth — The magic of creating and maintaining a thriving online
                      community that converts spectators into dedicated brand advocates. With the instincts of a host and the hunger of an alpha,
                      this cultivator does not merely build community; they build ecosystems of loyalty and shared value
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

export default SocialMediaMarketingPage;
