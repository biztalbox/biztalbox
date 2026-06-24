import type { Metadata } from "next";
import MarketingPageSchema from "@/components/schema/MarketingPageSchema";
import { createMarketingPageData } from "@/utils/marketing-page-data";
import { createFullUrl } from "@/utils/metadata";
import { fetchGraphicPage, str } from "@/lib/cms-graphic-pages";
import "../graphic.css";

export const dynamic = "force-dynamic";

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN ?? "https://biztalbox.com";

function renderJsonLdSchemas(schemas: unknown[]) {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          key={index}
          type="application/ld+json"
          suppressHydrationWarning
        />
      ))}
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await fetchGraphicPage(slug);
  if (!page) return {};

  const title = page.title || `${slug} | Biztalbox`;
  const description = page.description;
  const canonical = `${DOMAIN}/graphic/${encodeURIComponent(slug)}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Biztalbox",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function GraphicCmsPageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await fetchGraphicPage(slug);

  if (!page) {
    return <>{children}</>;
  }

  const path = `/graphic/${slug}`;
  const currentUrl = createFullUrl(path);

  const schemasFromApi = (page.structured_data ? page.structured_data : null) as unknown;
  const schemaPayload = Array.isArray(schemasFromApi)
    ? schemasFromApi
    : schemasFromApi && typeof schemasFromApi === "object"
      ? [schemasFromApi]
      : [];
  const hasApiSchemas = schemaPayload.length > 0;

  const pageData = createMarketingPageData({
    title: page.title || `${slug} | Biztalbox`,
    description: page.description,
    path,
    serviceType: "Graphic Design Services",
    faqs: page.faqs,
    reviews: [],
    aggregateRating: { rating: 5, reviewCount: 0, bestRating: 5 },
  });

  return (
    <>
      {hasApiSchemas ? (
        renderJsonLdSchemas(schemaPayload)
      ) : (
        <MarketingPageSchema pageData={pageData} currentUrl={currentUrl} />
      )}
      {children}
    </>
  );
}
