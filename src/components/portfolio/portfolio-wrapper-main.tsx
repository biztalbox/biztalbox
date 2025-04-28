"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import ProjectFour from "@/components/project/project-four";
import BigText from "@/components/big-text";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation,titleAnimation } from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";

const PortfolioWrapperMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      projectThreeAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* portfolio hero */}
            <div className="tm-hero-area tm-hero-ptb">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tm-hero-content">
                      <span className="tm-hero-subtitle">biztalbox</span>
                      <h1 className="tm-hero-title tp-char-animation">
                      Digital Marketing Services With Legendary Results
                      </h1>
                    </div>
                    <div className="tm-hero-text">
                      <p className="tp_title_anim">
                      We&apos;re not just another digital marketing agency&mdash;we craft exceptional marketing strategies that work wonders. Scroll down to explore our extensive range of services and discover how we can partner together to take your brand to new heights!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* portfolio hero */}

            {/* portfolio area */}
            <ProjectFour style_2={true}/>
            {/* portfolio area */}

            {/* big text */}
            <BigText />
            {/* big text */}
          </main>

          {/* footer area */}
          <FooterTwo topCls="" />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioWrapperMain;
