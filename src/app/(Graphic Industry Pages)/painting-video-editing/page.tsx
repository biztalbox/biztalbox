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
                            How Painting Service Providers Use Graphic Design and Video Editing Services to Attract Customers
                          </h1>
                          <p>The painting services industry has changed significantly in the way customers choose businesses. Someone liked a neighbour&apos;s house, asked for the painter&apos;s number, and called.</p>
                          <p>Now customers search first. They search on Google, compare social media pages, look through project photos, read reviews, and try to understand which business feels the most reliable.</p>
                          <p>And all of that happens before the first phone call. This shift has made visual communication far more important for painting businesses than it used to be.</p>
                          <p>Customers are no longer looking only at whether a wall was painted properly. They pay attention to how projects are presented online. They notice finishing quality, color combinations, cleanliness, detailing, space transformation, and overall professionalism.</p>
                          <p>A poorly presented business immediately creates hesitation. If project images feel random, branding looks inconsistent, or the business page appears inactive, customers often assume the company may not be dependable either.</p>
                          <p>This is where graphic design services for painting services industry create real value.</p>
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
                  How Graphic Design and Video Editing Improve the Presentation of Painting Businesses
                </h2>
                          <p>Strong branding helps painting businesses look more organized, more established, and easier to recognize locally. It improves how services are presented across websites, brochures, ads, quotations, vehicle graphics, and social media.</p>
                          <p>At the same time, customers now engage much more with motion-based content.</p>
                          <p>Short walkthroughs, transformation reels, and project showcase videos hold attention longer because they help people understand the work more naturally.</p>
                          <p>
                            That is why{" "}
                            <Link
                              href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa"
                              className="text-primary"
                            >
                              video editing services
                            </Link>{" "}
                            for painting services industry have become increasingly
                            important for businesses trying to improve visibility
                            online. Because in a service industry built around
                            transformation, people want to experience the result
                            visually before they trust the business with their
                            space.
                          </p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  How Graphic Design and Video Editing Benefit Painting Businesses
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">1. Creates Stronger First Impressions</h3>
                    <p>Customers judge professionalism within seconds. Clean branding and organised visuals create confidence fast.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">2. Makes Quality Easier To Understand</h3>
                    <p>Most customers don&apos;t know painting terminology, but they instantly recognise clean finishes, detailing, and balanced colours.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">3. Explains Services Clearly</h3>
                    <p>Waterproofing, texture painting, wood coating, and exterior work become easier to understand through visuals than long descriptions.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">4. Higher Engagement on Social Platforms</h3>
                    <p>Painting transformations naturally perform well on platforms like Instagram, Facebook, and YouTube.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">5. Better Portfolio Value</h3>
                    <p>Professionally presented painting projects help businesses build a stronger portfolio that showcases quality, finish, and transformation.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">6. Improved Local Brand Recognition</h3>
                    <p>Consistent visual branding across online platforms and offline advertising helps painting businesses stay more recognizable locally.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">7. More Professional Customer Experience</h3>
                    <p>A visually organized business often feels easier to trust. Structured communication creates a smoother customer journey.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">8. Better Inquiry Conversion</h3>
                    <p>Customers who already understand the style and quality of work through visual content usually approach the business with stronger buying intent.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">9. Increased Long-Term Marketing Efficiency</h3>
                    <p>Strong visual assets reduce dependency on repetitive promotional messaging because projects themselves start becoming the marketing material.</p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Choosing the Right Creative Partner Matters in Painting Services Industry
                </h2>
                <p>Painting businesses need creative work that feels believable, not exaggerated.</p>
                <p>A lot of agencies create overly generic content that may look visually polished but fails to connect with how customers actually evaluate local service businesses.</p>
                <p>In this industry, authenticity matters heavily. Customers want to clearly see the work, understand the process, and feel confident that the business can deliver consistent results.</p>
                <p>The right creative partner understands this balance. Good creative execution does not distract from the work. It helps the work be presented more clearly.</p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  Why Choose Biztalbox for Graphic Design and Video Editing Services for Painting Businesses
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      1. Industry-Focused Creative Understanding
                    </h3>
                    <p>At Biztalbox, we understand how painting businesses attract customers in digitally competitive local markets.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      2. Transformation-Focused Video Content
                    </h3>
                    <p>Our video editing services for painters focus on showcasing project transformations in a way that feels visually engaging while still remaining authentic.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      3. Structured Brand Communication
                    </h3>
                    <p>
                      We create graphic design services for painting services
                      industry that improve consistency across websites,
                      brochures, advertisements, portfolios, and{" "}
                      <Link
                        href="https://biztalbox.com/social-media-marketing"
                        className="text-primary"
                      >
                        social media
                      </Link>{" "}
                      platforms.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      4. Platform-Optimized Content Creation
                    </h3>
                    <p>The creative team at Biztalbox develops visuals specifically designed for Instagram Reels, Facebook campaigns, YouTube content, websites, and local search visibility.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      5. Stronger Visual Identity
                    </h3>
                    <p>We help painting businesses create a recognizable visual presence that customers can remember more easily across multiple platforms.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      6. Practical Marketing Approach
                    </h3>
                    <p>Our goal is not to create flashy content that feels disconnected from reality. We focus on helping businesses communicate quality more clearly and professionally.</p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Painting Businesses Need Stronger Branding and Video Content Today
                </h2>
                <p>Customers want to see the quality before they trust the business.</p>
                <p>And as more painting companies compete online, presentation starts shaping decisions much earlier in the process.</p>
                <p>
                  In the{" "}
                  <Link
                    href="https://biztalbox.com/painting-seo"
                    className="text-primary"
                  >
                    Painting Industry
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
                            Ready to Make Your Painting Brand Stand Out Online?
                          </span>
                          <h3 className="tm-details-title">Get Started Today</h3>
                        </div>
                        <div className="tm-details-text">
                          <p>
                            Connect with Biztalbox to create visuals and videos for your painting service that improve presentation, strengthen customer trust, and help your business attract more serious inquiries online.
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
                    Ready to Make Your Painting Brand Stand Out Online?
                  </h2>
                  <p className="content-prose" style={{ marginTop: "1.25rem" }}>
                    Connect with Biztalbox for graphic design and{" "}
                    <Link
                      href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa"
                      className="text-primary"
                    >
                      video editing services
                    </Link>{" "}
                    for painting that help your business look more professional,
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
                    Get in touch with Biztalbox today and elevate your painting brand online.
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
