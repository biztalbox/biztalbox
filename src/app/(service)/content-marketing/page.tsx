"use client";
import React from "react";
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

const ContentMarketingPage = () => {
  const highlightColor = "#707a80"; // You can change this color or make it a prop

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      projectDetailsPin();
    }, 100);
    return () => clearTimeout(timer);
  });
  const highlights = [
    "12+ Years of Professional Writing Experience",
    "Compelling Content That Converts",
    "SEO-Friendly & Brand-Aligned Copy",
    "Tailored Messaging for Your Audience",
  ];

  const services = [
    "Website Content",
    "Blog & Article Writing",
    "Product Descriptions",
    "Social Media Captions",
    "Email Campaigns",
    "Press Releases",
    " Ad Copy & Slogans",

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
              imageSrc="/assets/img/services/CONTENT.webp"
              imageAlt="Contenteena Copy Writing"
            >
              <div className="project-details-1-right p-relative">
                <div className="project-details-1-title-box">
                  <h1
                    className="project-details-1-subtitle"
                    style={{ lineHeight: 1.4 }}
                  >
                    Persuasive Copywriting Services to Engage and Convert
                  </h1>
                  <h2
                    className="project-details-1"
                    style={{
                      color: "white",
                      fontSize: "2.2rem",
                      fontWeight: 700,
                    }}
                  >
                    Professional Copywriting Services

                  </h2>
                  <p>
                    Copywriting is a balance between writing good quality, SEO-friendly content that captures both the hearts and clicks of people and search engines. It increases traffic, establishes authority, and fosters trust, with the right combination of keywords, storytelling, and multimedia to drive digital traction.


                    Good copywriters don&apos;t just make things sound pretty — they do the heavy lifting.

                    It is the voice behind a brand, the hook that captures you in an ad, and the warmth that greets you in an email. Copywriters aren&apos;t ust writers, they&apos;re strategists who can spin browsers into buyers. Their words lead, woo, convert. Every sentence on websites, campaigns, social media moves the reader a step closer to action.
                  </p>
                </div>
                <ServiceHighlights color={highlightColor} highlights={highlights} services={services} />
                <hr />
                <div className="project-details-1-info-wrap">
                  <h3
                    className="project-details-1-subtitle"
                    style={{ lineHeight: 1.4, color: highlightColor }}
                  >
                    Contenteena
                  </h3>
                  <h3
                    className="project-details-1"
                    style={{
                      color: "white",
                      fontSize: "2.5rem",
                      fontWeight: 700,
                    }}
                  >
                    Copy Writing
                  </h3>
                  <h3
                    className="project-details-1-subtitle"
                    style={{ color: "lightgray", marginBottom: "20px" }}
                  >
                    SUPER POWERS :-
                  </h3>
                  <div className="project-details-1-info">
                    <span>The Wordsmith- </span>
                    <p>
                      Content –  The skill of writing the perfect, SEO-friendly content that humans and search engines adore.
                      They don&apos;t write content; they calibrate words, tone, cadence and structure to make every word count.
                    </p>
                  </div>

                  <div className="project-details-1-info">
                    <span>The Content Alchemist- </span>
                    <p>
                      Content Transformation – .Ability to excavate gold from the driest of ideas —
                      it&apos;s just a matter of finding the right voice, the right angle, and a little magic.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Idea Incubator-</span>
                    <p>
                      Idea Generation – The ability to create new, trending and ground-breaking ideas for engaging content.
                      They can spin magic from just one keyword or phrase.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Copy Commander- </span>
                    <p>
                      Persuasive Writing – The skill to write persuasive, compelling content that turns
                      lurking readers into fans – and fans into buyers. The weapon is word play, with a personal edge.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Trend Whisperer-</span>
                    <p>
                      Trendspotting & Adaptation –  Trendspotting & Adaptation – The savviness to spot
                      whats&apos;s trending and being able to instantly render it into content that&apos;s smart, fast and just impossible to ignore.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Grammar Guardian-</span>
                    <p>
                      Error-Free Content – The power to remove typos and omissions, rewriting every sentence until it&apos;s free of errors.
                      Proofreading is, after all, a nonnegotiable part of the job — it&apos;s that final layer of polish that makes strong copy shine.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>Social Butterfly-</span>
                    <p>
                      Social Media Content Strategy – The ability to create content that thrives on social media platforms,
                      driving viral engagement and shares. They understand the vibe of each platform, and they tailor content
                      according to their individual rhythm.
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

export default ContentMarketingPage;
