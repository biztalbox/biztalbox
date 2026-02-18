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
                          B2B SEO Services in Missouri – Connect With the Clients Who Matter
                          </h1>
                          <p>
                          Missouri&apos;s B2B market is competitive, and having a website alone isn&apos;t enough — your ideal clients won&apos;t find you unless your business is visible where it counts. At Biztalbox, we help companies not just appear online, but attract the right decision-makers at the right time.
                          </p>
                          <p>
                          Being an esteemed B2B SEO Agency Missouri, we emphasize methods that produce quantifiable growth, transforming visitors into real business opportunities and allowing your brand to gain authority within your sector.
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
                          Ready to Grow Your B2B Business in
                        </span>
                        <h4 className="tm-details-title">Missouri?</h4>
                      </div>
                      <div className="tm-details-text">
                        <p>
                          Stop letting competitors capture the clients you want. Partner with Biztalbox, your trusted B2B SEO Consultant Missouri, and start turning visibility into real business growth. Contact us today for a free consultation.
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
                            Benefits of B2B SEO Services in
                          </h3>
                          <h2 className="tm-details-title">Missouri</h2>
                        </div>
                        <div className="service-details__fea-list">
                          <ul>
                            <li>
                              Attract High-Value Leads: Focused SEO brings businesses who are ready to make decisions.
                            </li>
                            <li>
                              Boost Visibility in Missouri: Stand out in a saturated B2B landscape and have prospects choose you over others.
                            </li>
                            <li>
                              Improved user experience: Fast & user-friendly websites are more likely to make your visitors convert and engage.
                            </li>
                            <li>
                              Measurable Growth: With data-driven insights, you can see what&apos;s working and make changes for continued success.
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
                        Why Biztalbox is the Ideal B2B SEO Partner
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
                              <h4 className="text-white">Missouri Expertise</h4>
                              <p>
                                Our experts understand the local market and what fuels business success here.
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div
                              className={`tp-about-4-content item-2 ${
                                !isMobile ? "tp_fade_bottom" : ""
                              }`}
                            >
                              <h4 className="text-white">Custom Solutions</h4>
                              <p>
                                No generic plans — each campaign is designed to meet your business objectives.
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
                              <h4 className="text-white">Proven Industry Results</h4>
                              <p>
                                From manufacturing to tech services, we&apos;ve helped B2B companies generate revenue through SEO.
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div
                              className={`tp-about-4-content item-2 ${
                                !isMobile ? "tp_fade_bottom" : ""
                              }`}
                            >
                              <h4 className="text-white">Ethical SEO Practices</h4>
                              <p>
                                We follow white-hat methods to ensure your rankings grow sustainably.
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
                          Ready to Grow Your B2B Business in
                        </span>
                        <h4 className="tm-details-title">Missouri?</h4>
                      </div>
                      <div className="tm-details-text">
                        <p>
                          Stop letting competitors capture the clients you want. Partner with Biztalbox, your trusted B2B SEO Consultant Missouri, and start turning visibility into real business growth. Contact us today for a free consultation.
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
            <LineTextTwo title="Our B2B SEO Process" />
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
                      How Our B2B SEO Services Work
                      </h3>
                      <p
                        className="tp-about-4-title"
                        style={{ fontSize: "25px" }}
                      >
                        Every business has its own goals, audience, and challenges. Here&apos;s how our B2B SEO Company Missouri approach ensures your website works for you:
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
                              Our Missouri B2B SEO Consultants review your site for content weaknesses, technical gaps, and slow pages to develop a more intelligent plan.
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
                              On-Page Optimization
                            </h4>
                            <p>
                              Meta tags, headings, content organization, and user experience are optimized so your site is simple, professional, and search-engine friendly.
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
                            <h4 className="text-white">Off-Page SEO & Link Building</h4>
                            <p>
                              We create powerful backlinks which boost your rankings and signal authority to search engines, as well as potential clients.
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
                              Local & Niche SEO
                            </h4>
                            <p>
                              From Google Maps to local citations, we get your B2B business on top of Missouri searches.
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
                            <h4 className="text-white">Reporting & Continuous Improvement</h4>
                            <p>
                              Transparent, actionable reports with ongoing optimizations ensure your SEO continues to deliver results.
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
                          Ready to Grow Your B2B Business in
                        </span>
                        <h4 className="tm-details-title">Missouri?</h4>
                      </div>
                      <div className="tm-details-text">
                        <p>
                          Stop letting competitors capture the clients you want. Partner with Biztalbox, your trusted B2B SEO Consultant Missouri, and start turning visibility into real business growth. Contact us today for a free consultation.
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
                        <h2>FAQs – B2B SEO Services Missouri</h2>
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
