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
                            The Ultimate Logistics SEO Guide: Strategies That Drive Traffic and Clients
                          </h1>
                          <p>
                            A logistics company can have strong infrastructure, reliable fleets, and years of operational experience. Yet none of that matters if potential clients never discover the business in the first place. In a market where majority of the research is done online, visibility becomes the key factor. So, let&apos;s discuss the SEO strategies that help logistics companies stay discoverable, the benefits they deliver, and how search visibility can translate into consistent business opportunities.
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
                <h2 className="section-heading">An Overview of the Global Logistics Industry</h2>
                <div className="content-prose">
                  <p>The logistics industry forms the backbone of global commerce, enabling the movement of raw materials, finished goods, and consumer products across supply chains and international markets. As global trade expands and digital commerce accelerates, logistics has evolved far beyond transportation. The sector now operates as a highly interconnected, technology-driven system that supports manufacturing, retail, and e-commerce ecosystems worldwide.</p>
                  <p>In recent years, several structural shifts have significantly reshaped how logistics companies operate. Key forces shaping the logistics industry include:</p>
                  <ul>
                    <li><strong>E-commerce expansion:</strong> The rapid growth of online marketplaces such as Amazon, Flipkart, and Alibaba Group has dramatically increased demand for warehousing, fulfillment centers, and last-mile delivery infrastructure.</li>
                    <li><strong>Supply chain resilience:</strong> Many businesses are now diversifying their suppliers and strengthening inventory management to avoid future disruptions.</li>
                    <li><strong>Technology-driven operations:</strong> Logistics companies are increasingly adopting cloud-based transportation management systems, IoT tracking, and real-time visibility platforms.</li>
                    <li><strong>Sustainability:</strong> Growing environmental concerns are encouraging the adoption of fuel-efficient fleets and eco-friendly packaging solutions.</li>
                  </ul>
                  <p>When businesses look for logistics partners today, they often begin online. They scan service pages, read about capabilities, and compare providers. In fact, sometimes the first encounter with a logistics company could be a search results page. Therefore, good online visibility has become a must-have.</p>
                </div>
              </section>

              {/* What Is Logistics SEO */}
              <section className="content-section content-prose">
                <h2 className="section-heading">What Is Logistics SEO and Why Is It Important for Logistics Companies?</h2>
                <p>Most business decisions today start the same way, with a problem and a search bar. And it is <Link href="https://biztalbox.com/best-seo-agency" className="text-primary">SEO</Link> that decides which businesses appear in such search results. When time-sensitive logistics challenges arise, decision-makers use search to quickly assess available options.</p>
                <p>Logistics industry SEO is the process of ensuring that a logistics business can be found online by the very people who require its services. This is not about driving traffic numbers alone. The business needs to show up when customers search for its transport, freight, warehousing and supply-chain services.</p>
                <p>Logistics SEO takes care of relevance and clarity. A strong strategy clearly explains what you do, where you operate, and who you serve in a manner that both search engines and consumers can comprehend. It encompasses service pages, location-based visibility, and content based on operational reality.</p>
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
                          <span className="tm-hero-subtitle">Ready to Drive More Logistics Leads?</span>
                          <h3 className="tm-details-title">Get Started Today</h3>
                        </div>
                        <div className="tm-details-text">
                          <p>Don&apos;t let your competitors take the lead. Build a dominant search presence for your logistics firm with Biztalbox.</p>
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
                <h2 className="section-heading">Key Benefits of SEO for Logistics Companies</h2>
                <div className="content-grid-3">
                  <div className="content-card">
                    <h3 className="section-subheading">1. Improved Visibility in Operationally Driven Searches</h3>
                    <p>Improved visibility and search rankings make your logistics business easier to find during active evaluation. Buyers comparing multiple providers focus on names that appear consistently across searches.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">2. Stronger Trust and Brand Authority</h3>
                    <p>Sustained organic visibility establishes your business authority. Clearly structured service pages and transparent information provide confidence at an early stage in the decision process.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">3. Long-Term Compounding Visibility</h3>
                    <p>Instead of paying repeatedly for short-lived visibility, logistics businesses invest in a digital base that continues to attract demand over time. SEO becomes a durable growth asset.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">4. Competitive Advantage in Fragmented Market</h3>
                    <p>SEO helps smaller regional businesses appear in search results for specific terms that large corporations might overlook, allowing them to compete based on strengths.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">5. Higher Quality Enquiries</h3>
                    <p>SEO filters demand through intent. Enquiries generated are typically informed and time-sensitive. Sales teams connect with potential customers who already know their needs.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">6. Reduced Dependence on Aggregators</h3>
                    <p>Strong organic visibility shifts the balance away from third-party platforms. By investing in direct demand channels, businesses stabilize lead flow and strengthen profitability.</p>
                  </div>
                </div>
              </section>

              {/* Strategy */}
              <section className="content-section">
                <h2 className="section-heading">A Practical SEO Strategy for Logistics and Supply Chain Businesses</h2>
                <div className="content-grid-2">
                  <div className="content-card">
                    <h3 className="section-subheading">Keyword Strategy: Aligning Intent with Revenue</h3>
                    <p>Logistics searches happen because something needs to move, costs are rising, or a new supplier is needed. We focus on informational keywords (e.g., &quot;freight rates increasing&quot;), commercial keywords (e.g., &quot;top freight forwarding companies&quot;), and high-intent transactional keywords (e.g., &quot;controlled warehouse in New York&quot;).</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">Content Strategy: Generating Inquiries</h3>
                    <p>We build a content journey from Awareness (explaining port congestion) to Consideration (infrastructure/capability on service pages) to Decision (case studies and reviews). This structure builds topical authority and commercial trust simultaneously.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">Technical SEO: Ensuring Performance</h3>
                    <p>Speed, mobile friendliness, and a clean site structure are non-negotiable. If your website loads slowly, decision-makers will leave. We optimize for Core Web Vitals and ensure search engines understand your specializations.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">AI Search Optimization (AIO)</h3>
                    <p>With Google&apos;s AI Overviews and tools like ChatGPT, strong SEO now includes preparing for Generative Search. We write structured, data-driven content that AI systems can easily interpret and cite.</p>
                  </div>
                </div>
              </section>

              {/* Local SEO */}
              <section className="content-section content-prose">
                <h2 className="section-heading">Local SEO as a Competitive Advantage</h2>
                <p>Logistics depends on location. Goods move through specific ports, airports, and warehouses. Buyers search for &quot;warehouse in Rotterdam&quot; or &quot;freight forwarder in Toronto.&quot; Local SEO ensures your business shows up at the right place and time.</p>
                <div className="content-card" style={{ marginTop: "20px" }}>
                  <p>A properly optimized Google Business Profile for each warehouse or regional office strengthens your presence. Dedicated location pages with port access, container space, and nearby industrial area details improve both user trust and search performance.</p>
                </div>
              </section>

              {/* Why Choose Biztalbox */}
              <section className="content-section">
                <h2 className="section-heading">Why Choose Biztalbox as Your Logistics SEO Partner?</h2>
                <div className="content-prose">
                  <p>Logistics is operational and performance-driven. Ranking is only valuable if it brings the right enquiries. Biztalbox approaches this with industry focus and practical execution.</p>
                </div>
                <div className="content-grid-3 mt-30">
                  <div className="content-card">
                    <h3 className="section-subheading">Industry-Focused</h3>
                    <p>We are not a broad marketing firm. We understand freight cycles, trade lanes, warehousing capacity, and transport networks.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">Execution-Led</h3>
                    <p>We prioritize high-intent searches that connect to real shipment demand. We optimize pages around fleet capability and port access.</p>
                  </div>
                  <div className="content-card">
                    <h3 className="section-subheading">Full Transparency</h3>
                    <p>You always know what is being improved and how those results connect to enquiries and revenue. We focus on clarity and accountability.</p>
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
                          <span className="tm-hero-subtitle">Ready to Grow Your Logistics Business?</span>
                          <h3 className="tm-details-title">Let&apos;s Build Direct Revenue</h3>
                        </div>
                        <div className="tm-details-text">
                          <p>The next move is yours. Partner with the specialized logistics SEO company that understands your operations.</p>
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
                        <h3 className="tp-about-4-title">Our Approach to Logistics SEO</h3>
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
                              <h3 className="text-white">Deep Operational Context</h3>
                              <p>We don&apos;t just chase traffic. we understand why procurement teams search, how they compare fleets, and what signals trust in a warehousing partner.</p>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div className={`tp-about-4-content item-2 ${!isMobile ? "tp_fade_bottom" : ""}`}>
                              <h3 className="text-white">Revenue-Focused Keywords</h3>
                              <p>We map your services to the exact commercial triggers that lead to shipments. This ensures your visibility converts into actual business operations.</p>
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
