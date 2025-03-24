import { Metadata } from "next/types";
import GraphicDesigningPage from "./page";

export const metadata: Metadata = {
  title: "Graphic Designing",
  description: ""
};

export default function GraphicDesigningLayout() {
  return <GraphicDesigningPage />;
} 