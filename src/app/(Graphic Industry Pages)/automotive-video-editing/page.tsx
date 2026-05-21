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
                            Automotive Industry: Creating High-Impact Automotive
                            Brand Storytelling
                          </h1>
                          <p>
                            The automotive industry has become deeply digital in
                            the way brands attract and communicate with
                            customers. Earlier, people would visit a showroom
                            first and explore vehicles later. Now the process
                            usually begins online. People discover vehicles
                            online first. They watch launch videos on YouTube
                            late at night. Compare models on Instagram. Scroll
                            through reels. Save car edits. Read comments.
                          </p>
                          <p>This has changed how automotive brands communicate.</p>
                          <p>
                            Car brands are not competing only on engineering or
                            performance anymore. Of course those things still
                            matter. But they are also competing for attention.
                            On how premium, innovative, or desirable they appear
                            while someone is scrolling for a few seconds on a
                            screen. And visual presentation plays a massive role
                            in that.
                          </p>
                          <p>
                            This is exactly why automotive graphic design and
                            video editing services have become such an important
                            part of modern automotive marketing. People don’t
                            just want information anymore. They want to
                            experience the brand visually before they engage
                            with it further.
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
                  Why Automotive Brands Depend on Visual Content to Influence
                  Buyers
                </h2>
                <p>
                  Automotive marketing is no longer only about specifications
                  and pricing. Customers now respond to how a vehicle is
                  presented visually. They want to see the experience around
                  it. The design language. The motion. The lifestyle attached
                  to it.
                </p>
                <p>And automotive audiences are highly visual.</p>
                <p>
                  A static product image rarely holds attention anymore. People
                  engage more with launch videos, cinematic edits, social media
                  creatives, walkthrough reels, feature explainers, and visually
                  polished campaigns.
                </p>
                <p>
                  This is where automotive content creation services start
                  becoming valuable. Strong graphic design helps brands maintain
                  a more premium and recognizable identity across platforms,
                  while automotive promotional video services make communication
                  feel more immersive and emotionally engaging.
                </p>
                <p>
                  A vehicle can be technically brilliant. But if the
                  presentation feels outdated or generic, customer perception
                  drops very fast.
                </p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  How Graphic Design and Video Editing Benefit Automotive Brands
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      1. Stronger Brand Identity
                    </h3>
                    <p>
                      Automotive brands rely heavily on perception. Consistent
                      visuals across websites, ads,{" "}
                      <Link
                        href="https://biztalbox.com/blog/best-social-media-marketing-tools"
                        className="text-primary"
                      >
                        social media
                      </Link>
                      , and campaigns help create a more premium and
                      recognizable identity over time.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      2. Better Vehicle Presentation
                    </h3>
                    <p>
                      High-quality graphics and automotive promotional video
                      services showcase vehicle features, interiors, styling,
                      and performance in a much more engaging way. Customers
                      begin understanding the product experience before
                      physically seeing the vehicle.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      3. Higher Social Media Engagement
                    </h3>
                    <p>
                      Strong automotive{" "}
                      <Link
                        href="https://biztalbox.com/blog/what-is-social-media-advertising"
                        className="text-primary"
                      >
                        social media
                      </Link>{" "}
                      content performs far better because automotive audiences
                      consume visual content rapidly. Reels, launch edits,
                      motion graphics, and short-form videos generally retain
                      attention longer than static communication.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      4. Improved Customer Trust
                    </h3>
                    <p>
                      Polished communication creates a stronger sense of
                      professionalism. People naturally trust brands that
                      present themselves clearly and consistently online.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      5. More Effective Marketing Campaigns
                    </h3>
                    <p>
                      Automotive ad creative services help campaigns feel more
                      visually focused and audience-aware instead of looking
                      generic or repetitive.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      6. Stronger Emotional Connection
                    </h3>
                    <p>
                      This industry runs heavily on emotion: speed, adventure,
                      luxury, technology. Good automotive videos capture those
                      emotions instead of just listing specifications.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      7. Better Product Understanding
                    </h3>
                    <p>
                      Feature explainers, motion graphics, walkthroughs, and
                      edited demo videos make technical details easier to
                      understand without overwhelming customers.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      8. Consistent Visual Communication
                    </h3>
                    <p>
                      When visuals remain aligned across every platform, the
                      brand starts feeling more stable and recognizable. Small
                      inconsistency creates confusion faster than most brands
                      realise.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      9. Improved Digital Visibility
                    </h3>
                    <p>
                      The automotive space is extremely crowded online. Creative
                      visual communication helps brands stand out instead of
                      blending into endless promotional content.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      10. Wider Audience Reach
                    </h3>
                    <p>
                      Video-based automotive content gets shared more, consumed
                      longer, and performs better across platforms. Especially
                      launches, transformations, test drives, and EV-related
                      content.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Choosing the Right Creative Partner Matters for Automotive
                  Brands
                </h2>
                <p>
                  Automotive communication depends heavily on presentation.
                  Maybe more than most industries.
                </p>
                <p>
                  People are not only evaluating the vehicle. They are
                  evaluating the brand behind it. The energy. The lifestyle
                  positioning. The attention to detail.
                </p>
                <p>
                  Generic visuals often fail because they do not capture the
                  excitement or identity automotive brands are trying to
                  communicate.
                </p>
                <p>
                  The right automotive creative agency understands both industry
                  communication and digital audience behaviour. That balance
                  matters a lot in automotive marketing because visuals directly
                  influence customer perception and engagement.
                </p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  Why Automotive Brands Choose Biztalbox for Graphic Design and
                  Video Editing Services
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      1. Industry-Focused Creative Approach
                    </h3>
                    <p>
                      We understand how modern automotive brands communicate
                      across digital platforms and how fast audience attention
                      shifts in this industry.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      2. Professional Branding Solutions
                    </h3>
                    <p>
                      Our visuals help automotive businesses create stronger,
                      cleaner, and more recognizable digital identities.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      3. High-Quality Video Editing
                    </h3>
                    <p>
                      We create automotive videos designed for launches,
                      promotions, advertisements, and digital campaigns that
                      need stronger audience retention.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      4. Platform-Optimized Content
                    </h3>
                    <p>
                      From websites to reels and ad campaigns, we create content
                      according to how audiences consume visuals on different
                      platforms.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      5. Consistent Brand Communication
                    </h3>
                    <p>
                      Biztalbox assists brands in maintaining consistency in
                      their visual communication across social media platforms,
                      campaigns, websites, and digital graphics.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      6. Strong Strategy With Creative Execution
                    </h3>
                    <p>
                      Our work combines creative direction with communication
                      strategy so visuals don’t just look good, they perform
                      better too.
                    </p>
                  </div>
                  <div className="content-card" style={{ gridColumn: "1 / -1" }}>
                    <h3 className="section-subheading">
                      7. Customized Content Solutions
                    </h3>
                    <p>
                      Every automotive brand communicates differently. An EV
                      startup speaks differently from a luxury dealership.
                      Biztalbox cuztomizes graphics and videos according to
                      brand goals, campaigns, audience type, and positioning.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  How Visual Storytelling Is Changing Automotive Marketing Today
                </h2>
                <p>
                  In the{" "}
                  <Link
                    href="https://biztalbox.com/automotive-seo"
                    className="text-primary"
                  >
                    Automotive Industry
                  </Link>
                  , presentation affects perception much faster than most brands
                  realize. A customer may spend months researching a vehicle,
                  but their first impression is often formed in seconds through
                  a video, an ad, or a social media post.
                </p>
                <p>
                  Strong automotive graphics and videos help brands present
                  vehicles more effectively and create stronger audience
                  engagement online.
                </p>
                <p>
                  As competition continues to grow, brands that invest in
                  authentic visual storytelling and stronger creative
                  communication are the ones more likely to succeed.
                </p>
              </section>

              {/* CTA with form */}
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
                            Ready to Accelerate Your Automotive Brand With
                            Strong Visual Content?
                          </span>
                          <h3 className="tm-details-title">Get Started Today</h3>
                        </div>
                        <div className="tm-details-text">
                          <p>
                            If you’re trying to make your automotive brand stand
                            out, get better visibility, or just communicate your
                            launches in a way that actually connects, you need
                            the right creative support.
                          </p>
                          <p>
                            Connect with Biztalbox for the best graphic design
                            and{" "}
                            <Link
                              href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa"
                              className="text-primary"
                            >
                              video editing services
                            </Link>{" "}
                            designed for modern automotive brands.
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
                    Ready to Accelerate Your Automotive Brand With Strong Visual
                    Content?
                  </h2>
                  <p className="content-prose" style={{ marginTop: "1.25rem" }}>
                    If you’re trying to make your automotive brand stand out,
                    get better visibility, or just communicate your launches in
                    a way that actually connects, you need the right creative
                    support.
                  </p>
                  <p
                    style={{
                      marginTop: "1.25rem",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      color: "#fff",
                    }}
                  >
                    Connect with Biztalbox for the best graphic design and
                    video editing services designed for modern automotive
                    brands.
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
