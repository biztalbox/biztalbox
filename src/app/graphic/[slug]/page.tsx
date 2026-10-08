import { notFound } from "next/navigation";
import { fetchGraphicPage } from "@/lib/cms-graphic-pages";
import CountyList from "@/components/seo-page/CountyList";
import GraphicPageLayout from "./GraphicPageLayout";

export const dynamic = "force-dynamic";

export default async function GraphicCmsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await fetchGraphicPage(slug);

  if (!page) notFound();

  const countryId = Number(page.country_id);
  const stateId = Number(page.state_id);

  return (
    <GraphicPageLayout
      data={page}
      countyList={
        Number.isFinite(countryId) && countryId > 0 && Number.isFinite(stateId) && stateId > 0 ? (
          <CountyList
            excludeSlug={page.slug}
            country={countryId}
            state={stateId}
            kind="graphic"
          />
        ) : null
      }
    />
  );
}
