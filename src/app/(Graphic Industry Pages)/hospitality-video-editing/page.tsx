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
                            Graphic Design and Video Editing Services for
                            Hospitality Brands: Turning Digital First
                            Impressions Into Hotel Bookings
                          </h1>
                          <p>
                            Most hotel decisions today don’t begin at the
                            property. They begin on a screen.
                          </p>
                          <p>
                            A guest is rarely searching with full intent at
                            first. They are simply scrolling through options,
                            comparing visuals in seconds. A single calm room
                            image or well-lit space can interrupt that scroll
                            and hold attention long enough to influence their
                            choice.
                          </p>
                          <p>
                            That first impression is exactly where hospitality
                            graphic design services influence how a property is
                            perceived before any booking happens.
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
                  Why Strong Graphics and Videos Matter for Hotels and
                  Hospitality Brands
                </h2>
                <p>
                  Hospitality today is no longer defined only by location or
                  amenities. Most properties offer similar experiences on paper.
                  The real difference is how they are perceived visually.
                </p>
                <p>
                  Guests now compare multiple hotels within seconds, often
                  without reading details. In that moment, hotel branding and
                  design services shape whether a property feels trustworthy or
                  forgettable.
                </p>
                <p>
                  Consistency also plays a major role in decision-making. When a
                  brand looks different across platforms, confidence drops.
                  Strong hospitality graphic design services help maintain a
                  stable and familiar presence.
                </p>
                <p>
                  Video editing strengthens this perception further. It gives
                  depth, movement, and atmosphere that static visuals cannot. It
                  creates emotional clarity before a booking decision is made.
                </p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  How Graphic Design and Video Editing Benefit Hospitality
                  Businesses
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Stronger Hotel Branding
                    </h3>
                    <p>
                      Hotel graphic design services help maintain a consistent
                      identity across websites, listings, and offline materials.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Better Guest Engagement
                    </h3>
                    <p>
                      Clean and structured visuals naturally hold attention
                      longer when showcasing spaces and experiences.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Higher Booking Conversion
                    </h3>
                    <p>
                      Clear presentation reduces hesitation and helps guests
                      make faster booking decisions.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Improved Social Media Presence
                    </h3>
                    <p>
                      Hotel{" "}
                      <Link
                        href="https://biztalbox.com/blog/what-is-social-media-advertising"
                        className="text-primary"
                      >
                        social media
                      </Link>{" "}
                      content performs better when it feels aspirational and
                      visually consistent.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Enhanced Trust and Credibility
                    </h3>
                    <p>
                      Guests quickly associate professional visuals with
                      reliability and service quality.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Better Property Presentation
                    </h3>
                    <p>
                      Hotel marketing creatives help present rooms and
                      facilities in a more organized and appealing way.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Emotional Connection With Guests
                    </h3>
                    <p>
                      Hospitality decisions are emotional, and visuals help
                      build anticipation before arrival.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Stronger Digital Visibility
                    </h3>
                    <p>
                      Consistent visuals help properties stand out in crowded
                      online platforms.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Better Campaign Performance
                    </h3>
                    <p>
                      Hospitality ad creative services improve engagement and
                      click-through rates in digital campaigns.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">Wider Audience Reach</h3>
                    <p>
                      Video content spreads more naturally across platforms,{" "}
                      <Link
                        href="https://biztalbox.com/hotel-seo"
                        className="text-primary"
                      >
                        increasing organic visibility.
                      </Link>
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Choosing the Right Creative Partner Matters in Hospitality
                  Marketing
                </h2>
                <p>
                  If visual communication is inconsistent, guests feel
                  uncertainty even when the property is strong. That uncertainty
                  directly affects whether they move forward or not.
                </p>
                <p>
                  In hospitality, presentation is not separate from business
                  performance. It is part of it.
                </p>
                <p>
                  This is why hospitality creative agency support matters. The
                  right partner understands how guests evaluate hotels in
                  seconds and designs communication around that behavior.
                  Without that understanding, even good properties struggle to
                  convert attention into bookings.
                </p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  Why Choose Biztalbox for Hospitality Graphic Design and{" "}
                  <Link
                    href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa"
                    className="text-primary"
                  >
                    Video Editing Services
                  </Link>
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Customer-First Thinking
                    </h3>
                    <p>
                      We design based on how guests actually view, compare, and
                      decide on hotels online.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Brand Identity Consistency
                    </h3>
                    <p>
                      At Biztalbox, our hotel branding and design services
                      ensure strong and recognizable identity across all
                      platforms.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Experience-Focused Video Editing
                    </h3>
                    <p>
                      We use hospitality video editing services to highlight
                      atmosphere, comfort, and real stay experience.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Performance-Driven Campaign Design
                    </h3>
                    <p>
                      Our hospitality ad creative services are built to improve
                      engagement across booking platforms and ads.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      High-Impact Property Storytelling
                    </h3>
                    <p>
                      We create hotel promotional video services that help
                      properties stand out through clear visual storytelling.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Unified Visual Communication
                    </h3>
                    <p>
                      We develop hotel marketing creatives that stay consistent
                      across all digital touchpoints.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Strategic Creative Execution
                    </h3>
                    <p>
                      We align visuals with measurable outcomes like engagement
                      and bookings.
                    </p>
                  </div>
                  <div className="content-card" style={{ gridColumn: "1 / -1" }}>
                    <h3 className="section-subheading">
                      Continuous Brand Presence
                    </h3>
                    <p>
                      Through hospitality content creation services, we help
                      hotels stay visible and relevant over time.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  What Strong Visual Communication Changes for Hotel
                </h2>
                <p>
                  Hospitality decisions are no longer made at the property. They
                  are made on screens within seconds. Guests judge hotels based
                  on how they look before they ever experience them physically.
                </p>
                <p>
                  That is why hospitality graphic design services and
                  hospitality video editing services directly influence booking
                  outcomes.
                </p>
                <p>
                  In this industry, visuals are not support. They are the
                  decision trigger.
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
                            Ready to Upgrade Your Hospitality Marketing?
                          </span>
                          <h3 className="tm-details-title">Get Started Today</h3>
                        </div>
                        <div className="tm-details-text">
                          <p>
                            Partner with Biztalbox for hospitality graphic
                            design services and improve how guests perceive your
                            property online.
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
                    Ready to Upgrade Your Hospitality Marketing?
                  </h2>
                  <p className="content-prose" style={{ marginTop: "1.25rem" }}>
                    Partner with Biztalbox for hospitality graphic design
                    services and improve how guests perceive your property
                    online.
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
