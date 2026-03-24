import type { CmsJobDetail } from "@/types/cms-jobs";
import { stripHtmlTags } from "@/lib/sanitize-job-html";

function isRecord(v: unknown): v is Record<string, unknown> {
  return v !== null && typeof v === "object" && !Array.isArray(v);
}

/** Unwrap common API envelopes: `{ data }`, `{ data: { attributes } }`, `{ attributes }`. */
function unwrapPayload(raw: unknown): Record<string, unknown> | null {
  if (!isRecord(raw)) return null;
  if (isRecord(raw.data) && !Array.isArray(raw.data)) {
    const d = raw.data;
    if (isRecord(d.attributes)) {
      return { ...d, ...d.attributes };
    }
    return d;
  }
  if (isRecord(raw.attributes)) {
    return { ...raw, ...raw.attributes };
  }
  return raw;
}

function str(v: unknown): string | undefined {
  if (typeof v === "string" && v.trim()) return v.trim();
  return undefined;
}

function strOrNum(v: unknown): string | undefined {
  if (typeof v === "number" && Number.isFinite(v)) return String(v);
  return str(v);
}

function pick(
  o: Record<string, unknown>,
  keys: string[]
): string | undefined {
  for (const k of keys) {
    const v = strOrNum(o[k]);
    if (v) return v;
  }
  return undefined;
}

function splitParagraphs(text: string): string[] {
  return text
    .split(/\n\s*\n+/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/** True if the string likely contains HTML (tags or common entity-encoded tags). */
function looksLikeHtml(s: string): boolean {
  const t = s.trim();
  if (!t) return false;
  if (/<[a-z][\s\S]*>/i.test(t)) return true;
  if (/&lt;[a-z]+\b/i.test(t)) return true;
  return false;
}

/**
 * Prefer full HTML from known CMS keys when content looks like HTML.
 * Returns null when only plain text is present (intro/about parsing still applies).
 */
function extractBodyHtml(o: Record<string, unknown>): string | null {
  const keys = [
    "description",
    "role_description",
    "content",
    "body",
    "body_html",
    "bodyHtml",
    "html",
  ] as const;
  for (const k of keys) {
    const v = o[k];
    if (typeof v === "string" && v.trim()) {
      const raw = v.trim();
      if (looksLikeHtml(raw)) return raw;
    }
  }
  return null;
}

/**
 * When `bodyHtml` is used for the main narrative, omit duplicate source fields
 * so `buildIntroAndAbout` does not repeat the same copy as intro/paragraphs.
 */
function omitHtmlSourceFields(
  o: Record<string, unknown>,
  bodyHtml: string | null
): Record<string, unknown> {
  if (!bodyHtml) return o;
  const clone = { ...o };
  for (const k of [
    "description",
    "role_description",
    "content",
    "body",
    "body_html",
    "bodyHtml",
    "html",
  ]) {
    delete clone[k];
  }
  return clone;
}

function parseStringList(v: unknown): string[] {
  if (!v) return [];
  if (Array.isArray(v)) {
    return v
      .map((item) => {
        if (typeof item === "string") return item.trim();
        if (isRecord(item)) {
          return (
            str(item.text) ||
            str(item.title) ||
            str(item.description) ||
            str(item.name) ||
            str(item.label) ||
            ""
          );
        }
        return "";
      })
      .filter(Boolean);
  }
  if (typeof v === "string") {
    return v
      .split(/\n|•|;/)
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return [];
}

function parseResponsibilities(v: unknown): { text: string }[] {
  if (!v) return [];
  if (Array.isArray(v)) {
    const out: { text: string }[] = [];
    for (const item of v) {
      if (typeof item === "string" && item.trim()) {
        const raw = item.trim();
        out.push({
          text: looksLikeHtml(raw) ? stripHtmlTags(raw) : raw,
        });
        continue;
      }
      if (isRecord(item)) {
        const text =
          str(item.text) ||
          str(item.title) ||
          str(item.description) ||
          str(item.name);
        if (text)
          out.push({
            text: looksLikeHtml(text) ? stripHtmlTags(text) : text,
          });
      }
    }
    return out;
  }
  if (typeof v === "string") {
    return parseStringList(v).map((text) => ({
      text: looksLikeHtml(text) ? stripHtmlTags(text) : text,
    }));
  }
  return [];
}

function parseRequirements(v: unknown): { heading: string; sub: string }[] {
  if (!v) return [];
  if (Array.isArray(v)) {
    const out: { heading: string; sub: string }[] = [];
    for (const item of v) {
      if (typeof item === "string" && item.trim()) {
        const raw = item.trim();
        out.push({
          heading: looksLikeHtml(raw) ? stripHtmlTags(raw) : raw,
          sub: "",
        });
        continue;
      }
      if (isRecord(item)) {
        const headingRaw =
          str(item.heading) ||
          str(item.title) ||
          str(item.name) ||
          str(item.requirement);
        const subRaw =
          str(item.sub) ||
          str(item.subtitle) ||
          str(item.description) ||
          str(item.text) ||
          "";
        if (headingRaw) {
          out.push({
            heading: looksLikeHtml(headingRaw)
              ? stripHtmlTags(headingRaw)
              : headingRaw,
            sub: looksLikeHtml(subRaw) ? stripHtmlTags(subRaw) : subRaw,
          });
        }
      }
    }
    return out;
  }
  return [];
}

function parseBenefits(v: unknown): { title: string; sub: string }[] {
  if (!v) return [];
  if (Array.isArray(v)) {
    const out: { title: string; sub: string }[] = [];
    for (const item of v) {
      if (typeof item === "string" && item.trim()) {
        out.push({ title: item.trim(), sub: "" });
        continue;
      }
      if (isRecord(item)) {
        const title =
          str(item.title) ||
          str(item.heading) ||
          str(item.name) ||
          str(item.benefit);
        const sub =
          str(item.sub) ||
          str(item.subtitle) ||
          str(item.description) ||
          str(item.text) ||
          "";
        if (title) out.push({ title, sub });
      }
    }
    return out;
  }
  return [];
}

function buildIntroAndAbout(o: Record<string, unknown>): {
  intro: string | null;
  aboutParagraphs: string[];
} {
  const aboutRaw = pick(o, [
    "about_the_role",
    "about_role",
    "about",
    "role_about",
    "about_html",
  ]);
  if (aboutRaw) {
    const paras = splitParagraphs(aboutRaw);
    if (paras.length >= 2) {
      return { intro: paras[0], aboutParagraphs: paras.slice(1) };
    }
    if (paras.length === 1) {
      return { intro: null, aboutParagraphs: paras };
    }
  }

  const aboutArr = o.about_paragraphs ?? o.aboutParagraphs;
  if (Array.isArray(aboutArr) && aboutArr.every((x) => typeof x === "string")) {
    const paras = (aboutArr as string[]).map((s) => s.trim()).filter(Boolean);
    if (paras.length >= 2) return { intro: paras[0], aboutParagraphs: paras.slice(1) };
    if (paras.length === 1) return { intro: null, aboutParagraphs: paras };
  }

  const intro =
    pick(o, [
      "intro",
      "summary",
      "lead",
      "teaser",
      "excerpt",
      "overview",
    ]) ?? null;

  const desc = pick(o, ["description", "role_description", "content", "body"]);
  if (desc) {
    const paras = splitParagraphs(desc);
    if (!intro && paras.length > 0) {
      return {
        intro: paras[0],
        aboutParagraphs: paras.slice(1),
      };
    }
    if (intro && paras.length > 0) {
      return { intro, aboutParagraphs: paras };
    }
    if (!intro && paras.length === 0) {
      return { intro: null, aboutParagraphs: [] };
    }
  }

  return {
    intro,
    aboutParagraphs: [],
  };
}

function estimateReadingMinutes(job: {
  bodyHtml: string | null;
  intro: string | null;
  aboutParagraphs: string[];
  responsibilities: { text: string }[];
  requirements: { heading: string; sub: string }[];
  benefits: { title: string; sub: string }[];
}): number {
  const chunks: string[] = [];
  if (job.bodyHtml) chunks.push(stripHtmlTags(job.bodyHtml));
  if (job.intro) chunks.push(job.intro);
  chunks.push(...job.aboutParagraphs);
  job.responsibilities.forEach((r) => chunks.push(r.text));
  job.requirements.forEach((r) => chunks.push(r.heading, r.sub));
  job.benefits.forEach((b) => chunks.push(b.title, b.sub));
  const words = chunks.join(" ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/**
 * Maps arbitrary CMS JSON (detail endpoint) into a stable shape for the UI.
 * Supports snake_case / camelCase and nested `data` / `attributes` envelopes.
 */
export function parseCmsJobDetail(raw: unknown): CmsJobDetail | null {
  const o = unwrapPayload(raw);
  if (!o) return null;

  const slug = str(o.slug);
  const title = str(o.title);
  if (!slug || !title) return null;

  const location = pick(o, ["location", "job_location", "city"]) ?? "";
  const employment_type =
    pick(o, ["employment_type", "employmentType", "type", "job_type"]) ?? "";
  const department = pick(o, ["department", "team", "category"]) ?? "";
  const updated_at =
    pick(o, ["updated_at", "updatedAt", "published_at", "created_at"]) ?? "";
  const accepting =
    typeof o.accepting_applications === "boolean"
      ? o.accepting_applications
      : typeof o.acceptingApplications === "boolean"
        ? o.acceptingApplications
        : true;

  const bodyHtml = extractBodyHtml(o);
  const { intro, aboutParagraphs } = buildIntroAndAbout(omitHtmlSourceFields(o, bodyHtml));

  const responsibilities = parseResponsibilities(
    o.responsibilities ??
      o.responsibility_list ??
      o.responsibilityList ??
      o.duties
  );

  const requirements = parseRequirements(
    o.requirements ?? o.requirement_list ?? o.requirementList
  );

  const benefits = parseBenefits(
    o.benefits ?? o.perks ?? o.benefit_list ?? o.benefitList
  );

  const experienceLabel =
    pick(o, [
      "experience",
      "experience_years",
      "experienceYears",
      "years_experience",
      "yearsExperience",
      "seniority",
    ]) ?? null;

  const readingFromApi = (() => {
    const n =
      typeof o.reading_time_minutes === "number"
        ? o.reading_time_minutes
        : typeof o.readingTimeMinutes === "number"
          ? o.readingTimeMinutes
          : typeof o.est_reading_minutes === "number"
            ? o.est_reading_minutes
            : typeof o.reading_time === "number"
              ? o.reading_time
              : undefined;
    if (n !== undefined && Number.isFinite(n) && n > 0) return Math.round(n);
    return null;
  })();

  const readingTimeMinutes =
    readingFromApi ??
    estimateReadingMinutes({
      bodyHtml,
      intro,
      aboutParagraphs,
      responsibilities,
      requirements,
      benefits,
    });

  return {
    slug,
    title,
    location,
    employment_type,
    department,
    updated_at,
    accepting_applications: accepting,
    bodyHtml,
    intro,
    aboutParagraphs,
    responsibilities,
    requirements,
    benefits,
    experienceLabel,
    readingTimeMinutes,
  };
}
