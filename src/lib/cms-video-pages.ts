const IS_DEV = process.env.NODE_ENV === "development";
const CMS_API_URL =
  process.env.CMS_API_URL ?? (IS_DEV ? "http://localhost:3002" : "https://cms.biztalbox.com");

function asRecord(v: unknown): Record<string, unknown> | null {
  return v && typeof v === "object" ? (v as Record<string, unknown>) : null;
}

/** Safely get string from obj, supports multiple keys */
export function str(obj: Record<string, unknown> | null, ...keys: string[]): string {
  if (!obj) return "";
  for (const k of keys) {
    const v = obj[k];
    if (v != null && typeof v === "string") return v;
  }
  return "";
}

function unwrapPagePayload(raw: unknown): Record<string, unknown> | null {
  const obj = asRecord(raw);
  if (!obj) return null;
  const page = asRecord(obj.data ?? obj.page ?? obj) ?? obj;
  const attrs = asRecord(page.attributes);
  return attrs ? { ...page, ...attrs } : page;
}

export async function fetchVideoPage(slug: string): Promise<Record<string, unknown> | null> {
  const encoded = encodeURIComponent(slug);
  const url = `${CMS_API_URL.replace(/\/$/, "")}/api/public/video-pages/${encoded}`;

  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;
    const raw = await res.json();
    return unwrapPagePayload(raw);
  } catch {
    return null;
  }
}

