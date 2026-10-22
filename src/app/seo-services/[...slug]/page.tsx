import { createLocationRoute } from "@/components/location-pages/create-route";
import SeoContent from "@/components/location-pages/content/SeoContent";

/**
 * All seo location URLs under this folder: country / state listings and
 * content pages. The public base path comes from
 * src/lib/location-pages/base-paths.json, not from this folder's name.
 */
const route = createLocationRoute("seo", SeoContent);

export const dynamic = "force-dynamic";
export const generateMetadata = route.generateMetadata;
export default route.Page;
