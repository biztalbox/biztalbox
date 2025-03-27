import { Metadata } from "next/types";
import BestSeoAgencyPage from "./page";

export const metadata: Metadata = {
  title: "Best SEO Agency | Top SEO Services for Your Business",
  description: "Need the best SEO agency? We provide top SEO services to boost your website's ranking, increase traffic, and drive sales. Let our experts help you succeed online!"
};

export default function BestSeoAgencyLayout() {
  return <BestSeoAgencyPage />;
} 