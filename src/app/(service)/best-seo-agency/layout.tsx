import { Metadata } from "next/types";
import BestSeoAgencyPage from "./page";
import { createMetadata } from "@/utils/metadata";

const baseMetadata: Metadata = {
  title: "Best SEO Agency | Top SEO Services for Your Business",
  description: "Need the best SEO agency? We provide top SEO services to boost your website's ranking, increase traffic, and drive sales. Let our experts help you succeed online!"
};

export const metadata = createMetadata(baseMetadata, '/best-seo-agency');

export default function BestSeoAgencyLayout() {
  return <BestSeoAgencyPage />;
} 