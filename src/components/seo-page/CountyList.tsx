type CountyListKind = "seo" | "video" | "graphic";

const LIST_CONFIG: Record<
  CountyListKind,
  { endpoint: string; hrefPrefix: string; label: string }
> = {
  seo: {
    endpoint: "pages",
    hrefPrefix: "/page",
    label: "SEO Services",
  },
  video: {
    endpoint: "video-pages",
    hrefPrefix: "/video",
    label: "Video Editing Services",
  },
  graphic: {
    endpoint: "graphic-pages",
    hrefPrefix: "/graphic",
    label: "Graphic Design Services",
  },
};

const CountyList = async ({
  excludeSlug,
  country,
  state,
  kind = "seo",
}: {
  excludeSlug?: string;
  country: number;
  state: number;
  kind?: CountyListKind;
}) => {
  const config = LIST_CONFIG[kind];
  const CMS_API_URL = (process.env.CMS_API_URL ?? "https://cms.biztalbox.com").replace(
    /\/$/,
    "",
  );
  const params = new URLSearchParams({
    country_id: String(country),
    state_id: String(state),
  });
  if (excludeSlug) params.set("excludeSlug", excludeSlug);

  const res = await fetch(`${CMS_API_URL}/api/public/${config.endpoint}?${params.toString()}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    console.error(`[CountyList] CMS API returned ${res.status}`);
    return null;
  }
  const raw: unknown = await res.json();
  const data = Array.isArray(raw)
    ? raw.filter(
        (p: { status?: string; slug?: string }) =>
          p.status === "published" && p.slug !== excludeSlug,
      )
    : [];

  if (!data.length) return null;

  return (
    <div className="county-list tp-about-4-area pt-40 pb-40 p-relative">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-footer-3-widget mb-40">
              <h3 className="tp-footer-3-title">
                {config.label} {data[0].state_name}
              </h3>
              <div className="tp-footer-3-menu">
                <ul>
                  {data.map((item: { slug: string; county: string }) => (
                    <li key={item.slug}>
                      <a href={`${config.hrefPrefix}/${item.slug}`}>
                        {config.label} {item.county}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountyList;
