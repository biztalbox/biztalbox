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

const PortfolioDetailsOneMain = () => {
  // useScrollSmooth();
  const highlightColor = "#a2c9e2"; // You can change this color or make it a prop

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      projectDetailsPin();
    }, 100);
    return () => clearTimeout(timer);
  });
  const highlights = [
    " 7+ Years of Creative Design Experience",
    "500+ Projects for Brands Worldwide",
    "Brand-Focused, Eye-Catching Designs",
    "Unlimited Revisions Until You’re Happy",
  ];

  const services = [
    "Logos",
    "Social Media Creatives",
    "Brochures & Flyers",
    "Business Cards",
    "Posters & Banners",
    "Packaging Design",
    "Brand Identity",
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
              imageSrc="/assets/img/services/VECTOR.webp"
              imageAlt="Vector Graphic Designing"
            >
              <div className="project-details-1-right p-relative">
                <div className="project-details-1-title-box">
                  <h1
                    className="project-details-1-subtitle"
                    style={{ lineHeight: 1.4 }}
                  >
                    Professional Graphic Design Services That Make You Stand Out
                  </h1>
                  <h2
                    className="project-details-1"
                    style={{
                      color: "white",
                      fontSize: "2.2rem",
                      fontWeight: 700,
                    }}
                  >
                    Top Graphic Designer Company

                  </h2>
                  <p>
                    A graphic designer is an individual who is responsible for the transformation of ideas into
                    distinctive visual stories. Having a solid grasp of color, typography and layout, they develop
                    brand identities that pop and demand that consumers take action. Every design is created with
                    creativity and attention to detail, rendered into powerful visual storytelling that speaks quality
                    and intention. By blending artistry and craft, they combine vision and execution, leaving an
                    indelible mark wherever their work appears. From logos or full-on campaigns, everything they they create
                    shapes how a brand will be perceived by the world.

                  </p>
                </div>
                <ServiceHighlights color={highlightColor} highlights={highlights} services={services} />
                <hr />
                <div className="project-details-1-info-wrap">
                  <h3
                    className="project-details-1-subtitle"
                    style={{ lineHeight: 1.4, color: highlightColor }}
                  >
                    Vector
                  </h3>
                  <h3
                    className="project-details-1"
                    style={{
                      color: "white",
                      fontSize: "2.5rem",
                      fontWeight: 700,
                    }}
                  >
                    Graphic Designing
                  </h3>
                  <h3
                    className="project-details-1-subtitle"
                    style={{ color: "lightgray", marginBottom: "20px" }}
                  >
                    SUPER POWERS :-
                  </h3>
                  <div className="project-details-1-info">
                    <span>The Design Dynamo-</span>
                    <p>
                      Creativity Unleashed – The ability to generate innovative design concepts that captivate and inspire.
                      From wild brainstorming to refined execution, their creativity knows no bounds.
                    </p>
                  </div>

                  <div className="project-details-1-info">
                    <span>The Color Conductor- </span>
                    <p>
                      Mastery of Color Theory – The skill to create expressive and coordinated
                      colour schemes that enhance the personality of the brand. They have the ability to evoke
                      on, mood and meaning through colors.

                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Typography Titan - </span>
                    <p>
                      Font Mastery –   Every letter is carefully built to convey fresh, powerful messages.
                      This font warrior understands the use of the right font. With genius control over
                      everything from kerning and leading to font pairing, they sculpt words into
                      experiences. Every letter is carefully built to convey fresh, powerful messages.

                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Balance Bringer- </span>
                    <p>
                      Layout and Composition – The hero subtly organizes and places elements keeping the visual
                      importance in mind. Each layout they create is seamless and easy to follow, guiding the
                      viewer&apos;s eye naturally from one element to the next.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Branding Beast-</span>
                    <p>
                      Brand Identity Design- The talent to craft compelling visual identities that encapsulate the essence of a brand.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Visual Virtuoso-</span>
                    <p>
                      Digital Illustration & Image Editing –
                      The ability to transform ordinary visuals into extraordinary
                      works of art through expert editing and creative illustration.
                      Every image gets a touch of magic and mastery.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Idea Igniter- </span>
                    <p>
                      Creative Ideation – The power to spark endless creative ideas from the simplest brief, transforming
                      concepts into visual masterpieces.
                      No idea is too small—they turn sparks into full-blown flames of inspiration.
                    </p>
                  </div>
                  <div className="project-details-1-info">
                    <span>The Resolution Rescuer </span>
                    <p>
                      Image Quality Mastery –  Using restoration tricks and upscaling tools,
                      this hero brings outdated, grainy footage back to life with razor-sharp detail.
                      A lack of coherence in visuals doesn’t just look bad — it loses strength.
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

export default PortfolioDetailsOneMain;
