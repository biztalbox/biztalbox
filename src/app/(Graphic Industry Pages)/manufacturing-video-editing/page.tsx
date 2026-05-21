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
                            Manufacturing Industry: Helping Manufacturers
                            Communicate Value Clearly
                          </h1>
                          <p>
                            The manufacturing industry has changed how it
                            communicates. Earlier, most business happened
                            offline. You met people at trade fairs, visited
                            factories, built relationships over time. That
                            still exists, but the process now begins elsewhere.
                          </p>
                          <p>Buyers search online first. Then they decide who to talk to.</p>
                          <p>
                            They check your website, your LinkedIn presence,
                            your product visuals, sometimes even your factory
                            videos. And in many cases, they already have a
                            perception of your brand before you ever speak to
                            them.
                          </p>
                          <p>
                            And in that shift, good graphics and videos of your
                            manufacturing business have become important. They
                            aren’t just marketing support but communication
                            tools.
                          </p>
                          <p>
                            Because in manufacturing, you are not just selling
                            a product. You are showing capability. Scale.
                            Precision. Trust. And all of that, today, is being
                            judged visually.
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
                  Why Manufacturing Companies Need Strong Visual Communication
                </h2>
                <p>
                  Manufacturing communication has become far more strategic
                  than before.
                </p>
                <p>
                  Industrial businesses now regularly create brochures,
                  machinery catalogs, factory walkthroughs, LinkedIn campaigns,
                  technical presentations, and manufacturing{" "}
                  <Link
                    href="https://biztalbox.com/blog/what-is-social-media-advertising"
                    className="text-primary"
                  >
                    social media
                  </Link>{" "}
                  content just to remain visible in a competitive market. Buyers
                  expect professional communication even before the first
                  conversation happens.
                </p>
                <p>And technical industries face one major challenge:</p>
                <p>
                  Most manufacturing businesses deal with processes, machinery,
                  engineering specifications, and technical capabilities that
                  are difficult to explain through plain text alone. This is
                  where strong Manufacturing content creation becomes valuable.
                </p>
                <p>
                  Good design organizes information so it’s easier to
                  understand. Video does something similar. It shows instead of
                  explains.
                </p>
                <p>
                  And when both work together, your communication becomes much
                  easier for buyers to process.
                </p>
                <p>
                  Sometimes a 60-second factory video does more than a detailed
                  brochure ever can.
                </p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  Benefits of Graphic Design and Video Editing for Manufacturing
                  Brands
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Make your brand look consistent
                    </h3>
                    <p>
                      When your visuals stay aligned across presentations,
                      websites, and marketing material, people start seeing you
                      as more stable and reliable.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Make your product easier to understand
                    </h3>
                    <p>
                      Machines, processes, technical systems. All of it becomes
                      clearer when shown visually instead of explained only in
                      text.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Improve how you show up in B2B decisions
                    </h3>
                    <p>
                      Most buyers don’t have time to decode complexity. If your
                      communication is clear, you stay in the shortlist longer.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Increase engagement on digital platforms
                    </h3>
                    <p>
                      Especially on LinkedIn. Manufacturing social media content
                      performs better when it is visual, structured, and easy to
                      scan.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Clear visuals build trust
                    </h3>
                    <p>
                      In this industry, trust doesn’t come from claims. It comes
                      from how professionally you present what you do.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Make digital campaigns more effective
                    </h3>
                    <p>
                      When your manufacturing branding services are visually
                      strong, even simple campaigns perform better because the
                      foundation is solid.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Help you demonstrate instead of describe
                    </h3>
                    <p>
                      Manufacturing video editing services are especially useful
                      here. You can actually show how something works instead
                      of explaining it in long text.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      They keep your communication consistent
                    </h3>
                    <p>
                      Good graphic design stays consistent across brochures,
                      websites, ads, and presentations. That consistency matters
                      more than people realise.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Help you stand out in a traditional industry
                    </h3>
                    <p>
                      A lot of manufacturers still communicate in very outdated
                      formats. Clean, modern visuals immediately set you apart.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      They increase your reach
                    </h3>
                    <p>
                      Good videos and graphics naturally reach further. It gets
                      shared, remembered, and revisited.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Manufacturing Companies Need the Right Creative Partner
                  for Graphic Design and Video Editing
                </h2>
                <p>
                  In manufacturing, communication is tied directly to perception
                  of capability.
                </p>
                <p>
                  If your visuals are unclear, people assume your process might
                  be unclear too. That’s the reality buyers operate with.
                </p>
                <p>
                  So this is not about making things look better. It’s about
                  making your capability easier to understand and trust.
                </p>
                <p>
                  That’s what a good manufacturing creative agency actually
                  does. It translates technical work into clear communication
                  without oversimplifying it.
                </p>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Biztalbox Is Trusted for Manufacturing Graphic Design and
                  Video Editing
                </h2>
                <p>
                  We don’t treat this as design work in isolation. We look at
                  how manufacturing buyers actually think and decide.
                </p>
                <p>We keep things structured and simple.</p>
                <p>
                  Our{" "}
                  <Link
                    href="https://biztalbox.com/manufacturing-seo"
                    className="text-primary"
                  >
                    manufacturing industry
                  </Link>{" "}
                  graphic design services focus on clarity and consistency. So
                  your brand doesn’t just look good, it feels reliable across
                  every touchpoint.
                </p>
                <p>
                  And our manufacturing video editing services focus on making
                  complex processes understandable without losing depth. Factory
                  work, machinery, workflows. It all becomes easier to follow.
                </p>
                <p>
                  We also make sure everything works across platforms. LinkedIn,
                  websites, presentations, campaigns. Because each one plays a
                  different role in your sales journey.
                </p>
                <p>
                  And every project at Biztalbox is tailored. No fixed
                  templates. Different industries inside manufacturing need
                  different communication styles.
                </p>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  How Industrial Marketing Is Moving Toward Visual-First
                  Communication
                </h2>
                <p>
                  Manufacturing is becoming more visible online. And as that
                  happens, the companies that communicate clearly will naturally
                  stay ahead.
                </p>
                <p>
                  Because in this space, clarity is what builds trust. Not
                  volume. Not exaggeration. Just clarity.
                </p>
                <p>
                  If you are thinking about improving how your manufacturing
                  brand shows up online, we can help you structure that
                  properly.
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
                            Ready to Communicate Your Manufacturing Capability
                            Clearly?
                          </span>
                          <h3 className="tm-details-title">Get Started Today</h3>
                        </div>
                        <div className="tm-details-text">
                          <p>
                            Connect with Biztalbox for manufacturing industry
                            graphic design services, manufacturing{" "}
                            <Link
                              href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa"
                              className="text-primary"
                            >
                              video editing services
                            </Link>
                            , and practical creative support built for
                            industrial communication.
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
                    Ready to Communicate Your Manufacturing Capability Clearly?
                  </h2>
                  <p className="content-prose" style={{ marginTop: "1.25rem" }}>
                    Connect with Biztalbox for manufacturing industry graphic
                    design services, manufacturing video editing services, and
                    practical creative support built for industrial
                    communication.
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
