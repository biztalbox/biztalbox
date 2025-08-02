import { Metadata } from "next/types";
import GraphicDesigningPage from "./page";
import { createMetadata, createSchemaProps, createFullUrl } from "@/utils/metadata";
import SchemaProvider from "@/components/schema/SchemaProvider";

const baseMetadata: Metadata = {
  title: "Graphic Design Agency | Professional Design Services",
  description: "Need eye-catching visuals? Our graphic design agency creates stunning logos, website designs, and marketing materials that make your brand stand out. Let's design something amazing together!"
};

export const metadata = createMetadata(baseMetadata, '/graphic-designing');

export default function GraphicDesigningLayout() {
  const schemaProps = createSchemaProps('service', '/graphic-designing');

  return (
    <SchemaProvider 
      schemaProps={schemaProps}
      currentUrl={createFullUrl('/graphic-designing')}
      title={baseMetadata.title as string}
      description={baseMetadata.description as string}
    >
      <GraphicDesigningPage />
    </SchemaProvider>
  );
} 