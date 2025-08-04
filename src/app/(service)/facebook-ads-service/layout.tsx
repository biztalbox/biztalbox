import { Metadata } from "next/types";
import FacebookAdsServicePage from "./page";
import { createMetadata, createSchemaProps, createFullUrl } from "@/utils/metadata";
import SchemaProvider from "@/components/schema/SchemaProvider";

const baseMetadata: Metadata = {
  title: "Facebook & Instagram Ads Agency | Targeted Social Advertising",
  description: "Need more customers from Facebook and Instagram? Our ads agency creates campaigns that reach the right people and drive sales. Let's grow your business with social ads!"
};

export const metadata = createMetadata(baseMetadata, '/facebook-ads-service');

export default function FacebookAdsServiceLayout() {
  const schemaProps = createSchemaProps('service', '/facebook-ads-service');

  return (
    <SchemaProvider 
      schemaProps={schemaProps}
      currentUrl={createFullUrl('/facebook-ads-service')}
      title={baseMetadata.title as string}
      description={baseMetadata.description as string}
    >
      <FacebookAdsServicePage />
    </SchemaProvider>
  );
} 