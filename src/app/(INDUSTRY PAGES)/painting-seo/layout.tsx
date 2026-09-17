import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "SEO Services for Painting Contractors & Companies",
  description:
    "Increase visibility for your painting business with targeted SEO strategies. Drive traffic, generate leads, and grow your customer base.",
};

export const metadata = createMetadata(baseMetadata, "/painting-seo");

const PAINTING_SEO_SCHEMA = {
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
      "@id": "https://biztalbox.com/painting-seo#webpage",
      "url": "https://biztalbox.com/painting-seo",
      "name": "SEO Services for Painting Contractors & Companies",
      "headline": "The Definitive Guide to Painting Services SEO: Benefits, Proven SEO Strategies, and Business Growth",
      "description": "Increase visibility for your painting business with targeted SEO strategies. Drive traffic, generate leads, and grow your customer base.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://biztalbox.com/#website"
      },
      "breadcrumb": {
        "@id": "https://biztalbox.com/painting-seo#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://biztalbox.com/painting-seo#service"
      },
      "hasPart": {
        "@id": "https://biztalbox.com/painting-seo#faq"
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
          "name": "House painter and decorator",
          "sameAs": "https://en.wikipedia.org/wiki/House_painter_and_decorator"
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
          "name": "Painting",
          "sameAs": "https://en.wikipedia.org/wiki/Painting"
        },
        {
          "@type": "Thing",
          "name": "Waterproofing",
          "sameAs": "https://en.wikipedia.org/wiki/Waterproofing"
        },
        {
          "@type": "Thing",
          "name": "Google Business Profile",
          "sameAs": "https://en.wikipedia.org/wiki/Google_Business_Profile"
        },
        {
          "@type": "Thing",
          "name": "Google Map Pack"
        },
        {
          "@type": "Thing",
          "name": "NAP consistency"
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
      "keywords": "painting SEO, SEO for painting companies, painting contractor SEO, painter SEO, local SEO for painters, painting SEO services, commercial painting SEO, house painting SEO"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://biztalbox.com/painting-seo#breadcrumb",
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
          "name": "Painting SEO",
          "item": "https://biztalbox.com/painting-seo"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/painting-seo#service",
      "name": "Painting SEO Services",
      "alternateName": [
        "SEO for Painting Companies",
        "Painting Contractor SEO",
        "Painter SEO",
        "House Painting SEO"
      ],
      "serviceType": "Search Engine Optimization",
      "category": "Digital Marketing",
      "url": "https://biztalbox.com/painting-seo",
      "description": "SEO for residential and commercial painting contractors built around urgent, local, trust-heavy and visual search behaviour. Covers informational, service-based, local and high-intent keyword strategy, educational, service, location and portfolio-driven trust content, citations, reviews, local backlinks and social and portfolio visibility, technical SEO for image-heavy websites, deep local SEO with Google Business Profile and service area pages, and AIO and GEO for AI-driven search.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "areaServed": "Worldwide",
      "audience": [
        {
          "@type": "BusinessAudience",
          "audienceType": "Residential and house painting contractors"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Commercial painting companies"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Painters and decorators competing in local micro-markets"
        }
      ],
      "offers": {
        "@type": "Offer",
        "name": "Free 30-minute consultation call",
        "description": "No-obligation consultation with expert advice tailored to your painting business.",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://biztalbox.com/painting-seo",
        "seller": {
          "@id": "https://biztalbox.com/#organization"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Painting SEO Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Painting SEO by Service Type",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/painting-seo#interior-painting-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/painting-seo#exterior-painting-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/painting-seo#commercial-painting-seo"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Painting Keyword Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Informational keywords on paint types, cost and finishes"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Service-based keywords for interior, exterior and commercial painting"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Local keywords for near-me and city searches"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "High-intent keywords for hiring painters"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Painting Content Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Educational guides on paint cost, types and maintenance"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Service pages for interior, exterior and commercial painting"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Location and service area pages"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Trust content with before-after photos, project galleries and case studies"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Off-Page SEO for Painters",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Local citations and business listings"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Google reviews and detailed customer feedback"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Local backlinks from interior designers, real estate and home service sites"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Portfolio and social proof on Instagram, Facebook and Google"
                }
              }
            ]
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO for image-heavy painting websites"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Local SEO with Google Business Profile and service area visibility"
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
      "@id": "https://biztalbox.com/painting-seo#interior-painting-seo",
      "name": "Interior Painting SEO",
      "serviceType": "Local SEO",
      "description": "SEO for interior and residential painting services, targeting near-me and cost-related searches, paint finish and colour content, before-after project galleries and reviews that reassure homeowners inviting painters into their homes.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Interior and residential painting contractors"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/painting-seo#exterior-painting-seo",
      "name": "Exterior Painting & Waterproofing SEO",
      "serviceType": "Local SEO",
      "description": "SEO for exterior painting and waterproofing services, focused on weather and durability related searches, texture finish content, exterior project proof and local visibility for homeowners repainting or protecting building exteriors.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Exterior painting and waterproofing contractors"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/painting-seo#commercial-painting-seo",
      "name": "Commercial Painting SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for commercial painting companies serving offices, retail stores and hotels, focused on higher-intent business-scale keywords, service pages for larger projects and trust content for clients where appearance affects customer perception.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Commercial painting companies"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://biztalbox.com/painting-seo#faq",
      "isPartOf": {
        "@id": "https://biztalbox.com/painting-seo#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is painting SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Painting SEO is the process of optimising a painting business online so it appears when people search for services like \"painters near me\" or \"home painting services\". It helps search engines understand your services, connect them to real demand, and rank your business in local results and maps."
          }
        },
        {
          "@type": "Question",
          "name": "Why do painting companies need SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Customers are moving away from referrals and starting with an online search. They compare options, look at past work and decide within minutes. If your painting business is not visible when that decision is being made, you are left out, no matter how good your work is."
          }
        },
        {
          "@type": "Question",
          "name": "What keywords should painting businesses target?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Painting businesses should target informational keywords like \"types of interior paint finishes\", service-based keywords like \"exterior house painting\", local keywords like \"painters near me\" or \"painting services in [city]\", and high-intent keywords like \"affordable house painters near me\" that are directly tied to hiring."
          }
        },
        {
          "@type": "Question",
          "name": "What content helps a painting business win more projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Content should follow the customer journey: educational guides on cost and paint types build early familiarity, service pages clearly explain interior, exterior and commercial painting, location pages capture nearby demand, and trust content like before-after photos, real project images and small case studies helps customers decide."
          }
        },
        {
          "@type": "Question",
          "name": "Why is local SEO so important for painters?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Painting is a hyper-local, high-intent decision. People search for painters in a specific area and choose from the short list that appears first. Local SEO, including Google Business Profile, location and service-area pages, consistent listings, local keywords and reviews, ensures you appear at the exact point where users are ready to book."
          }
        },
        {
          "@type": "Question",
          "name": "How important is a Google Business Profile for a painting company?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For most users, the Google Business Profile is the first real interaction with a painting company. They look at project photos, reviews, areas covered and responsiveness before even visiting the website. An incomplete or inactive listing makes users move on instantly, so a complete, active profile is essential."
          }
        },
        {
          "@type": "Question",
          "name": "How do reviews affect painting SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For painting services, customers value detailed reviews over star ratings alone. Reviews that mention specifics like on-time work, a clean finish or careful covering of the home reduce hesitation. A few honest, detailed reviews can influence decisions more than a high rating with no detail, and they also strengthen local visibility."
          }
        },
        {
          "@type": "Question",
          "name": "Why do before-and-after photos matter for painting SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Painting is a visual service, so people want to see results before they trust a contractor. Before-after images, work-in-progress shots and finished project galleries on your website, Instagram, Facebook and Google Business Profile act as proof of quality and support your SEO by reinforcing credibility across multiple places."
          }
        },
        {
          "@type": "Question",
          "name": "What backlinks help a painting business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Painting companies benefit most from relevant, local links, such as mentions from interior designers, real estate agents, home service platforms and local websites. You do not need hundreds of links; even a few relevant, context-matched mentions help search engines take your business more seriously."
          }
        },
        {
          "@type": "Question",
          "name": "What technical SEO does a painting website need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Painting websites usually have many project images, so they need image compression and fast loading, a mobile-friendly design with easy-to-click buttons, a clear structure from services to pricing to contact, proper indexing with internal links and a sitemap, and HTTPS security to build trust and support rankings."
          }
        },
        {
          "@type": "Question",
          "name": "How does AI search affect painting companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google's AI Overviews and tools like ChatGPT and Perplexity now answer questions such as \"cost of interior painting\" or \"how long does a 2BHK painting take\" directly. To be included, painting content needs clear service blocks like interior, exterior and waterproofing, question-led answers, structured formatting and consistent business details across the web."
          }
        },
        {
          "@type": "Question",
          "name": "Is SEO better than ads for a painting business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ads only generate visibility while you keep paying, and referrals cannot be scaled predictably. SEO builds visibility on your own website that compounds over time, giving you more control over how and where your business appears and a steadier flow of high-intent enquiries."
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
      {PAINTING_SEO_SCHEMA["@graph"].map((item, index) => (
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
