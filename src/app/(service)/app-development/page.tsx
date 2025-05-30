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

const AppDevelopmentPage = () => {
  const highlightColor = "#715a4b"; // You can change this color or make it a prop
  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      projectDetailsPin();
    }, 100);
    return () => clearTimeout(timer);
  });

  const highlights = [
    " 5+ Years of Mobile App Development Experience",
    "100+ Apps Delivered Across Platforms",
    "User-Friendly, High-Performance Apps",
    "Ongoing Support & Updates",

  ];

  const services = [
    "OS App Development",
    "Android App Development",
    "Cross-Platform Apps",
    "UI/UX Design for Apps",
    "App Testing & QA",
    "App Maintenance & Support",
    "App Store Submission & Optimization",
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
              imageSrc="/assets/img/services/app_dev.webp"
              imageAlt="App Development"
            >
              <div className="project-details-1-right p-relative">
                <div className="project-details-1-title-box">
                  <h1
                    className="project-details-1-subtitle"
                    style={{ lineHeight: 1.4 }}
                  >
                    App Dev
                  </h1>
                  <h2
                    className="project-details-1"
                    style={{
                      color: "white",
                      fontSize: "2.2rem",
                      fontWeight: 700,
                    }}
                  >
                    App Development
                  </h2>
                  <p>
                    An App Developer is a mobile maestro who builds the next killer app and d
                    elivers unparalleled performance to keep users coming back for more. It knows all about
                    cross-platform development and performance optimization. From sleek UI/UX to powerful
                    back-end systems. Your app stays fast, scalable and one step
                    ahead with prototyping, integration, and continuous updates in a mobile-first world.

                  </p>
                </div>
                <ServiceHighlights color={highlightColor} highlights={highlights} services={services} />
                <hr />
                <div className="project-details-1-info-wrap">
                  <div className="project-details-1-info">
                    <span>UI/UX Mastery-</span>
                    <p>
                      Captain Code creates visually appealing, intuitive user interfaces
                      which let users fall in love at first tap.
                      He doesn’t design screens — he choreographs journeys. Every
                      micro-interaction has a touch of magic that effortlessly guides users towards success.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>Lightning-Fast Loading-</span>
                    <p>
                      Facilitates ultra-fast page load times and smooth interactions even under high pressure.
                      Speed is not a specification — it is a sensation. And this power means that your users will never
                      have to wait for the next big thing.
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
                      Whether it’s live chat, push notifications, or third-party software,
                      Captain Code ensures it all works together perfectly.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>In-App Analytics Vision-</span>
                    <p>
                      Real-time tracking and behavioral insights help you understand your
                      users better than ever. Because knowing where users click is great,
                      but understanding why they stay is a superpower.

                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>Data Security Armor-</span>
                    <p>
                      Trust is ensured with the end to end encryption, secure authentication, and data
                      safety protocols. The data of your users is protected as
                      if it were in a vault—because privacy isn’t a feature, it’s a guarantee.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>App Store Optimization Force-</span>
                    <p>
                      Improves the visibility and ranking of apps in the app stores
                      through optimized titles, keywords, visuals, and reviews. App store optimization
                      is not just about ranking, it’s about being the chosen one in a sea of clones.

                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>Scalability Strength-</span>
                    <p>
                      Structure code to easily support more users, more features, and future updates without breakdowns.
                      The more you build, the more powerful your app becomes, keeping it in good shape and up to date.
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

export default AppDevelopmentPage;
