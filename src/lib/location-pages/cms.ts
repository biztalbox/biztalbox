import { CMS_API_URL, LOCATION_PAGE_TYPES, type LocationPageType } from "./config";

/**
 * Thrown when the CMS cannot answer (network error, 5xx, bad JSON).
 * Routes must NOT turn this into a 404: the error boundary shows an error
 * page with status 500, so search engines retry instead of de-indexing.
 */
export class CmsUnavailableError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CmsUnavailableError";
  }
}

/** GET a CMS public API path. Returns null on 404, throws on anything else. */
export async function fetchCmsJson<T = unknown>(path: string): Promise<T | null> {
  const url = `${CMS_API_URL}${path}`;
  let res: Response;
  try {
    res = await fetch(url, { cache: "no-store" });
  } catch (err) {
    throw new CmsUnavailableError(`CMS request failed: ${url} (${String(err)})`);
  }
  if (res.status === 404) return null;
  if (!res.ok) throw new CmsUnavailableError(`CMS returned ${res.status} for ${url}`);
  try {
    return (await res.json()) as T;
  } catch {
    throw new CmsUnavailableError(`CMS returned invalid JSON for ${url}`);
  }
}

/* ------------------------------------------------------------------ */
/* Types returned by the CMS location endpoints                        */
/* ------------------------------------------------------------------ */

export type CountryUrlType = "nested" | "flat";

export interface CmsCountry {
  name: string;
  slug: string;
  url_type: CountryUrlType;
}

export interface CmsState {
  name: string;
  slug: string;
}

export interface CmsHubPage {
  slug: string;
  title: string;
  county: string | null;
  breadcrumb_label: string | null;
  location_path: string | null;
  updated_at?: string;
}

export interface CountryHubData {
  country: CmsCountry;
  states: (CmsState & { page_count: number })[];
  pages: CmsHubPage[];
}

export interface StateHubData {
  country: CmsCountry;
  state: CmsState;
  pages: CmsHubPage[];
}

export interface ResolvedSlug {
  status: "current" | "moved";
  slug: string;
  location_path: string | null;
}

/** Location fields every page detail response carries (all optional for safety). */
export interface PageLocationMeta {
  slug: string;
  title: string;
  location_path: string | null;
  country: CmsCountry | null;
  state: CmsState | null;
  county: string | null;
  breadcrumb_label: string | null;
}

const enc = encodeURIComponent;

export function fetchCountryHub(type: LocationPageType, country: string) {
  return fetchCmsJson<CountryHubData>(`/api/public/locations/${enc(country)}?type=${type}`);
}

export function fetchStateHub(type: LocationPageType, country: string, state: string) {
  return fetchCmsJson<StateHubData>(`/api/public/locations/${enc(country)}/${enc(state)}?type=${type}`);
}

export function resolveSlug(type: LocationPageType, slug: string) {
  return fetchCmsJson<ResolvedSlug>(`/api/public/resolve?type=${type}&slug=${enc(slug)}`);
}

export function fetchCountries(type: LocationPageType) {
  return fetchCmsJson<(CmsCountry & { page_count: number })[]>(`/api/public/locations?type=${type}`);
}

/** Raw page detail (current or old slug). The CMS answers with the current slug. */
export function fetchPageRaw(type: LocationPageType, slug: string) {
  const endpoint = LOCATION_PAGE_TYPES[type].cmsEndpoint;
  return fetchCmsJson<Record<string, unknown>>(`/api/public/${endpoint}/${enc(slug)}`);
}

function asString(v: unknown): string | null {
  return typeof v === "string" && v.trim() ? v : null;
}

function asCountry(v: unknown): CmsCountry | null {
  if (!v || typeof v !== "object") return null;
  const o = v as Record<string, unknown>;
  const name = asString(o.name);
  const slug = asString(o.slug);
  if (!name || !slug) return null;
  return { name, slug, url_type: o.url_type === "flat" ? "flat" : "nested" };
}

function asState(v: unknown): CmsState | null {
  if (!v || typeof v !== "object") return null;
  const o = v as Record<string, unknown>;
  const name = asString(o.name);
  const slug = asString(o.slug);
  return name && slug ? { name, slug } : null;
}

export function extractLocationMeta(raw: Record<string, unknown>, requestedSlug: string): PageLocationMeta {
  // Some older responses wrap the page in { data } or { page }.
  const page = ((raw.data ?? raw.page ?? raw) as Record<string, unknown>) ?? raw;
  return {
    slug: asString(page.slug) ?? requestedSlug,
    title: asString(page.title) ?? "",
    location_path: asString(page.location_path),
    country: asCountry(page.country),
    state: asState(page.state),
    county: asString(page.county),
    breadcrumb_label: asString(page.breadcrumb_label),
  };
}
