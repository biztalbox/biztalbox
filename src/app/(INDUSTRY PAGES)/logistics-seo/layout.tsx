import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "The Ultimate Logistics SEO Guide: Strategies That Drive Traffic and Clients",
  description:
    "Struggling to get clients online? Discover the ultimate logistics SEO strategies, and insights that help logistics companies rank higher and attract real business.",
};

export const metadata = createMetadata(baseMetadata, "/logistics-seo");

const LOGISTICS_SEO_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://biztalbox.com/#organization",
      "name": "Biztalbox",
      "url": "https://biztalbox.com/",
      "logo": "https://biztalbox.com/_next/static/media/black.e66748b8.png",
      "image": "https://biztalbox.com/_next/static/media/black.e66748b8.png",
      "slogan": "Igniting your brand's potential with out-of-the-box Marketing Solutions",
      "telephone": "+91-9485699709",
      "email": "info@biztalbox.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "A-11, 2nd Floor, Sector 8, Dwarka",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110077",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "telephone": "+91-9485699709",
        "email": "info@biztalbox.com",
        "availableLanguage": [
          "English",
          "Hindi"
        ]
      },
      "sameAs": [
        "https://www.facebook.com/BiztalBox",
        "https://www.instagram.com/biztalbox",
        "https://x.com/BiztalBox",
        "https://www.linkedin.com/company/biztalbox",
        "https://www.youtube.com/@biztalboxofficial",
        "https://in.pinterest.com/biztalbox/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://biztalbox.com/#website",
      "url": "https://biztalbox.com/",
      "name": "Biztalbox",
      "publisher": {
        "@id": "https://biztalbox.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://biztalbox.com/logistics-seo#webpage",
      "url": "https://biztalbox.com/logistics-seo",
      "name": "The Ultimate Logistics SEO Guide: Strategies That Drive Traffic and Clients",
      "headline": "The Ultimate Logistics SEO Guide: Strategies That Drive Traffic and Clients",
      "description": "Struggling to get clients online? Discover the ultimate logistics SEO strategies, and insights that help logistics companies rank higher and attract real business.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://biztalbox.com/#website"
      },
      "breadcrumb": {
        "@id": "https://biztalbox.com/logistics-seo#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://biztalbox.com/logistics-seo#service"
      },
      "hasPart": {
        "@id": "https://biztalbox.com/logistics-seo#faq"
      },
      "publisher": {
        "@id": "https://biztalbox.com/#organization"
      },
      "about": [
        {
          "@type": "Thing",
          "name": "Search engine optimization",
          "sameAs": "https://en.wikipedia.org/wiki/Search_engine_optimization"
        },
        {
          "@type": "Thing",
          "name": "Logistics",
          "sameAs": "https://en.wikipedia.org/wiki/Logistics"
        },
        {
          "@type": "Thing",
          "name": "Supply chain management",
          "sameAs": "https://en.wikipedia.org/wiki/Supply_chain_management"
        }
      ],
      "mentions": [
        {
          "@type": "Thing",
          "name": "Third-party logistics",
          "sameAs": "https://en.wikipedia.org/wiki/Third-party_logistics"
        },
        {
          "@type": "Thing",
          "name": "Freight forwarder",
          "sameAs": "https://en.wikipedia.org/wiki/Freight_forwarder"
        },
        {
          "@type": "Thing",
          "name": "Cold chain",
          "sameAs": "https://en.wikipedia.org/wiki/Cold_chain"
        },
        {
          "@type": "Thing",
          "name": "Intermodal freight transport",
          "sameAs": "https://en.wikipedia.org/wiki/Intermodal_freight_transport"
        },
        {
          "@type": "Thing",
          "name": "Transportation management system",
          "sameAs": "https://en.wikipedia.org/wiki/Transportation_management_system"
        },
        {
          "@type": "Thing",
          "name": "Google Business Profile",
          "sameAs": "https://en.wikipedia.org/wiki/Google_Business_Profile"
        },
        {
          "@type": "Thing",
          "name": "ChatGPT",
          "sameAs": "https://en.wikipedia.org/wiki/ChatGPT"
        },
        {
          "@type": "Organization",
          "name": "DHL",
          "sameAs": "https://en.wikipedia.org/wiki/DHL"
        },
        {
          "@type": "Organization",
          "name": "FedEx",
          "sameAs": "https://en.wikipedia.org/wiki/FedEx"
        },
        {
          "@type": "Organization",
          "name": "Amazon",
          "sameAs": "https://en.wikipedia.org/wiki/Amazon_(company)"
        },
        {
          "@type": "Organization",
          "name": "Flipkart",
          "sameAs": "https://en.wikipedia.org/wiki/Flipkart"
        },
        {
          "@type": "Organization",
          "name": "Alibaba Group",
          "sameAs": "https://en.wikipedia.org/wiki/Alibaba_Group"
        }
      ],
      "keywords": "logistics SEO, SEO for logistics companies, logistics SEO services, logistics SEO agency, SEO for transportation companies, freight forwarding SEO, 3PL SEO, local SEO for logistics"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://biztalbox.com/logistics-seo#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://biztalbox.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://biztalbox.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Logistics SEO",
          "item": "https://biztalbox.com/logistics-seo"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/logistics-seo#service",
      "name": "Logistics SEO Services",
      "alternateName": [
        "SEO for Logistics Companies",
        "Logistics Industry SEO",
        "SEO for Transportation Companies",
        "Freight Website SEO Services"
      ],
      "serviceType": "Search Engine Optimization",
      "category": "Digital Marketing",
      "url": "https://biztalbox.com/logistics-seo",
      "description": "B2B SEO for logistics, freight, warehousing, 3PL and transportation companies built around how procurement and supply chain decision-makers search. Covers informational, commercial, transactional and navigational keyword strategy, awareness-to-decision content with capability and proof pages, industry directory listings and reviews, technical SEO, multi-location local SEO for warehouses, depots and offices, and AI search optimisation.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "areaServed": "Worldwide",
      "audience": [
        {
          "@type": "BusinessAudience",
          "audienceType": "Freight forwarders and international shipping companies"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Warehousing, 3PL and cold chain logistics providers"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Transportation, trucking and last-mile delivery companies"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Regional logistics businesses competing with large carriers"
        }
      ],
      "offers": {
        "@type": "Offer",
        "name": "Free 30-minute consultation call",
        "description": "No-obligation consultation with expert advice tailored to your logistics business.",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://biztalbox.com/logistics-seo",
        "seller": {
          "@id": "https://biztalbox.com/#organization"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Logistics SEO Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Logistics SEO by Segment",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/logistics-seo#freight-forwarding-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/logistics-seo#warehousing-3pl-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/logistics-seo#transportation-last-mile-seo"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Logistics Keyword Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Informational keywords on freight rates, customs delays and cold chain"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial keywords for logistics provider comparison"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Transactional keywords for routes, locations and specific capacity"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Navigational brand, review and competitor comparison keywords"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Logistics Content Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Awareness content on freight costs, regulations and supply chain disruptions"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Capability-focused service pages covering capacity, fleet, certifications and timelines"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Decision-stage case studies, performance data and testimonials"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Internal linking from educational content to service pages and quote requests"
                }
              }
            ]
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Off-page SEO through port directories, freight marketplaces, trade publications and industry associations"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO for logistics websites"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Multi-location local SEO for warehouses, cross-docks, depots and regional offices"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI search optimisation for ChatGPT, Gemini and AI-generated summaries"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Transparent reporting connecting visibility to enquiries and revenue"
            }
          }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/logistics-seo#freight-forwarding-seo",
      "name": "Freight Forwarding & Cross-Border Shipping SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for freight forwarders and international shipping providers, focused on route-specific and port-based searches, customs clearance and compliance content, intermodal and container transport pages, and trade lane visibility for importers and exporters.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Freight forwarders, customs brokers and international shipping companies"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/logistics-seo#warehousing-3pl-seo",
      "name": "Warehousing, 3PL & Cold Chain SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for warehousing, third-party logistics and cold chain providers, focused on location-specific warehouse pages that detail storage capacity, temperature ranges, compliance standards and proximity to ports, air cargo terminals and industrial areas.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Warehousing, fulfilment, 3PL and temperature-controlled logistics providers"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/logistics-seo#transportation-last-mile-seo",
      "name": "Transportation & Last-Mile Delivery SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for transportation, trucking and last-mile delivery companies, focused on coverage area and route pages, same-day and next-day delivery searches for e-commerce, tracking and delivery timeline information, and helping regional carriers compete with large logistics brands.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Transportation, trucking, courier and last-mile delivery companies"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://biztalbox.com/logistics-seo#faq",
      "isPartOf": {
        "@id": "https://biztalbox.com/logistics-seo#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is logistics SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Logistics SEO is the process of making a logistics business easy to find online for the people who need its services. It ensures your transport, freight, warehousing and supply chain services appear in search results when decision-makers search for them, clearly explaining what you do, where you operate and who you serve."
          }
        },
        {
          "@type": "Question",
          "name": "Why do logistics companies need SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Businesses looking for logistics partners often begin their research online, scanning service pages and comparing providers they may never have heard of. For many buyers, the first encounter with a logistics company is a search results page. SEO makes sure your business appears as a credible option at that moment."
          }
        },
        {
          "@type": "Question",
          "name": "What keywords should logistics companies target?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Logistics companies should target four keyword types: informational searches like \"how does cold chain logistics work\", commercial searches like \"top freight forwarding companies in India\", transactional searches like \"temperature-controlled warehouse in New York\", and navigational searches for their own brand name, contact details and reviews."
          }
        },
        {
          "@type": "Question",
          "name": "How can smaller logistics companies compete with large carriers in search?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO allows smaller and regional logistics businesses to rank for specific searches, such as same-day delivery for e-commerce or services on particular routes, that large corporations like DHL and FedEx may not target closely. This lets smaller providers compete on their real strengths rather than business size or scale."
          }
        },
        {
          "@type": "Question",
          "name": "What content helps logistics companies win more enquiries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Effective logistics content follows the buyer's journey. Awareness content explains issues like rising freight rates or customs delays. Consideration content presents detailed service pages on capacity, locations and certifications. Decision content provides proof, such as case studies, on-time delivery performance and testimonials from regulated industries."
          }
        },
        {
          "@type": "Question",
          "name": "What should a logistics service page include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A logistics service page should answer practical questions before a buyer makes contact. It should cover service capacity, locations, certifications, fleet and timelines. For example, a warehousing page should mention storage size, temperature range and compliance standards, while a transport page should explain coverage areas, delivery timelines and tracking systems."
          }
        },
        {
          "@type": "Question",
          "name": "How does local SEO work for logistics companies with multiple locations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Logistics buyers search by location, such as a warehouse in Rotterdam or a freight forwarder in Toronto. Each warehouse, cross-dock or regional office should have an optimised Google Business Profile and a dedicated location page covering port access, capacity and supported trade routes, with consistent NAP data across freight directories."
          }
        },
        {
          "@type": "Question",
          "name": "How do industry listings and reviews help logistics SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Listings on port authority directories, freight marketplaces, export council websites and industry associations show that your business operates within recognised logistics networks. Detailed client reviews that mention delivery timelines, customs handling or cold chain management add context that search engines can interpret and buyers check before making contact."
          }
        },
        {
          "@type": "Question",
          "name": "What technical SEO does a logistics website need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A logistics website needs a clear structure that moves visitors from services to locations to contact details, fast loading times, mobile friendliness and secure browsing. Service pages should clearly define routes, warehouse locations and industry specialisation, while broken links, duplicate pages and outdated content should be removed."
          }
        },
        {
          "@type": "Question",
          "name": "How does AI search affect logistics companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI tools such as ChatGPT, Gemini and Google's AI-generated summaries now answer detailed logistics questions directly. They draw on websites that are clear, structured and reliable. Content that explains processes step by step, includes measurable data and clearly defines routes, compliance standards and transit times is more likely to be referenced."
          }
        },
        {
          "@type": "Question",
          "name": "How does SEO reduce dependence on aggregators and paid platforms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many logistics businesses rely on aggregators and third-party platforms for enquiries, which limits brand control and raises acquisition costs. Strong organic visibility creates a direct demand channel the business owns, reducing reliance on intermediaries, stabilising lead flow and strengthening long-term profitability."
          }
        },
        {
          "@type": "Question",
          "name": "Does SEO improve the quality of logistics leads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. SEO filters demand through intent, so enquiries tend to be informed, specific and time-sensitive rather than exploratory. Sales teams connect with prospects who already understand their requirements, which shortens sales cycles, improves conversion rates and reduces time spent assessing unqualified leads."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {LOGISTICS_SEO_SCHEMA["@graph"].map((item, index) => (
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
