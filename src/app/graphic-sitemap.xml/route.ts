import { locationSitemapResponse } from "@/lib/location-pages/sitemap";

/** Published graphic pages at their location URLs, plus country/state listing pages. */
export async function GET() {
  return locationSitemapResponse("graphic");
}

export const dynamic = "force-dynamic";
export const revalidate = 0;
