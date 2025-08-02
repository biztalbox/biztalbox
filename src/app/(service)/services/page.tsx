import React from "react";
import { Metadata } from "next";
import PortfolioWrapperMain from "@/components/portfolio/portfolio-wrapper-main";
import { createMetadata, createSchemaProps, createFullUrl } from "@/utils/metadata";
import SchemaProvider from "@/components/schema/SchemaProvider";

const baseMetadata: Metadata = {
  title: "Our Services | Digital Marketing & Web Development - Biztalbox",
  description: "Discover our comprehensive range of digital marketing and web development services designed to help your business grow online."
};

export const metadata = createMetadata(baseMetadata, '/services');

const ServicePage = () => {
  const schemaProps = createSchemaProps('service', '/services');

  return (
    <SchemaProvider 
      schemaProps={schemaProps}
      currentUrl={createFullUrl('/services')}
      title={baseMetadata.title as string}
      description={baseMetadata.description as string}
    >
      <PortfolioWrapperMain/>
    </SchemaProvider>
  );
};

export default ServicePage;