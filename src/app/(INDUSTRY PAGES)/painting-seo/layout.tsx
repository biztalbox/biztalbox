import { Metadata } from "next";
import { createMetadata, createFullUrl } from "@/utils/metadata";
import MarketingPageSchema from "@/components/schema/MarketingPageSchema";
import { createMarketingPageData } from "@/utils/marketing-page-data";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "SEO Services for Painting Contractors & Companies",
  description:
    "Increase visibility for your painting business with targeted SEO strategies. Drive traffic, generate leads, and grow your customer base.",
};

export const metadata = createMetadata(baseMetadata, "/painting-seo");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pageData = createMarketingPageData({
    title: baseMetadata.title as string,
    description: baseMetadata.description as string,
    path: "/painting-seo",
    serviceType: "Painting SEO Services",
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
        currentUrl={createFullUrl("/painting-seo")}
      />
      {children}
    </>
  );
}
