import { NextResponse } from "next/server";
import { CMS_API_URL, LOCATION_PAGE_TYPES, absoluteUrl, locationHref, type LocationPageType } from "./config";

interface SitemapPage {
  slug: string;
  status: string;
  updated_at: string;
  country_slug?: string | null;
  state_slug?: string | null;
  url_type?: "nested" | "flat" | null;
  location_path?: string | null;
}

interface Entry {
  loc: string;
  lastmod: string;
  priority: string;
}

function toW3CDate(dateStr: string): string {
  const d = new Date(dateStr);
  return Number.isNaN(d.getTime()) ? new Date().toISOString().split("T")[0] : d.toISOString().split("T")[0];
}

function legacyPath(type: LocationPageType, slug: string): string {
  const safe = encodeURIComponent(slug);
  return type === "seo" ? `/page/${safe}` : locationHref(type, safe);
}

async function fetchPages(type: LocationPageType): Promise<SitemapPage[]> {
  const endpoint = LOCATION_PAGE_TYPES[type].cmsEndpoint;
  try {
    const res = await fetch(`${CMS_API_URL}/api/public/${endpoint}`, { cache: "no-store" });
    if (!res.ok) {
      console.error(`[${type} sitemap] CMS API returned ${res.status}`);
      return [];
    }
    const data: SitemapPage[] = await res.json();
    return Array.isArray(data) ? data.filter((p) => p.status === "published") : [];
  } catch (err) {
    console.error(`[${type} sitemap] Failed to fetch CMS pages:`, err);
    return [];
  }
}

/**
 * Sitemap for one location page type: every published page at its current
 * URL, plus the country and state listing pages that have pages.
 */
export async function locationSitemapResponse(type: LocationPageType) {
  const pages = await fetchPages(type);
  const entries = new Map<string, Entry>();
  const touch = (path: string, date: string, priority: string) => {
    const loc = absoluteUrl(path);
    const lastmod = toW3CDate(date);
    const prev = entries.get(loc);
    if (!prev || prev.lastmod < lastmod) entries.set(loc, { loc, lastmod, priority });
  };

  for (const p of pages) {
    if (!p.location_path) {
      touch(legacyPath(type, p.slug), p.updated_at, "0.8");
      continue;
    }
    touch(locationHref(type, p.location_path), p.updated_at, "0.8");
    if (p.country_slug) {
      touch(locationHref(type, p.country_slug), p.updated_at, "0.6");
      if (p.url_type !== "flat" && p.state_slug) {
        touch(locationHref(type, `${p.country_slug}/${p.state_slug}`), p.updated_at, "0.7");
      }
    }
  }

  const urlEntries = Array.from(entries.values())
    .map(
      (e) => `
  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${e.priority}</priority>
  </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
>${urlEntries}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "no-store, max-age=0",
      "X-Robots-Tag": "noindex",
    },
  });
}
