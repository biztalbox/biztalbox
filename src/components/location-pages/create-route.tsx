import type { ComponentType } from "react";
import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import type { LocationPageType } from "@/lib/location-pages/config";
import { resolveLocationRoute } from "@/lib/location-pages/resolve";
import { locationMetadata, routeBreadcrumbs, routePath } from "@/lib/location-pages/metadata";
import CountryHub from "./CountryHub";
import StateHub from "./StateHub";
import type { ContentRendererProps } from "./types";

type Params = { slug?: string[] };
type RouteProps = { params: Params | Promise<Params> };

/**
 * Builds the page + metadata for one type's catch-all route.
 * The route folder only picks the type and its content renderer; nothing
 * depends on the folder's name.
 *
 *   404  → unknown country/state/page, empty listing, too many segments
 *   301  → old slug, wrong country/state, uppercase URL (one hop to canonical)
 *   500  → CMS unreachable (error.tsx), never a 404
 */
export function createLocationRoute(
  type: LocationPageType,
  Content: ComponentType<ContentRendererProps>
) {
  async function segmentsOf(params: RouteProps["params"]): Promise<string[]> {
    const { slug } = await Promise.resolve(params);
    return Array.isArray(slug) ? slug : [];
  }

  async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
    const route = await resolveLocationRoute(type, await segmentsOf(params));
    return locationMetadata(type, route);
  }

  async function LocationPage({ params }: RouteProps) {
    const route = await resolveLocationRoute(type, await segmentsOf(params));

    if (route.kind === "redirect") permanentRedirect(route.to);
    if (route.kind === "notFound") notFound();

    const path = routePath(type, route);
    const crumbs = routeBreadcrumbs(type, route);

    if (route.kind === "country") return <CountryHub type={type} data={route.data} crumbs={crumbs} path={path} />;
    if (route.kind === "state") return <StateHub type={type} data={route.data} crumbs={crumbs} path={path} />;
    return <Content type={type} route={route} crumbs={crumbs} path={path} />;
  }

  return { generateMetadata, Page: LocationPage };
}
