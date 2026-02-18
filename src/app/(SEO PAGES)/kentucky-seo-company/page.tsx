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
          <main style={{ overflow: "hidden" }}>
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
                            Kentucky SEO Services for Professionals – Drive
                            Traffic & Sales
                          </h1>
                          <p>
                            Kentucky is more than bluegrass and bourbon — it&apos;s
                            a rapidly growing base for manufacturers, SaaS
                            startups, and service firms. In this competitive
                            arena, having a website won&apos;t be enough. You must
                            be seen when local consumers or B2B customers look for
                            what you sell.
                          </p>
                          <p>
                            As a Reputable SEO Agency in Kentucky, Biztalbox
                            assists companies to gain visibility, drive qualified
                            leads, and convert traffic into tangible growth. From
                            manufacturing to SaaS to professional services, our
                            SEO Services Kentucky are tailored to drive measurable
                            outcomes.
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
                        <h4 className="tm-details-title">Kentucky?</h4>
                      </div>
                      <div className="tm-details-text">
                        <p>
                          Your customers are searching — make sure they find you
                          first. Partner with Biztalbox, the Kentucky SEO Agency
                          businesses trust, and start driving real results.
                          Contact us today for a free consultation.
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
                            Advantages of Kentucky SEO Services
                          </h3>
                          <h2 className="tm-details-title">Kentucky</h2>
                        </div>
                        <div className="service-details__fea-list">
                          <ul>
                            <li>
                              <strong>Increased Local Visibility</strong> – Get
                              found by Kentucky customers and business purchasers
                              actively looking for your services.
                            </li>
                            <li>
                              <strong>Industry-Specific Campaigns</strong> –
                              Whether you require a Manufacturing SEO Agency
                              Kentucky or SaaS SEO Agency Kentucky, every campaign
                              is customized to your industry.
                            </li>
                            <li>
                              <strong>Better User Experience</strong> – A faster,
                              more mobile-friendly website leads to longer user
                              retention and aids in conversion of visitors to
                              customers.
                            </li>
                            <li>
                              <strong>Sustainable Growth</strong> – In contrast to
                              ever-dimming paid advertisements, SEO establishes
                              long-term traffic and brand value.
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
                          Why Select Biztalbox for Your Kentucky Business?
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
                                We understand how Kentucky markets work — from
                                Louisville&apos;s manufacturers to Lexington&apos;s
                                technology startups — and how your customers
                                search online.
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
                                Every plan is special, designed for your business
                                objectives and audience, never replicated from a
                                template.
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
                              <h4 className="text-white">Proven Results</h4>
                              <p>
                                As veteran SEO Experts Kentucky, we have worked
                                with brands to enhance rankings, increase leads,
                                and fuel sales growth.
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div
                              className={`tp-about-4-content item-2 ${
                                !isMobile ? "tp_fade_bottom" : ""
                              }`}
                            >
                              <h4 className="text-white">Ethical SEO</h4>
                              <p>
                                We adhere to white-hat SEO practices that defend
                                your brand and provide long-term success.
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
                          Build Your Success Story with Biztalbox
                        </span>
                        <h4 className="tm-details-title">Get Started Today</h4>
                      </div>
                      <div className="tm-details-text">
                        <p>
                          If you&apos;re ready to strengthen your digital
                          footprint and attract qualified leads, Biztalbox is
                          your trusted partner. Our Kentucky SEO Experts deliver
                          strategies that not only rank — they perform, engage,
                          and grow your business for the long run.
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

            {/* How We Work */}
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
                        How Our Kentucky SEO Services Work
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
                              To make sure the foundations are solid, our SEO
                              Experts Kentucky identify site-related issues, from
                              slow load times to broken links.
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
                              We uncover the real search terms Kentuckians use, so
                              your business shows up in the moments that matter.
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
                            <h4 className="text-white">
                              On-Page Optimization
                            </h4>
                            <p>
                              From metadata to page structure, our Kentucky SEO
                              Consultants make your pages better for users and
                              search engines.
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
                              Being a reputed SEO Company Kentucky, we develop
                              high-quality backlinks that enhance your domain and
                              establish credibility.
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
                            <h4 className="text-white">
                              Local & Industry SEO
                            </h4>
                            <p>
                              No matter whether you&apos;re a manufacturer or SaaS
                              company, our Manufacturing SEO Agency Kentucky and
                              SaaS SEO Services Kentucky strategies help your
                              brand rank in the appropriate local and industry
                              searches.
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div
                            className={`tp-about-4-content item-1 ${
                              !isMobile ? "tp_fade_bottom" : ""
                            }`}
                          >
                            <h4 className="text-white">
                              Transparent Reporting
                            </h4>
                            <p>
                              Receive transparent, actionable reports that
                              highlight traffic, keyword rankings, and lead
                              growth — no imprecise metrics, only outcomes.
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
                          Ready to Grow Your Business in Kentucky?
                        </span>
                        <h4 className="tm-details-title">Get Started Today</h4>
                      </div>
                      <div className="tm-details-text">
                        <p>
                          Kentucky&apos;s marketplace is full of potential—and
                          your online reputation should meet it head-on. Work with
                          Biztalbox, the Kentucky SEO Agency businesses trust, and
                          let&apos;s develop a strategy that will deliver
                          quantifiable results and sustainable success.
                        </p>
                        <p>
                          Get started today—schedule a consultation and put your
                          business on top of Kentucky&apos;s search results.
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
                        <h4 className="fq-faq-sidebar-title">FAQs</h4>
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
