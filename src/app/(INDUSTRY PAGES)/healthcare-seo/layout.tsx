import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "Healthcare SEO Services | Boost Medical Website Rankings",
  description:
    "Improve your healthcare website’s visibility with expert SEO services. Drive more patients, rank higher on Google, and grow your medical practice online.",
};

export const metadata = createMetadata(baseMetadata, "/healthcare-seo");

const HEALTHCARE_SEO_SCHEMA = {
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
      "@id": "https://biztalbox.com/healthcare-seo#webpage",
      "url": "https://biztalbox.com/healthcare-seo",
      "name": "Healthcare SEO Services | Boost Medical Website Rankings",
      "headline": "The Ultimate Healthcare SEO Guide: Understanding Search Visibility and SEO Strategy for Business Growth",
      "description": "Improve your healthcare website's visibility with expert SEO services. Drive more patients, rank higher on Google, and grow your medical practice online.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://biztalbox.com/#website"
      },
      "breadcrumb": {
        "@id": "https://biztalbox.com/healthcare-seo#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://biztalbox.com/healthcare-seo#service"
      },
      "hasPart": {
        "@id": "https://biztalbox.com/healthcare-seo#faq"
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
          "name": "Health care",
          "sameAs": "https://en.wikipedia.org/wiki/Health_care"
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
          "name": "Your Money or Your Life (YMYL)"
        },
        {
          "@type": "Thing",
          "name": "E-E-A-T"
        },
        {
          "@type": "Thing",
          "name": "HIPAA",
          "sameAs": "https://en.wikipedia.org/wiki/Health_Insurance_Portability_and_Accountability_Act"
        },
        {
          "@type": "Thing",
          "name": "Preventive healthcare",
          "sameAs": "https://en.wikipedia.org/wiki/Preventive_healthcare"
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
          "name": "Generative Engine Optimization (GEO)"
        }
      ],
      "keywords": "healthcare SEO, medical SEO, SEO for healthcare providers, SEO for healthcare industry, healthcare SEO services, local SEO for healthcare, hospital SEO, clinic SEO"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://biztalbox.com/healthcare-seo#breadcrumb",
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
          "name": "Healthcare SEO",
          "item": "https://biztalbox.com/healthcare-seo"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/healthcare-seo#service",
      "name": "Healthcare SEO Services",
      "alternateName": [
        "Medical SEO",
        "SEO for Healthcare Providers",
        "SEO for Healthcare Industry",
        "Healthcare SEO Marketing"
      ],
      "serviceType": "Search Engine Optimization",
      "category": "Digital Marketing",
      "url": "https://biztalbox.com/healthcare-seo",
      "description": "YMYL-aware SEO for hospitals, clinics and medical practitioners built around symptom-first, high-trust, location-based patient search. Covers informational, service, local and long-tail keyword strategy, awareness-to-decision content with E-E-A-T and medical accuracy, medical authority backlinks, digital PR, citations and reviews, technical SEO with healthcare schema, local SEO with Google Business Profile and location pages, and AIO and GEO for AI-driven search, handled with attention to HIPAA and testimonial guidelines.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "areaServed": "Worldwide",
      "audience": [
        {
          "@type": "BusinessAudience",
          "audienceType": "Individual doctors, specialists and private clinics"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Hospitals and multi-location healthcare providers"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Preventive care, diagnostic and specialty healthcare services"
        }
      ],
      "offers": {
        "@type": "Offer",
        "name": "Free 30-minute consultation call",
        "description": "No-obligation consultation with expert advice tailored to your healthcare practice.",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://biztalbox.com/healthcare-seo",
        "seller": {
          "@id": "https://biztalbox.com/#organization"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Healthcare SEO Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Healthcare SEO by Provider Type",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/healthcare-seo#clinic-doctor-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/healthcare-seo#hospital-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/healthcare-seo#local-healthcare-seo"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Healthcare Keyword Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Informational keywords for symptoms and conditions"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Service keywords for treatments and procedures"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Local keywords for doctor and clinic near-me searches"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Long-tail keywords for specific conditions and specialties"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Healthcare Content Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Awareness content on symptoms and conditions"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Consideration content comparing treatments and outcomes"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Decision content on consultation, availability and expertise"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "E-E-A-T aligned, medically accurate and regularly updated content"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Off-Page SEO for Healthcare",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Medical authority backlinks from journals, hospital networks and health publications"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Healthcare digital PR and brand mentions"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Local healthcare citations and directory listings"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Patient review and reputation management"
                }
              }
            ]
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO with crawlability, speed, mobile, HTTPS and healthcare schema"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Local SEO with Google Business Profile, NAP consistency and location pages"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AIO and GEO for AI Mode, ChatGPT, Gemini and Perplexity"
            }
          }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/healthcare-seo#clinic-doctor-seo",
      "name": "Clinic & Doctor SEO",
      "serviceType": "Local SEO",
      "description": "SEO for individual doctors, specialists and private clinics, focused on symptom and treatment content, condition-specific and near-me keywords, doctor profile schema, reviews and local visibility that turns patient research into appointments.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Individual doctors, specialists and private clinics"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/healthcare-seo#hospital-seo",
      "name": "Hospital & Multi-Location Healthcare SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for hospitals and multi-location healthcare providers, focused on department and treatment content, medical authority backlinks and digital PR, structured data at scale, and location landing pages that let providers rank across many services and areas.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Hospitals and multi-location healthcare providers"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/healthcare-seo#local-healthcare-seo",
      "name": "Local SEO for Healthcare Providers",
      "serviceType": "Local SEO",
      "description": "Local SEO for clinics and hospitals covering Google Business Profile optimisation, local and service-location keywords, NAP consistency, patient reviews and dedicated location landing pages, ensuring online visibility turns into real appointments for nearby patients.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Clinics and hospitals serving specific local areas"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://biztalbox.com/healthcare-seo#faq",
      "isPartOf": {
        "@id": "https://biztalbox.com/healthcare-seo#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is healthcare SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Healthcare SEO is the process of improving how a medical practice appears when people search for health-related information and services on Google. It helps clinics, hospitals and practitioners become visible at the moment patients are searching, which is often the first interaction a patient has with a provider."
          }
        },
        {
          "@type": "Question",
          "name": "How is healthcare SEO different from normal SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Healthcare content falls under Google's YMYL (Your Money or Your Life) category because it can affect a person's health and safety, so search engines evaluate it more strictly. Accuracy, responsible claims and E-E-A-T are essential, and in some regions healthcare SEO must also respect privacy regulations like HIPAA around patient data and testimonials."
          }
        },
        {
          "@type": "Question",
          "name": "Why do healthcare providers need SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Patients no longer rely only on referrals. They search online when something feels uncertain, compare options and decide who feels right for their situation. If a provider does not appear during this early research, they are often left out entirely, no matter how good their care is."
          }
        },
        {
          "@type": "Question",
          "name": "What keywords should healthcare providers target?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Healthcare providers should target informational keywords like \"symptoms of flu\", service keywords like \"acne treatment\" or \"dental cleaning services\", local keywords like \"doctor near me\" or \"clinic in [city]\", and long-tail keywords like \"best dermatologist for acne scars in [city]\" that carry high conversion intent."
          }
        },
        {
          "@type": "Question",
          "name": "What content works best for healthcare SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Content should follow the patient journey: awareness content that explains symptoms accurately and responsibly, consideration content that compares treatments and outcomes, and decision content focused on consultation, availability and expertise. Because it can affect health decisions, all content must be accurate and demonstrate E-E-A-T."
          }
        },
        {
          "@type": "Question",
          "name": "Why is E-E-A-T so important in healthcare content?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "E-E-A-T stands for Experience, Expertise, Authoritativeness and Trustworthiness. In healthcare, content can affect patient safety and decisions, so search engines prioritise content that is medically accurate, clearly written and produced or reviewed by credible sources. Weak or exaggerated content can harm both rankings and patients."
          }
        },
        {
          "@type": "Question",
          "name": "Why is local SEO essential for clinics and hospitals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most healthcare decisions are made locally, since patients prefer nearby providers they can actually visit. Local SEO, including Google Business Profile optimisation, local keywords, NAP consistency, reviews and location landing pages, ensures a provider appears in \"near me\" and city-based searches where most shortlisting and booking happens."
          }
        },
        {
          "@type": "Question",
          "name": "How important are patient reviews for healthcare SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Reviews strongly influence both rankings and patient decisions. Patients read reviews before choosing a provider, compare experiences and look for reassurance. A strong, consistent review profile builds trust early and improves local visibility, and in dense urban markets reviews can matter as much as rankings."
          }
        },
        {
          "@type": "Question",
          "name": "What kind of backlinks help a healthcare website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Healthcare websites benefit most from authoritative, relevant links, such as those from medical journals, hospital networks and recognised health publications, which signal genuine expertise. Irrelevant or low-quality backlinks add no value and can even reduce credibility in a category where trust is critical."
          }
        },
        {
          "@type": "Question",
          "name": "What technical SEO does a healthcare website need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A healthcare website needs clean crawlability and indexing, fast loading for urgent searches, mobile responsiveness, HTTPS security for sensitive interactions, and structured data and schema for doctor profiles, treatment pages and FAQs so search engines clearly understand the content and can show it in rich results."
          }
        },
        {
          "@type": "Question",
          "name": "How does AI search affect healthcare providers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google's AI Mode and tools like ChatGPT, Gemini and Perplexity now generate direct, summarised answers instead of only links. To be included, healthcare content should use a clear FAQ format, simple explanations, logical structure, in-depth accurate coverage and credible authority, so AI systems can understand and safely reference it."
          }
        },
        {
          "@type": "Question",
          "name": "Is SEO more cost-effective than ads for healthcare providers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Once a healthcare website ranks for relevant searches, it keeps attracting patient enquiries without paying for each click or lead, unlike paid channels that need continuous budgets. Over time this lowers the overall cost per patient and creates a steadier, more predictable flow of enquiries."
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
      {HEALTHCARE_SEO_SCHEMA["@graph"].map((item, index) => (
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
