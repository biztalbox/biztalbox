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
                            Food and Beverage Graphic Design Services and Video
                            Editing Services: Building Stronger Brands Through
                            Visual Storytelling
                          </h1>
                          <p>
                            Food and beverages are no longer discovered the way
                            they used to be.
                          </p>
                          <p>
                            People don’t walk into a restaurant first and then
                            decide. They begin with a scroll, a pause, and a
                            split-second reaction to what looks worth noticing.
                          </p>
                          <p>
                            People are not planning meals when they open
                            Instagram or a delivery app. They are simply moving
                            through content. But every now and then, something
                            catches their attention and makes them pause. A
                            close-up of melted cheese stretching. The steam
                            rising from a fresh dish. A slow pour that feels
                            almost too satisfying to scroll past.
                          </p>
                          <p>
                            And in that pause, they decide whether to engage or
                            scroll past.
                          </p>
                          <p>
                            That is exactly why food and beverage graphics
                            matter in a real business sense, because visibility
                            today is not about being present, it is about being
                            chosen in seconds.
                          </p>
                          <p>
                            Every cafe, restaurant, cloud kitchen, and FMCG food
                            brand is fighting for visibility in the same digital
                            space where users move fast and decide even faster.
                          </p>
                          <p>
                            This shift has made food and beverage graphic design
                            services and video editing services essential for
                            how brands attract, engage, and convert customers
                            online.
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
                  Why Food &amp; Beverage Brands Need Strong Visual Communication
                </h2>
                <p>
                  Food brands today operate like digital-first businesses, even
                  if they started offline.
                </p>
                <p>
                  A customer might never walk into a restaurant without first
                  seeing it on{" "}
                  <Link
                    href="https://biztalbox.com/blog/is-instagram-engagement-dead"
                    className="text-primary"
                  >
                    Instagram.
                  </Link>{" "}
                  They might order from a cloud kitchen without ever meeting the
                  brand physically. Even FMCG food products are judged first by
                  packaging visuals and online presentation before purchase.
                </p>
                <p>
                  This is why you need food and beverage content creation
                  services. Because in food marketing, visuals are not
                  supportive. They are decisive.
                </p>
                <p>
                  Food and beverage graphic design services help structure how a
                  brand is perceived. They make menus readable, packaging
                  clearer, and campaigns visually aligned so the brand feels
                  intentional rather than scattered. It decides whether a brand
                  feels premium, casual, trustworthy, or forgettable.
                </p>
                <p>
                  And then there are food and beverage video editing services.
                  They turn static visuals into something people can almost
                  experience. The motion, timing, and framing all influence
                  whether someone feels interest or ignores the content
                  completely.
                </p>
                <p>
                  This also reflects in conversions. When visuals feel clear and
                  appealing, people are more likely to order without hesitation.
                </p>
                <p>
                  When both design and video work together, food stops being
                  just information. It becomes experience.
                </p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  How Graphic Design and Video Editing Benefit{" "}
                  <Link
                    href="https://biztalbox.com/seo-for-food-and-beverage"
                    className="text-primary"
                  >
                    Food &amp; Beverage Brands
                  </Link>
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Stronger Brand Identity
                    </h3>
                    <p>
                      Consistent food branding and design services help
                      restaurants and food brands build recognition that
                      customers remember instantly.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Better Appetite Appeal
                    </h3>
                    <p>
                      Food is sold through craving, not explanation. Strong food
                      marketing creatives make dishes look desirable before they
                      are ordered.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Improved Menu and Product Presentation
                    </h3>
                    <p>
                      Well-structured restaurant graphic design services make
                      menus easier to read and help highlight high-margin or
                      signature items more effectively.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Higher{" "}
                      <Link
                        href="https://biztalbox.com/blog/what-is-social-media-advertising"
                        className="text-primary"
                      >
                        Social Media
                      </Link>{" "}
                      Engagement
                    </h3>
                    <p>
                      Food social media content performs strongly when visuals
                      are sharp, emotional, and designed for quick attention
                      capture.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Increased Orders and Conversions
                    </h3>
                    <p>
                      Better visual storytelling directly impacts decisions on
                      delivery platforms where users choose within seconds.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Stronger Restaurant Branding Experience
                    </h3>
                    <p>
                      Food and beverage graphic design services ensure every
                      touchpoint feels consistent, from dine-in menus to online
                      listings.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Emotional Connection With Food
                    </h3>
                    <p>
                      Food is deeply emotional. Video editing adds motion and
                      realism that makes viewers feel the experience before they
                      order.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Consistent Digital Presence
                    </h3>
                    <p>
                      Uniform branding across ads, websites, and social
                      platforms strengthens trust and recognition.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Better Performance in Ad Campaigns
                    </h3>
                    <p>
                      Restaurant ad creative services improve click-through
                      rates because visuals communicate value faster than text.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">Wider Audience Reach</h3>
                    <p>
                      Engaging food and beverage video editing services
                      naturally increase shareability across reels, shorts, and
                      social platforms.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Choosing the Right Creative Partner Matters
                </h2>
                <p>In the food industry, perception is everything.</p>
                <p>
                  A poorly shot image or inconsistent design does more than
                  reduce engagement. It changes how people value the food
                  itself. If it does not look appealing, most users will never
                  give it a second thought, no matter how good the product
                  actually is.
                </p>
                <p>
                  This is why choosing the right F&amp;B creative agency is not
                  a design decision. It is a business decision.
                </p>
                <p>
                  Food decisions are fast, emotional, and highly visual. A
                  strong creative partner understands that users do not analyze
                  food content. They react to it.
                </p>
                <p>
                  The right partner also understands platform behavior. What
                  works on a delivery app is different from what works on
                  Instagram or YouTube. What drives craving is different from
                  what builds trust. That balance is where performance comes
                  from.
                </p>
                <p>
                  Without that understanding, even good brands struggle to stand
                  out.
                </p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  Why Food and Beauty Brands Choose Biztalbox for Marketing
                  Creatives
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Industry-Focused Creative Approach
                    </h3>
                    <p>
                      We understand how food brands communicate across digital
                      and physical platforms.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Strong Food Branding and Design Services
                    </h3>
                    <p>
                      Our food and beverage graphic design services help brands
                      build clear and consistent visual identity systems.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      High-Impact Food and Beverage{" "}
                      <Link
                        href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa"
                        className="text-primary"
                      >
                        Video Editing Services
                      </Link>
                    </h3>
                    <p>
                      We create videos that focus on appetite, emotion, and
                      product clarity.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Platform-Optimized Execution
                    </h3>
                    <p>
                      Our restaurant video marketing services are built for
                      Instagram, delivery apps, ads, and social platforms.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Scroll-Stopping Food Marketing Creatives
                    </h3>
                    <p>
                      We design visuals that capture attention in crowded feeds
                      where competition is extremely high.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Consistent Brand Communication
                    </h3>
                    <p>
                      At Biztalbox, we ensure consistency across every
                      touchpoint through food and beverage content creation
                      services, so your brand feels stable, familiar, and easy
                      to remember over time.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      Strategy + Creativity Combined
                    </h3>
                    <p>
                      We align design and video with actual business goals like
                      orders, engagement, and recall.
                    </p>
                  </div>
                  <div className="content-card" style={{ gridColumn: "1 / -1" }}>
                    <h3 className="section-subheading">
                      Customized Food{" "}
                      <Link
                        href="https://biztalbox.com/blog/best-social-media-marketing-tools"
                        className="text-primary"
                      >
                        Social Media
                      </Link>{" "}
                      Content
                    </h3>
                    <p>
                      Our food and beverage content creation services are
                      tailored based on brand type, audience, and positioning.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  The Future of Food and Beverage Marketing in a Visual-First
                  World
                </h2>
                <p>
                  Food brands are no longer discovered in physical spaces first.
                  They are discovered visually. And in that moment of discovery,
                  attention is fragile. It can be gained or lost instantly
                  depending on how something looks and feels.
                </p>
                <p>
                  That is why food and beverage visual content is now directly
                  tied to business performance, not just branding.
                </p>
                <p>
                  Because in this industry, what people see often decides what
                  they taste.
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
                            Ready to make your food and beverage business stand
                            out online?
                          </span>
                          <h3 className="tm-details-title">Get Started Today</h3>
                        </div>
                        <div className="tm-details-text">
                          <p>
                            Connect with Biztalbox for food and beverage graphic
                            design services and video editing services that help
                            your brand turn everyday attention into real
                            customer action.
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
                    Ready to make your food and beverage business stand out
                    online?
                  </h2>
                  <p className="content-prose" style={{ marginTop: "1.25rem" }}>
                    Connect with Biztalbox for food and beverage graphic design
                    services and video editing services that help your brand
                    turn everyday attention into real customer action.
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
