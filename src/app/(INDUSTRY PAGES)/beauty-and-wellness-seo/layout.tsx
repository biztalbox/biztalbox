import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "Beauty & Wellness SEO Services | Scale Your Brand Online",
  description:
    "Scale your beauty and wellness business with result-driven SEO. Improve visibility, grow organic traffic, and increase client conversions.",
};

export const metadata = createMetadata(baseMetadata, "/beauty-and-wellness-seo");

const BEAUTY_WELLNESS_SEO_SCHEMA = {
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
      "@id": "https://biztalbox.com/beauty-and-wellness-seo#webpage",
      "url": "https://biztalbox.com/beauty-and-wellness-seo",
      "name": "Beauty & Wellness SEO Services | Scale Your Brand Online",
      "headline": "Unlocking Growth with Wellness and Beauty SEO: A Guide for Salons and Spas",
      "description": "Scale your beauty and wellness business with result-driven SEO. Improve visibility, grow organic traffic, and increase client conversions.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://biztalbox.com/#website"
      },
      "breadcrumb": {
        "@id": "https://biztalbox.com/beauty-and-wellness-seo#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://biztalbox.com/beauty-and-wellness-seo#service"
      },
      "hasPart": {
        "@id": "https://biztalbox.com/beauty-and-wellness-seo#faq"
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
          "name": "Beauty salon",
          "sameAs": "https://en.wikipedia.org/wiki/Beauty_salon"
        },
        {
          "@type": "Thing",
          "name": "Day spa",
          "sameAs": "https://en.wikipedia.org/wiki/Day_spa"
        },
        {
          "@type": "Thing",
          "name": "Medical spa"
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
          "name": "Botulinum toxin",
          "sameAs": "https://en.wikipedia.org/wiki/Botulinum_toxin"
        },
        {
          "@type": "Thing",
          "name": "Laser hair removal",
          "sameAs": "https://en.wikipedia.org/wiki/Laser_hair_removal"
        },
        {
          "@type": "Thing",
          "name": "Microneedling"
        },
        {
          "@type": "Thing",
          "name": "Your Money or Your Life (YMYL)"
        },
        {
          "@type": "Organization",
          "name": "Urban Company",
          "sameAs": "https://en.wikipedia.org/wiki/Urban_Company"
        },
        {
          "@type": "Organization",
          "name": "Fresha"
        },
        {
          "@type": "Organization",
          "name": "Treatwell"
        },
        {
          "@type": "Organization",
          "name": "StyleSeat"
        }
      ],
      "keywords": "beauty and wellness SEO, salon SEO, hair salon SEO, spa SEO, med spa SEO, medical spa SEO, SEO for beauty salons"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://biztalbox.com/beauty-and-wellness-seo#breadcrumb",
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
          "name": "Beauty & Wellness SEO",
          "item": "https://biztalbox.com/beauty-and-wellness-seo"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/beauty-and-wellness-seo#service",
      "name": "Beauty & Wellness SEO Services",
      "alternateName": [
        "Wellness and Beauty Industry SEO",
        "Salon and Spa SEO",
        "SEO for Salons, Spas and Med Spas"
      ],
      "serviceType": "Search Engine Optimization",
      "category": "Digital Marketing",
      "url": "https://biztalbox.com/beauty-and-wellness-seo",
      "description": "Specialised SEO for hair and beauty salons, day spas and medical spas. Covers Google Maps and local SEO, treatment-level keyword and content strategy, YMYL-aligned trust building for medical aesthetics, technical SEO with structured data, AI Overview readiness and booking-journey optimisation to increase appointments and reduce dependence on aggregator platforms.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "areaServed": "Worldwide",
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Hair salons, beauty salons, day spas, wellness spas and medical spas"
      },
      "offers": {
        "@type": "Offer",
        "name": "Free 30-minute consultation call",
        "description": "No-obligation consultation with expert advice tailored to your salon, spa or med spa.",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://biztalbox.com/beauty-and-wellness-seo",
        "seller": {
          "@id": "https://biztalbox.com/#organization"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Beauty & Wellness SEO by Business Type",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://biztalbox.com/beauty-and-wellness-seo#salon-seo"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://biztalbox.com/beauty-and-wellness-seo#spa-seo"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://biztalbox.com/beauty-and-wellness-seo#med-spa-seo"
            }
          }
        ]
      },
      "isRelatedTo": [
        {
          "@type": "Service",
          "@id": "https://biztalbox.com/petcare-seo#service",
          "name": "Pet Care SEO Services"
        },
        {
          "@type": "Service",
          "@id": "https://biztalbox.com/travel-seo#service",
          "name": "Travel SEO Services"
        },
        {
          "@type": "Service",
          "@id": "https://biztalbox.com/real-estate-seo#service",
          "name": "Real Estate SEO Services"
        },
        {
          "@type": "Service",
          "@id": "https://biztalbox.com/seo-for-food-and-beverage#service",
          "name": "Food & Beverage SEO Services"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/beauty-and-wellness-seo#salon-seo",
      "name": "Hair Salon & Beauty Salon SEO",
      "serviceType": "Local SEO",
      "description": "SEO for hair and beauty salons where clients value speed and convenience. Focuses on Google Maps and near-me visibility, Google Business Profile optimisation, and dedicated pages for high-value services such as balayage, keratin treatments and nail extensions.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Hair salons, beauty salons, barbers and boutique studios"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/beauty-and-wellness-seo#spa-seo",
      "name": "Spa SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for day spas and wellness spas where clients compare offerings before booking. Focuses on treatment-level keyword targeting for facials, massages and hydrafacials, comparison-ready service content, reviews and holistic wellness treatments such as aromatherapy and Ayurveda.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Day spas and wellness spas"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/beauty-and-wellness-seo#med-spa-seo",
      "name": "Med Spa SEO",
      "alternateName": "Medical Spa SEO",
      "serviceType": "Search Engine Optimization",
      "description": "YMYL-aligned SEO for medical spas offering Botox, fillers, laser treatments, chemical peels and microneedling. Focuses on practitioner credibility, accurate treatment education, safety information, E-E-A-T trust signals and structured data to win high-intent, trust-driven bookings.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Medical spas and aesthetic clinics"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://biztalbox.com/beauty-and-wellness-seo#faq",
      "isPartOf": {
        "@id": "https://biztalbox.com/beauty-and-wellness-seo#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is wellness and beauty SEO and how does it help salons and spas get more bookings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Wellness and beauty industry SEO helps your expertise to be showcased exactly when potential clients are looking, builds credibility, and turns interest into bookings. It ensures your business earns visibility at the moment of intent, helping convert searchers into paying clients without depending on ads."
          }
        },
        {
          "@type": "Question",
          "name": "How does SEO reduce reliance on platforms like Urban Company or Fresha?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO reduces dependency by driving direct discovery through your website and Google presence, helping you retain customer relationships and avoid commissions."
          }
        },
        {
          "@type": "Question",
          "name": "How can cosmetic brands use SEO to increase online sales?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cosmetic brands use SEO to increase online sales by capturing demand when consumers search for specific treatments, products, or solutions. By building visibility through content, trust signals, and optimized pages, brands position themselves as reliable choices, turning search-driven interest into high-intent conversions and consistent revenue growth."
          }
        },
        {
          "@type": "Question",
          "name": "How does local SEO help beauty brands get more clients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Local SEO helps beauty brands get more clients by making them visible in “near me” and location-based searches. Optimizing Google Business Profiles, reviews, and location signals ensures your business appears in Maps and local results, where users have high intent, leading to more calls, walk-ins, and bookings."
          }
        },
        {
          "@type": "Question",
          "name": "Is SEO worth it for small beauty salons?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO is worth it for small beauty salons because visibility becomes the key differentiator in a highly competitive market. With a growing number of salons, boutique studios, and spas, businesses that do not show up clearly during high-intent searches are quietly filtered out. Consistent rankings create a perception of superiority and help your brand become the default choice over competitors."
          }
        },
        {
          "@type": "Question",
          "name": "Why is my salon or med spa not showing up in AI Overviews on Google in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your salon or med spa may not be showing up in AI Overviews because your business isn’t technically optimised and “AI-readable.” If you lack structured data, treatment-level authority, local prominence, review sentiment, and consistent brand mentions, AI Overviews exclude you, making your business invisible above the fold while competitors get featured."
          }
        },
        {
          "@type": "Question",
          "name": "How do I choose the right SEO agency for my salon or med spa in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You should choose an SEO agency that understands the psychology of beauty and wellness customers, the technical demands of modern search, and the competitive landscape salons, spas, and med spas operate in. The right partner blends technical precision, content authority, and ongoing optimization to turn visibility into bookings and long-term growth."
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
      {BEAUTY_WELLNESS_SEO_SCHEMA["@graph"].map((item, index) => (
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
