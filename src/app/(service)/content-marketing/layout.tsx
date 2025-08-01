import { Metadata } from "next/types";
import ContentMarketingPage from "./page";
import { createMetadata, createSchemaProps, createFullUrl } from "@/utils/metadata";
import SchemaProvider from "@/components/schema/SchemaProvider";

const baseMetadata: Metadata = {
  title: "Content Marketing Agency | Engage Your Audience",
  description: "Looking for content that connects? Our content marketing agency creates blogs, social posts, and more that engage your audience and build your brand. Let's tell your story!"
};

export const metadata = createMetadata(baseMetadata, '/content-marketing');

export default function ContentMarketingLayout() {
  const schemaProps = createSchemaProps('service', '/content-marketing');

  return (
    <SchemaProvider 
      schemaProps={schemaProps}
      currentUrl={createFullUrl('/content-marketing')}
      title={baseMetadata.title as string}
      description={baseMetadata.description as string}
    >
      <ContentMarketingPage />
    </SchemaProvider>
  );
} 