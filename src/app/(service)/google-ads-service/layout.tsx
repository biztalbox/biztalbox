import { Metadata } from "next/types";
import GoogleAdsServicePage from "./page";
import { createMetadata, createSchemaProps, createFullUrl } from "@/utils/metadata";
import SchemaProvider from "@/components/schema/SchemaProvider";

const baseMetadata: Metadata = {
  title: "Performance Marketing Agency | Boost Your Results",
  description: "Want better results from your marketing? Our performance marketing agency helps you get more from your budget with smart, data-driven strategies. Let's grow your business together!"
};

export const metadata = createMetadata(baseMetadata, '/google-ads-service');

export default function GoogleAdsServiceLayout() {
  const schemaProps = createSchemaProps('service', '/google-ads-service');

  return (
    <SchemaProvider 
      schemaProps={schemaProps}
      currentUrl={createFullUrl('/google-ads-service')}
      title={baseMetadata.title as string}
      description={baseMetadata.description as string}
    >
      <GoogleAdsServicePage />
    </SchemaProvider>
  );
} 