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
                            Graphic Design and Video Editing Services for Electricians: Helping Electrical Businesses Look More Reliable Online
                          </h1>
                          <p>Electricians work in one of the highest-trust service industries.</p>
                          <p>Customers are not just hiring someone to fix a switchboard or install lighting. They are entrusting an individual with the safety of their house, office, appliances, wiring and even the complete installation of the property.</p>
                          <p>And today, that decision usually starts online.</p>
                          <p>
                            Customers compare reviews, websites, local listings,
                            project photos, and{" "}
                            <Link
                              href="https://biztalbox.com/social-media-marketing"
                              className="text-primary"
                            >
                              social media
                            </Link>{" "}
                            pages before making contact. The problem is, most
                            people cannot technically judge electrical expertise
                            from the outside.
                          </p>
                          <p>Does the business feel organized? Does the work look clean? Does the company appear experienced? Does the online presentation create confidence or uncertainty?</p>
                          <p>That is how graphic design and video editing services for electricians start influencing customer decisions. Because in electrical services, professionalism is often judged visually before it is experienced practically.</p>
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
                  How Graphic Design and Video Editing Actually Influence Electrical Businesses
                </h2>
                          <p>Electrical work is usually hidden behind walls, ceilings, fittings, and systems customers never fully see. That makes communication even more important.</p>
                          <p>This is where electrician graphic design starts creating real business value. Things like branded quotations, safety brochures, van graphics, banners, posters, website layouts, service checklists, social media creatives, and electrician ad creatives all shape how professional the company feels overall.</p>
                          <p>Video content solves a completely different challenge. Most customers do not understand electrical systems well enough to appreciate the quality of the work without visual proof.</p>
                          <p>Watching rewiring videos, lighting equipment installation, safety checks, or before-and-after transformations can provide customers an insight into the process. That visibility changes perception quickly.</p>
                          <p>And electrical service videos perform especially well online because electrical transformations naturally catch attention.</p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  How Graphic Design and Video Editing Benefit Electrical Businesses
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">1. Makes the Business Feel Safer to Trust</h3>
                    <p>Professional visuals create confidence before customers even make contact.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">2. Helps Customers Understand Technical Work</h3>
                    <p>Visual content simplifies electrical services that most customers normally find confusing.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">3. Improves Local Brand Recognition</h3>
                    <p>Consistent branding across vans, uniforms, websites, and <Link href="https://biztalbox.com/social-media-marketing" className="text-primary">social media</Link> makes businesses easier to remember.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">4. Creates a More Professional Online Presence</h3>
                    <p>Strong electrician graphic design helps electrical businesses appear more established and organized.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">5. Showcases Work More Clearly</h3>
                    <p>Project walkthroughs and electrical service videos help customers actually see the quality of work.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">6. Increases Engagement on Social Media</h3>
                    <p>Electrical transformations and lighting projects naturally perform well through video content.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">7. Reduces Customer Hesitation</h3>
                    <p>Process videos create reassurance because customers understand what to expect beforehand.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">8. Improves Advertising Performance</h3>
                    <p>Well-designed electrician ad creatives usually attract attention much faster than generic promotions.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">9. Brings Better Quality Leads</h3>
                    <p>Customers already trust the business more before reaching out.</p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Choosing the Right Creative Partner Matters for Electrical Businesses
                </h2>
                <p>A wrong creative partner makes electrical marketing look aesthetic but unclear, which fails to build trust and leads to fewer inquiries because customers don&apos;t feel confident enough to call.</p>
                <p>The right partner focuses on clear, consistent, and real service presentation through graphic design and video editing services for electricians, which makes the business feel reliable and directly improves lead conversion.</p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  Why Electrical Businesses Choose Biztalbox for Graphic Design and Video Editing Services
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      1. We understand how trust shapes local service businesses
                    </h3>
                    <p>Electrical companies compete heavily on credibility, especially online. We understand how visual presentation influences customer confidence before the first call happens.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      2. Professional Electrician Graphic Design
                    </h3>
                    <p>Our electrician graphic design services help businesses present themselves clearly across quotations, websites, social media, brochures, and advertising materials.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      3. Our video editing services focus on real work
                    </h3>
                    <p>We create electrician video editing services that showcase installations, safety practices, lighting projects, upgrades, and electrical systems in a way that feels clear and authentic.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      4. We create platform-specific content
                    </h3>
                    <p>The team at Biztalbox develops content for Google Business, Instagram, Facebook, YouTube, websites, and local advertising campaigns.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      5. We help businesses maintain visual consistency
                    </h3>
                    <p>Consistent branding across vans, posters, pamphlets, websites, and customer communication helps electrical businesses feel more established over time.</p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Visual Communication Is Essential for Modern Electrical Businesses
                </h2>
                <p>Customers now expect electricians to look professional online before deciding who to contact.</p>
                <p>
                  As competition keeps growing across digital platforms,
                  businesses with stronger branding, clearer communication, and
                  better visuals naturally stand out faster. This is why graphic
                  design and{" "}
                  <Link
                    href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa"
                    className="text-primary"
                  >
                    video editing services
                  </Link>{" "}
                  for electricians are becoming important for long-term visibility
                  and customer confidence.
                </p>
                <p>
                  In the{" "}
                  <Link
                    href="https://biztalbox.com/electrician-seo"
                    className="text-primary"
                  >
                    Electrical Industry
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
                            Looking for Graphic Design and Video Editing Services for Electricians?
                          </span>
                          <h3 className="tm-details-title">Get Started Today</h3>
                        </div>
                        <div className="tm-details-text">
                          <p>
                            Connect with Biztalbox to create visual content that helps your electrical business look more professional, communicate expertise more clearly, and attract better-quality local inquiries.
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
                    Looking for Graphic Design and Video Editing Services for Electricians?
                  </h2>
                  <p className="content-prose" style={{ marginTop: "1.25rem" }}>
                    Connect with Biztalbox for graphic design and{" "}
                    <Link
                      href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa"
                      className="text-primary"
                    >
                      video editing services
                    </Link>{" "}
                    for electricians that help your business look more professional,
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
                    Get in touch with Biztalbox today and elevate your electrical brand online.
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
