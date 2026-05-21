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
                            Graphic Design and Video Editing Services for Pet
                            Care Industry: Strengthening Brand Visibility and
                            Customer Engagement
                          </h1>
                          <p>
                            Pet care is not a transaction-driven industry. It
                            runs on emotion, responsibility, and slow trust
                            building. Most pet owners do not decide quickly.
                            They look around, compare, and notice what feels
                            safe before they act.
                          </p>
                          <p>
                            First impressions usually happen online now. A
                            clinic page, a grooming profile, or a pet brand is
                            judged before anything is read. Sometimes even
                            before a service is understood.
                          </p>
                          <p>
                            You may have noticed this yourself. A clean page
                            feels more reliable even without explanation. A
                            cluttered one creates hesitation even if the service
                            is strong.
                          </p>
                          <p>
                            This is why pet care graphic design and{" "}
                            <Link
                              href="https://biztalbox.com/blog/best-video-editing-agency-in-the-usa"
                              className="text-primary"
                            >
                              video editing services
                            </Link>{" "}
                            have become central to how trust is formed and
                            decisions are made.
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
                  Why Pet Care Brands Need Strong Visual Communication Today
                </h2>
                <p>
                  <Link
                    href="https://biztalbox.com/petcare-seo"
                    className="text-primary"
                  >
                    Pet care
                  </Link>{" "}
                  discovery has shifted from word of mouth to digital
                  visibility. Today, most first impressions are formed online,
                  often within a few seconds of viewing content.
                </p>
                <p>
                  Pet owners are not always actively searching for a service.
                  In many cases, they come across it while scrolling. A grooming
                  transformation, a clean clinic setup, or a calm pet after
                  treatment often becomes the first point of attention.
                </p>
                <p>That is usually enough to start influencing perception.</p>
                <p>
                  Platforms like Instagram and TikTok have made this behaviour
                  normal. People do not spend time reading long descriptions
                  there. They respond to what they can understand instantly
                  through visuals. A short clip of a pet being groomed or a
                  rescue moment often stops scrolling faster than any written
                  description. Not because it is loud, but because it feels
                  real.
                </p>
                <p>
                  Emotional content tends to stay longer in memory. That is why
                  reels and short videos dominate attention today.
                </p>
                <p>
                  Visual content has become the default language in this space.
                  If a brand is not communicating visually, it often gets
                  overlooked without anyone consciously deciding to ignore it.
                </p>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  How Graphic Design Services Benefit Pet Care Brands
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      1. Storytelling drives pet-related decisions
                    </h3>
                    <p>
                      A simple video of a stray dog being fed or groomed after
                      rescue often creates stronger engagement than any
                      promotional text. That emotional response is what makes
                      pet branding and visual identity services essential.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      2. Building trust through transparency
                    </h3>
                    <p>
                      Showing real processes like grooming, consultation, or
                      shelter care removes uncertainty. It helps people feel
                      they are seeing the truth, not just a presentation. It is
                      especially important for clinics to invest in pet clinic{" "}
                      <Link
                        href="https://biztalbox.com/blog/best-social-media-marketing-tools"
                        className="text-primary"
                      >
                        social media
                      </Link>{" "}
                      design services that make their processes visually clear.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      3. Product marketing depends on visual appeal
                    </h3>
                    <p>
                      Pet products are judged quickly. Packaging, lighting, and
                      presentation often decide interest before features are
                      even read. Strong visuals shape perceived value in video
                      editing for pet grooming brands.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      4. Education content simplifies complex pet care topics
                    </h3>
                    <p>
                      Pet care involves small but important knowledge.
                      Nutrition, hygiene, and behavior are easier to understand
                      when shown visually. This is where pet care content
                      creation services play a practical role.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      5. Higher engagement and algorithm performance
                    </h3>
                    <p>
                      Content that looks clean and clear tends to get saved or
                      shared more often on Instagram. Algorithms respond to
                      this behavior and push it further, increasing natural
                      reach.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      6. Brand identity in a crowded market
                    </h3>
                    <p>
                      Most pet businesses offer similar services. What separates
                      them is consistency in how they look and communicate. The
                      one with consistent pastel visuals, structured typography,
                      and recognizable style feels more premium. Pet branding
                      and visual identity services create that consistency and
                      differentiation.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      7. Supporting customer retention and community building
                    </h3>
                    <p>
                      When a pet clinic regularly posts familiar faces of pets
                      being treated, owners feel connected. Regular visual
                      updates build a sense of trust and comfort that brings
                      customers back without reminders or offers. Over time,
                      this consistency naturally forms a small, loyal community
                      around the brand.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      8. Increasing conversions in digital marketing campaigns
                    </h3>
                    <p>
                      A simple “before-after grooming” ad often performs better
                      than a long service explanation. Clear visuals reduce
                      hesitation. This is where visual marketing for pet care
                      businesses directly impacts bookings.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  Importance of Video Editing Services for Pet Care Brands
                </h2>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      1. Editing gives raw moments direction
                    </h3>
                    <p>
                      Video often changes how a simple moment is perceived. Raw
                      footage of pets already carries emotion, but editing
                      gives it direction.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      2. Transformations and adoption stories stay memorable
                    </h3>
                    <p>
                      Grooming transformations and adoption stories are often
                      remembered because they show change. People naturally
                      respond to progress they can see.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      3. Demonstrations remove doubt
                    </h3>
                    <p>
                      Product demonstrations remove doubt by showing actual use
                      instead of explanation. This reduces confusion without
                      needing long descriptions.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      4. Short-form videos perform better
                    </h3>
                    <p>
                      Short-form videos perform especially well on TikTok and
                      Instagram because attention is limited and decisions are
                      quick.
                    </p>
                  </div>
                  <div className="content-card" style={{ gridColumn: "1 / -1" }}>
                    <h3 className="section-subheading">
                      5. Good editing controls pace
                    </h3>
                    <p>
                      Good editing controls pace. It decides what is seen first
                      and what is felt last. That structure often determines
                      whether someone watches till the end or scrolls away.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-section">
                <h2 className="section-heading">
                  Why Pet Care Brands Choose Biztalbox for Creative Growth
                </h2>
                <p className="content-prose">
                  Choosing a creative partner is not only about output. It is
                  about understanding how trust actually forms in this industry,
                  slowly and through repeated clarity. Here are some reasons to
                  choose Biztalbox for pet care video and graphic editing
                  services:
                </p>

                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">
                      1. Industry understanding
                    </h3>
                    <p>
                      We understand how pet care decisions are made emotionally
                      and gradually. Nothing is rushed in this space.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      2. Clear, purpose-driven design
                    </h3>
                    <p>
                      Every visual is created to make information easier to
                      absorb and less confusing to process.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      3. Video content that builds real trust
                    </h3>
                    <p>
                      We focus on real moments, real care, and real processes
                      instead of over-stylised visuals that feel distant.
                    </p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">
                      4. Consistency across all touchpoints
                    </h3>
                    <p>
                      Your brand should feel familiar whether someone sees it
                      on a post, a page, or a reel.
                    </p>
                  </div>
                  <div className="content-card" style={{ gridColumn: "1 / -1" }}>
                    <h3 className="section-subheading">
                      5. Communication that matches audience mindset
                    </h3>
                    <p>
                      Pet owners are not looking for noise. They are looking for
                      clarity and reassurance.
                    </p>
                  </div>
                </div>
              </section>

              <section className="content-section content-prose">
                <h2 className="section-heading">
                  Ready to Elevate Your Pet Care Marketing With Biztalbox?
                </h2>
                <p>
                  Pet care growth depends on how clearly a brand communicates
                  what it stands for. Most decisions are shaped before
                  conversation begins. Visuals do that work quietly in the
                  background.
                </p>
                <p>
                  Strong design and video editing do not just attract attention.
                  They reduce doubt. They make choices easier. Over time, that
                  is what builds real growth in this industry.
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
                            Ready to Elevate Your Pet Care Marketing With
                            Biztalbox?
                          </span>
                          <h3 className="tm-details-title">Get Started Today</h3>
                        </div>
                        <div className="tm-details-text">
                          <p>
                            Connect with Biztalbox today to create visuals that
                            make your brand instantly connect with pet owners!
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
                    Ready to Elevate Your Pet Care Marketing With Biztalbox?
                  </h2>
                  <p className="content-prose" style={{ marginTop: "1.25rem" }}>
                    Connect with Biztalbox today to create visuals that make
                    your brand instantly connect with pet owners!
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
