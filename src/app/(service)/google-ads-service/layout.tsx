import { Metadata } from "next/types";
import GoogleAdsServicePage from "./page";

export const metadata: Metadata = {
  title: "Performance Marketing Agency | Boost Your Results",
  description: "Want better results from your marketing? Our performance marketing agency helps you get more from your budget with smart, data-driven strategies. Let’s grow your business together!"
};

export default function GoogleAdsServiceLayout() {
  return <GoogleAdsServicePage />;
} 