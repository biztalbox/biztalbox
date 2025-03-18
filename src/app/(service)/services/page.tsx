import React from "react";
import { Metadata } from "next";
import PortfolioWrapperMain from "@/pages/portfolio/portfolio-wrapper-main";

export const metadata: Metadata = {
  title: "Our Services",
};

const ServicePage = () => {
  return (
    <PortfolioWrapperMain/>
  );
};

export default ServicePage;