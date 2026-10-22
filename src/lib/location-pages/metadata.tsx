import type { Metadata } from "next";
import { LOCATION_PAGE_TYPES, absoluteUrl, locationHref, type LocationPageType } from "./config";
import type { LocationRoute } from "./resolve";
import { breadcrumbJsonLd, buildBreadcrumbs, pageLabel, type Crumb } from "./breadcrumbs";

/* ------------------------------------------------------------------ */
/* Paths, labels, breadcrumbs for a resolved route                     */
/* ------------------------------------------------------------------ */

type RenderableRoute = Exclude<LocationRoute, { kind: "redirect" } | { kind: "notFound" }>;

/** Public path of a resolved route ("/seo-services/usa/texas"). */
export function routePath(type: LocationPageType, route: RenderableRoute): string {
  switch (route.kind) {
    case "country":
      return locationHref(type, route.data.country.slug);
    case "state":
      return locationHref(type, `${route.data.country.slug}/${route.data.state.slug}`);
    case "page":
      return route.meta.location_path
        ? locationHref(type, route.meta.location_path)
        : locationHref(type, route.meta.slug);
  }
}

export function routeBreadcrumbs(type: LocationPageType, route: RenderableRoute): Crumb[] {
  switch (route.kind) {
    case "country":
      return buildBreadcrumbs(type, { country: route.data.country });
    case "state":
      return buildBreadcrumbs(type, { country: route.data.country, state: route.data.state });
    case "page":
      return buildBreadcrumbs(type, {
        country: route.meta.country,
        state: route.meta.state,
        page: { label: pageLabel(route.meta) },
      });
  }
}

/** Absolute-URL breadcrumb items for MarketingPageSchema. */
export function schemaBreadcrumbItems(crumbs: Crumb[], currentPath: string) {
  return crumbs.map((c) => ({ name: c.label, item: absoluteUrl(c.href ?? currentPath) }));
}

/* ------------------------------------------------------------------ */
/* <head> metadata                                                     */
/* ------------------------------------------------------------------ */

function str(obj: Record<string, unknown>, ...keys: string[]): string {
  for (const k of keys) {
    const v = obj[k];
    if (typeof v === "string" && v.trim()) return v;
  }
  return "";
}

function build(title: string, description: string, canonical: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: { title, description, url: canonical, siteName: "Biztalbox", type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export function locationMetadata(type: LocationPageType, route: LocationRoute): Metadata {
  if (route.kind === "redirect" || route.kind === "notFound") return {};
  const cfg = LOCATION_PAGE_TYPES[type];
  const canonical = absoluteUrl(routePath(type, route));

  if (route.kind === "country") {
    const { country } = route.data;
    return build(
      `${cfg.serviceName} in ${country.name} | Biztalbox`,
      `Biztalbox ${cfg.serviceName.toLowerCase()} across ${country.name}. Choose your location to see how we help local businesses grow.`,
      canonical
    );
  }

  if (route.kind === "state") {
    const { country, state } = route.data;
    return build(
      `${cfg.serviceName} in ${state.name}, ${country.name} | Biztalbox`,
      `Biztalbox ${cfg.serviceName.toLowerCase()} in ${state.name}, ${country.name}. Choose your area to see how we help local businesses grow.`,
      canonical
    );
  }

  const raw = (route.raw.data ?? route.raw.page ?? route.raw) as Record<string, unknown>;
  const title = str(raw, "title", "meta_title") || `${route.meta.slug} | Biztalbox`;
  const description = str(raw, "description", "meta_description");
  return build(title, description, canonical);
}

/* ------------------------------------------------------------------ */
/* JSON-LD                                                             */
/* ------------------------------------------------------------------ */

function isBreadcrumbList(node: unknown): boolean {
  return (
    !!node &&
    typeof node === "object" &&
    (node as Record<string, unknown>)["@type"] === "BreadcrumbList"
  );
}

/**
 * Removes every BreadcrumbList anywhere in a JSON-LD value: top level,
 * inside "@graph", or nested as a property (e.g. WebPage.breadcrumb).
 */
function stripBreadcrumbs(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.filter((v) => !isBreadcrumbList(v)).map(stripBreadcrumbs);
  }
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [key, v] of Object.entries(value as Record<string, unknown>)) {
      if (isBreadcrumbList(v)) continue;
      out[key] = stripBreadcrumbs(v);
    }
    return out;
  }
  return value;
}

/**
 * Schemas from the CMS `structured_data` field (object or array), with any
 * BreadcrumbList removed: the generated breadcrumb (matching the visible
 * trail and the new URLs) is added instead.
 */
export function cmsSchemasWithBreadcrumb(
  structuredData: unknown,
  crumbs: Crumb[],
  currentPath: string
): unknown[] {
  const list = Array.isArray(structuredData)
    ? structuredData
    : structuredData && typeof structuredData === "object"
      ? [structuredData]
      : [];
  if (list.length === 0) return [];

  const cleaned = list.filter((node) => !isBreadcrumbList(node)).map(stripBreadcrumbs);

  return [...cleaned, breadcrumbJsonLd(crumbs, currentPath)];
}

export function JsonLd({ schemas }: { schemas: unknown[] }) {
  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
          suppressHydrationWarning
        />
      ))}
    </>
  );
}
