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

const GoogleAdsServicePage = () => {
  const highlightColor = "#f8b7c4"; // You can change this color or make it a prop
  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      projectDetailsPin();
    }, 100);
    return () => clearTimeout(timer);
  });
  const highlights = [
    "5+ Years of Data-Driven Marketing Expertise",
    "Proven ROI Improvement Across Campaigns",
    "Multi-Channel Strategy & Execution",
    "Transparent Reporting & Analytics",

  ];

  const services = [
    "PPC Campaign Management",
    "Conversion Rate Optimization",
    "Google Ads Management",
    "Retargeting Campaigns",
    "Analytics & Performance Tracking",
    "A/B Testing",
    "Lead Generation Strategies",

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
              imageSrc="/assets/img/services/GOOGLE_ADS.webp"
              imageAlt="Google Ads Performance Marketing"
            >
              <div className="project-details-1-right p-relative">
                <div className="project-details-1-title-box">
                  <h1
                    className="project-details-1-subtitle"
                    style={{ lineHeight: 1.4 }}
                  >
                     ROI-Focused Performance Marketing to Maximize Your Growth
                  </h1>
                  <h2
                    className="project-details-1"
                    style={{
                      color: "white",
                      fontSize: "2.2rem",
                      fontWeight: 700,
                    }}
                  >
                    Performance Marketing Agency 

                  </h2>
                  <p>
                    Google Ads is a versatile tool and every click is an instant winner. It improves return on investment (ROI) and generates high-value leads through strategic bidding, precise targeting, and smart keyword execution. Its constant optimisation maintains it at the forefront of the digital scene.


                    Enter the realm of digital advertising where heroes rise, wielding data and creativity to conquer the market.


                    They fight the battle of the internet with every campaign, so your brand can reign supreme over the competition.

                  </p>
                </div>
                <ServiceHighlights color={highlightColor} highlights={highlights} services={services} />
                <hr />
                <div className="project-details-1-info-wrap">
                    <h3
                    className="project-details-1-subtitle"
                    style={{ lineHeight: 1.4, color: highlightColor }}
                  >
                    Google Ads
                  </h3>
                  <h3
                    className="project-details-1"
                    style={{
                      color: "white",
                      fontSize: "2.5rem",
                      fontWeight: 700,
                    }}
                  >
                    Performance Marketing
                  </h3>
                  <h3
                    className="project-details-1-subtitle"
                    style={{ color: "lightgray", marginBottom: "20px" }}
                  >
                    SUPER POWERS :-
                  </h3>
                  <div className="project-details-1-info">
                    <span>The Click Conqueror </span>
                    <p>
                      Google Ads Mastery – The capacity to create, implement, and refine precise advertising
                      campaigns that turn each click into measurable success.
                      Having the smarts to analyze trends and make the right moves, this hero
                      dominates the digital arena, converting possibilities into reality.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span> The Conversion Catalyst </span>
                    <p>
                      Conversion Optimization – The aptitude to execute effective strategies to
                      convert traffic into high-value leads and sales.
                      With the elegance of a master alchemist, they turn visitors into
                      loyal customers, forging meaningful journeys that stick.

                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Bid Boss</span>
                    <p>
                      Automated Bidding Excellence – Mastered with bidding strategies
                      that enhance efficiency and reduce expenses.
                      This strategist commands the auction arena, deploying smart
                      bids that outmaneuver rivals and maximize returns.

                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Keyword King </span>
                    <p>
                      Keyword Research & Targeting – Ability to find and leverage the most powerful
                      keywords that are rank worthy.
                      Armed with an arsenal of influence, they use it to unlock the words that open
                      doors and connect your brand to the audience it seeks.

                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Data Dominator</span>
                    <p>
                      Ability to decipher complicated data into meaningful insight that increases with greater
                      campaign performances.
                      With a mind like a supercomputer, they interpret the numbers, revealing paths to success
                      hidden in plain sight.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The ROI Renegade</span>
                    <p>
                      Return on Investment Optimization – The know how to maximize ROI
                      by controlling ad spend and returns with intelligent campaign management.
                      Rebelling against the standards, they go beyond limits and make sure every single penny
                      counts in taking your brand to the next level.

                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Audience Amplifier </span>
                    <p>
                      Remarketing & Audience Targeting – The power of finding, retargeting and building your
                      audience with high accuracy, data-driven campaigns.
                      They tune into the frequencies of consumer behavior and amplify
                      your message, so that it resonates where it matters most.

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

export default GoogleAdsServicePage;
