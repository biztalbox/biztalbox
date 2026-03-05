import { notFound } from "next/navigation";
import type { CMSPageData } from "@/lib/cms-types";
import SEOPageLayout from "@/components/seo-page/SEOPageLayout";
import { fetchPage, fetchSettings } from "@/lib/cms-api";

function createDevFallbackPage(slug: string): CMSPageData {
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  return {
    slug,
    title: `${title} | Biztalbox SEO Services`,
    description: `Professional SEO services - ${title}. Contact Biztalbox for a free consultation.`,
    hero_title: `SEO Services – ${title}`,
    hero_paragraph_1: `Looking for expert SEO in ${title}? Biztalbox helps local businesses rank higher and attract more customers.`,
    hero_paragraph_2: `Partner with a trusted SEO agency and grow your online presence.`,
    cta_subtitle: "Ready to Grow Your Business?",
    cta_title: "Get Started Today",
    cta_body: "Contact us for a free consultation and SEO audit.",
    benefits_title: "",
    benefits_subtitle: "",
    benefits_items: [],
    why_choose_title: "",
    why_choose_items: [],
    how_we_work_title: "",
    how_we_work_steps: [],
    faqs: [],
  };
}

export default async function CMSPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [page, settings] = await Promise.all([fetchPage(slug), fetchSettings()]);

  if (!page) {
    if (process.env.NODE_ENV === "development") {
      return <SEOPageLayout data={createDevFallbackPage(slug)} settings={settings} />;
    }
    notFound();
  }

  return <SEOPageLayout data={page} settings={settings} />;
}