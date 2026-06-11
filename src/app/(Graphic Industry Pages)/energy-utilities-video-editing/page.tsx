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
                            Graphic Design and Video Editing Services for Energy and Utilities Industry: Helping Complex Services Feel Clearer and More Trustworthy
                          </h1>
                          <p>The interesting thing about the energy and utilities industry is that people depend on it constantly, but most rarely understand what&apos;s happening behind the scenes.</p>
                          <p>Electricity distribution. Renewable energy projects. Water management systems. Industrial utilities. Solar infrastructure. Smart energy solutions. A lot of these services involve technical processes that can feel overwhelming when explained only through documents, numbers, or technical language.</p>
                          <p>And that creates a communication gap. Because whether someone is a residential customer, a commercial client, an investor, or even a government stakeholder, they still want the same basic thing before they trust a company: clarity.</p>
                          <p>That&apos;s why visual communication has become such a big part of this industry now. Graphic design and  <Link href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa" className="text-primary">video editing services</Link>  for energy and utilities industry are becoming increasingly valuable.</p>
                          <p>Because strong visuals help technical businesses feel more understandable, more organized, and far more trustworthy.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <BookCallForm />

            <div className="container">
              <section className="content-section content-prose">
                <h2 className="section-heading">
                  How Graphic Design and Video Editing Work in Energy and Utilities Industry
                </h2>
                          <p>The energy sector deals with information that is often difficult to explain quickly. This is where energy and utilities graphic design becomes useful.</p>
                          <p>Things like project presentations, safety manuals, plant brochures, sustainability reports, investor decks, infographics, websites, utility dashboards, social media creatives, and energy ad creatives help companies present technical information in a cleaner and more structured way.</p>
                          <p>Video content solves a different challenge. A lot of energy and utility operations are difficult for people to visualize unless they can actually see them.</p>
                          <p>Facility walkthroughs, infrastructure showcases, renewable energy projects, safety process videos, plant operations, equipment installations, maintenance workflows, and utility service videos help audiences understand the scale and functionality behind the business.</p>
                          <p>Especially now, when companies are competing heavily for visibility across websites, LinkedIn, YouTube, presentations, conferences, and investor communication.</p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  How Graphic Design and Video Editing Benefit Energy and Utilities Businesses
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">1. Makes Technical Information Easier to Understand</h3>
                    <p>Visual communication simplifies systems, processes, and infrastructure for different audiences.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">2. Improves Corporate Credibility</h3>
                    <p>Professional presentation helps energy companies appear more established and trustworthy.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">3. Strengthens Investor and B2B Communication</h3>
                    <p>Well-designed reports and presentations improve how businesses communicate capabilities and projects.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">4. Helps Explain Renewable Energy Solutions</h3>
                    <p>Visual content makes solar, sustainability, and green energy systems easier to understand.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">5. Creates Better Public Communication</h3>
                    <p>Clear visuals help utility companies communicate outages, maintenance updates, and public information more effectively.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">6. Improves Brand Recognition</h3>
                    <p>Consistent branding across websites, reports, banners, posters, <Link href="https://biztalbox.com/social-media-marketing" className="text-primary">social media</Link>, and presentations improves visibility.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">7. Makes Operations More Visible</h3>
                    <p>Facility walkthroughs and utility service videos help audiences understand the scale behind the business.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">8. Improves Engagement Across Digital Platforms</h3>
                    <p>Well-edited infrastructure and energy content performs much better online than static technical communication.</p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Choosing the Right Creative Partner Matters for Energy and Utilities Companies
                </h2>
                <p>Energy and utility companies need communication that feels clear, credible, and professional.</p>
                <p>A lot of creative agencies focus heavily on aesthetics while ignoring technical accuracy and operational clarity. But businesses in this industry cannot rely on flashy marketing alone.</p>
                <p>The ideal creative agency knows how to visually communicate complicated messages without oversimplifying the business. Because in this industry, clarity builds confidence.</p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  Why Energy and Utility Companies Choose Biztalbox for Graphic Design and Video Editing Services
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      1. Industry-Focused Creative Understanding
                    </h3>
                    <p>We understand how technical industries communicate with customers, investors, stakeholders, and commercial clients.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      2. Professional Energy and Utilities Graphic Design
                    </h3>
                    <p>Our visuals help energy companies present infrastructure, systems, and operations more clearly and professionally.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      3. Practical Video Editing Strategy
                    </h3>
                    <p>We create energy video editing services that showcase facilities, renewable projects, operations, safety systems, and utility workflows effectively.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      4. Platform-Optimized Content
                    </h3>
                    <p>We create visuals that work naturally across LinkedIn, presentations, websites, YouTube, conferences, and investor communication.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      5. Stronger Visual Consistency
                    </h3>
                    <p>We help businesses maintain connected branding across every communication channel so the company always feels aligned and professional.</p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Visual Communication Is Becoming Essential for Modern Energy and Utility Companies
                </h2>
                <p>The energy industry is more digital, visible, and communication-driven than ever. Customers expect clarity. Investors expect strong presentations.</p>
                <p>As competition continues to grow across renewable energy, industrial utilities, and infrastructure sectors, companies with stronger branding and clearer communication naturally stand out faster.</p>
                <p>
                  In the{" "}
                  <Link
                    href="https://biztalbox.com/energy-utilities-SEO"
                    className="text-primary"
                  >
                    Energy and Utilities Industry
                  </Link>
                  , strong visuals and clear communication help your business
                  stand out locally and earn trust before the first call.
                </p>
              </section>

              <div className="p-relative pt-20">
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
                            Ready to make your energy and utilities business look more trusted online?
                          </span>
                          <h3 className="tm-details-title">Get Started Today</h3>
                        </div>
                        <div className="tm-details-text">
                          <p>
                            Connect with Biztalbox for graphic design and video editing services for energy and utilities industry that help simplify complex communication, strengthen credibility, and make your operations easier to understand online.
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

              <section className="content-section">
                <div
                  style={{
                    textAlign: "center",
                    maxWidth: "900px",
                    margin: "0 auto",
                  }}
                >
                  <h2 className="section-heading">
                    Ready to make your energy and utilities business look more trusted online?
                  </h2>
                  <p className="content-prose" style={{ marginTop: "1.25rem" }}>
                    Connect with Biztalbox for graphic design and{" "}
                    <Link
                      href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa"
                      className="text-primary"
                    >
                      video editing services
                    </Link>{" "}
                    for energy and utilities that help your business look more professional,
                    build stronger customer trust, and stand out across local
                    platforms.
                  </p>
                  <p
                    style={{
                      marginTop: "1.25rem",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      color: "#fff",
                    }}
                  >
                    Get in touch with Biztalbox today and elevate your energy and utilities brand online.
                  </p>
                </div>
              </section>
            </div>

            <ServiceThree showIndustry={false} />
          </main>
          <FooterThree />
        </div>
      </div>
    </Wrapper>
  );
}
