// Schema.org types for structured data

export interface BaseSchema {
  "@context": string;
  "@type": string | string[];
}

export interface Organization extends BaseSchema {
  "@type": "Organization";
  name: string;
  url: string;
  logo: string;
  contactPoint: ContactPoint[];
  sameAs?: string[];
  foundingDate?: string;
  founder?: Person;
  description?: string;
}

export interface LocalBusiness extends BaseSchema {
  "@type": "LocalBusiness";
  "@id"?: string;
  name: string;
  url: string;
  image?: string;
  telephone: string;
  email?: string;
  priceRange: string;
  address: PostalAddress;
  aggregateRating?: AggregateRating;
  review?: Review[];
  openingHoursSpecification?: OpeningHoursSpecification;
  hasMap?: string;
  areaServed?: Place[];
  knowsAbout?: string[];
  hasOfferCatalog?: OfferCatalog;
}

export interface Service extends BaseSchema {
  "@type": "Service";
  "@id"?: string;
  name: string;
  url: string;
  description: string;
  serviceType: string;
  provider: {
    "@id": string;
  };
  audience?: Audience[];
}

export interface WebPage extends BaseSchema {
  "@type": "WebPage";
  "@id"?: string;
  url: string;
  name: string;
  description: string;
  inLanguage?: string;
  isPartOf?: WebSite;
  primaryImageOfPage?: ImageObject;
  datePublished?: string;
  dateModified?: string;
  author?: Person | Organization;
  publisher?: Organization;
  mainEntity?: any;
}

export interface WebSite extends BaseSchema {
  "@type": "WebSite";
  "@id": string;
  url: string;
  name: string;
  description: string;
  publisher: Organization;
  inLanguage?: string;
}

export interface BreadcrumbList extends BaseSchema {
  "@type": "BreadcrumbList";
  itemListElement: BreadcrumbListItem[];
}

export interface BreadcrumbListItem {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
}

export interface FAQPage extends BaseSchema {
  "@type": "FAQPage";
  mainEntity: Question[];
}

export interface Question {
  "@type": "Question";
  name: string;
  acceptedAnswer: Answer;
}

export interface Answer {
  "@type": "Answer";
  text: string;
}

export interface ContactPoint {
  "@type": "ContactPoint";
  telephone: string;
  contactType: string;
  areaServed?: string;
  availableLanguage?: string[];
}

export interface PostalAddress {
  "@type": "PostalAddress";
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export interface AggregateRating {
  "@type": "AggregateRating";
  ratingValue: number | string;
  bestRating: number | string;
  ratingCount: number;
  worstRating?: number;
}

export interface Review {
  "@type": "Review";
  author: Person;
  reviewBody: string;
  reviewRating: Rating;
  datePublished?: string;
}

export interface Rating {
  "@type": "Rating";
  ratingValue: number | string;
  bestRating: number | string;
  worstRating?: number;
}

export interface Person {
  "@type": "Person";
  name: string;
  url?: string;
  image?: string;
}

export interface Place {
  "@type": "Place";
  name: string;
  address?: PostalAddress;
}

export interface OpeningHoursSpecification {
  "@type": "OpeningHoursSpecification";
  dayOfWeek: string[];
  opens: string;
  closes: string;
}

export interface OfferCatalog {
  "@type": "OfferCatalog";
  name: string;
  itemListElement: Service[];
}

export interface Audience {
  "@type": "Audience";
  name: string;
}

export interface ImageObject {
  "@type": "ImageObject";
  url: string;
  width?: number;
  height?: number;
  caption?: string;
}

export interface Graph {
  "@context": string;
  "@graph": any[];
}

// Schema configuration types
export interface SchemaConfig {
  organization?: boolean;
  localBusiness?: boolean;
  service?: Partial<Service>;
  webPage?: Partial<WebPage>;
  breadcrumbs?: BreadcrumbData[];
  faqs?: FAQData[];
  reviews?: ReviewData[];
  aggregateRating?: AggregateRatingData;
  graph?: boolean; // Whether to use @graph structure
}

export interface BreadcrumbData {
  name: string;
  url: string;
}

export interface FAQData {
  question: string;
  answer: string;
}

export interface ReviewData {
  author: string;
  rating: number;
  text: string;
  date?: string;
}

export interface AggregateRatingData {
  rating: number;
  reviewCount: number;
  bestRating?: number;
}

// Page-specific schema props
export interface SchemaProps {
  pageType: 'home' | 'service' | 'about' | 'blog' | 'contact' | 'faq' | 'blogPost';
  serviceType?: string;
  serviceName?: string;
  serviceDescription?: string;
  serviceUrl?: string;
  serviceImage?: string;
  breadcrumbs?: BreadcrumbData[];
  faqs?: FAQData[];
  reviews?: ReviewData[];
  aggregateRating?: AggregateRatingData;
  blogData?: {
    title: string;
    description: string;
    author: string;
    datePublished: string;
    dateModified?: string;
    image?: string;
  };
  customSchemas?: any[];
}