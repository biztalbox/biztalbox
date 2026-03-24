/** Minimal fields from GET /api/public/jobs (list). */
export type CmsPublicJob = {
  slug: string;
  title: string;
  location: string;
  employment_type: string;
  department: string;
  updated_at: string;
  accepting_applications: boolean;
};

/**
 * Normalized job detail for the careers UI — built only from the CMS detail API JSON
 * (see `parseCmsJobDetail`).
 */
export type CmsJobDetail = CmsPublicJob & {
  /** Full rich-text HTML from CMS (e.g. description); rendered when present. */
  bodyHtml: string | null;
  intro: string | null;
  aboutParagraphs: string[];
  responsibilities: { text: string }[];
  requirements: { heading: string; sub: string }[];
  benefits: { title: string; sub: string }[];
  /** Shown on the experience badge; omit badge when null. */
  experienceLabel: string | null;
  readingTimeMinutes: number | null;
};
