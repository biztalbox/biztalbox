import type { Metadata } from "next";
import { createFullUrl } from "@/utils/metadata";
import MarketingPageSchema from "@/components/schema/MarketingPageSchema";
import { createMarketingPageData } from "@/utils/marketing-page-data";
import { fetchPage } from "@/lib/cms-api";
import '@/app/page/[slug]/styles.css';

export const dynamic = "force-dynamic";

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN ?? "https://biztalbox.com";

// Hardcoded testimonial
const testimonial = [
  {
    id: 1,
    rating: 5,
    name: "Laura M.",
    designation: " Local Retailer",
    desc: `"If I'm being honest, I wasn't convinced that SEO would help our small business. But in working with Biztalbox, my doubts were proven wrong. Within a few months, we started showing up in searches we didn’t even expect, and our website traffic actually feels meaningful now. Really appreciate the team’s transparency and patience with all my questions."`,
  },
  {
    id: 2,
    rating: 5,
    name: "Raj P. ",
    designation: "SaaS Founder",
    desc: `"Biztalbox isn't your average SEO agency. They invested time in learning about our SaaS product and our customer base. The advice was concise, actionable, and we actually see leads coming in that convert. It feels like they're part of our team, not a vendor." "`,
  },
  {
    id: 3,
    rating: 5,
    name: "Marcus L.",
    designation: "Service Business Owner",
    desc: `"I’ve worked with a few SEO companies before, and to be honest, the majority of them felt as if there was just a cookie cutter template they were using. Biztalbox felt completely custom. The team explained what they were doing without confusing jargon, and now our Google rankings are up, and calls are coming in steadily. It’s refreshing to finally feel confident in SEO."`,
  },
  {
    id: 4,
    rating: 5,
    name: "Karen S.",
    designation: "Manufacturing Director",
    desc: `"We hired Biztalbox for our manufacturing site, and I’ll admit I didn’t expect much. But their approach was different — the audits, keyword strategy, and follow-ups actually made sense. Our website traffic increased, and more importantly, we’re seeing real inquiries from clients. Couldn’t be happier."`,
  },
  {
    id: 5,
    rating: 5,
    name: "Maya L.",
    designation: "SaaS Company",
    desc: `"I wasn’t expecting SEO to be this… approachable. The team at Biztalbox communicated what was important, got our site issues resolved, and provided great actionable advice with content. Within months, we were seeing consistent leads. Real, actionable results."`,
  },
  ];

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
