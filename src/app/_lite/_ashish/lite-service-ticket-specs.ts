import { servicesData as seoServicesData } from "@/app/(service)/best-seo-agency/data";
import { servicesData as smoServicesData } from "@/app/(service)/social-media-marketing/data";
import { servicesData as webdevServicesData } from "@/app/(service)/website-development/data";
import { servicesData as graphicServicesData } from "@/app/(service)/graphic-designing/data";
import { servicesData as videoServicesData } from "@/app/(service)/motion-graphics/data";
import { servicesData as contentServicesData } from "@/app/(service)/content-marketing/data";
import { servicesData as adsServicesData } from "@/app/(service)/google-ads-service/data";
import { servicesData as appdevServicesData } from "@/app/(service)/app-development/data";
import { servicesData as algoServicesData } from "@/app/(service)/analysis-algorithm/data";

const NAMES_BY_SERVICE = {
  seo: seoServicesData.map((s) => s.name),
  smo: smoServicesData.map((s) => s.name),
  webdev: webdevServicesData.map((s) => s.name),
  graphic: graphicServicesData.map((s) => s.name),
  video: videoServicesData.map((s) => s.name),
  content: contentServicesData.map((s) => s.name),
  ads: adsServicesData.map((s) => s.name),
  appdev: appdevServicesData.map((s) => s.name),
  algo: algoServicesData.map((s) => s.name),
} as const;

export type LiteServiceTicketSpecKey = keyof typeof NAMES_BY_SERVICE;

/**
 * Split `servicesData` names for the lite ticket footer: left gets `ceil(n/2)` (extra when odd), right gets the rest.
 */
export function getTicketSpecNameColumns(service: LiteServiceTicketSpecKey): { left: string[]; right: string[] } {
  const names = [...NAMES_BY_SERVICE[service]];
  const mid = Math.ceil(names.length / 2);
  return { left: names.slice(0, mid), right: names.slice(mid) };
}
