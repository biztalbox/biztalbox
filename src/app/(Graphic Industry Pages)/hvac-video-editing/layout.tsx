import { Metadata } from "next";
import { createMetadata, createFullUrl } from "@/utils/metadata";
import MarketingPageSchema from "@/components/schema/MarketingPageSchema";
import { createMarketingPageData } from "@/utils/marketing-page-data";
import "@/app/(Graphic Industry Pages)/styles.css";

const baseMetadata: Metadata = {
  title: "Graphic Design & Video Editing Services for HVAC Industry | Biztalbox",
  description: "Help your HVAC business build trust online with professional graphic design and video editing services from Biztalbox. Create impactful visual content that attracts customers and strengthens your brand presence.",
};

export const metadata = createMetadata(baseMetadata, "/hvac-video-editing");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pageData = createMarketingPageData({
    title: baseMetadata.title as string,
    description: baseMetadata.description as string,
    path: "/hvac-video-editing",
    serviceType: "HVAC Graphic Design & Video Editing Services",
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
        currentUrl={createFullUrl("/hvac-video-editing")}
      />
      {children}
    </>
  );
}
