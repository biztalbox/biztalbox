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
                            Elevate Your Insurance Brand with Graphic Design and Engaging Video Editing Services: Building Trust and Credibility Online
                          </h1>
                          <p>Insurance is one of the most trust-sensitive industries online.</p>
                          <p>People are not casually buying a product. They are choosing who they trust with their health, business, car, family, property, or financial security.</p>
                          <p>And most customers still struggle to fully understand insurance policies, coverage terms, claim processes, or risk protection clearly.</p>
                          <p>So before they contact an insurance provider, they look for clarity. They check websites, social media pages, explainer videos, and brand presentation. This is how they judge if the insurance business looks professional.</p>
                          <p>An insurance company with outdated visuals, confusing communication, or inconsistent branding immediately feels harder to trust. But a business with clean branding, structured visuals, and clear communication feels more dependable before a conversation even starts.</p>
                          <p>
                            That is exactly why graphic design and{" "}
                            <Link
                              href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa"
                              className="text-primary"
                            >
                              video editing services
                            </Link>{" "}
                            are becoming important for modern insurance businesses
                            trying to build stronger trust online.
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
                  How Graphic Design and Video Editing Services Work for Insurance Businesses
                </h2>
                          <p>Insurance communication is usually information-heavy. There are policies, claims, benefits, renewals, coverage types, exclusions, and documentation. Most customers already feel overwhelmed trying to process it all.</p>
                          <p>Graphic design for insurance businesses makes it easier to process all this information. Things like policy brochures, insurance presentations, social media creatives, website layouts, onboarding guides, claim process graphics, emailers, and insurance ad creatives help simplify communication visually.</p>
                          <p>Video content solves another problem. Most customers hesitate because insurance feels abstract. They cannot physically see the service the way they can see a product or a completed project.</p>
                          <p>This is where insurance video editing services create real impact. Claim process explainers, policy breakdown videos, customer education reels, advisor introduction videos, and onboarding walkthroughs help make insurance feel more understandable and human.</p>
                          <p>That is why more insurance businesses are now investing in stronger visual communication across websites, Instagram, LinkedIn, YouTube, Google Business, and digital advertising campaigns.</p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  How Graphic Design and Video Editing Benefit Insurance Businesses
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">1. Builds client trust faster</h3>
                    <p>Professional branding and clear visual communication help insurance businesses feel more dependable before clients even make contact.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">2. Makes insurance information easier to understand</h3>
                    <p>Insurance graphic design helps simplify policies, coverage details, claim processes, and financial information visually.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">3. Reduces confusion during decision-making</h3>
                    <p>Visual explainers and insurance service videos help customers understand what they are choosing more clearly.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">4. Creates a stronger insurance brand presence</h3>
                    <p>Consistent branding across websites, proposals, <Link href="https://biztalbox.com/social-media-marketing" className="text-primary">social media</Link>, presentations, and advertisements makes insurance businesses feel more established.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">5. Improves customer education</h3>
                    <p>Video content and infographics help explain complex insurance topics without overwhelming potential clients.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">6. Strengthens online visibility</h3>
                    <p>Well-designed insurance marketing content performs better across <Link href="https://biztalbox.com/social-media-marketing" className="text-primary">social media</Link>, websites, YouTube, and paid campaigns.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">7. Improves communication quality</h3>
                    <p>Structured visuals make policy explanations, onboarding, and customer guidance easier to follow.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">8. Makes insurance businesses feel more approachable</h3>
                    <p>Advisor introduction videos and educational content help humanize the business and reduce hesitation.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">9. Improves insurance advertising performance</h3>
                    <p>Insurance ad creatives with clear messaging and strong visuals usually attract attention faster than generic promotional content.</p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Choosing the Right Graphic Design and Video Editing Services Partner Matters for Insurance Businesses
                </h2>
                <p>A lot of agencies treat insurance marketing like regular corporate advertising. That usually creates content that looks polished but feels distant, generic, or overly sales-driven.</p>
                <p>Insurance businesses need something different. People already approach insurance with caution. Overcomplicated visuals, flashy editing, or aggressive marketing language often increases distrust instead of building confidence.</p>
                <p>A good creative partner understands how to make insurance communication feel simpler, clearer, and easier to trust. Because in this industry, presentation is about helping people feel informed enough to make decisions confidently.</p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  Why Insurance Businesses Choose Biztalbox
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      1. We understand how trust works in insurance marketing
                    </h3>
                    <p>The team at Biztalbox understands how strongly visual presentation affects client confidence in insurance businesses online.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      2. We simplify complex insurance communication
                    </h3>
                    <p>Our insurance graphic design services help businesses explain policies, services, claims, and onboarding processes more clearly.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      3. Our insurance video editing focuses on clarity
                    </h3>
                    <p>We create insurance video editing services that make policy explanations, advisor introductions, awareness campaigns, and onboarding content easier to understand.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      4. We create content for modern insurance platforms
                    </h3>
                    <p>Biztalbox develops visuals and videos for websites, LinkedIn, Instagram, YouTube, Google Business, presentations, and digital advertising campaigns.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      5. We help insurance businesses stay visually consistent
                    </h3>
                    <p>Consistent branding across every customer touchpoint helps insurance businesses feel more professional and recognizable over time.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      6. We focus on communication that builds confidence
                    </h3>
                    <p>Our visual strategy focuses on clarity, trust, professionalism, and long-term brand credibility instead of generic promotional marketing.</p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  How Visual Communication Is Changing Insurance Industry Marketing
                </h2>
                <p>Insurance customers now expect businesses to communicate clearly online before they decide who to trust.</p>
                <p>As competition continues growing across health insurance, life insurance, vehicle insurance, corporate insurance, and financial protection services, stronger visual communication is becoming a major advantage.</p>
                <p>
                  In the{" "}
                  <Link
                    href="https://biztalbox.com/insurance-seo"
                    className="text-primary"
                  >
                    Insurance Industry
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
                            Ready to Grow Your Insurance Business?
                          </span>
                          <h3 className="tm-details-title">Get Started Today</h3>
                        </div>
                        <div className="tm-details-text">
                          <p>
                            Connect with Biztalbox for graphic design and video editing services for insurance industry that help your business look more professional, explain services more clearly, and build stronger client trust online.
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
                    Ready to Grow Your Insurance Business With Graphic Design and Video Editing Services?
                  </h2>
                  <p className="content-prose" style={{ marginTop: "1.25rem" }}>
                    Connect with Biztalbox for graphic design and{" "}
                    <Link
                      href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa"
                      className="text-primary"
                    >
                      video editing services
                    </Link>{" "}
                    for insurance that help your business look more professional,
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
                    Get in touch with Biztalbox today and elevate your insurance brand online.
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
