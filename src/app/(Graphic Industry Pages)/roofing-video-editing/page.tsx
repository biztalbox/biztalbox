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
                            Graphic Design and Video Editing Services for the
                            Roofing Industry: Elevate Your Brand and Build Trust
                          </h1>
                          <p>
                            Most homeowners cannot professionally judge roofing
                            quality. So when they compare roofing companies
                            online, they judge something else first:
                            presentation.
                          </p>
                          <p>
                            A roofing business with strong project visuals, clear
                            branding, and professional communication immediately
                            feels more trustworthy. And in an industry where
                            customers are making expensive decisions about their
                            property, that trust matters a lot.
                          </p>
                          <p>
                            Earlier, referrals were enough. Now customers check
                            Google reviews, social media pages, project photos,
                            and local listings before making contact.
                          </p>
                          <p>
                            That shift is exactly why graphic design and video
                            editing services for roofing industry are becoming
                            important for modern roofing businesses. Because
                            today, customers often decide which roofing company
                            feels most reliable before the first inspection even
                            happens.
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
                  Role of Graphic Design and Video Editing in the Roofing
                  Industry
                </h2>
                <p>
                  Roofing is one of those industries where customers need to see
                  professionalism before they believe it. And that is where
                  graphic design starts creating value.
                </p>
                <p>
                  Roofing graphic design is not just about logos or social media
                  posts. It shapes how the entire business feels across every
                  customer touchpoint. Things like branded quotations, service
                  brochures, truck graphics, posters, banners, website layouts,{" "}
                  <Link
                    href="https://biztalbox.com/social-media-marketing"
                    className="text-primary"
                  >
                    social media
                  </Link>{" "}
                  creatives, roofing ad creatives, and local campaign visuals
                  all influence perception.
                </p>
                <p>
                  When these things look clean and connected, the business
                  automatically feels more established.
                </p>
                <p>
                  Customers may not consciously think, “This brochure is
                  designed well.” But they do feel when a company looks
                  organized versus inconsistent. And in roofing, that difference
                  matters because homeowners are already cautious before
                  spending.
                </p>
                <p>
                  Good design reduces uncertainty. It helps roofing businesses
                  communicate professionalism visually before the customer even
                  speaks to the team.
                </p>
                <p>Video content works differently.</p>
                <p>
                  Most homeowners do not fully understand roofing processes.
                  They cannot easily judge whether an installation was done
                  properly or whether storm damage repairs were handled
                  correctly. That is why roofing{" "}
                  <Link
                    href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa"
                    className="text-primary"
                  >
                    video editing services
                  </Link>{" "}
                  have become so valuable recently. Videos help make the work
                  understandable.
                </p>
                <p>
                  Drone footage shows roof scale and condition clearly.
                  Before-and-after transformations make improvements feel more
                  visible. Inspection walkthroughs explain damage in a way
                  homeowners can actually follow. Time-lapse installation videos
                  show professionalism, process, and effort in a much more
                  transparent way.
                </p>
                <p>
                  And roofing service videos build trust faster than most
                  written marketing ever can. Because customers can physically
                  see the quality of work instead of simply reading claims about
                  it.
                </p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  How Graphic Design and Video Editing Benefit Roofing
                  Businesses
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      1. Stronger Customer Trust
                    </h3>
                    <p>
                      Professional visuals help roofing businesses feel safer
                      and more reliable before customers even make contact.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      2. Better Local Brand Recognition
                    </h3>
                    <p>
                      Consistent branding across trucks, uniforms, websites, and{" "}
                      <Link
                        href="https://biztalbox.com/social-media-marketing"
                        className="text-primary"
                      >
                        social media
                      </Link>{" "}
                      makes companies easier to remember locally.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      3. More Effective Before-and-After Marketing
                    </h3>
                    <p>
                      Roofing transformations create strong visual contrast,
                      which naturally performs well online.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      4. Higher Social Media Engagement
                    </h3>
                    <p>
                      Well-edited roofing videos usually attract more attention
                      across Instagram, Facebook, YouTube Shorts, and local
                      campaigns.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      5. Clearer Project Communication
                    </h3>
                    <p>
                      Visual content helps homeowners understand roofing
                      services, inspections, and repair processes much faster.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      6. More Professional Online Presence
                    </h3>
                    <p>
                      Strong branding helps roofing companies appear more
                      established and organized in competitive markets.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      7. Reduced Customer Hesitation
                    </h3>
                    <p>
                      Walkthrough videos and inspection showcases create
                      reassurance by openly showing work quality.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      8. Improved Advertising Performance
                    </h3>
                    <p>
                      Well-designed roofing ad creatives hold attention faster
                      than generic service promotions.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      9. Long-Term Marketing Value
                    </h3>
                    <p>
                      Strong visual assets continue generating value across
                      websites, ads, local SEO pages, and social media over time.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Choosing the Right Creative Partner Matters for Roofing
                  Businesses
                </h2>
                <p>
                  A lot of agencies create overly polished marketing that does
                  not feel believable for local service industries. That usually
                  does not work well in roofing. Homeowners respond better to
                  businesses that feel practical, experienced, and transparent.
                  They want to see real projects, real proof of work, and
                  communication that feels trustworthy.
                </p>
                <p>
                  The right creative partner understands how to improve
                  presentation without making the business feel artificial.
                  Because in roofing, trust is built through proof far more than
                  promotion.
                </p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  Why Roofing Businesses Choose Biztalbox for Graphic Design and
                  Video Editing Services
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      1. We understand how homeowners choose roofing companies
                    </h3>
                    <p>
                      The team at Biztalbox knows that most customers decide how
                      they feel about a roofing business before they ever make
                      contact. That first impression usually comes from visuals,
                      communication, and how professional the company feels
                      online.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      2. We help roofing businesses look more established
                    </h3>
                    <p>
                      A good presentation creates confidence. Biztalbox helps
                      roofing companies build that through clean graphic design,
                      organized branding, and visuals that make the business feel
                      reliable across websites, social media, quotations, and
                      advertising materials.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      3. Our videos focus on real work, not forced marketing
                    </h3>
                    <p>
                      At Biztalbox, we create roofing video editing services
                      that showcase actual inspections, repairs, installations,
                      transformations, and project progress. The content feels
                      natural because customers respond better to authenticity
                      than overproduced sales content.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      4. We create content for where customers already spend time
                    </h3>
                    <p>
                      The team at Biztalbox develops content for Google
                      Business, Instagram, Facebook, YouTube, websites, and local
                      advertising campaigns. We understand that every platform
                      works differently, so the communication should too.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      5. We help businesses stay visually consistent
                    </h3>
                    <p>
                      Customers notice consistency even when they do not realize
                      it consciously. When branding looks connected across trucks,
                      uniforms, websites, social media, and customer
                      communication, the business starts feeling more established
                      and easier to trust over time.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      6. We focus on trust first
                    </h3>
                    <p>
                      A good-looking visual means very little if it does not build
                      confidence. That is why Biztalbox focuses on communication
                      that improves trust, strengthens engagement, and helps
                      roofing businesses attract better-quality inquiries instead
                      of empty attention.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Visual Communication Is Becoming Essential for Roofing
                  Businesses?
                </h2>
                <p>
                  Customers now expect roofing companies to show proof of work
                  online before deciding who to trust with their property.
                </p>
                <p>
                  As competition keeps growing across digital platforms,
                  businesses with stronger branding, better visuals, and clearer
                  communication naturally stand out faster. This is why graphic
                  design and video editing services for roofing industry are
                  becoming important for long-term visibility and customer
                  confidence.
                </p>
                <p>
                  In the{" "}
                  <Link
                    href="https://biztalbox.com/roofing-seo"
                    className="text-primary"
                  >
                    Roofing Industry
                  </Link>
                  , presentation shapes trust long before a homeowner picks up
                  the phone. Strong visuals and edited project content help your
                  business feel established, transparent, and worth contacting.
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
                            Ready to elevate your brand presence?
                          </span>
                          <h3 className="tm-details-title">Get Started Today</h3>
                        </div>
                        <div className="tm-details-text">
                          <p>
                            Connect with Biztalbox to create visual content that
                            helps your roofing business build stronger trust,
                            improve online presentation, and attract
                            better-quality local inquiries.
                          </p>
                          <p>
                            Get professional graphic design and{" "}
                            <Link
                              href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa"
                              className="text-primary"
                            >
                              video editing services
                            </Link>{" "}
                            built for modern roofing companies.
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
                    Ready to Elevate Your Roofing Brand With Strong Visual
                    Content?
                  </h2>
                  <p className="content-prose" style={{ marginTop: "1.25rem" }}>
                    Connect with Biztalbox to create visual content that helps
                    your roofing business build stronger trust, improve online
                    presentation, and attract better-quality local inquiries.
                  </p>
                  <p
                    style={{
                      marginTop: "1.25rem",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      color: "#fff",
                    }}
                  >
                    Ready to elevate your brand presence? Connect with Biztalbox
                    today.
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
