"use client";
import { gsap } from "gsap";
import React, { useEffect, useState } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import ServiceThree from "@/components/service/service-three";
import LineTextTwo from "@/components/line-text/line-text-2";
import BrandTwo from "@/components/brand/brand-two";
import FooterThree from "@/layouts/footers/footer-three";
import shape from "@/assets/img/home-04/about/about-shape-2.png";
import shape_2 from "@/assets/img/home-04/about/about-shape-1.png";
import hero_star from "@/assets/img/home-04/hero/hero-star.png";
import hero_star_2 from "@/assets/img/home-04/hero/hero-star-2.png";
import shape_1 from "@/assets/img/home-01/team/team-details-shape-1.png";
import team_shape_2 from "@/assets/img/home-01/team/team-details-shape-2.png";

// animation
import {
  bounceAnimation,
  charAnimation,
  fadeAnimation,
  revelAnimationTwo,
} from "@/utils/title-animation";
import { serviceMarqueAnim } from "@/utils/scroll-marque";
import { panelTwoAnimation } from "@/utils/panel-animation";
import { hoverBtn } from "@/utils/hover-btn";
import HeaderEleven from "@/layouts/headers/header-eleven";
import StudioPanelFour from "@/components/studio-panels/studio-panel-4";
import Image from "next/image";
import LeadForm from "@/components/landingPage/LeadForm";
import BookCallForm from "@/components/landingPage/BookCallForm";
import faq_banner from "@/assets/image/faq.webp";
import FaqItem from "@/components/faq/faq-item";
import { faq_data } from "./data";
import { testimonial } from "./data";

export default function Page() {
  useScrollSmooth();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      fadeAnimation();
      serviceMarqueAnim();
      panelTwoAnimation();
      revelAnimationTwo();
      hoverBtn();
      bounceAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setIsMobile(isMobile);
  }, []);

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven transparent={true} />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main style={{overflow: "hidden"}}>
            
            {/* hero area start */}
            <div className="tp-hero-4-area tp-btn-trigger">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-hero-4-content-wrap">
                      <div className="p-relative">
                        <div
                          className="tp-hero-4-content p-relative col-md-9"
                          style={{ marginBottom: "0" }}
                        >
                          <h1 className="text-white tp-char-animation">
                          Fort Collins Professional SEO Services – Drive Traffic & Boost Sales
                          </h1>
                          <p>
                          Fort Collins, a city of craft breweries, outdoor recreation, and growing tech and manufacturing sectors, is a place where local businesses battle for visibility both in town and online. In this crowded marketplace, it is no longer sufficient to have a website—your business must be found when residents in your region, B2B purchasers, or SaaS purchasers are looking for your services or products.
                          </p>
                          <p>
                          As a leading SEO Agency Fort Collins, Biztalbox helps companies gain the visibility they need to grow. Whether you&apos;re a manufacturer, a SaaS provider, or a local service business, our SEO Services Fort Collins deliver measurable results.
                          </p>
                          <div className="tp-hero-4-text tp_fade_right">
                            <span>
                              <Image
                                className="tp-zoom-in-out"
                                src={hero_star}
                                alt="star"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="tp-hero-4-achievement tp-btn-bounce d-none d-md-block">
                          <div className="tp-hero-4-star-1">
                            <Image
                              className="tp-zoom-in-out"
                              src={hero_star_2}
                              alt="star"
                            />
                          </div>
                          <div className="tp-hero-4-star-2">
                            <Image
                              className="tp-zoom-in-out-2"
                              src={hero_star_2}
                              alt="star"
                            />
                          </div>
                          <span>
                            <i
                              data-purecounter-duration="1"
                              data-purecounter-end="18"
                              className="purecounter"
                            >
                              5
                            </i>
                            k+
                          </span>
                          <p>
                            Projects completed <br /> successfully
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* hero area end */}

            {/* CTA */}
            <div className="p-relative pt-80">
              <div className="tm-details-shape-1">
                <Image src={shape_1} alt="shape" />
              </div>
              <div className="tm-details-shape-2">
                <Image src={team_shape_2} alt="shape" />
              </div>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6 col-md-7">
                    <div
                      className="tm-details-content-wrap z-index-5"
                      style={{ padding: "30px 0" }}
                    >
                      <div className="tm-details-title-box mb-20">
                        <span className="tm-hero-subtitle">
                          Ready to Grow Your Business in
                        </span>
                        <h4 className="tm-details-title">Fort Collins?</h4>
                      </div>
                      <div className="tm-details-text">
                        <p>
                          Your customers are searching — make sure they find you first. Partner with Biztalbox, the SEO Consultant Fort Collins businesses trust, and start driving real results. Contact us today for a free consultation.
                        </p>
                      </div>
                      <div className="tm-details-portfolio">
                        <span className="tm-details-social-title">
                          Get in Touch:
                        </span>
                        <a href="tel:+919485699709">+91 9485699709</a>
                        <a href="mailto:info@biztalbox.com">
                          info@biztalbox.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <LeadForm />
                </div>
              </div>
            </div>

            {/* Clients */}
            <StudioPanelFour testimonials={testimonial} style_2={true} />

            {/* Book a free callback */}
            <BookCallForm />

            <div
              className="tp-overlay-bg black-bg-2"
              style={{
                backgroundImage: "url(/assets/img/home-04/hero/overly.png)",
              }}
            >
              <BrandTwo />

              {/* Benefits */}
              <div
                className="tm-details-wrapper p-relative pt-80 pb-80"
                style={{ height: "auto" }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-xl-7 col-lg-7">
                      <div className="service-details__left-wrap">
                        <div className="tm-details-title-box mb-20">
                          <h3 className="text-white">
                           Benefits of SEO Services in Fort Collins

                          </h3>
                          <h2 className="tm-details-title">Fort Collins</h2>
                        </div>
                        <div className="service-details__fea-list">
                          <ul>
                            <li>
                            More Online Visibility – Get found when Fort Collins customers and partners search for your product or service.
                            </li>
                            <li>
                           Industry-Niche Strategies – Whether you need a manufacturing SEO agency Fort Collins or SaaS SEO services Fort Collins, we customize campaigns to your niche.
                            </li>
                            <li>
                            Enhanced User Experience – Fast, user-friendly websites engage users and improve conversions.
                            </li>
                            <li>
                            Sustained Growth – SEO establishes long-term outcomes, providing quantifiable ROI that cannot be obtained from short-term advertisements.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                      <div style={{ height: "500px", overflow: "hidden" }}>
                        <video
                        className="videoby_ashish"
                          src="https://res.cloudinary.com/djoiovkr1/video/upload/SEO_Stricker_2_aqk6qd.webm"
                          autoPlay
                          loop
                          muted
                        ></video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why choose us */}
              <div className="tp-about-4-area pt-100 pb-110 p-relative">
                <div className="tp-about-4-shape-2">
                  <Image className="tp-zoom-in-out" src={shape} alt="shape" />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-10 col-md-10">
                      <div
                        className={`tp-about-4-title-box ${
                          !isMobile ? "tp_fade_bottom" : ""
                        }`}
                      >
                        <h4 className="tp-about-4-title">
                        Why Choose Our SEO Services in Fort Collins
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-xl-3 col-lg-2 col-md-3">
                      <div className="tp-about-4-shape-1">
                        <Image src={shape_2} alt="shape-2" />
                      </div>
                    </div>
                    <div className="col-xl-9 col-lg-10 col-md-9">
                      <div className="tp-about-4-content-wrap">
                        <div className="row">
                          <div className="col-xl-6 col-lg-6">
                            <div
                              className={`tp-about-4-content item-1 ${
                                !isMobile ? "tp_fade_bottom" : ""
                              }`}
                            >
                              <h4 className="text-white">Local Knowledge</h4>
                              <p>
                               We know what drives business in Fort Collins, from tech startups to manufacturing firms
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div
                              className={`tp-about-4-content item-2 ${
                                !isMobile ? "tp_fade_bottom" : ""
                              }`}
                            >
                              <h4 className="text-white">Custom Campaigns</h4>
                              <p>
                                  Every strategy is tailored to your market and goals, never used templates.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-30">
                          <div className="col-xl-6 col-lg-6">
                            <div
                              className={`tp-about-4-content item-1 ${
                                !isMobile ? "tp_fade_bottom" : ""
                              }`}
                            >
                              <h4 className="text-white">Proven Experience</h4>
                              <p>
                                  As experienced SEO Experts Fort Collins, we&apos;ve worked with businesses to boost rankings, generate leads, and build revenue.
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div
                              className={`tp-about-4-content item-2 ${
                                !isMobile ? "tp_fade_bottom" : ""
                              }`}
                            >
                              <h4 className="text-white">White-Hat Techniques</h4>
                              <p>
                                We use white-hat SEO methods to guard your brand and deliver long-term success.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-relative pt-80">
              <div className="tm-details-shape-1">
                <Image src={shape_1} alt="shape" />
              </div>
              <div className="tm-details-shape-2">
                <Image src={team_shape_2} alt="shape" />
              </div>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6 col-md-7">
                    <div
                      className="tm-details-content-wrap z-index-5"
                      style={{ padding: "30px 0" }}
                    >
                      <div className="tm-details-title-box mb-20">
                        <span className="tm-hero-subtitle">
                          Ready to Grow Your Business in
                        </span>
                        <h4 className="tm-details-title">Fort Collins?</h4>
                      </div>
                      <div className="tm-details-text">
                        <p>
                          Your customers are searching — make sure they find you first. Partner with Biztalbox, the SEO Consultant Fort Collins businesses trust, and start driving real results. Contact us today for a free consultation.
                        </p>
                      </div>
                      <div className="tm-details-portfolio">
                        <span className="tm-details-social-title">
                          Get in Touch:
                        </span>
                        <a href="tel:+919485699709">+91 9485699709</a>
                        <a href="mailto:info@biztalbox.com">
                          info@biztalbox.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <LeadForm />
                </div>
              </div>
            </div>

            {/* service area start */}
            <ServiceThree />

            {/* How We Work*/}
            <LineTextTwo title="Our SEO Process" />
            <div className="tp-about-4-area pt-100 pb-110 p-relative">
              <div className="tp-about-4-shape-2">
                <Image className="tp-zoom-in-out" src={shape} alt="shape" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-10 col-md-10">
                    <div
                      className={`tp-about-4-title-box ${
                        !isMobile ? "tp_fade_bottom" : ""
                      }`}
                    >
                      <h3 className="tp-about-4-title">
                      How Our SEO Services in Fort Collins Work
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-2 col-md-2">
                    <div className="tp-about-4-shape-1">
                      <Image src={shape_2} alt="shape-2" />
                    </div>
                  </div>
                  <div className="col-xl-10 col-lg-10 col-md-10">
                    <div className="tp-about-4-content-wrap">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6">
                          <div
                            className={`tp-about-4-content item-1 ${
                              !isMobile ? "tp_fade_bottom" : ""
                            }`}
                          >
                            <h4 className="text-white">
                              Website Audit & Analysis 
                            </h4>
                            <p>
                               Our Fort Collins SEO Consultants examine your website for technical issues, loading speed, and missed chances that can slow you down.
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div
                            className={`tp-about-4-content item-2 ${
                              !isMobile ? "tp_fade_bottom" : ""
                            }`}
                          >
                            <h4 className="text-white">
                             Keyword Research with Local Sensing
                            </h4>
                            <p>
                               We identify the exact words that Fort Collins consumers, B2B buyers, and SaaS individuals search for, so your company can be discovered where it matters most.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-30">
                        <div className="col-xl-6 col-lg-6">
                          <div
                            className={`tp-about-4-content item-1 ${
                              !isMobile ? "tp_fade_bottom" : ""
                            }`}
                          >
                            <h4 className="text-white">On-Page Optimization</h4>
                            <p>
                              Right from meta tags and titles to site structure and content flow, our SEO Experts Fort Collins make your website simple and clear
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div
                            className={`tp-about-4-content item-2 ${
                              !isMobile ? "tp_fade_bottom" : ""
                            }`}
                          >
                            <h4 className="text-white">
                             Authority Building & Backlinks
                            </h4>
                            <p>
                               Being a trustworthy SEO Company Fort Collins, we build high-quality backlinks that increase credibility in your market.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-30">
                        <div className="col-xl-6 col-lg-6">
                          <div
                            className={`tp-about-4-content item-1 ${
                              !isMobile ? "tp_fade_bottom" : ""
                            }`}
                          >
                            <h4 className="text-white">Local & Industry-Specific SEO </h4>
                            <p>
                                From appearing on Google Maps to becoming the go-to supplier in manufacturing or SaaS, we tailor strategies to your industry.
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div
                            className={`tp-about-4-content item-1 ${
                              !isMobile ? "tp_fade_bottom" : ""
                            }`}
                          >
                            <h4 className="text-white">Transparent Reporting</h4>
                            <p>
                               You&apos;ll see transparent updates proving improvement in rankings, leads, and conversions.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-relative pt-80">
              <div className="tm-details-shape-1">
                <Image src={shape_1} alt="shape" />
              </div>
              <div className="tm-details-shape-2">
                <Image src={team_shape_2} alt="shape" />
              </div>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6 col-md-7">
                    <div
                      className="tm-details-content-wrap z-index-5"
                      style={{ padding: "30px 0" }}
                    >
                      <div className="tm-details-title-box mb-20">
                        <span className="tm-hero-subtitle">
                          Ready to Grow Your Business in
                        </span>
                        <h4 className="tm-details-title">Fort Collins?</h4>
                      </div>
                      <div className="tm-details-text">
                        <p>
                          Your customers are searching — make sure they find you first. Partner with Biztalbox, the SEO Consultant Fort Collins businesses trust, and start driving real results. Contact us today for a free consultation.
                        </p>
                      </div>
                      <div className="tm-details-portfolio">
                        <span className="tm-details-social-title">
                          Get in Touch:
                        </span>
                        <a href="tel:+919485699709">+91 9485699709</a>
                        <a href="mailto:info@biztalbox.com">
                          info@biztalbox.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <LeadForm />
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="fq-faq-area fq-faq-bdr">
              <div className="container">
                <div className="row">
                  <div className="col-xl-8 col-lg-8">
                    <div className="fq-faq-wrapper">
                      <div className="tp-service-2-accordion-box">
                        <div className="accordion" id="accordionExample">
                          {faq_data.map((item) => (
                            <FaqItem key={item.id} item={item} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                    <div className="fq-faq-sidebar">
                      <div className="fq-faq-sidebar-content">
                        <h4 className="fq-faq-sidebar-title">Q&A</h4>
                        <h2>FAQs – SEO Services in Fort Collins</h2>
                      </div>
                      <div className="fq-faq-sidebar-thumb">
                        <Image
                          className="w-100"
                          src={faq_banner}
                          alt="faq-banner"
                          style={{ height: "auto" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* footer area */}
          <FooterThree />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
}
