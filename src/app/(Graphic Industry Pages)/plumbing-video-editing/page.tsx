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
                            Graphic Design and Video Editing Services for
                            Plumbers: Improve Branding, Trust, and Online
                            Visibility
                          </h1>
                          <p>
                            The plumbing industry has become far more digital
                            than many businesses realize.
                          </p>
                          <p>
                            Earlier, most customers would call whoever was
                            nearby or recommended by someone they knew. Now the
                            process usually starts online.
                          </p>
                          <p>
                            People search first. They compare. Open 4-5 tabs at
                            once. Scroll through the website and{" "}
                            <Link
                              href="https://biztalbox.com/social-media-marketing"
                              className="text-primary"
                            >
                              social media
                            </Link>{" "}
                            pages and form opinions within seconds.
                          </p>
                          <p>
                            Because customers are not just hiring for technical
                            skills. They are deciding who feels reliable enough
                            to enter their home or property. A business that
                            looks organized online usually feels safer to trust.
                            That is where presentation starts influencing
                            decisions.
                          </p>
                          <p>
                            If a plumbing company has poor visuals, outdated
                            branding, or inactive pages, customers often assume
                            the service experience may feel the same way too.
                            The work itself may be excellent, but online
                            perception changes how people judge professionalism
                            before the first conversation even happens.
                          </p>
                          <p>
                            This is exactly why graphic design and video editing
                            services for plumbers are becoming important for
                            modern plumbing businesses.
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
                  Why Plumbing Customers Trust Businesses With Better Graphics
                  and Videos
                </h2>
                <p>
                  Most people contact plumbers when something has already gone
                  wrong.
                </p>
                <p>
                  A pipe bursts. Drain gets blocked. Water starts leaking
                  somewhere it shouldn’t. Stress is already there before the
                  customer even starts searching. And stressed people look for
                  reassurance.
                </p>
                <p>This is where plumbing graphic design starts doing its job.</p>
                <p>
                  Sometimes it’s just a clean invoice. A properly branded van
                  outside someone’s house. A neat Instagram page. Maybe a website
                  where everything actually feels updated and active. Customers
                  notice these things even if they don’t consciously think about
                  them. It creates a feeling of trust and reliability.
                </p>
                <p>
                  And video services work differently. A lot of homeowners worry
                  about poor workmanship or half-done repairs. So when they see
                  actual repair walkthroughs, installation clips, or before-after
                  plumbing transformations, the hesitation reduces a bit. The
                  service starts feeling real instead of just advertised.
                </p>
                <p>
                  And plumbing service videos hold attention surprisingly well
                  online.
                </p>
                <p>
                  That’s why more plumbing businesses are now investing in{" "}
                  <Link
                    href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa"
                    className="text-primary"
                  >
                    video editing services
                  </Link>{" "}
                  for Instagram, Facebook, YouTube Shorts, and Google Business
                  pages.
                </p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  How Graphic Design and Video Editing Benefit Plumbing
                  Businesses
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">1. Builds Trust Faster</h3>
                    <p>
                      Professional visuals make a plumbing business feel more
                      dependable before the first phone call even happens. It
                      quietly changes perception.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      2. Makes The Business Easier To Remember
                    </h3>
                    <p>
                      When branding stays consistent across websites, invoices,
                      pamphlets and social media, people start recognising the
                      business locally. It builds familiarity.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      3. Makes Before-After Plumbing Transformations More
                      Powerful
                    </h3>
                    <p>
                      Plumbing work becomes much easier to appreciate visually
                      when customers can directly see the difference between the
                      problem and the final result.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      4. Improves Social Media Performance
                    </h3>
                    <p>
                      Well-edited plumbing videos naturally hold attention longer
                      because repair work and transformations are oddly
                      satisfying to watch online.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      5. Simplifies Technical Services
                    </h3>
                    <p>
                      Most customers don’t understand plumbing systems deeply.
                      Visual content explains repairs and installations in a much
                      simpler way.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      6. Helps Smaller Businesses Look More Established
                    </h3>
                    <p>
                      Strong branding gives structure. Even smaller plumbing
                      companies start feeling more organised and professional
                      online.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      7. Clear Visuals Reduce Hesitation
                    </h3>
                    <p>
                      Walkthrough videos help customers see the quality of work
                      beforehand instead of blindly trusting a service listing.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      8. Brings Better Customer Expectations
                    </h3>
                    <p>
                      People who already understand the work visually usually
                      communicate more clearly when they reach out.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      9. Improves Ad Performance
                    </h3>
                    <p>
                      Good plumbing ad creatives grab attention much faster than
                      generic local ads with random stock images.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Choosing the Right Creative Partner Matters for Plumbing
                  Graphic Design and Video Editing Services
                </h2>
                <p>
                  A lot of agencies create content that looks trendy but doesn’t
                  actually help service businesses communicate properly.
                </p>
                <p>
                  And plumbing customers don’t care about trendy. They care about
                  clarity. Whether the work looks real. Whether the business
                  feels trustworthy. Whether the communication feels
                  straightforward or confusing.
                </p>
                <p>
                  A good creative partner understands that balance. They make the
                  work easier to understand and easier to trust.
                </p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  Why Plumbing Businesses Choose Biztalbox for Graphic Design and
                  Video Editing Services
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      1. We Understand How Local Service Businesses Build Trust
                    </h3>
                    <p>
                      At Biztalbox, we understand how quickly people form opinions
                      online, especially in home service industries like plumbing.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      2. We Help Plumbing Businesses Look More Organised
                    </h3>
                    <p>
                      Our plumbing graphic design services help create consistency
                      across websites, brochures, ads, and social media pages.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      3. Our Videos Focus On Real Work
                    </h3>
                    <p>
                      We create plumbing video editing services around actual
                      repairs, installations, maintenance work, and project
                      walkthroughs. Nothing overdramatic. Just clear and
                      authentic.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      4. We Tailor Content for Each Platform
                    </h3>
                    <p>
                      Biztalbox creates tailored content according to different
                      platforms like Instagram, Facebook, Google Business, YouTube
                      and local ads. This fosters a deeper connection and
                      encourages more active participation.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      5. We Help Businesses Stay Visually Consistent
                    </h3>
                    <p>
                      Biztalbox focuses on consistent branding, which makes
                      plumbing businesses feel more established over time.
                      Customers remember businesses that look connected
                      everywhere.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      6. We Focus On Communication That Feels Clear
                    </h3>
                    <p>
                      Biztalbox creates graphics and videos that help plumbing
                      businesses feel more trustworthy, professional, and easier
                      to understand online.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Plumbing Businesses Need Strong Graphic Design and Video
                  Editing for Growth
                </h2>
                <p>
                  Customers now expect plumbing businesses to look professional
                  online before they even think about calling. That expectation
                  is only growing.
                </p>
                <p>
                  As more plumbing companies compete digitally, presentation
                  starts influencing trust much earlier in the decision-making
                  process. Sometimes before a customer even checks reviews.
                </p>
                <p>
                  That’s why graphic design and video editing services for
                  plumbers are becoming important for long-term visibility now.
                  Because customers simply want reassurance before letting
                  someone into their home.
                </p>
                <p>
                  In the{" "}
                  <Link
                    href="https://biztalbox.com/plumber-seo"
                    className="text-primary"
                  >
                    Plumbing Industry
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
                            Ready to Make Your Plumbing Business Stand Out Online?
                          </span>
                          <h3 className="tm-details-title">Get Started Today</h3>
                        </div>
                        <div className="tm-details-text">
                          <p>
                            Connect with Biztalbox for graphic design and video
                            editing services for plumbers that help your business
                            look more professional, build stronger customer trust,
                            and stand out across local platforms.
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
                    Ready to Make Your Plumbing Business Stand Out Online?
                  </h2>
                  <p className="content-prose" style={{ marginTop: "1.25rem" }}>
                    Connect with Biztalbox for graphic design and{" "}
                    <Link
                      href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa"
                      className="text-primary"
                    >
                      video editing services
                    </Link>{" "}
                    for plumbers that help your business look more professional,
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
                    Get in touch with Biztalbox today and elevate your plumbing
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
