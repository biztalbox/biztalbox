import "@/components/video-page/video-page.css";
import TailwindScope from "@/components/TailwindScope";
import VideoPageLayout from "@/components/video-page/VideoPageLayout";
import CountyList from "@/components/seo-page/CountyList";
import MarketingPageSchema from "@/components/schema/MarketingPageSchema";
import { createMarketingPageData } from "@/utils/marketing-page-data";
import { str, unwrapPagePayload } from "@/lib/cms-video-pages";
import { absoluteUrl } from "@/lib/location-pages/config";
import { JsonLd, cmsSchemasWithBreadcrumb, schemaBreadcrumbItems } from "@/lib/location-pages/metadata";
import Breadcrumbs from "../Breadcrumbs";
import type { ContentRendererProps } from "../types";

export default async function VideoContent({ route, crumbs, path }: ContentRendererProps) {
  const page = unwrapPagePayload(route.raw) ?? route.raw;
  const slug = route.meta.slug;

  const cmsSchemas = cmsSchemasWithBreadcrumb(page.structured_data, crumbs, path);
  const faqs = Array.isArray(page.faqs)
    ? page.faqs
        .filter((f) => f && typeof f === "object")
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
    faqs,
    reviews: [],
    aggregateRating: { rating: 5, reviewCount: 0, bestRating: 5 },
  });

  return (
    <TailwindScope id="video-route-root" className="min-h-screen">
      {cmsSchemas.length > 0 ? (
        <JsonLd schemas={cmsSchemas} />
      ) : (
        <MarketingPageSchema
          pageData={pageData}
          currentUrl={absoluteUrl(path)}
          breadcrumbItems={schemaBreadcrumbItems(crumbs, path)}
        />
      )}
      <VideoPageLayout
        data={page}
        breadcrumbs={<Breadcrumbs items={crumbs} />}
        countyList={
          route.meta.country ? (
            <CountyList
              kind="video"
              excludeSlug={slug}
              countrySlug={route.meta.country.slug}
              stateSlug={route.meta.state?.slug}
            />
          ) : null
        }
      />
    </TailwindScope>
  );
}
