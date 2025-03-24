import { Metadata } from "next/types";
import AnalysisAlgorithmPage from "./page";

export const metadata: Metadata = {
  title: "Analysis Algorithm",
  description: ""
};

export default function AnalysisAlgorithmLayout() {
  return <AnalysisAlgorithmPage />;
} 