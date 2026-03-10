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

// Reusable CTA Component
const CTASection = () => (
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
                            <span className="tm-hero-subtitle" style={{ color: "#999", fontSize: "18px" }}>Scale Your Business With Biztalbox</span>
                            <h3 className="tm-details-title" style={{ fontSize: "60px", fontWeight: "700", color: "#fff", marginBottom: "20px" }}>Get Started Today</h3>
                        </div>
                        <div className="tm-details-text mb-40">
                            <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.7)", lineHeight: "1.6" }}>
                                Ready to turn search demand into sustained revenue growth? Our e-commerce SEO experts build systems that outperform competitors and deliver buyers, not just visitors.
                            </p>
                        </div>
                        <div className="tm-details-portfolio">
                            <span className="tm-details-social-title" style={{ display: "block", color: "#fff", marginBottom: "15px", fontWeight: "600" }}>Get in Touch:</span>
                            <div className="d-flex flex-wrap gap-3">
                                <a href="tel:+919485699709" className="tp-btn-white hover-btn" style={{ padding: "12px 25px", borderRadius: "50px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", textDecoration: "none" }}>
                                    +91 9485699709
                                </a>
                                <a href="mailto:info@biztalbox.com" className="tp-btn-white hover-btn" style={{ padding: "12px 25px", borderRadius: "50px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#fff", textTransform: "uppercase", textDecoration: "none" }}>
                                    info@biztalbox.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <LeadForm />
            </div>
        </div>
    </div>
);

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
                                                <div className="tp-hero-4-content p-relative" style={{ marginBottom: "0" }}>
                                                    <h1 className="text-white tp-char-animation">
                                                        Ecommerce SEO Strategy: The Ultimate Guide for Ecommerce Websites
                                                    </h1>
                                                    <p>
                                                        E-commerce is on the rise like never before, opening up exciting avenues for businesses to connect with buyers online. However, this rapid growth has also sparked fierce competition. With countless stores offering similar products, search visibility has become the defining advantage, and SEO is what makes it possible. In this guide, we’ll walk through the fundamentals of e-commerce SEO and why it matters more now than it did a few years ago. We’ll also look at the strategies businesses are using to attract the right visitors, build credibility over time, and grow in a way that actually lasts.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <BookCallForm />

                        {/* Full-width content sections */}
                        <div className="container">
                            {/* Market state section */}
                            <section className="content-section content-prose">
                                <h2 className="section-heading">
                                    Understanding e-commerce: Why SEO Gives You the Edge
                                </h2>
                                <p>
                                    The global e-commerce industry has become one of the most powerful engines of modern commerce.{" "}
                                    <Link
                                        href="https://www.grandviewresearch.com/industry-analysis/e-commerce-market"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary"
                                    >
                                        Valued at approximately USD 25.93 trillion in 2023 and projected to reach USD 83.26 trillion by 2030
                                    </Link>, the sector’s rapid expansion reflects a fundamental shift in how businesses sell and how consumers buy. Growth is no longer driven by novelty, but by behaviour. Digital purchasing has become embedded in everyday decision-making across industries, geographies, and transaction sizes.
                                </p>
                                <p>
                                    Buying online no longer feels like a separate activity. It is simply part of daily life. People value time differently now. Small inconveniences feel larger than they once did. Waiting, searching, navigating cluttered stores. All of it holds less appeal. So when online options offer ease, people lean toward them almost instinctively.
                                </p>
                                <p>
                                    E-commerce is no longer limited to Individual shoppers. Businesses have rapidly adopted digital procurement as well. In 2023, nearly 70 percent of e-commerce activity comes from B2B transactions. Procurement teams research online. Repeat orders have moved to digital systems. Even complex purchases have gradually moved onto screens.
                                </p>
                                <p>
                                    As confidence has increased, so has transaction volume. The e-commerce ecosystem is also being reshaped by intelligent systems that influence both experience and conversion. Chatbots, predictive analytics, and digital assistants now create an essential customer service layer which provides instant assistance, product suggestions and decision support. These tools make online shopping easier, as people now get faster responses and more relevant suggestions than before.
                                </p>
                                <p>
                                    As the market grows more crowded, demand itself is no longer the constraint. The primary obstacle exists in attaining market visibility. Customers evaluate multiple products before making a purchase, which gives brands that appear on top during research an advantage. This change makes discoverability a commercial imperative, reinforcing the role of <Link href="https://biztalbox.com/blog/how-to-do-e-commerce-seo" className="text-primary">e-commerce SEO</Link> in capturing demand, converting customer and sustaining long-term growth.
                                </p>
                            </section>

                            {/* What is e-commerce SEO Section */}
                            <section className="content-section content-prose">
                                <h2 className="section-heading">What Is e-commerce SEO and Why Does Your Online Store Need It?</h2>
                                <p>Let’s start by understanding how SEO works. With endless numbers of webpages out there, search engines such as Google work to provide users with the most meaningful ones. The search engines use the Page Ranking <Link href="https://biztalbox.com/blog/how-to-prepare-for-algorithm-updates" className="text-primary">Algorithm</Link> to analyze and rank web pages based on the quality of content and its visibility. Search Engine Optimization, or SEO, is the process of improving a web page’s chances of appearing on the first page of search results.</p>
                                <p>So, what is e-commerce SEO? Simply put, it’s the process of making your online storefront more visible to search engines like <Link href="https://biztalbox.com/blog/free-google-seo-tools" className="text-primary">Google,</Link> so potential customers looking for your products can easily find you. While conventional SEO typically focuses on blogs, service pages or general information, e-commerce SEO focuses on product pages, category pages and the overall shopping experience.</p>
                                <p>In today’s online shopping world, buyers begin exploring products, comparing prices, and reading reviews long before clicking “Add to Cart.” <Link href="https://biztalbox.com/blog/how-to-do-e-commerce-seo" className="text-primary">e-commerce SEO</Link> determines whether a store appears when shoppers search for products, categories, or solutions online.</p>
                                <p>The e-commerce realm is quite vast as it includes product-based brands, online marketplaces, and specialized digital platforms. In this environment, search visibility is an essential component of discovery. Every product page, category page, and shopping guide acts as a node through which search engines evaluate relevance, trustworthiness, and user experience across a website. <Link href="https://biztalbox.com/blog/best-cms-for-seo" className="text-primary">SEO for e-commerce websites</Link> is essential to optimising this network and reaching customers when they are ready to buy.</p>
                            </section>
                        </div>

                        {/* CTA 1 after Section 2 */}
                        <CTASection />

                        <ServiceThree showIndustry={false} />

                        {/* CTA 2 after Legendary Results (ServiceThree) */}
                        <CTASection />

                        <div className="container">
                            {/* Benefits section */}
                            <section className="content-section">
                                <h2 className="section-heading">What Are the Key Benefits of e-commerce SEO?</h2>
                                <div className="content-grid-2">
                                    <div className="content-card">
                                        <h3 className="section-subheading">1. Improved Visibility and Search Rankings</h3>
                                        <p>Just listing products is not enough in today&apos;s crowded online marketplace. e-commerce SEO services will get your store indexed as well as easily found when people search for things you sell. This creates consistent exposure across search results, helping new customers discover your products while reinforcing familiarity with returning shoppers.</p>
                                    </div>
                                    <div className="content-card">
                                        <h3 className="section-subheading">2. Targeting Shoppers with Purchase Intent</h3>
                                        <p>Not all visitors bring the same value to your store. E-commerce <Link href="https://biztalbox.com/blog/best-seo-tools-for-mac-users" className="text-primary">SEO</Link> services place your products in front of people who are actively searching for what you have to sell, not just those who are browsing. By targeting them at the point-of-intent, your store captures more convertible traffic and every single click matters, drastically increasing your ROI.</p>
                                    </div>
                                    <div className="content-card">
                                        <h3 className="section-subheading">3. Trust, Credibility, and Brand Authority</h3>
                                        <p>This repeated visibility in search results fosters trust in your E-commerce store even before a shopper clicks on the link. An e-commerce SEO service helps establish authority so your brand consistently appears when users research products, signaling reliability and professionalism. This visibility strengthens customer perception of quality.</p>
                                    </div>
                                    <div className="content-card">
                                        <h3 className="section-subheading">4. Long-Term Compounding Value</h3>
                                        <p>SEO is the investment that keeps yielding returns over time. Every page, category and product optimized increases your store authority, building momentum that continues to grow. SEO for e-commerce websites continues to generate results months and even years after the initial work.</p>
                                    </div>
                                    <div className="content-card">
                                        <h3 className="section-subheading">5. Competitive Advantage Against Large Marketplaces</h3>
                                        <p>A few major players, such as Amazon, Walmart and eBay have a stronghold on the online retail market, which makes it difficult for smaller or niche stores to get noticed. SEO e-commerce agencies assist your store in appearing along with these major players in search results, winning clicks based on relevance.</p>
                                    </div>
                                    <div className="content-card">
                                        <h3 className="section-subheading">6. Sustainable Growth Beyond Paid Ads</h3>
                                        <p>SEO services for e-commerce leads to organic traffic that generates an evergreen source of potential buyers. This organic visibility builds over time, strengthening your brand’s recognition. This means your store stays front and centre even when <Link href="https://biztalbox.com/blog/why-my-ppc-ads-get-clicks-but-no-conversions" className="text-primary">paid advertising</Link> is paused.</p>
                                    </div>
                                    <div className="content-card" style={{ gridColumn: isMobile ? "span 1" : "span 2" }}>
                                        <h3 className="section-subheading">7. Repeat Purchases and Customer Retention</h3>
                                        <p>Shoppers return for replenishments, upgrades, or related products. e-commerce SEO packages get your store in front of returning customers whenever they search, and help them find exactly what they want. This consistent brand exposure fosters familiarity and trust, encourages brand advocacy, and helps in converting casual buyers into returning customers.</p>
                                    </div>
                                </div>
                            </section>

                            {/* Strategy Section */}
                            <section className="content-section">
                                <h2 className="section-heading">SEO Strategy for e-commerce: Turning Search Demand into Sales</h2>
                                <div className="content-prose">
                                    <p>An e-commerce <Link href="https://biztalbox.com/blog/types-of-seo-and-why-you-need-an-agency-to-do-it" className="text-primary">SEO strategy</Link> goes beyond merely chasing rankings in a vacuum. It is about optimizing the way people search for your product, aligning their process with the architecture of your store; this makes search and discovery feel effortless, and purchasing intuitive.</p>
                                    <h3 className="section-subheading">a) Keyword Strategy: Structuring Your Store Around Search Intent</h3>
                                    <p>Search terms in e-commerce can be classified by intent, with each type reflecting a different stage of the buying journey. Each mission stage needs its own type of page, tone, and optimisation focus.</p>
                                </div>

                                <div className="content-grid-2 mt-40">
                                    <div className="content-card">
                                        <h4 className="section-subheading">Informational Searches: Learning Before Buying</h4>
                                        <p>Queries like “how to choose the right mattress” indicate curiosity. Informational content like articles and guides allows potential customers to discover what they want while laying the groundwork for future conversions. This is an extra-important part of e-commerce SEO best practices.</p>
                                    </div>
                                    <div className="content-card">
                                        <h4 className="section-subheading">Navigational Searches: Finding a Known Destination</h4>
                                        <p>Users searching for a brand name or specific collection. Ensuring your homepage and branded landing pages dominate these results is a basic but essential e-commerce SEO requirement, because losing navigational traffic often means handing loyal customers to competitors.</p>
                                    </div>
                                    <div className="content-card">
                                        <h4 className="section-subheading">Commercial and Comparison Searches</h4>
                                        <p>Shoppers evaluating options before deciding (e.g., “best” or “top”). Category pages and curated assortments become decision-makers here. e-commerce SEO specialists focus heavily on this stage to determine which products make it into the shopper’s shortlist.</p>
                                    </div>
                                    <div className="content-card">
                                        <h4 className="section-subheading">Transactional Searches in E-commerce</h4>
                                        <p>Searches around pricing, availability, or purchasing actions. At this level, product pages become crucial as they link shoppers ready to buy with relevant products. This is where a focused strategy has the most direct impact on revenue.</p>
                                    </div>
                                    <div className="content-card" style={{ gridColumn: isMobile ? "span 1" : "span 2" }}>
                                        <h4 className="section-subheading">Long-Tail and Specific Searches</h4>
                                        <p>Specific searches based on product details like size, color, or material. A query like “vegan cruelty-free anti-aging serum for sensitive skin” shows a buyer refining choices inside a category, not casually browsing.</p>
                                    </div>
                                </div>

                                <div className="content-prose mt-40">
                                    <h3 className="section-subheading">b) Content Strategy: Guiding Shoppers From Discovery to Purchase</h3>
                                    <p>In e-commerce, <Link href="https://biztalbox.com/blog/what-is-e-e-a-t-vs-e-a-t" className="text-primary">content</Link> is the path that leads a visitor from curiosity to checkout. Top-of-funnel content educates, mid-funnel content builds consideration, and bottom-of-funnel (BoFu) content directly addresses intent with product-focused resources designed to convert.</p>
                                    <p><strong>Include Unique Content on Each Page:</strong> Unique product page content is the basis of successful e-commerce <Link href="https://biztalbox.com/blog/best-seo-chrome-extensions" className="text-primary">SEO.</Link> Using specific product names, short features, and detailed descriptions improves search visibility and builds trust.</p>
                                </div>

                                <div className="content-grid-2 mt-40">
                                    <div className="content-card">
                                        <h3 className="section-subheading">Off-Page SEO: Building Authority Beyond Your Site</h3>
                                        <p>Off-page SEO consists of everything outside your website—quality backlinks, brand mentions, and reviews. For e-commerce, it’s about showing search engines your brand is trustworthy and worth exploring. Seasoned specialists make acquiring links from reputable niche sites a priority.</p>
                                    </div>
                                    <div className="content-card">
                                        <h3 className="section-subheading">Technical SEO: Making Your Store Search-Ready</h3>
                                        <p>Ensuring your store is accessible and offers a seamless experience. This involves <Link href="https://biztalbox.com/blog/seo-for-website-redesign" className="text-primary">site structure</Link>, page speed, and mobile optimization. Without a solid foundation, even the best content will struggle to rank.</p>
                                    </div>
                                </div>
                            </section>

                            {/* Special SEO Section */}
                            <section className="content-section">
                                <h2 className="section-heading">Local and B2B E-Commerce SEO: Driving Discovery</h2>
                                <div className="content-grid-2">
                                    <div className="content-card">
                                        <h3 className="section-subheading">Local e-commerce SEO</h3>
                                        <p>Regional optimization is mandatory as almost half of searches have local intent. Local SEO for ecommerce uses city-specific landing pages and geo-tagged reviews to capture high-intent traffic ready to purchase immediately within specific areas.</p>
                                    </div>
                                    <div className="content-card">
                                        <h3 className="section-subheading">B2B E-Commerce SEO</h3>
                                        <p>B2B buying decisions are deliberate and complex. B2B e-commerce SEO focuses on precision and information reliability through case studies, technical documentation, and long-form product specifications, supporting long buying journeys and evaluation phases.</p>
                                    </div>
                                </div>
                            </section>

                            {/* CTA Section (original) */}
                            <CTASection />

                            {/* Final prose before why biztalbox */}
                            <section className="content-section content-prose text-center">
                                <h2 className="section-heading">Sustainable Growth Through Expert Strategy</h2>
                                <p>Generic SEO brings visitors; we bring buyers. Partner with Biztalbox today for sustained revenue growth!</p>
                            </section>

                        </div>

                        {/* Why Biztalbox - Fixed Style and Overlay */}
                        <div className="tp-overlay-bg black-bg-2" style={{ backgroundImage: "url(/assets/img/home-04/hero/overly.png)" }}>
                            <div className="tm-details-wrapper p-relative pt-80 pb-80" style={{ height: "auto" }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-10 col-md-10">
                                            <div className={`tp-about-4-title-box ${!isMobile ? "tp_fade_bottom" : ""}`}>
                                                <h3 className="tp-about-4-title">Why Choose Biztalbox as Your e-commerce SEO Company</h3>
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
                                                            <h3 className="text-white">An e-commerce SEO Company Built for Sales</h3>
                                                            <p>Biztalbox is a conversion-oriented agency with extensive knowledge of product discovery, pricing psychology, and checkout behaviour. Every decision we make is tied to profitable sales.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-lg-6">
                                                        <div className={`tp-about-4-content item-2 ${!isMobile ? "tp_fade_bottom" : ""}`}>
                                                            <h3 className="text-white">Understands Buyer-Intent Search</h3>
                                                            <p>Our agency structures strategies around commercial intent. We align keywords with purchase readiness, ensuring your store attracts customers who are prepared to buy, not just browse.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mt-30">
                                                    <div className="col-xl-6 col-lg-6">
                                                        <div className={`tp-about-4-content item-1 ${!isMobile ? "tp_fade_bottom" : ""}`}>
                                                            <h3 className="text-white">Strategic Site Architecture for B2B</h3>
                                                            <p>We build scalable structures that support thousands of products without dilution. Clean category hierarchies and internal linking logic are treated as revenue levers.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-lg-6">
                                                        <div className={`tp-about-4-content item-2 ${!isMobile ? "tp_fade_bottom" : ""}`}>
                                                            <h3 className="text-white">Compounding SEO Growth</h3>
                                                            <p>We focus on compounding visibility that grows stronger month after month. This approach reduces dependence on paid ads and build an organic sales asset hard for competitors to replicate.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mt-30">
                                                    <div className="col-xl-6 col-lg-6">
                                                        <div className={`tp-about-4-content item-1 ${!isMobile ? "tp_fade_bottom" : ""}`}>
                                                            <h3 className="text-white">Continuously Optimise Based on Market Demand</h3>
                                                            <p>We track search demand, conversion paths, and category performance. When buyers shift toward new variants or features, your SEO strategy adapts immediately.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 col-lg-6">
                                                        <div className={`tp-about-4-content item-2 ${!isMobile ? "tp_fade_bottom" : ""}`}>
                                                            <h3 className="text-white">Personal e-commerce SEO Consultant</h3>
                                                            <p>We operate as an embedded consultant within your ecosystem, aligning SEO with inventory cycles, launches, and promotions. Our execution adapts as your business evolves.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    <FooterThree />
                </div>
            </div>
        </Wrapper>
    );
}
