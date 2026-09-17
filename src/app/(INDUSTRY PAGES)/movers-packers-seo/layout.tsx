import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "Movers and Packers SEO Strategy Guide: Improve Visibility & Rankings",
  description:
    "Learn how SEO can transform your movers and packers business. Discover tips to improve rankings, drive traffic, and grow your online presence.",
};

export const metadata = createMetadata(baseMetadata, "/movers-packers-seo");

const MOVERS_PACKERS_SEO_SCHEMA = {
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
      "@id": "https://biztalbox.com/movers-packers-seo#webpage",
      "url": "https://biztalbox.com/movers-packers-seo",
      "name": "Movers and Packers SEO Strategy Guide: Improve Visibility & Rankings",
      "headline": "The Complete Movers and Packers SEO Strategy Guide: Visibility, Leads, and Business Growth",
      "description": "Learn how SEO can transform your movers and packers business. Discover tips to improve rankings, drive traffic, and grow your online presence.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://biztalbox.com/#website"
      },
      "breadcrumb": {
        "@id": "https://biztalbox.com/movers-packers-seo#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://biztalbox.com/movers-packers-seo#service"
      },
      "hasPart": {
        "@id": "https://biztalbox.com/movers-packers-seo#faq"
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
          "name": "Moving company",
          "sameAs": "https://en.wikipedia.org/wiki/Moving_company"
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
          "name": "Relocation",
          "sameAs": "https://en.wikipedia.org/wiki/Relocation_(personal)"
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
          "name": "Google AI Mode"
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
          "name": "E-E-A-T"
        }
      ],
      "keywords": "movers and packers SEO, packers and movers SEO, SEO for movers and packers, movers and packers SEO services, local SEO for packers and movers, relocation SEO, moving company SEO"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://biztalbox.com/movers-packers-seo#breadcrumb",
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
          "name": "Movers & Packers SEO",
          "item": "https://biztalbox.com/movers-packers-seo"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/movers-packers-seo#service",
      "name": "Movers and Packers SEO Services",
      "alternateName": [
        "Packers and Movers SEO",
        "SEO for Movers and Packers",
        "Relocation SEO",
        "Moving Company SEO"
      ],
      "serviceType": "Search Engine Optimization",
      "category": "Digital Marketing",
      "url": "https://biztalbox.com/movers-packers-seo",
      "description": "SEO for movers and packers built around urgent, high-intent, location-based relocation searches with fast decisions. Covers informational, local, service-based, urgency and high-intent keyword strategy, educational, service, location and trust content with visual proof, reviews, context-matched backlinks and partnerships, technical SEO, deep local SEO with Google Business Profile, map pack and service area pages, and AIO and GEO for AI-driven search.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "areaServed": "Worldwide",
      "audience": [
        {
          "@type": "BusinessAudience",
          "audienceType": "Home and household relocation companies"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Office and commercial relocation companies"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Vehicle transport and specialised moving services"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Movers and packers operating across multiple cities or service areas"
        }
      ],
      "offers": {
        "@type": "Offer",
        "name": "Free 30-minute consultation call",
        "description": "No-obligation consultation with expert advice tailored to your movers and packers business.",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://biztalbox.com/movers-packers-seo",
        "seller": {
          "@id": "https://biztalbox.com/#organization"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Movers and Packers SEO Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Movers and Packers SEO by Move Type",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/movers-packers-seo#home-shifting-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/movers-packers-seo#office-relocation-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/movers-packers-seo#vehicle-transport-seo"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Movers and Packers Keyword Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Informational keywords on moving cost and process"
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
                  "name": "Service-based keywords for specific move types"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Urgency and situation keywords for same-day and last-minute moves"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "High-intent keywords for hiring movers"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Movers and Packers Content Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Educational and seasonal moving guides"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Detailed service pages for each move type"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "City-specific location pages"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Trust content with photos, videos and customer experiences"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Local SEO for Movers and Packers",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Google Business Profile optimisation and map pack visibility"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Location-based review signals and NAP consistency"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Service area pages and local citations"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Local backlinks and partnerships with real estate agents and property managers"
                }
              }
            ]
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Off-page SEO through reviews, context-matched backlinks, brand mentions and visual proof"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO for movers and packers websites"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AIO and GEO for ChatGPT, Google AI Mode and AI answers"
            }
          }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/movers-packers-seo#home-shifting-seo",
      "name": "Home Shifting & Household Relocation SEO",
      "serviceType": "Local SEO",
      "description": "SEO for household movers targeting urgent and high-intent home shifting searches. Focuses on near-me and city keywords, cost and process content, safe handling of fragile items, visual proof and reviews, and map pack visibility during the short consideration window.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Home and household relocation companies"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/movers-packers-seo#office-relocation-seo",
      "name": "Office & Commercial Relocation SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for office and corporate movers, focused on service pages that explain how office relocation is handled without disrupting work, corporate shifting keywords, and trust content for businesses relocating teams and equipment.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Office and commercial relocation companies"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/movers-packers-seo#vehicle-transport-seo",
      "name": "Vehicle Transport & Specialised Moving SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for vehicle transport and specialised moving services such as car transport and fragile or high-value item moving, focused on service-specific keywords, safe-handling proof and content that reassures customers moving valuable or delicate goods.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Vehicle transport and specialised moving companies"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://biztalbox.com/movers-packers-seo#faq",
      "isPartOf": {
        "@id": "https://biztalbox.com/movers-packers-seo#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is movers and packers SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Movers and packers SEO is the process of making a relocation business appear on search engines when someone is actively looking for shifting services. It aligns your visibility with high-intent searches so your business shows up at the moment users are ready to compare options and book a move."
          }
        },
        {
          "@type": "Question",
          "name": "Why do movers and packers companies need SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Customers no longer rely mainly on referrals. They search online, compare top-ranking websites, read reviews and decide quickly. If your business is not visible in that short consideration window, the opportunity is lost before any conversation begins, so SEO puts you in front of ready-to-move customers."
          }
        },
        {
          "@type": "Question",
          "name": "What keywords should movers and packers target?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Moving companies should target informational keywords like \"cost of house shifting\", local keywords like \"packers and movers near me\", service-based keywords like \"office relocation service\", urgency keywords like \"same day shifting service\", and high-intent keywords like \"hire moving company\"."
          }
        },
        {
          "@type": "Question",
          "name": "What content helps a moving company win bookings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Because moving is a high-trust, high-risk service, content should reduce doubt at every step. Educational content explains the process and cost, service pages describe exactly how each move is handled, location pages target specific cities, and trust content like photos, videos and customer experiences reassures users before they book."
          }
        },
        {
          "@type": "Question",
          "name": "Why is local SEO so important for movers and packers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "People usually search for movers only when they are ready to shift, with urgency and little browsing. Decisions follow quickly based on what appears first. If a business is not visible in local results and the map pack, it is effectively out of the decision entirely, no matter how good the service is."
          }
        },
        {
          "@type": "Question",
          "name": "How can movers rank in the Google map pack?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Map pack visibility depends on a complete, up-to-date Google Business Profile with photos, reviews, service details and contact information, along with engagement signals like calls, clicks and direction requests. Consistent business details across directories and location-specific reviews also strengthen local ranking."
          }
        },
        {
          "@type": "Question",
          "name": "Should moving companies create separate location pages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Searches for movers are highly location-specific, and users prefer companies in their exact area over general city results. Dedicated pages for each location or service area improve relevance and capture high-intent local searches such as \"house shifting services in [city]\"."
          }
        },
        {
          "@type": "Question",
          "name": "How do reviews and visual proof affect movers and packers SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Customers read reviews for signs of safe handling, punctuality and how problems were resolved, and a few honest, detailed reviews often matter more than a perfect rating. Photos and videos of packing quality, loading and delivered items act as proof of execution and make the service feel more reliable."
          }
        },
        {
          "@type": "Question",
          "name": "What kind of backlinks help a moving business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Context-matched backlinks carry the most weight. Links from real estate platforms, relocation blogs and home service sites match the service and build genuine authority, while random or unrelated links add little value. Offline partnerships with real estate agents and property managers also strengthen local credibility."
          }
        },
        {
          "@type": "Question",
          "name": "What technical SEO does a movers and packers website need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A moving website needs fast loading with optimised images, a strong mobile experience with clear call and enquiry buttons, an easy structure that makes pricing, service and contact pages accessible, proper indexing with sitemaps and internal linking, and HTTPS security to protect the personal details users share when enquiring."
          }
        },
        {
          "@type": "Question",
          "name": "How does AI search affect movers and packers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Users increasingly ask full questions in tools like ChatGPT and Google's AI Mode, such as \"which movers are reliable near me?\" or \"what is the cost of house shifting and how does it work?\". These answers combine multiple sources, so businesses need clear, well-structured content, step-by-step service breakdowns and FAQs to be included."
          }
        },
        {
          "@type": "Question",
          "name": "Is SEO better than ads for a moving business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Paid ads stop generating leads the moment you stop spending, while SEO builds gradually and keeps producing enquiries over time. For movers and packers, SEO is one of the most affordable and reliable long-term channels, reducing dependence on ads and aggregator platforms for a steady flow of bookings."
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
      {MOVERS_PACKERS_SEO_SCHEMA["@graph"].map((item, index) => (
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
