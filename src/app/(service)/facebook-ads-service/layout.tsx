import { Metadata } from "next/types";
import FacebookAdsServicePage from "./page";

export const metadata: Metadata = {
  title: "Facebook & Meta Ads Agency | Biztal Box",
  description: "Looking to boost your online presence? Our Facebook and Meta ads agency specializes in creating effective ad campaigns that reach your target audience and drive conversions."
};

export default function FacebookAdsServiceLayout() {
  return <FacebookAdsServicePage />;
} 