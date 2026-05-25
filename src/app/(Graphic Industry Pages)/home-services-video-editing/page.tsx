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
                            Graphic Design and Video Editing Services for Home Services Industry: Building Trust Before the First Visit
                          </h1>
                          <p>Most homeowners now judge a home service business before ever speaking to them.</p>
                          <p>They check Google reviews, scroll through social media, compare project photos, and quickly decide which company feels more reliable. And honestly, those decisions happen much faster than most businesses realize.</p>
                          <p>Earlier, home service companies could rely mostly on referrals and local presence. Today, customers compare professionalism too. They notice whether the business looks organized online, whether the branding feels consistent, and whether the work is presented clearly.</p>
                          <p>Because most customers cannot technically judge service quality beforehand. They judge presentation instead.</p>
                          <p>
                            That is exactly why graphic design and{" "}
                            <Link
                              href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa"
                              className="text-primary"
                            >
                              video editing services
                            </Link>{" "}
                            for the home services industry are becoming important
                            for modern service businesses trying to build stronger
                            trust online.
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
                  Why Graphics and Videos Matter So Much in Home Services Marketing
                </h2>
                          <p>Home services operate very differently from product businesses. A customer is not just buying a service. They are allowing someone into their personal space. That naturally makes trust a much bigger factor in the decision-making process.</p>
                          <p>This is where home services graphic design creates real business value. Clean branding across websites, uniforms, vans, banners, brochures,  <Link href="https://biztalbox.com/social-media-marketing" className="text-primary">social media</Link>  pages, and advertisements makes businesses feel more structured and dependable.</p>
                          <p>Video content helps in a different way. Most homeowners feel uncertain before hiring service providers because they do not fully understand the process, quality standards, or what the final outcome will actually look like.</p>
                          <p>Before-and-after transformations, repair walkthroughs, installation showcases, renovation progress videos, and process explainers help customers visually understand the work much faster. That visibility creates reassurance because customers can actually see proof.</p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  How Graphic Design and Video Editing Benefit Home Services Businesses
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">1. Stronger Customer Trust</h3>
                    <p>Professional presentation helps businesses feel more dependable before customers even make contact.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">2. Better Local Brand Recognition</h3>
                    <p>Consistent visuals across vehicles, uniforms, websites, and <Link href="https://biztalbox.com/social-media-marketing" className="text-primary">social media</Link> make businesses easier to remember locally.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">3. More Effective Before-and-After Marketing</h3>
                    <p>Transformation content naturally performs well because customers instantly understand the difference visually.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">4. Higher Social Media Engagement</h3>
                    <p>Well-edited home service videos usually attract more attention across Instagram, Facebook, YouTube Shorts, and local campaigns.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">5. Clearer Service Communication</h3>
                    <p>Visual content helps homeowners understand services without overwhelming them with technical details.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">6. More Professional Online Presence</h3>
                    <p>Strong branding makes even smaller businesses appear more established and organized.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">7. Reduced Customer Hesitation</h3>
                    <p>Project walkthroughs and service showcases help customers feel more comfortable before booking.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">8. Better Quality Leads</h3>
                    <p>Customers already understand the business better before reaching out, improving inquiry quality.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">9. Improved Advertising Performance</h3>
                    <p>Well-designed home services ad creatives hold attention much faster than generic service promotions.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">10. Long-Term Marketing Value</h3>
                    <p>Strong visual assets continue generating value across websites, ads, SEO pages, and <Link href="https://biztalbox.com/social-media-marketing" className="text-primary">social media</Link> over time.</p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Choosing the Right Creative Partner Matters for Home Service Businesses
                </h2>
                <p>A lot of agencies treat home services marketing like regular social media branding. That usually does not work.</p>
                <p>Customers in this industry are not looking for trendy visuals or overly polished campaigns. They respond better to businesses that feel practical, trustworthy, responsive, and believable.</p>
                <p>The right creative partner understands how to improve presentation without making the business feel artificial or exaggerated. Because in home services, trust is built through clarity far more than creativity.</p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  Why Home Service Businesses Choose Biztalbox for Graphic Design and Video Editing Services
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      1. Industry-Focused Creative Strategy
                    </h3>
                    <p>We understand how local service businesses compete for trust and visibility online.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      2. Professional Branding
                    </h3>
                    <p>Biztalbox's home services graphic design helps businesses look more organized, recognizable, and reliable across platforms.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      3. Practical Video Editing Approach
                    </h3>
                    <p>We create home services video editing services that showcase transformations, installations, repairs, and project quality clearly.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      4. Platform-Optimized Marketing Content
                    </h3>
                    <p>The team at Biztalbox develops visuals specifically for Google Business, Instagram, Facebook, YouTube, and local advertising campaigns.</p>
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
                    <p>Our creative strategy focuses on improving trust, engagement, and inquiry quality instead of relying on generic promotional messaging.</p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Visual Communication Is Essential for Home Service Businesses
                </h2>
                <p>Customers now expect home service companies to look professional online before deciding who to contact.</p>
                <p>As local competition continues growing, businesses with stronger branding, clearer communication, and better visuals naturally stand out faster.</p>
                <p>
                  In the{" "}
                  <Link
                    href="https://biztalbox.com/home-services"
                    className="text-primary"
                  >
                    Home Services Industry
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
                            Looking for Graphic Design and Video Editing Services for your Home Services business?
                          </span>
                          <h3 className="tm-details-title">Get Started Today</h3>
                        </div>
                        <div className="tm-details-text">
                          <p>
                            Connect with Biztalbox to create visual content that helps your home service business build stronger credibility, improve online presentation, and attract better-quality local inquiries.
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
                    Looking for Graphic Design and Video Editing Services for your Home Services business?
                  </h2>
                  <p className="content-prose" style={{ marginTop: "1.25rem" }}>
                    Connect with Biztalbox for graphic design and{" "}
                    <Link
                      href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa"
                      className="text-primary"
                    >
                      video editing services
                    </Link>{" "}
                    for home services that help your business look more professional,
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
                    Get in touch with Biztalbox today and elevate your home services brand online.
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
