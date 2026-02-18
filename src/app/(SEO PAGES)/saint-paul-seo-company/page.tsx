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
import { testimonial } from "@/data/page-data";

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
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-hero-4-content-wrap">
                      <div className="p-relative">
                        <div
                          className="tp-hero-4-content p-relative col-md-9"
                          style={{ marginBottom: "0" }}
                        >
                          <h1 className="text-white tp-char-animation">
                          Saint Paul SEO Services for Professionals – Generate Traffic & Sales
                          </h1>
                          <p>
                          Saint Paul is not only Minnesota&apos;s capital — it&apos;s a thriving business centre where manufacturers, SaaS startups, and service firms flourish. In this competitive digital landscape, having a website alone isn&apos;t sufficient; your company must be found when neighbourhood customers, B2B purchasers, or SaaS clients look for the services you offer.
                          </p>
                          <p>
                          As a trusted SEO Agency in Saint Paul, Biztalbox helps companies increase their visibility and drive meaningful leads. Whether you&apos;re a manufacturer, SaaS provider, or service provider, our SEO Services Saint Paul deliver measurable results.
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
                        <div className="tp-hero-4-achievement tp-btn-bounce d-none d-md-block col-md-1">
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
                        <h4 className="tm-details-title">Saint Paul?</h4>
                      </div>
                      <div className="tm-details-text">
                        <p>
                          Saint Paul is a city of opportunity and development — your online presence should not lag behind. Partner with Biztalbox, the SEO Agency Saint Paul companies rely on, and receive a customized strategy for measurable development. Start today — book an appointment and take your business to the top of Saint Paul search results.
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
                            Benefits of SEO Services in
                          </h3>
                          <h2 className="tm-details-title">Saint Paul</h2>
                        </div>
                        <div className="service-details__fea-list">
                          <ul>
                            <li>
                              Increased Online Presence – Get discovered by potential Saint Paul customers and partners when they are looking for the products or services you offer.
                            </li>
                            <li>
                              Industry-Specific Solutions – No matter if you require a Manufacturing SEO Firm Saint Paul or SaaS SEO Firm Saint Paul, all campaigns are tailored to your business requirements.
                            </li>
                            <li>
                              Better User Experience – SEO combined with a mobile-friendly design ensures that users can easily navigate your site, keeping them around and also encourages them to convert.
                            </li>
                            <li>
                              Sustainable Growth – SEO creates long-term outcomes that continue to generate traffic for the long term, unlike paid ads that bring temporary bursts of traffic.
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
                        Why Choose Biztalbox For Your Saint Paul Business?
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
                              <h4 className="text-white">Local Expertise</h4>
                              <p>
                                We understand Saint Paul&apos;s business environment, from tech startups to established industry manufacturers, and how clients search online.
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
                                Each plan is specific to your objectives and market, never copied from a template.
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
                              <h4 className="text-white">Proven Track Record</h4>
                              <p>
                                As experienced SEO Experts Saint Paul, we assist businesses increase rankings, create high-quality leads, and drive revenue.
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div
                              className={`tp-about-4-content item-2 ${
                                !isMobile ? "tp_fade_bottom" : ""
                              }`}
                            >
                              <h4 className="text-white">White-Hat Practices</h4>
                              <p>
                                Our white-hat SEO practices defend your brand and lead to long-term success.
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
                        <h4 className="tm-details-title">Saint Paul?</h4>
                      </div>
                      <div className="tm-details-text">
                        <p>
                          Saint Paul is a city of opportunity and development — your online presence should not lag behind. Partner with Biztalbox, the SEO Agency Saint Paul companies rely on, and receive a customized strategy for measurable development. Start today — book an appointment and take your business to the top of Saint Paul search results.
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
                      How Our SEO Services in Saint Paul Work
                      </h3>
                      <p
                        className="tp-about-4-title"
                        style={{ fontSize: "25px" }}
                      >
                        Every business in Saint Paul has unique challenges, so our strategies are always customized:
                      </p>
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
                              Our SEO Specialists Saint Paul analyze your website for technical problems, page load time, and missed opportunities that could be limiting growth.
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
                              Keyword Research with Local Insight
                            </h4>
                            <p>
                              We determine the very search terms Saint Paul customers, B2B buyers, and SaaS clients are actually using, so your business shows up where it benefits most.
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
                              From meta tags and titles to navigation and content organization, our SEO Consultants Saint Paul make your site user-friendly, professional, and easy to understand for search engines.
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
                              As a reputable SEO Company Saint Paul, we develop premium backlinks to increase your domain authority.
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
                            <h4 className="text-white">Local & Industry-Specific SEO</h4>
                            <p>
                              From improving Google Maps visibility to establishing your brand as a leader in manufacturing or SaaS, our Manufacturing SEO Agency Saint Paul and SaaS SEO Services Saint Paul strategies are designed for your specific sector.
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
                              You&apos;ll receive clear, actionable reports that track improved rankings, increased traffic, and lead generation.
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
                        <h4 className="tm-details-title">Saint Paul?</h4>
                      </div>
                      <div className="tm-details-text">
                        <p>
                          Saint Paul is a city of opportunity and development — your online presence should not lag behind. Partner with Biztalbox, the SEO Agency Saint Paul companies rely on, and receive a customized strategy for measurable development. Start today — book an appointment and take your business to the top of Saint Paul search results.
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
                        <p>FAQs – SEO Services in Saint Paul</p>
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

