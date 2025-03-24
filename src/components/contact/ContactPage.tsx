"use client";
import { gsap } from "gsap";
import React, { useState } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation } from "@/utils/title-animation";
import ContactLocationTwo from "@/components/contact/contact-location-2";
import ParticleComponent from "@/components/ParticleComponent";
import ContactSection from "./ContactSection";

const ContactPage = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
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
          <div
            className="inner-bg"
            style={{
              backgroundImage:
                "url(/assets/img/home-01/team/team-details-bg.png)",
            }}
          >
            <main>
              {/* hero area start */}
              <div className="ab-inner-hero-area ab-inner-hero-bg p-relative dark-bg partcle_bg">
                <ParticleComponent />
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tm-hero-content">
                        <span className="tm-hero-subtitle">biztalbox</span>
                        <h4 className="tm-hero-title-big tp-char-animation">
                          Get <br /> in touch
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* hero area end */}

              <ContactSection />
              {/* contact area */}
              <div className="cn-contactform-area cn-contactform-style p-relative pb-100">
                <div className="container container-1530"></div>
              </div>
              {/* contact area */}

              {/* about area start */}
              <div className="cn-contactform-support-area mb-120">
                <div className="container container-1530">
                  <div className="row justify-content-center">
                    <div className="col-xl-12">
                      <div
                        className="cn-contactform-support-bg d-flex align-items-center justify-content-center"
                        style={{
                          backgroundImage:
                            "url(/assets/img/inner-contact/contact/contact-bg.png)",
                        }}
                      >
                        <div className="cn-contactform-support-text text-center p-relative">
                          <span
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexWrap: "wrap",
                              flexDirection: "column",
                            }}
                          >
                            Reach out to us through the details below. We&apos;ll
                            respond faster than you can say&nbsp;
                            <span 
                              className="tooltip-text-main" 
                              style={{ cursor: 'pointer' }}
                              onMouseEnter={() => setShowTooltip(true)}
                              onMouseLeave={() => setShowTooltip(false)}
                            >
                              &quot;Hippopotomonstrosesquippedaliophobia&quot;
                            </span>
                            {showTooltip && (
                              <div className="custom-tooltip">
                                Fear of long words
                              </div>
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* about area end */}

              {/* contact location */}
              <ContactLocationTwo />
              {/* contact location */}
            </main>

            {/* footer area */}
            <FooterTwo topCls="" />
            {/* footer area */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactPage;
