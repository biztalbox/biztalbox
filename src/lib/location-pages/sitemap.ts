import { NextResponse } from "next/server";
import {
  CMS_API_URL,
  LOCATION_PAGE_TYPES,
  absoluteUrl,
  locationHref,
  type LocationPageType,
} from "./config";
import type { CmsCountry, CountryHubData } from "./cms";

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

async function fetchPages(type: LocationPageType): Promise<SitemapPage[]> {
  const endpoint = LOCATION_PAGE_TYPES[type].cmsEndpoint;
  try {
    const res = await fetch(`${CMS_API_URL}/api/public/${endpoint}`, { cache: "no-store" });
    if (!res.ok) {
      console.error(`[${type} sitemap] CMS pages API returned ${res.status}`);
      return [];
    }
    const data: SitemapPage[] = await res.json();
    return Array.isArray(data) ? data.filter((p) => p.status === "published") : [];
  } catch (err) {
    console.error(`[${type} sitemap] Failed to fetch CMS pages:`, err);
    return [];
  }
}

async function fetchCountriesList(
  type: LocationPageType,
): Promise<(CmsCountry & { page_count: number })[]> {
  try {
    const res = await fetch(`${CMS_API_URL}/api/public/locations?type=${type}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      console.error(`[${type} sitemap] CMS locations API returned ${res.status}`);
      return [];
    }
    const data = await res.json();
    return Array.isArray(data)
      ? data.filter((c: { page_count?: number }) => (c.page_count ?? 0) > 0)
      : [];
  } catch (err) {
    console.error(`[${type} sitemap] Failed to fetch countries:`, err);
    return [];
  }
}

async function fetchCountryStates(
  type: LocationPageType,
  countrySlug: string,
): Promise<{ slug: string; page_count: number }[]> {
  try {
    const res = await fetch(
      `${CMS_API_URL}/api/public/locations/${encodeURIComponent(countrySlug)}?type=${type}`,
      { cache: "no-store" },
    );
    if (!res.ok) {
      console.error(`[${type} sitemap] CMS country hub ${countrySlug} returned ${res.status}`);
      return [];
    }
    const data = (await res.json()) as CountryHubData;
    return Array.isArray(data?.states)
      ? data.states.filter((s) => (s.page_count ?? 0) > 0)
      : [];
  } catch (err) {
    console.error(`[${type} sitemap] Failed to fetch states for ${countrySlug}:`, err);
    return [];
  }
}

/**
 * Sitemap for one location page type:
 * - every published content page at its new location URL
 * - every country hub that has pages
 * - every state hub (nested countries only)
 *
 * Pages without a location_path are skipped (legacy /page|/video|/graphic
 * slug URLs must not appear in the sitemap; they 301 via the legacy routes).
 */
export async function locationSitemapResponse(type: LocationPageType) {
  const [pages, countries] = await Promise.all([fetchPages(type), fetchCountriesList(type)]);

  const entries = new Map<string, Entry>();
  const latestByKey = new Map<string, string>();

  const bumpDate = (key: string, date: string) => {
    const prev = latestByKey.get(key);
    if (!prev || prev < date) latestByKey.set(key, date);
  };

  const touch = (path: string, date: string, priority: string) => {
    const loc = absoluteUrl(path);
    const lastmod = toW3CDate(date);
    const prev = entries.get(loc);
    if (!prev || prev.lastmod < lastmod) entries.set(loc, { loc, lastmod, priority });
  };

  const today = new Date().toISOString();

  for (const p of pages) {
    if (!p.location_path) continue;

    touch(locationHref(type, p.location_path), p.updated_at, "0.8");

    if (p.country_slug) {
      bumpDate(`country:${p.country_slug}`, p.updated_at);
      if (p.url_type !== "flat" && p.state_slug) {
        bumpDate(`state:${p.country_slug}/${p.state_slug}`, p.updated_at);
      }
    }
  }

  // Country hubs from the locations API (authoritative list).
  for (const country of countries) {
    const date = latestByKey.get(`country:${country.slug}`) ?? today;
    touch(locationHref(type, country.slug), date, "0.6");
  }

  // State hubs: only nested countries, only states that have pages.
  const nested = countries.filter((c) => c.url_type === "nested");
  const stateLists = await Promise.all(
    nested.map(async (country) => ({
      country,
      states: await fetchCountryStates(type, country.slug),
    })),
  );

  for (const { country, states } of stateLists) {
    for (const state of states) {
      const key = `state:${country.slug}/${state.slug}`;
      const date = latestByKey.get(key) ?? latestByKey.get(`country:${country.slug}`) ?? today;
      touch(locationHref(type, `${country.slug}/${state.slug}`), date, "0.7");
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
  </url>`,
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
