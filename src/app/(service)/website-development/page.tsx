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
import {charAnimation,titleAnimation} from "@/utils/title-animation";
import FooterFour from "@/layouts/footers/footer-four";
import handleScrollService from "@/utils/handleScrollService";


const PortfolioDetailsOneMain = () => {
  const [showSocial, setShowSocial] = React.useState(false);
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
      <HeaderEleven cls="tp-inner-header-border"/>
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
                              <Image src='/assets/img/services/WEBDEV.webp' alt="port-img" width={800} height={400} style={{height:"auto"}}/>
                           </div>
                          {/* ))} */}
                        </div>
                     </div>
                     <div className="col-xl-6" onScrollCapture={handleScrollService}>
                     {/* <div className="project-details-1-right-wrap"> */}
                           <div className="project-details-1-right p-relative">
                              <div className="project-details-1-title-box">
                                 <span className="project-details-1-subtitle">Web Dev</span>
                                 <h4 className="project-details-1-title">Web Development</h4>
                                 <p>A Web Dev is a digital architect who builds, optimizes, and secures seamless websites. Mastering coding, debugging, and responsive design, they build a dynamic experiences that evolve with the brand. Through wireframing, security, and ongoing maintenance, 
                                    they ensure websites thrive in the digital world. 
                                 </p>
                              </div>
                              <div className="project-details-1-info-wrap">
                                 <div className="project-details-1-info">
                                    <span>The Code Titan-</span>
                                    <p>Mastery of Coding Languages: The ability to easily write, optimize, and debug code in varied programming language, ensuring error-free functionality.</p>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>The Flowmaster- </span>
                                    <p>Flowchart Creation- The ability to ease decision-making 
                                       and user experiences by turning complex structure and procedure into understandable, logical flowcharts.</p>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>The Blueprint Weaver- </span>
                                    <p>Wireframing-The ability to develop precise, intuitive wireframes that lay the perfect foundation for any user interface.</p>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>The Bug Buster- </span>
                                    <p>Bug Fixing and Troubleshooting- The ability to examine, debug, and eliminate issues in the code, ensuring smooth and error-free execution.</p>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>The Security Sentinel-</span>
                                    <p>Website Security- The power to safeguard websites with the highest level of security, shielding them from potential threats and vulnerabilities.</p>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>The Design Shapeshifter-</span>
                                    <p>Dynamic Web Design- The ability to create flexible, adaptable, and dynamic web designs that evolve with the brand’s needs.</p>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>The Mobile Maestro-</span>
                                    <p>Responsive Design- The ability to design websites that automatically adapt and function perfectly across all mobile devices and screen sizes.</p>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>The Maintenance Master- </span>
                                    <p>Ongoing Support & Maintenance- The ability to assure websites run smoothly and are kept up to date with regular maintenance and timely updates.</p>
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
