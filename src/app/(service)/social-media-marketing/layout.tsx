import { Metadata } from "next/types";
import SocialMediaMarketingPage from "./page";

export const metadata: Metadata = {
  title: "Social Media Marketing",
  description: ""
};

export default function SocialMediaMarketingLayout() {
  return <SocialMediaMarketingPage />;
} 