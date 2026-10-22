import { notFound, permanentRedirect } from "next/navigation";
import SEOPageLayout from "@/components/seo-page/SEOPageLayout";
import CountyList from "@/components/seo-page/CountyList";
import { fetchPage, fetchSettings } from "@/lib/cms-api";
import { resolveSlug } from "@/lib/location-pages/cms";
import { locationHref } from "@/lib/location-pages/config";

export const dynamic = "force-dynamic";

/**
 * Legacy URL /page/{slug}.
 * - The page (current or old slug) has a location → 301 to its new URL, one hop.
 * - The page exists but its country/state is incomplete → render it here as before.
 * - Unknown slug → 404.  CMS unreachable → error page (not a 404).
 */
export default async function CMSPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const { slug: rawSlug } = await Promise.resolve(params);
  // Next.js passes the segment still URL-encoded ("Los%20Angeles%20SEO").
  let slug = rawSlug;
  try {
    slug = decodeURIComponent(rawSlug);
  } catch {
    // malformed escape: use as is
  }

  const resolved = await resolveSlug("seo", slug);
  if (!resolved) notFound();
  if (resolved.location_path) permanentRedirect(locationHref("seo", resolved.location_path));

  const [page, settings] = await Promise.all([fetchPage(resolved.slug), fetchSettings()]);
  if (!page) notFound();

  return (
    <SEOPageLayout
      data={page}
      settings={settings}
      countyList={
        page.country_id && page.state_id ? (
          <CountyList excludeSlug={page.slug} country={page.country_id} state={page.state_id} />
        ) : null
      }
    />
  );
}
