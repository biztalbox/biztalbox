import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "Manufacturing SEO Services for Higher Rankings and More Leads",
  description:
    "Struggling to get manufacturing leads online? Discover manufacturing seo services, their benefits, and strategies to improve visibility and growth.",
};

export const metadata = createMetadata(baseMetadata, "/manufacturing-seo");

const MANUFACTURING_SEO_SCHEMA = {
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
      "@id": "https://biztalbox.com/manufacturing-seo#webpage",
      "url": "https://biztalbox.com/manufacturing-seo",
      "name": "Manufacturing SEO Services for Higher Rankings and More Leads",
      "headline": "The Ultimate Manufacturing SEO Guide: How It Works and How to Create a Strong Strategy for Business Growth",
      "description": "Struggling to get manufacturing leads online? Discover manufacturing SEO services, their benefits, and strategies to improve visibility and growth.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://biztalbox.com/#website"
      },
      "breadcrumb": {
        "@id": "https://biztalbox.com/manufacturing-seo#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://biztalbox.com/manufacturing-seo#service"
      },
      "hasPart": {
        "@id": "https://biztalbox.com/manufacturing-seo#faq"
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
          "name": "Manufacturing",
          "sameAs": "https://en.wikipedia.org/wiki/Manufacturing"
        },
        {
          "@type": "Thing",
          "name": "Business-to-business",
          "sameAs": "https://en.wikipedia.org/wiki/Business-to-business"
        }
      ],
      "mentions": [
        {
          "@type": "Thing",
          "name": "Numerical control (CNC machining)",
          "sameAs": "https://en.wikipedia.org/wiki/Numerical_control"
        },
        {
          "@type": "Thing",
          "name": "Metal fabrication",
          "sameAs": "https://en.wikipedia.org/wiki/Metal_fabrication"
        },
        {
          "@type": "Thing",
          "name": "Injection moulding",
          "sameAs": "https://en.wikipedia.org/wiki/Injection_moulding"
        },
        {
          "@type": "Thing",
          "name": "3D printing (additive manufacturing)",
          "sameAs": "https://en.wikipedia.org/wiki/3D_printing"
        },
        {
          "@type": "Thing",
          "name": "Automation",
          "sameAs": "https://en.wikipedia.org/wiki/Automation"
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
          "name": "People Also Ask"
        },
        {
          "@type": "Thing",
          "name": "E-E-A-T"
        }
      ],
      "keywords": "manufacturing SEO, SEO for manufacturing companies, manufacturing SEO services, B2B manufacturing SEO, industrial SEO, manufacturing SEO consultant, SEO agency for manufacturing companies, local SEO for manufacturers"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://biztalbox.com/manufacturing-seo#breadcrumb",
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
          "name": "Manufacturing SEO",
          "item": "https://biztalbox.com/manufacturing-seo"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/manufacturing-seo#service",
      "name": "Manufacturing SEO Services",
      "alternateName": [
        "SEO for Manufacturing Companies",
        "B2B Manufacturing SEO",
        "Industrial SEO",
        "Manufacturing SEO Marketing"
      ],
      "serviceType": "Search Engine Optimization",
      "category": "Digital Marketing",
      "url": "https://biztalbox.com/manufacturing-seo",
      "description": "B2B SEO for manufacturers, fabricators, contract manufacturers and industrial product suppliers built around precise, specification-driven buyer searches and long evaluation cycles. Covers informational, commercial, transactional and navigational keyword strategy, funnel-based content showing capabilities, materials, processes and certifications, industry backlinks, trade publication mentions and partnerships, technical SEO for catalog and PDF-heavy websites, local and regional SEO, and AI search optimisation.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "areaServed": "Worldwide",
      "audience": [
        {
          "@type": "BusinessAudience",
          "audienceType": "Contract manufacturers, machine shops and metal fabricators"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Industrial product, component and parts manufacturers"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Small and mid-sized manufacturers competing with larger companies"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Manufacturers expanding into new regions and markets"
        }
      ],
      "offers": {
        "@type": "Offer",
        "name": "Free 30-minute consultation call",
        "description": "No-obligation consultation with expert advice tailored to your manufacturing business.",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://biztalbox.com/manufacturing-seo",
        "seller": {
          "@id": "https://biztalbox.com/#organization"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Manufacturing SEO Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Manufacturing SEO by Business Type",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/manufacturing-seo#contract-manufacturing-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/manufacturing-seo#industrial-products-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/manufacturing-seo#regional-manufacturing-seo"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Manufacturing Keyword Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Informational keywords for processes, materials and manufacturing methods"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial keywords for supplier comparison"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Transactional keywords for orders, quotes and service scheduling"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Navigational brand, contact and review keywords"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Manufacturing Content Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Top-of-funnel educational content on manufacturing processes"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Mid-funnel case studies, comparisons and supplier selection guides"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Bottom-of-funnel process, materials, pricing and timeline content"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "E-E-A-T focused capability and certification pages"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Off-Page SEO for Manufacturers",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Backlinks from industry sites, suppliers and manufacturing associations"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Trade publication mentions and industry PR"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Guest articles and thought leadership on industry platforms"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Partnerships with distributors, suppliers and trade organisations"
                }
              }
            ]
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO for image, catalog and PDF-heavy manufacturing websites"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Structured data for products, services and company details"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI search optimisation for AI summaries, ChatGPT, Perplexity and Gemini"
            }
          }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/manufacturing-seo#contract-manufacturing-seo",
      "name": "Contract Manufacturing & Fabrication SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for contract manufacturers, machine shops and fabricators offering services such as CNC machining, sheet metal fabrication and plastic injection molding. Focuses on capability and process pages, certifications and quality standards, industries served, case studies and supplier comparison searches that lead to quote requests.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Contract manufacturers, machine shops and metal fabricators"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/manufacturing-seo#industrial-products-seo",
      "name": "Industrial Products & Components SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for manufacturers of industrial products, parts and components targeting specification-driven and transactional searches such as custom aluminum heat sinks or industrial rubber gaskets. Focuses on detailed product pages, materials and specifications, optimised catalogs and technical PDFs, and product structured data.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Industrial product, component and parts manufacturers"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/manufacturing-seo#regional-manufacturing-seo",
      "name": "Local & Regional Manufacturing SEO",
      "serviceType": "Local SEO",
      "description": "Local and regional SEO for manufacturers covering consistent business details across directories, Google Business Profile optimisation, region and industry-specific landing pages, client reviews, regional industry listings and location structured data, helping manufacturers win nearby buyers and reach new regional markets without physical expansion.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Manufacturers targeting regional buyers or expanding into new markets"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://biztalbox.com/manufacturing-seo#faq",
      "isPartOf": {
        "@id": "https://biztalbox.com/manufacturing-seo#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is manufacturing SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Manufacturing SEO is the process of optimising a manufacturer's website so it appears in search results when potential clients are actively looking for relevant products, capabilities or expertise. It helps search engines and buyers clearly understand what you produce, the industries you serve and the standards you meet."
          }
        },
        {
          "@type": "Question",
          "name": "Why do manufacturing companies need SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Industrial buyers research online before contacting suppliers, often completing most of their research before speaking to a salesperson. If your business is not visible when they search, it is not considered, even if your capabilities are strong. SEO keeps your company visible throughout the buyer's research."
          }
        },
        {
          "@type": "Question",
          "name": "How is manufacturing SEO different from regular SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Manufacturing searches are highly specific. Buyers look for parts made to exact specifications, particular materials or suppliers with certain accreditations. Manufacturing SEO focuses on precision rather than volume, attracting fewer but more qualified visitors who are actively searching for what you make."
          }
        },
        {
          "@type": "Question",
          "name": "What keywords should manufacturers target for SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Manufacturers should target informational keywords like \"how plastic injection molding works\", commercial keywords like \"best CNC machining companies\", transactional keywords like \"order custom aluminum heat sinks\", and navigational keywords for their own brand, contact details and reviews, covering every stage of the buyer's journey."
          }
        },
        {
          "@type": "Question",
          "name": "What type of content works best for manufacturing SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Manufacturing content should follow the buyer's journey. Educational content like \"What is sheet metal fabrication?\" builds early awareness, case studies and comparison guides support evaluation, and pages explaining your manufacturing process, materials, pricing and timelines give buyers the reassurance they need to make contact."
          }
        },
        {
          "@type": "Question",
          "name": "What should a manufacturing website clearly show buyers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A manufacturing website should clearly state what you produce, your manufacturing capabilities and processes, the materials you work with, the industries you serve and the certifications or standards you meet. When this technical information is presented in a clear, structured way, buyers can evaluate your business quickly."
          }
        },
        {
          "@type": "Question",
          "name": "Can small manufacturers compete with large companies in search results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Many manufacturing companies still rely on traditional methods and have not fully optimised their digital presence. With a focused SEO strategy built around specific capabilities, processes and products, smaller manufacturers can appear alongside much larger businesses when buyers search."
          }
        },
        {
          "@type": "Question",
          "name": "Can SEO help manufacturers reach buyers in new regions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Buyers often care more about capability than location, so a website that clearly presents your capabilities can appear in searches from regions and markets you have never targeted. SEO helps manufacturers reach new opportunities without opening new offices or expanding physically."
          }
        },
        {
          "@type": "Question",
          "name": "How does off-page SEO work for manufacturing companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Off-page SEO for manufacturers includes backlinks from industry sites, suppliers and manufacturing associations, listings in niche manufacturing directories, mentions in trade publications, guest articles on industry platforms and collaborations with distributors and trade organisations. These signals build authority with search engines and buyers."
          }
        },
        {
          "@type": "Question",
          "name": "What technical SEO does a manufacturing website need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Manufacturing websites need optimised images, catalogs and technical PDFs for fast loading, mobile-friendly design, a clear structure linking services, industries and products, proper crawlability and indexing, secure browsing and structured data that helps search engines understand your products, services and company details."
          }
        },
        {
          "@type": "Question",
          "name": "Does local SEO matter for manufacturing businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Many buyers prefer suppliers in their own region because communication is easier and deliveries are faster. Consistent business details across directories, an optimised Google Business Profile, region-specific pages, client reviews and regional industry listings help manufacturers appear for nearby, high-intent searches."
          }
        },
        {
          "@type": "Question",
          "name": "How does AI search affect manufacturing SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI-generated summaries and platforms like ChatGPT, Perplexity AI and Google Gemini now combine information from multiple sources to answer questions directly. Manufacturing content that answers specific questions about processes, materials and certifications in a clear, structured way is more likely to be included in these answers."
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
      {MANUFACTURING_SEO_SCHEMA["@graph"].map((item, index) => (
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
