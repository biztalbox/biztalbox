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
                          Professional SEO Services in Arapahoe – Drive Traffic & Increase Sales
                          </h1>
                          <p>
                          Arapahoe&apos;s business environment is booming — from cutting-edge SaaS companies and manufacturers to local service businesses and retailers. But with so much competition in the digital space, even the best businesses are overlooked. Having a website isn&apos;t enough if your customers can&apos;t find it. That&apos;s when Biztalbox, a reputable SEO Agency in Arapahoe, comes into the picture.
                          </p>
                          <p>
                          We assist local businesses in establishing online presence where it is needed most — Google search engine results. Our Arapahoe SEO Services are designed to drive qualified traffic, enhance conversions, and deliver long-term growth for your business.
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
                        <h4 className="tm-details-title">Arapahoe?</h4>
                      </div>
                      <div className="tm-details-text">
                        <p>
                          Your customers are searching — make sure they find you first. Partner with Biztalbox, the SEO Consultant Arapahoe businesses trust, and start driving real results. Contact us today for a free consultation.
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
                           Why Biztalbox Is the Right Partner for Your SEO Success

                          </h3>
                          <h2 className="tm-details-title">Arapahoe</h2>
                        </div>
                        <div className="service-details__fea-list">
                          <ul>
                            <li>
                            Local Arapahoe Expertise  – We understand the business landscape of Arapahoe and build local strategies to put your business in front of the right people.
                            </li>
                            <li>
                            Data-Driven Growth - Our decisions are made on the basis of genuine analysis. This assures that your SEO campaigns not only look good on paper but also generate leads and sales
                            </li>
                            <li>
                            Transparent & Collaborative Approach – You will always be informed about what is going on with your campaign — no confusing terms, no guessing, just clear updates and honest reporting.
                            </li>
                            <li>
                            We Deliver Results You Can Depend On – Our methods boost visibility, engagement and long-term digital growth for businesses and marketers alike. It doesn&apos;t matter if you&apos;re a B2B enterprise or local retailer; our strategy delivers.
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
                        Why Choose Our SEO Services in Arapahoe
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
                              <h4 className="text-white"> Improved Online Presence</h4>
                              <p>
                               Rank higher on Google and get in front of the customers already looking for your services.
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div
                              className={`tp-about-4-content item-2 ${
                                !isMobile ? "tp_fade_bottom" : ""
                              }`}
                            >
                              <h4 className="text-white">Industry-Specific Knowledge </h4>
                              <p>
                                  Whether it&apos;s Manufacturing SEO Agency Arapahoe or SaaS SEO Services Arapahoe, we understand your business and the local environment.

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
                              <h4 className="text-white"> Better User Experience</h4>
                              <p>
                                 A fast, mobile-friendly site that&apos;s easy to navigate will keep users interested and ready for a conversation.
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div
                              className={`tp-about-4-content item-2 ${
                                !isMobile ? "tp_fade_bottom" : ""
                              }`}
                            >
                              <h4 className="text-white"> Long-Term Growth </h4>
                              <p>
                                SEO is an investment that gives consistent leads, not instant spikes.
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
                        <h4 className="tm-details-title">Arapahoe?</h4>
                      </div>
                      <div className="tm-details-text">
                        <p>
                          Your customers are searching — make sure they find you first. Partner with Biztalbox, the SEO Consultant Arapahoe businesses trust, and start driving real results. Contact us today for a free consultation.
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
                      How Our Arapahoe SEO Process Works
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
                              Comprehensive Site Audit
                            </h4>
                            <p>
                              Our Arapahoe SEO Consultant reviews your site speed, design, and content to find issues that are holding you back.
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
                              Targeted Keyword Strategy
                            </h4>
                            <p>
                               We determine what your customers are looking for — from SaaS tools to industrial services — and optimize for those profit-generating terms.
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
                              Our Arapahoe SEO Experts optimize titles, meta tags, and design to boost rankings and user experience.
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
                             High-Quality Backlinks 
                            </h4>
                            <p>
                              Being a trustworthy SEO Company Arapahoe, we attain backlinks from authoritative, niche-related websites in order to build domain power.
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
                            <h4 className="text-white">Local SEO Optimization</h4>
                            <p>
                               We make your business visible in local search and Google Maps so local customers find you before anyone else.
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
                              You&apos;ll never be left in the dark about how your SEO is working; we provide transparent data and quantifiable results.
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
                        <h4 className="tm-details-title">Arapahoe?</h4>
                      </div>
                      <div className="tm-details-text">
                        <p>
                          Your customers are searching — make sure they find you first. Partner with Biztalbox, the SEO Consultant Arapahoe businesses trust, and start driving real results. Contact us today for a free consultation.
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
                        <h2>FAQs – SEO Services in Arapahoe</h2>
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
