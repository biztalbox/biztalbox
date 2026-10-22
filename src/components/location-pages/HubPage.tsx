import Link from "next/link";
import Wrapper from "@/layouts/wrapper";
import FooterFour from "@/layouts/footers/footer-four";
import TailwindScope from "@/components/TailwindScope";
import Breadcrumbs from "./Breadcrumbs";
import ThemedHeader from "./ThemedHeader";
import { JsonLd } from "@/lib/location-pages/metadata";
import { breadcrumbJsonLd, type Crumb } from "@/lib/location-pages/breadcrumbs";
import "./location-pages.css";

export interface HubLink {
  href: string;
  label: string;
  meta?: string;
}

/** Shared shell for country and state listing pages. */
export default function HubPage({
  title,
  intro,
  links,
  crumbs,
  path,
}: {
  title: string;
  intro: string;
  links: HubLink[];
  crumbs: Crumb[];
  path: string;
}) {
  return (
    <TailwindScope>
      <JsonLd schemas={[breadcrumbJsonLd(crumbs, path)]} />
      <Wrapper>
        <ThemedHeader />
        <Breadcrumbs items={crumbs} />
        <main className="bb-hub min-h-screen">
          <div className="container">
            <h1 className="bb-hub__title">{title}</h1>
            <p className="bb-hub__intro">{intro}</p>
            <ul className="bb-hub__grid">
              {links.map((l) => (
                <li key={l.href} className="bb-hub__item">
                  <Link href={l.href} className="bb-hub__link">
                    <span className="bb-hub__name">{l.label}</span>
                    <span className="bb-hub__meta" aria-hidden={l.meta ? undefined : true}>
                      {l.meta ?? "→"}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </main>
        <FooterFour />
      </Wrapper>
    </TailwindScope>
  );
}
