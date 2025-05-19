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

const AppDevelopmentPage = () => {
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
              imageSrc="/assets/img/services/app_dev.webp"
              imageAlt="App Development"
            >
              <div className="project-details-1-right p-relative">
                <div className="project-details-1-title-box">
                  <span className="project-details-1-subtitle">
                    App Dev
                  </span>
                  <h1 className="project-details-1-title">
                    App Development
                  </h1>
                  <p>
                  An App Developer is a mobile maestro who builds the next killer app and delivers unparalleled performance to keep users coming back for more. It knows all about cross-platform development and  performance optimization. From sleek UI/UX to powerful back-end systems. Your app stays fast, scalable and one step ahead with prototyping, integration, and continuous updates in a mobile-first world.
 
                  </p>
                </div>
                <div className="project-details-1-info-wrap">
                  <div className="project-details-1-info">
                    <span>UI/UX Mastery-</span>
                    <p>
                      Captain Code creates visually appealing, intuitive user interfaces which let users fall in love at first tap.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>Lightning-Fast Loading-</span>
                    <p>
                      Facilitates ultra-fast page load times and smooth interactions even under high pressure.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>Cross-Platform Power-</span>
                    <p>
                      He builds once and conquers both iOS and Android realms—because every user counts.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>API Integration Shield-</span>
                    <p>
                      Connects your app to payment gateways, CRMs, maps, and more for a seamless ecosystem.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>In-App Analytics Vision-</span>
                    <p>
                      Real-time tracking and behavioral insights help you understand your users better than ever.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>Data Security Armor-</span>
                    <p>
                      Trust is ensured with the end to end encryption, secure authentication, and data safety protocols.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>App Store Optimization Force-</span>
                    <p>
                      Improves the visibility and ranking of apps in the app stores through optimized titles, keywords, visuals, and reviews.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>Scalability Strength-</span>
                    <p>
                      Structure code to easily support more users, more features, and future updates without breakdowns.
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

export default AppDevelopmentPage;
