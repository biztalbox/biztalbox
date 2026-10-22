import "@/components/seo-page/seo-page.css";
import SEOPageLayout from "@/components/seo-page/SEOPageLayout";
import CountyList from "@/components/seo-page/CountyList";
import MarketingPageSchema from "@/components/schema/MarketingPageSchema";
import { createMarketingPageData } from "@/utils/marketing-page-data";
import { fetchSettings, normalizePageData } from "@/lib/cms-api";
import { absoluteUrl } from "@/lib/location-pages/config";
import { JsonLd, cmsSchemasWithBreadcrumb, schemaBreadcrumbItems } from "@/lib/location-pages/metadata";
import {
  SEO_PAGE_AGGREGATE_RATING,
  SEO_PAGE_SCHEMA_IMAGE,
  SEO_PAGE_TESTIMONIALS,
} from "@/data/seo-page-testimonials";
import Breadcrumbs from "../Breadcrumbs";
import type { ContentRendererProps } from "../types";

/** Same derivation the old /page/[slug] layout used. */
function serviceTypeFromSlug(slug: string): string {
  const s = slug.toLowerCase();
  if (s.includes("b2b")) return "B2B SEO Services";
  if (s.includes("marketing")) return "Digital Marketing Services";
  return "SEO Services";
}

export default async function SeoContent({ route, crumbs, path }: ContentRendererProps) {
  const data = normalizePageData(route.raw, route.meta.slug);
  const settings = await fetchSettings();

  const cmsSchemas = cmsSchemasWithBreadcrumb(data.structured_data, crumbs, path);
  const pageData = createMarketingPageData({
    title: data.title,
    description: data.description,
    path,
    serviceType: serviceTypeFromSlug(data.slug),
    faqs: data.faqs?.map((f) => ({ question: f.question, answer: f.answer })) ?? [],
    reviews: SEO_PAGE_TESTIMONIALS.map((r) => ({ author: r.name, rating: r.rating, text: r.desc })),
    aggregateRating: SEO_PAGE_AGGREGATE_RATING,
    image: SEO_PAGE_SCHEMA_IMAGE,
  });

  return (
    <>
      {cmsSchemas.length > 0 ? (
        <JsonLd schemas={cmsSchemas} />
      ) : (
        <MarketingPageSchema
          pageData={pageData}
          currentUrl={absoluteUrl(path)}
          breadcrumbItems={schemaBreadcrumbItems(crumbs, path)}
        />
      )}
      <div data-cms-seo-page>
        <SEOPageLayout
          data={data}
          settings={settings}
          breadcrumbs={<Breadcrumbs items={crumbs} />}
          countyList={
            route.meta.country ? (
              <CountyList
                kind="seo"
                excludeSlug={route.meta.slug}
                countrySlug={route.meta.country.slug}
                stateSlug={route.meta.state?.slug}
              />
            ) : null
          }
        />
      </div>
    </>
  );
}
