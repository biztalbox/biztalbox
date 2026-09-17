import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "SEO for Home Service Businesses: Guide to Sustainable Growth",
  description:
    "Learn proven SEO strategies for home service businesses to boost local rankings, generate qualified leads, and achieve long term, sustainable growth online. Now",
};

export const metadata = createMetadata(baseMetadata, "/home-services");

const HOME_SERVICES_SEO_SCHEMA = {
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
      "@id": "https://biztalbox.com/home-services#webpage",
      "url": "https://biztalbox.com/home-services",
      "name": "SEO for Home Service Businesses: Guide to Sustainable Growth",
      "headline": "SEO for Home Service Businesses: The Ultimate Guide to Sustainable Growth",
      "description": "Proven SEO strategies for home service businesses to boost local rankings, generate qualified leads, and achieve long-term, sustainable growth online.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://biztalbox.com/#website"
      },
      "breadcrumb": {
        "@id": "https://biztalbox.com/home-services#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://biztalbox.com/home-services#service"
      },
      "hasPart": {
        "@id": "https://biztalbox.com/home-services#faq"
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
          "name": "Home improvement",
          "sameAs": "https://en.wikipedia.org/wiki/Home_improvement"
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
          "name": "Franchising",
          "sameAs": "https://en.wikipedia.org/wiki/Franchising"
        },
        {
          "@type": "Organization",
          "name": "TaskRabbit",
          "sameAs": "https://en.wikipedia.org/wiki/TaskRabbit"
        },
        {
          "@type": "Organization",
          "name": "Yelp",
          "sameAs": "https://en.wikipedia.org/wiki/Yelp"
        },
        {
          "@type": "Organization",
          "name": "Houzz",
          "sameAs": "https://en.wikipedia.org/wiki/Houzz"
        },
        {
          "@type": "Organization",
          "name": "Urban Company",
          "sameAs": "https://en.wikipedia.org/wiki/Urban_Company"
        },
        {
          "@type": "Organization",
          "name": "Thumbtack"
        },
        {
          "@type": "Organization",
          "name": "HomeAdvisor"
        }
      ],
      "keywords": "home services SEO, SEO for home service businesses, SEO for home service contractors, home improvement SEO services, local SEO for home services, home service franchise SEO, home services SEO agency"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://biztalbox.com/home-services#breadcrumb",
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
          "name": "Home Services SEO",
          "item": "https://biztalbox.com/home-services"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/home-services#service",
      "name": "Home Services SEO",
      "alternateName": [
        "SEO for Home Service Businesses",
        "SEO for Home Service Contractors",
        "Home Improvement SEO Services",
        "Home Services SEO Marketing"
      ],
      "serviceType": "Search Engine Optimization",
      "category": "Digital Marketing",
      "url": "https://biztalbox.com/home-services",
      "description": "SEO for home service contractors, home improvement companies and home service franchises, built around urgent, local and trust-sensitive search demand. Covers intent-based keyword strategy, service, location and problem-based content, reviews and citations, technical SEO, ongoing Google Maps and Google Business Profile management, and multi-location franchise SEO, with success measured by inbound calls, bookings and lead quality rather than traffic.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "areaServed": "Worldwide",
      "audience": [
        {
          "@type": "BusinessAudience",
          "audienceType": "Independent local home service contractors"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Multi-service contractors such as HVAC and plumbing companies"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Home improvement, renovation and remodeling companies"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Home service franchises and multi-location brands"
        }
      ],
      "offers": {
        "@type": "Offer",
        "name": "Free 30-minute consultation call",
        "description": "No-obligation consultation with expert advice tailored to your home service business.",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://biztalbox.com/home-services",
        "seller": {
          "@id": "https://biztalbox.com/#organization"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Home Services SEO",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Home Services SEO by Business Model",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/home-services#local-maps-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/home-services#home-improvement-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/home-services#franchise-seo"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "SEO by Home Service Trade",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "@id": "https://biztalbox.com/plumber-seo#service",
                  "name": "Plumbing SEO Services",
                  "url": "https://biztalbox.com/plumber-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "HVAC and AC Repair SEO"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Electrician SEO"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Home Cleaning Services SEO"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Kitchen Remodeling and Carpentry SEO"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Home Services SEO Methodology",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Urgency, research-stage and location-based keyword strategy"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Service, location and problem-based content"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Review management, citations and local mentions"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Technical SEO for home service websites"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Lead quality and call-based performance reporting"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/home-services#local-maps-seo",
      "name": "Local SEO & Google Maps Management for Home Services",
      "serviceType": "Local SEO",
      "description": "Ongoing Google Maps and Google Business Profile management for independent home service contractors, focused on defending service areas, review velocity, listing engagement, accurate business data and call actions within the business's real service radius.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Independent local home service contractors"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/home-services#home-improvement-seo",
      "name": "Home Improvement & Renovation SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for home improvement, renovation, remodeling and carpentry businesses whose customers research before hiring, focused on research-stage content about costs, timelines and causes, detailed service pages and trust signals on platforms like Houzz and Yelp.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Home improvement, renovation and remodeling companies"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/home-services#franchise-seo",
      "name": "Home Service Franchise & Multi-Location SEO",
      "serviceType": "Local SEO",
      "description": "Multi-location SEO for home service franchises that helps every branch rank independently without competing against other locations, using Google Business Profile governance, location-specific content frameworks and scalable local review strategies aligned with brand authority.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Home service franchises and multi-location brands"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://biztalbox.com/home-services#faq",
      "isPartOf": {
        "@id": "https://biztalbox.com/home-services#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is SEO for home service businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO for home service businesses is the process of improving your website, local presence, and online credibility so your business appears when homeowners search for services like “AC repair near me” or “emergency plumber today.” It helps businesses capture urgent, local, high-intent searches that often lead directly to calls and bookings."
          }
        },
        {
          "@type": "Question",
          "name": "How does SEO work for home service companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO works for home service companies by aligning services, locations, and trust signals with how homeowners search online. It improves visibility in Google search, Google Maps, service pages, and local listings so businesses appear when people search for urgent or location-based services like plumbing, electrical work, or repairs."
          }
        },
        {
          "@type": "Question",
          "name": "Why is SEO important for home service businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO is important for home service businesses because homeowners search online when they need immediate help. Businesses that appear first often get the call. SEO improves visibility during these high-intent moments and helps companies generate consistent enquiries, bookings, and long-term local trust."
          }
        },
        {
          "@type": "Question",
          "name": "Is SEO worth it for home service companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, SEO is worth it for home service companies because it creates a long-term source of organic leads instead of relying completely on paid ads or aggregators. SEO helps businesses attract homeowners actively searching for services, leading to more qualified enquiries and lower customer acquisition costs over time."
          }
        },
        {
          "@type": "Question",
          "name": "How to find SEO keywords for home service businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Home service businesses can find SEO keywords by understanding how homeowners search during urgent situations or service needs. Keywords often include local searches, problem-based searches, and urgency-driven terms like “emergency plumber near me,” “AC repair today,” or “water heater installation near me.”"
          }
        },
        {
          "@type": "Question",
          "name": "Why are Google reviews important for home service businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google reviews are important because homeowners often check ratings and feedback before contacting a service provider. Reviews help build trust, improve local search visibility, and influence booking decisions. Positive reviews about service quality, professionalism, and response time can directly increase calls and conversions."
          }
        },
        {
          "@type": "Question",
          "name": "How does home services SEO marketing generate more leads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Home services SEO marketing generates leads by helping businesses appear for searches with immediate intent, such as “emergency electrician near me” or “kitchen remodeling near me.” These searches usually come from homeowners actively looking to hire someone, which increases the chances of calls, enquiries, and confirmed bookings."
          }
        },
        {
          "@type": "Question",
          "name": "How does local SEO help home service businesses grow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Local SEO helps home service businesses grow by improving visibility in Google Maps, local searches, and nearby service queries. When homeowners search for “electrician near me” or “plumber in [city],” local SEO ensures your business appears where decisions are being made, increasing calls and bookings."
          }
        },
        {
          "@type": "Question",
          "name": "Why is Google Maps important for home service companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google Maps is important because many high-intent actions like calls, navigation requests, and same-day bookings come directly from map listings. For home service businesses, Google Maps often becomes the first point of decision where customers compare ratings, reviews, and proximity before contacting a provider."
          }
        },
        {
          "@type": "Question",
          "name": "What does a home services SEO agency actually do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A home services SEO agency improves search visibility through keyword strategy, local SEO, technical SEO, content creation, Google Business Profile optimization, review management, and service-area targeting. The goal is to help businesses appear when homeowners search for urgent or local home services online."
          }
        },
        {
          "@type": "Question",
          "name": "How does SEO improve trust for home service businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO improves trust by increasing consistent visibility across Google search, Google Maps, reviews, and service-related content. Homeowners associate businesses that appear frequently with credibility and reliability, especially when they see accurate listings, positive reviews, and clear service information online."
          }
        },
        {
          "@type": "Question",
          "name": "Is SEO better than paid ads for home service companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO creates long-term visibility and a steady flow of organic enquiries, while paid ads stop producing results when budgets end. Home services SEO marketing compounds over time through rankings, reviews, and local authority, making it a more sustainable growth channel for many contractors and service providers."
          }
        },
        {
          "@type": "Question",
          "name": "What is the role of Google Business Profile in home services SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google Business Profile helps businesses appear in Google Maps and local searches. Accurate business information, reviews, service details, photos, and active listing management improve visibility and trust. For home service businesses, this profile often becomes the first interaction homeowners have before making contact."
          }
        },
        {
          "@type": "Question",
          "name": "Does SEO reduce dependence on home service aggregators?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO helps businesses generate direct enquiries through their own website instead of relying completely on aggregators that charge per lead. Ranking organically for searches like “kitchen remodeling near me” allows businesses to control pricing, customer communication, and follow-ups without paying ongoing commission fees."
          }
        },
        {
          "@type": "Question",
          "name": "What makes SEO for home service franchises different?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Home service franchise SEO requires each location to rank independently while maintaining overall brand consistency. Without structured optimization, franchise branches may compete against each other in search results. Effective franchise SEO includes location-specific pages, local reviews, and Google Business Profile management for every branch."
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
      {HOME_SERVICES_SEO_SCHEMA["@graph"].map((item, index) => (
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
