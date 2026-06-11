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
                            Graphic Design and Video Editing Services for Pest Control Services: Improve Visibility and Customer Trust
                          </h1>
                          <p>Most people search for pest control services when the problem has already started feeling stressful.</p>
                          <p>And at that point, they are not just looking for someone to spray chemicals. They are looking for a business that feels safe to trust inside their home or workplace.</p>
                          <p>The challenge is that most customers cannot judge pest control quality technically. They do not know which treatments work properly or whether the service is actually professional. So they judge the business through presentation instead.</p>
                          <p>A company with clean branding, clear communication, and professional visuals immediately feels more reliable than one with outdated graphics or random low-quality posts.</p>
                          <p>That is exactly why graphic design and  <Link href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa" className="text-primary">video editing services</Link>  for pest control services are becoming important for modern pest control businesses competing online today.</p>
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
                  How Graphic Design and Video Editing Work in Pest Control Industry
                </h2>
                          <p>Pest control businesses often struggle with one major challenge online. The actual service process is difficult for customers to visualize beforehand.</p>
                          <p>People usually do not know what termite treatment looks like. They do not understand fumigation workflows, inspection methods, chemical application processes, or prevention systems unless the business explains them visually.</p>
                          <p>This is where pest control graphic design starts creating real value. Good design helps simplify information that might otherwise feel too technical or overwhelming for customers.</p>
                          <p>Things like inspection reports, treatment brochures, safety instruction sheets, websites, pamphlets, posters, banners, vehicle branding, and pest control ad creatives help make the business feel cleaner, more organized, and more reliable overall.</p>
                          <p>And video editing solves a different problem. Treatment walkthroughs, before-and-after infestation results, fumigation clips, sanitation processes, inspection videos, and pest control service videos help customers actually see how the service works in real situations.</p>
                          <p>And once customers can see the process, their perception changes quickly. Instead of reading claims on a website, customers can now see how your technicians work, how clean the process looks, what equipment you use, and how carefully treatments are handled. This transparency creates trust faster than polished marketing language ever will.</p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  How Graphic Design and Video Editing Benefit Pest Control Businesses
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">1. Builds Trust Much Faster</h3>
                    <p>Professional visuals help pest control companies feel safer and more reliable before customers even call.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">2. Makes Technical Services Easier to Understand</h3>
                    <p>Visual communication simplifies treatments, inspection processes, and prevention methods for customers.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">3. Creates a Cleaner Brand Image</h3>
                    <p>Strong branding helps pest control businesses look more hygienic, organized, and professional.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">4. Improves Before-and-After Marketing</h3>
                    <p>Pest treatment transformations naturally create strong visual proof of service effectiveness.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">5. Reduces Customer Anxiety</h3>
                    <p>Treatment videos and walkthroughs help customers feel more comfortable before booking inspections.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">6. Improves Social Media Engagement</h3>
                    <p>
                      Educational pest control content and service videos usually
                      perform very well on{" "}
                      <Link
                        href="https://biztalbox.com/social-media-marketing"
                        className="text-primary"
                      >
                        social media
                      </Link>
                      .
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">7. Makes the Business More Memorable</h3>
                    <p>When your branding is consistent everywhere, it makes your brand memorable and easy to recognize.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">8. Improves Advertising Results</h3>
                    <p>Most local pest control ads look rushed and forgettable. Strong pest control ad creatives grab attention quickly.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">9. Brings Better Quality Leads</h3>
                    <p>When customers already understand the service process through visuals and videos, conversations become smoother and inquiries become more serious.</p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Choosing the Right Creative Partner Matters for Pest Control Businesses
                </h2>
                <p>Pest control marketing needs a very different approach from most industries.</p>
                <p>Customers here are not looking for flashy branding or overly polished campaigns. They want businesses that feel safe, hygienic, professional, and experienced. Even small visual details can influence how trustworthy the service feels.</p>
                <p>The right creative partner understands how to improve presentation without making the business feel exaggerated or unrealistic. Because in pest control industry, confidence matters more than promotion.</p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  Why Pest Control Businesses Choose Biztalbox for Graphic Design and Video Editing Services
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      1. Industry-Focused Creative Understanding
                    </h3>
                    <p>We understand how pest control businesses compete for trust in local markets.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      2. Professional Pest Control Graphic Design
                    </h3>
                    <p>Biztalbox&apos;s graphic design services make pest control businesses appear more reliable and legitimate. Well-designed graphics make it easier for consumers to choose you over competitors.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      3. Practical Pest Control Video Editing
                    </h3>
                    <p>We edit pest control videos that turn real work, like inspections and treatments, in a way that is easy to understand for consumers.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      4. Platform-Optimized Marketing Content
                    </h3>
                    <p>The team at Biztalbox develops visual content specifically for Google Business, Instagram, Facebook, YouTube, and local advertising campaigns.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      5. Stronger Visual Consistency
                    </h3>
                    <p>We help businesses maintain connected branding across every customer touchpoint.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      6. Conversion-Focused Communication
                    </h3>
                    <p>The creative strategy at Biztalbox focuses on improving trust, engagement, and inquiry quality instead of relying on generic promotional messaging.</p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Visual Communication Is Becoming Essential for Modern Pest Control Businesses
                </h2>
                <p>As competition increases across digital platforms, businesses with clearer communication, stronger branding, and better visuals naturally stand out faster. Customers notice the difference immediately.</p>
                <p>
                  In the{" "}
                  <Link
                    href="https://biztalbox.com/pestcontrol-seo"
                    className="text-primary"
                  >
                    Pest Control Industry
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
                            Ready to upgrade your pest control branding and videos?
                          </span>
                          <h3 className="tm-details-title">Get Started Today</h3>
                        </div>
                        <div className="tm-details-text">
                          <p>
                            Connect with Biztalbox to create visual content that helps your pest control business look more credible, explain services more clearly, and attract better-quality customer inquiries.
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
                    Ready to upgrade your pest control branding and videos?
                  </h2>
                  <p className="content-prose" style={{ marginTop: "1.25rem" }}>
                    Connect with Biztalbox for graphic design and{" "}
                    <Link
                      href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa"
                      className="text-primary"
                    >
                      video editing services
                    </Link>{" "}
                    for pest control that help your business look more professional,
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
                    Get in touch with Biztalbox today and elevate your pest control brand online.
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
