import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "SEO for Real Estate | Complete Guide to Get More Leads",
  description:
    "Discover how real estate SEO helps agents and brokers rank higher, drive targeted traffic, and generate high-quality property leads consistently.",
};

export const metadata = createMetadata(baseMetadata, "/real-estate-seo");

const REAL_ESTATE_SEO_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://biztalbox.com/#organization",
      name: "Biztalbox",
      url: "https://biztalbox.com/",
      logo: "https://biztalbox.com/_next/static/media/black.e66748b8.png",
      image: "https://biztalbox.com/_next/static/media/black.e66748b8.png",
      slogan:
        "Igniting your brand's potential with out-of-the-box Marketing Solutions",
      telephone: "+91-9485699709",
      email: "info@biztalbox.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "A-11, 2nd Floor, Sector 8, Dwarka",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        postalCode: "110077",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+91-9485699709",
        email: "info@biztalbox.com",
        availableLanguage: ["English", "Hindi"],
      },
      knowsAbout: [
        "Real Estate SEO",
        "Local SEO",
        "Technical SEO",
        "Content Marketing",
        "Link Building",
        "Keyword Research",
      ],
      sameAs: [
        "https://www.facebook.com/BiztalBox",
        "https://www.instagram.com/biztalbox",
        "https://x.com/BiztalBox",
        "https://www.linkedin.com/company/biztalbox",
        "https://www.youtube.com/@biztalboxofficial",
        "https://in.pinterest.com/biztalbox/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://biztalbox.com/#website",
      url: "https://biztalbox.com/",
      name: "Biztalbox",
      publisher: { "@id": "https://biztalbox.com/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": "https://biztalbox.com/real-estate-seo#webpage",
      url: "https://biztalbox.com/real-estate-seo",
      name: "SEO for Real Estate | Complete Guide to Get More Leads",
      headline: "What Is Real Estate SEO and Why Every Realtor Needs It",
      description:
        "Discover how real estate SEO helps agents and brokers rank higher, drive targeted traffic, and generate high-quality property leads consistently.",
      inLanguage: "en",
      isPartOf: { "@id": "https://biztalbox.com/#website" },
      breadcrumb: { "@id": "https://biztalbox.com/real-estate-seo#breadcrumb" },
      mainEntity: { "@id": "https://biztalbox.com/real-estate-seo#service" },
      hasPart: { "@id": "https://biztalbox.com/real-estate-seo#faq" },
      publisher: { "@id": "https://biztalbox.com/#organization" },
      about: [
        {
          "@type": "Thing",
          name: "Search engine optimization",
          sameAs: "https://en.wikipedia.org/wiki/Search_engine_optimization",
        },
        {
          "@type": "Thing",
          name: "Real estate",
          sameAs: "https://en.wikipedia.org/wiki/Real_estate",
        },
      ],
      mentions: [
        {
          "@type": "Thing",
          name: "Local search",
          sameAs: "https://en.wikipedia.org/wiki/Local_search_(Internet)",
        },
        {
          "@type": "Thing",
          name: "Google Business Profile",
          sameAs: "https://en.wikipedia.org/wiki/Google_Business_Profile",
        },
        { "@type": "Thing", name: "E-E-A-T" },
        { "@type": "Thing", name: "Your Money or Your Life (YMYL)" },
      ],
      keywords:
        "real estate SEO, SEO for real estate agents, SEO for realtors, real estate SEO strategy, local SEO for real estate, real estate SEO agency",
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://biztalbox.com/real-estate-seo#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://biztalbox.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://biztalbox.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Real Estate SEO",
          item: "https://biztalbox.com/real-estate-seo",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/real-estate-seo#service",
      name: "Real Estate SEO Services",
      alternateName: [
        "SEO for Real Estate Agents",
        "SEO for Realtors",
        "Real Estate SEO Agency",
        "SEO for Real Estate Developers",
      ],
      serviceType: "Search Engine Optimization",
      category: "Digital Marketing",
      url: "https://biztalbox.com/real-estate-seo",
      description:
        "Specialised SEO for real estate agents, brokers and developers that combines market-grade search intelligence, micro-market keyword strategy, funnel-based content, local SEO and technical optimisation to generate high-quality property leads.",
      provider: { "@id": "https://biztalbox.com/#organization" },
      areaServed: "Worldwide",
      audience: [
        {
          "@type": "BusinessAudience",
          audienceType: "Real estate agents and realtors",
        },
        {
          "@type": "BusinessAudience",
          audienceType: "Real estate brokers",
        },
        {
          "@type": "BusinessAudience",
          audienceType: "Real estate developers and builders",
        },
      ],
      offers: {
        "@type": "Offer",
        name: "Free 30-minute consultation call",
        description:
          "No-obligation consultation with expert advice tailored to your real estate business.",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://biztalbox.com/real-estate-seo",
        seller: { "@id": "https://biztalbox.com/#organization" },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Real Estate SEO Strategy Pillars",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Funnel-Based Real Estate Content Strategy",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Awareness-stage neighbourhood and market guides",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Consideration-stage property and builder comparisons",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Decision-stage listing, service and buying guide pages",
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Real Estate Keyword Strategy",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Micro-market keyword targeting",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Builder and project keyword targeting",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Property configuration keyword targeting",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Lifestyle and amenity keyword targeting",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Investment and market trend keyword targeting",
                },
              },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Local SEO for Real Estate",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Google Business Profile optimisation",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Local citation building",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Review strategy for map pack visibility",
                },
              },
            ],
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "E-E-A-T and YMYL content optimisation for real estate",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Off-page SEO and real estate link building",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Technical SEO for real estate websites",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Lead quality optimisation and continuous search monitoring",
            },
          },
        ],
      },
      isRelatedTo: [
        {
          "@type": "Service",
          "@id": "https://biztalbox.com/petcare-seo#service",
          name: "Pet Care SEO Services",
        },
        {
          "@type": "Service",
          "@id": "https://biztalbox.com/travel-seo#service",
          name: "Travel SEO Services",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://biztalbox.com/real-estate-seo#faq",
      isPartOf: { "@id": "https://biztalbox.com/real-estate-seo#webpage" },
      mainEntity: [
        {
          "@type": "Question",
          name: "What is real estate SEO and how does it help buyers find properties online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Real estate SEO ensures your expertise is discoverable at the exact moment prospects are searching. When buyers start evaluating neighbourhoods, property types, and pricing trends online, SEO aligns their need with your availability, helping them find relevant businesses first and guiding them through their property search journey.",
          },
        },
        {
          "@type": "Question",
          name: "Why does real estate SEO generate consistent leads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A strategic real estate SEO strategy places your guidance throughout the buyer journey. Since people compare locations, valuations, and financing options for weeks, SEO creates a steady stream of enquiries by aligning your content with how buyers naturally research properties before making decisions.",
          },
        },
        {
          "@type": "Question",
          name: "How does SEO create long-term visibility for real estate businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Each neighbourhood guide, market article, or property insight becomes an evergreen asset. Over time, these pages expand your presence across search queries, ensuring consistent discovery even when competition rises or market conditions slow down.",
          },
        },
        {
          "@type": "Question",
          name: "How does SEO reduce dependency on paid ads in real estate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Paid advertising fluctuates due to competition and rising costs. A strong real estate SEO strategy generates a steady flow of organic leads, making cost per lead more predictable and helping businesses grow without relying entirely on paid campaigns",
          },
        },
        {
          "@type": "Question",
          name: "How does AI affect real estate SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI now summarizes price trends, suggests properties, and answers buyer questions before clicks happen. Real estate SEO ensures your guides and insights appear in AI-driven formats like snippets and assistants, influencing first impressions and building trust early in the decision process.",
          },
        },
        {
          "@type": "Question",
          name: "What kind of content works best for real estate SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Real Estate content that answers questions, explains markets clearly, and addresses both rational and emotional concerns works best. This includes neighbourhood guides, property comparisons, and market insights that build trust and guide decision-making.",
          },
        },
        {
          "@type": "Question",
          name: "What kind of awareness-stage content helps attract real estate buyers early in their search?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Awareness-stage content that answers broad queries like cost of living or lifestyle insights helps attract buyers early. It keeps your brand visible, builds trust, and positions you as an expert before buyers are ready to take action.",
          },
        },
        {
          "@type": "Question",
          name: "What type of content should real estate websites create for buyers comparing properties or builders?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Content for buyers comparing properties or builders should include detailed guides, comparisons, and advisory content. This helps users evaluate options and strengthens your positioning as the best choice.",
          },
        },
        {
          "@type": "Question",
          name: "What content helps convert real estate leads when buyers are ready to make a decision?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Content that helps convert real estate leads includes listings, service pages, and buying guides. These provide clear information and ensure your brand is visible when buyers are ready to act and choose who to contact",
          },
        },
        {
          "@type": "Question",
          name: "Why do real estate SEO strategies need to focus on long-tail keywords?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Real estate SEO strategies focus on long-tail keywords because every search encapsulates motive, immediacy, financial ability, micro-location and trust in the builder, making these queries more precise and aligned with actual buyer intent.",
          },
        },
        {
          "@type": "Question",
          name: "What are micro-market keywords in real estate SEO and why do they convert so well?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Micro-market keywords are hyper-local searches like “Miami waterfront property price trends” or “2 BHK Flats in Dubai.” These long-tails convert exceptionally well because buyers already know where they want to live, making them highly intent-driven and easier to convert.",
          },
        },
        {
          "@type": "Question",
          name: "How do I choose the right SEO partner for my real estate business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You should choose an SEO partner that understands market cycles, micro-location dynamics, buyer psychology, and developer reputation rather than relying on generic templates and surface-level optimisation. A specialised partner like Biztalbox combines real estate market intelligence with tailored SEO strategies to drive stronger visibility, better-quality leads, and long-term growth.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {REAL_ESTATE_SEO_SCHEMA["@graph"].map((item, index) => (
        <script
          // eslint-disable-next-line react/no-danger
          key={index}
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              ...item,
            }),
          }}
          type="application/ld+json"
          suppressHydrationWarning
        />
      ))}
      {children}
    </>
  );
}
