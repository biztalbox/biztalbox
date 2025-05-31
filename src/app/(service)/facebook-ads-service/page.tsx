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

const FacebookAdsServicePage = () => {
  const highlightColor = "#b4ffff"; // You can change this color or make it a prop

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      projectDetailsPin();
    }, 100);
    return () => clearTimeout(timer);
  });
  const highlights = [
    "Certified Meta Ads Specialists",
    "100+ Successful Campaigns Delivered",
    "Targeted Ads for Maximum Engagement",
    "Ongoing Optimization for Best Results",

  ];

  const services = [
    "Facebook Ads Campaigns",
    "Instagram Ads Management",
    "Custom Audience Targeting",
    "Creative Ad Design & Copy",
    "Conversion Tracking & Reporting",
    "Budget Management & Scaling",
    "Campaign Performance Analysis",

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
              imageSrc="/assets/img/services/META.webp"
              imageAlt="Meta Ads Facebook & Meta Ads"
            >
              <div className="project-details-1-right p-relative">
                <div className="project-details-1-title-box">
                  <h1
                    className="project-details-1-subtitle"
                    style={{ lineHeight: 1.4 }}
                  >
                    High-Converting Meta Ads Campaigns to Drive Real Results
                  </h1>
                  <h2
                    className="project-details-1"
                    style={{
                      color: "white",
                      fontSize: "2.2rem",
                      fontWeight: 700,
                    }}
                  >
                    Meta Ads Management Agency
                  </h2>
                  <p>
                    Meta Ads redefines digital advertising with visually stunning ads that have a laser-sharp targeting.
                    It&apos;s a performance powerhouse, connecting your brand to the most interested audiences on Facebook and
                    Instagram. Real-time optimization, targeting insights, and creative show-stopping storytelling Meta Ads
                    make an impact with every campaign. From carousel ads to reels, the versatility of formats allows brands
                    to shine in every scroll. From raising awareness to boosting conversions, it makes every ad dollar count—effortlessly
                    blending strategy, creativity, and data into scroll-stopping results. Behind every
                    successful ad is a digital superhero making sure your message hits the bullseye every single time.
                  </p>
                </div>
                <ServiceHighlights color={highlightColor} highlights={highlights} services={services} />
                <hr />
                <div className="project-details-1-info-wrap">
                  <h3
                    className="project-details-1-subtitle"
                    style={{ lineHeight: 1.4, color: highlightColor }}
                  >
                    Meta Ads
                  </h3>
                  <h3
                    className="project-details-1"
                    style={{
                      color: "white",
                      fontSize: "2.5rem",
                      fontWeight: 700,
                    }}
                  >
                    Social Media Ads
                  </h3>
                  <h3
                    className="project-details-1-subtitle"
                    style={{ color: "lightgray", marginBottom: "20px" }}
                  >
                    SUPER POWERS :-
                  </h3>
                  <div className="project-details-1-info">
                    <span>The Meta Maestro </span>
                    <p>
                      Meta Ads Mastery – Ability to make powerful and attractive ad campaigns through
                      Meta&apos;s monster network! Deeply relationship-savvy with audiences and dazzlingly intuitive
                      about the direction of campaign winds, they stage each launch like a symphony — timed, potent, unforgettable.
                      This maestro isn&apos;t chasing clicks, but crafting whole-funnel success narratives.

                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Social Synergist </span>
                    <p>
                      Cross-Platform Integration – The ability to have a consistent and rich voice across all platforms.
                      Like a maestro coordinating all the instruments, they fine-tune your messaging across Facebook and
                      Instagram, so that every message hits the right note, every time.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span> The Targeting Titan</span>
                    <p>
                      Accurate Audience Targeting – Never miss your mark again. The targeting titan doesn&apos;t
                      just find people —they pinpoint the ones that matter the most. They choose the perfect
                      audience and nail them with a laser-focus. They do this by narrowing in based on factors such as age,
                      interests, behavior, similar audiences and ensuring that each campaign
                      is spot on. Every impression is an intentional one, and every click has its price.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span> The Creative Conjurer </span>
                    <p>
                      Creative Strategy –  The power to turn core messages into killer visuals that drive action.
                      Mixing design with psychology, this visual sorcerer&apos;s builds creatives that do more than look good—they convert.
                      Every feature is intentional to convert a passive observer into an active one.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Retargeting Renegade</span>
                    <p>
                      Advanced Retargeting Techniques – The ability to re-engage and bring lost leads back at the perfect time.
                      They rekindle interest, and subtly nudge users back into the conversion path with a combination of great
                      timing and targeted messaging. Second chances aren&apos;t lucky for them — they&apos;re calculated.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Budget Balancer</span>
                    <p>
                      Effective Budgeting – The ability to get the maximum mileage out of each penny.
                      This hero doesn&apos;t overspend, and is one of the most performance-focused as it manages budget and uses smart,
                      efficient bidding strategies. They don&apos;t simply extend the budget — they rise above it.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Engagement Evangelist</span>
                    <p>
                      Audience Interaction Mastery – The art of turning viewers into fans.
                      This hero makes ads that drive actual conversations, incite emotions and provoke sharing.  This Generates
                      interactions that are more than just impressions, and turning passive watchers into fans.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Instant Innovator</span>
                    <p>
                      Real-Time Adaptation –   The power of moving quickly and thinking swiftly.
                      They do so while keeping a close watch on performance metrics and making real-time
                      adjustments to creatives, targeting and copy. Their power is in the ability to keep campaigns fresh, relevant and
                      reactive in the digital world that never stops moving. Always agile, always ahead.
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

export default FacebookAdsServicePage;
