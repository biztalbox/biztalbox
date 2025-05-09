import { Metadata } from "next/types";
import WebsiteDevelopmentPage from "./page";
import { createMetadata } from "@/utils/metadata";

const baseMetadata: Metadata = {
  title: "Web Development & Design Agency | Build Great Websites",
  description: ""
};

export const metadata = createMetadata(baseMetadata, '/website-development');

export default function WebsiteDevelopmentLayout() {
  return <WebsiteDevelopmentPage />;
} 