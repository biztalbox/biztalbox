import { Metadata } from "next";
import HomePage from "@/components/DarkHomePage";
import { createMetadata, createSchemaProps, createFullUrl } from "@/utils/metadata";
import SchemaProvider from "@/components/schema/SchemaProvider";
import { mainReviews, mainAggregateRating } from "@/data/schema-data";
import LiteHomePage from "@/components/LiteHomePage";

const baseMetadata: Metadata = {
  title: "Best Digital Marketing Agency | Website Development",
  description: "Get a great website for your business! Our agency builds easy, attractive sites that help you reach more customers. Let's create your perfect website together!",
};



export const metadata = createMetadata(baseMetadata, '/');

export default function Home({
  searchParams,
}: {
  searchParams?: { mode?: string | string[] };
}) {
  const schemaProps = createSchemaProps('home', '/', {
    reviews: mainReviews,
    aggregateRating: mainAggregateRating
  });

  const modeRaw = searchParams?.mode;
  const mode = Array.isArray(modeRaw) ? modeRaw[0] : modeRaw;
  if (mode === 'dark') {
    return (
      <SchemaProvider
        schemaProps={schemaProps}
        currentUrl={createFullUrl('/')}
        title={baseMetadata.title as string}
        description={baseMetadata.description as string}
      >
        <div id="home-route-root">
          <HomePage />
        </div>
      </SchemaProvider>
    );
  } else {
    return (
      <SchemaProvider
        schemaProps={schemaProps}
        currentUrl={createFullUrl('/')}
        title={baseMetadata.title as string}
        description={baseMetadata.description as string}
      >
        <LiteHomePage />
      </SchemaProvider>
    );
  }
}
