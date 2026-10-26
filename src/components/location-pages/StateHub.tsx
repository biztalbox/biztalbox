import { LOCATION_PAGE_TYPES, locationHref, type LocationPageType } from "@/lib/location-pages/config";
import { pageLabel, type Crumb } from "@/lib/location-pages/breadcrumbs";
import type { StateHubData } from "@/lib/location-pages/cms";
import HubPage, { type HubLink } from "./HubPage";

/** /{base}/{country}/{state}: every published page (county) in the state. */
export default function StateHub({
  type,
  data,
  crumbs,
  path,
}: {
  type: LocationPageType;
  data: StateHubData;
  crumbs: Crumb[];
  path: string;
}) {
  const cfg = LOCATION_PAGE_TYPES[type];
  const { country, state } = data;

  const links: HubLink[] = data.pages
    .filter((p) => p.location_path)
    .map((p) => ({ href: locationHref(type, p.location_path!), label: pageLabel(p) }));

  return (
    <HubPage
      title={`${cfg.serviceName} in ${state.name}, ${country.name}`}
      intro={`Choose your area in ${state.name} to see how biztalbox helps local businesses grow.`}
      links={links}
      crumbs={crumbs}
      path={path}
    />
  );
}
