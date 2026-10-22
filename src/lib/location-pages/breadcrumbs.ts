import { LOCATION_PAGE_TYPES, absoluteUrl, locationHref, type LocationPageType } from "./config";
import type { CmsCountry, CmsState } from "./cms";

export interface Crumb {
  label: string;
  /** Omitted for the current page (last item). */
  href?: string;
}

/** "dallas-county-seo" -> "Dallas County Seo" (last-resort label). */
export function humanizeSlug(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/** Label for a content page: breadcrumb label → county → title → slug. */
export function pageLabel(p: {
  breadcrumb_label?: string | null;
  county?: string | null;
  title?: string | null;
  slug: string;
}): string {
  return p.breadcrumb_label?.trim() || p.county?.trim() || p.title?.trim() || humanizeSlug(p.slug);
}

/**
 * Home > {Type} > {Country} > {State} > {Page}
 * Every item links except the last one (the page being viewed).
 */
export function buildBreadcrumbs(
  type: LocationPageType,
  opts: {
    country?: CmsCountry | null;
    state?: CmsState | null;
    page?: { label: string } | null;
  }
): Crumb[] {
  const cfg = LOCATION_PAGE_TYPES[type];
  const crumbs: Crumb[] = [
    { label: "Home", href: "/" },
    { label: cfg.breadcrumbLabel, href: cfg.breadcrumbHref },
  ];
  if (opts.country) {
    crumbs.push({ label: opts.country.name, href: locationHref(type, opts.country.slug) });
    if (opts.state && opts.country.url_type !== "flat") {
      crumbs.push({
        label: opts.state.name,
        href: locationHref(type, `${opts.country.slug}/${opts.state.slug}`),
      });
    }
  }
  if (opts.page) crumbs.push({ label: opts.page.label });

  // The last item is the current page: no link.
  const last = crumbs[crumbs.length - 1];
  crumbs[crumbs.length - 1] = { label: last.label };
  return crumbs;
}

/** schema.org BreadcrumbList for the same crumbs. */
export function breadcrumbJsonLd(crumbs: Crumb[], currentPath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: absoluteUrl(c.href ?? currentPath),
    })),
  };
}
