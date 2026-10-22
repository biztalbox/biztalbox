import basePaths from "./base-paths.json";

/**
 * The three CMS-driven location page types.
 *
 * URLs:  {basePath}/{country}                  country listing
 *        {basePath}/{country}/{state}          state listing   (nested countries)
 *        {basePath}/{country}/{slug}           content page    (flat countries)
 *        {basePath}/{country}/{state}/{slug}   content page    (nested countries)
 *
 * Nothing in the code depends on the folder names under src/app. The base
 * path comes from base-paths.json, and each route folder's catch-all only
 * names its type. See base-paths.json for how to rename a folder.
 */
export type LocationPageType = "seo" | "video" | "graphic";

export interface LocationTypeConfig {
  type: LocationPageType;
  /** Public URL prefix, e.g. "/seo-services". */
  basePath: string;
  /** Old prefixes that 301 to basePath (handled in next.config.mjs). */
  legacyBasePaths: string[];
  /** Second breadcrumb item ("Home > SEO > ..."). */
  breadcrumbLabel: string;
  /** Where that breadcrumb item, and the bare basePath, lead. */
  breadcrumbHref: string;
  /** CMS public API collection. */
  cmsEndpoint: "pages" | "video-pages" | "graphic-pages";
  /** Used in headings, titles and schema ("SEO Services in Texas"). */
  serviceName: string;
}

export const LOCATION_PAGE_TYPES: Record<LocationPageType, LocationTypeConfig> = {
  seo: {
    type: "seo",
    basePath: basePaths.seo.basePath,
    legacyBasePaths: basePaths.seo.legacyBasePaths,
    breadcrumbLabel: "SEO",
    breadcrumbHref: "/best-seo-agency",
    cmsEndpoint: "pages",
    serviceName: "SEO Services",
  },
  video: {
    type: "video",
    basePath: basePaths.video.basePath,
    legacyBasePaths: basePaths.video.legacyBasePaths,
    breadcrumbLabel: "Video",
    breadcrumbHref: "/motion-graphics",
    cmsEndpoint: "video-pages",
    serviceName: "Video Editing Services",
  },
  graphic: {
    type: "graphic",
    basePath: basePaths.graphic.basePath,
    legacyBasePaths: basePaths.graphic.legacyBasePaths,
    breadcrumbLabel: "Graphic",
    breadcrumbHref: "/graphic-designing",
    cmsEndpoint: "graphic-pages",
    serviceName: "Graphic Design Services",
  },
};

export const SITE_DOMAIN = (process.env.NEXT_PUBLIC_DOMAIN ?? "https://biztalbox.com").replace(/\/$/, "");

export const CMS_API_URL = (
  process.env.CMS_API_URL ??
  (process.env.NODE_ENV === "development" ? "http://localhost:3002" : "https://cms.biztalbox.com")
).replace(/\/$/, "");

/** "/seo-services/usa/texas/dallas-seo" from "usa/texas/dallas-seo". */
export function locationHref(type: LocationPageType, locationPath = ""): string {
  const base = LOCATION_PAGE_TYPES[type].basePath;
  return locationPath ? `${base}/${locationPath.replace(/^\/+/, "")}` : base;
}

export function absoluteUrl(path: string): string {
  return `${SITE_DOMAIN}${path === "/" ? "" : path}`;
}
