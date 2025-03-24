import React from "react";
import { Metadata } from "next";
import AboutPage from "@/components/about/AboutPage";

export const metadata: Metadata = {
  title: "About us page",
  description: ""
};

const AboutUsPage = () => {
  return (
    <AboutPage/>
  );
};

export default AboutUsPage;
