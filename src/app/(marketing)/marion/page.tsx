"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderThree from "@/layouts/headers/header-three";
import HeroBannerThree from "@/components/hero-banner/hero-banner-three";
import AboutTwo from "@/components/about/about-two";
import ServiceThree from "@/components/service/service-three";
import LineTextTwo from "@/components/line-text/line-text-2";
import ProjectThree from "@/components/project/project-three";
import BrandTwo from "@/components/brand/brand-two";
import TeamTwo from "@/components/team/team-two";
import FooterThree from "@/layouts/footers/footer-three";
import shape from "@/assets/img/home-04/about/about-shape-2.png";
import shape_2 from "@/assets/img/home-04/about/about-shape-1.png";
import Link from "next/link";
import sv_1 from "@/assets/img/inner-service/sercive-details/sv-details-1.jpg";
import sv_2 from "@/assets/img/inner-service/sercive-details/sv-details-2.jpg";
import sv_3 from "@/assets/img/inner-service/sercive-details/sv-details-3.jpg";
import hero_star from "@/assets/img/home-04/hero/hero-star.png";
import hero_star_2 from "@/assets/img/home-04/hero/hero-star-2.png";
import shape_1 from "@/assets/img/home-01/team/team-details-shape-1.png";
import team_shape_2 from "@/assets/img/home-01/team/team-details-shape-2.png";
import { ITeamDT } from "@/types/team-d-t";

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
import HeaderSix from "@/layouts/headers/header-six";
import TeamDetailsArea from "@/components/team/team-details-area";
import StudioPanelFour from "@/components/studio-panels/studio-panel-4";
import FaqArea from "@/components/faq/faq-area";
import Image from "next/image";
import LeadForm from "@/components/landingPage/LeadForm";
import faq_banner from '@/assets/img/inner-faq/faq/banner-faq.jpg';
import FaqItem from "@/components/faq/faq-item";

// type 
type IFaq = {
  id: number;
  question: string;
  answer: string;
}
// faq data
export const faq_data:IFaq[] = [
  {
    id: 1,
    question: "What does SEO actually do for Indianapolis businesses?",
    answer: "Our SEO Company Indianapolis does not simply make minor changes to your website. We refine content, structure, backlinks, and local listings so your Indianapolis business is found where it counts—right in front of your customers." 
   },
  {
    id: 2,
    question: "When should I expect to see SEO results for my Indianapolis business?",
    answer: "SEO is a marathon, not a sprint. The majority of Indianapolis companies experience improvement within 3-6 months and continue to improve over the long run."
  },
  {
    id: 3,
    question: "Can SEO really increase my traffic and sales?",
    answer: "Yes—our SEO Services Indiana focus on quality traffic that converts. We aim for visitors who are ready to take action, not just click."
  },
  {
    id: 4,
    question: "Do you provide keyword research tailored to Indianapolis?",
    answer: "Absolutely. Our SEO Consultants Indiana identify high-intent keywords that connect with customers in Indianapolis and across Indiana, ensuring your strategy is local and highly targeted."
  },
  {
    id: 5,
    question: "Are your SEO methods safe and Google-compliant?",
    answer: "Always. We follow ethical, white-hat SEO practices, so your rankings grow sustainably without risking penalties."
  },
  {
    id: 6,
    question: "Will you SEO optimize my existing website content?",
    answer: "Yes. Our SEO Experts Indiana optimize your website copy and blogs to get the right message across and help you connect with your audience, without losing your voice."
  },
  {
    id: 7,
    question: "Is SEO worth it for small businesses in Indianapolis?",
    answer: "Absolutely. Even small businesses can compete effectively with larger competitors if their strategy is well-defined. Our local expertise ensures your investment drives real results."
  },
  {
    id: 8,
    question: "Do you work with specialized industries?",
    answer: "Yes! Whether you’re looking for a manufacturing SEO agency or SaaS SEO services, we tailor our strategies to help your business grow online."
  }
];

export default function Page() {
  useScrollSmooth();
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

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderSix />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* hero area start */}
            <div className="tp-hero-4-area tp-btn-trigger">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-hero-4-content-wrap">
                      <div className="p-relative">
                        <div className="tp-hero-4-content p-relative col-md-9">
                          <h1 className="text-white tp-char-animation">
                            Professional SEO Agency in <br /> Indianapolis
                          </h1>
                          <p>
                            Getting clicks is easy; turning them into clients is
                            an art. At Biztalbox, we combine data, creativity,
                            and local insights to make your Indianapolis
                            business impossible to ignore online.
                          </p>
                          <p>
                            As a premier Indiana SEO agency we incorporate
                            significant industry expertise to ensure your
                            organization is visible and memorable. Our
                            customized strategy will generate real growth and
                            future value regardless of whether you're an
                            established business downtown or a startup in Broad
                            Ripple.
                          </p>
                          <div className="tp-hero-4-text tp_fade_right">
                            <span>
                              <Image
                                className="tp-zoom-in-out"
                                src={hero_star}
                                alt="star"
                              />
                            </span>
                            {/* <p>Drive Traffic & Grow Sales</p> */}
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
                              12
                            </i>
                            k+
                          </span>
                          <p>
                            Projects completed <br /> successfully
                          </p>
                          {/* <div className="tp-footer-2-widget-newslatter">
                    <h4 className="tp-footer-2-widget-title">
                      Get a call back
                    </h4>
                    <form action="#">
                      <div className="tp-footer-2-input p-relative">
                        <input type="text" placeholder="Mobile No..." />
                        <button>
                          <RightArrow />
                        </button>
                      </div>
                    </form>
                  </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* hero area end */}

            {/* CTA */}
            <div className="tm-details-wrapper p-relative">
              <div className="tm-details-shape-1">
                <Image src={shape_1} alt="shape" />
              </div>
              <div className="tm-details-shape-2">
                <Image src={team_shape_2} alt="shape" />
              </div>
              <div className="container">
                <div className="row align-items-center align-items-xxl-end">
                  <div className="col-xl-6 col-lg-6 col-md-7">
                    <div className="tm-details-content-wrap z-index-5">
                      <div className="tm-details-title-box mb-20">
                        <span className="tm-hero-subtitle">
                          Ready to Grow Your Business in
                        </span>
                        <h4 className="tm-details-title">Indianapolis?</h4>
                      </div>
                      <div className="tm-details-text">
                        <p>
                          If you’re waiting for clients to stumble across your
                          website, you’re already behind. Let Biztalbox, your
                          trusted SEO Agency Indiana, craft a strategy that
                          makes your Indianapolis business unavoidable
                          online—get your free consultation now.
                        </p>
                      </div>
                      <div className="tm-details-portfolio mb-50">
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

            <div
              className="tp-overlay-bg black-bg-2"
              style={{
                backgroundImage: "url(/assets/img/home-04/hero/overly.png)",
              }}
            >
              {/* Clients */}
              <StudioPanelFour style_2={true} />

              <BrandTwo />

              {/* Benefits */}
              <div className="tm-details-wrapper p-relative pt-80">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-7 col-lg-7">
                      <div className="service-details__left-wrap">
                        <div className="service-details__left-text pb-20">
                          <h3 className="text-1 tp_title_anim">
                            Benefits of SEO Services in Indianapolis
                          </h3>
                        </div>
                        <div className="service-details__fea-list">
                          <ul>
                            <li>
                              Higher visibility, real results: Our SEO Services
                              Indiana help you rank for the keywords that matter
                              and attract audiences ready to convert.
                            </li>
                            <li>
                              Local advantage: Engage customers in Indianapolis
                              and across Indiana who are actively searching for
                              your services.
                            </li>
                            <li>
                              Enhanced website experience: Faster pages,
                              intuitive navigation, and content that resonates
                              with humans, not just algorithms.
                            </li>
                            <li>
                              Measurable growth: Every strategy comes with
                              data-backed insights, so you know exactly what
                              works.
                            </li>
                          </ul>
                        </div>
                        {/* <div className="service-details__sm-thumb-wrap mb-60">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                          <div className="service-details__sm-thumb">
                            <Image
                              src={sv_2}
                              alt="service-img"
                              style={{ height: "auto" }}
                            />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                          <div className="service-details__sm-thumb">
                            <Image
                              src={sv_3}
                              alt="service-img"
                              style={{ height: "auto" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div> */}
                        {/* <div className="service-details__left-text">
                      <p>
                        Great user experience design lets users focus on the
                        task they have to complete & evokes emotion without
                        distracting them. Bonus points for when it also looks &
                        feels aesthetically pleasing!{" "}
                      </p>
                    </div> */}
                      </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                      <div className="service-details__right-wrap fix p-relative">
                        {/* <div className="service-details__rotate-text">
                      <span>Full list of services</span>
                    </div>
                    <div className="service-details__right-category">
                      <a href="#">Strategy</a>
                      <a className="active" href="#">
                        Logo Design
                      </a>
                      <a href="#">Graphic identity</a>
                      <a href="#">Web Design</a>
                      <a href="#">Development</a>
                    </div> */}
                        <div className="service-details__right-text-box">
                          <h4>
                            Get a <br /> Callback
                          </h4>
                          <p className="mb-20">
                            Your logo is at the heart of your identity. An
                            impactful design, tailor-made and in line with your
                            activity will allow you to differentiate yourself
                            and mark your audience.
                          </p>
                          <form>
                            <input
                              type="tel"
                              className="form-control mb-20"
                              id="phone"
                              style={{
                                backgroundColor: "transparent",
                                borderColor: "black",
                                color: "black",
                                fontSize: "20px",
                                borderRadius: "40px",
                              }}
                              minLength={7}
                              maxLength={15}
                              placeholder="Enter Phone No."
                            />
                            <button
                              type="submit"
                              className="tp-btn-white background-black"
                            >
                              Submit
                            </button>
                          </form>
                        </div>
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
                      <div className="tp-about-4-title-box tp_fade_bottom">
                        <h4 className="tp-about-4-title">
                          Why Biztalbox is Your Trusted SEO Partner
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
                            <div className="tp-about-4-content item-1 tp_fade_bottom">
                              <h4 className="text-white">Local Insight </h4>
                              <p>
                                We understand the Indiana market and what works
                                in Indianapolis.
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div className="tp-about-4-content item-2 tp_fade_bottom">
                              <h4 className="text-white">Custom Strategies</h4>
                              <p>
                                No cookie-cutter plans — every campaign fits
                                your goals.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-30">
                          <div className="col-xl-6 col-lg-6">
                            <div className="tp-about-4-content item-1 tp_fade_bottom">
                              <h4 className="text-white">Proven Results</h4>
                              <p>
                                From startups to established brands, we’ve
                                driven real growth.
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div className="tp-about-4-content item-2 tp_fade_bottom">
                              <h4 className="text-white">Ethical SEO</h4>
                              <p>
                                100% white-hat methods for sustainable rankings.
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
            <div className="tm-details-wrapper p-relative">
              <div className="tm-details-shape-1">
                <Image src={shape_1} alt="shape" />
              </div>
              <div className="tm-details-shape-2">
                <Image src={team_shape_2} alt="shape" />
              </div>
              <div className="container">
                <div className="row align-items-center align-items-xxl-end">
                  <div className="col-xl-6 col-lg-6 col-md-7">
                    <div className="tm-details-content-wrap z-index-5">
                      <div className="tm-details-title-box mb-20">
                        <span className="tm-hero-subtitle">
                          Ready to Grow Your Business in
                        </span>
                        <h4 className="tm-details-title">Indianapolis?</h4>
                      </div>
                      <div className="tm-details-text">
                        <p>
                          If you’re waiting for clients to stumble across your
                          website, you’re already behind. Let Biztalbox, your
                          trusted SEO Agency Indiana, craft a strategy that
                          makes your Indianapolis business unavoidable
                          online—get your free consultation now.
                        </p>
                      </div>
                      <div className="tm-details-portfolio mb-50">
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
            <LineTextTwo title="How Our SEO Services Work" />
            <div className="tp-about-4-area pt-100 pb-110 p-relative">
              <div className="tp-about-4-shape-2">
                <Image className="tp-zoom-in-out" src={shape} alt="shape" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-10 col-md-10">
                    <div className="tp-about-4-title-box tp_fade_bottom">
                      <h3 className="tp-about-4-title">
                        We believe SEO isn’t one-size-fits-all. Here’s how we
                        make it work for you:
                      </h3>
                      <p
                        className="tp-about-4-title"
                        style={{ fontSize: "25px" }}
                      ></p>
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
                          <div className="tp-about-4-content item-1 tp_fade_bottom">
                            <h4 className="text-white">
                              Website Audit & Analysis
                            </h4>
                            <p>
                              Our SEO Consultants Indiana uncover gaps,
                              opportunities, and growth potential.
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div className="tp-about-4-content item-2 tp_fade_bottom">
                            <h4 className="text-white">
                              Keyword Research & Strategy
                            </h4>
                            <p>
                              Not just popular keywords, but the right ones that
                              connect you with your ideal audience in
                              Indianapolis and throughout Indiana.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-30">
                        <div className="col-xl-6 col-lg-6">
                          <div className="tp-about-4-content item-1 tp_fade_bottom">
                            <h4 className="text-white">On-Page Optimization</h4>
                            <p>
                              Whether it’s meta tags, content structure, or
                              improving everything for users and search engines,
                              we love to fine-tune it.
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div className="tp-about-4-content item-2 tp_fade_bottom">
                            <h4 className="text-white">
                              Off-Page SEO & Link Building
                            </h4>
                            <p>
                              High-quality links to build authority and online
                              presence through our SEO Experts Indiana.
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
            <div className="tm-details-wrapper p-relative">
              <div className="tm-details-shape-1">
                <Image src={shape_1} alt="shape" />
              </div>
              <div className="tm-details-shape-2">
                <Image src={team_shape_2} alt="shape" />
              </div>
              <div className="container">
                <div className="row align-items-center align-items-xxl-end">
                  <div className="col-xl-6 col-lg-6 col-md-7">
                    <div className="tm-details-content-wrap z-index-5">
                      <div className="tm-details-title-box mb-20">
                        <span className="tm-hero-subtitle">
                          Ready to Grow Your Business in
                        </span>
                        <h4 className="tm-details-title">Indianapolis?</h4>
                      </div>
                      <div className="tm-details-text">
                        <p>
                          If you’re waiting for clients to stumble across your
                          website, you’re already behind. Let Biztalbox, your
                          trusted SEO Agency Indiana, craft a strategy that
                          makes your Indianapolis business unavoidable
                          online—get your free consultation now.
                        </p>
                      </div>
                      <div className="tm-details-portfolio mb-50">
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
                        <p>
                        FAQs – SEO Services in Indianapolis
                        </p>
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
