import { Metadata } from "next";
import { createMetadata, createFullUrl } from "@/utils/metadata";
import MarketingPageSchema from "@/components/schema/MarketingPageSchema";
import { createMarketingPageData } from "@/utils/marketing-page-data";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "Ecommerce SEO Strategy: The Ultimate Guide for Ecommerce Websites",
  description:
    "Struggling to grow organic traffic? Discover the ecommerce SEO strategies and SEO for ecommerce websites that help online stores rank higher and sell more.",
};

export const metadata = createMetadata(
  baseMetadata,
  "/ecommerce-seo-services"
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Create page data from layout metadata and page FAQs
  const pageData = createMarketingPageData({
    title: baseMetadata.title as string,
    description: baseMetadata.description as string,
    path: "/ecommerce-seo-services",
    serviceType: "Ecommerce SEO Services",
    aggregateRating: {
      rating: 4.9,
      reviewCount: 184,
      bestRating: 5,
    },
    image:
      "https://biztalbox.com/_next/image?url=%2Fassets%2Fimg%2Fservices%2Fseo.webp&w=1080&q=75",
  });

  return (
    <>
      <MarketingPageSchema
        pageData={pageData}
        currentUrl={createFullUrl("/ecommerce-seo-services")}
      />
      {children}
    </>
  );
}

