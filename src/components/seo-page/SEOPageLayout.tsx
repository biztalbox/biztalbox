"use client";

import { gsap } from "gsap";
import React, { useEffect, useState } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

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
import { testimonial } from "@/app/(SEO PAGES)/arapahoe-b2b-seo-company/data";
import type { CMSPageData, CMSSettings } from "@/lib/cms-types";

// ─── helpers ──────────────────────────────────────────────────────────────────

/** Pair an array into rows of 2 for 2-col grid rendering */
function toPairs<T>(arr: T[]): [T, T | null][] {
  const pairs: [T, T | null][] = [];
  for (let i = 0; i < arr.length; i += 2) {
    pairs.push([arr[i], arr[i + 1] ?? null]);
  }
  return pairs;
}

// ─── CTA block ────────────────────────────────────────────────────────────────

interface CtaBlockProps {
  subtitle: string;
  title: string;
  body: string;
  phone: string;
  email: string;
}

function CtaBlock({ subtitle, title, body, phone, email }: CtaBlockProps) {
  return (
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
            <div className="tm-details-content-wrap z-index-5" style={{ padding: "30px 0" }}>
              <div className="tm-details-title-box mb-20">
                {subtitle && (
                  <span className="tm-hero-subtitle">{subtitle}</span>
                )}
                {title && (
                  <h4 className="tm-details-title">{title}</h4>
                )}
              </div>
              {body && (
                <div className="tm-details-text">
                  <p>{body}</p>
                </div>
              )}
              <div className="tm-details-portfolio">
                <span className="tm-details-social-title">Get in Touch:</span>
                {phone && <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>}
                {email && <a href={`mailto:${email}`}>{email}</a>}
              </div>
            </div>
          </div>
          <LeadForm />
        </div>
      </div>
    </div>
  );
}

// ─── Main layout ──────────────────────────────────────────────────────────────

interface SEOPageLayoutProps {
  data: CMSPageData;
  settings: CMSSettings;
}

export default function SEOPageLayout({ data, settings }: SEOPageLayoutProps) {
  useScrollSmooth();
  const [isMobile, setIsMobile] = useState(false);

  const ctaSubtitle = data.cta_subtitle || settings.cta_default_subtitle;
  const ctaTitle    = data.cta_title    || settings.cta_default_title;
  const ctaBody     = data.cta_body     || settings.cta_default_body;
  const phone       = settings.contact_phone;
  const email       = settings.contact_email;
  const projectsCount = settings.projects_count || "5";

  const hasBenefits   = Boolean(data.benefits_title || data.benefits_items?.length);
  const hasWhyChoose  = Boolean(data.why_choose_title || data.why_choose_items?.length);
  const hasHowWeWork  = Boolean(data.how_we_work_title || data.how_we_work_steps?.length);
  const hasFaqs       = Boolean(data.faqs?.length);

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
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <Wrapper>
      <HeaderEleven transparent={true} />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main style={{ overflow: "hidden" }}>

            {/* ── Hero ────────────────────────────────────────────── */}
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
                          {data.hero_title && (
                            <h1 className="text-white tp-char-animation">
                              {data.hero_title}
                            </h1>
                          )}
                          {data.hero_paragraph_1 && <p>{data.hero_paragraph_1}</p>}
                          {data.hero_paragraph_2 && <p>{data.hero_paragraph_2}</p>}
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
                            <Image className="tp-zoom-in-out" src={hero_star_2} alt="star" />
                          </div>
                          <div className="tp-hero-4-star-2">
                            <Image className="tp-zoom-in-out-2" src={hero_star_2} alt="star" />
                          </div>
                          <span>
                            <i
                              data-purecounter-duration="1"
                              data-purecounter-end={projectsCount}
                              className="purecounter"
                            >
                              {projectsCount}
                            </i>
                            k+
                          </span>
                          <p>Projects completed <br /> successfully</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── CTA 1 ────────────────────────────────────────────── */}
            <CtaBlock
              subtitle={ctaSubtitle}
              title={ctaTitle}
              body={ctaBody}
              phone={phone}
              email={email}
            />

            {/* ── Testimonials ─────────────────────────────────────── */}
            <StudioPanelFour testimonials={testimonial} style_2={true} />

            {/* ── Book a call ──────────────────────────────────────── */}
            <BookCallForm />

            <div
              className="tp-overlay-bg black-bg-2"
              style={{ backgroundImage: "url(/assets/img/home-04/hero/overly.png)" }}
            >
              <BrandTwo />

              {/* ── Benefits ───────────────────────────────────────── */}
              {hasBenefits && (
                <div className="tm-details-wrapper p-relative pt-80 pb-80" style={{ height: "auto" }}>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-7 col-lg-7">
                        <div className="service-details__left-wrap">
                          <div className="tm-details-title-box mb-20">
                            {data.benefits_title && (
                              <h3 className="text-white">{data.benefits_title}</h3>
                            )}
                            {data.benefits_subtitle && (
                              <h2 className="tm-details-title">{data.benefits_subtitle}</h2>
                            )}
                          </div>
                          {data.benefits_items?.length > 0 && (
                            <div className="service-details__fea-list">
                              <ul>
                                {data.benefits_items.map((item, i) => (
                                  <li key={i}>
                                    {item.title && <strong>{item.title}</strong>}
                                    {item.title && item.description && " - "}
                                    {item.description}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
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
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ── Why Choose Us ──────────────────────────────────── */}
              {hasWhyChoose && (
                <div className="tp-about-4-area pt-100 pb-110 p-relative">
                  <div className="tp-about-4-shape-2">
                    <Image className="tp-zoom-in-out" src={shape} alt="shape" />
                  </div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-10 col-md-10">
                        <div className={`tp-about-4-title-box ${!isMobile ? "tp_fade_bottom" : ""}`}>
                          {data.why_choose_title && (
                            <h4 className="tp-about-4-title">{data.why_choose_title}</h4>
                          )}
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
                          {toPairs(data.why_choose_items ?? []).map(([a, b], rowIndex) => (
                            <div key={rowIndex} className={`row ${rowIndex > 0 ? "mt-30" : ""}`}>
                              <div className="col-xl-6 col-lg-6">
                                <div className={`tp-about-4-content item-1 ${!isMobile ? "tp_fade_bottom" : ""}`}>
                                  {a.title && <h4 className="text-white">{a.title}</h4>}
                                  {a.body  && <p>{a.body}</p>}
                                </div>
                              </div>
                              {b && (
                                <div className="col-xl-6 col-lg-6">
                                  <div className={`tp-about-4-content item-2 ${!isMobile ? "tp_fade_bottom" : ""}`}>
                                    {b.title && <h4 className="text-white">{b.title}</h4>}
                                    {b.body  && <p>{b.body}</p>}
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ── CTA 2 ────────────────────────────────────────────── */}
            <CtaBlock
              subtitle={ctaSubtitle}
              title={ctaTitle}
              body={ctaBody}
              phone={phone}
              email={email}
            />

            {/* ── Services ─────────────────────────────────────────── */}
            <ServiceThree />

            {/* ── How We Work ──────────────────────────────────────── */}
            <LineTextTwo title="Our SEO Process" />
            {hasHowWeWork && (
              <div className="tp-about-4-area pt-100 pb-110 p-relative">
                <div className="tp-about-4-shape-2">
                  <Image className="tp-zoom-in-out" src={shape} alt="shape" />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-10 col-md-10">
                      <div className={`tp-about-4-title-box ${!isMobile ? "tp_fade_bottom" : ""}`}>
                        {data.how_we_work_title && (
                          <h3 className="tp-about-4-title">{data.how_we_work_title}</h3>
                        )}
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
                        {toPairs(data.how_we_work_steps ?? []).map((pair, rowIndex) => (
                          <div key={rowIndex} className={`row ${rowIndex > 0 ? "mt-30" : ""}`}>
                            {(pair.filter(Boolean) as NonNullable<(typeof pair)[0]>[]).map((step, j) => (
                              <div key={j} className="col-xl-6 col-lg-6">
                                <div className={`tp-about-4-content item-${j + 1} ${!isMobile ? "tp_fade_bottom" : ""}`}>
                                  {step.title && <h4 className="text-white">{step.title}</h4>}
                                  {step.body  && <p>{step.body}</p>}
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── CTA 3 ────────────────────────────────────────────── */}
            <CtaBlock
              subtitle={ctaSubtitle}
              title={ctaTitle}
              body={ctaBody}
              phone={phone}
              email={email}
            />

            {/* ── FAQs ─────────────────────────────────────────────── */}
            {hasFaqs && (
              <div className="fq-faq-area fq-faq-bdr">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-8 col-lg-8">
                      <div className="fq-faq-wrapper">
                        <div className="tp-service-2-accordion-box">
                          <div className="accordion" id="accordionExample">
                            {data.faqs.map((item, index) => (
                              <FaqItem
                                key={index}
                                item={{
                                  id: index + 1,
                                  question: item.question,
                                  answer: item.answer,
                                }}
                              />
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
            )}

          </main>
          <FooterThree />
        </div>
      </div>
    </Wrapper>
  );
}
