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

const BestSeoAgencyPage = () => {
  const [showSocial, setShowSocial] = React.useState(false);
  // useScrollSmooth();

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
              imageSrc="/assets/img/services/seo.webp"
              imageAlt="Search Engine Optimization"
            >
              <div className="project-details-1-right p-relative">
                <div className="project-details-1-title-box">
                  <span className="project-details-1-subtitle">
                    Seo Sticker
                  </span>
                  <h4 className="project-details-1-title">
                    Search Engine Optimization
                  </h4>
                  <p>
                    SEO is the key to make sure your website stands out
                    digitally. It enhances your website for search
                    engines, resulting in improved ranks and increased
                    visibility. SEO increases traffic, engagement, online
                    authority, and trust through the use of relevant
                    keywords, excellent content, and technical procedures,
                    resulting in digital success.
                  </p>
                </div>
                <div className="project-details-1-info-wrap">
                  <div className="project-details-1-info">
                    <span>Keyword Sight/ Vision/ Radar - </span>
                    <p>
                      The ability to instantly identify the most valuable
                      keywords and search trends, providing a clear path
                      to the top of search engine rankings.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Wordsmith/ Word Master - </span>
                    <p>
                      Content Creation Mastery - The ability to craft
                      perfect, SEO-optimized content that both humans and
                      search engines love.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Link Builder - </span>
                    <p>
                      Backlink Creation - The power to create powerful
                      backlinks that strengthen a website&apos;s reputation and
                      authority.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Rival Finder - </span>
                    <p>
                      Competitor Analysis -The ability to track and
                      uncover everything about a competitor&apos;s SEO
                      strategy.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Data Seer -</span>
                    <p>
                      Analytics Insight - The ability to instantly analyze
                      data and predict future trends to improve
                      performance.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>Speed Force -</span>
                    <p>
                      Speed Optimization - The ability to instantly
                      accelerate a website&apos;s loading speed, ensuring
                      smooth, lightning-fast performance that improves
                      rankings and user experience.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Stayforcer - </span>
                    <p>
                      Bounce Rate Control - The power to keep visitors on
                      the website longer by making it impossible for them
                      to leave.
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

export default BestSeoAgencyPage;
