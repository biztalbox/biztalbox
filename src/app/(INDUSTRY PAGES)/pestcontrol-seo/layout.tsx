import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "SEO for Pest Control Companies: The Guide to More Calls & Customers",
  description:
    "Want more pest control customers from Google? Discover SEO strategies for pest control companies and expert SEO services for pest control that generate consistent leads.",
};

export const metadata = createMetadata(baseMetadata, "/pestcontrol-seo");

const PESTCONTROL_SEO_SCHEMA = {
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
      "@id": "https://biztalbox.com/pestcontrol-seo#webpage",
      "url": "https://biztalbox.com/pestcontrol-seo",
      "name": "SEO for Pest Control Companies: The Guide to More Calls & Customers",
      "headline": "SEO for Pest Control Companies: The Guide to More Calls & Customers",
      "description": "Want more pest control customers from Google? Discover SEO strategies for pest control companies and expert SEO services for pest control that generate consistent leads.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://biztalbox.com/#website"
      },
      "breadcrumb": {
        "@id": "https://biztalbox.com/pestcontrol-seo#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://biztalbox.com/pestcontrol-seo#service"
      },
      "hasPart": {
        "@id": "https://biztalbox.com/pestcontrol-seo#faq"
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
          "name": "Pest control",
          "sameAs": "https://en.wikipedia.org/wiki/Pest_control"
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
          "name": "Termite",
          "sameAs": "https://en.wikipedia.org/wiki/Termite"
        },
        {
          "@type": "Thing",
          "name": "Bed bug",
          "sameAs": "https://en.wikipedia.org/wiki/Bed_bug"
        },
        {
          "@type": "Thing",
          "name": "Cockroach",
          "sameAs": "https://en.wikipedia.org/wiki/Cockroach"
        },
        {
          "@type": "Thing",
          "name": "Rodent",
          "sameAs": "https://en.wikipedia.org/wiki/Rodent"
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
          "name": "Generative Engine Optimization (GEO)"
        },
        {
          "@type": "Thing",
          "name": "Google AI Mode"
        },
        {
          "@type": "Thing",
          "name": "E-E-A-T"
        }
      ],
      "keywords": "pest control SEO, SEO for pest control companies, pest control SEO services, pest control SEO agency, local SEO for pest control, exterminator SEO, pest control AI search optimization"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://biztalbox.com/pestcontrol-seo#breadcrumb",
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
          "name": "Pest Control SEO",
          "item": "https://biztalbox.com/pestcontrol-seo"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/pestcontrol-seo#service",
      "name": "Pest Control SEO Services",
      "alternateName": [
        "SEO for Pest Control Companies",
        "Pest Control SEO",
        "Exterminator SEO",
        "Local SEO for Pest Control"
      ],
      "serviceType": "Search Engine Optimization",
      "category": "Digital Marketing",
      "url": "https://biztalbox.com/pestcontrol-seo",
      "description": "SEO for residential and commercial pest control companies built around urgent, problem-led and location-driven searches. Covers service, problem and location keyword strategy, funnel-based content with E-E-A-T, seasonal pest activity optimisation, Google Business Profile and local SEO, reviews and citations, technical SEO with structured data, and GEO and AI search visibility.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "areaServed": "Worldwide",
      "audience": [
        {
          "@type": "BusinessAudience",
          "audienceType": "Residential pest control and exterminator companies"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Commercial pest control providers serving hospitality, food and healthcare businesses"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Small and growing local pest control businesses"
        }
      ],
      "offers": {
        "@type": "Offer",
        "name": "Free 30-minute consultation call",
        "description": "No-obligation consultation with expert advice tailored to your pest control business.",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://biztalbox.com/pestcontrol-seo",
        "seller": {
          "@id": "https://biztalbox.com/#organization"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Pest Control SEO Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Pest Control SEO by Customer Type",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/pestcontrol-seo#residential-pest-control-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/pestcontrol-seo#commercial-pest-control-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/pestcontrol-seo#pest-control-ai-search"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Pest Control Keyword Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Service-based keywords such as termite removal, rodent control and bed bug treatment"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Problem-based keywords describing infestations and pest sightings"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Location-based keywords for cities, neighbourhoods and service areas"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Pest Control Content Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Awareness content on pest signs and identification"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Consideration content on treatment methods and solutions"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Decision-stage booking and service area pages"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Preventive service plan and eco-friendly treatment content"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Seasonal pest activity content updates"
                }
              }
            ]
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Google Business Profile, NAP consistency and review strategy"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Off-page SEO through directories, local blogs and industry citations"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO with structured data for pest control websites"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Continuous optimisation and transparent performance reporting"
            }
          }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/pestcontrol-seo#residential-pest-control-seo",
      "name": "Residential Pest Control SEO",
      "serviceType": "Local SEO",
      "description": "SEO for pest control companies serving residential customers who search urgently after spotting termites, rodents, cockroaches or bed bugs. Focuses on problem-based and near-me keywords, map visibility, reviews and trust signals that reassure customers before a technician visits.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Residential pest control and exterminator companies"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/pestcontrol-seo#commercial-pest-control-seo",
      "name": "Commercial Pest Control SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for commercial pest control providers whose clients in hospitality, food and healthcare must maintain pest-free environments. Focuses on compliance-focused service content, preventive and recurring service plan pages, authority signals and visibility for property managers and business buyers.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Commercial pest control providers and their hospitality, food, healthcare and property management clients"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/pestcontrol-seo#pest-control-ai-search",
      "name": "AI Search Optimisation for Pest Control (GEO)",
      "serviceType": "Generative Engine Optimization",
      "description": "Optimisation for AI-driven search such as Google AI Mode and ChatGPT, structuring pest control content, FAQs and step-by-step answers so AI systems can understand a company's services, locations and expertise when people ask full conversational questions.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Pest control companies"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://biztalbox.com/pestcontrol-seo#faq",
      "isPartOf": {
        "@id": "https://biztalbox.com/pestcontrol-seo#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does SEO help pest control businesses get more customers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO helps pest control businesses get more customers by ensuring visibility in the right searches, maps, and directories. Because pest problems are urgent, customers mostly call the first trustworthy company they find. SEO aligns with this behavior, making your business appear when people search for pest removal, inspections, or treatments, helping convert urgent demand into real calls and bookings."
          }
        },
        {
          "@type": "Question",
          "name": "What SEO strategies work best for pest control companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best SEO strategies for pest control companies include a strong keyword strategy, content strategy, local SEO, off-page SEO, and technical SEO. This includes service-based, problem-based, and location-based keywords, funnel-based content (awareness, consideration, decision), internal linking, seasonal updates, Google Business Profile optimization, and structured website performance improvements like speed and mobile usability."
          }
        },
        {
          "@type": "Question",
          "name": "How does local SEO improve pest control business visibility?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Local SEO ensures pest control businesses appear when nearby homeowners search for solutions. It includes Google Business Profile optimization, consistent contact details, and location-focused content like “rodent control in [city]”. Reviews also build trust and improve visibility. This helps businesses show up in local searches and connect directly with customers in their service areas."
          }
        },
        {
          "@type": "Question",
          "name": "Why is SEO important for pest control services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO is important because pest control customers search only when something goes wrong and need immediate solutions. Without SEO, businesses lose these opportunities. SEO increases visibility, builds trust through repeated search presence, and helps businesses appear when people search for urgent pest issues, making it essential for capturing demand at the right moment."
          }
        },
        {
          "@type": "Question",
          "name": "How do pest control websites generate leads through SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pest control websites generate leads through SEO by attracting solution-driven searches. The blog explains that traffic becomes more relevant, conversations become shorter, and leads are easier to convert with proper SEO. When users search for pest problems, SEO ensures they land on service pages that match their intent, leading to direct calls and bookings."
          }
        },
        {
          "@type": "Question",
          "name": "What type of content works best for pest control SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best content follows a funnel approach: awareness content like pest signs and identification, consideration content explaining solutions and methods, and decision content like booking or service pages. FAQs also help capture long-tail searches. Strong content builds trust, educates homeowners, and guides them toward choosing pest control services."
          }
        },
        {
          "@type": "Question",
          "name": "How do Google rankings affect pest control businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google rankings directly impact visibility and customer acquisition. Search engines rank companies based on relevance, clarity, and usefulness—not brand size. Higher rankings mean appearing more often in searches, ahead of competitors, and in front of customers actively searching for pest control services, which increases calls and bookings."
          }
        },
        {
          "@type": "Question",
          "name": "What are service-based keywords in pest control SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Service-based keywords include terms like termite removal, rodent control, and bed bug treatment. These are used by people who already know what service they need. Optimizing for these keywords helps businesses appear directly when users are searching for specific pest solutions."
          }
        },
        {
          "@type": "Question",
          "name": "Why are location-based keywords important for pest control SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Location-based keywords like “pest control in [city]” or “exterminator near me” are essential because pest control is a local service. These keywords ensure businesses appear in nearby searches and help small companies compete with larger brands in their service areas."
          }
        },
        {
          "@type": "Question",
          "name": "How does SEO give pest control companies a competitive advantage?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO gives pest control businesses an edge because search engines rank companies based on relevance and usefulness, not brand size. This allows smaller companies to compete with established brands by appearing in relevant searches more often and ahead of competitors relying only on ads or reputation."
          }
        },
        {
          "@type": "Question",
          "name": "What kind of blog content should pest control companies create for users who are just noticing pest problems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Awareness stage content educates users who are just noticing pest problems. Examples include “How to spot termite activity in your home” or “Common signs of a cockroach infestation.” It builds trust and positions the business as a knowledgeable expert early in the journey."
          }
        },
        {
          "@type": "Question",
          "name": "What type of content helps pest control customers compare different providers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Consideration stage content targets users who already know their pest issue and are comparing solutions. Examples include “Effective ways to remove bed bugs from a bedroom” or “Rodent control methods that work,” showing expertise and building confidence in the service."
          }
        },
        {
          "@type": "Question",
          "name": "What content helps convert users who are ready to book pest control services immediately?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Decision stage content focuses on users ready to act immediately. Examples include “Schedule termite removal in [city]” or “Book rodent control services near me.” This content includes location details and clear calls to action that encourage quick bookings."
          }
        },
        {
          "@type": "Question",
          "name": "Why is E-E-A-T important in pest control SEO content?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness. It ensures pest control content is reliable and credible. Sharing real tips, proven solutions, and trustworthy advice helps improve rankings and increases customer confidence in hiring the business."
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
      {PESTCONTROL_SEO_SCHEMA["@graph"].map((item, index) => (
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
