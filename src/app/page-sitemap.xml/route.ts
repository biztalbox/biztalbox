import { locationSitemapResponse } from "@/lib/location-pages/sitemap";

/** Published seo pages at their location URLs, plus country/state listing pages. */
export async function GET() {
  return locationSitemapResponse("seo");
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
