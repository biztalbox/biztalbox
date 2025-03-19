"use client";
import { gsap } from "gsap";
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import { projectDetailsPin } from "@/utils/project-anim";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import FooterFour from "@/layouts/footers/footer-four";
import handleScrollService from "@/utils/handleScrollService";

const PortfolioDetailsOneMain = () => {
  useScrollSmooth();

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
            <div className="project-details-1-area project-details-1-pt">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-xl-6">
                    <div className="project-details-1-left">
                      {/* {port_images.map((imgSrc, i) => ( */}
                      <div className="project-details-1-thumb mb-10">
                        <Image
                          src="/assets/img/services/META.webp"
                          alt="port-img"
                          width={800}
                          height={400}
                          style={{ height: "auto" }}
                        />
                      </div>
                      {/* ))} */}
                    </div>
                  </div>
                  <div className="col-xl-6" onScrollCapture={handleScrollService}>
                    {/* <div className="project-details-1-right-wrap"> */}
                    <div className="project-details-1-right p-relative">
                      <div className="project-details-1-title-box">
                        <span className="project-details-1-subtitle">
                          Meta Ads
                        </span>
                        <h4 className="project-details-1-title">
                          Facebook & Meta Ads
                        </h4>
                        <p>
                          Throughout its ecosystem, Meta Ads creates visually
                          striking ads with precise targeting, turning it into a
                          digital powerhouse. It ensures that your brand is
                          persistent by integrating messaging across social
                          media platforms like Facebook and Instagram. Meta Ads
                          optimises each ad dollar while boosting engagement and
                          conversions with real-time optimisation.
                        </p>
                      </div>
                      <div className="project-details-1-info-wrap">
                        <div className="project-details-1-info">
                          <span>The Meta Maestro </span>
                          <p>
                            Meta Ads Mastery- The ability to plan and carry out
                            strategically accurate and aesthetically appealing
                            advertising campaigns within Meta&apos;s ecosystem.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span>The Social Synergist </span>
                          <p>
                            Cross-Platform Integration-The power to balance
                            messaging across several social media platforms and
                            effectively integrate Meta ad campaigns into a
                            larger digital ecosystem.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span> The Targeting Titan</span>
                          <p>
                            Precision Audience Targeting- Exhibiting laser-like
                            accuracy in identifying and interacting with the
                            ideal audience together.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span> The Creative Conjurer </span>
                          <p>
                            Innovative Creative Strategy- The potential for
                            transforming brand messages into dynamic,
                            eye-catching ad.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span>The Retargeting Renegade</span>
                          <p>
                            Advanced Retargeting Techniques-The competence to
                            re-engage visitors and convert their initial
                            interest into persistent conversions.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span>The Budget Balancer</span>
                          <p>
                            Efficient Budget Management- The art of maximising
                            performance while minimising expenses through ad
                            spend planning.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span>The Engagement Evangelist</span>
                          <p>
                            Audience Interaction Mastery- The power to create
                            advertisements that not only grab viewers attention
                            but also encourage continued engagement, creating an
                            engaging discussion with them.
                          </p>
                        </div>
                        <div className="project-details-1-info">
                          <span>The Instant Innovator</span>
                          <p>
                            Real-Time Adaptation- The ability to quickly modify
                            and improve ad elements in response to real-time
                            data and shifts in the market.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
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

export default PortfolioDetailsOneMain;
