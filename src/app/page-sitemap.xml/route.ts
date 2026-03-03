import { NextResponse } from "next/server";

interface CMSPage {
  slug: string;
  status: string;
  updated_at: string;
}

const BASE_URL = "https://biztalbox.com";
const CMS_API_URL =
  process.env.CMS_API_URL ?? "https://cms.biztalbox.com";

async function fetchCMSPages(): Promise<CMSPage[]> {
  try {
    const res = await fetch(`${CMS_API_URL}/api/public/pages`, {
      cache: "no-store",
      next: { revalidate: 0 },
    });
    if (!res.ok) {
      console.error(`[page-sitemap.xml] CMS API returned ${res.status}`);
      return [];
    }
    const data: CMSPage[] = await res.json();
    return data.filter((p) => p.status === "published");
  } catch (err) {
    console.error("[page-sitemap.xml] Failed to fetch CMS pages:", err);
    return [];
  }
}

function toW3CDate(dateStr: string): string {
  try {
    return new Date(dateStr).toISOString().split("T")[0];
  } catch {
    return new Date().toISOString().split("T")[0];
  }
}

export async function GET() {
  const pages = await fetchCMSPages();

  const urlEntries = pages
    .map(
      (p) => `
  <url>
    <loc>${BASE_URL}/page/${p.slug}</loc>
    <lastmod>${toW3CDate(p.updated_at)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
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

export const dynamic = "force-dynamic";
export const revalidate = 0;
