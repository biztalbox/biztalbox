import { Metadata } from "next";
import { createMetadata, createFullUrl } from "@/utils/metadata";
import MarketingPageSchema from "@/components/schema/MarketingPageSchema";
import { createMarketingPageData } from "@/utils/marketing-page-data";
import "@/app/(Graphic Industry Pages)/styles.css";

const baseMetadata: Metadata = {
  title:
    "Graphic Design & Video Editing Services for Hospitality Brands | Biztalbox",
  description:
    "Enhance your hospitality brand with professional graphic design and video editing services from Biztalbox. Create stunning visual content that improves first impressions, attracts guests, and increases hotel bookings.",
};

export const metadata = createMetadata(
  baseMetadata,
  "/hospitality-video-editing"
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pageData = createMarketingPageData({
    title: baseMetadata.title as string,
    description: baseMetadata.description as string,
    path: "/hospitality-video-editing",
    serviceType: "Hospitality Graphic Design & Video Editing Services",
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
        currentUrl={createFullUrl("/hospitality-video-editing")}
      />
      {children}
    </>
  );
}
