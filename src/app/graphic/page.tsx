import { permanentRedirect } from "next/navigation";

/**
 * /graphic (no slug) redirects to the default CMS graphic page.
 * Location-specific pages live at /graphic/[slug] (e.g. /graphic/test).
 */
export default function GraphicIndexPage() {
  permanentRedirect("/graphic/graphic");
}
