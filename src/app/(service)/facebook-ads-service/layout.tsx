import { Metadata } from "next/types";
import FacebookAdsServicePage from "./page";
import { createMetadata } from "@/utils/metadata";

const baseMetadata: Metadata = {
  title: "Facebook & Instagram Ads Agency | Targeted Social Advertising",
  description: "Need more customers from Facebook and Instagram? Our ads agency creates campaigns that reach the right people and drive sales. Let's grow your business with social ads!"
};

export const metadata = createMetadata(baseMetadata, '/facebook-ads-service');

export default function FacebookAdsServiceLayout() {
  return <FacebookAdsServicePage />;
} 