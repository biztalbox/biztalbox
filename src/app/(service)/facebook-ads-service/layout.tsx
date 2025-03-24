import { Metadata } from "next/types";
import FacebookAdsServicePage from "./page";

export const metadata: Metadata = {
  title: "Facebook Ads Service",
  description: ""
};

export default function FacebookAdsServiceLayout() {
  return <FacebookAdsServicePage />;
} 