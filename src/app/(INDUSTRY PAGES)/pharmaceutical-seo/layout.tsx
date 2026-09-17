import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "Pharmaceutical SEO Agency | Boost Pharma Website Traffic",
  description:
    "Top pharmaceutical SEO agency helping pharma companies rank higher on Google, drive targeted traffic, and generate quality leads effectively.",
};

export const metadata = createMetadata(baseMetadata, "/pharmaceutical-seo");

const PHARMACEUTICAL_SEO_SCHEMA = {
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
      "@id": "https://biztalbox.com/pharmaceutical-seo#webpage",
      "url": "https://biztalbox.com/pharmaceutical-seo",
      "name": "Pharmaceutical SEO Agency | Boost Pharma Website Traffic",
      "headline": "The Definitive Guide to Pharmaceutical SEO: How It Works and Proven SEO Strategies for Business Growth",
      "description": "Top pharmaceutical SEO agency helping pharma companies rank higher on Google, drive targeted traffic, and generate quality leads effectively.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://biztalbox.com/#website"
      },
      "breadcrumb": {
        "@id": "https://biztalbox.com/pharmaceutical-seo#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://biztalbox.com/pharmaceutical-seo#service"
      },
      "hasPart": {
        "@id": "https://biztalbox.com/pharmaceutical-seo#faq"
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
          "name": "Pharmaceutical industry",
          "sameAs": "https://en.wikipedia.org/wiki/Pharmaceutical_industry"
        },
        {
          "@type": "Thing",
          "name": "Medication",
          "sameAs": "https://en.wikipedia.org/wiki/Medication"
        }
      ],
      "mentions": [
        {
          "@type": "Thing",
          "name": "Your Money or Your Life (YMYL)"
        },
        {
          "@type": "Thing",
          "name": "E-E-A-T"
        },
        {
          "@type": "Thing",
          "name": "Pharmacy",
          "sameAs": "https://en.wikipedia.org/wiki/Pharmacy"
        },
        {
          "@type": "Thing",
          "name": "Regulatory compliance",
          "sameAs": "https://en.wikipedia.org/wiki/Regulatory_compliance"
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
          "name": "Google AI Overviews"
        },
        {
          "@type": "Thing",
          "name": "Generative Engine Optimization (GEO)"
        }
      ],
      "keywords": "pharmaceutical SEO, pharma SEO, SEO for pharmaceutical companies, SEO for pharmaceutical industry, pharmaceutical SEO agency, SEO for pharmacies, local SEO for pharmaceutical companies"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://biztalbox.com/pharmaceutical-seo#breadcrumb",
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
          "name": "Pharmaceutical SEO",
          "item": "https://biztalbox.com/pharmaceutical-seo"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/pharmaceutical-seo#service",
      "name": "Pharmaceutical SEO Services",
      "alternateName": [
        "Pharma SEO",
        "SEO for Pharmaceutical Companies",
        "SEO for Pharmaceutical Industry",
        "Pharmaceutical SEO Marketing"
      ],
      "serviceType": "Search Engine Optimization",
      "category": "Digital Marketing",
      "url": "https://biztalbox.com/pharmaceutical-seo",
      "description": "YMYL-aware, compliance-focused SEO for pharmaceutical brands, online pharmacies and local medicine stores, built around health-driven, high-trust search. Covers informational, branded, transactional and commercial investigation keyword strategy, educational, drug-specific and comparison content with E-E-A-T and medical accuracy, medical authority backlinks, digital PR, directories and reviews, technical SEO with schema, local SEO with Google Business Profile and location pages, and AIO and GEO for AI-driven search.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "areaServed": "Worldwide",
      "audience": [
        {
          "@type": "BusinessAudience",
          "audienceType": "Pharmaceutical manufacturers and brands"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Online pharmacies and medicine e-commerce businesses"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Local pharmacies and medicine stores"
        }
      ],
      "offers": {
        "@type": "Offer",
        "name": "Free 30-minute consultation call",
        "description": "No-obligation consultation with expert advice tailored to your pharmaceutical business.",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://biztalbox.com/pharmaceutical-seo",
        "seller": {
          "@id": "https://biztalbox.com/#organization"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Pharmaceutical SEO Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Pharmaceutical SEO by Business Type",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/pharmaceutical-seo#pharma-brand-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/pharmaceutical-seo#online-pharmacy-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/pharmaceutical-seo#local-pharmacy-seo"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Pharmaceutical Keyword Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Informational keywords for drugs, conditions and treatments"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Navigational and branded drug and company keywords"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Transactional keywords for product and service pages"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial investigation keywords for drug comparison"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Pharmaceutical Content Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Educational content for awareness and clarity"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Drug-specific pages with usage, dosage, side effects and precautions"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Comparison and symptom content for informed evaluation"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "E-E-A-T aligned, compliant content with internal linking"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Off-Page SEO for Pharma",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "High-authority backlinks from medical and healthcare websites"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Guest contributions on trusted health platforms"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Digital PR and brand mentions in credible publications"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Medical directory and platform listings"
                }
              }
            ]
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO with speed, mobile, HTTPS, structure, schema and indexing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Local SEO with Google Business Profile, reviews and location pages"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AIO and GEO for AI Overviews, ChatGPT and Perplexity"
            }
          }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/pharmaceutical-seo#pharma-brand-seo",
      "name": "Pharmaceutical Brand & Manufacturer SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for pharmaceutical manufacturers and brands, focused on drug and condition education, branded search visibility, medical authority signals, compliant content and structured data, so patients, doctors and institutions find accurate information.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Pharmaceutical manufacturers and brands"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/pharmaceutical-seo#online-pharmacy-seo",
      "name": "Online Pharmacy & Medicine E-commerce SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for online pharmacies and medicine e-commerce businesses, focused on product and category page structure, drug information pages, trust and compliance signals and technical SEO for large medicine catalogs.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Online pharmacies and medicine e-commerce businesses"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/pharmaceutical-seo#local-pharmacy-seo",
      "name": "Local Pharmacy SEO",
      "serviceType": "Local SEO",
      "description": "Local SEO for pharmacies and medicine stores targeting urgent near-me searches, covering Google Business Profile optimisation, local and city keywords, reviews, consistent directory listings and location pages that turn nearby demand into store visits.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Local pharmacies and medicine stores"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://biztalbox.com/pharmaceutical-seo#faq",
      "isPartOf": {
        "@id": "https://biztalbox.com/pharmaceutical-seo#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is pharmaceutical SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pharmaceutical SEO is the process of making a pharma website appear when people search for medicines, treatments, symptoms or health-related information. It connects real health searches to accurate, relevant pages explaining drugs, how they work, dosage, side effects, comparisons and condition-based information."
          }
        },
        {
          "@type": "Question",
          "name": "Why do pharmaceutical companies need SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Research now begins before a prescription is written, as people search symptoms, compare treatments and try to understand their condition online. This early stage is where perception forms. If a pharma company is missing from search results, it rarely enters the conversation later, so visibility is a deciding factor."
          }
        },
        {
          "@type": "Question",
          "name": "How is pharmaceutical SEO different from general SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google treats pharma as a YMYL (\"Your Money or Your Life\") category because the content can influence real health decisions, so it applies stricter checks. Pharmaceutical SEO cannot rely on relevance and basic optimisation alone; it needs accuracy, verified information and strong trust signals to perform."
          }
        },
        {
          "@type": "Question",
          "name": "What keywords should pharmaceutical businesses target?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pharma businesses should target informational keywords like \"what is metformin used for\", navigational and branded keywords like a company or medicine name, transactional keywords aligned to relevant product or service pages, and commercial investigation keywords where users compare options before deciding."
          }
        },
        {
          "@type": "Question",
          "name": "What content works best for pharmaceutical SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Content should span the user journey while staying medically sound: educational content that explains conditions and treatments simply, drug-specific pages covering usage, dosage, side effects, precautions and interactions, and comparison and symptom content that helps users understand options through clear, structured information."
          }
        },
        {
          "@type": "Question",
          "name": "Why is E-E-A-T and accuracy so important in pharma content?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Because pharmaceutical content directly affects health decisions, it falls under strict YMYL standards. Google prioritises content that is accurate, clear, verifiable and responsibly presented. Weak, vague or exaggerated content not only fails to rank but also fails to build credibility, which is critical in this space."
          }
        },
        {
          "@type": "Question",
          "name": "Why is local SEO important for pharmacies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many pharmaceutical searches are location-based and urgent, like \"pharmacy near me\" or \"medicine shop in [city]\". For businesses with physical locations, local SEO, including Google Business Profile, near-me and city keywords, reviews, consistent directory listings and location pages, turns visibility into real-world visits."
          }
        },
        {
          "@type": "Question",
          "name": "How does off-page SEO work for pharmaceutical brands?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In pharma, off-page SEO builds credibility through authority rather than volume. It relies on backlinks from reputable medical and healthcare websites, guest contributions on trusted health platforms, digital PR, brand mentions across credible sources, and accurate listings on medical directories, all reinforcing trust."
          }
        },
        {
          "@type": "Question",
          "name": "What technical SEO does a pharmaceutical website need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pharmaceutical websites need fast loading to prevent drop-offs, a strong mobile experience since most health searches happen on mobile, HTTPS security, a clean structure for large and complex information sets, schema markup so search engines interpret drug and medical pages correctly, and reliable indexing."
          }
        },
        {
          "@type": "Question",
          "name": "How does AI search affect pharmaceutical companies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google's AI Overviews and tools like ChatGPT and Perplexity now summarise drug uses, dosage and side effects directly, and that summary often becomes the starting point and filter. To be included, pharma content needs precise definitions, FAQs, extractable structure, complete coverage, consistency across platforms and verifiable accuracy."
          }
        },
        {
          "@type": "Question",
          "name": "Can pharmaceutical SEO stay compliant with marketing regulations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pharmaceutical marketing carries strict limitations, and you cannot overpromise or promote aggressively. SEO works differently, focusing on clear, factual information users are already searching for. A well-planned approach helps a brand stay visible while staying compliant, which traditional promotional marketing often struggles with."
          }
        },
        {
          "@type": "Question",
          "name": "Is SEO a sustainable growth channel for pharma businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. SEO takes time to build, but once content ranks it keeps bringing users in consistently without depending on constant ad spend, unlike campaigns that stop when the budget ends. This makes it one of the more sustainable, compounding growth channels in the pharmaceutical industry."
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
      {PHARMACEUTICAL_SEO_SCHEMA["@graph"].map((item, index) => (
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
