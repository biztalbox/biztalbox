import Link from "next/link";
import Wrapper from "@/layouts/wrapper";
import FooterFour from "@/layouts/footers/footer-four";
import TailwindScope from "@/components/TailwindScope";
import Breadcrumbs from "./Breadcrumbs";
import ThemedHeader from "./ThemedHeader";
import { JsonLd } from "@/lib/location-pages/metadata";
import { breadcrumbJsonLd, type Crumb } from "@/lib/location-pages/breadcrumbs";
import { LOCATION_PAGE_TYPES, locationHref, type LocationPageType } from "@/lib/location-pages/config";
import type { CmsCountry } from "@/lib/location-pages/cms";
import "./location-pages.css";

export interface LocationServiceSection {
  type: LocationPageType;
  countries: (CmsCountry & { page_count: number })[];
}

const PATH = "/locations";

/**
 * Top-level directory: every service type that has at least one published
 * location page, with its countries listed in the same hub-card UI.
 */
export default function LocationsDirectory({ sections }: { sections: LocationServiceSection[] }) {
  const crumbs: Crumb[] = [{ label: "Home", href: "/" }, { label: "Locations" }];

  return (
    <TailwindScope>
      <JsonLd schemas={[breadcrumbJsonLd(crumbs, PATH)]} />
      <Wrapper>
        <ThemedHeader />
        <Breadcrumbs items={crumbs} />
        <main className="bb-hub min-h-screen">
          <div className="container">
            <h1 className="bb-hub__title">Service Locations</h1>
            <p className="bb-hub__intro">
              Explore the countries where Biztalbox offers SEO, video editing, and graphic design
              services. Pick a service, then choose your country.
            </p>

            {sections.length === 0 ? (
              <p className="bb-hub__intro">Location listings will appear here once pages are published.</p>
            ) : (
              sections.map(({ type, countries }) => {
                const cfg = LOCATION_PAGE_TYPES[type];
                return (
                  <section key={type} className="bb-hub__section" aria-labelledby={`locations-${type}`}>
                    <h2 id={`locations-${type}`} className="bb-hub__section-title">
                      {cfg.serviceName}
                    </h2>
                    <ul className="bb-hub__grid">
                      {countries.map((c) => (
                        <li key={`${type}-${c.slug}`} className="bb-hub__item">
                          <Link href={locationHref(type, c.slug)} className="bb-hub__link">
                            <span className="bb-hub__name">{c.name}</span>
                            <span className="bb-hub__meta">
                              {c.page_count} {c.page_count === 1 ? "location" : "locations"}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                );
              })
            )}
          </div>
        </main>
        <FooterFour />
      </Wrapper>
    </TailwindScope>
  );
}
