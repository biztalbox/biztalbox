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
                            Graphic Design and Video Editing Services for Real
                            Estate Industry: Helping Properties Stand Out in a
                            Competitive Market
                          </h1>
                          <p>
                            The real estate industry has become heavily digital
                            in the way buyers discover properties. Earlier,
                            people would usually visit multiple sites first and
                            figure things out later. Now the journey often
                            starts online. Buyers browse listings, watch
                            walkthroughs, and compare spaces across platforms
                            like Instagram, YouTube, and real estate portals.
                          </p>
                          <p>
                            Given the fact that there are thousands of listings
                            that compete on the same platform on a daily basis,
                            it has become increasingly challenging to grab
                            one&apos;s attention. Static pictures have lost
                            their appeal. Cinematic walkthroughs, professionally
                            presented projects, drone footage, lifestyle photos,
                            and video tours are what get more traction now.
                          </p>
                          <p>
                            Even well-designed homes, premium apartments, and
                            commercial spaces go unnoticed if their listings
                            fail to communicate real value through visuals.
                          </p>
                          <p>
                            And for that, real estate businesses need excellent
                            videos and graphics. They help real estate brands,
                            developers, and agents present properties in a way
                            that feels trustworthy and worth exploring.
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
                  Why Real Estate Marketing Relies Heavily on Strong Visual
                  Communication Today
                </h2>
                <p>
                  Buying a property is a major financial decision, but the first
                  stage is surprisingly visual. People do not begin by comparing
                  specifications. They begin by reacting to how a space feels
                  online.
                </p>
                <p>
                  A buyer scrolling through listings is trying to answer simple
                  questions. Does this look livable? Does it feel worth the
                  price? Can I imagine myself here?
                </p>
                <p>That first impression is where visuals decide everything.</p>
                <p>
                  Graphic design helps structure property information in a way
                  that feels clean and easy to understand. Details like pricing,
                  location, and amenities become easier to process when they
                  are designed well.
                </p>
                <p>
                  Video editing adds movement and clarity. A walkthrough video
                  shows flow, lighting, and space in a way photos cannot. It
                  helps buyers mentally experience the property before they
                  visit it.
                </p>
                <p>
                  When both design and video work together, a listing stops
                  feeling like information. It starts feeling like a place
                  someone can actually step into.
                </p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  Benefits of Graphic Design and Video Editing in Real Estate
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      1. Better listing visibility
                    </h3>
                    <p>
                      Strong visuals naturally get more attention on property
                      portals and{" "}
                      <Link
                        href="https://biztalbox.com/blog/what-is-social-media-advertising"
                        className="text-primary"
                      >
                        social media
                      </Link>
                      . In a crowded market, this helps listings stand out
                      without extra effort.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      2. Higher quality leads
                    </h3>
                    <p>
                      Clear presentation attracts serious buyers who already
                      understand the property. This reduces time wasted on
                      irrelevant inquiries.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      3. Strong first impression
                    </h3>
                    <p>
                      A well-designed listing instantly improves perceived
                      property value. Even before a visit, buyers feel more
                      confident about the space.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      4. Faster decision process
                    </h3>
                    <p>
                      Walkthrough videos help buyers understand layout and
                      scale quickly. This reduces hesitation and speeds up
                      decision-making.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      5. Stronger brand presence
                    </h3>
                    <p>
                      Consistent visuals help real estate agents and developers
                      look more reliable and established in the market.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      6. Better ad performance
                    </h3>
                    <p>
                      High-quality creatives improve engagement on paid
                      campaigns, leading to more clicks and inquiries.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      7. Emotional connection
                    </h3>
                    <p>
                      Real estate is not just about space. It is about
                      lifestyle. Visual storytelling helps buyers imagine
                      living in that environment.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      8. Clear property communication
                    </h3>
                    <p>
                      Design simplifies complex details like floor plans,
                      pricing, and amenities, making listings easier to
                      understand.
                    </p>
                  </div>
                  <div className="content-card" style={{ gridColumn: "1 / -1" }}>
                    <h3 className="section-subheading">9. Long-term trust</h3>
                    <p>
                      Consistent visual quality builds familiarity. Over time,
                      buyers begin to trust the brand behind the listings.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Real Estate Visual Communication Needs the Right Partner
                </h2>
                <p>
                  Real estate is a high-value industry where trust plays a
                  major role in every decision.
                </p>
                <p>
                  Each visual detail influences how a property is perceived. If
                  the presentation feels unclear or inconsistent, interest can
                  drop even if the property itself is strong.
                </p>
                <p>
                  That is why visual communication in this industry needs more
                  than just good design. It needs structure, clarity, and an
                  understanding of how buyers actually think while exploring
                  options online.
                </p>
                <p>
                  A good creative partner knows how to present a property
                  honestly, highlight its strengths clearly, and maintain
                  consistency across all platforms without overdoing anything.
                </p>
                <p>
                  In real estate, visuals are not just supporting material.
                  They are part of the decision-making process itself.
                </p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  Why Choose Biztalbox for Real Estate Graphic Design and Video
                  Editing Services
                </h2>
                <p className="content-prose">
                  Biztalbox works on video editing and graphic design services
                  for{" "}
                  <Link
                    href="https://biztalbox.com/real-estate-seo"
                    className="text-primary"
                  >
                    real estate industry
                  </Link>{" "}
                  with a focus on how properties are actually evaluated online.
                </p>
                <p className="content-prose">
                  We understand that buyers are not just looking at visuals.
                  They are trying to decide whether a property feels right.
                </p>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">1. Property Clarity</h3>
                    <p>
                      We design and edit content that makes layouts, spaces,
                      and features easy to understand at a glance.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">2. Walkthrough Focus</h3>
                    <p>
                      Our videos are structured to show how a property flows,
                      not just how it looks in isolated shots.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">3. Listing Impact</h3>
                    <p>
                      We help listings stand out in crowded platforms by
                      improving first impression quality.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      4. Buyer Perspective
                    </h3>
                    <p>
                      We design visuals based on how buyers scan, compare, and
                      eliminate properties online.
                    </p>
                  </div>
                  <div className="content-card" style={{ gridColumn: "1 / -1" }}>
                    <h3 className="section-subheading">
                      5. Brand Consistency
                    </h3>
                    <p>
                      We ensure real estate brands look reliable and
                      recognizable across all listings and platforms.
                    </p>
                    <p>
                      At Biztalbox, we do not just create visuals. We help
                      properties communicate value clearly in a market where
                      attention is limited and competition is high.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Real Estate Brands Must Adapt to Digital-First Buyer
                  Behaviour
                </h2>
                <p>
                  Real estate buying decisions now begin online, not on-site.
                  That means the first impression is no longer physical, it is
                  visual.
                </p>
                <p>
                  In this environment, strong design and well-edited videos
                  directly influence trust, interest, and conversions.
                </p>
                <p>
                  Brands that invest in structured visual communication attract
                  better buyers and close decisions faster. Those who do not
                  often get lost in the noise, regardless of property quality.
                </p>
                <p>
                  In real estate today, visuals are not support. They are the
                  entry point to every decision.
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
                            Ready to Make Your Real Estate Marketing Sharper
                            Online?
                          </span>
                          <h3 className="tm-details-title">Get Started Today</h3>
                        </div>
                        <div className="tm-details-text">
                          <p>
                            Connect with Biztalbox for graphic design and{" "}
                            <Link
                              href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa"
                              className="text-primary"
                            >
                              video editing services
                            </Link>{" "}
                            to make your real estate marketing look sharper
                            online and drive stronger engagement!
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
