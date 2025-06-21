"use client";
import React, { useEffect, useMemo, useCallback } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
// import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import { projectDetailsPin } from "@/utils/project-anim";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import FooterFour from "@/layouts/footers/footer-four";
import ScrollPinImage from "@/components/ScrollPinImage";
import ServiceHighlights from "@/components/ashish/ServiceHighlights";
import { faq_data, powers, servicesData } from "./data";

const GraphicDesigningPage = () => {
  const [activePower, setActivePower] = React.useState<number | null>(1);
  const highlightColor = "#a2c9e2"; // You can change this color or make it a prop

  // Memoize RGB values to prevent repeated parsing
  const colorRGB = useMemo(() => {
    const r = parseInt(highlightColor.slice(1, 3), 16);
    const g = parseInt(highlightColor.slice(3, 5), 16);
    const b = parseInt(highlightColor.slice(5, 7), 16);
    return { r, g, b };
  }, [highlightColor]);

  // Memoize highlights array to prevent unnecessary re-renders
  const highlights = useMemo(() => [
    "7+ Years of Creative Design Experience",
    "500+ Projects for Brands Worldwide",
    "Brand-Focused, Eye-Catching Designs",
    "Unlimited Revisions Until You're Happy",
  ], []);

  // Memoize active power data to avoid repeated array searches
  const activePowerData = useMemo(() => {
    return activePower ? powers.find(p => p.id === activePower) : null;
  }, [activePower]);

  // Memoize power click handler
  const handlePowerClick = useCallback((powerId: number) => {
    setActivePower(activePower === powerId ? null : powerId);
  }, [activePower]);

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
                  <div className="super-powers-section mt-40">
                  <h3
                      className="super-powers-title"
                    style={{
                        color: highlightColor,
                        fontSize: "1.4rem",
                      fontWeight: 700,
                        marginBottom: "20px",
                        letterSpacing: "2px",
                        textTransform: "uppercase"
                    }}
                  >
                    SUPER POWERS
                  </h3>
                    
                    {/* Compact Power Pills */}
                    <div className="powers-pills-container">
                      {powers.map((power) => (
                        <button
                          key={power.id}
                          className={`power-pill ${activePower === power.id ? 'active' : ''}`}
                          onClick={() => handlePowerClick(power.id)}
                        >
                          <span className="power-pill-name">{power.name}</span>
                        </button>
                      ))}
                  </div>

                    {/* Active Power Description */}
                    {activePowerData && (
                      <div className="active-power-description">
                        <div className="description-content">
                          <h4 className="description-title">
                            {activePowerData.name}
                          </h4>
                          <p className="description-text">
                            {activePowerData.description}
                    </p>
                  </div>
                  </div>
                    )}
                  </div>
                </div>
                <ServiceHighlights faq_data={faq_data} color={highlightColor} highlights={highlights} servicesData={servicesData} />
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

        /* Super Powers Styles */
        .super-powers-section {
          margin-top: 30px;
        }

        .powers-pills-container {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 20px;
        }

        .power-pill {
          display: inline-flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.08);
          border: 2px solid rgba(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}, 0.4);
          border-radius: 50px;
          padding: 8px 16px;
          color: #e0e0e0;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          white-space: nowrap;
        }

        .power-pill:hover {
          background: rgba(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}, 0.15);
          border-color: ${highlightColor};
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}, 0.3);
        }

        .power-pill.active {
          background: ${highlightColor};
          border-color: ${highlightColor};
          color: #000;
          font-weight: 600;
        }

        .power-pill-name {
          font-size: 0.85rem;
          letter-spacing: 0.5px;
        }

        .active-power-description {
          margin-top: 20px;
          padding: 20px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.04));
          border: 1px solid rgba(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}, 0.3);
          border-radius: 15px;
          backdrop-filter: blur(10px);
          animation: slideDown 0.3s ease;
        }

        .description-content {
          max-width: 100%;
        }

        .description-title {
          color: ${highlightColor};
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .description-text {
          color: #e0e0e0;
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
            max-height: 0;
          }
          to {
            opacity: 1;
            transform: translateY(0);
            max-height: 300px;
          }
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .powers-pills-container {
            gap: 8px;
          }
          
          .power-pill {
            padding: 6px 12px;
            font-size: 0.8rem;
          }
          
          .power-pill-name {
            font-size: 0.75rem;
          }

          .description-title {
            font-size: 1.1rem;
          }

          .description-text {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </Wrapper>
  );
};

export default GraphicDesigningPage;
