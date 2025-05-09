import { Metadata } from "next/types";
import AnalysisAlgorithmPage from "./page";
import { createMetadata } from "@/utils/metadata";

const baseMetadata: Metadata = {
  title: "Data Analysis Services | Make Smart Business Decisions",
  description: "Want to understand your data better? Our analytics services turn complex information into clear insights that help you make smarter business decisions. Let's unlock your data's potential!"
};

export const metadata = createMetadata(baseMetadata, '/analysis-algorithm');

export default function AnalysisAlgorithmLayout() {
  return <AnalysisAlgorithmPage />;
} 