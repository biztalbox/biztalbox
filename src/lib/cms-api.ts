import type { CMSPageData, CMSSettings } from "@/lib/cms-types";

const CMS_API_URL = process.env.CMS_API_URL ?? "https://cms.biztalbox.com";
const IS_DEV = process.env.NODE_ENV === "development";

/** Base URL of this Next.js app (for same-origin proxy fetch) */
function getAppBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    const url = process.env.NEXT_PUBLIC_APP_URL.replace(/\/$/, "");
    return url.startsWith("http") ? url : `https://${url}`;
  }
  if (process.env.VERCEL_URL && process.env.VERCEL) {
    const host = process.env.VERCEL_URL.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return `https://${host}`;
  }
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

const EMPTY_PAGE: CMSPageData = {
  slug: "",
  title: "",
  description: "",
  hero_title: "",
  hero_paragraph_1: "",
  hero_paragraph_2: "",
  cta_subtitle: "",
  cta_title: "",
  cta_body: "",
  benefits_title: "",
  benefits_subtitle: "",
  benefits_items: [],
  why_choose_title: "",
  why_choose_items: [],
  how_we_work_title: "",
  how_we_work_steps: [],
  faqs: [],
};

/** Safely get string from obj, supports both snake_case and camelCase keys */
function str(obj: Record<string, unknown>, ...keys: string[]): string {
  for (const k of keys) {
    const v = obj[k];
    if (v != null && typeof v === "string") return v;
  }
  return "";
}

/** Safely get array from obj */
function arr<T>(obj: Record<string, unknown>, key: string, map: (o: Record<string, unknown>) => T): T[] {
  const val = obj[key];
  if (!Array.isArray(val)) return [];
  return val.map((item) => (item && typeof item === "object" ? map(item as Record<string, unknown>) : null)).filter(Boolean) as T[];
}

/**
 * Normalize API response to CMSPageData.
 * Handles: direct shape, { data: {...} }, { page: {...} }, camelCase keys.
 */
export function normalizePageData(raw: unknown, fallbackSlug: string): CMSPageData {
  if (!raw || typeof raw !== "object") return { ...EMPTY_PAGE, slug: fallbackSlug };
  const obj = raw as Record<string, unknown>;
  let page = (obj.data ?? obj.page ?? obj) as Record<string, unknown>;

  if (page && typeof page === "object" && page.attributes && typeof page.attributes === "object") {
    page = { ...(page as Record<string, unknown>), ...(page.attributes as Record<string, unknown>) };
  }
  if (!page || typeof page !== "object") return { ...EMPTY_PAGE, slug: fallbackSlug };

  const sections = (page.sections ?? page) as Record<string, unknown>;
  if (sections && typeof sections === "object") {
    page = { ...page, ...sections };
  }

  const slug = str(page, "slug") || fallbackSlug;

  return {
    slug,
    title: str(page, "title") || `${fallbackSlug} | Biztalbox`,
    description: str(page, "description", "meta_description"),
    hero_title: str(page, "hero_title", "heroTitle"),
    hero_paragraph_1: str(page, "hero_paragraph_1", "heroParagraph1", "hero_paragraph1"),
    hero_paragraph_2: str(page, "hero_paragraph_2", "heroParagraph2", "hero_paragraph2"),
    cta_subtitle: str(page, "cta_subtitle", "ctaSubtitle"),
    cta_title: str(page, "cta_title", "ctaTitle"),
    cta_body: str(page, "cta_body", "ctaBody"),
    benefits_title: str(page, "benefits_title", "benefitsTitle"),
    benefits_subtitle: str(page, "benefits_subtitle", "benefitsSubtitle"),
    benefits_items: arr(page, "benefits_items", (i) => ({
      title: str(i, "title"),
      description: str(i, "description"),
    })),
    why_choose_title: str(page, "why_choose_title", "whyChooseTitle"),
    why_choose_items: arr(page, "why_choose_items", (i) => ({
      title: str(i, "title"),
      body: str(i, "body", "description"),
    })),
    how_we_work_title: str(page, "how_we_work_title", "howWeWorkTitle"),
    how_we_work_steps: arr(page, "how_we_work_steps", (i) => ({
      title: str(i, "title"),
      body: str(i, "body", "description"),
    })),
    services_offered_title: str(page, "services_offered_title", "servicesOfferedTitle") || undefined,
    services_offered_items: arr(page, "services_offered_items", (i) => ({
      title: str(i, "title"),
      body: str(i, "body", "description"),
    })),
    pricing_heading: str(page, "pricing_heading", "pricingHeading") || undefined,
    pricing_content: str(page, "pricing_content", "pricingContent") || undefined,
    conclusion_heading: str(page, "conclusion_heading", "conclusionHeading") || undefined,
    conclusion_content: str(page, "conclusion_content", "conclusionContent") || undefined,
    faqs: arr(page, "faqs", (i) => ({
      question: str(i, "question"),
      answer: str(i, "answer"),
    })),
  };
}

const SETTINGS_FALLBACK: CMSSettings = {
  projects_count: "5",
  contact_phone: "+91 9485699709",
  contact_email: "info@biztalbox.com",
  cta_default_subtitle: "",
  cta_default_title: "",
  cta_default_body: "",
};

export async function fetchPage(slug: string): Promise<CMSPageData | null> {
  const encodedSlug = encodeURIComponent(slug);

  const url = IS_DEV
    ? `${getAppBaseUrl()}/api/cms/page/${encodedSlug}`
    : `${CMS_API_URL}/api/public/pages/${encodedSlug}`;

  try {
    const res = await fetch(url, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    const raw = await res.json();
    return normalizePageData(raw, slug);
  } catch (err) {
    if (IS_DEV) {
      console.warn(`[CMS] Failed to fetch page "${slug}" (${url}):`, err);
    }
    return null;
  }
}

export async function fetchSettings(): Promise<CMSSettings> {
  try {
    const res = await fetch(`${CMS_API_URL}/api/settings`, {
      ...(IS_DEV ? { cache: "no-store" as RequestCache } : { next: { revalidate: 60 } }),
    });
    if (!res.ok) return SETTINGS_FALLBACK;
    const data = await res.json();
    if (!data || typeof data !== "object") return SETTINGS_FALLBACK;
    const d = data as Record<string, unknown>;
    return {
      projects_count: str(d, "projects_count", "projectsCount") || SETTINGS_FALLBACK.projects_count,
      contact_phone: str(d, "contact_phone", "contactPhone") || SETTINGS_FALLBACK.contact_phone,
      contact_email: str(d, "contact_email", "contactEmail") || SETTINGS_FALLBACK.contact_email,
      cta_default_subtitle: str(d, "cta_default_subtitle", "ctaDefaultSubtitle") || "",
      cta_default_title: str(d, "cta_default_title", "ctaDefaultTitle") || "",
      cta_default_body: str(d, "cta_default_body", "ctaDefaultBody") || "",
    };
  } catch {
    return SETTINGS_FALLBACK;
  }
}
