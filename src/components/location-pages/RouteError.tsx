"use client";

import { useEffect } from "react";
import Link from "next/link";
import "./location-pages.css";

/**
 * Error boundary UI for the location routes (e.g. CMS unreachable).
 * Deliberately not a 404, so search engines retry later instead of
 * dropping the page from the index.
 */
export default function RouteError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("[location route]", error);
  }, [error]);

  return (
    <main className="bb-hub" style={{ textAlign: "center", paddingTop: 160 }}>
      <div className="container">
        <h1 className="bb-hub__title">Something went wrong</h1>
        <p className="bb-hub__intro" style={{ marginLeft: "auto", marginRight: "auto" }}>
          This page could not be loaded right now. Please try again in a moment.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button type="button" className="tp-btn-black-2" onClick={() => reset()}>
            Try again
          </button>
          <Link className="tp-btn-black-2" href="/">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
