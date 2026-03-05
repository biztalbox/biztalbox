import { notFound } from "next/navigation";
import SEOPageLayout from "@/components/seo-page/SEOPageLayout";
import { fetchPage, fetchSettings } from "@/lib/cms-api";

export default async function CMSPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [page, settings] = await Promise.all([fetchPage(slug), fetchSettings()]);

  if (!page) notFound();

  return <SEOPageLayout data={page} settings={settings} />;
}