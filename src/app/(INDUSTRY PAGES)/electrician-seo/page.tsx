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
import shape_2 from "@/assets/img/home-04/about/about-shape-1.png";
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
            {/* Hero */}
            <div className="tp-hero-4-area tp-btn-trigger pt-80 pt-md-0">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-hero-4-content-wrap">
                      <div className="p-relative">
                        <div className="tp-hero-4-content p-relative" style={{ marginBottom: "0" }}>
                          <h1 className="text-white tp-char-animation">
                            Electrician SEO: Understanding Search Visibility, SEO Strategies, and How Electricians Attract Customers Online
                          </h1>
                          <p>
                            The electrical service industry continues to grow as cities expand and power systems become more complex. But demand alone doesn’t guarantee new customers. Today, most people search online before calling an electrician. In this guide, we break down SEO for electricians, the strategies that improve visibility, and how electrical businesses turn search traffic into real leads.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <BookCallForm />

            {/* Content Sections */}
            <div className="container">
              {/* Industry Overview */}
              <section className="content-section content-prose">
                <h2 className="section-heading">Electrical Services Industry Overview and the Growing Need for SEO</h2>
                <div className="content-prose">
                  <p>The electrical services industry has continued to grow steadily as the demand for power and other electrical systems continues to rise in the world. The industry is expected to rise from 802.31 billion USD in 2025 to 1,159.6 billion USD in 2035. This is a result of the consistent demand for power and other electrical systems in the residential, commercial, and industrial sectors. Today&apos;s buildings are more technologically advanced and dependent on power compared to previous years. They are no longer just basic necessities but rather integral parts of the buildings and homes. They must be installed, maintained, and upgraded by skilled professionals.</p>
                  <p>Several forces keep pushing the industry forward:</p>
                  <ul>
                    <li><strong>Urban expansion and infrastructure growth:</strong> Cities are growing fast. New residential towers, commercial complexes, and transport systems. Each project needs electrical installation from the ground up, followed by years of repair and maintenance.</li>
                    <li><strong>Rising attention to energy efficiency:</strong> Businesses and homeowners are more conscious of power consumption than they used to be. Energy-efficient lighting, upgraded systems, and better electrical planning. Electricians are increasingly involved in modernizing older infrastructure.</li>
                    <li><strong>Renewable energy adoption:</strong> Solar power and other modern systems are now being commonly used in buildings. However, they need the involvement of electricians for safe integration and long-term reliability.</li>
                    <li><strong>Stricter safety and compliance standards:</strong> Electrical systems must meet strict codes and regulations. Property owners are rarely willing to take risks in this area; hence, the need for certified professionals.</li>
                  </ul>
                  <p>But something else has changed, too. The way customers find electricians. A few years ago, people asked neighbors or called someone they already knew. Today the process usually starts with a search bar. Someone types “electrician near me.” They scan results quickly, compare options, read reviews And then they call the business that appears first and looks trustworthy. In a market where demand already exists, visibility becomes the real advantage. Electrical service providers who appear in those search moments win the call. Those who don’t… often never get considered.</p>
                </div>
              </section>

              {/* What Is Electrician SEO */}
              <section className="content-section content-prose">
                <h2 className="section-heading">Electrician SEO Explained: How Electricians Get Found on <Link href="https://biztalbox.com/blog/free-google-seo-tools" className="text-primary">Google</Link></h2>
                <p>Electrician SEO is a process of ensuring that an electrical business is visible when people actively search for the services of an electrician online. It is the link between the electrician company and homeowners, property managers, or businesses, the moment their assistance is required. When a potential customer searches for an electrician, the search engines decide which companies appear and in what order.</p>
                <p>Search engines evaluate websites to see what a business really does and who it serves. They look at the services you offer, how clearly those services are explained, where your business operates, and the overall trustworthiness of the company&apos;s online presence. They also consider the users&apos; interaction with a website over time. Clear, consistent, and easy-to-understand information allows search engines to recommend your business in related searches with a high degree of confidence.</p>
                <p>That is why electrician SEO is a must-have. It removes ambiguity, helping search engines interpret your website correctly. <Link href="https://biztalbox.com/blog/white-hat-seo-vs-black-hat-seo-vs-grey-hat-seo" className="text-primary">SEO</Link> is crucial in ensuring that your business is linked to the right services, locations and customer needs. Without it, even the most skilled electrician companies find it hard to get discovered online because search engines cannot place their business clearly in front of the people looking for help.</p>
              </section>

              {/* CTA 1 */}
              <div className="p-relative pt-60 pb-80">
                <div className="tm-details-shape-1">
                  <Image src={shape_1} alt="shape" />
                </div>
                <div className="tm-details-shape-2">
                  <Image src={team_shape_2} alt="shape" />
                </div>
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-7">
                      <div className="tm-details-content-wrap z-index-5" style={{ padding: "30px 0" }}>
                        <div className="tm-details-title-box mb-20">
                          <span className="tm-hero-subtitle">Ready to Turn Google Searches Into Service Calls?</span>
                          <h3 className="tm-details-title">Get Started Today</h3>
                        </div>
                        <div className="tm-details-text">
                          <p>Don&apos;t let your competitors win the call. Build a dominant search presence for your electrical firm with Biztalbox.</p>
                        </div>
                        <div className="tm-details-portfolio">
                          <span className="tm-details-social-title">Get in Touch:</span>
                          <a href="tel:+919485699709">+91 9485699709</a>
                          <a href="mailto:info@biztalbox.com">info@biztalbox.com</a>
                        </div>
                      </div>
                    </div>
                    <LeadForm />
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <section className="content-section">
                <h2 className="section-heading">Benefits of Electrician SEO for Business Growth</h2>
                <div className="content-grid-3">
                  <div className="content-card">
                    <h3 className="section-subheading">1. Strong Presence in Local Search Results</h3>
                    <p>One of the main benefits of electrician SEO is standing out locally where it really counts. When people search for electricians in their area, your business shows up at the right time, in the right place.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">2. Higher-Intent Customer Enquiries</h3>
                    <p>Most people searching for an electrician are not exploring options for later. Something is not working, and they want it fixed. Electrician SEO helps your business appear in that moment when the need is instant.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">3. Leads Without Paid Advertising</h3>
                    <p>Once your website gains visibility, it continues to generate calls and enquiries even after a considerable period. This makes SEO services for electricians especially valuable for businesses seeking consistent results.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">4. Credibility Before the First Call</h3>
                    <p>People rarely contact an electrician without doing a quick online check. A clear well-presented website builds confidence before any conversation begins.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">5. Competitive Advantage Locally</h3>
                    <p>In most areas, customers only consider a few options. Being easier to find often means being easier to choose. Electrician SEO helps your business stand out simply by being more visible.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">6. Long-Term Value</h3>
                    <p>Electrician SEO does not deal with quick fixes but creates something durable. As your online presence grows, the results keep getting stronger. One improvement leads to another.</p>
                  </div>
                </div>
              </section>

              {/* Keyword Strategy */}
              <section className="content-section">
                <h2 className="section-heading">Building an Effective Keyword Strategy for Electrician SEO</h2>
                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">Service-based keywords</h3>
                    <p>These searches are direct and practical. Examples include: “fuse box replacement electrician” or “commercial electrical wiring services”. These keywords are usually mapped to core service pages.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">Location-driven intent</h3>
                    <p>Some users know what they need, but their main concern is proximity. Examples: “electrician in South Delhi” or “licensed electrician near me”. These guide how location pages are created.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">Problem-based Keywords</h3>
                    <p>Not everyone starts with &quot;electrician near me.&quot; Some people begin with a question like “burning smell from switchboard” or “no electricity in one room”. These capture early-stage searches.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">Decision-stage keywords</h3>
                    <p>Users are narrowing options. Keywords revolve around reliability and expertise: “best electrician for home wiring” or “reliable electrical contractor”. These establish credibility on key pages.</p>
                  </div>
                </div>
              </section>

              {/* Technical SEO */}
              <section className="content-section">
                <h2 className="section-heading">Technical SEO for Electrician Websites</h2>
                <div className="content-grid-3 mt-30">
                  <div className="content-card">
                    <h3 className="section-subheading">Performance</h3>
                    <p>Electrical services are often searched during urgent situations. A slow website creates friction instantly. Fast loading pages keep users engaged.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">Mobile Ready</h3>
                    <p>Many customers search for electricians on their phones while standing near the problem area. A responsive layout makes the site easy to read and contact anywhere.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">Clear Structure</h3>
                    <p>Logical navigation helps search engines understand how information is organised. Clear service categories and well-linked pages help both crawlers and users find what they need.</p>
                  </div>
                </div>
              </section>

              {/* Local SEO */}
              <section className="content-section content-prose">
                <h2 className="section-heading">Local SEO for Electrician Businesses</h2>
                <p>Location signals are key. A well structured approach to local SEO strengthens presence across maps, directories, and location-based searches.</p>
                <div className="content-grid-2 mt-30">
                  <div className="content-card">
                    <h3 className="section-subheading">Google Business Profile</h3>
                    <p>A complete profile helps search engines connect you to nearby searches like “electrician near me”. Photos and reviews add small but important trust signals.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">Service Area Pages</h3>
                    <p>Creating pages that explain services within specific locations helps build that clarity. It simply makes the geography easier for search engines to understand.</p>
                  </div>
                </div>
              </section>

              {/* Why Choose Biztalbox */}
              <section className="content-section">
                <h2 className="section-heading">Why Choose Biztalbox for Electrician SEO Services?</h2>
                <div className="content-prose">
                  <p>Your business deserves more than generic promises. It deserves an SEO partner who knows the electrician industry and turns searches into real customers.</p>
                </div>
                <div className="content-grid-3 mt-30">
                  <div className="content-card">
                    <h3 className="section-subheading">Focused Industry Experience</h3>
                    <p>We understand how homeowners and businesses search for services like emergency repairs or panel upgrades. Our strategies are built around that behaviour.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">Staying Ahead of Changes</h3>
                    <p>Search is evolving beyond simple keywords. We Pay close attention to these changes and adjust strategies as search evolves into AI-driven responses.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">Search That Converts</h3>
                    <p>Rankings alone don&apos;t grow a business. We focus on high-intent searches that lead to calls and bookings, guiding potential customers toward your services.</p>
                  </div>
                </div>
              </section>

              {/* Final CTA */}
              <div className="p-relative pt-60 pb-80">
                <div className="tm-details-shape-1">
                  <Image src={shape_1} alt="shape" />
                </div>
                <div className="tm-details-shape-2">
                  <Image src={team_shape_2} alt="shape" />
                </div>
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-7">
                      <div className="tm-details-content-wrap z-index-5" style={{ padding: "30px 0" }}>
                        <div className="tm-details-title-box mb-20">
                          <span className="tm-hero-subtitle">Ready to Grow Your Electrical Business?</span>
                          <h3 className="tm-details-title">Get Started Today</h3>
                        </div>
                        <div className="tm-details-text">
                          <p>The next move is yours. Partner with the specialized electrician SEO company that understands your service industry.</p>
                        </div>
                        <div className="tm-details-portfolio">
                          <span className="tm-details-social-title">Get in Touch:</span>
                          <a href="tel:+919485699709">+91 9485699709</a>
                          <a href="mailto:info@biztalbox.com">info@biztalbox.com</a>
                        </div>
                      </div>
                    </div>
                    <LeadForm />
                  </div>
                </div>
              </div>
            </div>

            <div className="tp-overlay-bg black-bg-2" style={{ backgroundImage: "url(/assets/img/home-04/hero/overly.png)" }}>
              <div className="tm-details-wrapper p-relative pt-80 pb-80" style={{ height: "auto" }}>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-10 col-md-10">
                      <div className={`tp-about-4-title-box ${!isMobile ? "tp_fade_bottom" : ""}`}>
                        <h3 className="tp-about-4-title">Our Approach to Electrician SEO</h3>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-xl-3 col-lg-2 col-md-3">
                      <div className="tp-about-4-shape-1">
                        <Image src={shape_2} alt="shape-2" />
                      </div>
                    </div>
                    <div className="col-xl-9 col-lg-10 col-md-9">
                      <div className="tp-about-4-content-wrap">
                        <div className="row">
                          <div className="col-xl-6 col-lg-6">
                            <div className={`tp-about-4-content item-1 ${!isMobile ? "tp_fade_bottom" : ""}`}>
                              <h3 className="text-white">Deep Contextual Understanding</h3>
                              <p>We don&apos;t just chase traffic; we understand why customers search, how they compare services, and what builds trust for a service professional in their home.</p>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div className={`tp-about-4-content item-2 ${!isMobile ? "tp_fade_bottom" : ""}`}>
                              <h3 className="text-white">Revenue-Focused Strategy</h3>
                              <p>We map your services to the exact triggers that lead to service calls. This ensures your visibility converts into actual work on the ground.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
