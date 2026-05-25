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
                            How Graphic Design and Video Editing Services Help Movers and Packers Build Instant Trust
                          </h1>
                          <p>People rarely contact movers and packers during calm, easy phases of life.</p>
                          <p>Usually, it happens in the middle of change. A family is relocating to another city. An office is moving operations. There's already enough uncertainty in the air, which means customers arrive with concerns long before they make the first call.</p>
                          <p>Will the belongings be handled properly? Will the company stay professional once the payment is made? Will the move become more stressful than it already is?</p>
                          <p>That's why trust sits at the center of this industry. And today, that trust begins forming online.</p>
                          <p>Before reaching out, people observe everything: the website, social media presence, the quality of the visuals. Even something as small as how a quotation is presented influences perception.</p>
                          <p>This is exactly why graphic design and video editing are so valuable for movers and packers companies.</p>
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
                  What Design and Video Change for Movers and Packers Companies
                </h2>
                          <p>Relocation businesses run heavily on customer confidence. People are handing over their homes, furniture, electronics, documents, and personal belongings to strangers for a period of time.</p>
                          <p>Good design helps create that confidence. Clean quotations, branded trucks, structured brochures, polished websites, relocation checklists, and  <Link href="https://biztalbox.com/social-media-marketing" className="text-primary">social media</Link>  creatives make the business feel more composed and professional.</p>
                          <p>Video content solves another problem entirely. Most customers have never actually seen how professional movers and packers operate behind the scenes.</p>
                          <p>Packing walkthroughs, loading videos, relocation time-lapses, and behind-the-scenes operations make the service feel tangible. Customers stop imagining worst-case scenarios because they can finally see the process for themselves.</p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  How Graphic Design and Video Editing Benefit Movers and Packers Businesses
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">1. Builds trust before the first conversation</h3>
                    <p>Professional visuals help customers feel more comfortable approaching the business in the first place.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">2. Makes the company feel more organized</h3>
                    <p>Clear branding and structured communication bring a sense of calm to an industry people often associate with confusion and stress.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">3. Helps customers understand the process</h3>
                    <p>Visual content explains packing, transportation, loading, and relocation workflows far more clearly than long descriptions ever could.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">4. Reduces customer anxiety</h3>
                    <p>Process videos and walkthroughs reassure people because they can actually see how belongings are handled.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">5. Performs strongly online</h3>
                    <p>Relocation videos naturally attract attention because people are curious about transformation, movement, and behind-the-scenes processes.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">6. Creates a more credible online presence</h3>
                    <p>Strong branding helps movers and packers businesses appear more established and dependable across digital platforms.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">7. Improves inquiry quality</h3>
                    <p>Customers often arrive with better understanding and clearer expectations before they even make contact.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">8. Strengthens advertising performance</h3>
                    <p>Well-designed movers and packers ad creatives hold attention much faster than generic service advertisements.</p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Choosing the Right Creative Partner Matters for Movers and Packers
                </h2>
                <p>A lot of agencies misunderstand the movers and packers service industry.</p>
                <p>They focus heavily on flashy edits and exaggerated marketing, assuming louder visuals automatically create stronger impact. But relocation businesses work differently. Customers are not looking for entertainment here. They are looking for reassurance.</p>
                <p>The right creative partner understands that balance. Because in this industry, presentation fosters trust.</p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  Why Movers and Packers Businesses Choose Biztalbox for Graphic
                  Design and{" "}
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
                      1. We understand how trust influences customer decisions
                    </h3>
                    <p>Most people decide how they feel about a movers and packers company long before making contact. At Biztalbox, we understand how branding, visuals, and communication influence that first impression.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      2. We help businesses look more structured and dependable
                    </h3>
                    <p>
                      Our graphic design services help movers and packers
                      companies present themselves professionally across
                      quotations, posters, websites,{" "}
                      <Link
                        href="https://biztalbox.com/social-media-marketing"
                        className="text-primary"
                      >
                        social media
                      </Link>
                      , brochures, and advertisements.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      3. Our video editing focuses on real operations
                    </h3>
                    <p>We offer movers and packers video editing services that showcase packing standards, relocation workflows, transportation handling, and day-to-day operations in a way that feels natural and reassuring.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      4. We create tailored content for each platform
                    </h3>
                    <p>The team at Biztalbox develops platform-specific content for Google Business, Instagram, Facebook, YouTube, websites, and local advertising campaigns.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      5. We help businesses maintain visual consistency
                    </h3>
                    <p>At Biztalbox, we make your business look visually aligned across all digital and offline touchpoints, helping customers recognize and trust your brand more easily over time.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      6. We focus on trust, not empty promotion
                    </h3>
                    <p>Our creative approach is built around improving clarity, strengthening credibility, and helping businesses attract better-quality customer inquiries through communication that feels genuine.</p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Movers and Packers Need Strong Graphic Design and Video Editing Services Today
                </h2>
                <p>Customers now expect moving companies to feel professional online before they trust them with their belongings.</p>
                <p>As competition grows across digital platforms, businesses with clearer communication and stronger presentation naturally stand out faster. Not because they appear louder, but because they feel more reliable from the beginning.</p>
                <p>
                  In the{" "}
                  <Link
                    href="https://biztalbox.com/movers-packers-seo"
                    className="text-primary"
                  >
                    Movers and Packers Industry
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
                            Ready to Build Trust for Your Movers and Packers Business?
                          </span>
                          <h3 className="tm-details-title">Get Started Today</h3>
                        </div>
                        <div className="tm-details-text">
                          <p>
                            Connect with Biztalbox for graphic design and video editing services for movers and packers to make your business appear trustworthy, professional, and easy for customers to connect with.
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
                    Ready to Build Trust for Your Movers and Packers Business?
                  </h2>
                  <p className="content-prose" style={{ marginTop: "1.25rem" }}>
                    Connect with Biztalbox for graphic design and{" "}
                    <Link
                      href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa"
                      className="text-primary"
                    >
                      video editing services
                    </Link>{" "}
                    for movers and packers that help your business look more professional,
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
                    Get in touch with Biztalbox today and elevate your movers and packers brand online.
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
