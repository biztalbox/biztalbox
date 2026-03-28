import { Metadata } from "next";
import { createMetadata, createFullUrl } from "@/utils/metadata";
import MarketingPageSchema from "@/components/schema/MarketingPageSchema";
import { createMarketingPageData } from "@/utils/marketing-page-data";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "Electrician SEO: Strategies That Turn Google Searches Into Service Calls",
  description:
    "The ultimate electrician SEO guide covering strategies, search rankings, local SEO visibility, and how electricians turn Google searches into real service calls.",
};

export const metadata = createMetadata(
  baseMetadata,
  "/electrician-seo"
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
    path: "/electrician-seo",
    serviceType: "Electrician SEO Services",
    aggregateRating: {
      rating: 4.9,
      reviewCount: 124,
      bestRating: 5,
    },
    image:
      "https://biztalbox.com/_next/image?url=%2Fassets%2Fimg%2Fservices%2Fseo.webp&w=1080&q=75",
  });

  return (
    <>
      <MarketingPageSchema
        pageData={pageData}
        currentUrl={createFullUrl("/electrician-seo")}
      />
      {children}
    </>
  );
}
