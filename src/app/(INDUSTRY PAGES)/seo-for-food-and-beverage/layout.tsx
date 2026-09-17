import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "Food & Beverage SEO Services | Grow, Rank & Scale Faster",
  description:
    "Scale your food and beverage ecommerce brand with advanced SEO strategies. Boost Google rankings, drive high-intent traffic, and increase online sales.",
};

export const metadata = createMetadata(baseMetadata, "/seo-for-food-and-beverage");

const FOOD_BEVERAGE_SEO_SCHEMA = {
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
      "@id": "https://biztalbox.com/seo-for-food-and-beverage#webpage",
      "url": "https://biztalbox.com/seo-for-food-and-beverage",
      "name": "Food & Beverage SEO Services | Grow, Rank & Scale Faster",
      "headline": "SEO for Food and Beverage Industry: Driving Visibility for Restaurants and Cafes",
      "description": "SEO for restaurants, cafes, food brands and beverage companies to boost Google rankings, win local and near-me searches, drive high-intent traffic and increase direct orders and online sales.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://biztalbox.com/#website"
      },
      "breadcrumb": {
        "@id": "https://biztalbox.com/seo-for-food-and-beverage#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://biztalbox.com/seo-for-food-and-beverage#service"
      },
      "hasPart": {
        "@id": "https://biztalbox.com/seo-for-food-and-beverage#faq"
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
          "name": "Foodservice",
          "sameAs": "https://en.wikipedia.org/wiki/Foodservice"
        },
        {
          "@type": "Thing",
          "name": "Food industry",
          "sameAs": "https://en.wikipedia.org/wiki/Food_industry"
        }
      ],
      "mentions": [
        {
          "@type": "Thing",
          "name": "Local search",
          "sameAs": "https://en.wikipedia.org/wiki/Local_search_(Internet)"
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
          "name": "Voice search",
          "sameAs": "https://en.wikipedia.org/wiki/Voice_search"
        },
        {
          "@type": "Organization",
          "name": "Zomato",
          "sameAs": "https://en.wikipedia.org/wiki/Zomato"
        },
        {
          "@type": "Organization",
          "name": "Swiggy",
          "sameAs": "https://en.wikipedia.org/wiki/Swiggy"
        },
        {
          "@type": "Organization",
          "name": "DoorDash",
          "sameAs": "https://en.wikipedia.org/wiki/DoorDash"
        },
        {
          "@type": "Organization",
          "name": "Uber Eats",
          "sameAs": "https://en.wikipedia.org/wiki/Uber_Eats"
        }
      ],
      "keywords": "food and beverage SEO, restaurant SEO, SEO for cafes, local SEO for restaurants, beverage SEO agency, franchise restaurant SEO, SEO for food brands"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://biztalbox.com/seo-for-food-and-beverage#breadcrumb",
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
          "name": "Food & Beverage SEO",
          "item": "https://biztalbox.com/seo-for-food-and-beverage"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/seo-for-food-and-beverage#service",
      "name": "Food & Beverage SEO Services",
      "alternateName": [
        "Restaurant SEO Services",
        "SEO for Restaurants and Cafes",
        "Beverage SEO Agency",
        "F&B SEO"
      ],
      "serviceType": "Search Engine Optimization",
      "category": "Digital Marketing",
      "url": "https://biztalbox.com/seo-for-food-and-beverage",
      "description": "SEO for restaurants, cafes, cloud kitchens, restaurant chains and packaged food and beverage brands. Covers restaurant keyword strategy, menu optimisation, Google Business Profile and local SEO, technical SEO, content marketing and AI search visibility to increase reservations, foot traffic, direct online orders and ecommerce sales while reducing dependence on delivery aggregators.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "areaServed": "Worldwide",
      "audience": [
        {
          "@type": "BusinessAudience",
          "audienceType": "Restaurants and full-service dining"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Cafes, quick-service outlets and cloud kitchens"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Multi-location restaurant chains and franchises"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Packaged food, beverage brands and F&B manufacturers"
        }
      ],
      "offers": {
        "@type": "Offer",
        "name": "Free 30-minute consultation call",
        "description": "No-obligation consultation with expert advice tailored to your food and beverage business.",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://biztalbox.com/seo-for-food-and-beverage",
        "seller": {
          "@id": "https://biztalbox.com/#organization"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Food & Beverage SEO Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Restaurant & Cafe SEO",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Menu optimisation for dishes, seasonal specials and dietary options"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Google Business Profile management (reviews, posts, Q&A, menu links)"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Local SEO for near-me and Google Maps visibility"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Restaurant keyword strategy by cuisine, dish, diet and neighbourhood"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Food & Beverage Brand SEO",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Ecommerce SEO for packaged food and beverage products"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Ingredient, product category and functional beverage content"
                }
              }
            ]
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Franchise and multi-location restaurant SEO"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO for restaurant and F&B websites"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Overviews and voice search optimisation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Ongoing optimisation with reservation, order and foot traffic reporting"
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
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://biztalbox.com/seo-for-food-and-beverage#faq",
      "isPartOf": {
        "@id": "https://biztalbox.com/seo-for-food-and-beverage#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is SEO for the food and beverage industry and why is it important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO in the food and beverage industry ensures your website appears when customers search online for food, drinks, restaurants, or products. Most decisions start online, where people compare options, browse menus, and check reviews before choosing. SEO helps your brand become visible at that exact moment and improves discoverability across search engines and AI tools."
          }
        },
        {
          "@type": "Question",
          "name": "What are the main benefits of SEO for restaurants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO offers long-term visibility, lower acquisition costs, and high-intent traffic. It builds authority as your pages rank across searches and improves user experience through better website structure. It also works 24/7, increases direct traffic, and helps restaurants reduce dependency on third-party platforms while improving brand ownership and customer relationships"
          }
        },
        {
          "@type": "Question",
          "name": "How does SEO reduce marketing costs for food businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO reduces marketing costs because organic traffic does not require ongoing ad spend. Once rankings are established, pages continue attracting visitors consistently. Over time, businesses rely less on paid campaigns, lowering acquisition costs. Many food and beverage brands notice significant savings after months of steady organic growth from SEO efforts."
          }
        },
        {
          "@type": "Question",
          "name": "Why is local SEO important for restaurants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Local SEO ensures your restaurant appears when people search for nearby dining options. Most dining decisions depend on proximity and convenience, especially in cities. Optimized listings, accurate business details, and strong reviews help your restaurant show up in “near me” searches and Google Maps, driving more footfall and reservations."
          }
        },
        {
          "@type": "Question",
          "name": "What role does content play in restaurant SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Content helps customers understand your food, ingredients, preparation methods, and brand uniqueness. It builds trust by answering common questions that influence buying decisions. Detailed menus, descriptions, and insights improve engagement, reduce hesitation, and help your website attract the right visitors while strengthening overall SEO performance for restaurants and food brands."
          }
        },
        {
          "@type": "Question",
          "name": "How does SEO help restaurants compete with delivery apps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO helps restaurants bring customers directly to their own website instead of relying on aggregators. This increases profit margins and allows better customer relationship control. It also helps collect data and build loyalty programs, reducing dependence on platforms that take revenue share and control customer interactions."
          }
        },
        {
          "@type": "Question",
          "name": "Why is SEO more reliable than social media for restaurants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Organic social media reach has dropped significantly, making it less reliable for consistent visibility. SEO provides stable traffic from search engines regardless of algorithm changes. This makes it a more dependable long-term strategy for attracting customers, generating bookings, and maintaining visibility across all seasons and platforms."
          }
        },
        {
          "@type": "Question",
          "name": "How does SEO help multi-location restaurant chains?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO helps multi-location restaurants by creating location-specific pages, maintaining consistent business information, and optimizing for local searches in each city. This ensures every outlet appears in relevant searches while maintaining brand consistency. It improves visibility across regions and helps each location attract nearby customers effectively."
          }
        },
        {
          "@type": "Question",
          "name": "How does AI search affect food and beverage SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI-powered search tools now provide instant answers without requiring clicks. This means brands must be optimized for AI summaries and recommendations. Well-structured SEO increases chances of appearing in AI-generated results, keeping restaurants and food brands visible even in zero-click search environments."
          }
        },
        {
          "@type": "Question",
          "name": "Why should food and beverage businesses invest in SEO agencies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO agencies bring expertise in keyword strategy, content creation, local SEO, and technical optimization. They help restaurants and food brands improve visibility, increase direct traffic, and reduce dependency on aggregators. A strong agency ensures continuous optimization, better rankings, and long-term growth aligned with changing search behavior."
          }
        },
        {
          "@type": "Question",
          "name": "Why do you need keywords for food and beverage SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Food and beverage keywords directly match how customers search online. For example, queries like “pasta near me” show immediate intent, while others like “low-sugar drinks” indicate product research. When your website uses these search patterns, it increases visibility and helps your brand reach users at the exact moment of decision-making."
          }
        },
        {
          "@type": "Question",
          "name": "Why is content important for restaurant SEO strategy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Content is important because customers search for more than menus or products. They want to understand dishes, ingredients, preparation, and dietary fit. When your website answers these questions clearly, it builds authority, reduces hesitation, and improves trust, which directly supports better SEO performance and customer decision-making."
          }
        },
        {
          "@type": "Question",
          "name": "What are the key SEO trends in the food and beverage industry?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Key SEO trends in the food and beverage industry include the rise of AI-driven search and voice search optimization. Platforms like Google AI Overviews, ChatGPT, and Gemini now deliver instant recommendations directly in search results, often without clicks. At the same time, “near me” and voice searches are growing, making it essential for restaurants and food brands to optimize for local, conversational queries and AI-generated summaries."
          }
        },
        {
          "@type": "Question",
          "name": "How does SEO help food brands increase online sales?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO for food and beverage industry websites places products at this exact stage of intent, especially when users are researching ingredients or functional beverages. This builds trust early, attracts high-intent traffic, and increases the chances of conversion into online orders and sales."
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
      {FOOD_BEVERAGE_SEO_SCHEMA["@graph"].map((item, index) => (
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
