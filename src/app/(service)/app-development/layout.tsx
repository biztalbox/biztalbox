import { Metadata } from "next/types";
import AppDevelopmentPage from "./page";
import { createMetadata, createSchemaProps, createFullUrl } from "@/utils/metadata";
import SchemaProvider from "@/components/schema/SchemaProvider";

const baseMetadata: Metadata = {
  title: "App Development & Design Agency | Build Great Apps",
  description: "Custom mobile app development services for Android, iOS, and cross-platform applications with performance, design, and functionality in focus."
};

export const metadata = createMetadata(baseMetadata, '/app-development');

export default function AppDevelopmentLayout() {
  const schemaProps = createSchemaProps('service', '/app-development');

  return (
    <SchemaProvider 
      schemaProps={schemaProps}
      currentUrl={createFullUrl('/app-development')}
      title={baseMetadata.title as string}
      description={baseMetadata.description as string}
    >
      <AppDevelopmentPage />
    </SchemaProvider>
  );
} 