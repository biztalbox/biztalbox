import { Metadata } from "next";
import { createMetadata, createSchemaProps, createFullUrl } from "@/utils/metadata";
import SchemaProvider from "@/components/schema/SchemaProvider";
import { mainReviews, mainAggregateRating } from "@/data/schema-data";

const baseMetadata: Metadata = {
  title: "Best Digital Marketing Agency | Website Development",
  description: "Get a great website for your business! Our agency builds easy, attractive sites that help you reach more customers. Let's create your perfect website together!",
};



export const metadata = createMetadata(baseMetadata, '/');

export default async function Home({
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
    // Important: import dark home only when needed.
    // DarkHomePage includes global CSS imports which were overriding lite mode when statically imported.
    const DarkHomePage = (await import("@/components/DarkHomePage")).default;
    return (
      <SchemaProvider
        schemaProps={schemaProps}
        currentUrl={createFullUrl('/')}
        title={baseMetadata.title as string}
        description={baseMetadata.description as string}
      >
        <div id="home-route-root">
          <DarkHomePage />
        </div>
      </SchemaProvider>
    );
  } else {
    // Import lite home only when needed (keeps CSS isolated per mode).
    const LiteHomePage = (await import("@/components/LiteHomePage")).default;
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
