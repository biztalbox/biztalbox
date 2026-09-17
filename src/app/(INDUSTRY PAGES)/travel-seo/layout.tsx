import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "SEO for Travel Websites | Rank Higher & Get More Travelers",
  description:
    "Grow your travel website traffic with expert SEO services. Rank higher on Google, attract more travelers, and increase bookings organically.",
};

export const metadata = createMetadata(baseMetadata, "/travel-seo");

const TRAVEL_SEO_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://biztalbox.com/#organization",
      name: "Biztalbox",
      url: "https://biztalbox.com/",
      logo: "https://biztalbox.com/_next/static/media/black.e66748b8.png",
      image: "https://biztalbox.com/_next/static/media/black.e66748b8.png",
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
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": "https://biztalbox.com/travel-seo#webpage",
      url: "https://biztalbox.com/travel-seo",
      name: "SEO for Travel Websites | Rank Higher & Get More Travelers",
      description:
        "Grow your travel website traffic with expert SEO services. Rank higher on Google, attract more travelers, and increase bookings organically.",
      inLanguage: "en",
      isPartOf: { "@id": "https://biztalbox.com/#website" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://biztalbox.com/_next/static/media/key-benefits-roi-travel-seo.52543f9c.jpg",
      },
      breadcrumb: { "@id": "https://biztalbox.com/travel-seo#breadcrumb" },
      mainEntity: { "@id": "https://biztalbox.com/travel-seo#service" },
      publisher: { "@id": "https://biztalbox.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://biztalbox.com/travel-seo#breadcrumb",
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
          name: "Travel SEO",
          item: "https://biztalbox.com/travel-seo",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/travel-seo#service",
      name: "Travel SEO Services",
      alternateName: [
        "SEO for Travel Websites",
        "Travel Industry SEO",
        "SEO for Travel Agencies",
        "Tour Operator SEO",
      ],
      serviceType: "Search Engine Optimization",
      url: "https://biztalbox.com/travel-seo",
      description:
        "Specialised SEO for travel agencies, tour operators, travel blogs and travel websites, covering travel keyword research, experience-driven content, technical SEO, link building, local SEO and data-driven optimisation to increase organic traffic and bookings.",
      category: "Digital Marketing",
      areaServed: "Worldwide",
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Travel agencies, tour operators, travel bloggers, travel websites and hospitality brands",
      },
      provider: { "@id": "https://biztalbox.com/#organization" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Travel SEO Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Keyword Research for Travel Websites",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Travel SEO Content Strategy",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Technical SEO for Travel Sites",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Link Building for Travel Companies",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Local SEO for Travel Agencies",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Data-Driven Travel SEO Marketing",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://biztalbox.com/travel-seo#faq",
      isPartOf: { "@id": "https://biztalbox.com/travel-seo#webpage" },
      mainEntity: [
        {
          "@type": "Question",
          name: "Why has SEO become so important for travel websites in recent years?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "With demand going through the roof and a shift towards digital, online sales now dominate, accounting for an impressive 69.6% of global travel and tourism revenue. Digital discovery is the battleground where brands earn visibility and build trust, making SEO the core of their marketing strategy rather than just an ancillary benefit.",
          },
        },
        {
          "@type": "Question",
          name: "How does SEO help travel agencies compete with OTAs and large platforms?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Travel SEO allows small and medium brands to win visibility in specific destinations, niche experiences, and intent-led comparison. It helps build authority in niche areas instead of relying on broad, generic topics.",
          },
        },
        {
          "@type": "Question",
          name: "What kind of travel searches drive the highest conversions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bottom-of-funnel queries like “best Paris tour package price” or “travel agency near me” reflect readiness to spend. Ranking for these high-intent keywords captures demand at the moment of decision.",
          },
        },
        {
          "@type": "Question",
          name: "Why is SEO considered a long-term growth channel for travel websites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO builds assets like destination hubs, content ecosystems, and authoritative pages that continue to generate traffic and inquiries for years, creating compounding growth that paid media cannot match.",
          },
        },
        {
          "@type": "Question",
          name: "How do leading OTAs like Booking.com use SEO to capture global demand?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Booking.com uses high-value keyword optimization and location-structured pages for destinations and properties, ensuring visibility at every stage of the traveller journey.",
          },
        },
        {
          "@type": "Question",
          name: "Why is travel SEO so competitive in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "OTAs, metasearch platforms, and large publishers dominate broad queries, while Google AI mode and its travel modules are taking over. This makes SEO essential for smaller brands to win visibility in niche, intent-driven searches.",
          },
        },
        {
          "@type": "Question",
          name: "Can SEO actually reduce customer acquisition costs in travel?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Strategic SEO allows traffic to build without ongoing payment. Organic search can generate up to 60% of total travel website traffic, often at a fraction of the acquisition cost of paid channels, making growth more reliable and predictable.",
          },
        },
        {
          "@type": "Question",
          name: "How can I attract eco-conscious travellers to my travel website online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Eco-conscious travellers are actively searching for tourism experiences that offer sustainable travel options, including eco-friendly resorts, wildlife-friendly excursions, and destinations with sustainable tourism programs. This segment is booming at a rapid pace. If you optimize your SEO for travel agencies with terms like “eco-friendly resorts USA” or “sustainable travel experiences,” it will help your site to stand out and get noticed by this enthusiastic audience.",
          },
        },
        {
          "@type": "Question",
          name: "How to do keyword research for travel SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Keyword research is the backbone of any sustainable travel website SEO plan. The goal isn’t to chase generic high-volume terms but to understand the intent behind how travellers search. Expanding into long-tail travel SEO keywords allows brands to appear in early inspiration searches as well as final booking queries.",
          },
        },
        {
          "@type": "Question",
          name: "What SEO strategies work best for travel websites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An effective travel SEO strategy involves the technical aspect of the website, the quality of the content, correct keyword mapping, and continuous monitoring. Travelers want fast, accurate, and relevant information at every stage, and search engines reward travel brands that provide such convenience have a higher booking intent with higher rankings.",
          },
        },
        {
          "@type": "Question",
          name: "Why is E-E-A-T important in travel SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "E-E-A-T is important in travel SEO because travellers look for trustworthy and experience-driven information before making decisions. Comprehensive itineraries, local knowledge, customer reviews, safety regulations, and authentic content help signal expertise and trust, which are major factors behind rankings for travel advice.",
          },
        },
        {
          "@type": "Question",
          name: "Why is technical SEO important for travel websites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Travellers are always looking for information while on the move, which makes the technical performance of the site a very important factor. Good technical SEO for travel focuses on mobile-first design, faster loading speed, structured data, HTTPS security, and smooth navigation. Reliability, speed, and clarity improve user engagement and make users more likely to complete bookings.",
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
      {TRAVEL_SEO_SCHEMA["@graph"].map((item, index) => (
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
