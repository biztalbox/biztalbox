import React from "react";
import { Metadata } from "next";
import PortfolioWrapperMain from "@/components/portfolio/portfolio-wrapper-main";

export const metadata: Metadata = {
  title: "Our Services",
};

const ServicePage = () => {
  return (
    <PortfolioWrapperMain/>
  );
};

export default ServicePage;