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
                              <Image src='/assets/img/services/CONTENT.webp' alt="port-img" id="service_img" width={800} height={400} style={{height:"auto"}}/>
                           </div>
                          {/* ))} */}
                        </div>
                     </div>
                     <div className="col-xl-6" onScrollCapture={handleScrollService}>
                     {/* <div className="project-details-1-right-wrap"> */}
                           <div className="project-details-1-right p-relative">
                              <div className="project-details-1-title-box">
                                 <span className="project-details-1-subtitle">Contenteena</span>
                                 <h4 className="project-details-1-title">Copy Writing</h4>
                                 <p>Content creation combines crafting high-quality, SEO-optimized material that engages users and search engines. It drives traffic, builds authority, and enhances trust, using the right mix of keywords, storytelling, and multimedia for digital success.</p>
                              </div>
                              <div className="project-details-1-info-wrap">
                                 <div className="project-details-1-info">
                                    <span>The Wordsmith- </span>
                                    <p>Content-The ability to craft perfect, SEO-optimized content that both humans and search engines love.</p>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>The Content Alchemist- </span>
                                    <p>Content Transformation- The ability to transform basic ideas into gold by turning them into high-value, engaging content.</p>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>The Idea Incubator-</span>
                                    <p> Idea Generation- The power to cultivate endless fresh, innovative, and trending ideas for compelling content.</p>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>The Copy Commander- </span>
                                    <p>Persuasive Writing- The ability to craft persuasive, compelling copy that turns casual readers into loyal followers and buyers.</p>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>The Trend Whisperer-</span>
                                    <p>Trendspotting & Adaptation- The ability to spot emerging trends and adapt them into content quickly, keeping the content fresh and timely.</p>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>The Grammar Guardian-</span>
                                    <p>Error-Free Content- The ability to spot and eliminate any errors or inconsistencies in content, ensuring perfect grammar and clarity</p>
                                 </div>
                                 <div className="project-details-1-info">
                                    <span>Social Butterfly-</span>
                                    <p>Social Media Content Strategy- The ability to create content that thrives on social media platforms, driving viral engagement and shares.</p>
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
