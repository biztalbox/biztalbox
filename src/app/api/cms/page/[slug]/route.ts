import { NextRequest, NextResponse } from "next/server";
import { normalizePageData } from "@/lib/cms-api";

const CMS_API_URL = process.env.CMS_API_URL ?? "https://cms.biztalbox.com";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  if (!slug) {
    return NextResponse.json({ error: "Slug required" }, { status: 400 });
  }

  try {
    const encodedSlug = encodeURIComponent(slug);
    const url = `${CMS_API_URL}/api/public/pages/${encodedSlug}`;
    const res = await fetch(url, { cache: "no-store" });

    if (!res.ok) {
      if (process.env.NODE_ENV === "development") {
        console.warn(`[CMS Proxy] ${url} returned ${res.status}`);
      }
      return NextResponse.json({ error: "Page not found", status: res.status }, { status: 404 });
    }

    const contentType = res.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
      if (process.env.NODE_ENV === "development") {
        console.warn(`[CMS Proxy] Unexpected content-type: ${contentType}`);
      }
      return NextResponse.json({ error: "Invalid response from CMS" }, { status: 502 });
    }

    const raw = await res.json();
    const page = normalizePageData(raw, slug);

    return NextResponse.json(page);
  } catch (err) {
    if (process.env.NODE_ENV === "development") {
      console.error("[CMS Proxy] Fetch error:", err);
    }
    return NextResponse.json(
      { error: "Failed to fetch from CMS", details: String(err) },
      { status: 502 }
    );
  }
}
