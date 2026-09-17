import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "Automotive SEO Services: Strategy and Business Growth",
  description:
    "Is your automotive business hard to find online? Discover automotive SEO services, their benefits, and strategies to improve visibility and drive growth.",
};

export const metadata = createMetadata(baseMetadata, "/automotive-seo");

const AUTOMOTIVE_SEO_SCHEMA = {
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
      "@id": "https://biztalbox.com/automotive-seo#webpage",
      "url": "https://biztalbox.com/automotive-seo",
      "name": "Automotive SEO Services: Strategy and Business Growth",
      "headline": "The Complete Guide to Automotive SEO: Rank Higher, Attract Buyers, and Grow Your Auto Business",
      "description": "Is your automotive business hard to find online? Discover automotive SEO services, their benefits, and strategies to improve visibility and drive growth.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://biztalbox.com/#website"
      },
      "breadcrumb": {
        "@id": "https://biztalbox.com/automotive-seo#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://biztalbox.com/automotive-seo#service"
      },
      "hasPart": {
        "@id": "https://biztalbox.com/automotive-seo#faq"
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
          "name": "Automotive industry",
          "sameAs": "https://en.wikipedia.org/wiki/Automotive_industry"
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
          "name": "Car dealership",
          "sameAs": "https://en.wikipedia.org/wiki/Car_dealership"
        },
        {
          "@type": "Thing",
          "name": "Automobile repair shop",
          "sameAs": "https://en.wikipedia.org/wiki/Automobile_repair_shop"
        },
        {
          "@type": "Thing",
          "name": "Automotive aftermarket",
          "sameAs": "https://en.wikipedia.org/wiki/Automotive_aftermarket"
        },
        {
          "@type": "Thing",
          "name": "Electric vehicle",
          "sameAs": "https://en.wikipedia.org/wiki/Electric_vehicle"
        },
        {
          "@type": "Thing",
          "name": "Advanced driver-assistance system",
          "sameAs": "https://en.wikipedia.org/wiki/Advanced_driver-assistance_system"
        },
        {
          "@type": "Thing",
          "name": "Over-the-air update",
          "sameAs": "https://en.wikipedia.org/wiki/Over-the-air_update"
        },
        {
          "@type": "Thing",
          "name": "Google Business Profile",
          "sameAs": "https://en.wikipedia.org/wiki/Google_Business_Profile"
        },
        {
          "@type": "Thing",
          "name": "Google Maps",
          "sameAs": "https://en.wikipedia.org/wiki/Google_Maps"
        },
        {
          "@type": "Thing",
          "name": "Google AI Overviews"
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
      "keywords": "automotive SEO, SEO for automotive companies, automotive SEO services, automotive SEO agency, car dealership SEO, auto repair SEO, automotive parts SEO, local SEO for automotive businesses"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://biztalbox.com/automotive-seo#breadcrumb",
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
          "name": "Automotive SEO",
          "item": "https://biztalbox.com/automotive-seo"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/automotive-seo#service",
      "name": "Automotive SEO Services",
      "alternateName": [
        "SEO for Automotive Companies",
        "Automotive Industry SEO",
        "Auto SEO",
        "Automotive SEO Marketing"
      ],
      "serviceType": "Search Engine Optimization",
      "category": "Digital Marketing",
      "url": "https://biztalbox.com/automotive-seo",
      "description": "SEO for car dealerships, auto repair shops, service centres and automotive parts sellers. Covers informational, navigational, commercial, transactional and local keyword strategy, funnel-based content with internal linking from symptom and comparison content to service, product and booking pages, E-E-A-T, reviews, listings and backlinks, technical SEO with make, model and compatibility site structures, Google Business Profile and Maps optimisation, and AIO and GEO for AI-driven search.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "areaServed": "Worldwide",
      "audience": [
        {
          "@type": "BusinessAudience",
          "audienceType": "New and used car dealerships"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Auto repair shops, garages and service centres"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Automotive parts, tyre and accessories sellers"
        }
      ],
      "offers": {
        "@type": "Offer",
        "name": "Free 30-minute consultation call",
        "description": "No-obligation consultation with expert advice tailored to your automotive business.",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://biztalbox.com/automotive-seo",
        "seller": {
          "@id": "https://biztalbox.com/#organization"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Automotive SEO Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Automotive SEO by Business Type",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/automotive-seo#dealership-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/automotive-seo#auto-repair-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/automotive-seo#auto-parts-seo"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Automotive Keyword Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Informational keywords for car problems and ownership questions"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Navigational brand, dealership and service centre keywords"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial keywords for vehicle, service and tyre comparisons"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Transactional keywords for bookings, test drives and part purchases"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Local keywords across every stage of the automotive search journey"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Automotive Content Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Top-of-funnel car problem and buying guides"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Mid-funnel vehicle, service cost and parts comparison content"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Bottom-of-funnel service, booking and product pages"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Internal linking from symptom and comparison content to conversion pages"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "E-E-A-T focused and regularly updated automotive content"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Technical SEO for Automotive Websites",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Fast, secure and mobile-ready automotive websites"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Site structure by make, model, service category and part compatibility"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Descriptive URLs, titles and structured data for vehicles, products and services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Broken link, duplicate content and performance fixes"
                }
              }
            ]
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Google Business Profile, Google Maps and location page optimisation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Off-page SEO through reviews, automotive directories, local listings and quality backlinks"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AIO and GEO for Google AI Overviews and AI Mode"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Continuous optimisation for changing automotive demand"
            }
          }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/automotive-seo#dealership-seo",
      "name": "Car Dealership SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for new and used car dealerships that keeps them visible from early vehicle research to test drive bookings. Focuses on buying guides, model comparison and pricing pages, make and model inventory structure, brand and location searches that would otherwise go to listing platforms, and reviews about staff and post-sale service.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "New and used car dealerships"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/automotive-seo#auto-repair-seo",
      "name": "Auto Repair Shop & Service Centre SEO",
      "serviceType": "Local SEO",
      "description": "SEO for auto repair shops, garages and service centres built around symptom-based and urgent near-me searches. Focuses on car problem guides linked to service pages, service categories such as engine, AC and tyres, clear booking flows, Google Maps visibility and reviews about service quality, price transparency and turnaround time.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Auto repair shops, garages and service centres"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/automotive-seo#auto-parts-seo",
      "name": "Automotive Parts SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for automotive parts, tyre and accessories sellers targeting searches that include exact product names, specifications and vehicle compatibility. Focuses on detailed product pages, parts comparison guides, category structures by part type and compatibility, and product structured data.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Automotive parts, tyre and accessories sellers"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://biztalbox.com/automotive-seo#faq",
      "isPartOf": {
        "@id": "https://biztalbox.com/automotive-seo#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is automotive SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Automotive SEO is the process of optimising your website and online presence so your business appears when people search for vehicles, automotive services or parts online. It helps search engines understand your services, inventory, location and relevance, so your business reaches customers when they need a car, a repair or a part."
          }
        },
        {
          "@type": "Question",
          "name": "Which automotive businesses benefit from SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dealerships, repair shops, service centres, parts sellers and other automotive service providers all benefit from SEO. Each relies on search differently: dealerships need visibility during vehicle research, service centres need to appear for urgent repair searches, and parts sellers need to capture customers searching for specific products."
          }
        },
        {
          "@type": "Question",
          "name": "What keywords should automotive businesses target?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Automotive businesses should target informational keywords like \"why is my car overheating\", navigational keywords for their own brand and location, commercial keywords like \"best car service center in Delhi\", transactional keywords like \"book car service near me\", and local keywords like \"car repair in [city]\" across every stage."
          }
        },
        {
          "@type": "Question",
          "name": "How does SEO help car dealerships sell more vehicles?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO keeps a dealership visible from early research to the final visit. Content like \"best cars for city driving\" supports early interest, comparison pages like \"Hyundai Creta vs Kia Seltos\" help buyers evaluate options, and optimised local and brand pages ensure buyers find the dealership instead of listing platforms when they are ready to book a test drive."
          }
        },
        {
          "@type": "Question",
          "name": "How does SEO help auto repair shops get more service bookings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Repair shops can publish guides that explain car problems and link them to relevant service pages, such as an overheating guide leading to a radiator repair page. Combined with strong visibility for \"near me\" searches and reviews about service quality, pricing transparency and turnaround time, this turns urgent searches into bookings."
          }
        },
        {
          "@type": "Question",
          "name": "How can automotive parts sellers use SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Parts buyers often search using exact product names, specifications or vehicle compatibility, such as \"buy brake pads for 2018 Honda City\". Parts sellers should create detailed product pages, comparison guides like \"ceramic vs semi-metallic brake pads\", and a site structure that groups products by type and compatibility."
          }
        },
        {
          "@type": "Question",
          "name": "What content works best for automotive SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Automotive content should follow the customer journey: problem-focused guides at the top of the funnel, detailed comparisons and cost explanations in the middle, and clear service, booking and product pages at the bottom. Internal links should connect symptom-based content to service pages and comparison content to booking or product pages."
          }
        },
        {
          "@type": "Question",
          "name": "Why is local SEO important for automotive businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Automotive decisions are often local and immediate, so customers choose from the businesses they see first on Google and Maps. A complete Google Business Profile, accurate and consistent listings, strong reviews and location pages like \"Reliable Brake Repairs in [City]\" help turn nearby searches into calls, visits and sales."
          }
        },
        {
          "@type": "Question",
          "name": "How do reviews affect automotive SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reviews are often the first filter customers use before even visiting a website. For repair shops, reviews about service quality, price transparency and turnaround times build confidence. For dealerships, reviews about staff and post-sale service matter most. Regularly requesting and responding to reviews also strengthens local visibility."
          }
        },
        {
          "@type": "Question",
          "name": "What technical SEO does an automotive website need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Automotive websites need fast loading, mobile-friendly design and HTTPS security. A clear structure should organise vehicles by make and model, services by category and parts by compatibility. Descriptive URLs and titles, structured data that reflects visible page content, and fixing broken links and duplicate pages all support better rankings."
          }
        },
        {
          "@type": "Question",
          "name": "How can smaller automotive businesses compete with large platforms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Large automotive platforms and aggregators dominate broad searches, but smaller businesses can win specific, high-intent searches those platforms often overlook. Owning your brand and location searches, building detailed service and product pages, and earning local reviews, listings and relevant backlinks help you compete without matching their scale."
          }
        },
        {
          "@type": "Question",
          "name": "How does AI search affect automotive SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google's AI Overviews and AI Mode now answer conversational questions like \"what's the best SUV under 15 lakhs?\" directly. To be included, automotive content must be clear, well structured and regularly updated, with direct answers, FAQs and comparisons. AI Optimization (AIO) and Generative Engine Optimization (GEO) help your content get understood and used in AI responses."
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
      {AUTOMOTIVE_SEO_SCHEMA["@graph"].map((item, index) => (
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
