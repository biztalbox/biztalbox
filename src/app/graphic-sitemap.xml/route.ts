import { NextResponse } from "next/server";

interface CMSGraphicPage {
  slug: string;
  status: string;
  updated_at: string;
}

const BASE_URL = "https://biztalbox.com";
const IS_DEV = process.env.NODE_ENV === "development";
const CMS_API_URL =
  process.env.CMS_API_URL ?? (IS_DEV ? "http://localhost:3002" : "https://cms.biztalbox.com");

async function fetchCMSGraphicPages(): Promise<CMSGraphicPage[]> {
  try {
    const res = await fetch(`${CMS_API_URL.replace(/\/$/, "")}/api/public/graphic-pages`, {
      cache: "no-store",
      next: { revalidate: 0 },
    });
    if (!res.ok) {
      console.error(`[graphic-sitemap.xml] CMS API returned ${res.status}`);
      return [];
    }
    const data: CMSGraphicPage[] = await res.json();
    return data.filter((p) => p.status === "published");
  } catch (err) {
    console.error("[graphic-sitemap.xml] Failed to fetch CMS graphic pages:", err);
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
  const pages = await fetchCMSGraphicPages();

  const urlEntries = pages
    .map(
      (p) => `
  <url>
    <loc>${BASE_URL}/graphic/${p.slug}</loc>
    <lastmod>${toW3CDate(p.updated_at)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
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

export const dynamic = "force-dynamic";
export const revalidate = 0;
