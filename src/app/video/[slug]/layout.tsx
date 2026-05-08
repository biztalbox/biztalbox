import type { Metadata } from "next";
import MarketingPageSchema from "@/components/schema/MarketingPageSchema";
import { createMarketingPageData } from "@/utils/marketing-page-data";
import { createFullUrl } from "@/utils/metadata";
import { fetchVideoPage, str } from "@/lib/cms-video-pages";
import "../style.css";

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
  const page = await fetchVideoPage(slug);
  if (!page) return {};

  const title = str(page, "title", "meta_title") || `${slug} | Biztalbox`;
  const description = str(page, "description", "meta_description");

  const canonical = `${DOMAIN}/video/${encodeURIComponent(slug)}`;

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

export default async function VideoCmsPageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await fetchVideoPage(slug);

  // Allow the route page.tsx to render 404 boundary cleanly.
  if (!page) {
    return <>{children}</>;
  }

  const path = `/video/${slug}`;
  const currentUrl = createFullUrl(path);

  // CMS can return either:
  // - `structured_data`: single JSON-LD object
  // - `structured_data`: array of JSON-LD objects
  // Keep this flexible so schema injection works for both shapes.
  const schemasFromApi = (page.structured_data ? page.structured_data : null) as unknown;
  const schemaPayload = Array.isArray(schemasFromApi)
    ? schemasFromApi
    : schemasFromApi && typeof schemasFromApi === "object"
      ? [schemasFromApi]
      : [];
  const hasApiSchemas = schemaPayload.length > 0;

  const fallbackFaqsRaw = page.faqs;
  const fallbackFaqs =
    Array.isArray(fallbackFaqsRaw)
      ? fallbackFaqsRaw.filter((f) => f && typeof f === "object")
          .map((f) => ({
            question: str(f as Record<string, unknown>, "question"),
            answer: str(f as Record<string, unknown>, "answer"),
          }))
      : [];

  const pageData = createMarketingPageData({
    title: str(page, "title", "meta_title") || `${slug} | Biztalbox`,
    description: str(page, "description", "meta_description"),
    path,
    serviceType: "Video Editing Services",
    faqs: fallbackFaqs,
    reviews: [],
    aggregateRating: { rating: 5, reviewCount: 0, bestRating: 5 },
  });

  return (
    <>
      {hasApiSchemas ? renderJsonLdSchemas(schemaPayload) : <MarketingPageSchema pageData={pageData} currentUrl={currentUrl} />}
      {children}
    </>
  );
}

