import { Metadata } from "next";
import { createMetadata, createFullUrl } from "@/utils/metadata";
import MarketingPageSchema from "@/components/schema/MarketingPageSchema";
import { createMarketingPageData } from "@/utils/marketing-page-data";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "Food & Beverage SEO Services | Grow, Rank & Scale Faster",
  description:
    "Scale your food and beverage ecommerce brand with advanced SEO strategies. Boost Google rankings, drive high-intent traffic, and increase online sales.",
};

export const metadata = createMetadata(
  baseMetadata,
  "/seo-for-food-and-beverage"
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
    path: "/seo-for-food-and-beverage",
    serviceType: "Food & Beverage SEO Services",
    aggregateRating: {
      rating: 4.9,
      reviewCount: 142,
      bestRating: 5,
    },
    image:
      "https://biztalbox.com/_next/image?url=%2Fassets%2Fimg%2Fservices%2Fseo.webp&w=1080&q=75",
  });

  return (
    <>
      <MarketingPageSchema
        pageData={pageData}
        currentUrl={createFullUrl("/seo-for-food-and-beverage")}
      />
      {children}
    </>
  );
}

