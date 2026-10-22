import { cache } from "react";
import { locationHref, type LocationPageType } from "./config";
import {
  extractLocationMeta,
  fetchCountryHub,
  fetchPageRaw,
  fetchStateHub,
  resolveSlug,
  type CountryHubData,
  type PageLocationMeta,
  type StateHubData,
} from "./cms";

/**
 * Turns the URL segments under a type's base path into one decision:
 * render a listing, render a content page, redirect, or 404.
 * Wrapped in React cache() so generateMetadata and the page share one
 * resolution (and one set of CMS calls) per request.
 */
export type LocationRoute =
  | { kind: "redirect"; to: string }
  | { kind: "notFound" }
  | { kind: "country"; data: CountryHubData }
  | { kind: "state"; data: StateHubData }
  | {
      kind: "page";
      raw: Record<string, unknown>;
      meta: PageLocationMeta;
      /** True when rendered at a legacy URL because the page has no complete location yet. */
      legacy: boolean;
    };

const SEGMENT = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function decode(segment: string): string {
  try {
    return decodeURIComponent(segment);
  } catch {
    return segment;
  }
}

async function redirectToSlug(type: LocationPageType, slug: string): Promise<LocationRoute> {
  const found = await resolveSlug(type, slug);
  if (found?.location_path) return { kind: "redirect", to: locationHref(type, found.location_path) };
  return { kind: "notFound" };
}

/**
 * Content page by slug. Renders only at its canonical location; any other
 * URL (old slug, wrong country/state) redirects there in one hop.
 */
async function contentPage(
  type: LocationPageType,
  slug: string,
  requestedPath: string
): Promise<LocationRoute> {
  const raw = await fetchPageRaw(type, slug);
  if (!raw) return { kind: "notFound" };
  const meta = extractLocationMeta(raw, slug);
  if (!meta.location_path) return { kind: "notFound" };
  if (meta.location_path !== requestedPath) {
    return { kind: "redirect", to: locationHref(type, meta.location_path) };
  }
  return { kind: "page", raw, meta, legacy: false };
}

async function resolve(type: LocationPageType, rawSegments: string[]): Promise<LocationRoute> {
  const segments = rawSegments.map(decode);
  if (segments.length === 0 || segments.length > 3) return { kind: "notFound" };

  const lower = segments.map((s) => s.toLowerCase());
  const valid = lower.every((s) => SEGMENT.test(s));

  // Legacy single-segment URLs (/video/{old-slug}) may contain odd characters.
  if (!valid) {
    if (segments.length === 1) {
      const found = await resolveSlug(type, segments[0]);
      if (found?.location_path) return { kind: "redirect", to: locationHref(type, found.location_path) };
    }
    return { kind: "notFound" };
  }

  if (lower.join("/") !== segments.join("/")) {
    return { kind: "redirect", to: locationHref(type, lower.join("/")) };
  }

  const path = lower.join("/");

  // /{base}/{country}  or legacy /{base}/{slug}
  if (lower.length === 1) {
    const hub = await fetchCountryHub(type, lower[0]);
    if (hub) return { kind: "country", data: hub };

    const raw = await fetchPageRaw(type, lower[0]);
    if (!raw) return { kind: "notFound" };
    const meta = extractLocationMeta(raw, lower[0]);
    if (meta.location_path) return { kind: "redirect", to: locationHref(type, meta.location_path) };
    // Page exists but its location is incomplete: keep serving it at the old
    // URL (video/graphic only) instead of returning a 404.
    if (type !== "seo") return { kind: "page", raw, meta, legacy: true };
    return { kind: "notFound" };
  }

  const [countrySlug, second, third] = lower;
  const hub = await fetchCountryHub(type, countrySlug);

  // Unknown country (e.g. renamed): a known page slug still finds its way.
  if (!hub) return redirectToSlug(type, lower[lower.length - 1]);

  if (lower.length === 2) {
    if (hub.country.url_type === "flat") return contentPage(type, second, path);

    const stateHub = await fetchStateHub(type, countrySlug, second);
    if (stateHub) return { kind: "state", data: stateHub };
    return redirectToSlug(type, second);
  }

  // Three segments only exist under nested countries.
  if (hub.country.url_type === "flat") return redirectToSlug(type, third);
  return contentPage(type, third, path);
}

// cache() compares arguments by identity, so key on a string, not the array.
const cachedResolve = cache((type: LocationPageType, joined: string) =>
  resolve(type, joined ? joined.split("/") : [])
);

export function resolveLocationRoute(type: LocationPageType, segments: string[] = []) {
  return cachedResolve(type, segments.join("/"));
}
