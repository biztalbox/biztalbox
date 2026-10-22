import { locationSitemapResponse } from "@/lib/location-pages/sitemap";

/** Published video pages at their location URLs, plus country/state listing pages. */
export async function GET() {
  return locationSitemapResponse("video");
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
