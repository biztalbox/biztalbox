import { Metadata } from "next";
import {
  createMetadata,
  createFullUrl,
} from "@/utils/metadata";
import MarketingPageSchema from "@/components/schema/MarketingPageSchema";
import { createMarketingPageData } from "@/utils/marketing-page-data";
import { faq_data } from "./data";
import { testimonial } from "./data";

const baseMetadata: Metadata = {
  title: "SEO Services Agency Indianapolis | Best SEO Company in Indianapolis",
  description:
    "Biztalbox – the leading SEO services agency in Indianapolis, helping businesses boost visibility, drive traffic, and achieve top Google rankings.",
};

export const metadata = createMetadata(baseMetadata, "/indianapolis-seo-services-company");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Create page data from layout metadata and page FAQs
  const pageData = createMarketingPageData({
    title: baseMetadata.title as string,
    description: baseMetadata.description as string,
    path: "/indianapolis-seo-services-company",
    serviceType: "Digital Marketing Agency",
    faqs: faq_data.map(faq => ({
      question: faq.question,
      answer: faq.answer
    })),
    reviews: testimonial.map(review => ({
      author: review.name,
      rating: review.rating,
      text: review.desc
    })),
    aggregateRating: {
      rating: 4.9,
      reviewCount: 156,
      bestRating: 5
    },
    image: "https://biztalbox.com/_next/image?url=%2Fassets%2Fimg%2Fservices%2Fseo.webp&w=1080&q=75"
  });

  return (
    <>
      <MarketingPageSchema 
        pageData={pageData}
        currentUrl={createFullUrl("/indianapolis-seo-services-company")}
      />
      {children}
    </>
  );
}
