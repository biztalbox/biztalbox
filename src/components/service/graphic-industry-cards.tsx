"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { useTheme } from "next-themes";

// Graphic Industry Pages data
const graphicIndustriesData = [
  {
    id: 1,
    name: "Automotive",
    description:
      "Drive engagement with cinematic automotive videos and graphics that showcase vehicles, launches, and brand identity in style.",
    link: "/automotive-video-editing",
  },
  {
    id: 2,
    name: "Beauty & Wellness",
    description:
      "Build beauty and wellness brands online with polished visuals and edited videos that earn customer trust.",
    link: "/beauty-and-wellness-video-editing",
  },
  {
    id: 3,
    name: "Ecommerce",
    description:
      "Turn product visuals into sales-driving assets with ecommerce-focused graphic design and video editing services.",
    link: "/ecommerce-video-editing",
  },
  {
    id: 4,
    name: "Education",
    description:
      "Help schools, colleges, and edtech brands engage students through clear, structured visual communication.",
    link: "/education-video-editing",
  },
  {
    id: 5,
    name: "Food & Beverage",
    description:
      "Make food and beverage brands stand out with appetite-driven graphics, reels, and high-impact video content.",
    link: "/Food-and-Beverage-video-editing",
  },
  {
    id: 6,
    name: "Hospitality",
    description:
      "Turn first impressions into hotel bookings with refined hospitality graphics and immersive property videos.",
    link: "/hospitality-video-editing",
  },
  {
    id: 7,
    name: "Manufacturing",
    description:
      "Communicate scale, precision, and capability through structured manufacturing graphics and factory videos.",
    link: "/manufacturing-video-editing",
  },
  {
    id: 8,
    name: "Pet Care",
    description:
      "Build trust and emotional connection for pet care brands with authentic visuals and storytelling videos.",
    link: "/petcare-video-editing",
  },
  {
    id: 13,
    name: "Plumbing",
    description:
      "Help plumbing businesses build trust with clean branding, repair walkthroughs, and before-after visuals that convert.",
    link: "/plumbing-video-editing",
  },
  {
    id: 9,
    name: "Pharmaceutical",
    description:
      "Strengthen pharma brand credibility with compliance-aware graphics and clear, structured product videos.",
    link: "/Pharmaceutical-video-editing",
  },
  {
    id: 10,
    name: "Real Estate",
    description:
      "Showcase properties with cinematic walkthroughs and clean listing visuals that drive faster buyer decisions.",
    link: "/realestate-video-editing",
  },
  {
    id: 11,
    name: "Roofing",
    description:
      "Build homeowner trust with roofing graphics, before-and-after visuals, and project videos that prove your work quality.",
    link: "/roofing-video-editing",
  },
  {
    id: 14,
    name: "Pest Control",
    description:
      "Help pest control companies build trust with clean branding, treatment walkthroughs, and before-after visuals that feel safe and professional.",
    link: "/pest-control-video-editing",
  },
  {
    id: 15,
    name: "Painting",
    description:
      "Showcase painting transformations with polished graphics and edited project videos that help customers see quality before they hire.",
    link: "/painting-video-editing",
  },
  {
    id: 16,
    name: "Movers & Packers",
    description:
      "Build instant trust for relocation brands with structured graphics, packing walkthroughs, and reassuring behind-the-scenes videos.",
    link: "/packers-movers-video-editing",
  },
  {
    id: 17,
    name: "Logistics",
    description:
      "Present warehouse operations and fleet workflows with professional logistics graphics and videos that strengthen B2B credibility.",
    link: "/logistics-video-editing",
  },
  {
    id: 18,
    name: "Insurance",
    description:
      "Simplify complex insurance communication with clear policy graphics, explainer videos, and branding that builds client confidence online.",
    link: "/insurance-video-editing",
  },
  {
    id: 19,
    name: "HVAC",
    description:
      "Help HVAC businesses look more reliable with consistent branding, installation walkthroughs, and repair videos that reduce customer hesitation.",
    link: "/hvac-video-editing",
  },
  {
    id: 24,
    name: "Healthcare",
    description:
      "Help healthcare providers build patient trust with clear branding, treatment explainers, and calm visual communication that reduces anxiety.",
    link: "/healthcare-video-editing",
  },
  {
    id: 20,
    name: "Home Services",
    description:
      "Build trust before the first visit with home service graphics, before-after visuals, and project videos that feel practical and believable.",
    link: "/home-services-video-editing",
  },
  {
    id: 21,
    name: "Energy & Utilities",
    description:
      "Make technical energy and utility operations easier to understand with structured graphics, facility videos, and investor-ready visuals.",
    link: "/energy-utilities-video-editing",
  },
  {
    id: 22,
    name: "Electricians",
    description:
      "Help electrical businesses look safer to trust online with branded graphics, installation videos, and lighting project showcases.",
    link: "/electricians-video-editing",
  },
  {
    id: 23,
    name: "Construction",
    description:
      "Win more projects with construction graphics, site progress videos, and portfolio visuals that prove execution quality clearly.",
    link: "/construction-video-editing",
  },
  {
    id: 13,
    name: "Travel",
    description:
      "Inspire bookings with travel videos and graphics that create desire long before the journey begins.",
    link: "/travel-video-editing",
  },
];

// Industry carousel settings for mobile - 4 items per slide
const industry_carousel_setting: SwiperOptions = {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,
  speed: 500,
  pagination: {
    el: ".industry-mobile-pagination",
    clickable: true,
    bulletClass: "industry-pagination-bullet",
    bulletActiveClass: "industry-pagination-bullet-active",
  },
};

export default function({
  title = "Graphic Design & Video Editing Industries We Serve",
}: {
  title?: string;
}) {
  const industrySwiperRef = useRef<SwiperType | null>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = mounted && resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  // Add styles for pagination bullets
  useEffect(() => {
    const styleId = "industry-pagination-styles";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        .industry-pagination-bullet {
          width: 10px !important;
          height: 10px !important;
          background: rgba(0, 0, 0, 0.18) !important;
          border-radius: 50% !important;
          opacity: 1 !important;
          margin: 0 3px !important;
          cursor: pointer !important;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
          position: relative !important;
          border: 1px solid rgba(0, 0, 0, 0.14) !important;
        }
        .industry-pagination-bullet:hover {
          background: rgba(0, 0, 0, 0.28) !important;
          transform: scale(1.2) !important;
        }
        .industry-pagination-bullet-active {
          background: rgba(0, 0, 0, 0.78) !important;
          width: 28px !important;
          height: 10px !important;
          border-radius: 5px !important;
          border-color: rgba(0, 0, 0, 0.22) !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18) !important;
        }
        .industry-pagination-bullet-active:hover {
          transform: scale(1.05) !important;
        }

        /* Dark theme overrides (next-themes uses .dark on html) */
        .dark .industry-pagination-bullet {
          background: rgba(255, 255, 255, 0.25) !important;
          border-color: rgba(255, 255, 255, 0.15) !important;
        }
        .dark .industry-pagination-bullet:hover {
          background: rgba(255, 255, 255, 0.4) !important;
        }
        .dark .industry-pagination-bullet-active {
          background: rgba(255, 255, 255, 0.95) !important;
          border-color: rgba(255, 255, 255, 0.3) !important;
          box-shadow: 0 2px 8px rgba(255, 255, 255, 0.3) !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // Theme-adaptive UI for Bootstrap-only pages (no Tailwind required)
  useEffect(() => {
    const styleId = "industry-theme-styles";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        /* Nav buttons */
        .industry-nav-btn {
          padding: 0 !important;
          border-radius: 50% !important;
          width: 36px !important;
          height: 36px !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          cursor: pointer !important;
          transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease !important;
          outline: none !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;
          -webkit-tap-highlight-color: transparent !important;
        }
        .industry-nav-btn:active { transform: scale(0.95) !important; }

        /* Cards */
        .industry-card {
          display: block !important;
          height: 100% !important;
          padding: 10px !important;
          border-radius: 8px !important;
          text-decoration: none !important;
          transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease !important;
          will-change: transform;
        }
        .industry-card:hover { transform: translateY(-4px) !important; }

        /* Light theme (default) */
        [data-video-page], [data-theme="light"] {
          --industry-card-bg: rgba(0, 0, 0, 0.04);
          --industry-card-bg-hover: rgba(0, 0, 0, 0.07);
          --industry-card-border: rgba(0, 0, 0, 0.10);
          --industry-card-border-hover: rgba(0, 0, 0, 0.18);
          --industry-title: #18181b; /* zinc-900 */
          --industry-desc: rgba(24, 24, 27, 0.72);
          --industry-nav-bg: rgba(0, 0, 0, 0.05);
          --industry-nav-bg-hover: rgba(0, 0, 0, 0.10);
          --industry-nav-border: rgba(0, 0, 0, 0.15);
          --industry-nav-border-hover: rgba(0, 0, 0, 0.22);
          --industry-nav-color: #18181b;
        }

        /* Dark theme */
        [data-theme="dark"] {
          --industry-card-bg: rgba(255, 255, 255, 0.05);
          --industry-card-bg-hover: rgba(255, 255, 255, 0.08);
          --industry-card-border: rgba(255, 255, 255, 0.10);
          --industry-card-border-hover: rgba(255, 255, 255, 0.20);
          --industry-title: #ffffff;
          --industry-desc: rgba(255, 255, 255, 0.70);
          --industry-nav-bg: rgba(255, 255, 255, 0.12);
          --industry-nav-bg-hover: rgba(255, 255, 255, 0.20);
          --industry-nav-border: rgba(255, 255, 255, 0.25);
          --industry-nav-border-hover: rgba(255, 255, 255, 0.40);
          --industry-nav-color: #ffffff;
        }

        [data-theme] .industry-nav-btn {
          background: var(--industry-nav-bg) !important;
          border: 1px solid var(--industry-nav-border) !important;
          color: var(--industry-nav-color) !important;
        }
        [data-theme] .industry-nav-btn:hover {
          background: var(--industry-nav-bg-hover) !important;
          border-color: var(--industry-nav-border-hover) !important;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25) !important;
          transform: scale(1.05) !important;
        }

        [data-theme] .industry-card {
          background: var(--industry-card-bg) !important;
          border: 1px solid var(--industry-card-border) !important;
        }
        [data-theme] .industry-card:hover {
          background: var(--industry-card-bg-hover) !important;
          border-color: var(--industry-card-border-hover) !important;
        }
        [data-theme] .industry-card-title { color: var(--industry-title) !important; }
        [data-theme] .industry-card-desc { color: var(--industry-desc) !important; }

        /* Mobile pagination wrapper (Bootstrap-friendly) */
        .industry-mobile-pagination {
          margin-top: 32px !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          gap: 6px !important;
          padding: 8px 0 !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <section>
      <div
        className="tp-industry-area pt-20 pb-20"
        data-theme={isDark ? "dark" : "light"}
      >
        <div className="container">
          <div className="row align-items-center mb-10">
            <div className="col-xl-12">
              <div className="tp-industry-title-wrapper d-flex align-items-center justify-content-between">
                <h2 className={`${isDark ? "text-white" : "text-dark"}`}>
                  {title}
                </h2>
                {/* Mobile Navigation Buttons */}
                <div className="industry-title-nav d-flex d-md-none gap-2">
                  <button
                    type="button"
                    className="industry-nav-btn industry-swiper-button-prev industry-mobile-nav-prev"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (industrySwiperRef.current) {
                        industrySwiperRef.current.slidePrev();
                      }
                    }}
                    aria-label="Previous slide"
                  >
                    <i className="fa-light fa-arrow-left"></i>
                  </button>
                  <button
                    type="button"
                    className="industry-nav-btn industry-swiper-button-next industry-mobile-nav-next"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (industrySwiperRef.current) {
                        industrySwiperRef.current.slideNext();
                      }
                    }}
                    aria-label="Next slide"
                  >
                    <i className="fa-light fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              <hr style={{ width: "100%" }} />
            </div>
          </div>

          {/* Desktop/Tablet Grid - 4 columns */}
          <div className="industry-grid-wrapper d-none d-md-block">
            <div
              className="industry-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "24px",
                rowGap: "24px",
              }}
            >
              {graphicIndustriesData.map((industry) => (
                <div key={industry.id} className="industry-grid-item">
                  <Link href={industry.link} className="industry-card">
                    <div className="industry-card-inner">
                      <h3
                        className="industry-card-title"
                        style={{
                          fontSize: "18px",
                          fontWeight: "600",
                          marginBottom: "12px",
                          lineHeight: "1.4",
                        }}
                      >
                        {industry.name}
                      </h3>
                      <p
                        className="industry-card-desc"
                        style={{
                          fontSize: "14px",
                          lineHeight: "1.6",
                          margin: 0,
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {industry.description}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Carousel - 4 items per slide */}
          <div className="industry-mobile-wrapper d-block d-md-none position-relative">
            <Swiper
              {...industry_carousel_setting}
              className="industry-mobile-swiper"
              onSwiper={(swiper) => {
                industrySwiperRef.current = swiper;
              }}
              onInit={(swiper) => {
                industrySwiperRef.current = swiper;
              }}
            >
              {Array.from(
                { length: Math.ceil(graphicIndustriesData.length / 4) },
                (_, slideIndex) => (
                  <SwiperSlide key={slideIndex}>
                    <div
                      className="industry-mobile-slide-grid"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "16px",
                      }}
                    >
                      {graphicIndustriesData
                        .slice(slideIndex * 4, slideIndex * 4 + 4)
                        .map((industry) => (
                          <div
                            key={industry.id}
                            className="industry-mobile-slide-item"
                          >
                            <Link
                              href={industry.link}
                              className="industry-card"
                            >
                              <div className="industry-card-inner">
                                <h3
                                  className="industry-card-title"
                                  style={{
                                    fontSize: "16px",
                                    fontWeight: "600",
                                    marginBottom: "8px",
                                    lineHeight: "1.4",
                                  }}
                                >
                                  {industry.name}
                                </h3>
                                <p
                                  className="industry-card-desc"
                                  style={{
                                    fontSize: "13px",
                                    lineHeight: "1.5",
                                    margin: 0,
                                    display: "-webkit-box",
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                  }}
                                >
                                  {industry.description}
                                </p>
                              </div>
                            </Link>
                          </div>
                        ))}
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper>

            {/* Pagination Dots */}
            <div className="industry-mobile-pagination" />
          </div>
        </div>
      </div>
    </section>
  );
}
