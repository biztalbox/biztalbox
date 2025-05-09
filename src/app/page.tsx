import { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { createMetadata } from "@/utils/metadata";

const baseMetadata: Metadata = {
  title: "Best Digital Marketing Agency | Website Development",
  description: "Get a great website for your business! Our agency builds easy, attractive sites that help you reach more customers. Let's create your perfect website together!",
};

export const metadata = createMetadata(baseMetadata, '/');

export default function Home() {
  return (
      <HomePage/>
  );
}
