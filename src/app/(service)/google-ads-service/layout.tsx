import { Metadata } from "next/types";
import GoogleAdsServicePage from "./page";

export const metadata: Metadata = {
  title: "Google Ads Service",
  description: ""
};

export default function GoogleAdsServiceLayout() {
  return <GoogleAdsServicePage />;
} 