import Script from 'next/script';
import { 
  SchemaProps,
  Organization,
  LocalBusiness, 
  Service,
  WebPage,
  BreadcrumbList,
  FAQPage,
  Graph
} from '@/types/schema-types';
import { organizationData, servicesData, getServiceData, createBreadcrumbs, serviceUrlMap, ServiceUrlKey } from '@/data/schema-data';

interface GlobalSchemaProps extends SchemaProps {
  currentUrl?: string;
  title?: string;
  description?: string;
}

export default function GlobalSchema({
  pageType,
  serviceType,
  serviceName,
  serviceDescription,
  serviceUrl,
  serviceImage,
  breadcrumbs: customBreadcrumbs,
  faqs,
  reviews,
  aggregateRating,
  blogData,
  customSchemas = [],
  currentUrl,
  title,
  description
}: GlobalSchemaProps) {
  
  const schemas: any[] = [];
  const baseUrl = "https://biztalbox.com";
  const pageUrl = currentUrl || baseUrl;

  // Generate Organization schema (for all pages)
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

  // Add organization schema for all pages
  schemas.push(organizationSchema);

  // Generate page-specific schemas
  switch (pageType) {
    case 'home':
      // LocalBusiness schema for homepage
      const localBusinessSchema: any = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#organization`,
        name: organizationData.name,
        url: organizationData.url,
        image: organizationData.logo,
        telephone: organizationData.telephone,
        email: organizationData.email,
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          streetAddress: organizationData.address.streetAddress,
          addressLocality: organizationData.address.addressLocality,
          addressRegion: organizationData.address.addressRegion,
          postalCode: organizationData.address.postalCode,
          addressCountry: organizationData.address.addressCountry
        },
        hasMap: organizationData.hasMap,
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: organizationData.openingHours.dayOfWeek,
          opens: organizationData.openingHours.opens,
          closes: organizationData.openingHours.closes
        },
        areaServed: organizationData.areaServed.map(area => ({
          "@type": "Place",
          name: area
        })),
        knowsAbout: organizationData.services,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services Offered",
          itemListElement: [
            {
              "@type": "Service",
              name: "Digital Marketing",
              url: `${baseUrl}/services`,
              description: "Biztalbox offers expert digital marketing services to businesses across industries with tailored, ROI-driven strategies.",
              serviceType: "Digital Marketing",
              provider: { "@id": `${baseUrl}/#organization` },
              audience: [
                { "@type": "Audience", name: "Small Businesses" },
                { "@type": "Audience", name: "Enterprises" },
                { "@type": "Audience", name: "eCommerce Brands" },
                { "@type": "Audience", name: "Franchises" },
                { "@type": "Audience", name: "Startups" },
                { "@type": "Audience", name: "Local Businesses" },
                { "@type": "Audience", name: "B2B Companies" }
              ]
            },
            {
              "@type": "Service",
              name: "SEO Services",
              url: `${baseUrl}/best-seo-agency`,
              description: "Partner with Biztalbox — a top-rated SEO agency delivering proven strategies that boost search rankings, drive targeted traffic, and fuel real business growth.",
              serviceType: "Search Engine Optimization",
              provider: { "@id": `${baseUrl}/#organization` }
            },
            {
              "@type": "Service",
              name: "Web Design and Development",
              url: `${baseUrl}/website-development`,
              description: "Professional web design and development services that deliver fast, responsive, and SEO-ready websites built to convert and grow your business.",
              serviceType: "Website Development",
              provider: { "@id": `${baseUrl}/#organization` }
            },
            {
              "@type": "Service",
              name: "Performance Marketing",
              url: `${baseUrl}/google-ads-service`,
              description: "Drive measurable growth with ROI-focused performance marketing campaigns across Google, Meta, and more — optimized to convert and scale.",
              serviceType: "Performance Marketing",
              provider: { "@id": `${baseUrl}/#organization` }
            },
            {
              "@type": "Service",
              name: "Social Media Marketing",
              url: `${baseUrl}/social-media-marketing`,
              description: "Boost your brand visibility and engagement with strategic social media marketing services across Instagram, Facebook, LinkedIn, and more — designed to drive real results.",
              serviceType: "Social Media Marketing",
              provider: { "@id": `${baseUrl}/#organization` }
            },
            {
              "@type": "Service",
              name: "Video Editing and Motion Graphics",
              url: `${baseUrl}/motion-graphics`,
              description: "Engage your audience with stunning video editing and motion graphics crafted for ads, reels, explainers, and branded content that captivates and converts.",
              serviceType: "Video Editing and Motion Design",
              provider: { "@id": `${baseUrl}/#organization` }
            },
            {
              "@type": "Service",
              name: "Graphic Designing",
              url: `${baseUrl}/graphic-designing`,
              description: "Creative and impactful graphic design services for branding, social media, packaging, and marketing — crafted to visually communicate and captivate.",
              serviceType: "Graphic Design",
              provider: { "@id": `${baseUrl}/#organization` }
            },
            {
              "@type": "Service",
              name: "Copywriting",
              url: `${baseUrl}/content-marketing`,
              description: "Compelling and conversion-focused copywriting for websites, ads, emails, and social media — written to engage, persuade, and drive action.",
              serviceType: "Copywriting",
              provider: { "@id": `${baseUrl}/#organization` }
            }
          ]
        }
      };

      if (aggregateRating) {
        localBusinessSchema.aggregateRating = {
          "@type": "AggregateRating",
          ratingValue: aggregateRating.rating,
          bestRating: aggregateRating.bestRating || 5,
          ratingCount: aggregateRating.reviewCount
        };
      }

      if (reviews && reviews.length > 0) {
        localBusinessSchema.review = reviews.map(review => ({
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
        }));
      }

      schemas.push(localBusinessSchema);
      break;

    case 'service':
      // Get service data
      let serviceData;
      if (serviceType && serviceType in serviceUrlMap) {
        const serviceKey = serviceUrlMap[serviceType as ServiceUrlKey];
        serviceData = getServiceData(serviceKey);
      }

      if (serviceData) {
        // Create service schema with @graph structure
        const serviceGraphSchema: Graph = {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": serviceData.url,
              name: serviceData.name,
              url: serviceData.url,
              description: serviceData.description,
              serviceType: serviceData.serviceType,
              provider: {
                "@id": "#biztalbox"
              }
            },
            {
              "@type": "LocalBusiness",
              "@id": "#biztalbox",
              name: "Biztalbox",
              url: organizationData.url,
              image: serviceData.image,
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
                ratingValue: serviceData.aggregateRating.rating,
                bestRating: serviceData.aggregateRating.bestRating,
                ratingCount: serviceData.aggregateRating.reviewCount
              },
              review: serviceData.reviews.map(review => ({
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

        // Add FAQ schema if available
        if (serviceData.faqs && serviceData.faqs.length > 0) {
          const faqSchema: FAQPage = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: serviceData.faqs.map(faq => ({
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

        // Add breadcrumb schema
        const serviceBreadcrumbs = createBreadcrumbs(serviceData.name, serviceData.url.replace('https://biztalbox.com', ''));
        const breadcrumbSchema: BreadcrumbList = {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: serviceBreadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.name,
            item: crumb.url
          }))
        };
        schemas.push(breadcrumbSchema);
      }
      break;

    case 'about':
      // WebPage schema for about page
      const aboutWebPageSchema: WebPage = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${baseUrl}/about`,
        url: `${baseUrl}/about`,
        name: title || "About BizTalBox | Digital Marketing & Website Design Agency",
        description: description || "BizTalBox specializes in digital marketing and website design to elevate your brand. Explore our expert team and innovative solutions!",
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
          "@id": `${baseUrl}/#organization`
        }
      };
      schemas.push(aboutWebPageSchema);
      break;

    case 'blog':
      // Blog listing page schema
      const blogWebPageSchema: WebPage = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${baseUrl}/blog`,
        url: `${baseUrl}/blog`,
        name: title || "Blogs - Biztalbox",
        description: description || "Latest insights and tips from Biztalbox on digital marketing, SEO, web development, and business growth.",
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
        }
      };
      schemas.push(blogWebPageSchema);
      break;

    case 'blogPost':
      if (blogData) {
        // Individual blog post schema
        const articleSchema: any = {
          "@context": "https://schema.org",
          "@type": "Article",
          "@id": pageUrl,
          url: pageUrl,
          headline: blogData.title,
          description: blogData.description,
          datePublished: blogData.datePublished,
          dateModified: blogData.dateModified || blogData.datePublished,
          author: {
            "@type": "Person",
            name: blogData.author
          },
          publisher: {
            "@type": "Organization",
            name: organizationData.name,
            logo: {
              "@type": "ImageObject",
              url: organizationData.logo
            }
          },
          isPartOf: {
            "@type": "WebSite",
            "@id": `${baseUrl}/#website`
          }
        };

        if (blogData.image) {
          articleSchema.image = {
            "@type": "ImageObject",
            url: blogData.image
          };
        }

        schemas.push(articleSchema);
      }
      break;

    case 'contact':
      // Contact page schema
      const contactWebPageSchema: WebPage = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${baseUrl}/contact`,
        url: `${baseUrl}/contact`,
        name: title || "Contact Us - Biztalbox",
        description: description || "Get in touch with Biztalbox for all your digital marketing and web development needs. We're here to help grow your business.",
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
          "@id": `${baseUrl}/#organization`
        }
      };
      schemas.push(contactWebPageSchema);
      break;

    case 'faq':
      // FAQ page with custom FAQs
      if (faqs && faqs.length > 0) {
        const faqPageSchema: FAQPage = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map(faq => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer
            }
          }))
        };
        schemas.push(faqPageSchema);
      }
      break;
  }

  // Add custom breadcrumbs if provided
  if (customBreadcrumbs && customBreadcrumbs.length > 0) {
    const breadcrumbSchema: BreadcrumbList = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: customBreadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: crumb.url
      }))
    };
    schemas.push(breadcrumbSchema);
  }

  // Add any custom schemas
  if (customSchemas.length > 0) {
    schemas.push(...customSchemas);
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`schema-${pageType}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 2)
          }}
        />
      ))}
    </>
  );
}