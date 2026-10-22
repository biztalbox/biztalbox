import { LOCATION_PAGE_TYPES, locationHref, type LocationPageType } from "@/lib/location-pages/config";
import { pageLabel, type Crumb } from "@/lib/location-pages/breadcrumbs";
import type { CountryHubData } from "@/lib/location-pages/cms";
import HubPage, { type HubLink } from "./HubPage";

/**
 * /{base}/{country}
 * nested country → its states; flat country (e.g. New Zealand) → its pages.
 */
export default function CountryHub({
  type,
  data,
  crumbs,
  path,
}: {
  type: LocationPageType;
  data: CountryHubData;
  crumbs: Crumb[];
  path: string;
}) {
  const cfg = LOCATION_PAGE_TYPES[type];
  const { country } = data;
  const isFlat = country.url_type === "flat";

  const links: HubLink[] = isFlat
    ? data.pages
        .filter((p) => p.location_path)
        .map((p) => ({ href: locationHref(type, p.location_path!), label: pageLabel(p) }))
    : data.states.map((s) => ({
        href: locationHref(type, `${country.slug}/${s.slug}`),
        label: s.name,
        meta: `${s.page_count} ${s.page_count === 1 ? "location" : "locations"}`,
      }));

  return (
    <HubPage
      title={`${cfg.serviceName} in ${country.name}`}
      intro={
        isFlat
          ? `Choose your location in ${country.name} to see how Biztalbox helps local businesses grow.`
          : `Choose a state to see the areas in ${country.name} where Biztalbox offers ${cfg.serviceName.toLowerCase()}.`
      }
      links={links}
      crumbs={crumbs}
      path={path}
    />
  );
}
