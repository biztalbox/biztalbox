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
                            Why Beauty and Wellness Brands Need Strong Visual
                            Design and Video Editing to Grow Online
                          </h1>
                          <p>
                            Worth around US$172 billion in 2024, the{" "}
                            <Link
                              href="https://biztalbox.com/beauty-and-wellness"
                              className="text-primary"
                            >
                              beauty and wellness market
                            </Link>{" "}
                            is expected to reach US$226 billion by 2030. More
                            people are spending on skincare, salon services,
                            wellness treatments, and self-care than they were a
                            few years ago.
                          </p>
                          <p>But the industry has also become overcrowded.</p>
                          <p>
                            New salons, skincare brands, and wellness businesses
                            appear online almost every day. Which also means
                            people have endless options in front of them. Even a
                            genuinely good business can get overlooked if its
                            online presence does not leave any impression. That
                            is because discovery works differently now.
                          </p>
                          <p>
                            Most people come across a beauty brand online before
                            they ever step into the actual space. They check
                            Instagram. They watch reels. They look at treatment
                            videos, branding, interiors, and even the way
                            content is edited before deciding whether the brand
                            feels worth their time or money. These decisions
                            happen quickly.
                          </p>
                          <p>
                            A clean feed makes a business feel more put
                            together. Good videos make treatments feel more
                            believable. Consistent visuals make a brand easier
                            to remember. And when the presentation feels
                            careless, people move on just as fast.
                          </p>
                          <p>
                            That is why visuals are no longer just a marketing
                            extra for beauty brands. They shape how people see
                            the business from the very beginning.
                          </p>
                          <p>
                            Which is exactly why graphic design and{" "}
                            <Link
                              href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa"
                              className="text-primary"
                            >
                              video editing services
                            </Link>{" "}
                            for beauty and wellness industry have become so
                            important today.
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
                  Why Visual Presentation Matters More Than Ever for Beauty and
                  Wellness Brands
                </h2>
                <p>
                  Services aren&apos;t the only thing that makes beauty and
                  wellness successful. It is about confidence, feeling, and
                  trust. People want to see results before they make any
                  decision.
                </p>
                <p>
                  For this reason, most consumers browse through{" "}
                  <Link
                    href="https://biztalbox.com/blog/is-instagram-engagement-dead"
                    className="text-primary"
                  >
                    Instagram
                  </Link>
                  , reels, and videos prior to booking services or purchasing
                  products. This is where visuals start to shape decisions.
                </p>
                <p>
                  Good graphic design helps a brand look clean and consistent.
                  It makes everything feel organized, from social media posts to
                  ads. This makes the brand feel more professional and reliable.
                </p>
                <p>
                  Video editing adds movement and emotion. A simple salon clip
                  becomes a transformation story. A skincare demo becomes proof
                  of results. A spa video starts to feel calming and real.
                </p>
                <p>
                  When both design and video work together, something important
                  happens. People start trusting the brand faster. And at the
                  same time, the brand becomes easier to remember in a crowded
                  market.
                </p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  Benefits of Graphic Design and Video Editing for Beauty and
                  Wellness Brands
                </h2>
                <p className="content-prose">
                  Good graphic design and professionally edited videos do much
                  more than improve how a brand looks online. They directly
                  influence how people discover, trust, and connect with a
                  beauty or wellness business, which eventually impacts real
                  business growth. Here are some of the biggest benefits these
                  services bring.
                </p>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      1. Increased visibility on social networks
                    </h3>
                    <p>
                      Appealing visuals allow beauty brands to stand out on
                      popular social networks like Instagram, TikTok, and
                      YouTube Shorts. Thus, brand visibility increases
                      organically.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      2. Higher engagement from audiences
                    </h3>
                    <p>
                      People save and share content that feels useful or
                      visually satisfying. In beauty, this often happens when
                      the content feels both aspirational and easy to
                      understand.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      3. Strong first impression and trust
                    </h3>
                    <p>
                      Before any conversation or booking, users already decide
                      whether a brand feels credible. A consistent visual
                      identity often becomes the reason they stay instead of
                      leaving.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      4. More bookings and sales
                    </h3>
                    <p>
                      When services are clearly shown through visuals,
                      hesitation reduces. People do not need to imagine the
                      outcome; they can already see it. That is how graphic
                      design and video editing services for beauty and wellness
                      brands lead to more bookings and sales.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      5. Easy understanding of services
                    </h3>
                    <p>
                      Short videos and simple designs help explain treatments,
                      skincare routines, and wellness services in a clear way.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      6. Strong brand identity
                    </h3>
                    <p>
                      The beauty industry is one of the most saturated
                      industries. In the long run, many companies tend to look
                      the same on digital platforms. A consistent visual style
                      makes a brand memorable. This happens through colours,
                      editing style, layouts, and overall aesthetic.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      7. Better ad performance
                    </h3>
                    <p>
                      Good design and editing make ads more engaging, which
                      improves clicks and conversions.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      8. Emotional connection with customers
                    </h3>
                    <p>
                      Beauty decisions are emotional. Visual storytelling helps
                      people feel connected to a brand.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      9. Strong presentation of real results
                    </h3>
                    <p>
                      Before-after content becomes more powerful when it is
                      edited clearly and professionally.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      10. Long-term customer engagement
                    </h3>
                    <p>
                      Regular visual content keeps the audience connected, even
                      after their first visit or purchase.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Why Professional Execution Matters in Beauty and Wellness
                  Marketing
                </h2>
                <p>
                  In the beauty and wellness industry, visuals directly affect
                  trust. Even a good service can feel weak if the presentation
                  is poor. That is why choosing the right creative partner
                  becomes important.
                </p>
                <p>
                  An experienced agency recognizes how the beauty market
                  operates and knows how to appeal to the customer visually, as
                  well as maintain consistent branding throughout all digital
                  platforms.
                </p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  Why Biztalbox is Trusted for Beauty and Wellness Graphic
                  Design and Video Editing Services
                </h2>
                <p className="content-prose">
                  Here are some reasons you should partner with Biztalbox for
                  video editing and graphic design services for the beauty and
                  wellness industry:
                </p>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      1. Industry Insight Design
                    </h3>
                    <p>
                      We understand how beauty and wellness customers judge
                      brands visually, and we design accordingly.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      2. Trust-Focused Visuals
                    </h3>
                    <p>
                      Every design and video is made to build trust, not just
                      attract attention.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      3. Transformation Story Editing
                    </h3>
                    <p>
                      We turn raw footage into clear transformation stories that
                      show real results.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      4. Consistent Brand identity
                    </h3>
                    <p>
                      Visual identity is maintained across Instagram, websites,
                      advertisements, and digital campaigns to ensure strong
                      brand recall.
                    </p>
                  </div>
                  <div className="content-card" style={{ gridColumn: "1 / -1" }}>
                    <h3 className="section-subheading">
                      5. Growth-Driven Content Approach
                    </h3>
                    <p>
                      Biztalbox doesn&apos;t just focus on content creation. It
                      is helping beauty brands get more visibility, bookings,
                      and customer trust.
                    </p>
                    <p>
                      We do not treat design and video as separate services. We
                      treat them as one system that helps beauty brands
                      communicate better and grow faster.
                    </p>
                  </div>
                </div>
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
                            Transform Your Beauty and Wellness Brand Through
                            Visual Storytelling
                          </span>
                          <h3 className="tm-details-title">
                            Ready to Elevate Your Beauty Brand?
                          </h3>
                        </div>
                        <div className="tm-details-text">
                          <p>
                            The beauty and wellness industry is no longer
                            defined only by service quality. It is defined by
                            how clearly that quality is communicated in digital
                            spaces. Brands that invest in structured visual
                            communication build trust earlier and grow faster.
                            Brands that ignore it often remain invisible, even
                            if their work is strong.
                          </p>
                          <p>
                            In today’s digital world, graphic design and video
                            editing for beauty and wellness industry are not
                            optional. They are the foundation of how beauty and
                            wellness brands grow.
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
                    Ready to Elevate Your Beauty Brand?
                  </h2>
                  <p className="content-prose" style={{ marginTop: "1.25rem" }}>
                    Connect with Biztalbox today for a visual identity that
                    makes you stand out online.
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
