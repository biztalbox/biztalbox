import { Metadata } from "next/types";
import ContentMarketingPage from "./page";

export const metadata: Metadata = {
  title: "Content Marketing",
  description: ""
};

export default function ContentMarketingLayout() {
  return <ContentMarketingPage />;
} 