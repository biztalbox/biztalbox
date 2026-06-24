const IS_DEV = process.env.NODE_ENV === "development";
const CMS_API_URL =
  process.env.CMS_API_URL ?? (IS_DEV ? "http://localhost:3002" : "https://cms.biztalbox.com");

export interface GraphicPageCreativeServiceCard {
  title: string;
  paragraph: string;
}

export interface GraphicPageFaq {
  question: string;
  answer: string;
}

export interface GraphicPageData {
  slug: string;
  title: string;
  description: string;
  hero: {
    heading: string;
    paragraph: string;
  };
  howWeWork: {
    subtitle: string;
    heading: string;
    paragraph: string;
  };
  goodDesign: {
    heading: string;
    paragraph: string;
  };
  creativeServices: {
    heading: string;
    cards: GraphicPageCreativeServiceCard[];
  };
  faqHeading: string;
  faqs: GraphicPageFaq[];
  structured_data?: unknown;
  country_id?: number;
  state_id?: number;
  county?: string;
}

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

function arr<T>(
  obj: Record<string, unknown> | null,
  key: string,
  map: (o: Record<string, unknown>) => T,
): T[] {
  if (!obj) return [];
  const val = obj[key];
  if (!Array.isArray(val)) return [];
  return val
    .map((item) => (item && typeof item === "object" ? map(item as Record<string, unknown>) : null))
    .filter(Boolean) as T[];
}

function unwrapPagePayload(raw: unknown): Record<string, unknown> | null {
  const obj = asRecord(raw);
  if (!obj) return null;
  const page = asRecord(obj.data ?? obj.page ?? obj) ?? obj;
  const attrs = asRecord(page.attributes);
  return attrs ? { ...page, ...attrs } : page;
}

function section(
  page: Record<string, unknown>,
  ...keys: string[]
): Record<string, unknown> | null {
  for (const key of keys) {
    const val = page[key];
    const rec = asRecord(val);
    if (rec) return rec;
  }
  return null;
}

export function normalizeGraphicPageData(raw: unknown, fallbackSlug: string): GraphicPageData | null {
  const page = unwrapPagePayload(raw);
  if (!page) return null;

  const hero = section(page, "hero") ?? page;
  const howWeWork = section(page, "howWeWork", "how_we_work") ?? page;
  const goodDesign = section(page, "goodDesign", "good_design") ?? page;
  const creativeServices = section(page, "creativeServices", "creative_services") ?? page;

  const cards = arr(creativeServices, "cards", (card) => ({
    title: str(card, "title"),
    paragraph: str(card, "paragraph", "body", "description"),
  }));

  const faqs = arr(page, "faqs", (item) => ({
    question: str(item, "question", "q"),
    answer: str(item, "answer", "a", "body"),
  }));

  return {
    slug: str(page, "slug") || fallbackSlug,
    title: str(page, "title", "meta_title"),
    description: str(page, "description", "meta_description"),
    hero: {
      heading: str(hero, "heading", "hero_heading", "heroHeading"),
      paragraph: str(hero, "paragraph", "hero_paragraph", "heroParagraph"),
    },
    howWeWork: {
      subtitle: str(howWeWork, "subtitle", "how_we_work_subtitle", "howWeWorkSubtitle"),
      heading: str(howWeWork, "heading", "how_we_work_heading", "howWeWorkHeading"),
      paragraph: str(howWeWork, "paragraph", "how_we_work_paragraph", "howWeWorkParagraph"),
    },
    goodDesign: {
      heading: str(goodDesign, "heading", "good_design_heading", "goodDesignHeading"),
      paragraph: str(goodDesign, "paragraph", "good_design_paragraph", "goodDesignParagraph"),
    },
    creativeServices: {
      heading: str(creativeServices, "heading", "creative_services_heading", "creativeServicesHeading"),
      cards,
    },
    faqHeading: str(page, "faqHeading", "faq_heading", "heading_faq"),
    faqs,
    structured_data: page.structured_data ?? page.structuredData,
    country_id: typeof page.country_id === "number" ? page.country_id : undefined,
    state_id: typeof page.state_id === "number" ? page.state_id : undefined,
    county: str(page, "county"),
  };
}

export async function fetchGraphicPage(slug: string): Promise<GraphicPageData | null> {
  const encoded = encodeURIComponent(slug);
  const url = `${CMS_API_URL.replace(/\/$/, "")}/api/public/graphic-pages/${encoded}`;

  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;
    const raw = await res.json();
    return normalizeGraphicPageData(raw, slug);
  } catch {
    return null;
  }
}
