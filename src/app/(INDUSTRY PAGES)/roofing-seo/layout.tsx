import { Metadata } from "next";
import { createMetadata, createFullUrl } from "@/utils/metadata";
import MarketingPageSchema from "@/components/schema/MarketingPageSchema";
import { createMarketingPageData } from "@/utils/marketing-page-data";
import "@/app/(INDUSTRY PAGES)/styles.css";

const baseMetadata: Metadata = {
  title: "SEO for Roofing Companies | Complete Guide to Get More Leads",
  description:
    "Not getting enough customers from your website? Discover SEO for roofing companies, its benefits, and the strategy to increase visibility and attract customers.",
};

export const metadata = createMetadata(
  baseMetadata,
  "/roofing-seo"
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
    path: "/roofing-seo",
    serviceType: "Roofing SEO Services",
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
        currentUrl={createFullUrl("/roofing-seo")}
      />
      {children}
    </>
  );
}

