import { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { createMetadata, createSchemaProps, createFullUrl } from "@/utils/metadata";
import SchemaProvider from "@/components/schema/SchemaProvider";
import { mainReviews, mainAggregateRating } from "@/data/schema-data";

const baseMetadata: Metadata = {
  title: "Best Digital Marketing Agency | Website Development",
  description: "Get a great website for your business! Our agency builds easy, attractive sites that help you reach more customers. Let's create your perfect website together!",
};

export const metadata = createMetadata(baseMetadata, '/');

export default function Home() {
  const schemaProps = createSchemaProps('home', '/', {
    reviews: mainReviews,
    aggregateRating: mainAggregateRating
  });

  return (
    <SchemaProvider 
      schemaProps={schemaProps}
      currentUrl={createFullUrl('/')}
      title={baseMetadata.title as string}
      description={baseMetadata.description as string}
    >
      <HomePage/>
    </SchemaProvider>
  );
}
