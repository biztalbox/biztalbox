import { Metadata } from "next";
import { createMetadata } from "@/utils/metadata";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "Pet Care SEO Experts | Scale Grooming, Vet & Boarding Sales!",
  description:
    "Hire pet care SEO experts to increase visibility, outrank competitors, and generate grooming, vet and boarding sales month after month. Proven systems now! ROI!",
};

export const metadata = createMetadata(
  baseMetadata,
  "/petcare-seo"
);

const PETCARE_SEO_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://biztalbox.com/#organization",
      name: "Biztalbox",
      url: "https://biztalbox.com/",
      logo: "https://biztalbox.com/_next/static/media/black.e66748b8.png",
      image: "https://biztalbox.com/_next/static/media/black.e66748b8.png",
      telephone: "+91-9485699709",
      email: "info@biztalbox.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "A-11, 2nd Floor, Sector 8, Dwarka",
        addressLocality: "New Delhi",
        addressRegion: "Delhi",
        postalCode: "110077",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.facebook.com/BiztalBox",
        "https://www.instagram.com/biztalbox",
        "https://x.com/BiztalBox",
        "https://www.linkedin.com/company/biztalbox",
        "https://www.youtube.com/@biztalboxofficial",
        "https://in.pinterest.com/biztalbox/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://biztalbox.com/#website",
      url: "https://biztalbox.com/",
      name: "Biztalbox",
      publisher: { "@id": "https://biztalbox.com/#organization" },
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": "https://biztalbox.com/petcare-seo#webpage",
      url: "https://biztalbox.com/petcare-seo",
      name: "Pet Care SEO Experts | Scale Grooming, Vet & Boarding Sales!",
      description:
        "Hire pet care SEO experts to increase visibility, outrank competitors, and generate grooming, vet and boarding sales month after month.",
      inLanguage: "en",
      isPartOf: { "@id": "https://biztalbox.com/#website" },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://biztalbox.com/_next/static/media/industry-overview-petcare-2026.9867116d.jpg",
      },
      breadcrumb: { "@id": "https://biztalbox.com/petcare-seo#breadcrumb" },
      mainEntity: { "@id": "https://biztalbox.com/petcare-seo#service" },
      publisher: { "@id": "https://biztalbox.com/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://biztalbox.com/petcare-seo#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://biztalbox.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://biztalbox.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Pet Care SEO",
          item: "https://biztalbox.com/petcare-seo",
        },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://biztalbox.com/petcare-seo#service",
      name: "Pet Care SEO Services",
      alternateName: [
        "Pet Industry SEO",
        "Veterinary SEO",
        "SEO for Pet Businesses",
      ],
      serviceType: "Search Engine Optimization",
      url: "https://biztalbox.com/petcare-seo",
      description:
        "Specialised SEO for veterinary clinics, pet groomers, boarding services, pet stores, pet food brands and pet e-commerce businesses, covering keyword strategy, content strategy, local SEO, off-page SEO and technical SEO.",
      category: "Digital Marketing",
      areaServed: "Worldwide",
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "Veterinary clinics, pet groomers, pet boarding services, pet stores, pet trainers, pet brands and pet e-commerce businesses",
      },
      provider: { "@id": "https://biztalbox.com/#organization" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Pet Care SEO Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pet Care Keyword Strategy",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pet Care Content Strategy",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Local SEO for Veterinary Clinics and Pet Services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Off-Page SEO and Link Building for Pet Businesses",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Technical SEO for Pet Care Websites",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "E-commerce SEO for Pet Products",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://biztalbox.com/petcare-seo#faq",
      isPartOf: { "@id": "https://biztalbox.com/petcare-seo#webpage" },
      mainEntity: [
        {
          "@type": "Question",
          name: "What is pet care SEO and how does it help pet businesses grow online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO determines which businesses appear when people search for pet-related services, products, or information on Google. It ensures pet businesses show up in searches like “veterinarian near me” or “pet groomer near me,” helping them enter the consideration set of pet owners who are actively looking for care, products, or services.",
          },
        },
        {
          "@type": "Question",
          name: "Why is SEO important in the pet care industry in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO is important because pet owners now compare, verify, and evaluate before making decisions. Search has become the primary gateway to trust in the pet care market. SEO ensures businesses appear during these critical search moments, making them visible when pet owners are making informed, research-driven decisions.",
          },
        },
        {
          "@type": "Question",
          name: "What makes pet industry SEO different from regular SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pet industry SEO is different because search intent is highly emotional, urgent, and decision-driven. Pet owners search when they need services or products immediately. SEO ensures businesses appear during these local, informational, or transactional searches that reflect real-time decision-making behavior.",
          },
        },
        {
          "@type": "Question",
          name: "What are the main benefits of SEO for pet care businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO improves visibility, brings higher-intent enquiries, builds trust, and delivers compounding long-term value. It helps pet businesses appear across search journeys, from local discovery to comparison and decision-making, increasing calls, bookings, and long-term customer relationships.",
          },
        },
        {
          "@type": "Question",
          name: "Why is SEO better than paid ads for pet businesses in the long run?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO creates compounding value over time. Each optimized page and ranking strengthens future visibility. Unlike ads, SEO builds long-term presence, reduces dependency on paid platforms, and helps pet businesses grow steadily through repeated search exposure.",
          },
        },
        {
          "@type": "Question",
          name: "How does SEO help pet businesses compete with big brands?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO allows smaller pet businesses to compete with larger platforms by focusing on relevance, niche queries, and local searches. It helps them appear in front of pet owners at the right time, based on intent rather than brand size.",
          },
        },
        {
          "@type": "Question",
          name: "What type of keywords should pet businesses target for SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pet businesses should target high-intent queries like emergency services, long-tail niche keywords like “hypoallergenic cat food online,” and local keywords. These reflect real search behavior and help connect businesses with users ready to take action.",
          },
        },
        {
          "@type": "Question",
          name: "Why is local SEO important for pet care businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Local SEO ensures pet businesses appear in searches like “vet near me” or “pet clinic open now.” It improves visibility in map results, builds local trust, and helps businesses attract nearby customers who need immediate services.",
          },
        },
        {
          "@type": "Question",
          name: "How does SEO help pet businesses during urgent pet care searches?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pet care searches are often driven by urgency, such as health concerns or emergencies. SEO ensures businesses appear when pet owners search for immediate solutions, increasing the chance of calls, bookings, and direct contact during critical decision moments.",
          },
        },
        {
          "@type": "Question",
          name: "How does SEO support veterinary clinics in attracting new patients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO helps veterinary clinics appear in searches like “veterinarian near me” or symptom-based queries. This ensures clinics are discovered during real-time decision-making when pet owners are actively looking for medical care or consultation.",
          },
        },
        {
          "@type": "Question",
          name: "How to build effective SEO content for pet care businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Effective pet care SEO content starts with understanding keywords that reflect real pet owner questions and concerns. Content must also demonstrate expertise and trust through professional advice, credentials, and real insights. It should handle YMYL topics like pet health with accuracy and transparency. Since pet owners rely heavily on online research, trustworthy content becomes essential for visibility, trust, and action.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Biztalbox the right SEO company for pet care businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Biztalbox is a specialist pet SEO company that focuses on industry-specific strategies, local demand, and long-term visibility. It combines continuous optimization, transparency, and tailored SEO approaches to help pet businesses grow through sustained search presence and high-intent leads.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {PETCARE_SEO_SCHEMA["@graph"].map((item, index) => (
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
