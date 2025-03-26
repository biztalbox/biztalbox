import { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency | Website Development",
  description: "Get a great website for your business! Our agency builds easy, attractive sites that help you reach more customers. Let’s create your perfect website together!",
};

export default function Home() {
  return (
      <HomePage/>
  );
}
