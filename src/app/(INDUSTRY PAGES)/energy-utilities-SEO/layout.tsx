import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "SEO for Energy & Utilities: Trends, Tips & Growth Strategies",
  description:
    "Discover actionable SEO tips for energy and utility companies. Stay ahead with trends, improve rankings, and drive consistent traffic.",
};

export const metadata = createMetadata(baseMetadata, "/energy-utilities-SEO");

const ENERGY_UTILITIES_SEO_SCHEMA = {
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
      "@id": "https://biztalbox.com/energy-utilities-seo#webpage",
      "url": "https://biztalbox.com/energy-utilities-seo",
      "name": "SEO for Energy & Utilities: Trends, Tips & Growth Strategies",
      "headline": "The Definitive Guide to Energy and Utilities SEO: Visibility and Growth Strategies",
      "description": "Discover actionable SEO tips for energy and utility companies. Stay ahead with trends, improve rankings, and drive consistent traffic.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://biztalbox.com/#website"
      },
      "breadcrumb": {
        "@id": "https://biztalbox.com/energy-utilities-seo#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://biztalbox.com/energy-utilities-seo#service"
      },
      "hasPart": {
        "@id": "https://biztalbox.com/energy-utilities-seo#faq"
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
          "name": "Public utility",
          "sameAs": "https://en.wikipedia.org/wiki/Public_utility"
        },
        {
          "@type": "Thing",
          "name": "Energy industry",
          "sameAs": "https://en.wikipedia.org/wiki/Energy_industry"
        }
      ],
      "mentions": [
        {
          "@type": "Thing",
          "name": "Renewable energy",
          "sameAs": "https://en.wikipedia.org/wiki/Renewable_energy"
        },
        {
          "@type": "Thing",
          "name": "Solar power",
          "sameAs": "https://en.wikipedia.org/wiki/Solar_power"
        },
        {
          "@type": "Thing",
          "name": "Electricity billing"
        },
        {
          "@type": "Thing",
          "name": "Generative Engine Optimization (GEO)"
        },
        {
          "@type": "Thing",
          "name": "AI Optimization (AIO)"
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
          "@type": "Thing",
          "name": "Google Gemini"
        },
        {
          "@type": "Thing",
          "name": "Google AI Overviews"
        },
        {
          "@type": "Thing",
          "name": "E-E-A-T"
        }
      ],
      "keywords": "energy SEO, energy and utilities SEO, SEO for energy industry, renewable energy SEO, solar SEO, utility company SEO, local SEO for energy providers"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://biztalbox.com/energy-utilities-seo#breadcrumb",
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
          "name": "Energy & Utilities SEO",
          "item": "https://biztalbox.com/energy-utilities-seo"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/energy-utilities-seo#service",
      "name": "Energy & Utilities SEO Services",
      "alternateName": [
        "SEO for Energy Industry",
        "Renewable Energy SEO",
        "Utility Company SEO",
        "Solar SEO"
      ],
      "serviceType": "Search Engine Optimization",
      "category": "Digital Marketing",
      "url": "https://biztalbox.com/energy-utilities-seo",
      "description": "SEO for energy and utility companies built around intent-driven, regulated and location-based search demand. Covers informational, commercial, transactional and local keyword strategy, educational, service, comparison and compliance content with EEAT, authority backlinks and digital PR, technical SEO for large complex sites, local SEO with Google Business Profile and location pages, and AIO and GEO for AI-driven search.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "areaServed": "Worldwide",
      "audience": [
        {
          "@type": "BusinessAudience",
          "audienceType": "Renewable energy and solar companies"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Electricity and gas utility providers"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Regional and location-based energy service providers"
        }
      ],
      "offers": {
        "@type": "Offer",
        "name": "Free 30-minute consultation call",
        "description": "No-obligation consultation with expert advice tailored to your energy or utility business.",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://biztalbox.com/energy-utilities-seo",
        "seller": {
          "@id": "https://biztalbox.com/#organization"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Energy & Utilities SEO Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Energy SEO by Service Type",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/energy-utilities-seo#renewable-solar-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/energy-utilities-seo#utility-provider-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/energy-utilities-seo#local-energy-seo"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Energy Keyword Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Informational keywords for energy concepts and processes"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial keywords for provider, cost and efficiency comparison"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Transactional keywords for connections and installations"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Local intent keywords and keyword clustering"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Energy Content Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Educational awareness content on energy and billing"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Conversion-focused service pages"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Comparison content for providers and technologies"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Trust and regulatory compliance content"
                }
              }
            ]
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Off-page SEO through authority backlinks, brand mentions, digital PR and partnerships"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO for large, complex energy websites"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Local SEO with Google Business Profile, reviews and location pages"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AIO and GEO for AI Overviews, ChatGPT and Gemini"
            }
          }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/energy-utilities-seo#renewable-solar-seo",
      "name": "Renewable Energy & Solar SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for renewable energy and solar companies targeting research and comparison searches such as solar savings, installation costs and solar vs traditional electricity. Focuses on educational content, comparison pages, installation service pages and authority signals for a high-trust, decision-driven audience.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Renewable energy, solar and green energy companies"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/energy-utilities-seo#utility-provider-seo",
      "name": "Electricity & Gas Utility SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for electricity and gas utility providers covering recurring, intent-driven searches for billing, usage, new connections, outages and support. Focuses on clear service and support pages, compliance content and fast access to essential information during urgent moments.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Electricity and gas utility providers"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/energy-utilities-seo#local-energy-seo",
      "name": "Local SEO for Energy Providers",
      "serviceType": "Local SEO",
      "description": "Local SEO for energy and utility providers whose services are tied to specific regions, covering Google Business Profile optimisation, near-me visibility, local keywords, reviews, consistent directory listings and multi-region location pages so nearby users find the right provider quickly.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Regional and location-based energy service providers"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://biztalbox.com/energy-utilities-seo#faq",
      "isPartOf": {
        "@id": "https://biztalbox.com/energy-utilities-seo#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is energy and utilities SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Energy and utilities SEO is the process of making energy and utility companies visible when people search for the services they offer, such as electricity, gas, solar solutions or new connections. Because energy decisions start with a search and are usually need-driven, it is intent-focused from the very beginning."
          }
        },
        {
          "@type": "Question",
          "name": "Why do energy and utility companies need SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most people no longer wait for outreach. They search, compare providers and evaluate energy solutions online before deciding. If an energy business is not visible during those searches, it is not considered at all, so SEO connects real infrastructure and services with real search demand."
          }
        },
        {
          "@type": "Question",
          "name": "What keywords should energy and utility companies target?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Energy companies should target informational keywords like \"what is renewable energy\", commercial keywords like \"best solar energy companies\" or \"electricity tariff comparison plans\", transactional keywords like \"apply for electricity connection online\", and local keywords like \"electricity provider near me\"."
          }
        },
        {
          "@type": "Question",
          "name": "What type of content works best for energy SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Energy content should span the user journey: educational content that explains concepts like billing and renewable systems, service pages that describe offerings and onboarding, comparison content that helps users evaluate providers and technologies, and trust and compliance content covering safety standards and regulations."
          }
        },
        {
          "@type": "Question",
          "name": "Why is EEAT important for energy websites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Energy is a high-trust sector where mistakes feel expensive, so search engines prefer content that is accurate, informed and clearly written. Demonstrating real expertise and covering safety, regulation and compliance helps users feel confident and improves how energy websites rank."
          }
        },
        {
          "@type": "Question",
          "name": "How does SEO help during outages and urgent energy issues?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many energy searches happen during problems like power cuts, billing errors or service complaints. SEO increases visibility during these high-intent moments and helps users quickly reach support pages or relevant information, reducing frustration and improving the overall service experience."
          }
        },
        {
          "@type": "Question",
          "name": "Why is local SEO important for energy and utility providers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Energy services are location-bound, since installation and service availability depend on geography. Local SEO, including Google Business Profile optimisation, near-me visibility, local keywords, reviews, consistent directory listings and location pages, ensures the right company appears for the right region-based searches."
          }
        },
        {
          "@type": "Question",
          "name": "How does off-page SEO work for energy companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Off-page SEO for energy companies relies on authoritative, industry-aligned sources rather than random backlinks. This includes links from government energy portals and research publications, brand mentions in sustainability reports and industry forums, digital PR, and partnerships with government bodies and infrastructure networks."
          }
        },
        {
          "@type": "Question",
          "name": "What technical SEO does an energy website need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Energy websites are often large and complex, so they need fast loading speeds, mobile optimisation, clean site architecture for many service and regional pages, proper indexing and crawlability, schema markup for services, FAQs and locations, and HTTPS security to protect data and signal trust."
          }
        },
        {
          "@type": "Question",
          "name": "What are AIO and GEO in energy SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AIO (AI Optimization) means structuring content so AI systems can easily understand it, and GEO (Generative Engine Optimization) means ensuring your content can be used in AI-generated responses and summaries. Both matter because users increasingly get energy answers directly from AI Overviews and tools like ChatGPT and Gemini."
          }
        },
        {
          "@type": "Question",
          "name": "How can energy companies appear in AI-generated answers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Energy companies can improve AI visibility by focusing each page on one clear intent, breaking content into modular sections, using consistent naming for energy concepts, starting sections with direct answers, structuring comparisons clearly, and aligning content with schema and structured formatting."
          }
        },
        {
          "@type": "Question",
          "name": "Why is energy search demand considered consistent rather than seasonal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlike seasonal industries, energy searches repeat every month through billing, usage checks, outages and new connection needs. Demand keeps returning in different forms instead of disappearing after a single spike, which creates stable, compounding organic visibility over time."
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
      {ENERGY_UTILITIES_SEO_SCHEMA["@graph"].map((item, index) => (
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
