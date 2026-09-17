import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "Education SEO Services to Boost Your Online Visibility",
  description:
    "Improve your education website ranking with expert SEO services. Drive traffic, increase enrollments, and grow your online presence effectively.",
};

export const metadata = createMetadata(baseMetadata, "/education-seo");

const EDUCATION_SEO_SCHEMA = {
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
      "@id": "https://biztalbox.com/education-seo#webpage",
      "url": "https://biztalbox.com/education-seo",
      "name": "Education SEO Services to Boost Your Online Visibility",
      "headline": "The Complete Education SEO Strategy Guide: Visibility, Student Acquisition, and SEO Strategy for Growth",
      "description": "Improve your education website ranking with expert SEO services. Drive traffic, increase enrollments, and grow your online presence effectively.",
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://biztalbox.com/#website"
      },
      "breadcrumb": {
        "@id": "https://biztalbox.com/education-seo#breadcrumb"
      },
      "mainEntity": {
        "@id": "https://biztalbox.com/education-seo#service"
      },
      "hasPart": {
        "@id": "https://biztalbox.com/education-seo#faq"
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
          "name": "Education",
          "sameAs": "https://en.wikipedia.org/wiki/Education"
        },
        {
          "@type": "Thing",
          "name": "Educational technology",
          "sameAs": "https://en.wikipedia.org/wiki/Educational_technology"
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
          "name": "Higher education",
          "sameAs": "https://en.wikipedia.org/wiki/Higher_education"
        },
        {
          "@type": "Thing",
          "name": "International student",
          "sameAs": "https://en.wikipedia.org/wiki/International_student"
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
          "name": "Google AI Overviews"
        },
        {
          "@type": "Thing",
          "name": "Generative Engine Optimization (GEO)"
        }
      ],
      "keywords": "education SEO, SEO for educational institutions, SEO for colleges and universities, education SEO services, edtech SEO, local SEO for coaching institutions, higher education SEO, student acquisition SEO"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://biztalbox.com/education-seo#breadcrumb",
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
          "name": "Education SEO",
          "item": "https://biztalbox.com/education-seo"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/education-seo#service",
      "name": "Education SEO Services",
      "alternateName": [
        "SEO for Educational Institutions",
        "SEO for Colleges and Universities",
        "EdTech SEO",
        "Education SEO Marketing"
      ],
      "serviceType": "Search Engine Optimization",
      "category": "Digital Marketing",
      "url": "https://biztalbox.com/education-seo",
      "description": "YMYL-aware SEO for schools, colleges, universities, edtech platforms and coaching institutes, built around a long, research-driven, trust-heavy student decision journey. Covers informational, commercial, transactional and navigational keyword strategy, awareness-to-decision content with E-E-A-T, academic listings, backlinks, student reviews and partnerships, technical SEO with course architecture and schema, local SEO with Google Business Profile and location pages, and AIO and GEO for AI-driven search, focused on enrolments across admission cycles.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "areaServed": "Worldwide",
      "audience": [
        {
          "@type": "EducationalAudience",
          "educationalRole": "student"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Schools, colleges and universities"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Edtech and online learning platforms"
        },
        {
          "@type": "BusinessAudience",
          "audienceType": "Coaching, training and certification institutes"
        }
      ],
      "offers": {
        "@type": "Offer",
        "name": "Free 30-minute consultation call",
        "description": "No-obligation consultation with expert advice tailored to your educational institution.",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://biztalbox.com/education-seo",
        "seller": {
          "@id": "https://biztalbox.com/#organization"
        }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Education SEO Services",
        "itemListElement": [
          {
            "@type": "OfferCatalog",
            "name": "Education SEO by Institution Type",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/education-seo#college-university-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/education-seo#edtech-seo"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@id": "https://biztalbox.com/education-seo#coaching-local-seo"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Education Keyword Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Informational keywords for course and career exploration"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial keywords for course and institution comparison"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Transactional keywords for admissions and applications"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Navigational brand and institution keywords"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Education Content Strategy",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Awareness content on courses, careers and study paths"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Consideration content comparing courses and institutions"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Decision content with testimonials, placement reports and alumni outcomes"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "E-E-A-T aligned content with internal linking across the funnel"
                }
              }
            ]
          },
          {
            "@type": "OfferCatalog",
            "name": "Off-Page SEO for Education",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Academic listings on course directories, ranking platforms and admission portals"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Backlinks from academic and education sources"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Student reviews and discussion platform presence"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Brand mentions, thought leadership and institutional partnerships"
                }
              }
            ]
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical SEO with course architecture, speed, mobile, indexing and schema"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Local SEO with Google Business Profile, location pages and reviews"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AIO and GEO for AI Overviews, ChatGPT, Perplexity and Gemini"
            }
          }
        ]
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/education-seo#college-university-seo",
      "name": "College & University SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for colleges and universities across the full student decision journey, with course, program and admission content, comparison-stage visibility, academic authority signals, structured course architecture and trust content like placement reports and alumni outcomes.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Colleges, universities and higher education institutions"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/education-seo#edtech-seo",
      "name": "EdTech & Online Learning SEO",
      "serviceType": "Search Engine Optimization",
      "description": "SEO for edtech platforms and online course providers, focused on course-based and skill keywords, program landing pages that rank independently, scalable content across many courses and visibility for learners searching from any location.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Edtech platforms and online learning providers"
      }
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/education-seo#coaching-local-seo",
      "name": "Coaching Institute & Local Education SEO",
      "serviceType": "Local SEO",
      "description": "Local SEO for coaching institutes, training centres and schools where students choose based on distance and daily accessibility, covering Google Business Profile, near-me and city keywords, location pages, reviews and locally relevant admission content.",
      "provider": {
        "@id": "https://biztalbox.com/#organization"
      },
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Coaching institutes, training centres and schools"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://biztalbox.com/education-seo#faq",
      "isPartOf": {
        "@id": "https://biztalbox.com/education-seo#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is education SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Education SEO is the practice of optimising the websites of schools, colleges, universities and edtech platforms so they appear on search engines when someone searches for courses, admissions or academic information. It helps institutions become visible at the moment students and parents are researching and comparing options."
          }
        },
        {
          "@type": "Question",
          "name": "Why do educational institutions need SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most students and parents now compare courses, institutions and outcomes online before deciding, so the first step in choosing an institution is almost always a search. If an institution is not visible when users are actively searching, it is rarely part of the decision and risks losing potential enrolments."
          }
        },
        {
          "@type": "Question",
          "name": "How is education SEO different from general SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Education falls under Google's YMYL (Your Money or Your Life) category because the information affects major life decisions about careers and finances. Search engines apply higher scrutiny, judging a website on credibility, accuracy and how responsibly it presents information, not just keywords and structure."
          }
        },
        {
          "@type": "Question",
          "name": "What keywords should educational institutions target?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Institutions should target informational keywords like \"what is a data science course\", commercial comparison keywords like \"top MBA colleges in the UK\", transactional keywords like \"apply for MBA in Canada\", and navigational keywords where students search for a specific institution by name."
          }
        },
        {
          "@type": "Question",
          "name": "What content works best for education SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Content should follow the student journey: awareness content like \"best courses after 12th science\", consideration content comparing universities and programs, and decision content such as student testimonials, placement reports and alumni success stories. Because education is YMYL, content must be accurate and demonstrate E-E-A-T."
          }
        },
        {
          "@type": "Question",
          "name": "Why is E-E-A-T important for education websites?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "E-E-A-T stands for Experience, Expertise, Authoritativeness and Trustworthiness. Education decisions depend heavily on trust, credibility and clarity of outcomes, so search engines prioritise institutions that present accurate, responsible information. Vague claims or exaggeration can quickly damage both rankings and student confidence."
          }
        },
        {
          "@type": "Question",
          "name": "Why is local SEO important for educational institutions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A large share of student searches are local and admission-driven, since distance and daily accessibility often influence the choice, especially for schools and coaching institutes. Local SEO, including Google Business Profile, \"near me\" and city-based keywords, location pages, reviews and consistent listings, helps institutions appear where nearby students are deciding."
          }
        },
        {
          "@type": "Question",
          "name": "How does off-page SEO help educational institutions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students look for credibility signals outside an institution's website. Off-page SEO builds this through accurate listings on course directories, ranking platforms and admission portals, backlinks from academic and education sources, presence on student review and discussion forums, brand mentions, and partnerships with universities and certification bodies."
          }
        },
        {
          "@type": "Question",
          "name": "How do reviews affect education SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Before applying, students want to know what others experienced with placements, faculty and course quality. Reviews from students and parents act as strong trust signals in local search and directly influence how confident a student feels about choosing an institution, so genuine, experience-driven reviews are important."
          }
        },
        {
          "@type": "Question",
          "name": "What technical SEO does an education website need?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Education websites are content-heavy, so they need fast loading, a strong mobile experience, a clear course architecture organised by degree and specialisation, proper indexing and crawlability so every program page is discoverable, and structured data for courses, FAQs and institutional information."
          }
        },
        {
          "@type": "Question",
          "name": "How does AI search affect educational institutions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Students increasingly ask questions like \"best MBA colleges\" or \"top design courses\" in AI Overviews and tools like ChatGPT, Perplexity and Gemini, and rely on the summarised answer to shortlist. To be included, education content needs a clear structure, FAQs, consistent and accurate information, and comprehensive, verifiable pages."
          }
        },
        {
          "@type": "Question",
          "name": "Does education SEO help attract international students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Students search from different locations with different goals, and SEO helps an institution appear for both local admission searches and searches from students looking for opportunities abroad. Well-structured, program-specific content lets an institution expand its reach without changing its core offering."
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
      {EDUCATION_SEO_SCHEMA["@graph"].map((item, index) => (
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
