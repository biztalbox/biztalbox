import { Metadata } from "next/types";
import WebsiteDevelopmentPage from "./page";

export const metadata: Metadata = {
  title: "Website Development",
  description: ""
};

export default function WebsiteDevelopmentLayout() {
  return <WebsiteDevelopmentPage />;
} 