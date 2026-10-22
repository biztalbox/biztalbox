import { notFound } from "next/navigation";
import "@/components/graphic-page/graphic-page.css";
import TailwindScope from "@/components/TailwindScope";
import GraphicPageLayout from "@/components/graphic-page/GraphicPageLayout";
import CountyList from "@/components/seo-page/CountyList";
import MarketingPageSchema from "@/components/schema/MarketingPageSchema";
import { createMarketingPageData } from "@/utils/marketing-page-data";
import { normalizeGraphicPageData } from "@/lib/cms-graphic-pages";
import { absoluteUrl } from "@/lib/location-pages/config";
import { JsonLd, cmsSchemasWithBreadcrumb, schemaBreadcrumbItems } from "@/lib/location-pages/metadata";
import Breadcrumbs from "../Breadcrumbs";
import type { ContentRendererProps } from "../types";

export default async function GraphicContent({ route, crumbs, path }: ContentRendererProps) {
  const slug = route.meta.slug;
  const data = normalizeGraphicPageData(route.raw, slug);
  if (!data) notFound();

  const cmsSchemas = cmsSchemasWithBreadcrumb(data.structured_data, crumbs, path);
  const pageData = createMarketingPageData({
    title: data.title || `${slug} | Biztalbox`,
    description: data.description,
    path,
    serviceType: "Graphic Design Services",
    faqs: data.faqs,
    reviews: [],
    aggregateRating: { rating: 5, reviewCount: 0, bestRating: 5 },
  });

  return (
    <TailwindScope id="graphic-route-root" className="min-h-screen">
      {cmsSchemas.length > 0 ? (
        <JsonLd schemas={cmsSchemas} />
      ) : (
        <MarketingPageSchema
          pageData={pageData}
          currentUrl={absoluteUrl(path)}
          breadcrumbItems={schemaBreadcrumbItems(crumbs, path)}
        />
      )}
      <GraphicPageLayout
        data={data}
        breadcrumbs={<Breadcrumbs items={crumbs} />}
        countyList={
          route.meta.country ? (
            <CountyList
              kind="graphic"
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
