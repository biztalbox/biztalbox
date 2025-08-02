import React from "react";
import { Metadata } from "next";
import AboutPage from "@/components/about/AboutPage";
import { createMetadata, createSchemaProps, createFullUrl } from "@/utils/metadata";
import SchemaProvider from "@/components/schema/SchemaProvider";

const baseMetadata: Metadata = {
  title: "About BizTalBox | Digital Marketing & Website Design Agency",
  description: "BizTalBox specializes in digital marketing and website design to elevate your brand. Explore our expert team and innovative solutions!"
};

export const metadata = createMetadata(baseMetadata, '/about');

const AboutUsPage = () => {
  const schemaProps = createSchemaProps('about', '/about');

  return (
    <SchemaProvider 
      schemaProps={schemaProps}
      currentUrl={createFullUrl('/about')}
      title={baseMetadata.title as string}
      description={baseMetadata.description as string}
    >
      <AboutPage/>
    </SchemaProvider>
  );
};

export default AboutUsPage;
