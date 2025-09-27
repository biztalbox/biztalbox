import { Metadata } from "next";
import {
  createMetadata,
  createFullUrl,
} from "@/utils/metadata";
import MarketingPageSchema from "@/components/schema/MarketingPageSchema";
import { createMarketingPageData } from "@/utils/marketing-page-data";
import { faq_data } from "./faq";

const baseMetadata: Metadata = {
  title: "Marketing Agency in Indianapolis",
  description:
    "Discover our comprehensive range of digital marketing and web development services designed to help your business grow online. Marketing Agency in Indianapolis",
};

export const metadata = createMetadata(baseMetadata, "/marketing");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Create page data from layout metadata and page FAQs
  const pageData = createMarketingPageData({
    title: baseMetadata.title as string,
    description: baseMetadata.description as string,
    path: "/marketing/indianapolis",
    serviceType: "Digital Marketing Agency",
    faqs: faq_data.map(faq => ({
      question: faq.question,
      answer: faq.answer
    })),
    reviews: [
      {
        author: "Sarah Johnson",
        rating: 5,
        text: "Biztalbox transformed our online presence in Indianapolis. Their local SEO expertise and understanding of the Indiana market helped us rank higher and attract more local customers."
      },
      {
        author: "Mike Chen",
        rating: 5,
        text: "As a small business owner in Indianapolis, I was skeptical about digital marketing. But Biztalbox delivered real results - our website traffic increased by 300% in just 6 months."
      },
      {
        author: "Jennifer Martinez",
        rating: 5,
        text: "The team at Biztalbox understands the Indianapolis market better than any agency we've worked with. Their strategies are tailored specifically for local businesses and they deliver on their promises."
      }
    ],
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
        currentUrl={createFullUrl("/marketing/indianapolis")}
      />
      {children}
    </>
  );
}
