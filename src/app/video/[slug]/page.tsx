import { notFound } from "next/navigation";
import { fetchVideoPage } from "@/lib/cms-video-pages";
import CountyList from "@/components/seo-page/CountyList";
import VideoPageLayout from "./VideoPageLayout";

export const dynamic = "force-dynamic";

export default async function VideoCmsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = await fetchVideoPage(slug);

  if (!page) notFound();

  const countryId = Number(page.country_id);
  const stateId = Number(page.state_id);
  const pageSlug = typeof page.slug === "string" ? page.slug : slug;

  return (
    <VideoPageLayout
      data={page}
      countyList={
        Number.isFinite(countryId) && countryId > 0 && Number.isFinite(stateId) && stateId > 0 ? (
          <CountyList
            excludeSlug={pageSlug}
            country={countryId}
            state={stateId}
            kind="video"
          />
        ) : null
      }
    />
  );
}
