import { Metadata } from "next";
import FaqMain from "@/demoPages/faq/faq-main";
import { createMetadata } from "@/utils/metadata";

const baseMetadata: Metadata = {
  title: "Frequently Asked Questions | Get Answers Fast",
  description: "Find quick answers to common questions about our services, process, and more. If you don't see your question here, contact us for assistance.",
};

export const metadata = createMetadata(baseMetadata, '/faq');

const FAQ = () => {
  return <FaqMain />;
};

export default FAQ;
