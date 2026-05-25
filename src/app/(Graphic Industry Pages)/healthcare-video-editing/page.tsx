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
                            How Graphic Design and Video Editing Services Help
                            Healthcare Businesses Grow
                          </h1>
                          <p>
                            People don’t search for healthcare casually. They
                            search when something feels wrong. A symptom won’t
                            go away. The report looks confusing. A family member
                            needs treatment.
                          </p>
                          <p>
                            And before booking an appointment, most patients
                            now check Google reviews, clinic photos, websites,
                            doctor profiles, and social media pages first. That
                            first impression matters a lot.
                          </p>
                          <p>
                            Because patients usually cannot judge medical
                            expertise up front. They judge presentation instead.
                            Whether the clinic feels organized. Whether the
                            communication feels clear. Whether the healthcare
                            provider looks trustworthy online.
                          </p>
                          <p>
                            A confusing website, outdated branding, poor
                            visuals, or inconsistent communication creates
                            hesitation immediately. And a healthcare provider
                            cannot afford hesitation.
                          </p>
                          <p>
                            That’s why graphic design and video editing services
                            for the healthcare industry are becoming important
                            now. To make patients feel informed, comfortable,
                            and confident before they even walk in.
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
                  Why Good Design and Video Editing Matters in Healthcare
                  Industry Marketing
                </h2>
                <p>
                  Healthcare is filled with information patients already find
                  overwhelming. There are medical terms, diagnostics, treatment
                  plans, insurance details and long explanations. Most people are
                  trying to understand unfamiliar information while already
                  feeling anxious.
                </p>
                <p>This is where healthcare graphic design becomes important.</p>
                <p>
                  Good design helps simplify communication. Patient brochures,
                  appointment guides, healthcare infographics, clinic branding,
                  healthcare ad creatives, hospital signage, and social media
                  visuals make information easier to process and less
                  intimidating. Patients notice that clarity.
                </p>
                <p>
                  A clean healthcare website feels easier to trust. Structured
                  communication makes clinics feel more professional. Even small
                  things like branded reports or organized presentation layouts
                  quietly shape how credible a healthcare provider feels.
                </p>
                <p>Video content solves a different problem.</p>
                <p>
                  Most patients fear what they don’t fully understand. Healthcare
                  video editing services help reduce that uncertainty by making
                  healthcare environments feel more familiar. Doctor introduction
                  videos, treatment explainers, rehabilitation videos, patient
                  awareness campaigns, and hospital walkthroughs help patients
                  visually understand what to expect.
                </p>
                <p>
                  That changes perception quickly. The healthcare provider starts
                  feeling more approachable. The process feels less intimidating.
                  Patients feel more prepared before booking an appointment.
                </p>
                <p>
                  And healthcare videos perform strongly online because people
                  actively search for explanations they can actually follow and
                  understand.
                </p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  How Graphic Design and Video Editing Benefit Healthcare
                  Businesses
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      1. Establishes Rapport With Patients More Quickly
                    </h3>
                    <p>
                      Professional branding for the healthcare industry makes
                      clinics and healthcare professionals appear more trustworthy
                      prior to the first consultation.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      2. Simplifies Medical Information
                    </h3>
                    <p>
                      Graphic design for the healthcare industry enables easier
                      visual understanding of treatments, diagnoses, procedures,
                      and medical communication.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      3. Reduces Patient Anxiety
                    </h3>
                    <p>
                      Healthcare service videos and treatment explainers help
                      patients understand what to expect beforehand, which
                      naturally reduces uncertainty.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      4. Creates A Stronger Healthcare Brand Presence
                    </h3>
                    <p>
                      Consistent healthcare branding across websites, brochures,
                      presentations, interiors, and social media helps providers
                      look more organized and established.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      5. Improves Patient Education
                    </h3>
                    <p>
                      Healthcare infographics and medical videos explain complex
                      topics more clearly for patients and families.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      6. Strengthens Digital Visibility
                    </h3>
                    <p>
                      Well-designed healthcare{" "}
                      <Link
                        href="https://biztalbox.com/social-media-marketing"
                        className="text-primary"
                      >
                        social media
                      </Link>{" "}
                      content and healthcare video editing services improve
                      engagement across Instagram, YouTube, websites, and
                      awareness campaigns.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      7. Improves Communication Quality
                    </h3>
                    <p>
                      Clear visuals help healthcare organizations explain systems,
                      services, and patient processes more effectively.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      8. Strengthens Doctor And Clinic Credibility
                    </h3>
                    <p>
                      Patients often decide how trustworthy a healthcare provider
                      feels before visiting physically.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      9. Improves Healthcare Advertising Performance
                    </h3>
                    <p>
                      Healthcare ad creatives with clear visual communication hold
                      attention faster than generic medical promotions.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      10. Builds Long-Term Patient Trust
                    </h3>
                    <p>
                      Consistent branding and communication help healthcare
                      providers stay recognizable and credible over time.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Choosing the Right Graphic Design and Video Editing Partner
                  for Healthcare Matters
                </h2>
                <p>
                  A lot of agencies approach healthcare marketing like lifestyle
                  branding. That usually creates the wrong feeling.
                </p>
                <p>
                  Patients are not looking for flashy edits, dramatic campaigns,
                  or overly polished visuals. They want communication that feels
                  calm, clear, and trustworthy. They want to understand the
                  healthcare provider, not feel overwhelmed by marketing.
                </p>
                <p>
                  A good creative partner understands that healthcare
                  communication should reduce confusion, not add more of it. That
                  balance matters deeply in this industry.
                </p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  Why Choose Biztalbox for Healthcare Graphic Design and Video
                  Editing Services
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      1. Biztalbox Understands How Patients Judge Healthcare
                      Brands Online
                    </h3>
                    <p>
                      Patients notice much more than medical qualifications. They
                      notice presentation, clarity, organization, and communication
                      style. Biztalbox creates healthcare visuals around how
                      patients actually build trust online.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      2. We Simplify Complex Healthcare Communication
                    </h3>
                    <p>
                      Medical information can feel overwhelming quickly.
                      Biztalbox&apos;s healthcare graphic design services help
                      clinics, hospitals, and healthcare brands explain services,
                      systems, and patient processes in a way that feels easier to
                      understand.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      3. Our Healthcare Video Editing Focuses On Clarity
                    </h3>
                    <p>
                      We create healthcare video editing services that showcase
                      facilities, introduce specialists, explain treatments, and
                      support patient communication without making the content feel
                      overproduced or artificial.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      4. We Create Content For Modern Healthcare Platforms
                    </h3>
                    <p>
                      From websites and Google Business profiles to Instagram,
                      YouTube, awareness campaigns, and healthcare advertisements,
                      we create visuals designed for the platforms patients already
                      use while researching providers.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      5. We Help Healthcare Brands Stay Visually Consistent
                    </h3>
                    <p>
                      The creative team at Biztalbox makes sure your branding stays
                      consistent across every touchpoint to make healthcare
                      businesses appear more professional.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      6. We Focus On Communication That Builds Patient Confidence
                    </h3>
                    <p>
                      Biztalbox creates healthcare content designed to improve
                      trust, strengthen engagement, and help healthcare providers
                      communicate more clearly online.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Healthcare Brands Need Better Visual Communication Today
                </h2>
                <p>
                  People today require clear communication from healthcare service
                  providers before they decide who to trust.
                </p>
                <p>
                  And as competition grows across clinics, hospitals, wellness
                  centers, diagnostics, and specialized healthcare services,
                  stronger communication starts influencing decisions much earlier.
                </p>
                <p>
                  That’s why visual marketing for healthcare industry are becoming
                  important for long-term visibility and patient confidence. Not
                  because healthcare needs flashy visuals. Because patients need
                  clarity before they make important decisions.
                </p>
                <p>
                  In the{" "}
                  <Link
                    href="https://biztalbox.com/healthcare-seo"
                    className="text-primary"
                  >
                    Healthcare Industry
                  </Link>
                  , clear visuals and calm communication help patients feel more
                  confident before they book their first appointment.
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
                            Ready To Strengthen Your Healthcare Brand Online?
                          </span>
                          <h3 className="tm-details-title">Get Started Today</h3>
                        </div>
                        <div className="tm-details-text">
                          <p>
                            Connect with Biztalbox for graphic design and video
                            editing services for healthcare industry that help your
                            healthcare business communicate more clearly, build
                            stronger patient trust, and create a more professional
                            digital presence.
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
                    Ready To Strengthen Your Healthcare Brand Online?
                  </h2>
                  <p className="content-prose" style={{ marginTop: "1.25rem" }}>
                    Connect with Biztalbox for graphic design and{" "}
                    <Link
                      href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa"
                      className="text-primary"
                    >
                      video editing services
                    </Link>{" "}
                    for healthcare industry that help your healthcare business
                    communicate more clearly, build stronger patient trust, and
                    create a more professional digital presence.
                  </p>
                  <p
                    style={{
                      marginTop: "1.25rem",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      color: "#fff",
                    }}
                  >
                    Get in touch with Biztalbox today and elevate your healthcare
                    brand online.
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
