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
                            Graphic Design and Video Editing Services for Logistics Industry: Elevate Your Logistics Business with Engaging Visuals
                          </h1>
                          <p>The logistics industry runs on reliability. Customers are not just choosing a transport provider. They are trusting a company with delivery timelines, inventory movement, supply chain coordination, product safety, and business operations that often cannot afford delays.</p>
                          <p>And today, most of those decisions start online.</p>
                          <p>Clients compare logistics companies through websites, social media pages, service presentations, case studies, and online branding before making inquiries.</p>
                          <p>The challenge is that most customers cannot easily judge operational strength from the outside. They cannot see warehouse systems, transportation coordination, or backend efficiency immediately. So they judge professionalism instead.</p>
                          <p>That is exactly why graphic design and video editing services for logistics industry are becoming important for modern logistics businesses. Because in this industry, credibility often starts forming long before the first shipment ever moves.</p>
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
                  The Role of Graphic Design and Video Editing in Logistics Industry
                </h2>
                          <p>A lot of logistics work happens behind the scenes. Customers usually do not see the coordination, movement, or systems involved unless the business presents them properly online. This is where logistics graphic design becomes useful.</p>
                          <p>Things like company profiles, truck branding, websites, quotation templates, posters, brochures, social media creatives, and logistics ad creatives help the business look more organized and professional.</p>
                          <p>Video content helps bring those operations into view. Warehouse walkthroughs, fleet movement videos, packaging processes, dispatch clips, and logistics service videos help customers understand how the company actually works.</p>
                          <p>Instead of only reading claims online, they can see the workflow, systems, and operations behind the business.</p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  How Graphic Design and Video Editing Benefit Logistics Businesses
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">1. Builds Business Credibility Faster</h3>
                    <p>Professional visuals help logistics companies appear more reliable and operationally strong.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">2. Makes Operations Easier to Understand</h3>
                    <p>Visual content simplifies logistics systems, workflows, and transportation processes for customers.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">3. Improves Brand Recognition</h3>
                    <p>Businesses with consistent visuals often appear larger and more established than competitors with similar capabilities.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">4. Strengthens B2B Presentation</h3>
                    <p>Well-designed company profiles and presentations create stronger impressions during client discussions.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">5. Creates a More Professional Online Presence</h3>
                    <p>Strong logistics branding helps companies appear more organized and established.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">6. Showcases Infrastructure More Clearly</h3>
                    <p>Warehouse walkthroughs and logistics service videos help customers see operational capability directly.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">7. Improves Social Media Engagement</h3>
                    <p>Fleet movement, loading systems, and operational videos naturally perform well online.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">8. Improves Advertising Performance</h3>
                    <p>Well-designed logistics ad creatives usually hold attention faster than generic service promotions.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">9. Strengthens Long-Term Brand Visibility</h3>
                    <p>Consistent visuals help logistics businesses stay recognizable across digital platforms over time.</p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Choosing the Right Creative Partner Matters for Logistics Businesses
                </h2>
                <p>A lot of creative agencies for logistics businesses focus only on aesthetics without understanding how trust works in B2B and logistics industries.</p>
                <p>But logistics customers are influenced by reliability and consistency far more than flashy branding.</p>
                <p>The right creative partner understands how to visually communicate operational strength without making the business feel exaggerated or artificial. Because in logistics, professionalism matters more than hype.</p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  Why Logistics Businesses Choose Biztalbox for Graphic Design and Video Editing Services
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      1. Industry-Focused Creative Understanding
                    </h3>
                    <p>At Biztalbox, we understand how logistics businesses compete for credibility and visibility online.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      2. Professional Logistics Graphic Design
                    </h3>
                    <p>Our videos and graphics help logistics companies appear more structured, reliable, and established across platforms.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      3. Practical Video Editing Strategy
                    </h3>
                    <p>We offer video editing services that showcase warehouse operations, fleet systems, transportation workflows, and fulfillment processes clearly.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      4. Platform-Optimized Content
                    </h3>
                    <p>The team at Biztalbox develops content specifically for LinkedIn, websites, YouTube, Instagram, and B2B marketing campaigns.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      5. Stronger Visual Consistency
                    </h3>
                    <p>We help logistics businesses maintain connected branding across every customer touchpoint.</p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Visual Communication Is Becoming Essential for Modern Logistics Businesses
                </h2>
                <p>Customers now expect logistics companies to look organized and professional online before deciding who to work with.</p>
                <p>As competition keeps growing across digital platforms, businesses with stronger branding, clearer communication, and better visuals naturally stand out faster.</p>
                <p>
                  In the{" "}
                  <Link
                    href="https://biztalbox.com/logistics-seo"
                    className="text-primary"
                  >
                    Logistics Industry
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
                            Ready to elevate your brand presence?
                          </span>
                          <h3 className="tm-details-title">Get Started Today</h3>
                        </div>
                        <div className="tm-details-text">
                          <p>
                            Connect with Biztalbox to create visual content that helps your logistics business communicate reliability, showcase operational strength, and attract better-quality business inquiries.
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
                    Ready to elevate your logistics brand presence?
                  </h2>
                  <p className="content-prose" style={{ marginTop: "1.25rem" }}>
                    Connect with Biztalbox for graphic design and{" "}
                    <Link
                      href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa"
                      className="text-primary"
                    >
                      video editing services
                    </Link>{" "}
                    for logistics that help your business look more professional,
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
                    Get in touch with Biztalbox today and elevate your logistics brand online.
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
