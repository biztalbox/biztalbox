import { Metadata } from "next";
import HomePage from "@/components/HomePage";

export const metadata: Metadata = {
  title: "Copy & Content Marketing Services | Engage Your Audience",
  description: "Boost your brand's visibility with our expert copy and content marketing services. From compelling website copy to engaging blog posts, we create content that resonates and drives results.",
};

export default function Home() {
  return (
      <HomePage/>
  );
}
