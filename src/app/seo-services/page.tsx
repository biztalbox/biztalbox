import { permanentRedirect } from "next/navigation";
import { LOCATION_PAGE_TYPES } from "@/lib/location-pages/config";

// Dynamic so the 308 carries a real Location header (a statically built
// redirect page only gets a meta refresh).
export const dynamic = "force-dynamic";

/** The bare base path has no page of its own: send it where the breadcrumb points. */
export default function Page() {
  permanentRedirect(LOCATION_PAGE_TYPES.seo.breadcrumbHref);
}
