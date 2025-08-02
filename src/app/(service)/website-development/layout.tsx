import { Metadata } from "next/types";
import WebsiteDevelopmentPage from "./page";
import { createMetadata, createSchemaProps, createFullUrl } from "@/utils/metadata";
import SchemaProvider from "@/components/schema/SchemaProvider";

const baseMetadata: Metadata = {
  title: "Web Development & Design Agency | Build Great Websites",
  description: "Professional web design and development services that deliver fast, responsive, and SEO-ready websites built to convert and grow your business."
};

export const metadata = createMetadata(baseMetadata, '/website-development');

export default function WebsiteDevelopmentLayout() {
  const schemaProps = createSchemaProps('service', '/website-development');

  return (
    <SchemaProvider 
      schemaProps={schemaProps}
      currentUrl={createFullUrl('/website-development')}
      title={baseMetadata.title as string}
      description={baseMetadata.description as string}
    >
      <WebsiteDevelopmentPage />
    </SchemaProvider>
  );
} 