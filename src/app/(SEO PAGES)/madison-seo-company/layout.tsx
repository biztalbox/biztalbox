import { Metadata } from "next";
import { createMetadata, createFullUrl } from "@/utils/metadata";
import MarketingPageSchema from "@/components/schema/MarketingPageSchema";
import { createMarketingPageData } from "@/utils/marketing-page-data";
import { faq_data } from "./data";
import { testimonial } from "./data";

const baseMetadata: Metadata = {
  title: "SEO Services Agency Madison | Best SEO Company Madison",
  description:
"Boost your business online with Biztalbox — Madison's top SEO services agency. Improve search rankings, drive traffic, and achieve measurable digital growth."};

export const metadata = createMetadata(
  baseMetadata,
  "/madison-seo-company"
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pageData = createMarketingPageData({
    title: baseMetadata.title as string,
    description: baseMetadata.description as string,
    path: "/madison-seo-company",
    serviceType: "Digital Marketing Agency",
    faqs: faq_data.map((faq) => ({
      question: faq.question,
      answer: faq.answer,
    })),
    reviews: testimonial.map((review) => ({
      author: review.name,
      rating: review.rating,
      text: review.desc,
    })),
    aggregateRating: {
      rating: 4.9,
      reviewCount: 156,
      bestRating: 5,
    },
    image:
      "https://biztalbox.com/_next/image?url=%2Fassets%2Fimg%2Fservices%2Fseo.webp&w=1080&q=75",
  });

  return (
    <>
      <MarketingPageSchema
       pageData={pageData}
       currentUrl={createFullUrl("/madison-seo-company")}
       />
      {children}
    </>
  );
}
