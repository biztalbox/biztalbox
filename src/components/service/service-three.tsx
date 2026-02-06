"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import industriesData from "@/data/industries.json";

// internal imports
import star_icon from "@/assets/img/home-04/service/sv-star-1.png";
import seo from '@/assets/service-icons/seo.webp';
import webdev from '@/assets/service-icons/webdev.webp';
import smm from '@/assets/service-icons/smm.webp';
import appdev from '@/assets/service-icons/appdev.webp';
import graphic from '@/assets/service-icons/graphics.webp';
import motion from '@/assets/service-icons/motion.webp';
import content from '@/assets/service-icons/content.webp';
import googleads from '@/assets/service-icons/googleads.webp';
import meta from '@/assets/service-icons/meta.webp';
import algorithm from '@/assets/service-icons/algorithm.webp';




// slider setting
const slider_setting: SwiperOptions = {
  modules: [Navigation, Pagination, Autoplay],
  slidesPerView: 4,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  spaceBetween: 60,
  speed: 1000,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    "1400": {
      slidesPerView: 4,
    },
    "1200": {
      slidesPerView: 3,
    },
    "992": {
      slidesPerView: 2,
    },
    "768": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "576": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    "0": {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
};
// service data
const service_data = [
  {
    id: 1,
    icon: seo,
    title: "SEO Services",
    desc: "Search Engine Optimization (SEO) is the key to make sure your website stands out digitally. It enhances your website for search engines, resulting in improved ranks and increased visibility.",
    slug:"best-seo-agency"
  },
  {
    id: 2,
    icon: webdev,
    title: "Web development",
    desc: "A Web Development is a digital architect who builds, optimizes, and secures seamless websites.",
    slug: "website-development",
  },
  {
    id: 3,
    icon: smm,
    title: "Social Media Marketing",
    desc: "Social media Marketing is the digital arena where brands connect, captivate, and communicate with their audience.",
    slug: "social-media-marketing"
  },
  {
    id: 4,
    icon: appdev,
    title: "App development",
    desc: "An App Developer is a mobile maestro who builds the next killer app and delivers unparalleled performance to keep users coming back for more.",
    slug: "app-development",
  },
  {
    id: 5,
    icon: graphic,
    title: "Graphic Designing",
    desc: "A graphic designing is a creative force that turns concepts into recognised piece of art.",
    slug: "graphic-designing",

  },
  {
    id: 6,
    icon: motion,
    title: "Video Editing",
    desc: "A video editing is a multimedia guru who turns in raw footage into cinematic masterpieces.",
    slug: "motion-graphics",

  },
  {
    id: 7,
    icon: content,
    title: "Copy Writing",
    desc: "Content creation combines crafting high-quality, SEO-optimized material that engages users and search engines.",
    slug: "content-marketing",
  },
  {
    id: 8,
    icon: googleads,
    title: "Google Ads",
    desc: "Google Ads is a versatile tool that makes every click an instant hit. It improves return on investment (ROI) and generates high-value leads through strategic bidding.",
    slug: "google-ads-service",
  },
  {
    id: 9,
    icon: meta,
    title: "Meta Ads",
    desc: "Throughout its ecosystem, Meta Ads creates visually striking ads with precise targeting, turning it into a digital powerhouse.",
    slug: "facebook-ads-service",
  },
  {
    id: 10,
    icon: algorithm,
    title: "Algorithm Analysis",
    desc: "An algorithm is a precision powerhouse that can instantly analyse vast amount of data to find hidden patterns and insights.",
    slug: "analysis-algorithm",

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
    el: '.industry-mobile-pagination',
    clickable: true,
    bulletClass: 'industry-pagination-bullet',
    bulletActiveClass: 'industry-pagination-bullet-active',
  },
};

export default function ServiceThree({ showService = true, showIndustry = true }: { showService?: boolean, showIndustry?: boolean }) {
  const industrySwiperRef = useRef<SwiperType | null>(null);

  // Add styles for pagination bullets
  useEffect(() => {
    const styleId = 'industry-pagination-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        .industry-pagination-bullet {
          width: 10px !important;
          height: 10px !important;
          background: rgba(255, 255, 255, 0.25) !important;
          border-radius: 50% !important;
          opacity: 1 !important;
          margin: 0 3px !important;
          cursor: pointer !important;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
          position: relative !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
        }
        .industry-pagination-bullet:hover {
          background: rgba(255, 255, 255, 0.4) !important;
          transform: scale(1.2) !important;
        }
        .industry-pagination-bullet-active {
          background: rgba(255, 255, 255, 0.95) !important;
          width: 28px !important;
          height: 10px !important;
          border-radius: 5px !important;
          border-color: rgba(255, 255, 255, 0.3) !important;
          box-shadow: 0 2px 8px rgba(255, 255, 255, 0.3) !important;
        }
        .industry-pagination-bullet-active:hover {
          transform: scale(1.05) !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <section>
      {/* Services */}
      {showService && (
    <div
      className="tp-service-4-area pt-60 pb-120 fix"
      data-background="assets/img/home-04/brand/overly.png"
      style={{ backgroundImage: "url(/assets/img/home-04/brand/overly.png)" }}
    >
      <div className="container">
        <div className="tp-service-4-title-wrap">
          <div className="row align-items-end">
            <div className="col-xl-9 col-lg-9 col-md-9">
              <div className="tp-service-4-title-box">
                <h2 className="tp-service-4-title">
                Digital Marketing Services With Legendary Results
                </h2>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3">
              <div className="tp-service-4-shape-1 text-start text-md-end">
                <Image
                  className="tp-zoom-in-out"
                  src={star_icon}
                  alt="star"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-service-4-wrap position-relative">
        <Swiper
          {...slider_setting}
          className="swiper-container tp-service-4-slider-active"
        >
          {service_data.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className=""
                style={{
                  backgroundImage: "url(/assets/img/home-04/hero/overly.png)",
                  padding: "0 40px 40px 40px"
                }}
              >
                <div className="tp-service-4-icon">
                  <Image src={item.icon} alt="icon" width={200} height={200} />
                </div>
                <div className="tp-service-4-content">
                  <h4 className="tp-service-4-title-sm">
                    <Link href={`/${item.slug}`}>{item.title}</Link>
                  </h4>
                  <p>{item.desc}</p>
                  <Link className="tp-service-4-link" href={`/${item.slug}`}>
                    Explore
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Navigation Buttons */}
        <div className="swiper-button-next tp-service-4-next">
          <i className="fa-light fa-arrow-right"></i>
        </div>
        <div className="swiper-button-prev tp-service-4-prev">
          <i className="fa-light fa-arrow-left" style={{position: "absolute", left: "25px"}}></i>
        </div>
        
        {/* Pagination */}
        {/* <div className="swiper-pagination tp-service-4-pagination"></div> */}
        </div>
      </div>
      )}




    {/* Industry */}
    {showIndustry && (
    <div className="tp-industry-area pt-40 pb-80">
      <div className="container">
        <div className="row align-items-center mb-40">
          <div className="col-xl-12">
            <div className="tp-industry-title-wrapper d-flex align-items-center justify-content-between">
              <h3 className="tp-service-4-title text-white">Industry Served</h3>
              {/* Mobile Navigation Buttons */}
              <div className="industry-title-nav d-flex d-md-none gap-2">
                <button
                  type="button"
                  className="industry-swiper-button-prev industry-mobile-nav-prev"
                  style={{
                    padding: "0",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.12)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    color: "white",
                    fontSize: "14px",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    outline: "none",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                    WebkitTapHighlightColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)";
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.15)";
                  }}
                  onMouseDown={(e) => {
                    e.currentTarget.style.transform = "scale(0.95)";
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onTouchStart={(e) => {
                    e.currentTarget.style.transform = "scale(0.95)";
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
                  }}
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
                  className="industry-swiper-button-next industry-mobile-nav-next"
                  style={{
                    padding: "0",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.12)",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    color: "white",
                    fontSize: "14px",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    outline: "none",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                    WebkitTapHighlightColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)";
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.15)";
                  }}
                  onMouseDown={(e) => {
                    e.currentTarget.style.transform = "scale(0.95)";
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onTouchStart={(e) => {
                    e.currentTarget.style.transform = "scale(0.95)";
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
                  }}
                  onTouchEnd={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
                  }}
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
          </div>
        </div>
        
        {/* Desktop/Tablet Grid - 4 columns x 4 rows (16 items) */}
        <div className="industry-grid-wrapper d-none d-md-block">
          <div className="industry-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            rowGap: '24px'
          }}>
            {industriesData.slice(0, 16).map((industry:any) => (
              <div key={industry.id} className="industry-grid-item">
                <Link href={industry.link} className="industry-card" style={{
                  display: 'block',
                  height: '100%',
                  padding: '10px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                >
                  <div className="industry-card-inner">
                    <h4 className="industry-card-title" style={{
                      color: '#fff',
                      fontSize: '18px',
                      fontWeight: '600',
                      marginBottom: '12px',
                      lineHeight: '1.4'
                    }}>{industry.name}</h4>
                    <p className="industry-card-desc" style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '14px',
                      lineHeight: '1.6',
                      margin: 0,
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden'
                    }}>{industry.description}</p>
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
            {Array.from({ length: Math.ceil(industriesData.length / 4) }, (_, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className="industry-mobile-slide-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '16px'
                }}>
                  {industriesData.slice(slideIndex * 4, slideIndex * 4 + 4).map((industry:any) => (
                    <div key={industry.id} className="industry-mobile-slide-item">
                      <Link href={industry.link} className="industry-card" style={{
                        display: 'block',
                        height: '100%',
                        padding: '10px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none'
                      }}>
                        <div className="industry-card-inner">
                          <h4 className="industry-card-title" style={{
                            color: '#fff',
                            fontSize: '16px',
                            fontWeight: '600',
                            marginBottom: '8px',
                            lineHeight: '1.4'
                          }}>{industry.name}</h4>
                          <p className="industry-card-desc" style={{
                            color: 'rgba(255, 255, 255, 0.7)',
                            fontSize: '13px',
                            lineHeight: '1.5',
                            margin: 0,
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                          }}>{industry.description}</p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Pagination Dots */}
          <div className="industry-mobile-pagination" style={{
            marginTop: '32px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '6px',
            padding: '8px 0',
          }}></div>
        </div>
      </div>
    </div>
    )}
    </section>
  );
}
