"use client";
import { gsap } from "gsap";
import React, { useEffect, useState } from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import ServiceThree from "@/components/service/service-three";
import LineTextTwo from "@/components/line-text/line-text-2";
import FooterThree from "@/layouts/footers/footer-three";
import shape from "@/assets/img/home-04/about/about-shape-2.png";
import shape_2 from "@/assets/img/home-04/about/about-shape-1.png";
import hero_star from "@/assets/img/home-04/hero/hero-star.png";
import shape_1 from "@/assets/img/home-01/team/team-details-shape-1.png";
import team_shape_2 from "@/assets/img/home-01/team/team-details-shape-2.png";

// animation
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
    const isMobile = window.innerWidth < 768;
    setIsMobile(isMobile);
  }, []);

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven transparent={true} />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main style={{ overflow: "hidden" }}>
            {/* hero area start */}
            <div className="tp-hero-4-area tp-btn-trigger pt-80 pt-md-0">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-hero-4-content-wrap">
                      <div className="p-relative">
                        <div
                          className="tp-hero-4-content p-relative col-md-11"
                          style={{ marginBottom: "0" }}
                        >
                          <h1 className="text-white tp-char-animation">
                            What Is Real Estate SEO and Why Every Realtor Needs
                            It in 2025
                          </h1>
                          <p>
                            SEO is often considered a technical and complicated
                            task. But in reality, the core idea is remarkably
                            simple. When a prospective buyer starts to search
                            for the ideal house, neighbourhood, or professional
                            online, having an{" "}
                            <Link
                              href="https://biztalbox.com/blog/how-to-do-an-seo-audit"
                              className="text-primary"
                            >
                              SEO
                            </Link>{" "}
                            strategy in place will help guarantee that they find
                            the most relevant business first. It is essentially
                            the alignment of their need with your availability,
                            which is why it has become such a reliable
                            foundation for digital growth.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* hero area end */}

            {/* Book a free callback */}
            <BookCallForm />

            {/* Navigating the Real Estate Market */}
            <div className="p-relative pt-80 pb-80">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tm-details-title-box mb-40">
                      <h2 className="tm-details-title">
                        Navigating the Real Estate Market: Why SEO for Real
                        Estate Matters
                      </h2>
                    </div>
                    <div className="tm-details-text">
                      <p>
                        The global real estate industry is not just a cornerstone
                        of the economy; it&apos;s a colossal powerhouse.{" "}
                        <Link
                          href="https://www.imarcgroup.com/real-estate-market"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary"
                        >
                          Valued at a staggering USD 7,384.14 billion in 2024,
                          it&apos;s set to soar to USD 8,690.66 billion by 2033,
                          growing at an impressive CAGR of 1.81 percent
                        </Link>
                        . North America holds a 33.4 percent share in the
                        market, with strong financial systems, large
                        institutional investment, and high demand for
                        residential, commercial, and mixed use properties
                        driving growth.
                      </p>
                      <p>
                        While the real estate industry is massive, it operates
                        at a slow pace because of long decision cycles and
                        extended transaction timelines. This slow pace is the
                        result of lengthy development cycles, regulatory
                        scrutiny, high capital requirements, and the current
                        economic climate.
                      </p>
                      <p>
                        Infrastructure development and demographic changes are
                        altering where and how people choose to reside and work.
                        At the same time, urbanization continues to fuel housing
                        demand.
                      </p>
                      <p>
                        The shift to remote and hybrid work models has changed
                        spatial needs, sparking newfound interest in flexible
                        types of commercial space, suburban housing, and emerging
                        secondary markets. Meanwhile, E-commerce expansion has
                        made logistics and warehousing more sought after, adding
                        further complexity to buyer and investor behaviour.
                      </p>
                      <p>
                        While discovery patterns differ across residential
                        buyers, commercial tenants, and institutional investors,
                        all segments now begin their evaluation online.
                      </p>
                      <p>
                        What has changed most significantly is not demand, but
                        discovery. Real estate decisions today are preceded by
                        extensive online research. Location, long term value,
                        policy impacts, and developer credibility are all put
                        under a microscope by buyers and investors well before
                        engaging directly.
                      </p>
                      <p>
                        Interest rate cycles, zoning changes, government
                        incentives, and infrastructure announcements now trigger
                        immediate shifts in search behaviour across global
                        markets. Visibility during these moments has an
                        immediate impact on capturing potential customers.
                      </p>
                      <p>
                        As real estate becomes increasingly research driven,
                        online presence is no longer a marketing add-on but
                        foundational. Search engines now function as the primary
                        evaluation layer where buyers validate claims, compare
                        alternatives, and shortlist opportunities. As a result,
                        search visibility and precision are more important than
                        ever in order to scale long-term. And this is made
                        possible through real estate SEO.
                      </p>
                      <p>
                        In order to understand how real estate businesses can
                        navigate this transformation, we need to dig into the
                        intricacies of real estate-specific SEO, understand how
                        it differs from conventional{" "}
                        <Link
                          href="https://biztalbox.com/blog/digital-marketing-facts"
                          className="text-primary"
                        >
                          digital marketing
                        </Link>
                        , and how it aligns with the way modern buyers discover
                        property in a global market.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What Is Real Estate SEO */}
            <div className="p-relative pt-80 pb-80">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tm-details-title-box mb-40">
                      <h2 className="tm-details-title">
                        What Is Real Estate SEO and How It Can Transform Your
                        Real Estate Marketing?
                      </h2>
                    </div>
                    <div className="tm-details-text">
                      <p>
                        In today&apos;s market, buyers and sellers begin
                        evaluating neighbourhoods, property types, and pricing
                        trends online long before contacting an agent. It is
                        extremely important to be noticed at these moments as it
                        significantly impacts your growth, relevance, and trust.
                      </p>
                      <p>
                        Real estate{" "}
                        <Link
                          href="https://biztalbox.com/blog/what-is-visual-search-seo"
                          className="text-primary"
                        >
                          SEO
                        </Link>{" "}
                        ensures your expertise is discoverable at the exact
                        moment prospects are searching. Unlike generic marketing,
                        it focuses on the path users take: from researching
                        schools and commute times to comparing investment
                        opportunities. A thoughtful real estate SEO strategy
                        maps these journeys with neighbourhood pages,
                        property-type clusters, local signals, and high-value
                        content.
                      </p>
                      <p>
                        At its core, SEO for real estate positions your
                        knowledge as a reliable guide. Each optimised page or
                        guide becomes a touchpoint that builds authority before a
                        prospect reaches out.
                      </p>
                      <p>
                        Strong real estate SEO marketing amplifies this
                        visibility, while practical real estate SEO tips, such
                        as maintaining updated local content, turn a website into
                        a consistent lead generator. When executed well, your
                        digital presence becomes the most visible and trusted
                        address in your market. It increases visibility,
                        reinforces credibility, and sets an evergreen competitive
                        advantage, one that compounds with every search query.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-relative pt-80">
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
                          Build Your Real Estate Success Story with Biztalbox
                        </span>
                        <h4 className="tm-details-title">Get Started Today</h4>
                      </div>
                      <div className="tm-details-text">
                        <p>
                          If you&apos;re ready to strengthen your digital
                          footprint and attract qualified buyers and sellers,
                          Biztalbox is your trusted partner. Our real estate SEO
                          experts deliver strategies that not only rank — they
                          perform, engage, and grow your business for the long
                          run.
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

            <div
              className="tp-overlay-bg black-bg-2"
              style={{
                backgroundImage: "url(/assets/img/home-04/hero/overly.png)",
              }}
            >
              {/* What Realtors Gain */}
              <div
                className="tm-details-wrapper p-relative pt-0 pb-80"
                style={{ height: "auto" }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="service-details__left-wrap">
                        <div className="tm-details-title-box mb-20">
                          <h3 className="text-white">
                            What Realtors Gain from a Well-Built Real Estate SEO
                            Ecosystem
                          </h3>
                          <h2 className="tm-details-title">Real Estate SEO</h2>
                        </div>
                        <div className="tm-details-text mb-30">
                          <p>
                            A strategic real estate SEO approach delivers
                            multiple benefits that compound over time, creating
                            sustainable growth and competitive advantage in the
                            market.
                          </p>
                        </div>
                        <div className="service-details__fea-list row">
                          <div className="col-xl-6 col-lg-6">
                            <ul>
                              <li>
                                <strong>
                                  Consistent Lead Flow with Real Estate SEO
                                  Strategy
                                </strong>{" "}
                                - The search journey for property has become
                                longer and more cautious. People compare
                                locations, amenities, builder profiles,
                                valuations, and financing options for weeks
                                before speaking to anyone. A strategic real
                                estate SEO strategy places your guidance
                                throughout that journey, which leads to a regular
                                stream of enquiries. It creates demand that feels
                                natural, steady, and easier to convert.
                              </li>
                              <li>
                                <strong>
                                  Stronger Seller Perception with Effective SEO
                                  for Real Estate
                                </strong>{" "}
                                - Sellers tend to choose agents who appear
                                consistently across multiple searches. Visibility
                                signals competence. When your market updates,
                                neighbourhood guides, and service pages appear
                                throughout local results, homeowners
                                instinctively view you as someone who understands
                                their area—exactly what effective{" "}
                                <Link
                                  href="https://biztalbox.com/blog/free-google-seo-tools"
                                  className="text-primary"
                                >
                                  SEO
                                </Link>{" "}
                                for real estate agents is designed to achieve.
                                This strengthens your position during listing
                                conversations and reduces the need to prove your
                                credibility from scratch.
                              </li>
                              <li>
                                <strong>
                                  Higher Listing Conversions With Real Estate
                                  SEO Marketing
                                </strong>{" "}
                                - A polished{" "}
                                <Link
                                  href="https://biztalbox.com/blog/white-hat-seo-vs-black-hat-seo-vs-grey-hat-seo"
                                  className="text-primary"
                                >
                                  SEO
                                </Link>{" "}
                                ecosystem showcases your expertise before you
                                even come in contact with the client. A seller
                                who fills out your contact form has already done
                                enough homework to believe you understand their
                                property type and the local real estate scene.
                                This pre-selling effect reduces resistance and
                                increases the likelihood of securing the listing
                                without excessive negotiation.
                              </li>
                            </ul>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <ul>
                              <li>
                                <strong>
                                  Long-Term Compounding Visibility With SEO for
                                  Real Estate Agents
                                </strong>{" "}
                                - A well organized real estate{" "}
                                <Link
                                  href="https://biztalbox.com/blog/top-wordpress-seo-tools"
                                  className="text-primary"
                                >
                                  SEO
                                </Link>{" "}
                                ecosystem builds visibility that grows over time.
                                Every neighbourhood guide, market explainer and
                                community-oriented article is an evergreen asset
                                that continues to attract new visitors long
                                after it is published. As these pieces
                                accumulate, your presence in search results
                                expands and deepens across a wide range of
                                intent-driven queries. This compounded effect
                                supports consistent discovery, even when the
                                broader market slows or competition becomes
                                intense.
                              </li>
                              <li>
                                <strong>
                                  Stable Cost of Acquisition Through Real Estate
                                  SEO Strategy
                                </strong>{" "}
                                - Paid advertising in real estate tends to
                                fluctuate widely due to competition, seasonal
                                demand, and rising bid costs. A good real estate
                                SEO strategy serves as a buffer against these
                                fluctuations by generating a steady flow of
                                organic leads that are not influenced by paid
                                campaigns. As a result, your cost per lead
                                becomes more predictable and your business
                                acquires the stability to grow with confidence
                                even in situations of high competition.
                              </li>
                              <li>
                                <strong>
                                  Brand Authority and Credibility for Real
                                  Estate Businesses
                                </strong>{" "}
                                - People trust the professionals who explain the
                                market with clarity. When your digital presence
                                answers the questions they carry into their
                                property search, your brand becomes a natural
                                reference point. Authority grows through
                                familiarity, and{" "}
                                <Link
                                  href="https://biztalbox.com/blog/best-seo-chrome-extensions"
                                  className="text-primary"
                                >
                                  SEO
                                </Link>{" "}
                                accelerates that familiarity at scale.
                              </li>
                              <li>
                                <strong>
                                  Standing Out in Competitive Real Estate
                                  Markets
                                </strong>{" "}
                                - Most real estate companies still depend
                                heavily on{" "}
                                <Link
                                  href="https://biztalbox.com/blog/what-is-ad-fatigue"
                                  className="text-primary"
                                >
                                  ads
                                </Link>{" "}
                                or old referral networks. Buyers, however, have
                                shifted to research-driven behaviour. A
                                well-built SEO foundation, guided by a seasoned
                                real estate SEO expert, allows you to occupy the
                                digital space they rely on. Even in crowded
                                cities, this advantage is noticeable. It shapes
                                perception and increases the likelihood that
                                someone chooses your expertise over another
                                agent&apos;s promise.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Real Estate Businesses Need SEO in 2026 */}
              <div className="p-relative pt-80 pb-80">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tm-details-title-box mb-40">
                        <h2 className="tm-details-title">
                          Why Real Estate Businesses Need SEO in 2026
                        </h2>
                      </div>
                      <div className="tm-details-text">
                        <p>
                          Property decisions begin with information, and today
                          that information is almost entirely found online. In
                          2026, buyers and sellers are inundated with a
                          seemingly infinite variety of options, information and
                          noise.
                        </p>
                        <p>
                          They want accurate answers, reliable advice and clarity
                          about neighbourhoods, prices, schools and where to get
                          the best return on investment, before they ever talk to
                          an agent. At the same time, new technologies and
                          worldwide trends are changing how people search for
                          information.
                        </p>
                        <p>
                          A strong real estate SEO presence makes sure your
                          ideas are seen at these critical early stages, building
                          trust, boosting visibility and all while supporting
                          sustainable business growth.
                        </p>
                        <h4 className="mt-30 mb-20 text-white">
                          1. How AI Influences Real Estate Searches
                        </h4>
                        <p>
                          In 2026, buyers do more than scroll search results.
                          They ask questions, compare options, and expect
                          immediate insights.{" "}
                          <Link
                            href="https://biztalbox.com/blog/winning-googles-ai-mode-in-2025-what-smart-brands-are-actually-doing"
                            className="text-primary"
                          >
                            AI
                          </Link>{" "}
                          now highlights property recommendations, summarises
                          price trends, maps neighbourhood amenities, and
                          suggests suitable home types before anyone clicks a
                          link.
                        </p>
                        <p>
                          For agents,{" "}
                          <Link
                            href="https://biztalbox.com/blog/future-of-ai-marketing-automation"
                            className="text-primary"
                          >
                            visibility on these AI-generated formats is vital
                          </Link>
                          . A well-executed real estate SEO strategy makes sure
                          the market guides, real estate analyses, and local
                          insights are visible in these{" "}
                          <Link
                            href="https://biztalbox.com/blog/how-to-do-keyword-research-for-seo"
                            className="text-primary"
                          >
                            AI-driven formats such as featured snippets, digital
                            assistants, and interactive search tools
                          </Link>
                          .
                        </p>
                        <p>
                          Agents who optimise for this early stage influence
                          first impressions, garner trust, and establish
                          visibility long before a buyer reaches out.
                        </p>
                        <h4 className="mt-30 mb-20 text-white">
                          2. Real Estate Buyers Conduct Extensive Online
                          Research
                        </h4>
                        <p>
                          Most property journeys start independently. Buyers spend
                          weeks, in some cases months, doing research on
                          neighbourhoods, pricing trends, commute times or
                          lifestyle factors before reaching out.
                        </p>
                        <p>
                          High-quality seo for real estate websites positions
                          your content where these searches happen, giving buyers
                          the information they need and establishing your
                          authority before you ever speak to them. When you
                          appear consistently during this research phase, you
                          become the reliable guide in a saturated digital
                          market.
                        </p>
                        <h4 className="mt-30 mb-20 text-white">
                          3. Real Estate Portals Dominate, but Opportunities
                          Remain
                        </h4>
                        <p>
                          Large property portals occupy much of the top search
                          visibility, especially for broad property searches.
                          This makes competition fierce, but there is an
                          opportunity. With a targeted real estate SEO marketing
                          strategy, agents can regain their visibility in those
                          areas where portals underperform: hyperlocal insights,
                          advisory content, niche property types, and
                          community-focused guides.
                        </p>
                        <p>
                          These are the searches where buyers look for expertise,
                          not just listings, giving agents a competitive edge.
                        </p>
                        <h4 className="mt-30 mb-20 text-white">
                          4. Search Intent Is Fragmented and Micro-Targeted
                        </h4>
                        <p>
                          All Buyers don&apos;t take the same route. Families are
                          concerned with schools and safety, investors examine
                          rental yields, luxury buyers compare lifestyle benefits,
                          and first-time buyers study financing options. Each
                          pathway creates hundreds of micro-intent queries.
                        </p>
                        <p>
                          When you implement SEO for real estate, your content
                          becomes comprehensive enough to answer the needs of all
                          types of searchers and attract attention in the many
                          ways people look for real estate information. This also
                          strengthens your authority and relevance in the eyes of
                          search engines.
                        </p>
                        <h4 className="mt-30 mb-20 text-white">
                          5. Cross-Border Real Estate Buying Remains Strong
                        </h4>
                        <p>
                          International buyers increasingly rely on online research
                          because they cannot physically visit every market. They
                          go through local guides, market explainers, and
                          regulatory overviews in order to get all the necessary
                          information before taking their decisions.
                        </p>
                        <p>
                          A good real estate SEO strategy makes sure your content
                          is accessible to these global audiences, tapping into
                          global investment flows, digital-first buyers, and
                          remote investors. This expands your reach far beyond
                          local advertising channels.
                        </p>
                        <h4 className="mt-30 mb-20 text-white">
                          6. Trust and Credibility Are More Critical Than Ever
                          in the Real Estate Industry
                        </h4>
                        <p>
                          There is a great deal of misinformation, fake listings
                          and low-quality content online. Real estate SEO strategy
                          helps establish authority by delivering consistent,
                          accurate, and useful content. When your guidance is
                          visible early in the research process, you become a
                          reliable advisor, which drives conversions and
                          long-term client relationships.
                        </p>
                        <p>
                          2026 rewards those who anticipate change. Buyers and
                          investors are smarter, search behaviour is fragmented,
                          AI guides decisions, and global interest grows. A
                          comprehensive seo for real estate approach ensures your
                          expertise is visible when it matters most, builds
                          trust, and drives sustainable business growth—even as
                          competition and market complexity increase.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key SEO Strategies */}
              <div className="tp-about-4-area pt-100 pb-110 p-relative">
                <div className="tp-about-4-shape-2">
                  <Image className="tp-zoom-in-out" src={shape} alt="shape" />
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-xl-10 col-md-10">
                      <div
                        className={`tp-about-4-title-box ${
                          !isMobile ? "tp_fade_bottom" : ""
                        }`}
                      >
                        <h4 className="tp-about-4-title">
                          What Real Estate SEO Strategies Do Real Estate SEO
                          Consultants and Agencies Use to Deliver Sustainable
                          Growth?
                        </h4>
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
                          <div className="col-xl-12">
                            <div
                              className={`tp-about-4-content item-1 ${
                                !isMobile ? "tp_fade_bottom" : ""
                              }`}
                            >
                              <h4 className="text-white mb-20">
                                Content Strategy for Real Estate SEO
                              </h4>
                              <p>
                                It goes without saying that good content is the
                                foundation of any real estate SEO strategy. It
                                not only educates, but also places your brand in
                                front of shoppers at every point in their journey
                                – building trust and driving leads. A strong seo
                                strategy for real estate ensures your expertise
                                is visible, your guidance is actionable, and your
                                website becomes a reliable resource that
                                influences decisions.
                              </p>
                              <h5 className="text-white mt-30 mb-15">
                                Goals of a Real Estate Content Strategy
                              </h5>
                              <p>
                                A strong content strategy serves several key
                                purposes for agents and agencies:
                              </p>
                              <ul className="mt-20">
                                <li>
                                  It increases visibility in your local and
                                  target market network
                                </li>
                                <li>
                                  Generate leads by matching content with
                                  searchers&apos; queries
                                </li>
                                <li>Long-term visibility in organic search</li>
                                <li>
                                  Address both rational and emotional buyer
                                  concerns
                                </li>
                                <li>
                                  Support the broader SEO marketing efforts
                                  including{" "}
                                  <Link
                                    href="https://biztalbox.com/blog/how-to-do-keyword-research-for-seo"
                                    className="text-primary"
                                  >
                                    keyword targeting
                                  </Link>
                                  , technical on-page and off-page optimisation
                                </li>
                              </ul>
                              <h5 className="text-white mt-30 mb-15">
                                The Real Estate Buyer Funnel: Guiding Searches
                                at Every Stage
                              </h5>
                              <p>
                                Property buyers don&apos;t make decisions
                                randomly. Their journey follows a predictable
                                path, often called the buyer funnel, moving from
                                broad exploration to comparison and finally to
                                action.
                              </p>
                              <p>
                                Let&apos;s break down what these stages are and
                                how a targeted SEO for real estate strategy
                                ensures your content reaches buyers at exactly
                                the right moment.
                              </p>
                              <p>
                                <strong>Funnel Stages of Real Estate and How
                                Content Works</strong>
                              </p>
                              <p>
                                <strong>Awareness:</strong> This stage is when
                                potential buyers first begin their home search
                                and research about broad real estate queries.{" "}
                                <Link
                                  href="https://biztalbox.com/blog/outdated-content"
                                  className="text-primary"
                                >
                                  Content
                                </Link>{" "}
                                in this stage includes anything from local guides
                                and lifestyle reviews to comprehensive articles
                                about market trends. It keeps your brand front
                                and centre while building trust and demonstrating
                                expertise. Examples: &quot;Cost of living in
                                London vs New York,&quot; and &quot;Is it
                                expensive to live in Dubai?&quot;
                              </p>
                              <p>
                                <strong>Consideration:</strong> potential buyers
                                now narrow down their options by comparing
                                different projects, builders, or property types.
                                Detailed property guides, project comparisons and
                                advisory go a long way in assisting users to make
                                an informed choice. Examples: &quot;Manhattan vs
                                Brooklyn apartments which is better,&quot; and
                                &quot;Condo vs townhouse in Toronto&quot;
                              </p>
                              <p>
                                <strong>Decision:</strong> Buyers are now ready
                                to make a move and need concrete advice.
                                Well-formatted listings, service pages and buying
                                guides ensure your brand is present when people
                                are making important decisions and deciding who
                                to contact. Examples: &quot;2 bedroom apartment
                                for sale in Manhattan&quot;, &quot;Condo for
                                sale near Downtown Toronto&quot; and &quot;Luxury
                                villa for sale in Palm Jumeirah&quot;
                              </p>
                              <p>
                                All of these phases represent real-world buyer
                                behaviour, and a carefully planned real estate{" "}
                                <Link
                                  href="https://biztalbox.com/blog/best-seo-tools-for-mac-users"
                                  className="text-primary"
                                >
                                  SEO
                                </Link>{" "}
                                strategy is what ensures your content addresses
                                the questions they ask, the concerns they weigh,
                                and the signals that guide their trust. By doing
                                so, agents can position themselves as
                                authorities, capture intent-driven traffic, and
                                convert online interest into tangible enquiries.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-30">
                          <div className="col-xl-6 col-lg-6">
                            <div
                              className={`tp-about-4-content item-1 ${
                                !isMobile ? "tp_fade_bottom" : ""
                              }`}
                            >
                              <h4 className="text-white">
                                E-E-A-T: How Expertise Drives Real Estate
                                Visibility
                              </h4>
                              <p>
                                Google no longer ranks content purely on keywords
                                or backlinks. Today, it prioritizes pages that
                                demonstrate Expertise, Authority, and
                                Trustworthiness{" "}
                                <Link
                                  href="https://biztalbox.com/blog/what-is-e-e-a-t-vs-e-a-t"
                                  className="text-primary"
                                >
                                  (E-E-A-T)
                                </Link>
                                .
                              </p>
                              <p>
                                This is especially important in the real estate
                                space. Investors considering investments in
                                properties worth lakhs or crores and sellers who
                                want to list high-value apartments or villas
                                need reliable guidance. Good real estate SEO
                                agencies ensures your content:
                              </p>
                              <ul className="mt-20">
                                <li>
                                  Shows genuine market knowledge with extensive
                                  neighbourhood breakdowns, builder insights and
                                  pricing trends
                                </li>
                                <li>
                                  Gives the most straightforward, hands-on advice
                                  on types of property, legal paperwork and
                                  finance options
                                </li>
                                <li>
                                  Builds authority in specific micro-markets or
                                  localities, e.g., waterfront condominiums in
                                  Miami, and suburban family homes in London
                                </li>
                              </ul>
                              <p>
                                Content that satisfies E-E-A-T signals proves to
                                search engines that your site can be trusted. It
                                also inspires confidence in buyers and sellers,
                                making you the go-to real estate expert.
                              </p>
                              <h4 className="text-white mt-30">
                                YMYL and Real Estate SEO: Building Trust Where
                                It Matters Most
                              </h4>
                              <p>
                                There&apos;s a lot on the line when it comes to
                                transactions involving real estate. Every
                                property decision has significant financial
                                commitment, legal obligations and long term
                                commitments. That&apos;s why Google treats
                                property content as{" "}
                                <Link
                                  href="https://www.semrush.com/blog/ymyl/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary"
                                >
                                  YMYL — &quot;Your Money or Your Life&quot;
                                </Link>
                                . Buyers and sellers need accurate info they can
                                count on, and search engines, like Google,
                                reward content that delivers this trust.
                              </p>
                              <p>
                                A strong real estate SEO strategy ensures your
                                website meets these expectations:
                              </p>
                              <ul className="mt-20">
                                <li>
                                  <strong>Accuracy and Expertise:</strong>{" "}
                                  Provide accurate data about market trends,
                                  builder profiles and pricing statistics, which
                                  clearly demonstrates strong familiarity with
                                  neighbourhood and product styles
                                </li>
                                <li>
                                  <strong>Transparency and Authority:</strong>{" "}
                                  Clearly explain financing options, legal
                                  procedures, and fees so users feel confident in
                                  their decisions
                                </li>
                                <li>
                                  <strong>Trustworthiness:</strong> Avoid
                                  speculation, duplicate listings, and
                                  don&apos;t deceive. Every page you add on your
                                  site should only serve to contribute to your
                                  trustworthiness
                                </li>
                              </ul>
                              <p>
                                For agents, adhering to YMYL is not just about
                                ranking higher. It signals professionalism to
                                prospective buyers researching apartments,
                                villas, or investment opportunities. Combining
                                SEO for real estate websites with YMYL principles
                                ensures your content reaches the right audience
                                while positioning your brand as a trusted
                                advisor, converting online interest into genuine
                                enquiries.
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div
                              className={`tp-about-4-content item-2 ${
                                !isMobile ? "tp_fade_bottom" : ""
                              }`}
                            >
                              <h4 className="text-white">
                                Keyword Strategy for a High-Impact Real Estate
                                SEO Strategy
                              </h4>
                              <p>
                                <Link
                                  href="https://biztalbox.com/blog/google-search-console-keyword-research"
                                  className="text-primary"
                                >
                                  Keywords
                                </Link>{" "}
                                are simply the language homebuyers use when
                                searching online, but in real estate, this
                                language is far more layered than in any other
                                industry. Every search encapsulates a combination
                                of motive, immediacy, financial ability,
                                micro-location and trust in the builder.
                              </p>
                              <p>
                                A strong real estate SEO foundation starts with
                                an understanding of these patterns, creating
                                value that matches how people actually search,
                                rather than how marketers assume they do. This
                                is what separates average websites from those
                                that dominate local SERPs through smarter real
                                estate SEO strategies and expert execution by a
                                skilled real estate SEO consultant.
                              </p>
                              <h5 className="text-white mt-30 mb-15">
                                The Core Keyword Types That Drive Real Estate
                                Search Behaviour
                              </h5>
                              <p>
                                Below is a clear, human explanation of the{" "}
                                <Link
                                  href="https://biztalbox.com/blog/how-many-types-of-keywords"
                                  className="text-primary"
                                >
                                  keyword types
                                </Link>{" "}
                                — concise, industry-specific, and directly tied
                                to actual buyer behavior. These examples
                                represent only a small part of what goes into a
                                comprehensive real estate keyword strategy:
                              </p>
                              <p>
                                <strong>Micro-Market Keywords</strong> - Buyers
                                search hyper-locally: &quot;Miami waterfront
                                property price trends,&quot; or &quot;2 BHK
                                Flats in Dubai.&quot; These long-tail keywords
                                convert exceptionally well because buyers
                                already know where they want to live.
                              </p>
                              <p>
                                <strong>Builder & Project Keywords</strong> -
                                Trust is everything. People search: &quot;Emaar
                                residential projects in Dubai&quot; or
                                &quot;Prestige new launch&quot; These are
                                high-intent keywords no serious strategy can
                                ignore.
                              </p>
                              <p>
                                <strong>Property Configuration Keywords</strong>{" "}
                                - Searchers often filter by layout and category:
                                &quot;3 BHK sea-facing apartments,&quot;
                                &quot;studio flats for investment,&quot;
                                &quot;luxury villas under 3 crore.&quot;
                              </p>
                              <p>
                                <strong>Lifestyle & Amenity Keywords</strong> -
                                Real needs drive real traffic: &quot;Pet-friendly
                                apartments,&quot; &quot;gated community with
                                amenities,&quot; &quot;homes near international
                                schools.&quot;
                              </p>
                              <p>
                                <strong>Investment & Market Trend Keywords</strong>{" "}
                                - Search behaviour is also heavily affected by
                                market fluctuations. Examples include &quot;Best
                                time to invest,&quot; &quot;high rental yield
                                areas,&quot; &quot;pre-launch offers in
                                Mumbai.&quot; These trend based{" "}
                                <Link
                                  href="https://biztalbox.com/blog/keyword-stuffing-in-seo"
                                  className="text-primary"
                                >
                                  keywords
                                </Link>{" "}
                                require constant monitoring, a task best handled
                                by data-driven real estate SEO agencies.
                              </p>
                              <p>
                                <strong>
                                  Why the Right Keyword Strategy is Critical for
                                  Real Estate SEO Success Matters
                                </strong>
                              </p>
                              <p>
                                When your{" "}
                                <Link
                                  href="https://biztalbox.com/blog/keyword-clustering"
                                  className="text-primary"
                                >
                                  keyword clusters
                                </Link>{" "}
                                match real buyer psychology, your content becomes
                                easy to discover, trustworthy and more relevant to
                                the immediate questions people are asking. This
                                is where the best real estate SEO tips translate
                                into measurable ranking wins and higher-quality
                                enquiries. The stronger your keyword foundation,
                                the faster your SEO compounds,{" "}
                                <Link
                                  href="https://biztalbox.com/blog/seo-for-website-redesign"
                                  className="text-primary"
                                >
                                  turning your website into a long-term lead
                                  engine
                                </Link>
                                , not a digital brochure.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-30">
                          <div className="col-xl-6 col-lg-6">
                            <div
                              className={`tp-about-4-content item-1 ${
                                !isMobile ? "tp_fade_bottom" : ""
                              }`}
                            >
                              <h4 className="text-white">
                                Off-Page SEO: Building Authority Beyond Your Real
                                Estate Website
                              </h4>
                              <p>
                                Off-page SEO builds your website authority by
                                creating signals that tell Google you&apos;re a
                                trustworthy real estate company. In this
                                industry, authority comes from quality backlinks,
                                local citations, PR coverage, and consistent
                                brand mentions on reliable platforms. These
                                factors support every real estate SEO strategy
                                and help your pages rank against competitive
                                portals and broker websites.
                              </p>
                              <p>
                                For the real estate sector, good off-page
                                strategies consist of earning backlinks from real
                                estate publications, local news sites,
                                builder-related websites, micro-market
                                directories, and community-based forums.
                              </p>
                              <p>
                                When these mentions align with your geography
                                and property category, they boost E-E-A-T,
                                reinforce your real estate SEO strategies, and
                                drive higher-intent traffic that converts.
                              </p>
                              <h4 className="text-white mt-30">
                                Technical SEO: Making Your Real Estate Website
                                Fast, Clear, and Search-Friendly
                              </h4>
                              <p>
                                Through technical SEO, your page runs smoothly
                                and is easily understood by search engine
                                crawlers. There&apos;s no use in even having a
                                fancy real estate SEO strategy if the pages take
                                forever to load, don&apos;t work well on mobile,
                                or run into indexing issues. Proper technical
                                optimisation helps property listings, location
                                guides, and service pages get discovered and
                                ranked correctly. For real estate websites, that
                                means: fast loading images, clean, descriptive
                                URLs, structured data for listings, strong Core
                                Web Vitals and perfect internal linking.
                              </p>
                              <p>
                                Experienced real estate SEO companies and
                                consultants work to develop a high quality
                                digital experience on your site with easy
                                navigation, enhanced metadata, clear content and
                                an integrated user journey that encourages better
                                ranking performance and more inquiries.
                              </p>
                              <p>
                                A strong technical foundation allows every other
                                part of your real estate SEO strategy, from
                                content to keywords, to perform at its best,
                                boosting both visibility and the quality of leads.
                              </p>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6">
                            <div
                              className={`tp-about-4-content item-2 ${
                                !isMobile ? "tp_fade_bottom" : ""
                              }`}
                            >
                              <h4 className="text-white">
                                Local SEO for Real Estate: Connecting with
                                Buyers Where It Matters
                              </h4>
                              <p>
                                Real estate decisions are rooted in geography,
                                which is what makes local SEO for real estate
                                extremely powerful. Buyers do not just search for
                                &quot;apartments&quot; in a vacuum; they search
                                within particular micro-markets, school
                                districts, commute paths and lifestyle clusters.
                                That means your visibility must be hyper-local
                                and aligned with how people genuinely explore
                                neighborhoods online.
                              </p>
                              <p>
                                The following statistics highlight why local
                                search is crucial for real estate businesses:
                              </p>
                              <ul className="mt-20">
                                <li>
                                  Business directories make up 37% of organic
                                  search results for informational local intent
                                  keywords (BrightLocal)
                                </li>
                                <li>
                                  76% of consumers who search for &quot;near
                                  me&quot; visit a business within a day (Google)
                                </li>
                                <li>
                                  46% of Google searches have local intent
                                  (Search Engine Roundtable)
                                </li>
                              </ul>
                              <p>
                                A strong local presence ensures your listings,
                                area guides, and service pages show up the moment
                                someone searches for location-led intent such as
                                &quot;waterfront condos in Miami,&quot;
                                &quot;townhouses near London business
                                districts,&quot; or &quot;family-friendly
                                suburbs in Sydney.&quot;
                              </p>
                              <p>
                                Real estate SEO companies and consultants
                                optimize Google Business Profiles, citations, and
                                reviews so that you appear not only in search
                                results but also in map packs, knowledge panels,
                                and discovery surfaces that influence buyer
                                trust. Local SEO is extremely important in a real
                                estate SEO strategy because of how fiercely
                                competitive each micro-market is.
                              </p>
                              <p>
                                Search engines evaluate signals like proximity,
                                relevance, authority, and consistency.
                                Experienced real estate{" "}
                                <Link
                                  href="https://biztalbox.com/blog/top-rated-seo-company-for-u-s-brands-what-sets-biztalbox-apart"
                                  className="text-primary"
                                >
                                  SEO services
                                </Link>{" "}
                                utilize these signals and concentrate on
                                localized content, metadata, structured data,
                                and internal links. This ensures your brand
                                becomes the definitive source for specific
                                neighborhoods and property types.
                              </p>
                              <p>
                                With the right approach, local SEO does more than
                                increase rankings. It builds long-term trust; it
                                establishes you as a local expert and sends
                                high-intent buyers/sellers to your pages exactly
                                when they&apos;re ready to engage. This is how
                                strong local optimisation transforms organic
                                searches into qualified enquiries and measurable
                                closings.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-relative pt-80">
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
                          Ready to Scale Your Real Estate Business?
                        </span>
                        <h4 className="tm-details-title">Get Started Today</h4>
                      </div>
                      <div className="tm-details-text">
                        <p>
                          Your customers are searching — make sure they find you
                          first. Partner with Biztalbox, the real estate SEO
                          experts that agents, brokers, and real estate
                          businesses trust, and start driving real results.
                          Contact us today for a free consultation.
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

            {/* service area start */}
            <ServiceThree showIndustry={false} />

            {/* Why Choose BiztalBox */}
            <LineTextTwo title="Why Choose BiztalBox" />
            <div className="tp-about-4-area pt-100 pb-110 p-relative">
              <div className="tp-about-4-shape-2">
                <Image className="tp-zoom-in-out" src={shape} alt="shape" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-10 col-md-10">
                    <div
                      className={`tp-about-4-title-box ${
                        !isMobile ? "tp_fade_bottom" : ""
                      }`}
                    >
                      <h3 className="tp-about-4-title">
                        Why Choosing Professional Real Estate SEO Services
                        Matters for Your Growth
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-2 col-md-2">
                    <div className="tp-about-4-shape-1">
                      <Image src={shape_2} alt="shape-2" />
                    </div>
                  </div>
                  <div className="col-xl-10 col-lg-10 col-md-10">
                    <div className="tp-about-4-content-wrap">
                      <div className="row">
                        <div className="col-xl-12">
                          <div
                            className={`tp-about-4-content item-1 ${
                              !isMobile ? "tp_fade_bottom" : ""
                            }`}
                          >
                            <p>
                              Most SEO companies treat real estate like any
                              other industry. They rely on templates, generic
                              keyword lists, and surface-level optimisation. Real
                              estate does not work that way. It is influenced by
                              market cycles, micro-location shifts, buyer
                              psychology, builder reputation, and the constant
                              movement of global and local demand.
                            </p>
                            <p>
                              For this reason, choosing a specialised real estate
                              SEO agency or a top real estate SEO company becomes
                              a strategic advantage rather than a{" "}
                              <Link
                                href="https://biztalbox.com/blog/digital-marketing-vs-performance-marketing-vs-growth-marketing"
                                className="text-primary"
                              >
                                marketing decision
                              </Link>
                              . A professional real estate SEO service gives you
                              more than rankings. It gives you market
                              intelligence, stronger positioning, higher quality
                              enquiries, and a clear edge in an industry where
                              trust drives conversions.
                            </p>
                            <p>
                              Here is what sets Biztalbox apart from generic
                              real estate seo companies:
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-30">
                        <div className="col-xl-6 col-lg-6">
                          <div
                            className={`tp-about-4-content item-1 ${
                              !isMobile ? "tp_fade_bottom" : ""
                            }`}
                          >
                            <h4 className="text-white">
                              1. Market-Grade Search Intelligence That Goes
                              Beyond Keywords
                            </h4>
                            <p>
                              We treat search behaviour like market behaviour.
                              Our approach blends pricing trends, buyer
                              motivations, supply fluctuations, and developer
                              credibility to build search clusters that general
                              SEO providers cannot replicate. This intelligence
                              shapes real estate SEO strategies that align with
                              actual demand and deliver results that compound
                              over time.
                            </p>
                            <h4 className="text-white mt-30">
                              2. Lead Quality Optimisation Instead of Chasing
                              Traffic
                            </h4>
                            <p>
                              We measure success by enquiry quality. Our
                              optimisation framework filters out irrelevant
                              traffic and strengthens visibility for buyers who
                              are serious, financially ready, and aligned with
                              your inventory. The result is a pipeline that
                              grows in value, not noise.
                            </p>
                            <h4 className="text-white mt-30">
                              3. Global Search Understanding With Local
                              Execution
                            </h4>
                            <p>
                              Property search patterns are global, but decisions
                              are always local. Whether it is luxury buyers
                              comparing international benchmarks or investors
                              analysing yields across cities, search behaviour
                              does not exist in isolation. Our real estate SEO
                              approach seamlessly combines global demand trends
                              with hyperlocal execution, so that listings,
                              services pages and market insights can perform
                              where decisions are actually made.
                            </p>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div
                            className={`tp-about-4-content item-2 ${
                              !isMobile ? "tp_fade_bottom" : ""
                            }`}
                          >
                            <h4 className="text-white">
                              4. Continuous Monitoring and Real-Time Adaptation
                            </h4>
                            <p>
                              Real estate changes fast. The introduction of new
                              projects, policy changes or interest rate
                              fluctuations reshape search demand instantly. A
                              real estate SEO service will constantly alter your
                              content and web pages so you retain ongoing
                              visibility as markets shift rather than react
                              after{" "}
                              <Link
                                href="https://biztalbox.com/blog/seo-competitor-analysis-checklist"
                                className="text-primary"
                              >
                                competitors
                              </Link>{" "}
                              have moved ahead.
                            </p>
                            <h4 className="text-white mt-30">
                              5. A Deep Understanding of Evolving Real Estate
                              Behaviour
                            </h4>
                            <p>
                              The market today is not the market of five years
                              ago. Buyers are more informed, more cautious, and
                              more skeptical. Sellers expect data-backed
                              justification, not promises. We design real estate
                              SEO strategies that mirror these shifts, addressing
                              trust gaps, regulatory awareness, resale anxiety,
                              and builder credibility. This understanding is why
                              our strategies age well instead of breaking every
                              time the market changes.
                            </p>
                            <h4 className="text-white mt-30">
                              6. Extension of Your Marketing and Sales Team
                            </h4>
                            <p>
                              We work like an internal search and content
                              intelligence team. You get the advantage of a
                              fully equipped team without the operational burden.
                              From strategic direction to execution, our role
                              is to strengthen your market perception and help
                              your team close faster with better informed leads.
                            </p>
                            <h4 className="text-white mt-30">
                              Why This Level of Real Estate Expertise Matters
                            </h4>
                            <p>
                              General SEO providers do not understand how
                              property decisions are made. They do not understand
                              micro-market dynamics, developer reputation
                              cycles, or buyer sensitivities. A specialist real
                              estate SEO firm does. When you partner with
                              experts who work exclusively within this space,
                              you gain a competitive foundation that is hard for
                              other agencies to replicate.
                            </p>
                            <p>
                              Our SEO services for real estate agents and
                              developers are designed to build authority,
                              increase visibility, and turn potential leads into
                              loyal customers. Every recommendation is rooted in
                              market logic, and every optimization is designed
                              to support your long-term digital ROI.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Message */}
            <div className="p-relative pt-80 pb-80">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tm-details-title-box mb-40">
                      <h2 className="tm-details-title">
                        Let Your Real Estate Brand Show Up When It Matters Most
                      </h2>
                    </div>
                    <div className="tm-details-text">
                      <p>
                        Most real estate brands don&apos;t lose buyers because
                        of poor offerings, but because they aren&apos;t visible
                        when decisions are being made. The impact is subtle, yet
                        it compounds over time. Biztalbox delivers real estate
                        SEO services that place you where intent is strongest
                        and attention is highest. If you want to work with a top
                        real estate SEO company that values precision and
                        long-term growth, this is the right place to start.
                      </p>
                      <p>
                        Reach out today to see exactly what search opportunities
                        you&apos;re missing out on, and how to turn visibility
                        into qualified leads.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="p-relative pt-80">
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
                          Ready to Scale Your Real Estate Business?
                        </span>
                        <h4 className="tm-details-title">Get Started Today</h4>
                      </div>
                      <div className="tm-details-text">
                        <p>
                          Your customers are searching — make sure they find you
                          first. Partner with Biztalbox, the real estate SEO
                          experts that agents, brokers, and real estate
                          businesses trust, and start driving real results.
                          Contact us today for a free consultation.
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
          </main>

          {/* footer area */}
          <FooterThree />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
}

