import { notFound } from "next/navigation";
import SEOPageLayout from "@/components/seo-page/SEOPageLayout";
import CountyList from "@/components/seo-page/CountyList";
import { fetchPage, fetchSettings } from "@/lib/cms-api";

export const dynamic = "force-dynamic";

export default async function CMSPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [page, settings] = await Promise.all([fetchPage(slug), fetchSettings()]);

  if (!page) notFound();

  return (
    <SEOPageLayout
      data={page}
      settings={settings}
      countyList={
        <CountyList
          excludeSlug={page.slug}
          country={page.country_id}
          state={page.state_id}
        />
      }
    />
  );

}