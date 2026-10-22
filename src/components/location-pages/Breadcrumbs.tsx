import Link from "next/link";
import type { Crumb } from "@/lib/location-pages/breadcrumbs";
import "./location-pages.css";

/**
 * Breadcrumb trail shown right below the site header.
 * Server-rendered so the links are in the page HTML. Transparent background;
 * colours follow the site's light/dark theme (html[data-theme]).
 */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  if (items.length < 2) return null;
  return (
    <nav aria-label="Breadcrumb" className="bb-breadcrumb">
      <div className="container">
        <ol className="bb-breadcrumb__list">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={`${i}-${item.label}`} className="bb-breadcrumb__item">
                {item.href && !isLast ? (
                  <Link href={item.href} className="bb-breadcrumb__link">
                    {item.label}
                  </Link>
                ) : (
                  <span className="bb-breadcrumb__current" aria-current="page">
                    {item.label}
                  </span>
                )}
                {!isLast && (
                  <span className="bb-breadcrumb__sep" aria-hidden="true">
                    &gt;
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
