"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import Link from "next/link";
import Image from "next/image";

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
  slidesPerView: 4,
  loop: true,
  autoplay: false,
  spaceBetween: 60,
  speed: 1000,
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
export default function ServiceThree() {
  return (
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
      <div className="tp-service-4-wrap">
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
      </div>
    </div>
  );
}
