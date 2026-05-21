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
                            Ecommerce Graphic Design Services and Video Editing
                            Services: Improving Customer Experience and Brand
                            Growth
                          </h1>
                          <p>
                            Ecommerce does not feel like traditional shopping
                            anymore. It feels more like scrolling through
                            decisions.
                          </p>
                          <p>
                            A customer opens their phone, and within seconds,
                            they are inside a marketplace of distractions:
                            products, ads, offers, comparisons, and reviews.
                            Everything competes for attention at the same time,
                            and most of it is judged before it is even
                            understood.
                          </p>
                          <p>
                            In that environment, brands do not really get
                            “explored” first. They get filtered.
                          </p>
                          <p>
                            People decide quickly whether something looks worth
                            their time or not, and that decision is almost
                            always visual.
                          </p>
                          <p>
                            Ecommerce marketing creatives are the difference
                            between being seen and being ignored.
                          </p>
                          <p>
                            And it is also why ecommerce graphic design services
                            and ecommerce video editing services are no longer
                            just part of branding. They are part of how products
                            are actually perceived in the first place. The
                            design sets the expectation. The video confirms it.
                            Together, they shape whether a customer continues or
                            scrolls away.
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
                  Why Ecommerce Brands Depend on Strong Visual Communication
                  Today
                </h2>
                <p>
                  <Link
                    href="https://biztalbox.com/ecommerce-seo"
                    className="text-primary"
                  >
                    Ecommerce
                  </Link>{" "}
                  brands today do not just sell products. They constantly
                  communicate through ads, product listings, social media posts,
                  landing pages, emails, and campaigns that run across multiple
                  platforms at once.
                </p>
                <p>And every one of those touchpoints carries weight.</p>
                <p>
                  This is exactly why ecommerce content creation services have
                  become essential, not for decoration, but for consistency.
                  Because when visuals change from platform to platform, trust
                  starts to drop, even if the product is good.
                </p>
                <p>
                  Graphic design for online stores brings structure into this
                  chaos. It helps products feel readable at a glance. Pricing,
                  features, benefits, and positioning become easier to
                  understand when they are visually organized instead of dumped
                  as text.
                </p>
                <p>
                  Video takes that clarity further. It helps people understand
                  how a product actually exists in real life. The texture. The
                  movement. The size in someone’s hand. How a fabric falls. How
                  a bag opens. That changes the buying experience completely.
                </p>
                <p>
                  The product stops feeling like a static listing on a screen
                  and starts feeling familiar.
                </p>
                <p>
                  When design and video are aligned, ecommerce stops feeling
                  like a catalog and starts feeling like a guided experience.
                </p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  How Graphic Design and Video Editing Benefit Ecommerce Brands
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">Stronger Branding</h3>
                    <p>
                      When visuals stay consistent, customers start recognizing
                      the brand without effort. That recognition slowly turns
                      into familiarity, and familiarity builds trust.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Better Audience Engagement
                    </h3>
                    <p>
                      People naturally stop for visuals that feel clean and
                      intentional. That is where ecommerce marketing creatives
                      start working, not by shouting, but by holding attention.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Improved Product Presentation
                    </h3>
                    <p>
                      Design helps simplify how a product is shown, while video
                      helps explain how it actually fits into real life.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Higher Social Media Performance
                    </h3>
                    <p>
                      Content performs better when it communicates quickly.
                      Strong visuals and sharp editing help brands explain more
                      in less time. This increases your organic visibility on{" "}
                      <Link
                        href="https://biztalbox.com/blog/best-social-media-marketing-tools"
                        className="text-primary"
                      >
                        social media.
                      </Link>
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Enhanced Trust and Credibility
                    </h3>
                    <p>
                      Customers do not always analyze brands deeply. They judge
                      quickly, and polished visuals often create an immediate
                      sense of reliability.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Simplified Communication
                    </h3>
                    <p>
                      Instead of overwhelming users with information, design
                      breaks it into visual clarity. Video reinforces it without
                      needing explanation.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">Better Conversions</h3>
                    <p>
                      When users understand a product without effort, hesitation
                      drops. And when hesitation drops, conversions improve.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Professional Digital Experience
                    </h3>
                    <p>
                      A structured visual presence makes the entire shopping
                      journey feel smoother and more intentional.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Consistent Visual Identity
                    </h3>
                    <p>
                      When everything looks connected, ads, website,{" "}
                      <Link
                        href="https://biztalbox.com/blog/what-is-social-media-advertising"
                        className="text-primary"
                      >
                        social media
                      </Link>
                      , the brand feels more stable and established.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">Wider Audience Reach</h3>
                    <p>
                      Good video content spreads more naturally. It gets shared,
                      saved, and revisited, extending reach without extra
                      effort.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Choosing the Right Creative Partner for Ecommerce Matters
                </h2>
                <p>
                  If the creative direction is weak, customers notice it
                  immediately. Your brand may still exist online but it will not
                  stand out, communicate clearly, or convert attention into
                  action.
                </p>
                <p>
                  A right creative partner benefits your business by making
                  every visual easy to understand, aligned with how users think,
                  and structured to guide faster decisions.
                </p>
                <p>
                  In ecommerce, this directly impacts how quickly people trust
                  your product and whether they move forward or leave. Good
                  creative work does not just improve appearance. It improves
                  clarity, perception, and performance at the same time. And
                  that is what actually drives results.
                </p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  Why Choose Biztalbox for Ecommerce Graphic Design and{" "}
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
                      Industry-Focused Creative Approach
                    </h3>
                    <p>
                      We understand how ecommerce brands operate and how
                      customers actually make decisions online.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Professional Branding Solutions
                    </h3>
                    <p>
                      Biztalbox&apos;s ecommerce graphic design services focus
                      on building clarity, consistency, and recognition across
                      all platforms.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      High-Quality Video Editing
                    </h3>
                    <p>
                      We create ecommerce video editing services that make
                      products easier to understand and more engaging to
                      experience.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Platform-Optimized Content
                    </h3>
                    <p>
                      Biztalbox designs marketing creatives specifically for
                      ads, social media, websites, and performance campaigns.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Consistent Brand Communication
                    </h3>
                    <p>
                      We make sure every visual touchpoint feels part of the
                      same brand system.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Creative + Strategic Execution
                    </h3>
                    <p>
                      Design is not just visual. We align it with actual
                      business outcomes like engagement and conversion.
                    </p>
                  </div>
                  <div className="content-card" style={{ gridColumn: "1 / -1" }}>
                    <h3 className="section-subheading">
                      Customized Content Solutions
                    </h3>
                    <p>
                      Every brand is different, so our ecommerce content
                      creation services are built around specific goals and
                      audiences.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Ecommerce Brands Should Invest in Professional Graphic
                  Design and Video Editing Services?
                </h2>
                <p>
                  Ecommerce is becoming more visual, more competitive, and more
                  instantaneous in how decisions are made.
                </p>
                <p>
                  People do not spend time analyzing brands anymore. They
                  respond to how things look and feel in the moment.
                </p>
                <p>
                  In that environment, ecommerce graphic design services and
                  ecommerce video editing services are no longer supporting
                  elements. They are part of the decision-making process itself.
                </p>
                <p>
                  Brands that understand this shift do not just get seen more.
                  They get chosen more.
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
                            Ready to Elevate Your Ecommerce Brand?
                          </span>
                          <h3 className="tm-details-title">Get Started Today</h3>
                        </div>
                        <div className="tm-details-text">
                          <p>
                            Are you ready to elevate your Ecommerce brand?
                            Connect with Biztalbox for ecommerce graphic design
                            services and start turning your product visuals into
                            real sales-driving assets.
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
                    Ready to elevate your Ecommerce brand?
                  </h2>
                  <p className="content-prose" style={{ marginTop: "1.25rem" }}>
                    Connect with Biztalbox for ecommerce graphic design services
                    and start turning your product visuals into real
                    sales-driving assets.
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
