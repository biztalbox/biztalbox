import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "Electrician SEO: Strategies That Turn Google Searches Into Service Calls",
  description:
    "The ultimate electrician SEO guide covering strategies, search rankings, local SEO visibility, and how electricians turn Google searches into real service calls.",
};

export const metadata = createMetadata(baseMetadata, "/electrician-seo");

const ELECTRICIAN_SEO_SCHEMA = {
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
      "@id": "https://biztalbox.com/electrician-seo#webpage",
      "url": "https://biztalbox.com/electrician-seo",
      "name": "Electrician SEO: Strategies That Turn Google Searches Into Service Calls",
      "headline": "Electrician SEO: Understanding Search Visibility, SEO Strategies, and How Electricians Attract Customers Online",
      "description": "The ultimate electrician SEO guide covering strategies, search rankings, local SEO visibility, and how electricians turn Google searches into real service calls.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://biztalbox.com/#website"
      },
      "breadcrumb": {
        "@id": "https://biztalbox.com/electrician-seo#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://biztalbox.com/electrician-seo#service"
      },
      "hasPart": {
        "@id": "https://biztalbox.com/electrician-seo#faq"
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
          "name": "Electrician",
          "sameAs": "https://en.wikipedia.org/wiki/Electrician"
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
          "name": "Electrical wiring",
          "sameAs": "https://en.wikipedia.org/wiki/Electrical_wiring"
        },
        {
          "@type": "Thing",
          "name": "Circuit breaker",
          "sameAs": "https://en.wikipedia.org/wiki/Circuit_breaker"
        },
        {
          "@type": "Thing",
          "name": "Distribution board",
          "sameAs": "https://en.wikipedia.org/wiki/Distribution_board"
        },
        {
          "@type": "Thing",
          "name": "Solar power",
          "sameAs": "https://en.wikipedia.org/wiki/Solar_power"
        },
        {
          "@type": "Thing",
          "name": "Google Business Profile",
          "sameAs": "https://en.wikipedia.org/wiki/Google_Business_Profile"
        },
        {
          "@type": "Thing",
          "name": "HTTPS",
          "sameAs": "https://en.wikipedia.org/wiki/HTTPS"
        },
        {
          "@type": "Thing",
          "name": "Schema.org",
          "sameAs": "https://en.wikipedia.org/wiki/Schema.org"
        },
        {
          "@type": "Thing",
          "name": "Your Money or Your Life (YMYL)"
        },
        {
          "@type": "Thing",
          "name": "E-E-A-T"
        }
      ],
      "keywords": "electrician SEO, SEO for electricians, electrician SEO services, electrician SEO agency, local SEO for electricians, electrical contractor SEO, SEO for electrician companies"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://biztalbox.com/electrician-seo#breadcrumb",
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
          "name": "Electrician SEO",
          "item": "https://biztalbox.com/electrician-seo"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/electrician-seo#service",
      "name": "Electrician SEO Services",
      "alternateName": [
        "SEO for Electricians",
        "SEO for Electrician Companies",
        "Electrical Contractor SEO",
        "Local SEO for Electricians"
      ],
      "serviceType": "Search Engine Optimization",
      "category": "Digital Marketing",
      "url": "https://biztalbox.com/electrician-seo",
      "description": "SEO for residential, commercial and industrial electricians built around urgent, safety-sensitive search intent. Covers service, location, problem and decision-stage keyword strategy, funnel-based content with YMYL and E-E-A-T trust signals, local business listings, reviews and backlinks, technical SEO with local service schema, Google Business Profile and service area pages, and AI search readiness.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "areaServed": "Worldwide",
      "audience": [
        {
          "@type": "BusinessAudience",
          "audienceType": "Residential and emergency electricians"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Commercial electrical contractors"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Industrial electrical service companies"
        }
      ],
      "offers": {
        "@type": "Offer",
        "name": "Free 30-minute consultation call",
        "description": "No-obligation consultation with expert advice tailored to your electrical business.",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://biztalbox.com/electrician-seo",
        "seller": {
          "@id": "https://biztalbox.com/#organization"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Electrician SEO Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Electrician SEO by Sector",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/electrician-seo#residential-electrician-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/electrician-seo#commercial-electrician-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/electrician-seo#local-electrician-seo"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Electrician Keyword Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Service-based keywords such as fuse box replacement and house rewiring"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Location-driven keywords for cities, neighbourhoods and service areas"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Problem-based keywords for electrical symptoms and faults"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial and decision-stage keywords for certified and reliable electricians"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Electrician Content Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Awareness-stage electrical safety guides and troubleshooting FAQs"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Consideration-stage service pages for panel upgrades and rewiring"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Decision-stage emergency and licensed electrician pages"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "YMYL and E-E-A-T aligned electrical content"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Energy efficiency, solar integration and compliance content"
                }
              }
            ]
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Off-page SEO through local citations, reviews, mentions and relevant backlinks"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO including speed, mobile design, HTTPS, crawlability and local service schema"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI search and conversational query optimisation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Transparent reporting on search visibility and enquiries"
            }
          }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/electrician-seo#residential-electrician-seo",
      "name": "Residential & Emergency Electrician SEO",
      "serviceType": "Local SEO",
      "description": "SEO for electricians serving homeowners during urgent situations such as power loss, tripping breakers or a burning smell from a switchboard. Focuses on problem-based and emergency keywords, fast mobile pages, clear call options and safety-focused trust signals.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Residential and emergency electricians"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/electrician-seo#commercial-electrician-seo",
      "name": "Commercial & Industrial Electrical Contractor SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for commercial and industrial electrical contractors whose clients evaluate experience, certifications, compliance with electrical codes and capacity for installation, maintenance and infrastructure upgrade projects.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Commercial and industrial electrical contractors"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/electrician-seo#local-electrician-seo",
      "name": "Local SEO for Electricians",
      "serviceType": "Local SEO",
      "description": "Local SEO for electricians covering Google Business Profile optimisation, service area and location pages, consistent NAP listings, customer reviews and locally relevant content such as seasonal safety tips and upgrades for older homes.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Electricians serving multiple towns, suburbs or neighbourhoods"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://biztalbox.com/electrician-seo#faq",
      "isPartOf": {
        "@id": "https://biztalbox.com/electrician-seo#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is electrician SEO and how does it help electrical businesses get found online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Electrician SEO is the process of improving an electrical company’s visibility when people search for electrical services online. It helps search engines understand what services your business offers, where you operate, and who you serve. This improves your chances of appearing in local search results and turning online searches into real service calls."
          }
        },
        {
          "@type": "Question",
          "name": "Why is SEO important for electrician companies today?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most customers now search online before hiring an electrician. They compare businesses, read reviews, and usually contact the company that appears first and looks trustworthy. SEO helps electrician companies appear in those important search moments, increasing visibility, enquiries, and booked jobs instead of relying only on referrals."
          }
        },
        {
          "@type": "Question",
          "name": "How do electrician businesses appear in search results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Search engines evaluate how clearly an electrician website explains its services, service locations, and overall trustworthiness. They also analyse how users interact with the website over time. Clear and consistent information helps search engines confidently recommend an electrician business in related searches"
          }
        },
        {
          "@type": "Question",
          "name": "How does electrician SEO generate more leads and enquiries?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Electrician SEO focuses on attracting people who already need electrical help and are ready to take action. Better visibility leads to more website visits, more calls, and more enquiry forms. Since these visitors already have strong intent, the chances of converting them into paying customers become much higher."
          }
        },
        {
          "@type": "Question",
          "name": "How does local SEO help electricians attract nearby customers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Local SEO helps electricians appear in location-based searches like “electrician near me” or “licensed electrician in Gurgaon.” It improves visibility across maps, local listings, and service area searches, making it easier for nearby homeowners and businesses to discover and contact the company."
          }
        },
        {
          "@type": "Question",
          "name": "What keywords should electricians target for SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Electricians should target keywords that match how real customers search when they need electrical help. This includes service-based searches like “house rewiring electrician,” location-focused searches like “electrician in Gurgaon,” problem-based searches like “lights flickering in house causes,” and high-intent keywords such as “licensed electrician near me” or “emergency electrician for power failure.”"
          }
        },
        {
          "@type": "Question",
          "name": "Why are service-based keywords important in electrician SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Service-based keywords directly describe the work customers need. Searches like “commercial electrical wiring services” or “house rewiring electrician” show clear intent. These keywords help search engines understand your services while also connecting your business with users ready to hire an electrician."
          }
        },
        {
          "@type": "Question",
          "name": "Why is E-E-A-T important for electrician websites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Electrical services fall under Your Money or Your Life (YMYL) topics because inaccurate information can affect safety and financial well-being. Search engines therefore prioritise websites that demonstrate experience, expertise, authority, and trustworthiness through reliable and professionally written content."
          }
        },
        {
          "@type": "Question",
          "name": "What type of content works best for electrician SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Content that answers real customer questions performs best for electrician SEO. This includes service pages, FAQs, electrical safety guides, troubleshooting articles, local service pages, and educational content related to common electrical problems and repair situations."
          }
        },
        {
          "@type": "Question",
          "name": "What is off-page SEO for electricians?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Off-page SEO includes all signals outside the website that strengthen trust and visibility. This includes local business listings, customer reviews, backlinks, online mentions, and citations. These signals help search engines confirm that the electrician business is legitimate and trusted within its local area."
          }
        },
        {
          "@type": "Question",
          "name": "Is SEO worth it for electricians?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. SEO creates long-term visibility that continues generating enquiries even without constant advertising spend. It helps electricians attract high-intent local customers, strengthen trust, improve local visibility, and build a steady flow of enquiries over time."
          }
        },
        {
          "@type": "Question",
          "name": "How should electricians write SEO-friendly content?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO-friendly electrician content should focus on clarity, relevance, and real customer intent. It should answer practical questions, explain services clearly, and help users understand electrical problems and solutions. Strong content also demonstrates expertise, trustworthiness, and real industry experience."
          }
        },
        {
          "@type": "Question",
          "name": "Why is technical SEO important for electrician websites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Technical SEO improves how search engines access and understand the website. It focuses on website speed, mobile responsiveness, secure browsing, crawlability, and clear navigation. These improvements support better rankings while also improving user experience."
          }
        },
        {
          "@type": "Question",
          "name": "How do electrician SEO agencies help electrical businesses grow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Electrician SEO agencies improve search visibility, optimise websites for local searches, strengthen technical performance, build trust signals, and align content with customer intent. Their goal is to help electrical businesses generate more qualified leads, more service calls, and long-term business growth."
          }
        },
        {
          "@type": "Question",
          "name": "What are the different types of keywords electricians should target for SEO? Give examples.",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Electricians should target different keyword types based on how customers search for electrical services online: Service-based keywords: “fuse box replacement electrician,” “commercial electrical wiring services”. Location-based keywords: “electrician in Manchester”. Problem-based keywords: “burning smell from switchboard,” “no electricity in one room”. Commercial intent keywords: “best electrician for home wiring,” “certified electrician near me”."
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
      {ELECTRICIAN_SEO_SCHEMA["@graph"].map((item, index) => (
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
