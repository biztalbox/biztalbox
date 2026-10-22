import type { LocationPageType } from "@/lib/location-pages/config";
import type { LocationRoute } from "@/lib/location-pages/resolve";
import type { Crumb } from "@/lib/location-pages/breadcrumbs";

export type PageRoute = Extract<LocationRoute, { kind: "page" }>;

export interface ContentRendererProps {
  type: LocationPageType;
  route: PageRoute;
  crumbs: Crumb[];
  /** Public path of this page, e.g. "/seo-services/usa/texas/dallas-seo". */
  path: string;
}
