import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "SEO for Roofing Companies | Complete Guide to Get More Leads",
  description:
    "Not getting enough customers from your website? Discover SEO for roofing companies, its benefits, and the strategy to increase visibility and attract customers.",
};

export const metadata = createMetadata(baseMetadata, "/roofing-seo");

const ROOFING_SEO_SCHEMA = {
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
      "@id": "https://biztalbox.com/roofing-seo#webpage",
      "url": "https://biztalbox.com/roofing-seo",
      "name": "SEO for Roofing Companies | Complete Guide to Get More Leads",
      "headline": "Roofing SEO: A Complete Guide to Benefits, Strategy and Lead Generation",
      "description": "Not getting enough customers from your website? Discover SEO for roofing companies, its benefits, and the strategy to increase visibility and attract customers.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://biztalbox.com/#website"
      },
      "breadcrumb": {
        "@id": "https://biztalbox.com/roofing-seo#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://biztalbox.com/roofing-seo#service"
      },
      "hasPart": {
        "@id": "https://biztalbox.com/roofing-seo#faq"
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
          "name": "Roof",
          "sameAs": "https://en.wikipedia.org/wiki/Roof"
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
          "name": "Roof shingle",
          "sameAs": "https://en.wikipedia.org/wiki/Roof_shingle"
        },
        {
          "@type": "Thing",
          "name": "Asphalt shingle",
          "sameAs": "https://en.wikipedia.org/wiki/Asphalt_shingle"
        },
        {
          "@type": "Thing",
          "name": "Metal roof",
          "sameAs": "https://en.wikipedia.org/wiki/Metal_roof"
        },
        {
          "@type": "Thing",
          "name": "Sitemaps",
          "sameAs": "https://en.wikipedia.org/wiki/Sitemaps"
        },
        {
          "@type": "Thing",
          "name": "Google Business Profile",
          "sameAs": "https://en.wikipedia.org/wiki/Google_Business_Profile"
        },
        {
          "@type": "Thing",
          "name": "Voice search",
          "sameAs": "https://en.wikipedia.org/wiki/Voice_search"
        },
        {
          "@type": "Thing",
          "name": "ChatGPT",
          "sameAs": "https://en.wikipedia.org/wiki/ChatGPT"
        },
        {
          "@type": "Organization",
          "name": "Yelp",
          "sameAs": "https://en.wikipedia.org/wiki/Yelp"
        },
        {
          "@type": "Thing",
          "name": "Google AI Mode"
        },
        {
          "@type": "Thing",
          "name": "AI Optimization (AIO)"
        }
      ],
      "keywords": "roofing SEO, SEO for roofing companies, roofing SEO services, roofing SEO agency, roofing contractor SEO, local SEO for roofers, metal roofing SEO, commercial roofing SEO"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://biztalbox.com/roofing-seo#breadcrumb",
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
          "name": "Roofing SEO",
          "item": "https://biztalbox.com/roofing-seo"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/roofing-seo#service",
      "name": "Roofing SEO Services",
      "alternateName": [
        "SEO for Roofing Companies",
        "Roofing Contractor SEO",
        "SEO for Roofers",
        "Roofing SEO Marketing"
      ],
      "serviceType": "Search Engine Optimization",
      "category": "Digital Marketing",
      "url": "https://biztalbox.com/roofing-seo",
      "description": "SEO for residential and commercial roofing contractors built around urgent storm damage searches, planned replacement research and weather-driven seasonal demand. Covers informational, transactional, commercial and local keyword strategy, TOFU, MOFU and BOFU content with internal linking, home improvement backlinks, citations, guest posts, partnerships and review management, technical SEO, local SEO with Google Business Profile and location pages, and AIO for AI-driven search.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "areaServed": "Worldwide",
      "audience": [
        {
          "@type": "BusinessAudience",
          "audienceType": "Residential roofing contractors"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Commercial roofing companies"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Metal roofing and shingle specialists"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Roofing companies operating in multiple locations"
        }
      ],
      "offers": {
        "@type": "Offer",
        "name": "Free 30-minute consultation call",
        "description": "No-obligation consultation with expert advice tailored to your roofing business.",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://biztalbox.com/roofing-seo",
        "seller": {
          "@id": "https://biztalbox.com/#organization"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Roofing SEO Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Roofing SEO by Service Type",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/roofing-seo#storm-emergency-roofing-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/roofing-seo#residential-roofing-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/roofing-seo#commercial-roofing-seo"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Roofing Keyword Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Informational keywords for roof damage and maintenance questions"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Transactional keywords for emergency repair and replacement"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial keywords for contractor comparison and quotes"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Local and service-specific keywords for cities and neighbourhoods"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Roofing Content Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "TOFU blogs, guides and FAQs on roofing problems and materials"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "MOFU service pages, case studies and testimonials"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "BOFU location pages with calls to action and click-to-call"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Internal linking across the roofing content funnel"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Off-Page SEO for Roofing Companies",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Backlinks from home improvement and roofing industry websites"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Local listings and citations on Google Business Profile, Yelp and directories"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Guest posts on construction and home improvement platforms"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Partnerships with builders and property managers"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Online review and reputation management"
                }
              }
            ]
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO including speed, mobile design, security, sitemaps, schema and audits"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Local SEO with location pages, NAP consistency, voice search and localised content"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AIO for AI Mode, conversational search and ChatGPT"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Weather and seasonal demand optimisation with transparent reporting"
            }
          }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/roofing-seo#storm-emergency-roofing-seo",
      "name": "Storm Damage & Emergency Roof Repair SEO",
      "serviceType": "Local SEO",
      "description": "SEO for roofers targeting urgent searches after storms and sudden leaks, such as emergency roof repair near me. Focuses on emergency repair and location pages, click-to-call conversion paths, map visibility, localised storm damage content and ongoing optimisation as weather and seasons shift demand.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Roofing contractors offering storm damage and emergency repairs"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/roofing-seo#residential-roofing-seo",
      "name": "Residential Roof Replacement & Installation SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for residential roofing contractors and shingle and metal roofing specialists targeting planned replacement and installation searches. Focuses on material comparison content such as metal vs asphalt roofing, detailed service pages, case studies, testimonials and quote-focused commercial keywords.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Residential roofing contractors and shingle and metal roofing specialists"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/roofing-seo#commercial-roofing-seo",
      "name": "Commercial Roofing SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for commercial roofing companies serving property managers and business clients who evaluate contractors carefully. Focuses on commercial roofing service pages, project case studies, industry backlinks and partnerships with builders and property managers.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Commercial roofing companies"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://biztalbox.com/roofing-seo#faq",
      "isPartOf": {
        "@id": "https://biztalbox.com/roofing-seo#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is roofing SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roofing SEO is the practice of optimising a roofing business online so homeowners, property managers and commercial clients can easily find it when they search for roofing services. It helps search engines understand the services you provide, where you operate and why clients should trust your business."
          }
        },
        {
          "@type": "Question",
          "name": "Why do roofing companies need SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Homeowners and businesses no longer rely only on word of mouth. They search online, compare options and read reviews before contacting a roofer. If your business does not appear in those searches, you are not considered. SEO keeps your company visible when people are ready to hire a contractor."
          }
        },
        {
          "@type": "Question",
          "name": "What keywords should roofing companies target?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roofing companies should target informational keywords like \"how to spot roof damage\", transactional keywords like \"emergency roof repair near me\", commercial keywords like \"best roofing contractors in [city]\" or \"metal roofing installation quotes\", and local, service-specific keywords like \"shingle repair near me\"."
          }
        },
        {
          "@type": "Question",
          "name": "How does SEO help roofers get storm damage and emergency repair leads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "After storm damage, homeowners search urgently for help. SEO puts your business in front of these high-intent searches with optimised emergency repair and location pages, strong calls to action, click-to-call buttons and localised content such as storm damage guides for your city, so you receive calls when repairs are needed most."
          }
        },
        {
          "@type": "Question",
          "name": "What type of content works best for roofing SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roofing content should follow the buyer's journey. Blogs, guides and FAQs answer early questions like \"metal vs asphalt roofing\". Service pages, case studies and testimonials help homeowners compare contractors. Location pages with clear calls to action, service details and easy contact options convert visitors who are ready to hire."
          }
        },
        {
          "@type": "Question",
          "name": "Should roofing companies create separate pages for each service and location?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Dedicated pages for services like roof repair, roof replacement, metal roofing and commercial roofing help search engines match your business with specific searches. If you operate in multiple areas, individual location pages help you appear for searches like \"roof repair in [city]\" or \"metal roofing in [suburb]\"."
          }
        },
        {
          "@type": "Question",
          "name": "How does off-page SEO help roofing contractors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Off-page SEO builds authority outside your website. It includes backlinks from home improvement and roofing industry websites, accurate listings on Google Business Profile, Yelp and local directories, guest posts on construction websites, partnerships with builders and property managers, and consistent online reviews."
          }
        },
        {
          "@type": "Question",
          "name": "How do customer reviews affect roofing SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Homeowners usually read several reviews before contacting a roofer, and a lack of reviews can send them to competitors. Encouraging satisfied clients to leave reviews and responding to them consistently strengthens local visibility, builds trust and leads to more calls and quote requests."
          }
        },
        {
          "@type": "Question",
          "name": "What technical SEO does a roofing website need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A roofing website needs fast loading speeds through image compression, caching and good hosting, a mobile-friendly design for urgent searches, secure browsing, clear navigation with descriptive URLs, an XML sitemap, schema markup and regular technical audits to fix broken links and errors."
          }
        },
        {
          "@type": "Question",
          "name": "Why is local SEO important for roofing contractors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most roofing searches are local, such as \"roofers near me\" or \"best roofing company in [city]\". Local SEO covers Google Business Profile optimisation, reviews, location pages, consistent name, address and phone details across directories, and locally relevant content, helping nearby homeowners find and trust your business."
          }
        },
        {
          "@type": "Question",
          "name": "How do weather and seasons affect roofing SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Roofing searches change with the weather, the seasons and customer needs, from emergency repairs after storms to planned seasonal replacements. Continuously monitoring trends, updating content, refreshing keywords and optimising local listings helps roofing businesses stay visible when demand shifts."
          }
        },
        {
          "@type": "Question",
          "name": "How does AI search affect roofing SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Homeowners now ask conversational questions like \"how do I know if my roof needs replacement?\" in AI search and tools like ChatGPT, which combine information from multiple sources. Roofing websites need clear, well-structured content with service explanations, FAQs, simple headings and long-tail answers so AI systems can understand and reference them."
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
      {ROOFING_SEO_SCHEMA["@graph"].map((item, index) => (
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
