import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "Plumbing SEO Agency | Biztalbox – Get More Local Leads",
  description:
    "Biztalbox helps plumbing companies rank higher, generate high-intent local leads, and reduce ad spend with proven SEO strategies. Book a free consult today.",
};

export const metadata = createMetadata(baseMetadata, "/plumber-seo");

const PLUMBER_SEO_SCHEMA = {
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
      "@id": "https://biztalbox.com/plumber-seo#webpage",
      "url": "https://biztalbox.com/plumber-seo",
      "name": "Plumbing SEO Agency | Biztalbox – Get More Local Leads",
      "headline": "Plumbing SEO That Turns Local Searches Into Booked Appointments Without the Guesswork",
      "description": "Biztalbox helps plumbing companies rank higher, generate high-intent local leads, and reduce ad spend with proven SEO strategies. Book a free consult today.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://biztalbox.com/#website"
      },
      "breadcrumb": {
        "@id": "https://biztalbox.com/plumber-seo#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://biztalbox.com/plumber-seo#service"
      },
      "hasPart": {
        "@id": "https://biztalbox.com/plumber-seo#faq"
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
          "name": "Plumbing",
          "sameAs": "https://en.wikipedia.org/wiki/Plumbing"
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
          "name": "Google Map Pack"
        },
        {
          "@type": "Thing",
          "name": "NAP consistency"
        },
        {
          "@type": "Organization",
          "name": "Yelp",
          "sameAs": "https://en.wikipedia.org/wiki/Yelp"
        },
        {
          "@type": "Organization",
          "name": "Angi",
          "sameAs": "https://en.wikipedia.org/wiki/Angi_(company)"
        }
      ],
      "keywords": "plumbing SEO, plumber SEO, SEO for plumbers, plumbing SEO agency, local SEO for plumbers, plumbing company SEO, SEO services for plumbing contractors"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://biztalbox.com/plumber-seo#breadcrumb",
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
          "name": "Plumbing SEO",
          "item": "https://biztalbox.com/plumber-seo"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/plumber-seo#service",
      "name": "Plumbing SEO Services",
      "alternateName": [
        "Plumber SEO",
        "SEO for Plumbers",
        "SEO for Plumbing Companies",
        "SEO Services for Plumbing Contractors"
      ],
      "serviceType": "Search Engine Optimization",
      "category": "Digital Marketing",
      "url": "https://biztalbox.com/plumber-seo",
      "description": "SEO for plumbing companies and plumbing contractors built around urgent, planned, commercial and research-stage search intent. Covers plumbing keyword strategy, conversion-focused service and location pages, Google Business Profile and map pack optimisation, citations and reviews, off-page authority, technical SEO and transparent reporting tied to calls, bookings and leads.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "areaServed": "Worldwide",
      "audience": [
        {
          "@type": "BusinessAudience",
          "audienceType": "Residential plumbing companies and emergency plumbers"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Commercial plumbing contractors"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Plumbing businesses serving multiple cities or service areas"
        }
      ],
      "offers": {
        "@type": "Offer",
        "name": "Free 30-minute consultation call",
        "description": "No-obligation consultation with expert advice tailored to your plumbing business.",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://biztalbox.com/plumber-seo",
        "seller": {
          "@id": "https://biztalbox.com/#organization"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Plumbing SEO Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Plumbing SEO by Search Intent",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/plumber-seo#emergency-plumbing-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/plumber-seo#planned-service-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/plumber-seo#commercial-plumbing-seo"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Local SEO for Plumbers",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Google Business Profile and map pack optimisation"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "NAP consistency across Google, Yelp, Angi and local directories"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Local citations and review strategy"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Service area location pages and local schema markup"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Conversion-Focused Plumbing Content",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Dedicated plumbing service pages"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Pre-call content on pricing factors, timelines and visit process"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Search-based plumbing FAQs and educational resources"
                }
              }
            ]
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Plumbing keyword strategy and search intent mapping"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Off-page SEO through trade directories, supplier sites and local publications"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO for plumbing websites"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Ongoing optimisation and transparent call, booking and lead reporting"
            }
          }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/plumber-seo#emergency-plumbing-seo",
      "name": "Emergency Plumbing SEO",
      "serviceType": "Local SEO",
      "description": "SEO for urgent, location-specific plumbing searches such as plumber near me, burst pipe repair and blocked drain repair, focused on map pack visibility, fast mobile pages and one-tap contact options so the business wins the call first.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Emergency and 24/7 plumbers"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/plumber-seo#planned-service-seo",
      "name": "Plumbing Installation & Planned Service SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for planned plumbing work such as water heater installation, pipe replacement and bathroom renovation plumbing, focused on detailed service pages, pricing and timeline content, and research-stage keywords that keep the business visible while customers compare providers.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Residential plumbing installation and maintenance companies"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/plumber-seo#commercial-plumbing-seo",
      "name": "Commercial Plumbing SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for commercial plumbing contractors whose clients evaluate providers over longer cycles, focused on demonstrating reliability, compliance and capacity through authoritative service content, industry citations and trusted off-page mentions.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Commercial plumbing contractors"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://biztalbox.com/plumber-seo#faq",
      "isPartOf": {
        "@id": "https://biztalbox.com/plumber-seo#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is plumbing SEO and how does it help plumbing companies get more calls?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Plumbing SEO is the process of making a plumbing business visible when people search for plumbing services online. It clearly shows search engines what services you offer, where you operate and how reputable you are, so your business appears at the moment customers need help and gets the call instead of a competitor."
          }
        },
        {
          "@type": "Question",
          "name": "Why is local SEO important for plumbers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Plumbing demand is local. A plumbing business competes within its service radius, not across the internet, and most customers choose the nearest reliable plumber. Local SEO helps search engines understand where you operate so your business appears for nearby, high-intent searches like \"plumber near me\" or \"blocked drain repair in [city]\"."
          }
        },
        {
          "@type": "Question",
          "name": "How does a Google Business Profile help plumbers appear in the map pack?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "When people search for plumbing services, Google shows three nearby businesses in the map pack with reviews, photos, hours and contact details. Keeping your Google Business Profile accurate with the right service categories, business hours, photos and regular updates improves your chances of appearing there and turning searches into calls."
          }
        },
        {
          "@type": "Question",
          "name": "What keywords should plumbing companies target?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Plumbing companies should target four types of searches: urgent keywords like \"blocked drain repair near me\", planned service keywords like \"water heater installation [city]\", local keywords like \"plumber [suburb]\", and pre-booking questions like \"cost of water heater repair in [city]\". Covering all four captures leads at every stage of the customer journey."
          }
        },
        {
          "@type": "Question",
          "name": "How does SEO help plumbers win emergency plumbing jobs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Emergency searches are short, location-specific and urgent, and customers usually call the first trustworthy business nearby. SEO puts your business at the top of these results with clear service information, strong reviews and easy contact options, so you are chosen before the customer calls a competitor."
          }
        },
        {
          "@type": "Question",
          "name": "Should every plumbing service have its own page?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Each major service, such as drain cleaning, water heater repair, leak detection or pipe replacement, should have a dedicated page explaining common symptoms, when professional help is needed and what happens next. Specific service pages improve relevance for service-based searches and help customers trust you enough to call."
          }
        },
        {
          "@type": "Question",
          "name": "Do plumbing companies need separate pages for each service area?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you serve multiple cities or neighbourhoods, dedicated location pages help search engines understand your service areas. Each page should include real local context, such as older plumbing infrastructure in one area or high-rise apartment systems in another, so it feels genuinely useful rather than a duplicated template."
          }
        },
        {
          "@type": "Question",
          "name": "How do reviews and citations affect plumbing SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reviews act as social proof, and citations on local directories, trade platforms and supplier websites confirm your business is real and active. Keeping your name, address, phone number and service details consistent across Google, Yelp, Angi and other platforms reduces customer hesitation and strengthens local rankings."
          }
        },
        {
          "@type": "Question",
          "name": "What technical SEO does a plumbing website need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A plumbing website needs fast loading times, a mobile-friendly design, clear service page structure and easy access to contact details, because most plumbing searches happen on phones during urgent situations. Technical SEO also fixes broken pages, indexing issues and poor site architecture that quietly cost rankings and calls."
          }
        },
        {
          "@type": "Question",
          "name": "Is SEO better than paid ads for plumbing companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Paid ads stop generating visibility as soon as spending stops. Plumbing SEO builds visibility that compounds over time, delivering a steady flow of high-intent leads without ongoing ad spend. For most plumbing businesses, this means more predictable growth and a stronger long-term return on marketing investment."
          }
        },
        {
          "@type": "Question",
          "name": "What website content helps turn visitors into booked plumbing jobs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Customers want reassurance before they call. Content that explains pricing factors, expected timelines and what happens during a visit reduces hesitation. Helpful resources such as early signs of pipe damage or what to do before the plumber arrives also build trust, making your business the safe choice when a problem escalates."
          }
        },
        {
          "@type": "Question",
          "name": "How do I choose the right SEO agency for my plumbing business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Choose an agency that understands plumbing is urgent and trust-driven rather than using generic templates. The right partner should optimise for emergency, planned and local searches, keep refining keywords, content and listings as demand shifts, and give transparent reporting that connects SEO work to calls, bookings and leads."
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
      {PLUMBER_SEO_SCHEMA["@graph"].map((item, index) => (
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
