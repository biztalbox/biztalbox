import React from "react";
import { Metadata } from "next";
import FaqMain from "@/demoPages/faq/faq-main";

export const metadata: Metadata = {
  title: "Liko - Faq page",
};

const FaqPage = () => {
  return (
    <FaqMain/>
  );
};

export default FaqPage;
