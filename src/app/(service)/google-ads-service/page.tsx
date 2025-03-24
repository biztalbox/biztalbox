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

const GoogleAdsServicePage = () => {
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
              imageSrc="/assets/img/services/GOOGLE_ADS.webp"
              imageAlt="Google Ads Performance Marketing"
            >
              <div className="project-details-1-right p-relative">
                <div className="project-details-1-title-box">
                  <span className="project-details-1-subtitle">
                    Google Ads
                  </span>
                  <h4 className="project-details-1-title">
                    Performance Marketing
                  </h4>
                  <p>
                    Google Ads is a versatile tool that makes every click
                    an instant hit. It improves return on investment (ROI)
                    and generates high-value leads through strategic
                    bidding, precise targeting, and smart keyword
                    execution. Its constant optimisation maintains it at
                    the forefront of the digital scene.
                  </p>
                </div>
                <div className="project-details-1-info-wrap">
                  <div className="project-details-1-info">
                    <span>The Click Conqueror </span>
                    <p>
                      Google Ads Mastery- The capacity to create,
                      implement, and refine precise advertising campaigns
                      that turn each click into measurable success.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span> The Conversion Catalyst </span>
                    <p>
                      Conversion Optimization- The aptitude to execute
                      effective strategies to convert traffic into
                      high-value leads and sales.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Bid Boss</span>
                    <p>
                      Automated Bidding Excellence- Mastered with bidding
                      strategies that enhance efficiency and reduce
                      expenses.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Keyword King </span>
                    <p>
                      Keyword Research & Targeting- The abilityto identify
                      and use powerful keywords that dominate search
                      results.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Data Dominator</span>
                    <p>
                      Analytics and Performance Tracking- The aptitude to
                      decode complex data into valuable insights that
                      promote continuous campaign improvement.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The ROI Renegade</span>
                    <p>
                      Return on Investment Optimization- The expertise to
                      maximize profitability by balancing ad spend and
                      returns through strategic campaign management.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Audience Amplifier </span>
                    <p>
                      Remarketing & Audience Targeting- The ability for
                      identifying, retargeting, and expanding your
                      audience through precise, data-driven campaigns.
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

export default GoogleAdsServicePage;
