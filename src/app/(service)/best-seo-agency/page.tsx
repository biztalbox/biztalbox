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

const BestSeoAgencyPage = () => {
  const [showSocial, setShowSocial] = React.useState(false);
  const highlightColor = "#6BCAB3"; // You can change this color or make it a prop

  // useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      projectDetailsPin();
    }, 100);
    return () => clearTimeout(timer);
  });

  const highlights = [
    "10+ Years of SEO Experience",
    "150+ Happy Clients Across the Globe",
    "100% Transparent Reporting",
    "ROI-Focused Strategies",
  ];
  
  const services = [
    "Technical SEO",
    "Content Optimization",
    "E-commerce SEO",
    "Local SEO",
    "B2B SEO",
    "Enterprise SEO",
    "White Label SEO",
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
              imageSrc="/assets/img/services/seo.webp"
              imageAlt="Search Engine Optimization"
            >
              <div className="project-details-1-right p-relative">
                <div className="project-details-1-title-box">
                  <h1
                    className="project-details-1-subtitle"
                    style={{ lineHeight: 1.4 }}
                  >
                    Skyrocket Your Business with Premium SEO Services That
                    Deliver Results
                  </h1>
                  <h2
                    className="project-details-1"
                    style={{
                      color: "white",
                      fontSize: "2.2rem",
                      fontWeight: 700,
                    }}
                  >Best SEO Agency
                  </h2>
                  <p>
                    SEO is the key to make sure your website stands out
                    digitally. It enhances your website for search engines,
                    resulting in improved ranks and increased visibility. SEO
                    increases traffic, engagement, online authority, and trust
                    through the use of relevant keywords, excellent content, and
                    technical procedures, resulting in digital success.
                  </p>
                </div>
                <ServiceHighlights color={highlightColor} highlights={highlights} services={services} />
                <hr />
                <div className="project-details-1-info-wrap mt-40">
                  <h3
                    className="project-details-1-subtitle"
                    style={{ lineHeight: 1.4, color: highlightColor }}
                  >
                    SEO STRICKER
                  </h3>
                  <h3
                    className="project-details-1"
                    style={{
                      color: "white",
                      fontSize: "2.5rem",
                      fontWeight: 700,
                    }}
                  >
                    Search Engine Optimization
                  </h3>
                  <h3
                    className="project-details-1-subtitle"
                    style={{ color: "lightgray", marginBottom: "20px" }}
                  >
                    SUPER POWERS :-
                  </h3>
                  <div className="project-details-1-info">
                    <span>Keyword Sight/ Vision/ Radar - </span>
                    <p>
                      The power to instantly pinpoint the best keywords and
                      search trends that can help your story hit the top of the
                      search engines. It is like being equipped with
                      night-vision on a foggy battleground: being able to see in
                      the dark while the enemy is blindsided.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Wordsmith/ Word Master - </span>
                    <p>
                      Content Creation Mastery– The ability to craft perfect,
                      SEO-optimized content that both humans and search engines
                      love. Each sentence is thrown together deliberately –
                      intended to rank and to resonate.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Link Builder - </span>
                    <p>
                      Backlink Creation – The power to create powerful backlinks
                      that strengthen a website&apos;s reputation and authority.
                      These links are a form of digital endorsements— they raise
                      your site&apos;s credibility in the eyes of both users and
                      algorithms.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Rival Finder - </span>
                    <p>
                      Competitor Analysis – It makes it easy to monitor and
                      discover everything about your competitor&apos;s SEO
                      strategy. For knowing what your opponent will do next is
                      the first step to staying 10 steps ahead of them.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Data Seer -</span>
                    <p>
                      Analytics Insight – The power to analyse data instantly
                      and forecast the future to make better decisions.
                      Translating numbers into narratives; insights into impact.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>Speed Force -</span>
                    <p>
                      Speed Optimization – The ability to instantly accelerate a
                      website&apos;s loading speed, ensuring smooth,
                      lightning-fast performance that improves rankings and user
                      experience. Because in the digital world, time is of the
                      essence — and no one waits.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Stayforcer - </span>
                    <p>
                      Bounce Rate Control – The power to keep visitors on the
                      website longer by making it impossible for them to leave.
                      It&apos;s storytelling meets strategy—grabbing attention
                      and holding it with experiences that feel too good to
                      leave.
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

export default BestSeoAgencyPage;
