import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "Ultimate HVAC SEO Guide for Better Rankings and Leads",
  description:
    "Is your HVAC business hard to find on Google? Discover SEO services for the HVAC industry, its benefits, and strategies to help you get discovered and grow.",
};

export const metadata = createMetadata(baseMetadata, "/hvac-seo");

const HVAC_SEO_SCHEMA = {
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
      "@id": "https://biztalbox.com/hvac-seo#webpage",
      "url": "https://biztalbox.com/hvac-seo",
      "name": "Ultimate HVAC SEO Guide for Better Rankings and Leads",
      "headline": "The Ultimate HVAC SEO Guide for Better Rankings, Visibility, and Leads",
      "description": "Is your HVAC business hard to find on Google? Discover SEO services for the HVAC industry, its benefits, and strategies to help you get discovered and grow.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://biztalbox.com/#website"
      },
      "breadcrumb": {
        "@id": "https://biztalbox.com/hvac-seo#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://biztalbox.com/hvac-seo#service"
      },
      "hasPart": {
        "@id": "https://biztalbox.com/hvac-seo#faq"
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
          "name": "Heating, ventilation, and air conditioning",
          "sameAs": "https://en.wikipedia.org/wiki/Heating,_ventilation,_and_air_conditioning"
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
          "name": "Air conditioning",
          "sameAs": "https://en.wikipedia.org/wiki/Air_conditioning"
        },
        {
          "@type": "Thing",
          "name": "Furnace (central heating)",
          "sameAs": "https://en.wikipedia.org/wiki/Furnace_(central_heating)"
        },
        {
          "@type": "Thing",
          "name": "Heat pump",
          "sameAs": "https://en.wikipedia.org/wiki/Heat_pump"
        },
        {
          "@type": "Thing",
          "name": "Smart thermostat",
          "sameAs": "https://en.wikipedia.org/wiki/Smart_thermostat"
        },
        {
          "@type": "Thing",
          "name": "Internet of things",
          "sameAs": "https://en.wikipedia.org/wiki/Internet_of_things"
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
          "name": "Google AI Mode"
        },
        {
          "@type": "Thing",
          "name": "AI Optimization (AIO)"
        }
      ],
      "keywords": "HVAC SEO, SEO for HVAC companies, HVAC SEO services, HVAC SEO agency, local SEO for HVAC contractors, HVAC SEO marketing, SEO for HVAC websites"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://biztalbox.com/hvac-seo#breadcrumb",
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
          "name": "HVAC SEO",
          "item": "https://biztalbox.com/hvac-seo"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/hvac-seo#service",
      "name": "HVAC SEO Services",
      "alternateName": [
        "SEO for HVAC Companies",
        "HVAC SEO Marketing",
        "SEO for HVAC Contractors",
        "Heating and Cooling SEO"
      ],
      "serviceType": "Search Engine Optimization",
      "category": "Digital Marketing",
      "url": "https://biztalbox.com/hvac-seo",
      "description": "SEO for heating and cooling contractors built around urgent, seasonal and research-driven search demand. Covers informational, transactional, commercial investigation and local keyword strategy, service, educational, FAQ, location and seasonal content, backlinks, directory listings and reviews, technical SEO for fast mobile websites, Google Business Profile and local citations, and AIO for AI-driven search, using ethical white-hat practices.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "areaServed": "Worldwide",
      "audience": [
        {
          "@type": "BusinessAudience",
          "audienceType": "Residential HVAC and heating and cooling contractors"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "HVAC companies serving commercial properties and property managers"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Independent and regional HVAC contractors competing with larger providers"
        }
      ],
      "offers": {
        "@type": "Offer",
        "name": "Free 30-minute consultation call",
        "description": "No-obligation consultation with expert advice tailored to your HVAC business.",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://biztalbox.com/hvac-seo",
        "seller": {
          "@id": "https://biztalbox.com/#organization"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "HVAC SEO Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "HVAC SEO by Service Type",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/hvac-seo#hvac-repair-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/hvac-seo#hvac-installation-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/hvac-seo#hvac-maintenance-seasonal-seo"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "HVAC Keyword Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Informational keywords for heating and cooling problems"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Transactional keywords for repair and emergency service searches"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial investigation keywords for system installation research"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Local intent keywords for cities and near-me searches"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "HVAC Content Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Service pages for AC repair, furnace repair and installation"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Educational blog content on common HVAC problems"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Pre-service FAQ content on repair time, pricing and replacement"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Location pages with local climate and housing context"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Seasonal HVAC content and maintenance guides"
                }
              }
            ]
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Off-page SEO through HVAC backlinks, directories, reviews and local partnerships"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO for speed, mobile design and site structure"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Google Business Profile optimisation and local citation management"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AIO for ChatGPT, Google Gemini, Perplexity and Google AI Mode"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Continuous optimisation and transparent performance tracking"
            }
          }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/hvac-seo#hvac-repair-seo",
      "name": "HVAC Repair & Emergency Service SEO",
      "serviceType": "Local SEO",
      "description": "SEO for HVAC contractors targeting urgent, transactional searches such as AC repair near me, emergency HVAC repair and furnace repair service. Focuses on problem-based service pages, fast mobile pages with easy call options, map visibility and reviews that win calls during system failures.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "HVAC repair and emergency service contractors"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/hvac-seo#hvac-installation-seo",
      "name": "HVAC Installation & Replacement SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for HVAC installation and system replacement services targeting research-stage commercial investigation searches such as best HVAC system for large homes and AC installation cost. Focuses on system comparison, energy efficiency, heat pump and smart thermostat content and clear installation cost guidance.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "HVAC installation and system replacement contractors"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/hvac-seo#hvac-maintenance-seasonal-seo",
      "name": "HVAC Maintenance & Seasonal SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for HVAC maintenance plans and seasonal demand, with summer AC preparation and winter furnace maintenance content that keeps HVAC websites visible as search behaviour shifts through the year and turns recurring maintenance searches into service bookings.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "HVAC companies offering maintenance plans and seasonal servicing"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://biztalbox.com/hvac-seo#faq",
      "isPartOf": {
        "@id": "https://biztalbox.com/hvac-seo#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is SEO for HVAC businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO for HVAC businesses is the process of improving a company’s visibility in search engines when people search for heating and cooling services online. It helps HVAC contractors appear for searches related to AC repair, furnace installation, maintenance services, and emergency HVAC support so potential customers can find them more easily."
          }
        },
        {
          "@type": "Question",
          "name": "How does SEO help HVAC companies get more customers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO helps HVAC companies appear during high-intent searches like “AC repair near me” or “emergency HVAC service.” Since these searches usually happen when homeowners urgently need help, better visibility increases the chances of getting more phone calls, enquiries, and service bookings from customers actively looking for HVAC solutions."
          }
        },
        {
          "@type": "Question",
          "name": "Why is SEO important for HVAC services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO is important for HVAC services because most customers now begin by searching online instead of directly calling a contractor. If an HVAC business does not appear in search results during urgent repair or installation searches, potential customers may choose competitors who are more visible online."
          }
        },
        {
          "@type": "Question",
          "name": "How can HVAC companies rank higher on Google?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HVAC companies can rank higher on Google by improving website speed, creating dedicated service pages, targeting local and high-intent keywords, optimizing Google Business Profiles, publishing helpful HVAC content, and maintaining consistent business information across directories and platforms."
          }
        },
        {
          "@type": "Question",
          "name": "What keywords should HVAC businesses target for SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HVAC businesses should target informational keywords, transactional keywords, commercial investigation keywords, and local intent keywords. Searches like “why is my AC leaking water,” “emergency HVAC repair,” “best HVAC system for homes,” and “HVAC contractor in [city]” help capture different stages of customer intent."
          }
        },
        {
          "@type": "Question",
          "name": "What type of content works best for HVAC SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best content for HVAC SEO includes service pages, educational blogs, FAQs, maintenance guides, seasonal HVAC content, and location-focused pages. Content that clearly explains common HVAC problems, repair processes, installation options, and maintenance tips helps build trust and improves search visibility."
          }
        },
        {
          "@type": "Question",
          "name": "How do I choose the right SEO partner for my HVAC business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The right HVAC SEO partner should understand how homeowners search during urgent heating and cooling problems. They should focus on local visibility, high-intent keywords, technical SEO, helpful content, and long-term growth rather than shortcuts. A strong SEO agency also adapts strategies based on changing search behaviour and evolving search technology."
          }
        },
        {
          "@type": "Question",
          "name": "How does technical SEO help HVAC websites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Technical SEO improves website speed, mobile usability, navigation, and search engine accessibility. Since many HVAC searches happen during urgent situations on mobile devices, a fast and easy-to-use website helps users quickly find contact information and improves overall search performance."
          }
        },
        {
          "@type": "Question",
          "name": "How does educational HVAC content improve SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Educational content helps HVAC companies appear during early-stage searches where homeowners are trying to understand issues with their heating or cooling systems. Helpful articles build trust, improve topical authority, and increase the chances that customers will contact the company later for professional service."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between transactional and commercial investigation keywords in HVAC SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Transactional keywords show that a customer is ready to book an HVAC service immediately. Searches like “emergency AC repair near me” or “HVAC repair service” usually come from people actively looking for a contractor. Commercial investigation keywords, however, reflect research intent. Searches such as “best HVAC system for large homes” or “AC installation cost” are used when homeowners are comparing options before making a final decision."
          }
        },
        {
          "@type": "Question",
          "name": "Why is AI search becoming important for HVAC SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI search is changing how homeowners find HVAC services online. Instead of typing short phrases, people now ask complete questions through tools like ChatGPT, Google Gemini, and Perplexity AI. HVAC websites now need clear, well-structured content that AI systems can easily understand and recommend in generated answers."
          }
        },
        {
          "@type": "Question",
          "name": "How can HVAC companies optimize for AI-driven search results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HVAC companies can optimize for AI-driven search by creating structured content with clear headings, FAQs, service explanations, and long-tail keywords. AI systems look for websites that clearly explain services, locations, and solutions, making organized and helpful content more important than keyword stuffing."
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
      {HVAC_SEO_SCHEMA["@graph"].map((item, index) => (
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
