import { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { createMetadata } from "@/utils/metadata";
import HomePageSchema from "@/components/schema/HomePageSchema";

const baseMetadata: Metadata = {
  title: "Digital Marketing Agency in India | SEO, Web Development & PPC | biztalbox",
  description:
    "biztalbox is a leading digital marketing agency in India offering SEO, website development, PPC, social media marketing, branding, and digital solutions to help businesses grow online.",
};

export const metadata = createMetadata(baseMetadata, "/");

export default function Home() {
  return (
    <>
      <HomePageSchema />
      <HomePage />
    </>
  );
}
