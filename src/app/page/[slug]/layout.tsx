import type { Metadata } from "next";
import { createFullUrl } from "@/utils/metadata";
import MarketingPageSchema from "@/components/schema/MarketingPageSchema";
import { createMarketingPageData } from "@/utils/marketing-page-data";
import type { CMSPageData } from "@/lib/cms-types";
import { testimonial } from "@/app/(SEO PAGES)/arapahoe-b2b-seo-company/data";
import { fetchPage } from "@/lib/cms-api";
import '@/app/page/[slug]/styles.css';

export const dynamic = "force-dynamic";

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN ?? "https://biztalbox.com";

/**
 * Dynamic metadata — title, description, and canonical URL all come from
 * the CMS so every slug gets its own correctly set <head> tags.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = await fetchPage(slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: `${DOMAIN}/page/${page.slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${DOMAIN}/page/${page.slug}`,
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
 * Layout injects all JSON-LD schemas for the CMS page:
 *  1. Organization
 *  2. Service + LocalBusiness (with AggregateRating & Reviews)
 *  3. FAQPage  (only when the page has FAQs)
 *  4. BreadcrumbList
 *  5. WebPage
 */
export default async function CMSPageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await fetchPage(slug);

  // If page doesn't exist the route's page.tsx will call notFound(); just
  // render children so the 404 boundary works correctly.
  if (!page) {
    return <>{children}</>;
  }

  const path = `/page/${slug}`;
  const currentUrl = createFullUrl(path);

  // Derive a readable service type from the slug.
  // e.g. "arapahoe-b2b-seo" → "B2B SEO Services"
  //      "denver-seo-company" → "SEO Services"
  const serviceType = slug.toLowerCase().includes("b2b")
    ? "B2B SEO Services"
    : slug.toLowerCase().includes("marketing")
    ? "Digital Marketing Services"
    : "SEO Services";

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
    reviews: testimonial.map((r) => ({
      author: r.name,
      rating: r.rating,
      text: r.desc,
    })),
    aggregateRating: {
      rating: 4.9,
      reviewCount: 156,
      bestRating: 5,
    },
    image:
      "https://biztalbox.com/_next/image?url=%2Fassets%2Fimg%2Fservices%2Fseo.webp&w=1080&q=75",
  });

  return (
    <>
      <MarketingPageSchema pageData={pageData} currentUrl={currentUrl} />
      {children}
    </>
  );
}
