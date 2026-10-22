import type { Metadata } from "next";
import { createFullUrl } from "@/utils/metadata";
import MarketingPageSchema from "@/components/schema/MarketingPageSchema";
import { createMarketingPageData } from "@/utils/marketing-page-data";
import { fetchPage } from "@/lib/cms-api";
import "@/components/seo-page/seo-page.css";
import {
  SEO_PAGE_AGGREGATE_RATING,
  SEO_PAGE_SCHEMA_IMAGE,
  SEO_PAGE_TESTIMONIALS,
} from "@/data/seo-page-testimonials";

export const dynamic = "force-dynamic";

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN ?? "https://biztalbox.com";

/** Next.js passes the segment still URL-encoded ("Austin%20SEO"). */
function decodeSlug(raw: string): string {
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
}

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


/**
 * Dynamic metadata — title, description, and canonical URL all come from
 * the CMS so every slug gets its own correctly set <head> tags.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = decodeSlug((await params).slug);
  const page = await fetchPage(slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `${DOMAIN}/page/${encodeURIComponent(page.slug)}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${DOMAIN}/page/${encodeURIComponent(page.slug)}`,
      siteName: "Biztalbox",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}

/**
 * Layout injects JSON-LD schemas for the CMS SEO page.
 * Uses `structured_data` from CMS when present; otherwise falls back to
 * generated MarketingPageSchema (Organization, Service, FAQ, Breadcrumb, WebPage).
 */
export default async function CMSPageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const slug = decodeSlug((await params).slug);
  const page = await fetchPage(slug);

  // If page doesn't exist the route's page.tsx will call notFound(); just
  // render children so the 404 boundary works correctly.
  if (!page) {
    return <>{children}</>;
  }

  const path = `/page/${encodeURIComponent(page.slug)}`;
  const currentUrl = createFullUrl(path);

  // Derive a readable service type from the slug.
  // e.g. "arapahoe-b2b-seo" → "B2B SEO Services"
  //      "denver-seo-company" → "SEO Services"
  const serviceType = slug.toLowerCase().includes("b2b")
    ? "B2B SEO Services"
    : slug.toLowerCase().includes("marketing")
    ? "Digital Marketing Services"
    : "SEO Services";

  const schemasFromApi = (page.structured_data ? page.structured_data : null) as unknown;
  const schemaPayload = Array.isArray(schemasFromApi)
    ? schemasFromApi
    : schemasFromApi && typeof schemasFromApi === "object"
      ? [schemasFromApi]
      : [];
  const hasApiSchemas = schemaPayload.length > 0;

  const pageData = createMarketingPageData({
    title: page.title,
    description: page.description,
    path,
    serviceType,
    faqs:
      page.faqs?.map((f) => ({
        question: f.question,
        answer: f.answer,
      })) ?? [],
    reviews: SEO_PAGE_TESTIMONIALS.map((r) => ({
      author: r.name,
      rating: r.rating,
      text: r.desc,
    })),
    aggregateRating: SEO_PAGE_AGGREGATE_RATING,
    image: SEO_PAGE_SCHEMA_IMAGE,
  });

  return (
    <>
      {hasApiSchemas ? (
        renderJsonLdSchemas(schemaPayload)
      ) : (
        <MarketingPageSchema pageData={pageData} currentUrl={currentUrl} />
      )}
      <div data-cms-seo-page>{children}</div>
    </>
  );
}
