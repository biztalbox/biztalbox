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
                            Education Industry: Building Stronger Student
                            Engagement Online
                          </h1>
                          <p>
                            The{" "}
                            <Link
                              href="https://biztalbox.com/education-seo"
                              className="text-primary"
                            >
                              education industry
                            </Link>{" "}
                            works very differently now than it did even a few
                            years ago.
                          </p>
                          <p>
                            Earlier, institutions could rely heavily on
                            reputation, physical presence, referrals, and maybe
                            a newspaper ad here and there. Now? Most people
                            discover and judge an institution online first.
                            Before a student visits the campus. Before a parent
                            makes an inquiry. Before anyone fills out a form.
                          </p>
                          <p>
                            That first impression is happening on a screen.
                            whether it is through websites, social media,
                            webinars, ads, or learning platforms.
                          </p>
                          <p>
                            And in most cases, people form an opinion before
                            they ever interact with the institution directly.
                          </p>
                          <p>That is exactly where things have changed.</p>
                          <p>
                            This is also why graphic design services and video
                            editing services have become part of how
                            institutions communicate today, not just for
                            marketing, but for clarity and presentation as well.
                            Because when information is structured well and
                            visually easy to understand, people tend to trust it
                            faster.
                          </p>
                          <p>
                            Graphic design services for educational institutions
                            help bring consistency across everything, from
                            brochures to presentations to digital content.
                            Video, on the other hand, helps explain things in a
                            way that feels more real and easier to connect with,
                            especially when you are trying to show courses,
                            campus life, or student experiences. Together, they
                            influence how an institution is perceived online.
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
                  Why Educational Institutions Need Strong Visual Communication
                  Today
                </h2>
                <p>
                  Education is not a quick decision. People take time, compare
                  options, and look at multiple factors before choosing a place
                  to study. But the first filter is almost always digital now.
                </p>
                <p>
                  Institutions are constantly putting out content, whether it is
                  admission campaigns, social media posts, course details, or
                  promotional videos. The issue is not lack of effort. It is
                  often how that effort is presented.
                </p>
                <p>
                  This is where education industry content creation services
                  start to matter more than people realise.
                </p>
                <p>
                  Because when content is not structured properly, it gets
                  ignored. But when it is clear and visually balanced, it holds
                  attention longer and communicates better.
                </p>
                <p>
                  Good design helps organize information in a way that feels
                  simple. Education video editing services do something similar,
                  but through movement and storytelling. It becomes easier for
                  students and parents to understand what the institution
                  actually offers.
                </p>
                <p>
                  And when both are aligned, communication becomes more
                  effective without needing extra explanation.
                </p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  How Design and Video Editing Services Benefit Education Brands
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      1. It makes the institution look more reliable
                    </h3>
                    <p>
                      When everything looks consistent across platforms, it
                      naturally builds trust. People assume the institution is
                      more organized and credible.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      2. It improves how information is understood
                    </h3>
                    <p>
                      Courses, structures, and academic details can feel
                      overwhelming in text form. Visual communication makes it
                      easier to process.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      3. It helps during decision making
                    </h3>
                    <p>
                      Students and parents are not making emotional decisions
                      alone. They are comparing clarity, structure, and
                      presentation across institutions.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      4. It increases engagement online
                    </h3>
                    <p>
                      Educational content that is visually clear tends to
                      perform better on social media and other digital platforms
                      because it is easier to consume quickly.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      5. It supports better storytelling
                    </h3>
                    <p>
                      Instead of just listing features, institutions can
                      actually show campus life, learning experiences, and
                      outcomes in a more engaging way.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      6. It keeps communication consistent
                    </h3>
                    <p>
                      When design and video follow the same visual direction,
                      everything feels more connected, from websites to
                      brochures to ads.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Educational Institutions Need the Right Creative Partner
                  for Video Editing and Graphic Designing
                </h2>
                <p>
                  In education, communication is not just about looking good. It
                  is about being understood properly.
                </p>
                <p>
                  A lot of institutions underestimate how much presentation
                  affects perception. If something looks unclear or
                  inconsistent, it often reflects poorly on the institution
                  itself, even if the quality is strong.
                </p>
                <p>
                  That is why working with the right partner for education
                  industry graphic design and video editing services becomes
                  important. It is not about creativity alone. It is about how
                  clearly and effectively information is being communicated.
                </p>
                <p>Because in this space, clarity builds confidence.</p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  Why Partner with Biztalbox for Education Industry Graphic
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
                      Education-Focused Creative Approach
                    </h3>
                    <p>
                      We understand how educational institutions and edtech
                      platforms communicate, and what students and parents
                      actually expect from them.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Professional Branding Solutions
                    </h3>
                    <p>
                      Our education industry graphic design services help
                      institutions build a consistent and recognizable digital
                      identity across all touchpoints.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      High-Quality Video Editing
                    </h3>
                    <p>
                      We create education video editing services that make
                      learning content and promotional material more engaging,
                      structured, and easy to understand.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Platform-Optimized Content
                    </h3>
                    <p>
                      Our content is designed specifically for websites, social
                      media, YouTube, presentations, and digital campaigns used
                      in education marketing.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Consistent Brand Communication
                    </h3>
                    <p>
                      We help institutions keep everything visually consistent
                      and structured, so their communication feels stable across
                      all platforms.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Creative + Strategic Execution
                    </h3>
                    <p>
                      Our work combines design creativity with clear
                      communication goals so that the output performs well both
                      visually and strategically.
                    </p>
                  </div>
                  <div className="content-card" style={{ gridColumn: "1 / -1" }}>
                    <h3 className="section-subheading">
                      Customized Content Solutions
                    </h3>
                    <p>
                      Every institution has different goals and audiences. We
                      tailor education industry content creation services
                      accordingly, rather than using a fixed approach.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Strong Visual Identity Is the Future of Education Marketing
                </h2>
                <p>
                  Education today is highly digital, and the way institutions
                  communicate has a direct impact on how they are perceived.
                </p>
                <p>
                  Education industry graphic design services and education video
                  editing services are now a part of that communication system,
                  not an optional add-on anymore. They help institutions present
                  themselves more clearly, more consistently, and in a way that
                  feels easier to trust.
                </p>
                <p>
                  And when communication becomes clear, decision-making becomes
                  easier too.
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
                            Ready to create better learning experiences through
                            design and video?
                          </span>
                          <h3 className="tm-details-title">Get Started Today</h3>
                        </div>
                        <div className="tm-details-text">
                          <p>
                            Reach out to Biztalbox for exceptional marketing
                            creatives to make your educational institution stand
                            out online.
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
                    Ready to create better learning experiences through design
                    and video?
                  </h2>
                  <p className="content-prose" style={{ marginTop: "1.25rem" }}>
                    Reach out to Biztalbox for exceptional marketing creatives
                    to make your educational institution stand out online.
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
