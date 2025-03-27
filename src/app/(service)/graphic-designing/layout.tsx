import { Metadata } from "next/types";
import GraphicDesigningPage from "./page";

export const metadata: Metadata = {
  title: "Professional Graphic Designer | Creative Solutions for Your Brand",
  description: "Looking for a graphic designer? We create eye-catching designs for your brand, including logos, flyers, and more. Let's bring your ideas to life!"
};

export default function GraphicDesigningLayout() {
  return <GraphicDesigningPage />;
} 