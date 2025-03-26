import { Metadata } from "next/types";
import ContentMarketingPage from "./page";

export const metadata: Metadata = {
  title: "Copy & Content Marketing Services | Engage Your Audience",
  description: "Boost your brand's visibility with our expert copy and content marketing services. From compelling website copy to engaging blog posts, we create content that resonates and drives results."
};

export default function ContentMarketingLayout() {
  return <ContentMarketingPage />;
} 