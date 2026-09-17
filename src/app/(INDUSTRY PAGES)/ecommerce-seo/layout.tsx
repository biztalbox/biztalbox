import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "Ecommerce SEO Strategy: The Ultimate Guide for Ecommerce Websites",
  description:
    "Struggling to grow organic traffic? Discover the ecommerce SEO strategies and SEO for ecommerce websites that help online stores rank higher and sell more.",
};

export const metadata = createMetadata(baseMetadata, "/ecommerce-seo");

const ECOMMERCE_SEO_SCHEMA = {
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
      "@id": "https://biztalbox.com/ecommerce-seo#webpage",
      "url": "https://biztalbox.com/ecommerce-seo",
      "name": "Ecommerce SEO Strategy: The Ultimate Guide for Ecommerce Websites",
      "headline": "Everything Online Stores Need to Know About E-commerce SEO to Drive Traffic and Sales",
      "description": "Struggling to grow organic traffic? Discover the ecommerce SEO strategies and SEO for ecommerce websites that help online stores rank higher and sell more.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://biztalbox.com/#website"
      },
      "breadcrumb": {
        "@id": "https://biztalbox.com/ecommerce-seo#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://biztalbox.com/ecommerce-seo#service"
      },
      "hasPart": {
        "@id": "https://biztalbox.com/ecommerce-seo#faq"
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
          "name": "E-commerce",
          "sameAs": "https://en.wikipedia.org/wiki/E-commerce"
        },
        {
          "@type": "Thing",
          "name": "Online shopping",
          "sameAs": "https://en.wikipedia.org/wiki/Online_shopping"
        }
      ],
      "mentions": [
        {
          "@type": "Thing",
          "name": "Business-to-business",
          "sameAs": "https://en.wikipedia.org/wiki/Business-to-business"
        },
        {
          "@type": "Thing",
          "name": "Backlink",
          "sameAs": "https://en.wikipedia.org/wiki/Backlink"
        },
        {
          "@type": "Thing",
          "name": "Canonical link element",
          "sameAs": "https://en.wikipedia.org/wiki/Canonical_link_element"
        },
        {
          "@type": "Thing",
          "name": "Schema.org",
          "sameAs": "https://en.wikipedia.org/wiki/Schema.org"
        },
        {
          "@type": "Thing",
          "name": "Faceted navigation"
        },
        {
          "@type": "Thing",
          "name": "Google Local Pack"
        },
        {
          "@type": "Organization",
          "name": "Amazon",
          "sameAs": "https://en.wikipedia.org/wiki/Amazon_(company)"
        },
        {
          "@type": "Organization",
          "name": "Walmart",
          "sameAs": "https://en.wikipedia.org/wiki/Walmart"
        },
        {
          "@type": "Organization",
          "name": "eBay",
          "sameAs": "https://en.wikipedia.org/wiki/EBay"
        }
      ],
      "keywords": "ecommerce SEO, e-commerce SEO services, SEO for ecommerce websites, ecommerce SEO agency, ecommerce SEO strategy, B2B ecommerce SEO, local ecommerce SEO, product page SEO"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://biztalbox.com/ecommerce-seo#breadcrumb",
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
          "name": "E-commerce SEO",
          "item": "https://biztalbox.com/ecommerce-seo"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/ecommerce-seo#service",
      "name": "E-commerce SEO Services",
      "alternateName": [
        "Ecommerce SEO",
        "SEO for Ecommerce Websites",
        "Ecommerce SEO Agency",
        "Online Store SEO"
      ],
      "serviceType": "Search Engine Optimization",
      "category": "Digital Marketing",
      "url": "https://biztalbox.com/ecommerce-seo",
      "description": "Conversion-focused SEO for online stores, D2C brands and B2B e-commerce platforms. Covers intent-based keyword mapping to category, product and content pages, funnel-based content, unique product page content, scalable site architecture and faceted navigation, large catalog indexing, backlinks and brand mentions, local e-commerce SEO and reporting that connects rankings to traffic, conversions and revenue.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "areaServed": "Worldwide",
      "audience": [
        {
          "@type": "BusinessAudience",
          "audienceType": "B2C online stores and D2C product brands"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Niche e-commerce stores competing with large marketplaces"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "B2B e-commerce platforms, manufacturers and suppliers"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Omnichannel retailers with online and physical or pop-up stores"
        }
      ],
      "offers": {
        "@type": "Offer",
        "name": "Free 30-minute consultation call",
        "description": "No-obligation consultation with expert advice tailored to your online store.",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://biztalbox.com/ecommerce-seo",
        "seller": {
          "@id": "https://biztalbox.com/#organization"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "E-commerce SEO Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "E-commerce SEO by Business Model",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/ecommerce-seo#b2c-ecommerce-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/ecommerce-seo#b2b-ecommerce-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/ecommerce-seo#local-ecommerce-seo"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "E-commerce Keyword Strategy by Search Intent",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Informational keywords for buying guides and FAQs"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Navigational and branded keyword protection"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial and comparison keywords for category and collection pages"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Transactional keywords for product pages"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Long-tail keywords for size, colour, material and use case"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "E-commerce Content Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Top and mid-funnel buying guides, style guides and comparison collections"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Bottom-of-funnel product comparisons, curated lists and customer stories"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Unique product page content and descriptions"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Internal linking from content to category and product pages"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Technical E-commerce SEO",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Scalable category hierarchy and faceted filter optimisation"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Large product catalog indexing, canonicalization and index bloat control"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Page speed, image optimisation and mobile performance"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Product structured data and crawl error management"
                }
              }
            ]
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Off-page SEO through niche backlinks, reviews and brand mentions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Demand-based continuous optimisation for launches, promotions and inventory cycles"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Revenue-focused reporting from keywords to conversions"
            }
          }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/ecommerce-seo#b2c-ecommerce-seo",
      "name": "B2C E-commerce SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for consumer online stores and D2C brands focused on product discovery, comparison and checkout. Aligns category, collection and product pages with shopper intent, builds unique product content and helps niche stores compete with marketplaces like Amazon, Walmart and eBay.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "B2C online stores and D2C product brands"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/ecommerce-seo#b2b-ecommerce-seo",
      "name": "B2B E-commerce SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for B2B e-commerce platforms where buyers search problem-first using functional requirements, integration needs and compliance standards. Focuses on low-volume high-intent queries, solution-based navigation, industry landing pages, technical specifications, case studies, certifications and resource hubs that support multi-stakeholder decisions.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "B2B e-commerce platforms, manufacturers, wholesalers and suppliers"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/ecommerce-seo#local-ecommerce-seo",
      "name": "Local E-commerce SEO",
      "serviceType": "Local SEO",
      "description": "Regional SEO for online stores, including those without physical storefronts, using city-specific landing pages with product availability, shipping times and localised offers, local structured data, authentic local reviews and location-relevant content to capture high-intent regional demand.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Online stores targeting specific cities or regions and omnichannel retailers"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://biztalbox.com/ecommerce-seo#faq",
      "isPartOf": {
        "@id": "https://biztalbox.com/ecommerce-seo#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is e-commerce SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "E-commerce SEO is the process of making an online store more visible in search engines like Google so shoppers looking for your products can find you. Unlike conventional SEO, which focuses on blogs and service pages, e-commerce SEO focuses on product pages, category pages and the overall shopping experience."
          }
        },
        {
          "@type": "Question",
          "name": "How is e-commerce SEO different from regular SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "E-commerce searches are guided by clear buying intent. Shoppers compare prices, read reviews and look for specific products, so e-commerce SEO optimises product content, category structure and site architecture around how people search, compare and purchase, turning discovery into transactions rather than just traffic."
          }
        },
        {
          "@type": "Question",
          "name": "Why does my online store need SEO if I already run paid ads?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Paid ads stop generating visibility the moment spending stops. E-commerce SEO builds organic visibility that compounds over time, as every optimised product and category page adds to your store's authority. This creates an evergreen source of buyers, reduces dependence on ads and helps stabilise customer acquisition costs."
          }
        },
        {
          "@type": "Question",
          "name": "What types of keywords should an e-commerce store target?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Online stores should target keywords across every intent stage: informational searches like \"how to choose the right engagement ring\", navigational brand searches, commercial comparisons like \"top 18k gold necklaces under $500\", transactional searches like \"buy diamond stud earrings online\", and specific long-tail searches that include size, colour, material or use case."
          }
        },
        {
          "@type": "Question",
          "name": "How should category pages and product pages be optimised?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Category pages should target commercial and comparison searches, helping shoppers shortlist options within a clear hierarchy such as Necklaces > Gold Necklaces > Diamond Pendants. Product pages should target transactional searches with specific product names, unique descriptions and detailed information that connects ready-to-buy shoppers with the right product."
          }
        },
        {
          "@type": "Question",
          "name": "Why is unique product content important for e-commerce SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unique product content improves your chances of ranking and reduces the risk of duplicate content hurting your store. Each product page should include an exact product name, a short description of 50 to 100 words, key features such as materials and size, and a detailed description that answers customer questions and builds trust."
          }
        },
        {
          "@type": "Question",
          "name": "What content helps turn e-commerce visitors into buyers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Top-of-funnel content like guides and FAQs educates shoppers, while mid-funnel comparison guides and collections support evaluation. Bottom-of-funnel content drives the most conversions, including product comparisons, curated lists and customer stories. Internal links from educational content to these pages guide visitors toward purchase."
          }
        },
        {
          "@type": "Question",
          "name": "Can small online stores compete with Amazon, Walmart and eBay in search?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. E-commerce SEO helps smaller and niche stores appear alongside major marketplaces by winning clicks through relevance and quality rather than budget or size. Specific long-tail searches, strong category pages and helpful content allow unique products to reach shoppers who are actively looking for them."
          }
        },
        {
          "@type": "Question",
          "name": "What technical SEO does an e-commerce website need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "E-commerce technical SEO covers clear category and subcategory structure, optimised filters, fast page speed, mobile responsiveness, secure checkout, structured data, canonicalization, crawl error management and proper indexing of large product catalogs. These prevent index bloat and help search engines find and rank every important page."
          }
        },
        {
          "@type": "Question",
          "name": "How do backlinks and reviews help e-commerce SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Backlinks from reputable blogs, niche websites and suppliers show search engines that your store is authoritative. Brand mentions, reviews, unboxing videos and magazine features build visibility and trust, while consistent store information across directories and industry sites strengthens your overall brand authority."
          }
        },
        {
          "@type": "Question",
          "name": "Does local SEO matter for e-commerce stores without a physical shop?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Local searches such as \"buy running shoes in Austin\" often signal strong purchase intent. Online stores can create city-specific landing pages showing product availability, estimated shipping times and localised offers, and use authentic local reviews and location-relevant content to capture regional demand."
          }
        },
        {
          "@type": "Question",
          "name": "How is B2B e-commerce SEO different from B2C?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "B2B buyers search problem-first, using functional requirements, integration needs and compliance standards rather than product names. Decisions involve multiple stakeholders, so B2B e-commerce SEO focuses on precise, often low-volume high-intent queries, supported by case studies, technical specifications, certifications and industry-specific landing pages."
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
      {ECOMMERCE_SEO_SCHEMA["@graph"].map((item, index) => (
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
