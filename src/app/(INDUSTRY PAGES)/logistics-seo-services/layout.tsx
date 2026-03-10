import { Metadata } from "next";
import { createMetadata, createFullUrl } from "@/utils/metadata";
import MarketingPageSchema from "@/components/schema/MarketingPageSchema";
import { createMarketingPageData } from "@/utils/marketing-page-data";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "Logistics SEO Services | Strategies That Drive Traffic & Clients",
  description:
    "Struggling to get clients online? Discover the ultimate logistics SEO strategies, and insights that help logistics companies rank higher and attract real business.",
};

export const metadata = createMetadata(
  baseMetadata,
  "/logistics-seo-services"
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
    path: "/logistics-seo-services",
    serviceType: "Logistics SEO Services",
    aggregateRating: {
      rating: 4.8,
      reviewCount: 95,
      bestRating: 5,
    },
    image:
      "https://biztalbox.com/_next/image?url=%2Fassets%2Fimg%2Fservices%2Fseo.webp&w=1080&q=75",
  });

  return (
    <>
      <MarketingPageSchema
        pageData={pageData}
        currentUrl={createFullUrl("/logistics-seo-services")}
      />
      {children}
    </>
  );
}
