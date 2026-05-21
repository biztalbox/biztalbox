import { Metadata } from "next";
import { createMetadata, createFullUrl } from "@/utils/metadata";
import MarketingPageSchema from "@/components/schema/MarketingPageSchema";
import { createMarketingPageData } from "@/utils/marketing-page-data";
import "@/app/(Graphic Industry Pages)/styles.css";

const baseMetadata: Metadata = {
  title:
    "Pharmaceutical Graphic Design & Video Editing Services | Biztalbox",
  description:
    "Build trust in the pharmaceutical industry with professional graphic design and video editing services from Biztalbox. Create compliant, engaging visual content that strengthens brand credibility and audience engagement.",
};

export const metadata = createMetadata(
  baseMetadata,
  "/Pharmaceutical-video-editing"
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pageData = createMarketingPageData({
    title: baseMetadata.title as string,
    description: baseMetadata.description as string,
    path: "/Pharmaceutical-video-editing",
    serviceType:
      "Pharmaceutical Graphic Design & Video Editing Services",
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
        currentUrl={createFullUrl("/Pharmaceutical-video-editing")}
      />
      {children}
    </>
  );
}
