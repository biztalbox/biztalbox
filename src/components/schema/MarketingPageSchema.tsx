import Script from 'next/script';
import { 
  Organization,
  LocalBusiness, 
  Service,
  WebPage,
  BreadcrumbList,
  FAQPage,
  Graph
} from '@/types/schema-types';
import { organizationData } from '@/data/schema-data';

export interface MarketingPageData {
  title: string;
  description: string;
  path: string;
  serviceType: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  reviews: Array<{
    author: string;
    rating: number;
    text: string;
  }>;
  aggregateRating: {
    rating: number;
    reviewCount: number;
    bestRating: number;
  };
  image?: string;
}

interface MarketingPageSchemaProps {
  pageData: MarketingPageData;
  currentUrl: string;
}

export default function MarketingPageSchema({ 
  pageData, 
  currentUrl 
}: MarketingPageSchemaProps) {
  const schemas: any[] = [];
  const baseUrl = "https://biztalbox.com";

  // 1. Organization Schema (always included)
  const organizationSchema: Organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: organizationData.name,
    url: organizationData.url,
    logo: organizationData.logo,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: organizationData.telephone,
        contactType: "customer service"
      }
    ],
    sameAs: organizationData.socialMedia,
    foundingDate: organizationData.foundingDate,
    founder: {
      "@type": "Person", 
      name: organizationData.founder
    },
    description: organizationData.description
  };
  schemas.push(organizationSchema);

  // 2. Service Schema with @graph structure
  const serviceGraphSchema: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": currentUrl,
        name: pageData.title,
        url: currentUrl,
        description: pageData.description,
        serviceType: pageData.serviceType,
        provider: {
          "@id": "#biztalbox"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "#biztalbox",
        name: "Biztalbox",
        url: organizationData.url,
        image: pageData.image || organizationData.logo,
        telephone: organizationData.telephone,
        priceRange: "INR",
        address: {
          "@type": "PostalAddress",
          streetAddress: organizationData.address.streetAddress,
          addressLocality: organizationData.address.addressLocality,
          addressRegion: organizationData.address.addressRegion,
          postalCode: organizationData.address.postalCode,
          addressCountry: organizationData.address.addressCountry
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: pageData.aggregateRating.rating,
          bestRating: pageData.aggregateRating.bestRating,
          ratingCount: pageData.aggregateRating.reviewCount
        },
        review: pageData.reviews.map(review => ({
          "@type": "Review",
          author: {
            "@type": "Person",
            name: review.author
          },
          reviewBody: review.text,
          reviewRating: {
            "@type": "Rating",
            ratingValue: review.rating,
            bestRating: 5
          }
        }))
      }
    ]
  };
  schemas.push(serviceGraphSchema);

  // 3. FAQ Schema
  if (pageData.faqs && pageData.faqs.length > 0) {
    const faqSchema: FAQPage = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: pageData.faqs.map(faq => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
    };
    schemas.push(faqSchema);
  }

  // 4. Breadcrumb Schema
  const breadcrumbSchema: BreadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageData.title,
        item: currentUrl
      }
    ]
  };
  schemas.push(breadcrumbSchema);

  // 5. WebPage Schema
  const webPageSchema: WebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": currentUrl,
    url: currentUrl,
    name: pageData.title,
    description: pageData.description,
    isPartOf: {
      "@type": "WebSite",
      "@context": "https://schema.org",
      "@id": `${baseUrl}/#website`,
      url: baseUrl,
      name: "Biztalbox",
      description: organizationData.description,
      publisher: {
        "@type": "Organization",
        "@context": "https://schema.org",
        name: organizationData.name,
        url: organizationData.url,
        logo: organizationData.logo,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: organizationData.telephone,
            contactType: "customer service"
          }
        ]
      }
    },
    mainEntity: {
      "@id": currentUrl
    }
  };
  schemas.push(webPageSchema);

  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`marketing-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 2)
          }}
        />
      ))}
    </>
  );
}
