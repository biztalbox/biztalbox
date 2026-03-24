import { parseCmsJobDetail } from "@/lib/parse-cms-job-detail";
import type { CmsJobDetail } from "@/types/cms-jobs";

/**
 * CMS public jobs API base (no trailing slash).
 * Detail: GET https://cms.biztalbox.com/api/public/jobs/{slug}
 */
const CMS_JOBS_BASE =
  process.env.CMS_JOBS_URL ?? "https://cms.biztalbox.com/api/public/jobs";

/** Full URL for one job: `.../api/public/jobs/{slug}`. */
export function getCmsJobDetailApiUrl(slug: string): string {
  if (!slug) return CMS_JOBS_BASE;
  return `${CMS_JOBS_BASE}/${encodeURIComponent(slug)}`;
}

/** POST job applications: `.../api/public/jobs/{slug}/apply`. */
export function getCmsJobApplyUrl(slug: string): string {
  if (!slug) return `${CMS_JOBS_BASE}/apply`;
  return `${CMS_JOBS_BASE}/${encodeURIComponent(slug)}/apply`;
}

/**
 * Load one job from the CMS detail endpoint and normalize fields for the UI.
 */
export async function fetchJobBySlug(slug: string): Promise<CmsJobDetail | null> {
  if (!slug) return null;

  const url = getCmsJobDetailApiUrl(slug);

  try {
    const res = await fetch(url, {
      next: { revalidate: 120 },
      headers: { Accept: "application/json" },
    });

    if (!res.ok) return null;

    const raw: unknown = await res.json();
    return parseCmsJobDetail(raw);
  } catch {
    return null;
  }
}
