const CountyList = async ({
  excludeSlug,
  country,
  state,
}: {
  excludeSlug?: string;
  country: number;
  state: number;
}) => {
  const CMS_API_URL =
    process.env.CMS_API_URL ?? "https://cms.biztalbox.com";
  const res = await fetch(
    `${CMS_API_URL}/api/public/pages?country_id=${country}&state_id=${state}&excludeSlug=${excludeSlug}`,
    {
      cache: "no-store",
      next: { revalidate: 0 },
    }
  );
  if (!res.ok) {
    console.error(`[CountyList] CMS API returned ${res.status}`);
    return null;
  }
  const raw: unknown = await res.json();
  const data = Array.isArray(raw)
    ? raw.filter((p: { status?: string }) => p.status === "published")
    : [];

  if (!data.length) return null;

  return (
    <div className="tp-about-4-area pt-40 pb-40 p-relative">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-footer-3-widget mb-40">
              <h3 className="tp-footer-3-title">
                SEO Services {data[0].state_name}
              </h3>
              <div className="tp-footer-3-menu">
                <ul>
                  {data.map((item: { slug: string; county: string }) => (
                    <li key={item.slug}>
                      <a href={`/page/${item.slug}`}>SEO Services {item.county}</a>
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

export default CountyList