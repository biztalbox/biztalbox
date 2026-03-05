import { notFound } from "next/navigation";
import type { CMSPageData, CMSSettings } from "@/lib/cms-types";
import SEOPageLayout from "@/components/seo-page/SEOPageLayout";

const CMS_API_URL = process.env.CMS_API_URL ?? "https://cms.biztalbox.com";

async function getPage(slug: string): Promise<CMSPageData | null> {
  try {
    const res = await fetch(`${CMS_API_URL}/api/public/pages/${slug}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return res.json() as Promise<CMSPageData>;
  } catch {
    return null;
  }
}

async function getSettings(): Promise<CMSSettings> {
  const fallback: CMSSettings = {
    projects_count: "5",
    contact_phone: "+91 9485699709",
    contact_email: "info@biztalbox.com",
    cta_default_subtitle: "",
    cta_default_title: "",
    cta_default_body: "",
  };
  try {
    const res = await fetch(`${CMS_API_URL}/api/settings`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return fallback;
    const data = await res.json();
    return { ...fallback, ...data };
  } catch {
    return fallback;
  }
}

export default async function CMSPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [page, settings] = await Promise.all([getPage(slug), getSettings()]);
  if (!page) notFound();
  return <SEOPageLayout data={page} settings={settings} />;
}