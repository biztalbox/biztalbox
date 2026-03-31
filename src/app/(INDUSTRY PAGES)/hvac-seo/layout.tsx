import { Metadata } from "next";
import { createMetadata, createFullUrl } from "@/utils/metadata";
import MarketingPageSchema from "@/components/schema/MarketingPageSchema";
import { createMarketingPageData } from "@/utils/marketing-page-data";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "Ultimate HVAC SEO Guide for Better Rankings and Leads",
  description:
    "Is your HVAC business hard to find on Google? Discover SEO services for the HVAC industry, its benefits, and strategies to help you get discovered and grow.",
};

export const metadata = createMetadata(baseMetadata, "/hvac-seo");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pageData = createMarketingPageData({
    title: baseMetadata.title as string,
    description: baseMetadata.description as string,
    path: "/hvac-seo",
    serviceType: "HVAC SEO Services",
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
        currentUrl={createFullUrl("/hvac-seo")}
      />
      {children}
    </>
  );
}

