import { Metadata } from "next/types";
import SocialMediaMarketingPage from "./page";
import { createMetadata } from "@/utils/metadata";

const baseMetadata: Metadata = {
  title: "Social Media Marketing Agency | Grow Your Online Presence",
  description: "Want to boost your brand? Our social media agency makes fun content and targeted ads to help you reach more people. Let's make your social media shine!"
};

export const metadata = createMetadata(baseMetadata, '/social-media-marketing');

export default function SocialMediaMarketingLayout() {
  return <SocialMediaMarketingPage />;
} 