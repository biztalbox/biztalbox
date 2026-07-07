import { Metadata } from "next";
import { createMetadata, createFullUrl } from "@/utils/metadata";
import MarketingPageSchema from "@/components/schema/MarketingPageSchema";
import { createMarketingPageData } from "@/utils/marketing-page-data";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "E-commerce SEO Services | Drive Traffic, Sales & Growth",
  description:
    "E-commerce is more competitive than ever. Discover e-commerce SEO strategies to improve search visibility, attract buyers, and grow your online store sustainably.",
};

export const metadata = createMetadata(baseMetadata, "/ecommerce-seo");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pageData = createMarketingPageData({
    title: baseMetadata.title as string,
    description: baseMetadata.description as string,
    path: "/ecommerce-seo",
    serviceType: "E-commerce SEO Services",
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
        currentUrl={createFullUrl("/ecommerce-seo")}
      />
      {children}
    </>
  );
}
