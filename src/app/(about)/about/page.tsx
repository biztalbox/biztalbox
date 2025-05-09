import React from "react";
import { Metadata } from "next";
import AboutPage from "@/components/about/AboutPage";
import { createMetadata } from "@/utils/metadata";

const baseMetadata: Metadata = {
  title: "About BizTalBox | Digital Marketing & Website Design Agency",
  description: "BizTalBox specializes in digital marketing and website design to elevate your brand. Explore our expert team and innovative solutions!"
};

export const metadata = createMetadata(baseMetadata, '/about');

const AboutUsPage = () => {
  return (
    <AboutPage/>
  );
};

export default AboutUsPage;
