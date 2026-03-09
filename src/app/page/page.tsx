import { permanentRedirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biztalbox – Digital Marketing & SEO",
  description: "Redirecting to Biztalbox home.",
  robots: { index: false, follow: false },
};

/**
 * /page (no slug) has no content; permanently redirect to home.
 * Using permanentRedirect (308) so search engines consolidate /page → / in the index.
 */
export default function Page() {
  permanentRedirect("/");
}