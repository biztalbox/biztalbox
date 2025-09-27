import { MarketingPageData } from '@/components/schema/MarketingPageSchema';

interface CreateMarketingPageDataProps {
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

export function createMarketingPageData({
  title,
  description,
  path,
  serviceType,
  faqs,
  reviews,
  aggregateRating,
  image
}: CreateMarketingPageDataProps): MarketingPageData {
  return {
    title,
    description,
    path,
    serviceType,
    faqs,
    reviews,
    aggregateRating,
    image
  };
}
