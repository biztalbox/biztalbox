import {
  CMS_API_URL,
  LOCATION_PAGE_TYPES,
  locationHref,
  type LocationPageType,
} from "@/lib/location-pages/config";
import { humanizeSlug } from "@/lib/location-pages/breadcrumbs";

type CountyListKind = LocationPageType;

const LABEL: Record<CountyListKind, string> = {
  seo: "SEO Services",
  video: "Video Editing Services",
  graphic: "Graphic Design Services",
};

interface ListItem {
  slug: string;
  status?: string;
  county?: string | null;
  breadcrumb_label?: string | null;
  title?: string | null;
  country_name?: string | null;
  state_name?: string | null;
  location_path?: string | null;
}

/** Link to a page: its new location URL, or its old URL while the location is incomplete. */
function itemHref(kind: CountyListKind, item: ListItem): string {
  if (item.location_path) return locationHref(kind, item.location_path);
  const safe = encodeURIComponent(item.slug);
  if (kind === "seo") return `/page/${safe}`;
  return `${LOCATION_PAGE_TYPES[kind].basePath}/${safe}`;
}

/**
 * Other published pages in the same state (or same country for flat
 * countries). Server-rendered so the links are in the page HTML.
 * Pass countrySlug/stateSlug (new routes) or country/state ids (legacy).
 */
const CountyList = async ({
  excludeSlug,
  country,
  state,
  countrySlug,
  stateSlug,
  kind = "seo",
}: {
  excludeSlug?: string;
  country?: number;
  state?: number;
  countrySlug?: string | null;
  stateSlug?: string | null;
  kind?: CountyListKind;
}) => {
  const params = new URLSearchParams();
  if (countrySlug) {
    params.set("country_slug", countrySlug);
    if (stateSlug) params.set("state_slug", stateSlug);
  } else if (country && state) {
    params.set("country_id", String(country));
    params.set("state_id", String(state));
  } else {
    return null;
  }
  if (excludeSlug) params.set("excludeSlug", excludeSlug);

  let raw: unknown;
  try {
    const res = await fetch(
      `${CMS_API_URL}/api/public/${LOCATION_PAGE_TYPES[kind].cmsEndpoint}?${params.toString()}`,
      { cache: "no-store" }
    );
    if (!res.ok) {
      console.error(`[CountyList] CMS API returned ${res.status}`);
      return null;
    }
    raw = await res.json();
  } catch (err) {
    // A related-links block must never take the whole page down.
    console.error("[CountyList] CMS request failed", err);
    return null;
  }

  const data: ListItem[] = Array.isArray(raw)
    ? (raw as ListItem[]).filter((p) => p.status === "published" && p.slug !== excludeSlug)
    : [];
  if (!data.length) return null;

  const label = LABEL[kind];
  const area = data[0].state_name || data[0].country_name || "";

  return (
    <div className="county-list tp-about-4-area pt-40 pb-40 p-relative">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-footer-3-widget mb-40">
              <h3 className="tp-footer-3-title">
                {label} {area}
              </h3>
              <div className="tp-footer-3-menu">
                <ul>
                  {data.map((item) => (
                    <li key={item.slug}>
                      <a href={itemHref(kind, item)}>
                        {label} {item.county || item.breadcrumb_label || humanizeSlug(item.slug)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountyList;
