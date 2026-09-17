import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title:
    "Construction SEO Services: Boost Visibility & Grow Your Construction Business",
  description:
    "Drive more leads for your construction business with proven SEO strategies. Improve search visibility, attract clients, and accelerate business growth.",
};

export const metadata = createMetadata(baseMetadata, "/construction-seo");

const CONSTRUCTION_SEO_SCHEMA = {
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
      "@id": "https://biztalbox.com/construction-seo#webpage",
      "url": "https://biztalbox.com/construction-seo",
      "name": "Construction SEO Services: Boost Visibility & Grow Your Construction Business",
      "headline": "The Complete Construction SEO Strategy Guide: How Search Visibility and SEO Strategies Fuel Business Growth",
      "description": "Drive more leads for your construction business with proven SEO strategies. Improve search visibility, attract clients, and accelerate business growth.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://biztalbox.com/#website"
      },
      "breadcrumb": {
        "@id": "https://biztalbox.com/construction-seo#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://biztalbox.com/construction-seo#service"
      },
      "hasPart": {
        "@id": "https://biztalbox.com/construction-seo#faq"
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
          "name": "Construction",
          "sameAs": "https://en.wikipedia.org/wiki/Construction"
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
          "name": "General contractor",
          "sameAs": "https://en.wikipedia.org/wiki/General_contractor"
        },
        {
          "@type": "Thing",
          "name": "Home renovation",
          "sameAs": "https://en.wikipedia.org/wiki/Home_improvement"
        },
        {
          "@type": "Thing",
          "name": "Green building",
          "sameAs": "https://en.wikipedia.org/wiki/Green_building"
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
          "name": "Google Gemini"
        },
        {
          "@type": "Thing",
          "name": "Google AI Mode"
        },
        {
          "@type": "Thing",
          "name": "Generative Engine Optimization (GEO)"
        },
        {
          "@type": "Thing",
          "name": "E-E-A-T"
        }
      ],
      "keywords": "construction SEO, SEO for construction companies, construction SEO services, construction SEO agency, local SEO for construction, SEO for construction industry, contractor SEO, home builder SEO"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://biztalbox.com/construction-seo#breadcrumb",
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
          "name": "Construction SEO",
          "item": "https://biztalbox.com/construction-seo"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/construction-seo#service",
      "name": "Construction SEO Services",
      "alternateName": [
        "SEO for Construction Companies",
        "SEO for Construction Industry",
        "Contractor SEO",
        "Construction SEO Marketing"
      ],
      "serviceType": "Search Engine Optimization",
      "category": "Digital Marketing",
      "url": "https://biztalbox.com/construction-seo",
      "description": "SEO for construction companies and contractors serving residential, renovation and commercial clients. Covers informational, navigational, commercial, transactional, service and long-tail keyword strategy, awareness-to-decision content with EEAT and internal linking, industry backlinks, citations, reviews, project-based links and visual platforms, technical SEO for image and project-heavy websites, deep local SEO with Google Business Profile and location pages, and AIO and GEO for AI-driven search.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "areaServed": "Worldwide",
      "audience": [
        {
          "@type": "BusinessAudience",
          "audienceType": "Residential construction, renovation and remodeling companies"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Commercial and infrastructure construction firms"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "General contractors and home builders"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Small and mid-sized construction firms in competitive local markets"
        }
      ],
      "offers": {
        "@type": "Offer",
        "name": "Free 30-minute consultation call",
        "description": "No-obligation consultation with expert advice tailored to your construction business.",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://biztalbox.com/construction-seo",
        "seller": {
          "@id": "https://biztalbox.com/#organization"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Construction SEO Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Construction SEO by Segment",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/construction-seo#residential-construction-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/construction-seo#commercial-construction-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/construction-seo#local-construction-seo"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Construction Keyword Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Informational keywords for construction research"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Navigational brand and company keywords"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial keywords for contractor comparison"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Transactional keywords for hiring and booking"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Core service keywords"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Long-tail location and service keywords"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Construction Content Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Awareness content on construction problems and costs"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Consideration content comparing methods and providers"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Decision content with services, credibility and trust signals"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Internal linking across the construction content funnel"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Off-Page SEO for Construction Companies",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Backlinks from architecture, real estate and construction platforms"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Local citations, business listings and reviews"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Partnerships with architects, suppliers and real estate agents"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Project-based link building and case study features"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Visual and video platform signals on YouTube, Instagram and Pinterest"
                }
              }
            ]
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO for image and project-heavy construction websites"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Local SEO with Google Business Profile, location pages and reviews"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AIO and GEO for AI Mode, ChatGPT, Gemini and Perplexity"
            }
          }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/construction-seo#residential-construction-seo",
      "name": "Residential Construction & Renovation SEO",
      "serviceType": "Local SEO",
      "description": "SEO for residential builders, renovation and remodeling companies targeting homeowner searches from urgent repairs to planned renovations. Focuses on near-me and cost keywords, problem and process content, service pages and trust signals that reassure homeowners choosing a contractor for their property.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Residential construction, renovation and remodeling companies"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/construction-seo#commercial-construction-seo",
      "name": "Commercial & Infrastructure Construction SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for commercial and infrastructure construction firms working on offices, retail, warehouses, hotels and large-scale projects. Focuses on capability and project content, credibility and trust signals, and visibility for business and institutional buyers with longer evaluation cycles.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Commercial and infrastructure construction firms"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/construction-seo#local-construction-seo",
      "name": "Local SEO for Contractors & Home Builders",
      "serviceType": "Local SEO",
      "description": "Local SEO for contractors and home builders competing within a service radius, covering Google Business Profile optimisation, service area and location pages, NAP consistency, reviews, local keywords, local links and map visibility to turn location-based searches into project enquiries.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Contractors and home builders taking projects across multiple regions"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://biztalbox.com/construction-seo#faq",
      "isPartOf": {
        "@id": "https://biztalbox.com/construction-seo#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is construction SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Construction SEO is the practice of optimising a construction company's online presence so it ranks well when people search for construction-related services, such as renovation, repairs or contractors in their area. It helps your business appear in the top results at the moment potential clients are looking."
          }
        },
        {
          "@type": "Question",
          "name": "Why do construction companies need SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most clients no longer rely on word of mouth. They search online, compare options, look at past work and read reviews before contacting anyone. If your business does not appear on the first page, it is often not considered at all, no matter how experienced or capable you are."
          }
        },
        {
          "@type": "Question",
          "name": "What keywords should construction companies target?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Construction companies should target informational keywords like \"cost of house renovation\", navigational brand keywords, commercial keywords like \"best construction companies in [city]\", transactional keywords like \"hire construction contractor near me\", core service keywords, and specific long-tail keywords like \"affordable home renovation services in [city]\"."
          }
        },
        {
          "@type": "Question",
          "name": "What content helps a construction business win projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Content should follow the buyer's journey. Awareness content explains problems like why walls crack, consideration content compares methods and approaches, and decision content focuses on services, credibility and trust signals. Content should also demonstrate experience, expertise, authority and trust, since clients evaluate credibility carefully."
          }
        },
        {
          "@type": "Question",
          "name": "How does SEO help construction companies get higher-quality leads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Search traffic is intent-driven, so users already have a problem and are looking for a solution. Construction SEO captures this high-intent audience at the right decision stage, reducing wasted inquiries and increasing the share of leads that convert into real projects."
          }
        },
        {
          "@type": "Question",
          "name": "Why is local SEO important for construction companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A construction business competes within a radius, not everywhere. People search \"contractor near me\" or \"builder in [city]\" and choose from what appears first. Local SEO, including Google Business Profile, location pages, consistent listings, reviews and local keywords, ensures you appear where you can actually take projects."
          }
        },
        {
          "@type": "Question",
          "name": "How do reviews and completed projects help construction SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In construction, clients look for proof before reaching out. Recent, positive reviews act as that proof and influence both rankings and decisions. Completed projects mentioned in case studies, supplier websites or architecture features create organic references that strengthen authority because they come from real-world work."
          }
        },
        {
          "@type": "Question",
          "name": "What technical SEO does a construction website need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Construction websites often have heavy images and large project pages, so they need fast loading, strong mobile-friendliness, proper crawlability and indexing, a clear structure separating residential, commercial and renovation services, HTTPS security, and regular fixing of broken links and duplicate content."
          }
        },
        {
          "@type": "Question",
          "name": "Should construction companies create separate location pages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. If you operate in multiple areas but your website does not reflect that, you limit your reach. Dedicated pages for each service location help search engines understand where you work and match how people actually search, which is essential for builders taking projects across different regions."
          }
        },
        {
          "@type": "Question",
          "name": "How can construction companies reduce dependence on referrals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Construction firms have traditionally relied on referrals and repeat clients, which are valuable but limited and unpredictable. SEO creates an independent acquisition channel that keeps generating leads even when offline networks slow down, reducing business risk over time."
          }
        },
        {
          "@type": "Question",
          "name": "How does AI search affect construction SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google's AI Mode and tools like ChatGPT, Gemini and Perplexity now give direct, summarised answers instead of only links. To be included, construction content must be specific, structured and grounded in real project experience, with clear explanations and direct answers to questions like the cost of building a house or how to choose a contractor."
          }
        },
        {
          "@type": "Question",
          "name": "Is SEO more cost-effective than paid ads for construction companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Paid ads stop generating leads as soon as spending stops, while SEO builds a long-term asset. Once pages rank, they keep generating traffic without a cost per click, and every piece of optimised content adds to visibility, making lead generation more cost-efficient over time."
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
      {CONSTRUCTION_SEO_SCHEMA["@graph"].map((item, index) => (
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
