import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "Hotel SEO Services | Rank Higher on Google & Get Bookings",
  description:
    "Boost your hotel's online visibility with proven SEO strategies. Drive local traffic, improve rankings, and increase direct reservations.",
};

export const metadata = createMetadata(baseMetadata, "/hotel-seo");

const HOTEL_SEO_SCHEMA = {
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
      "@id": "https://biztalbox.com/hotel-seo#webpage",
      "url": "https://biztalbox.com/hotel-seo",
      "name": "Hotel SEO Services | Rank Higher on Google & Get Bookings",
      "headline": "Hotel SEO: Winning Direct Demand in a Competitive Hospitality Market",
      "description": "Boost your hotel's online visibility with proven SEO strategies. Drive local traffic, improve rankings, and increase direct reservations.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://biztalbox.com/#website"
      },
      "breadcrumb": {
        "@id": "https://biztalbox.com/hotel-seo#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://biztalbox.com/hotel-seo#service"
      },
      "hasPart": {
        "@id": "https://biztalbox.com/hotel-seo#faq"
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
          "name": "Hotel",
          "sameAs": "https://en.wikipedia.org/wiki/Hotel"
        },
        {
          "@type": "Thing",
          "name": "Hospitality industry",
          "sameAs": "https://en.wikipedia.org/wiki/Hospitality_industry"
        }
      ],
      "mentions": [
        {
          "@type": "Thing",
          "name": "Online travel agency",
          "sameAs": "https://en.wikipedia.org/wiki/Online_travel_agency"
        },
        {
          "@type": "Thing",
          "name": "RevPAR",
          "sameAs": "https://en.wikipedia.org/wiki/RevPAR"
        },
        {
          "@type": "Thing",
          "name": "Average daily rate",
          "sameAs": "https://en.wikipedia.org/wiki/Average_daily_rate"
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
          "name": "Core Web Vitals"
        },
        {
          "@type": "Organization",
          "name": "Booking.com",
          "sameAs": "https://en.wikipedia.org/wiki/Booking.com"
        },
        {
          "@type": "Organization",
          "name": "Expedia",
          "sameAs": "https://en.wikipedia.org/wiki/Expedia"
        },
        {
          "@type": "Organization",
          "name": "Agoda",
          "sameAs": "https://en.wikipedia.org/wiki/Agoda"
        },
        {
          "@type": "Organization",
          "name": "Trivago",
          "sameAs": "https://en.wikipedia.org/wiki/Trivago"
        },
        {
          "@type": "Organization",
          "name": "MakeMyTrip",
          "sameAs": "https://en.wikipedia.org/wiki/MakeMyTrip"
        }
      ],
      "keywords": "hotel SEO, SEO for hotels, hotel SEO services, hotel SEO agency, resort SEO, local SEO for hotels, hotel website SEO, direct bookings"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://biztalbox.com/hotel-seo#breadcrumb",
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
          "name": "Hotel SEO",
          "item": "https://biztalbox.com/hotel-seo"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/hotel-seo#service",
      "name": "Hotel SEO Services",
      "alternateName": [
        "SEO for Hotels",
        "Hotel SEO Agency",
        "Hospitality SEO",
        "Hotel Website SEO"
      ],
      "serviceType": "Search Engine Optimization",
      "category": "Digital Marketing",
      "url": "https://biztalbox.com/hotel-seo",
      "description": "Hotel SEO for boutique hotels, independent hotels, resorts and hotel restaurants focused on increasing direct bookings and reducing OTA dependence. Covers intent-based keyword mapping, technical and mobile SEO, destination content clusters, Google Business Profile and local SEO, E-E-A-T, AI Overview visibility and optimised offer, cancellation and loyalty pages, reported against booking KPIs like direct revenue, occupancy, ADR and RevPAR.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "areaServed": "Worldwide",
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Boutique hotels, independent hotels, resorts and hotels with restaurants, bars and cafes"
      },
      "offers": {
        "@type": "Offer",
        "name": "Free 30-minute consultation call",
        "description": "No-obligation consultation with expert advice tailored to your hotel or resort.",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://biztalbox.com/hotel-seo",
        "seller": {
          "@id": "https://biztalbox.com/#organization"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Hotel SEO Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Hotel SEO by Property Type",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/hotel-seo#hotel-website-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/hotel-seo#resort-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/hotel-seo#hotel-restaurant-seo"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Hotel SEO Methodology",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Intent-based hotel keyword mapping"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Technical and mobile SEO for hotel websites"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Destination-driven content clusters"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Google Business Profile and local SEO for hotels"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "E-E-A-T and brand keyword protection against OTAs"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Offer, flexible cancellation and loyalty page optimisation"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "AI Overviews and voice search optimisation"
                }
              }
            ]
          }
        ]
      },
      "isRelatedTo": [
        {
          "@type": "Service",
          "@id": "https://biztalbox.com/travel-seo#service",
          "name": "Travel SEO Services"
        },
        {
          "@type": "Service",
          "@id": "https://biztalbox.com/seo-for-food-and-beverage#service",
          "name": "Food & Beverage SEO Services"
        },
        {
          "@type": "Service",
          "@id": "https://biztalbox.com/beauty-and-wellness-seo#service",
          "name": "Beauty & Wellness SEO Services"
        },
        {
          "@type": "Service",
          "@id": "https://biztalbox.com/real-estate-seo#service",
          "name": "Real Estate SEO Services"
        },
        {
          "@type": "Service",
          "@id": "https://biztalbox.com/petcare-seo#service",
          "name": "Pet Care SEO Services"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/hotel-seo#hotel-website-seo",
      "name": "Hotel Website SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for city, business and boutique hotels. Focuses on high-intent keywords such as best hotels in a city or hotels near an airport, dedicated room and amenity pages, mobile booking flow, Local Pack visibility and outranking OTAs for the hotel's own brand name.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "City hotels, business hotels, boutique and independent hotels"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/hotel-seo#resort-seo",
      "name": "Resort SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for resorts built around experience-based searches. Focuses on optimised pages for wellness retreats, spa treatments, honeymoon and adventure packages, eco-friendly stays, weddings and events, and things-to-do content that influences longer stays.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Beach, wellness, luxury and destination resorts"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/hotel-seo#hotel-restaurant-seo",
      "name": "Hotel Restaurant & Bar SEO",
      "serviceType": "Local SEO",
      "description": "Local SEO for restaurants, rooftop bars, cafes and lounges inside hotels, targeting dining searches from locals and tourists to capture F&B revenue and create additional room booking opportunities.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Hotels with restaurants, bars, cafes and lounges"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://biztalbox.com/hotel-seo#faq",
      "isPartOf": {
        "@id": "https://biztalbox.com/hotel-seo#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is hotel SEO and why does it matter in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hotel SEO is the process of strengthening a hotel's online presence so the property appears when travellers search for places to stay on Google Search, Google Maps and AI-driven results. In 2026, most booking journeys begin with a search, so a hotel that isn't visible at that moment is eliminated before a guest even considers it."
          }
        },
        {
          "@type": "Question",
          "name": "How does hotel SEO help reduce OTA commissions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "OTAs often take 15% to 30% of booking revenue in commissions. Hotel SEO brings travellers straight to your own website through organic search, so more reservations happen as direct bookings. This protects your margins and lets you own the guest relationship, guest data and future loyalty instead of handing them to an intermediary."
          }
        },
        {
          "@type": "Question",
          "name": "Why is local SEO important for hotels?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many travellers search on their phones for \"hotel near me\", \"best hotels in [city]\" or \"resort near [landmark]\". Local SEO for hotels optimises your Google Business Profile, Maps listing, NAP details, photos, reviews and neighbourhood content so your property appears in the Local Pack, where users already have a location and clear intent and convert faster."
          }
        },
        {
          "@type": "Question",
          "name": "How do Google AI Overviews affect hotel visibility?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI Overviews now summarise hotel recommendations above traditional results, and many searches end without a click. To be included, hotels need structured data, clear and helpful content, strong local relevance and consistent review signals that make the property easy for Google to understand and recommend."
          }
        },
        {
          "@type": "Question",
          "name": "What technical SEO does a hotel website need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Technical SEO for hotels covers fast mobile loading, strong Core Web Vitals, clean site architecture, crawl depth, broken link fixes, multilingual setup where relevant and hotel-focused schema markup. These improvements help Google understand your property and make the booking flow smoother, which directly lifts conversions."
          }
        },
        {
          "@type": "Question",
          "name": "Why is mobile SEO critical for hotel bookings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A large share of hotel reservations now happen on smartphones, and in some markets mobile bookings have overtaken desktop. A mobile-optimised hotel website loads quickly, reads well on small screens, keeps the booking flow simple and shows clear calls-to-action like \"Check availability\" or \"Book now\" at the moment a guest decides."
          }
        },
        {
          "@type": "Question",
          "name": "What keywords should hotels target for SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hotels should target specific, high-intent phrases that match how travellers actually search, such as \"business hotel near Paris airport\", \"beachfront resort with spa\" or \"pet-friendly hotel in Edinburgh\". Location-based, experience-based and offer-based keywords like \"free cancellation hotels\" or \"family hotel deals\" attract guests who are already close to booking."
          }
        },
        {
          "@type": "Question",
          "name": "What type of content helps hotels rank and get more bookings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Experience-led content performs best. Beyond basic room details, hotels should publish dedicated pages for rooms, amenities, dining, spa and wellness, weddings and events, along with local area guides, attraction blogs, seasonal offers, flexible cancellation policies and loyalty programme pages. This content matches guest intent and builds authority for your destination."
          }
        },
        {
          "@type": "Question",
          "name": "How can resorts use SEO to promote unique experiences?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Resorts can create dedicated, optimised pages for wellness retreats, spa treatments, honeymoon packages, adventure activities and eco-friendly stays. Travellers often start with experience-based searches rather than property names, so ranking for phrases like \"Ayurveda spa resort\" or \"wellness retreat\" reaches guests who are ready to book premium packages."
          }
        },
        {
          "@type": "Question",
          "name": "Can SEO help a hotel's restaurant, bar or cafe attract more customers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Hotel restaurants, rooftop bars, cafes and lounges can rank for local dining searches like \"rooftop dining in [city]\" or \"best cafes near me\". Many locals and tourists discover the restaurant first and the hotel afterwards, so optimising your F&B outlets captures dining revenue and creates new opportunities for room bookings."
          }
        },
        {
          "@type": "Question",
          "name": "How do reviews affect hotel SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reviews influence both rankings and guest choice. A steady flow of authentic, positive reviews on your Google Business Profile strengthens trust signals, improves visibility in Maps and local results, and makes travellers more confident choosing your property over nearby competitors."
          }
        },
        {
          "@type": "Question",
          "name": "What should hotels ask before hiring a hotel SEO agency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ask how the agency's strategy will reduce OTA reliance, whether it reports on booking KPIs such as direct revenue, occupancy and conversion rate instead of vanity metrics, how it connects technical SEO to the booking flow, what methodology it uses for Google hotel search and Local Pack visibility, and how it will help your hotel outrank OTAs for its own brand name."
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
      {HOTEL_SEO_SCHEMA["@graph"].map((item, index) => (
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
