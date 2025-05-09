import React from "react";
import { Metadata } from "next";
import PortfolioWrapperMain from "@/components/portfolio/portfolio-wrapper-main";
import { createMetadata } from "@/utils/metadata";

const baseMetadata: Metadata = {
  title: "Our Services",
  description: "Discover our comprehensive range of digital marketing and web development services designed to help your business grow online."
};

export const metadata = createMetadata(baseMetadata, '/services');

const ServicePage = () => {
  return (
    <PortfolioWrapperMain/>
  );
};

export default ServicePage;