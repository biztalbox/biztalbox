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

const AnalysisAlgorithmPage = () => {

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
              imageSrc="/assets/img/services/ALGANIX.webp"
              imageAlt="ALGANIX Analysis Algorithm"
            >
              <div className="project-details-1-right p-relative">
                <div className="project-details-1-title-box">
                  <span className="project-details-1-subtitle">
                    ALGANIX
                  </span>
                  <h1 className="project-details-1-title">
                    Analysis-Algorithm
                  </h1>
                  <p>
                    An algorithm is a precision powerhouse that can
                    instantly analyse vast amount of data to find hidden
                    patterns and insights. Armed with adaptive learning
                    and predictive analytics, it is always changing to
                    improve operations and predict future trends. It
                    converts raw information into insightful and useful
                    decisions that encourage success and innovation
                    through dynamic scalability.
                  </p>
                </div>
                <div className="project-details-1-info-wrap">
                  <div className="project-details-1-info">
                    <span>The Efficiency Enforcer </span>
                    <p>
                      Data Processing Speed- The ability to process vast
                      amounts of data at lightning speed while using
                      minimal resources.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Pattern Prophet </span>
                    <p>
                      Pattern Recognition- The remarkable ability to
                      detect hidden patterns and correlations in even the
                      most complex datasets.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Predictive Prodigy </span>
                    <p>
                      Predictive Analytics-The ability to analyse recent
                      as well as past data for forecasting future patterns
                      and results.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Adaptive Analyzer </span>
                    <p>
                      Machine Learning- The ability to continuously learn,
                      evolve, and optimize its own processes based on new
                      data inputs.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Optimization Oracle</span>
                    <p>
                      Process Optimization- The skill for optimising
                      operations and algorithms for optimum efficiency
                      throughout period.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Scalability Sage</span>
                    <p>
                      Dynamic Scaling- The power to effortlessly boost or
                      drop operational capacity in response to evolving
                      requirements.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Data Dynamo </span>
                    <p>
                      Big Data Processing- The capacity to quickly
                      integrate and analyse massive databases,
                      transforming unprocessed data into valuable
                      insights.
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

export default AnalysisAlgorithmPage;
