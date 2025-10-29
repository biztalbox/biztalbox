import { Metadata } from "next";
import { createMetadata, createFullUrl } from "@/utils/metadata";
import MarketingPageSchema from "@/components/schema/MarketingPageSchema";
import { createMarketingPageData } from "@/utils/marketing-page-data";
import { faq_data } from "./data";
import { testimonial } from "@/data/page-data";

const baseMetadata: Metadata = {
  title: "Saint Paul SEO Services | Local SEO Company Near Me",
  description:
"Local SEO Services Near Me. Learn about Saint Paul SEO Services and why local SEO is vital for your business. Get tips for choosing affordable and reliable local SEO companies in Saint Paul."};

export const metadata = createMetadata(
  baseMetadata,
  "/saint-paul-seo-company"
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pageData = createMarketingPageData({
    title: baseMetadata.title as string,
    description: baseMetadata.description as string,
    path: "/saint-paul-seo-company",
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
       currentUrl={createFullUrl("/saint-paul-seo-company")}
       />
      {children}
    </>
  );
}

