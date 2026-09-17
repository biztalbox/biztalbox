import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "Insurance SEO Company | Boost Rankings & Leads Online",
  description:
    "Grow your insurance business with expert SEO services. Improve rankings, drive quality leads, and boost conversions with proven strategies.",
};

export const metadata = createMetadata(baseMetadata, "/insurance-seo");

const INSURANCE_SEO_SCHEMA = {
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
      "@id": "https://biztalbox.com/insurance-seo#webpage",
      "url": "https://biztalbox.com/insurance-seo",
      "name": "Insurance SEO Company | Boost Rankings & Leads Online",
      "headline": "The Definitive Guide to Insurance SEO: How It Works and Proven Strategies That Deliver Results",
      "description": "Grow your insurance business with expert SEO services. Improve rankings, drive quality leads, and boost conversions with proven strategies.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://biztalbox.com/#website"
      },
      "breadcrumb": {
        "@id": "https://biztalbox.com/insurance-seo#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://biztalbox.com/insurance-seo#service"
      },
      "hasPart": {
        "@id": "https://biztalbox.com/insurance-seo#faq"
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
          "name": "Insurance",
          "sameAs": "https://en.wikipedia.org/wiki/Insurance"
        },
        {
          "@type": "Thing",
          "name": "Local search",
          "sameAs": "https://en.wikipedia.org/wiki/Local_search_(Internet)"
        }
      ],
      "mentions": [
        {
          "@type": "Thing",
          "name": "Your Money or Your Life (YMYL)"
        },
        {
          "@type": "Thing",
          "name": "E-E-A-T"
        },
        {
          "@type": "Thing",
          "name": "Life insurance",
          "sameAs": "https://en.wikipedia.org/wiki/Life_insurance"
        },
        {
          "@type": "Thing",
          "name": "Health insurance",
          "sameAs": "https://en.wikipedia.org/wiki/Health_insurance"
        },
        {
          "@type": "Thing",
          "name": "Term life insurance",
          "sameAs": "https://en.wikipedia.org/wiki/Term_life_insurance"
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
          "name": "Perplexity AI",
          "sameAs": "https://en.wikipedia.org/wiki/Perplexity_AI"
        },
        {
          "@type": "Thing",
          "name": "Google AI Overviews"
        },
        {
          "@type": "Thing",
          "name": "Generative Engine Optimization (GEO)"
        }
      ],
      "keywords": "insurance SEO, SEO for insurance companies, insurance SEO services, SEO for insurance agents, insurance SEO agency, local SEO for insurance, insurance broker SEO"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://biztalbox.com/insurance-seo#breadcrumb",
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
          "name": "Insurance SEO",
          "item": "https://biztalbox.com/insurance-seo"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/insurance-seo#service",
      "name": "Insurance SEO Services",
      "alternateName": [
        "SEO for Insurance Companies",
        "SEO for Insurance Agents",
        "Insurance SEO Marketing",
        "Insurance Broker SEO"
      ],
      "serviceType": "Search Engine Optimization",
      "category": "Digital Marketing",
      "url": "https://biztalbox.com/insurance-seo",
      "description": "YMYL-aware SEO for insurance companies, agents and brokers built around cautious, research-heavy, high-trust buyer journeys. Covers informational, navigational, transactional, commercial investigation and local keyword strategy, awareness-to-decision content with E-E-A-T, finance-sector backlinks, digital PR, guest content and reviews, technical SEO with insurance schema, local SEO with Google Business Profile and location pages, and AIO and GEO for AI-driven search.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "areaServed": "Worldwide",
      "audience": [
        {
          "@type": "BusinessAudience",
          "audienceType": "Insurance companies and insurtech brands"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Insurance agents, brokers and local offices"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Life, health, car and home insurance providers"
        }
      ],
      "offers": {
        "@type": "Offer",
        "name": "Free 30-minute consultation call",
        "description": "No-obligation consultation with expert advice tailored to your insurance business.",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://biztalbox.com/insurance-seo",
        "seller": {
          "@id": "https://biztalbox.com/#organization"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Insurance SEO Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Insurance SEO by Business Type",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/insurance-seo#insurance-company-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/insurance-seo#insurance-agent-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/insurance-seo#local-insurance-seo"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Insurance Keyword Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Informational keywords for insurance concepts"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Navigational brand and portal keywords"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Transactional keywords for buying and applying"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial investigation keywords for policy comparison"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Local keywords for agents and offices"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Insurance Content Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Awareness content explaining insurance concepts"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Consideration content comparing policies and providers"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Decision and conversion content for policy selection"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "E-E-A-T aligned, accurate insurance content with internal linking"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Off-Page SEO for Insurance",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Insurance and finance authority backlinks"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Expert guest content on finance and insurance platforms"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Brand mentions and digital PR in financial publications"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Local listings and review management"
                }
              }
            ]
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO with speed, mobile, HTTPS, schema and indexing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Local SEO with Google Business Profile, NAP consistency and location pages"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AIO and GEO for AI Overviews, ChatGPT and Perplexity"
            }
          }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/insurance-seo#insurance-company-seo",
      "name": "Insurance Company & Brand SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for insurance companies and insurtech brands covering life, health, car and home insurance lines. Focuses on full-funnel content, policy and comparison pages, finance-sector authority signals, structured data and national visibility across many products.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Insurance companies and insurtech brands"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/insurance-seo#insurance-agent-seo",
      "name": "Insurance Agent & Broker SEO",
      "serviceType": "Local SEO",
      "description": "SEO for insurance agents and brokers focused on high-intent and near-me searches, agent and office visibility, reviews and trust signals that connect searchers directly with a local agent instead of an aggregator or intermediary.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Insurance agents, brokers and local offices"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/insurance-seo#local-insurance-seo",
      "name": "Local SEO for Insurance Businesses",
      "serviceType": "Local SEO",
      "description": "Local SEO for insurance agencies and multi-city providers covering Google Business Profile optimisation, near-me and service-plus-city keywords, consistent listings, reviews and dedicated location pages that turn local search intent into agent and office enquiries.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Insurance agencies and multi-city insurance providers"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://biztalbox.com/insurance-seo#faq",
      "isPartOf": {
        "@id": "https://biztalbox.com/insurance-seo#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is insurance SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Insurance SEO is the process of making an insurance website appear when someone is actively searching for things like health insurance, life cover or policy comparisons. It connects user queries to relevant pages such as policy explanations, comparisons and cost or coverage details, so your business is visible at the moment people are deciding."
          }
        },
        {
          "@type": "Question",
          "name": "Why do insurance businesses need SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most customers no longer rely only on agents or offline recommendations. They research policies, compare providers and evaluate options online before deciding, so the first point of contact is often digital. If an insurance provider is not visible during that search, it is frequently not considered at all."
          }
        },
        {
          "@type": "Question",
          "name": "How is insurance SEO different from general SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google treats insurance as a YMYL (\"Your Money or Your Life\") category because users are making financial and personal protection decisions. Content is judged more strictly for accuracy and trust, so relevance alone is not enough. Insurance SEO focuses on being a reliable, clear answer during high-stakes, research-heavy decisions."
          }
        },
        {
          "@type": "Question",
          "name": "What keywords should insurance businesses target?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Insurance businesses should target informational keywords like \"how does term insurance work\", navigational keywords like brand or portal names, transactional keywords like \"buy health insurance online\", commercial investigation keywords like \"health insurance vs term insurance\", and local keywords like \"insurance agent near me\"."
          }
        },
        {
          "@type": "Question",
          "name": "What content works best for insurance SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Content should follow the buyer's journey: awareness content that explains concepts simply, consideration content that compares policies and providers, and decision content that removes final hesitation with clear policy information, benefits and steps to apply. Because insurance is YMYL, all content must demonstrate E-E-A-T."
          }
        },
        {
          "@type": "Question",
          "name": "Why is E-E-A-T important for insurance content?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "E-E-A-T stands for Experience, Expertise, Authoritativeness and Trustworthiness. Insurance decisions affect savings, security and family planning, so users rely on content to make high-impact choices. Search engines prioritise content that is accurate, transparent and credible, and weak or exaggerated claims can harm both rankings and trust."
          }
        },
        {
          "@type": "Question",
          "name": "Why is local SEO important for insurance agents?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Location often influences insurance decisions, since people prefer nearby agents and local offices they can reach easily. Local SEO, including Google Business Profile, \"near me\" and service-plus-city keywords, consistent listings, reviews and location pages, helps agents appear at the exact moment users are ready to connect or visit."
          }
        },
        {
          "@type": "Question",
          "name": "How do backlinks and mentions help insurance SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In insurance, backlinks act like referrals. A single contextual link from a trusted finance website or comparison platform carries more weight than many unrelated links. Guest content, brand mentions in articles and forums, and digital PR in financial publications build authority and familiarity in a category built on trust."
          }
        },
        {
          "@type": "Question",
          "name": "How important are reviews for insurance businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reviews directly affect both trust and local rankings. Positive Google reviews help insurance agencies appear higher in local results, and people often compare ratings before contacting an agent. A steady flow of genuine reviews builds social proof, reduces hesitation and increases enquiries."
          }
        },
        {
          "@type": "Question",
          "name": "What technical SEO does an insurance website need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Insurance websites need fast loading, since users compare plans quickly, a strong mobile experience because most insurance searches happen on mobile, HTTPS security for personal and financial data, a clear structure across plans, calculators and FAQs, schema markup, and reliable indexing and crawlability."
          }
        },
        {
          "@type": "Question",
          "name": "How does AI search affect insurance companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google's AI Overviews and tools like ChatGPT and Perplexity now answer insurance questions directly, so users shortlist faster based on what AI presents. To be included, insurance content needs clarity, FAQ sections, structured formatting, complete topic coverage, verifiable trust signals and consistent information across the website and third-party platforms."
          }
        },
        {
          "@type": "Question",
          "name": "Is SEO more cost-effective than ads for insurance businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Most insurance marketing resets when spending stops, but once insurance content ranks well it keeps bringing traffic and enquiries over time. This creates a steadier, more predictable growth channel and reduces dependence on continuous ad spend and on agents and intermediaries."
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
      {INSURANCE_SEO_SCHEMA["@graph"].map((item, index) => (
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
