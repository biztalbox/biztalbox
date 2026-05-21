import { Metadata } from "next";
import { createMetadata, createFullUrl } from "@/utils/metadata";
import MarketingPageSchema from "@/components/schema/MarketingPageSchema";
import { createMarketingPageData } from "@/utils/marketing-page-data";
import "@/app/(Graphic Industry Pages)/styles.css";

const baseMetadata: Metadata = {
  title:
    "Why Beauty & Wellness Brands Need Strong Visual Design & Video Editing | Biztalbox",
  description:
    "Discover how strong visual design and professional video editing help beauty and wellness brands grow online, attract customers, build trust, and increase engagement with impactful digital content.",
};

export const metadata = createMetadata(
  baseMetadata,
  "/beauty-and-wellness-video-editing"
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pageData = createMarketingPageData({
    title: baseMetadata.title as string,
    description: baseMetadata.description as string,
    path: "/beauty-and-wellness-video-editing",
    serviceType:
      "Beauty and Wellness Graphic Design & Video Editing Services",
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
        currentUrl={createFullUrl("/beauty-and-wellness-video-editing")}
      />
      {children}
    </>
  );
}
