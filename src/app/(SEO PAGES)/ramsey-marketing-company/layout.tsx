import { Metadata } from "next";
import { createMetadata, createFullUrl } from "@/utils/metadata";
import MarketingPageSchema from "@/components/schema/MarketingPageSchema";
import { createMarketingPageData } from "@/utils/marketing-page-data";
import { faq_data } from "./data";
import { testimonial } from "@/data/page-data";

const baseMetadata: Metadata = {
  title: "Ramsey Digital Marketing Agency | Digital Marketing Company in Ramsey",
  description:
"Get expert Digital Marketing Services from a top digital marketing company in Ramsey. Our digital marketing agency in Ramsey offers SEO, PPC, and social media marketing at low cost."};

export const metadata = createMetadata(
  baseMetadata,
  "/ramsey-marketing-company"
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pageData = createMarketingPageData({
    title: baseMetadata.title as string,
    description: baseMetadata.description as string,
    path: "/ramsey-marketing-company",
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
       currentUrl={createFullUrl("/ramsey-marketing-company")}
       />
      {children}
    </>
  );
}

