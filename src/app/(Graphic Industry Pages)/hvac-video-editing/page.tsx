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
                            Graphic Design and Video Editing Services for HVAC Industry: Helping HVAC Businesses Build Trust Faster Online
                          </h1>
                          <p>Most customers start searching for HVAC services when something already feels urgent.</p>
                          <p>The AC stops working in peak summer. Heating issues suddenly appear. Ventilation problems start affecting comfort at home or the workplace. And during that search, customers usually compare multiple HVAC companies online within minutes.</p>
                          <p>But here is the challenge. Most homeowners cannot technically judge HVAC expertise before hiring. They cannot easily evaluate installation quality, airflow efficiency, or system performance just from a website or advertisement.</p>
                          <p>A business with clean branding, strong visuals, and an active online presence immediately feels more trustworthy. Poor presentation creates hesitation very quickly, even if the actual service quality is good.</p>
                          <p>
                            That is exactly why graphic design and{" "}
                            <Link
                              href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa"
                              className="text-primary"
                            >
                              video editing services
                            </Link>{" "}
                            for the HVAC industry are becoming important for modern
                            HVAC businesses. Because today, customers often decide
                            which company feels most reliable before the first
                            service visit even happens.
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
                  Why HVAC Businesses Should Invest in Graphic Design and Video Editing Services
                </h2>
                          <p>HVAC is a technical industry, but customer decisions here are heavily influenced by clarity and presentation. This is where HVAC graphic design starts to really add value.</p>
                          <p>
                            It helps HVAC businesses show up in a more professional
                            and consistent way everywhere customers see them. That
                            includes the website, brochures, quotations, maintenance
                            plans,{" "}
                            <Link
                              href="https://biztalbox.com/social-media-marketing"
                              className="text-primary"
                            >
                              social media
                            </Link>{" "}
                            pages, uniforms, vehicle branding, and even ads.
                          </p>
                          <p>When all of this looks visually connected, the business feels more put together. And customers naturally see it as more reliable and trustworthy.</p>
                          <p>Video content solves a different problem. Most customers lack an understanding of the process involved in installing and maintaining HVAC systems. Videos on installation procedures, maintenance processes, how airflow works, before and after projects, and repair videos help customers visually understand the work being done.</p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  How Graphic Design and Video Editing Benefit HVAC Businesses
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">1. Stronger Customer Trust</h3>
                    <p>Professional visuals help HVAC companies feel more dependable before customers even make contact.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">2. Better Local Brand Recognition</h3>
                    <p>Consistent branding across vehicles, pamphlets, banners and posters improves memorability.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">3. Clearer Service Communication</h3>
                    <p>Visual content helps explain HVAC systems, maintenance, and installations more simply.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">4. Higher Social Media Engagement</h3>
                    <p>Well-edited HVAC videos naturally perform better across digital platforms.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">5. More Professional Online Presence</h3>
                    <p>Strong branding helps HVAC businesses appear more established and organized.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">6. Reduces customer hesitation</h3>
                    <p>Professionally edited walkthrough videos and repair showcases help remove some of that uncertainty because customers can actually see the process.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">7. Better Quality Leads</h3>
                    <p>Customers already understand the business better before reaching out.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">8. Improved Advertising Performance</h3>
                    <p>Well-designed HVAC ad creatives hold attention faster than generic service promotions.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">9. Stronger Long-Term Visibility</h3>
                    <p>Consistent visuals improve recognition across local SEO pages, ads, and <Link href="https://biztalbox.com/social-media-marketing" className="text-primary">social media</Link> over time.</p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Choosing the Right Creative Partner Matters for HVAC Businesses
                </h2>
                <p>A lot of agencies create generic marketing that looks polished but does not actually help service businesses build trust.</p>
                <p>HVAC customers respond better to businesses that feel clear, practical, knowledgeable, and reliable.</p>
                <p>The right creative partner understands how to simplify technical communication without making the business feel overly promotional or artificial. Because in HVAC, clarity builds confidence.</p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  Why HVAC Businesses Choose Biztalbox for Graphic Design and Video Editing Services
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      1. Industry-Focused Creative Strategy
                    </h3>
                    <p>We understand how HVAC businesses compete for visibility and customer trust online.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      2. Professional HVAC Graphic Design
                    </h3>
                    <p>Our visuals help HVAC companies appear cleaner, more organized, and more established across platforms.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      3. Practical Video Editing Approach
                    </h3>
                    <p>We create HVAC video editing services that showcase installations, repairs, maintenance work, and system upgrades clearly.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      4. Platform-Optimized Marketing Content
                    </h3>
                    <p>The team at Biztalbox develops content specifically for Google Business, Instagram, Facebook, YouTube, and local advertising campaigns.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      5. Stronger Visual Consistency
                    </h3>
                    <p>We help HVAC businesses maintain connected branding across every customer touchpoint.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      6. Conversion-Focused Communication
                    </h3>
                    <p>Our approach focuses on improving trust, engagement, and inquiry quality instead of relying on generic promotional messaging.</p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Visual Communication Is Becoming Essential for Modern HVAC Businesses
                </h2>
                <p>Nowadays, customers require HVAC contractors to be well represented on the Internet before contacting them.</p>
                <p>With competition constantly increasing within the digital space, companies that have better branding, visuals, and communications capabilities gain the upper hand.</p>
                <p>
                  In the{" "}
                  <Link
                    href="https://biztalbox.com/hvac-seo"
                    className="text-primary"
                  >
                    HVAC Industry
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
                            Ready to make your HVAC business look more trusted online?
                          </span>
                          <h3 className="tm-details-title">Get Started Today</h3>
                        </div>
                        <div className="tm-details-text">
                          <p>
                            Connect with Biztalbox to create visual content that helps your HVAC business build stronger trust, improve online presentation, and attract better-quality local inquiries.
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
                    Ready to make your HVAC business look more trusted online?
                  </h2>
                  <p className="content-prose" style={{ marginTop: "1.25rem" }}>
                    Connect with Biztalbox for graphic design and{" "}
                    <Link
                      href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa"
                      className="text-primary"
                    >
                      video editing services
                    </Link>{" "}
                    for HVAC that help your business look more professional,
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
                    Get in touch with Biztalbox today and elevate your HVAC brand online.
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
