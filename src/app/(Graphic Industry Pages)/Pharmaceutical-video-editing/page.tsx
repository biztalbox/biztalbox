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
            {/* Hero — compact for content-heavy page */}
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
                            Pharmaceutical Graphic Design Services and Video
                            Editing Services: Building Trust in a Highly
                            Regulated Market
                          </h1>
                          <p>
                            The pharmaceutical industry is built on trust, but
                            the way that trust is formed has changed quite a
                            bit in the last few years.
                          </p>
                          <p>
                            Earlier, credibility came from offline interactions.
                            Conferences, doctor networks, distributor meetings,
                            printed material. That still matters, but it is no
                            longer the first point of contact.
                          </p>
                          <p>
                            Today, most people encounter pharmaceutical brands
                            digitally first. A product page. A website. A
                            brochure PDF. Sometimes even a short explainer video
                            or a LinkedIn post. And in that moment, without a
                            physical interaction, the perception of the brand
                            is already forming.
                          </p>
                          <p>
                            That is where pharmaceutical graphic design and
                            pharmaceutical{" "}
                            <Link
                              href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa"
                              className="text-primary"
                            >
                              video editing services
                            </Link>{" "}
                            become very important. They aren’t just for
                            promotional purposes, but for brand building as well
                          </p>
                          <p>
                            Because in pharma, communication is not about
                            attention. It is about clarity, accuracy, and
                            confidence.
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
              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Visual Communication Matters in the Pharmaceutical
                  Industry
                </h2>
                <p>
                  If you look at pharmaceutical communication closely, most of
                  it is complex by default. Scientific terms, formulations,
                  dosage details, regulatory language, product mechanisms. It
                  is not easy information to process quickly.
                </p>
                <p>
                  And yet, the audience does not have more time than before. If
                  anything, they have less.
                </p>
                <p>
                  So the challenge is simple. How do you make complex
                  information easy to understand without losing its accuracy.
                  That is where design and video naturally fit in.
                </p>
                <p>
                  Good graphic design helps structure information. It decides
                  what to highlight, what to simplify, and how to guide the
                  reader’s attention. So even dense pharmaceutical details feel
                  more readable and less overwhelming.
                </p>
                <p>
                  Video does something similar, but in motion. It explains
                  processes, shows product usage, breaks down mechanisms, and
                  turns static information into something easier to follow.
                </p>
                <p>
                  When both are used properly through pharmaceutical content
                  creation services, communication becomes clearer without
                  becoming diluted.
                </p>
                <p>And in pharma, that balance is everything.</p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  How Pharmaceutical Design and Video Editing Services Benefit
                  Brands
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      1. Builds trust through clarity
                    </h3>
                    <p>
                      In pharmaceuticals, unclear communication creates doubt.
                      Clean and structured design helps remove confusion and
                      makes the brand feel more reliable and established.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      2. Better product understanding
                    </h3>
                    <p>
                      Many pharmaceutical products involve scientific
                      information that can feel difficult to process. Graphic
                      design and video content help simplify that information
                      without removing its meaning or accuracy.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      3. Strengthens brand credibility in B2B markets
                    </h3>
                    <p>
                      Distributors, hospitals, and healthcare professionals
                      often judge a company based on how well it presents its
                      products. Professional design directly influences
                      perceived credibility.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      4. Supports product education
                    </h3>
                    <p>
                      Explainer videos and structured visuals help communicate
                      dosage, benefits, and usage guidelines in a more
                      digestible format.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      5. Improves engagement in digital campaigns
                    </h3>
                    <p>
                      Well-designed creatives and videos perform better in
                      awareness campaigns and brand outreach.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      6. Creates Brand consistency
                    </h3>
                    <p>
                      Brand consistency also builds perception. When every
                      touchpoint looks aligned, packaging, brochures,
                      presentations, digital creatives, the brand feels more
                      stable and professionally managed.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      7. Stronger Product Positioning
                    </h3>
                    <p>
                      Good design helps products feel more credible and
                      professionally developed instead of looking generic.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      8. Easier information retention
                    </h3>
                    <p>
                      People tend to remember visual communication more easily
                      than long blocks of technical information.
                    </p>
                  </div>
                  <div className="content-card" style={{ gridColumn: "1 / -1" }}>
                    <h3 className="section-subheading">
                      9. Builds long-term brand recognition
                    </h3>
                    <p>
                      Consistent pharmaceutical branding and design services
                      help companies become recognizable in a highly competitive
                      and crowded market.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Choosing the Right Creative Partner Matters for
                  Pharmaceutical Businesses
                </h2>
                <p>
                  The wrong creative partner can make even a credible
                  pharmaceutical brand feel unclear or inconsistent.
                </p>
                <p>
                  In this industry, communication carries weight. A poorly
                  designed presentation, confusing product visual can affect
                  how the entire company is perceived.
                </p>
                <p>
                  That is why pharmaceutical brands need more than just creative
                  execution. They need a partner who understands how healthcare
                  communication actually works.
                </p>
                <p>
                  The right team knows how to simplify technical information
                  without making it feel diluted. They understand the balance
                  between clarity, professionalism, compliance, and trust. Good
                  creative partner for pharmaceutical brands, helping people
                  understand information clearly while making the brand feel
                  more dependable at the same time.
                </p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  Why Choose Biztalbox for Pharmaceutical Video Editing and
                  Graphic Design Services
                </h2>
                <p className="content-prose">
                  At Biztalbox, we understand that pharmaceutical communication
                  cannot feel careless or exaggerated. People expect clarity,
                  structure, and accuracy from healthcare brands. And visuals
                  play a major role in that.
                </p>
                <p className="content-prose">
                  Here are some reasons you should choose us for graphic design
                  and video editing services for pharmaceutical brands:
                </p>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      1. Clear and Easy-to-Understand Visuals
                    </h3>
                    <p>
                      Our approach is to turn the complex nature of
                      pharmaceuticals into a neat, easily digestible visual
                      representation without compromising scientific
                      information.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      2. Compliance-Sensitive Communication
                    </h3>
                    <p>
                      At Biztalbox, we understand that pharmaceutical
                      communication cannot feel careless or overly promotional.
                      Our approach keeps branding and communication accurate.
                      We always stay aligned with the standards healthcare
                      industries expect.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      3. Product-Focused Video Editing
                    </h3>
                    <p>
                      The creative team at Biztalbox develops pharmaceutical
                      video editing services that explain products, processes,
                      and usage information in a more visual and digestible
                      format.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      4. Consistent Pharmaceutical Branding
                    </h3>
                    <p>
                      We ensure that every touchpoint, from packaging to digital
                      assets, feels aligned and professional.
                    </p>
                  </div>
                  <div className="content-card" style={{ gridColumn: "1 / -1" }}>
                    <h3 className="section-subheading">
                      5. Trust-Oriented Content
                    </h3>
                    <p>
                      Our pharmaceutical content creation services are designed
                      to help brands communicate credibility and long-term
                      reliability, not just visibility.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  How Visual Communication Is Changing Pharmaceutical Branding
                </h2>
                <p>
                  The{" "}
                  <Link
                    href="https://biztalbox.com/pharmaceutical-seo"
                    className="text-primary"
                  >
                    pharmaceutical industry
                  </Link>{" "}
                  is becoming far more digital in the way it communicates.
                </p>
                <p>
                  As more healthcare communication moves online, presentation
                  now directly affects how brands are perceived. Pharmaceutical
                  graphic design services and pharmaceutical video editing
                  services are no longer supporting elements. They influence
                  trust, understanding, and professional credibility from the
                  very beginning.
                </p>
                <p>
                  Strong communication also helps simplify complex information.
                  When supported by structured pharmaceutical branding and
                  design services, technical content becomes easier to follow
                  and more approachable for different audiences.
                </p>
                <p>
                  And with thoughtful pharmaceutical content creation services,
                  brands are able to communicate in a way that feels clearer,
                  more organized, and more dependable over time.
                </p>
              </section>

              {/* CTA with form */}
              <div className="p-relative pt-20 pb-20">
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
                            Ready to Strengthen Your Pharmaceutical Brand
                            Visually?
                          </span>
                          <h3 className="tm-details-title">Get Started Today</h3>
                        </div>
                        <div className="tm-details-text">
                          <p>
                            Connect with Biztalbox for pharmaceutical graphic
                            design services, pharmaceutical video editing
                            services, and trust-oriented creative support built
                            for healthcare communication.
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
            </div>

            <ServiceThree showIndustry={false} />
          </main>
          <FooterThree />
        </div>
      </div>
    </Wrapper>
  );
}
