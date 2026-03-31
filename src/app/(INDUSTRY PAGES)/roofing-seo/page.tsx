"use client";
import { gsap } from "gsap";
import React, { useEffect, useState } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

import Wrapper from "@/layouts/wrapper";
import ServiceThree from "@/components/service/service-three";
import FooterThree from "@/layouts/footers/footer-three";
import shape from "@/assets/img/home-04/about/about-shape-2.png";
import shape_2 from "@/assets/img/home-04/about/about-shape-1.png";
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
import Image from "next/image";
import LeadForm from "@/components/landingPage/LeadForm";
import BookCallForm from "@/components/landingPage/BookCallForm";
import Link from "next/link";

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
    setIsMobile(typeof window !== "undefined" && window.innerWidth < 768);
  }, []);

  return (
    <Wrapper>
      <HeaderEleven transparent={true} />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main style={{ overflow: "hidden" }}>
            {/* Hero */}
            <div className="tp-hero-4-area tp-btn-trigger pt-80 pt-md-0">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-hero-4-content-wrap">
                      <div className="p-relative">
                        <div
                          className="tp-hero-4-content p-relative"
                          style={{ marginBottom: "0" }}
                        >
                          <h1 className="text-white tp-char-animation">
                            Roofing SEO: A Complete Guide to Benefits, Strategy
                            and Lead Generation
                          </h1>
                          <p>
                            The roofing market is expanding fast — new materials,
                            better systems, evolving standards. But what’s the
                            point if the right customers never find you?{" "}
                            Today, homeowners and businesses search online first.
                            If your business doesn&apos;t appear in that moment,
                            you&apos;re not even part of the conversation.
                          </p>
                          <p>
                            A deliberate{" "}
                            <Link
                              href="https://biztalbox.com/blog/what-is-omni-seo"
                              className="text-primary"
                            >
                              SEO
                            </Link>{" "}
                            approach helps you show up when people look for roof
                            repairs, replacements, inspections, and contractors
                            they can trust. Let&apos;s break down what roofing
                            SEO is, how it helps your roofing business grow, and
                            the strategy that makes it work.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <BookCallForm />

            <div className="container">
              {/* Industry landscape */}
              <section className="content-section content-prose">
                <h2 className="section-heading">
                  The Roofing Industry Landscape and the Need for Online
                  Visibility
                </h2>
                <p>
                  The roofing industry is growing steadily, driven by a mix of
                  economic and environmental shifts. Rapid urbanization is
                  increasing demand for new residential and commercial
                  construction. Rising energy costs are pushing buyers toward
                  energy-efficient solutions. Climate change increases demand for
                  roofs that handle harsh weather. And stricter sustainability
                  regulations keep changing how roofing products are designed and
                  selected.
                </p>
                <p>
                  As a result, the market is expanding fast.{" "}
                  <Link
                    href="https://www.marketresearchfuture.com/reports/roofing-market-1827"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                  >
                    Expected to grow from over $280B in 2024 to nearly $480B by
                    2035
                  </Link>
                  , competition is rising quickly.
                </p>
                <p>
                  There is also a major shift in{" "}
                  <Link
                    href="https://biztalbox.com/blog/know-why-people-buy-understanding-consumer-psychology"
                    className="text-primary"
                  >
                    consumer behaviour
                  </Link>
                  . Buyers don&apos;t rely only on offline networks anymore.
                  They compare options, check suppliers, and read reviews online
                  before they call.
                </p>
                <p>
                  A website that can&apos;t be found has no{" "}
                  <Link
                    href="https://biztalbox.com/blog/marketing-strategies-based-on-consumer-behavior"
                    className="text-primary"
                  >
                    marketing
                  </Link>{" "}
                  value. Roofing SEO changes that by helping you enter earlier in
                  the journey — when the buyer is still exploring, still
                  deciding.
                </p>
              </section>

              {/* What is Roofing SEO */}
              <section className="content-section content-prose">
                <h2 className="section-heading">
                  What Is Roofing SEO: Driving Visibility and Leads
                </h2>
                <p>
                  Roofing SEO makes your business discoverable by helping search
                  engines understand the services you offer, your service
                  locations, and why clients should trust you. It’s the practice
                  of optimizing a roofing business so that homeowners, property
                  managers, and commercial clients find you when they search for
                  roofing services.
                </p>
                <p>
                  In a{" "}
                  <Link
                    href="https://biztalbox.com/blog/digital-marketing-facts"
                    className="text-primary"
                  >
                    digital
                  </Link>
                  -first environment, SEO for roofing contractors can be the
                  difference between a full schedule and an empty one. Search
                  engines (and AI assistants) decide which contractors look most
                  relevant and trustworthy for searches like “roof replacement
                  near me” or “metal roofing contractors in [city].”
                </p>
                <p>
                  Roofing SEO aligns your website content and technical
                  foundation with those signals so you can attract qualified
                  leads — from urgent storm damage repairs to planned
                  replacements and inspections.
                </p>
              </section>

              {/* Benefits */}
              <section className="content-section">
                <h2 className="section-heading">
                  Benefits of Roofing SEO: Grow Your Leads, Visibility, and
                  Credibility
                </h2>
                <p className="content-prose">
                  A strong roofing SEO strategy does more than increase traffic.
                  It drives calls, quote requests, and long-term growth by
                  placing your business in front of people actively searching
                  for roofing services.
                </p>
                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">Attract Qualified Leads</h3>
                    <p>
                      Show up in front of people searching for urgent repairs,
                      inspections, or replacements — and get calls from prospects
                      who are more likely to convert.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">Increase Online Visibility</h3>
                    <p>
                      The more often you appear for searches like “roof
                      replacement near me”, the more enquiries you generate.
                      Visibility compounds into steady demand.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">Authority and Trust That Converts</h3>
                    <p>
                      Clear service information, strong local signals, and
                      consistent listings and reviews communicate credibility —
                      to both search engines and customers.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">Long-Term, Cost-Effective Growth</h3>
                    <p>
                      Unlike{" "}
                      <Link
                        href="https://biztalbox.com/blog/why-my-ppc-ads-get-clicks-but-no-conversions"
                        className="text-primary"
                      >
                        paid ads
                      </Link>{" "}
                      that stop when budget stops, SEO builds durable visibility
                      that keeps generating leads.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">Competitive Advantage</h3>
                    <p>
                      A well-built{" "}
                      <Link
                        href="https://biztalbox.com/blog/seo-competitor-analysis-checklist"
                        className="text-primary"
                      >
                        SEO strategy
                      </Link>{" "}
                      helps you outrank competitors who rely only on referrals
                      by winning attention at the exact moment of need.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">Local Dominance</h3>
                    <p>
                      Local SEO ensures you show up for high-intent local
                      searches, so you become the default choice in your service
                      area.
                    </p>
                  </div>
                </div>
              </section>

              {/* CTA with form */}
              <div className="p-relative pt-60 pb-80">
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
                            Build Your roofing-seo-services Success Story with Biztalbox
                          </span>
                          <h3 className="tm-details-title">Get Started Today</h3>
                        </div>
                        <div className="tm-details-text">
                          <p>
                            If you&apos;re ready to increase visibility, build
                            trust, and drive more calls and quote requests,
                            Biztalbox can help. We build roofing SEO strategies
                            that don&apos;t just rank — they generate leads.
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

              {/* Strategy */}
              <section className="content-section">
                <h2 className="section-heading">
                  Complete Roofing SEO Strategy for Contractors and Companies
                </h2>
                <p className="content-prose">
                  Roofing SEO works best as a holistic plan — content, technical
                  setup, and local visibility working together. When executed
                  well, traffic becomes calls, quote requests, and booked
                  projects.
                </p>
                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Roofing Keyword Strategy: Capturing Real Customer Demand
                    </h3>
                    <p>
                      Keywords reveal intent: emergency fixes, scheduled work, or
                      advice. A well-researched{" "}
                      <Link
                        href="https://biztalbox.com/blog/how-to-do-keyword-research-for-seo"
                        className="text-primary"
                      >
                        keyword strategy
                      </Link>{" "}
                      makes sure your pages match what customers actually search.
                    </p>
                    <ul className="mt-20">
                      <li>
                        <strong>Informational:</strong> “how to spot roof
                        damage”, “roof maintenance tips”
                      </li>
                      <li>
                        <strong>Transactional:</strong> “emergency roof repair
                        near me”, “roof replacement [city]”
                      </li>
                      <li>
                        <strong>Commercial:</strong> “best roofing contractors in
                        [city]”, “metal roofing installation quotes”
                      </li>
                      <li>
                        <strong>Local/service-specific:</strong> “shingle repair
                        near me”, “roofing contractors [neighborhood]”
                      </li>
                    </ul>
                    <p className="mt-20">
                      Use tools like{" "}
                      <Link
                        href="https://biztalbox.com/blog/google-search-console-keyword-research"
                        className="text-primary"
                      >
                        Google Search Console
                      </Link>{" "}
                      to identify real queries and build clusters.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Content Strategy for Roofing Companies: Content That
                      Converts
                    </h3>
                    <p>
                      Good content answers questions, clarifies services, and
                      earns trust. Structured content guides homeowners from
                      awareness to action.
                    </p>
                    <p style={{ marginTop: "1rem" }}>
                      <strong>TOFU (Awareness):</strong> Blogs, guides, FAQs for
                      early-stage searches.
                    </p>
                    <p>
                      <strong>MOFU (Consideration):</strong> Clear service pages,
                      case studies, testimonials, comparisons.
                    </p>
                    <p>
                      <strong>BOFU (Decision):</strong> Location pages, strong
                      CTAs, guarantees, click-to-call, fast quote forms.
                    </p>
                    <p>
                      Internal linking across these stages helps users move
                      through the funnel and helps search engines understand your
                      site structure.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Off-Page SEO for Roofing: Building Authority and Trust
                    </h3>
                    <p>
                      Off-page SEO builds the signals that tell search engines
                      your roofing business is trusted.
                    </p>
                    <ul className="mt-20">
                      <li>Relevant backlinks from home improvement sources</li>
                      <li>Local listings and citations (NAP consistency)</li>
                      <li>
                        <Link
                          href="https://biztalbox.com/blog/social-proof-in-marketing"
                          className="text-primary"
                        >
                          Social proof
                        </Link>{" "}
                        through reviews, mentions, and community engagement
                      </li>
                      <li>Guest posts and industry contributions</li>
                      <li>Partnerships with builders and local businesses</li>
                      <li>Active reputation management and review responses</li>
                    </ul>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Technical SEO for Roofing Websites: A Strong Foundation
                    </h3>
                    <p>
                      Technical SEO ensures search engines can crawl, index, and
                      rank your pages — and users can navigate smoothly.
                    </p>
                    <ul className="mt-20">
                      <li>
                        Site speed and performance (reduce bounce rate and improve
                        conversions)
                      </li>
                      <li>Mobile-friendly, responsive design</li>
                      <li>Security (HTTPS) and trust signals</li>
                      <li>Clear navigation, clean URLs, structured headings</li>
                      <li>XML sitemaps and schema/structured data</li>
                      <li>
                        Regular maintenance and{" "}
                        <Link
                          href="https://biztalbox.com/blog/how-to-do-an-seo-audit"
                          className="text-primary"
                        >
                          SEO audits
                        </Link>
                      </li>
                    </ul>
                    <p className="mt-20">
                      A well-chosen{" "}
                      <Link
                        href="https://biztalbox.com/blog/best-cms-for-seo"
                        className="text-primary"
                      >
                        CMS
                      </Link>{" "}
                      also makes technical SEO easier to manage over time.
                    </p>
                  </div>
                  <div className="content-card" style={{ gridColumn: "1 / -1" }}>
                    <h3 className="section-subheading">
                      Adapting Roofing SEO for AI Search: AIO and GEO
                    </h3>
                    <p>
                      Roofing SEO now must account for AI-driven search. People
                      ask longer questions, and platforms generate answers by
                      pulling from multiple sources.
                    </p>
                    <p>
                      That&apos;s why AIO (AI Optimization) focuses on clear,
                      well-structured content that AI systems can interpret —
                      helpful headings, concise answers, FAQs, and long-tail
                      queries without{" "}
                      <Link
                        href="https://biztalbox.com/blog/keyword-stuffing-in-seo"
                        className="text-primary"
                      >
                        keyword stuffing
                      </Link>
                      .
                    </p>
                    <p>
                      Learn the difference between{" "}
                      <Link
                        href="https://biztalbox.com/blog/aio-vs-aeo-vs-geo"
                        className="text-primary"
                      >
                        AIO, AEO, and GEO
                      </Link>{" "}
                      — and build visibility for the next wave of search.
                    </p>
                  </div>
                </div>
              </section>

              {/* Local SEO */}
              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Local SEO Is Crucial for Roofing Contractors
                </h2>
                <p>
                  Roofing is local and high-intent. People search “roofers near
                  me” when they&apos;re ready to act. Local SEO ensures you show
                  up across your service areas and look credible immediately.
                </p>
                <h3 className="section-subheading">
                  Key components of effective local SEO for roofing companies
                </h3>
                <ul className="mt-20">
                  <li>
                    <Link
                      href="https://biztalbox.com/blog/advantages-of-google-business-profile"
                      className="text-primary"
                    >
                      Google Business Profile
                    </Link>{" "}
                    optimization
                  </li>
                  <li>Customer reviews and consistent responses</li>
                  <li>Location pages for each city/area you serve</li>
                  <li>Local citations and directory listings (NAP consistency)</li>
                  <li>On-page local signals (titles, descriptions, content)</li>
                  <li>Mobile and voice search optimization</li>
                  <li>Localized content (storm damage, seasonal topics, etc.)</li>
                </ul>
                <p className="mt-20">
                  Once your foundation is in place, leverage the right{" "}
                  <Link
                    href="https://biztalbox.com/blog/seo-tools-you-need-in-2025-top-picks-to-improve-your-rankings"
                    className="text-primary"
                  >
                    SEO tools
                  </Link>{" "}
                  to scale your results.
                </p>
              </section>

              {/* Why Biztalbox */}
              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Choose Biztalbox: SEO Agency for Roofers Delivering Tangible
                  Leads
                </h2>
                <p>
                  At Biztalbox, we specialize in SEO for roofing companies — not
                  generic marketing. Roofing is a real-world business with
                  urgency, trust, and seasonal demand shifts.
                </p>
                <h3 className="section-subheading">Industry-Specific Understanding</h3>
                <p>
                  We optimize for the way roofing-related information is searched
                  — from emergency repairs to planned metal roof installations —
                  so your business shows up when customers are ready to call.
                </p>
                <h3 className="section-subheading">
                  Ongoing Optimization for Shifting Demand
                </h3>
                <p>
                  Roofing searches change with weather, seasons, and local
                  events. We continuously monitor trends, update content, refresh
                  keywords, and optimize local listings to capture opportunity
                  as it appears.
                </p>
                <h3 className="section-subheading">Tailored Roofing SEO Services</h3>
                <p>
                  Whether you focus on commercial roofs, residential shingle
                  repair, or metal roofing installations, we tailor strategy to
                  your services, service areas, and growth goals.
                </p>
                <h3 className="section-subheading">Transparency and Reporting</h3>
                <p>
                  You’ll always know how your website ranks, which pages drive
                  calls, and what&apos;s being improved — no vague metrics.
                </p>
                <h3 className="section-subheading">An Extension of Your Team</h3>
                <p>
                  We work as an integrated search and content partner, aligning
                  SEO with your operations and business outcomes.
                </p>
                <h3 className="section-subheading">Ready to Grow Your Roofing Business?</h3>
                <p>
                  Every call and booked job starts with discovery. With expert{" "}
                  <Link
                    href="https://biztalbox.com/best-seo-agency"
                    className="text-primary"
                  >
                    SEO services
                  </Link>
                  , your website becomes a consistent lead generator, not a
                  brochure.
                </p>
              </section>

              {/* Final CTA copy */}
              <section className="content-section">
                <div
                  style={{
                    textAlign: "center",
                    maxWidth: "800px",
                    margin: "0 auto",
                  }}
                >
                  <h2 className="section-heading">
                    Let Your Roofing Business Show Up When It Matters Most
                  </h2>
                  <p className="content-prose" style={{ marginTop: "1.25rem" }}>
                    Roofing companies don&apos;t lose jobs because they lack skill
                    — they lose jobs because they aren&apos;t visible when
                    decisions are being made. Biztalbox builds roofing SEO
                    strategies that put you in front of high-intent customers and
                    turn visibility into qualified leads.
                  </p>
                  <p
                    style={{
                      marginTop: "1.25rem",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      color: "#fff",
                    }}
                  >
                    Reach out today and we&apos;ll map the search opportunities
                    you&apos;re missing — and the fastest path to more calls.
                  </p>
                </div>
              </section>
            </div>

            {/* Full-width CTA with form */}
            <div className="p-relative pt-60 pb-80">
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
                          Ready to Scale Your Roofing Business?
                        </span>
                        <h3 className="tm-details-title">Get Started Today</h3>
                      </div>
                      <div className="tm-details-text">
                        <p>
                          Your customers are searching — make sure they find you
                          first. Partner with Biztalbox and start driving roofing
                          leads that convert into booked projects.
                        </p>
                      </div>
                      <div className="tm-details-portfolio">
                        <span className="tm-details-social-title">
                          Get in Touch:
                        </span>
                        <a href="tel:+919485699709">+91 9485699709</a>
                        <a href="mailto:info@biztalbox.com">info@biztalbox.com</a>
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
              <div
                className="tm-details-wrapper p-relative pt-80 pb-80"
                style={{ height: "auto" }}
              >
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
                          What Makes Biztalbox Different
                        </h3>
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
                              <h3 className="text-white">
                                Roofing Search Strategy Built Around Real Demand
                              </h3>
                              <p>
                                We don’t rely on templates. We build keyword and
                                content clusters around how homeowners actually
                                search: emergency repairs, seasonal maintenance,
                                material comparisons, and local contractor
                                evaluations.
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div
                              className={`tp-about-4-content item-2 ${
                                !isMobile ? "tp_fade_bottom" : ""
                              }`}
                            >
                              <h3 className="text-white">
                                Lead Quality Optimisation, Not Just Traffic
                              </h3>
                              <p>
                                We optimize for the calls and quote requests that
                                turn into projects — targeting intent and
                                filtering out low-value clicks that waste time.
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
                              <h3 className="text-white">
                                Strong Local Execution Across Service Areas
                              </h3>
                              <p>
                                We strengthen your local presence through GBP
                                optimization, citations, location pages, and
                                localized content so you win in the markets you
                                serve.
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div
                              className={`tp-about-4-content item-2 ${
                                !isMobile ? "tp_fade_bottom" : ""
                              }`}
                            >
                              <h3 className="text-white">
                                Technical + Content Systems That Scale
                              </h3>
                              <p>
                                We combine technical SEO, structured content, and
                                AI-ready formatting so your visibility compounds
                                over time — and stays resilient as search
                                evolves.
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

            <ServiceThree showIndustry={false} />
          </main>
          <FooterThree />
        </div>
      </div>
    </Wrapper>
  );
}