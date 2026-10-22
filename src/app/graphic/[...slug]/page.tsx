import { createLocationRoute } from "@/components/location-pages/create-route";
import GraphicContent from "@/components/location-pages/content/GraphicContent";

/**
 * All graphic location URLs under this folder: country / state listings and
 * content pages. The public base path comes from
 * src/lib/location-pages/base-paths.json, not from this folder's name.
 */
const route = createLocationRoute("graphic", GraphicContent);

export const dynamic = "force-dynamic";
export const generateMetadata = route.generateMetadata;
export default route.Page;
