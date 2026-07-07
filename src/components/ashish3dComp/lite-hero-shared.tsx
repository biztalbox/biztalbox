"use client";

import Link from "next/link";
import {
  getTicketSpecNameColumns,
  type LiteServiceTicketSpecKey,
} from "./lite-service-ticket-specs";

/** Matches `src/app/(service)/*` routes. */
export const LITE_SERVICE_PAGE_PATHS = {
  seo: "/best-seo-agency",
  smo: "/social-media-marketing",
  webdev: "/website-development",
  graphic: "/graphic-designing",
  video: "/motion-graphics",
  content: "/content-marketing",
  ads: "/google-ads-service",
  google: "/google-ads-service",
  meta: "/facebook-ads-service",
} as const;

export type LiteServicePageKey = keyof typeof LITE_SERVICE_PAGE_PATHS;

export function formatReceiptDate(d: Date): string {
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yy = String(d.getFullYear() % 100).padStart(2, "0");
  return `${dd}/${mm}/${yy}`;
}

export function LiteServiceViewMoreLink({
  service,
  text = "View More",
  cls = "mx-auto",
}: {
  service: LiteServicePageKey;
  text?: string;
  cls?: string;
}) {
  return (
    <Link
      href={LITE_SERVICE_PAGE_PATHS[service]}
      className={`relative ${cls} block w-fit mt-5 rounded-full border border-black bg-[#F2F2F2] px-10 py-2.5 text-sm font-medium uppercase text-black transition-colors hover:bg-black hover:!text-white`}
      style={{ zIndex: 20 }}
    >
      {text}
    </Link>
  );
}

/** Rotated label on the left edge of each lite scanner ticket box. */
export const LITE_SCANNER_BOX_LABELS: Record<LiteServiceTicketSpecKey, string> = {
  seo: "Search Engine Optimization",
  smo: "Social Media Optimization",
  webdev: "Website Development",
  graphic: "Graphic Designing",
  video: "Motion Graphics",
  content: "Content Writing",
  ads: "Performance Marketing",
};

export function LiteScannerBoxLabel({ service }: { service: LiteServiceTicketSpecKey }) {
  return (
    <span
      className="pointer-events-none absolute left-0 top-[30%] text-muted z-10 text-xs leading-none whitespace-nowrap"
      style={{
        transform: "translateX(-85%) rotate(-90deg)",
        transformOrigin: "right center",
      }}
    >
      {LITE_SCANNER_BOX_LABELS[service]}
    </span>
  );
}

export function LiteTicketSpecsFooter({ service }: { service: LiteServiceTicketSpecKey }) {
  const { left, right } = getTicketSpecNameColumns(service);
  return (
    <div className="mt-2 grid grid-cols-2 gap-3 text-[10px] font-medium leading-[1.45] tracking-[0.08em] text-black/70">
      <div className="flex flex-col">
        <span className="font-bold block text-xs uppercase mb-1">What we do</span>
        {left.map((name, i) => (
          <span key={`${service}-spec-l-${i}`}>{name}</span>
        ))}
      </div>
      <div className="flex flex-col text-right">
        <span className="font-bold block text-xs uppercase mb-1">----</span>
        {right.map((name, i) => (
          <span key={`${service}-spec-r-${i}`}>{name}</span>
        ))}
      </div>
    </div>
  );
}
