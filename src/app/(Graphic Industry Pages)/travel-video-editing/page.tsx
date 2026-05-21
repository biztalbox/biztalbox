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
                            Graphic Design and Video Editing Services for Travel
                            Industry: Improving Travel Brand Visibility Through
                            Visual Content
                          </h1>
                          <p>
                            The travel industry works very differently now
                            compared to a few years ago.
                          </p>
                          <p>
                            People are not sitting with brochures or walking
                            into travel agencies first anymore. Most of the
                            inspiration happens online. Someone sees a cinematic
                            reel of a hidden café in the mountains. A couple
                            watches a travel vlog late at night and suddenly
                            starts planning a trip. A random drone shot on
                            Instagram makes a destination stay in your head for
                            days.
                          </p>
                          <p>That is how travel decisions begin now.</p>
                          <p>
                            And the interesting part is, people are not just
                            booking places anymore. They are chasing a feeling.
                            They want to imagine themselves inside the
                            experience before they ever spend money on it.
                          </p>
                          <p>
                            And then there&apos;s so much competition. Every
                            destination, hotel, and travel brand is trying to
                            occupy that same screen space, and only a few
                            manage to stay memorable.
                          </p>
                          <p>
                            This makes strong graphics and videos extremely
                            valuable for how travel brands communicate, inspire,
                            and convert audiences
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
                  Why Travel Brands Depend on Visual Storytelling to Inspire
                  Bookings
                </h2>
                <p>
                  Travel is not sold like a product. It is imagined before it
                  is experienced. People do not compare travel packages first.
                  They react to visuals first. Then they justify the decision
                  later.
                </p>
                <p>
                  So travel brands today are not just communicating information.
                  They are trying to create a feeling that stays long enough for
                  someone to act on it. This is exactly why travel content
                  creation services and travel creative agency support have
                  become essential in modern tourism marketing.
                </p>
                <p>
                  And within that system, travel graphic design services and
                  video editing services for the{" "}
                  <Link
                    href="https://biztalbox.com/travel-seo"
                    className="text-primary"
                  >
                    travel industry
                  </Link>{" "}
                  form the foundation of how a brand is perceived online.
                </p>
                <p>
                  Graphic design for travel brands brings structure to travel
                  communication. It takes scattered information like
                  itineraries, destinations, pricing, and experiences and turns
                  it into something visually clear. Travel{" "}
                  <Link
                    href="https://biztalbox.com/blog/what-is-social-media-advertising"
                    className="text-primary"
                  >
                    social media
                  </Link>{" "}
                  content, posters, brochures, and campaign creatives all become
                  easier to understand when design is done with intention, not
                  just for aesthetics.
                </p>
                <p>
                  Video editing services for travel businesses works
                  differently. It pulls people into the experience. Travel
                  promotional video services and destination marketing
                  creatives allow viewers to see movement, atmosphere, and life
                  inside a place. A beach is no longer just an image. It feels
                  like sound, motion, and space.
                </p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  How Graphic Design and Video Editing Benefit Travel Brands
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      1. Stronger Destination Branding
                    </h3>
                    <p>
                      Consistent use of travel graphic design services helps
                      destinations and agencies build recognition and long-term
                      memory recall.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      2. Better Audience Attention
                    </h3>
                    <p>
                      Travel marketing creatives are designed to stop scrolling
                      behavior, which is the biggest challenge in digital travel
                      marketing today.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      3. More Inspiring Travel Storytelling
                    </h3>
                    <p>
                      With the help of travel content creation services, even
                      simple locations feel like meaningful experiences worth
                      exploring.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      4. Higher{" "}
                      <Link
                        href="https://biztalbox.com/blog/best-social-media-marketing-tools"
                        className="text-primary"
                      >
                        Social Media
                      </Link>{" "}
                      Performance
                    </h3>
                    <p>
                      Strong travel social media content performs better across
                      platforms because it is designed for scroll behavior and
                      emotional impact.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      5. Increased Booking Conversions
                    </h3>
                    <p>
                      Clear storytelling supported by travel video editing
                      services reduces hesitation and improves travel booking
                      decisions.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      6. Better Tourism Promotion Campaigns
                    </h3>
                    <p>
                      Travel promotional video services help tourism boards
                      communicate destinations in a structured and persuasive
                      way.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      7. Emotional Connection With Destinations
                    </h3>
                    <p>
                      Visual storytelling builds emotional attachment even
                      before travel begins, which is key in this industry.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      8. Professional Digital Presence
                    </h3>
                    <p>
                      Travel creative agency work ensures brands look credible,
                      structured, and trustworthy across all platforms.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      9. Consistent Visual Identity
                    </h3>
                    <p>
                      Using travel graphic design services across campaigns and
                      platforms strengthens recognition and brand stability.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      10. Wider Audience Reach
                    </h3>
                    <p>
                      High-quality destination marketing creatives and videos
                      naturally get shared more, increasing organic reach.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Choosing the Right Creative Partner for Travel Brands
                  Matters
                </h2>
                <p>
                  Travel decisions are directly influenced by emotion,
                  imagination, and visual impact.
                </p>
                <p>
                  If a brand does not work with the right travel creative
                  agency, the result is usually inconsistent storytelling, weak
                  engagement, and lost attention. In a market where users
                  scroll fast and decide faster, this directly affects
                  conversions.
                </p>
                <p>
                  A strong creative partner understands how travel audiences
                  behave online. They know what makes people stop scrolling,
                  what builds curiosity, and what turns inspiration into intent.
                </p>
                <p>
                  This is where structured execution of travel graphic design
                  and video editing services becomes critical. It is not about
                  decoration. It is about influencing perception at the right
                  moment.
                </p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  Why Travel Brands Choose Biztalbox for Graphic Design and
                  Video Editing Services
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      1. Travel-Focused Creative Approach
                    </h3>
                    <p>
                      We understand how travel audiences respond to visual
                      storytelling and digital inspiration.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      2. Tourism Branding and Visual Storytelling Expertise
                    </h3>
                    <p>
                      Our travel graphic design services help destinations build
                      strong and consistent identities.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      3. High-Quality Travel Video Editing Services
                    </h3>
                    <p>
                      We create immersive travel promotional video services
                      that bring destinations to life.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      4. Platform-Optimized Travel Marketing Creatives
                    </h3>
                    <p>
                      We design destination marketing creatives for ads,
                      websites, and social media platforms.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      5. Emotional Destination Storytelling
                    </h3>
                    <p>
                      We create travel social media content that builds
                      curiosity and emotional engagement.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      6. Consistent Travel Brand Communication
                    </h3>
                    <p>
                      We ensure every visual output reflects a unified travel
                      creative agency approach.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      7. Strong strategy with creative execution
                    </h3>
                    <p>
                      We combine design thinking with performance-driven
                      marketing logic.
                    </p>
                  </div>
                  <div className="content-card" style={{ gridColumn: "1 / -1" }}>
                    <h3 className="section-subheading">
                      8. Customized Travel Content Creation Services
                    </h3>
                    <p>
                      We tailor every campaign based on audience behavior and
                      destination goals.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Travel Brands Must Adapt to a More Visual Digital World
                </h2>
                <p>
                  The travel industry is becoming more visual, competitive, and
                  experience-driven with every passing year. People are no
                  longer just choosing destinations. They are choosing emotions,
                  stories, and imagined experiences long before the journey
                  begins.
                </p>
                <p>
                  In this environment, travel graphic design services and{" "}
                  <Link
                    href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa"
                    className="text-primary"
                  >
                    video editing services
                  </Link>{" "}
                  for travel industry, supported by travel content creation
                  services and travel creative agency expertise, are no longer
                  optional. They are central to how interest is created and
                  decisions are made.
                </p>
                <p>
                  Brands that invest in structured visual storytelling do not
                  just attract attention. They create desire, and in travel,
                  desire is what drives every decision.
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
                            Ready to Inspire Travellers Through Visual
                            Storytelling?
                          </span>
                          <h3 className="tm-details-title">Get Started Today</h3>
                        </div>
                        <div className="tm-details-text">
                          <p>
                            Connect with Biztalbox for graphic design and video
                            editing services for the travel industry to create
                            content that inspires travellers and drives
                            meaningful engagement.
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
            </div>

            <ServiceThree showIndustry={false} />
          </main>
          <FooterThree />
        </div>
      </div>
    </Wrapper>
  );
}
