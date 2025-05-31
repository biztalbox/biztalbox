"use client";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
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

const AnalysisAlgorithmPage = () => {
  const highlightColor = "#8092a0"; // You can change this color or make it a prop

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      projectDetailsPin();
    }, 100);
    return () => clearTimeout(timer);
  });

  const highlights = [
    "9+ Years of Data Analysis & Algorithm Development",
    "Custom-Built Algorithms for Business Intelligence",
    "Accuracy-Driven, Scalable, and Efficient Solutions",
    "Insights That Power Smarter Decisions",

  ];

  const services = [
    "Forecasting",
    "Optimization",
    "Clustering",
    "Detection",
    "Automation",
    "Insights",
    "Modeling",
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
              imageSrc="/assets/img/services/ALGANIX.webp"
              imageAlt="ALGANIX Analysis Algorithm"
            >
              <div className="project-details-1-right p-relative">
                <div className="project-details-1-title-box">
                  <h1
                    className="project-details-1-subtitle"
                    style={{ lineHeight: 1.4 }}>
                     Data-Driven Algorithm Analysis for Smarter Business Decisions
                  </h1>
                  <h2
                    className="project-details-1"
                    style={{
                      color: "white",
                      fontSize: "2.2rem",
                      fontWeight: 700,
                    }}>
                    Analysis-Algorithm
                  </h2>
                  <p>
                    An algorithm is a quiet power source — a superhero in disguise,
                    that works faster than the blink of an eye It can analyze massive
                    amounts of data at the drop of a hat to unearth hidden patterns and insights.
                    Powered by adaptive learning and predictive analytics, it transforms continuously to
                    optimize equipment and enhance productivity. Whether following changing market trends,
                    understanding audience behavior, or adjusting strategies, it converts raw information into
                    insightful and useful decisions that drive success. In short, its the brains behind the
                    brilliance—constantly learning, improving, and powering up your digital game.

                  </p>
                </div>
                <ServiceHighlights color={highlightColor} highlights={highlights} services={services} />
                <hr />
                <div className="project-details-1-info-wrap">
                  <h3
                    className="project-details-1-subtitle"
                    style={{ lineHeight: 1.4, color: highlightColor }}
                  >
                    ALGANIX
                  </h3>
                  <h3
                    className="project-details-1"
                    style={{
                      color: "white",
                      fontSize: "2.5rem",
                      fontWeight: 700,
                    }}
                  >
                    Analysis-Algorithm
                  </h3>
                  <h3
                    className="project-details-1-subtitle"
                    style={{ color: "lightgray", marginBottom: "20px" }}
                  >
                    SUPER POWERS :-
                  </h3>
                  <div className="project-details-1-info">
                    <span>The Efficiency Enforcer </span>
                    <p>
                      Data Processing Speed – Ability to process huge volume of data at
                      blazing speed with minimum usage of resources. They never rest, never take a
                      break, and make sure you never miss a moment because of lagging.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Pattern Prophet </span>
                    <p>
                      Pattern recognition – he incredible skill of finding hidden patterns or correlations
                      that might not be noticeable at first in messy data.
                      They work as your own private detective, always finding out clues that others overlook.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Predictive Prodigy </span>
                    <p>
                      Predictive Analytics – he capability to analyze both current and
                      historical data to estimate future trends and outcomes. They don&apos;t just react—they anticipate.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Adaptive Analyzer </span>
                    <p>
                      Machine Learning – The ability to continuously learn, evolve, and optimize
                      their own processes based on new data inputs.
                      Like a superhero training daily, they get better with every interaction.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Optimization Oracle</span>
                    <p>
                      Process Optimization – The skill for optimising operations
                      and algorithms for optimum efficiency throughout the period.
                      No wasted energy, no wasted data—only smart, streamlined performance.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Scalability Sage</span>
                    <p>
                      Dynamic Scaling – The power to effortlessly boost or drop operational capacity in response to evolving requirements.
                      Ready to expand at a moment&apos;s notice, just like any true sidekick in action.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Data Dynamo </span>
                    <p>
                      Big Data Processing – The capacity to quickly integrate and analyse massive databases,
                      transforming unprocessed data into valuable insights. They turn overwhelming noise into a clear, actionable game pla
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

export default AnalysisAlgorithmPage;
