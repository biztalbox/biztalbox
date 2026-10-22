# Location Pages Migration: TODO

URL structure ka migration (SEO, Video, Graphic): `/{base}/{country}/{state}/{slug}`

---

## Final decisions

| Type | Base path (sirf main site ke config me) | Breadcrumb | Beech wala item ka link | Index page redirect |
|---|---|---|---|---|
| SEO | `/seo-services` | Home > SEO > Country > State > Page | `/best-seo-agency` | `/seo-services` → `/best-seo-agency` |
| Video | `/video` | Home > Video > Country > State > Page | `/motion-graphics` | `/video` → `/motion-graphics` |
| Graphic | `/graphic` | Home > Graphic > Country > State > Page | `/graphic-designing` | `/graphic` → `/graphic-designing` |

### URL patterns

| URL | Kya dikhega |
|---|---|
| `/{base}/{country}` | Nested country: states ki list. Flat country: pages ki list |
| `/{base}/{country}/{state}` | Nested country: state ke county pages ki list |
| `/{base}/{country}/{slug}` | Flat country (NZ, Ireland): page ka content |
| `/{base}/{country}/{state}/{slug}` | Nested country: page ka content |

### Rules

- **Folder ke naam par koi dependency nahi.**
  - CMS ko base path nahi pata. CMS sirf `location_path` bhejega, jaise `usa/texas/dallas-seo`.
  - Base path main site ke `lib/location-pages/config.ts` me ek jagah rahega.
  - Folder ka naam badalna ho to: folder rename karo, config me base path badlo, aur purana base `legacyBasePaths` me daalo. Purane URLs apne aap 301 ho jayenge.
- **Content page ke liye existing layouts hi use honge:** `SEOPageLayout`, `VideoPageLayout`, `GraphicPageLayout`. Naya content page nahi banega.
- **Breadcrumb:**
  - Header ke theek neeche, transparent background.
  - Dark aur light dono theme me sahi dikhe.
  - Aakhri item (current page) bina link ke.
- **Error handling:**
  - Country, state ya page na mile: site ka 404 page.
  - CMS down ho: error page aur status 500, 404 nahi. Isse Google page index se nahi hatayega.
- **Purane URLs:** `/page/*`, `/video/{old-slug}`, `/graphic/{old-slug}` sab naye URL par ek hi 301 hop me jayenge. Koi redirect chain nahi.
- **`middleware.ts` nahi chhedna.** Saare redirects routes ke andar honge.

---

# Part A: CMS (biztalbox-cms)

### A0. Taiyari
- [ ] CMS database ka poora backup
- [ ] Audit query, teeno tables (`cms_pages`, `cms_video_pages`, `cms_graphic_pages`):
  - [ ] Published pages jinme `country_id` ya `state_id` missing hai
  - [ ] State naam jo slug banane par ek hi country me takrayenge
  - [ ] Video/graphic page slugs jo kisi country slug se takrayenge (`/video/usa` jaisa takraav)

### A1. Database migration (`scripts/migrate.js`), sab additive aur nullable
- [ ] Nayi table `cms_slug_history`:
  - Columns: `id`, `page_type ENUM('seo','video','graphic')`, `page_id`, `old_slug`, `created_at`
  - `UNIQUE (page_type, old_slug)`
- [ ] `cms_countries`:
  - `slug VARCHAR(120) UNIQUE`
  - `url_type ENUM('nested','flat') NOT NULL DEFAULT 'nested'`
- [ ] `cms_states`: `slug VARCHAR(120)` aur `UNIQUE (country_id, slug)`
- [ ] `cms_pages`, `cms_video_pages`, `cms_graphic_pages`: `breadcrumb_label VARCHAR(255) NULL`

### A2. Shared helpers (`src/lib/`)
- [ ] `location-path.ts`: page + country + state se `location_path` banana
  - Nested country: `country/state/slug`
  - Flat country: `country/slug`
  - Country ya state missing ho to `null`
- [ ] `slug-history.ts`:
  - [ ] Slug rename hone par purana slug history me save (usi transaction me)
  - [ ] Naya slug kisi dusre page ke history slug se na takraye (same type)
  - [ ] Page apne purane slug par wapas jaye to woh history row delete
  - [ ] Page delete hone par uski history saaf (code me, kyunki ek table teen tables ko point karti hai aur FK nahi lag sakti)
  - [ ] Video/graphic page slug kisi country slug jaisa na ho
- [ ] `types.ts`: `Country` (`slug`, `url_type`), `State` (`slug`), aur teeno page types me `breadcrumb_label`

### A3. Admin APIs
- [ ] `api/pages/route.ts` (POST) aur `api/pages/[id]/route.ts` (PUT, DELETE)
- [ ] `api/video-pages/route.ts` aur `api/video-pages/[id]/route.ts`
- [ ] `api/graphic-pages/route.ts` aur `api/graphic-pages/[id]/route.ts`
- In sab me:
  - [ ] Slug history aur conflict checks (A2)
  - [ ] `breadcrumb_label` save
  - [ ] Publish par validation: country required, nested country ho to state bhi required. Draft bina iske save ho sake.
- [ ] `api/locations/countries` aur `countries/[id]`: `slug` + `url_type` accept karo, slug unique check
- [ ] `api/locations/countries/[id]/states` aur `states/[id]`: `slug` accept karo, unique per country

### A4. Public APIs (sirf naye fields aur endpoints, koi purana field nahi hatega)
- [ ] `api/public/pages/[slug]`, `video-pages/[slug]`, `graphic-pages/[slug]`:
  - [ ] Naye fields: `location_path`, `country {id, name, slug, url_type}`, `state {id, name, slug}`, `county`, `breadcrumb_label`
  - [ ] Slug na mile to `cms_slug_history` me dhoondo aur current page return karo (purani live site slug rename ke baad bhi chalti rahe)
- [ ] `api/public/pages`, `video-pages`, `graphic-pages` (list):
  - [ ] Har item me `location_path`, `country_slug`, `state_slug`, `breadcrumb_label`
  - [ ] Naye filters `country_slug` aur `state_slug`. Purane `country_id` aur `state_id` waise hi chalenge.
- [ ] Naya `api/public/resolve?type=seo|video|graphic&slug=`
  - Response: `{ status: "current" | "moved", slug, location_path }`
  - Page published nahi hai to 404
- [ ] Naya `api/public/locations?type=`: wahi countries jinme us type ke published pages hain (`name`, `slug`, `url_type`, `page_count`)
- [ ] Naya `api/public/locations/[countrySlug]?type=`:
  - Nested country: states ki list (`name`, `slug`, `page_count`, sirf jinme pages hain)
  - Flat country: pages ki list
- [ ] Sab public endpoints `lib/publicApiCors.ts` use karein

### A5. Admin UI
- [ ] `CountriesPanel.tsx`: slug field (naam se auto-fill, editable) aur "URL type: nested/flat" option
- [ ] `StatesPanel.tsx`: slug field (naam se auto-fill, editable)
- [ ] `LocationSelector.tsx`: flat country select ho to state dropdown chhupao
- [ ] `PageForm.tsx`, `VideoPageForm.tsx`, `GraphicPageForm.tsx`:
  - [ ] Slug ke neeche naye URL ka live preview. Base path yahan sirf display ke liye ek constant hoga, uspar koi functionality nahi tikegi.
  - [ ] "internal use only" wala text hatao
  - [ ] `breadcrumb_label` field
  - [ ] Flat country ho to state aur county fields chhupao
  - [ ] Slug badalne par note: "Purane URL ka redirect apne aap banega"

### A6. Scripts (`scripts/`)
Har script me `--dry-run` mode ho.
- [ ] `audit-locations.js`: A0 wali report
- [ ] `backfill-location-slugs.js`: naam se slugs, NZ aur Ireland ko `flat`, takraav ki report
- [ ] `rename-slugs.js`: CSV (`type,page_id,old_slug,new_slug`) padhega, slugs badlega aur history bharega
- [ ] `fix-structured-data.js`: teeno tables ke `structured_data` me `biztalbox.com/page|video|graphic/{old}` ko naye URL se badlega

---

# Part B: Main Site (biztalbox)

### B0. Taiyari
- [ ] Search Console se `/page/*`, `/video/*` aur `/graphic/*` ke traffic wale URLs ki list (Part C ki testing ke liye)
- [ ] Poore `src/` me hardcoded `/page/`, `/video/` aur `/graphic/` links ki list

### B1. Config aur engine (`src/lib/location-pages/`)
- [ ] `config.ts`: URL ka ek hi source. Har type (`seo`, `video`, `graphic`) ke liye:
  - `basePath`, `legacyBasePaths: []`
  - `breadcrumbLabel` ("SEO", "Video", "Graphic"), `breadcrumbHref`
  - `cmsEndpoint`, `serviceType`
  - `ContentComponent`, `Wrapper` (Tailwind scope/CSS), `fetchPage` function
- [ ] `resolve.ts`: `resolveLocationRoute(type, segments)`, React `cache()` me wrap
  - [ ] Segments ka format check (`a-z0-9-`). Uppercase ho to lowercase URL par 301.
  - [ ] 1 segment: country mile to country listing. Warna page slug check (current ya history): mile to naye URL par 301, na mile to 404.
  - [ ] 2 segments: flat country ho to content page. Nested ho to state listing.
  - [ ] 3 segments: nested country ka content page. Flat country ho to 404.
  - [ ] 4 ya zyada segments: 404
  - [ ] URL ka country/state page se match na kare, ya slug purana ho: canonical URL par 301
  - [ ] Legacy base path se aaye to naye base par 301
- [ ] `metadata.ts`: title, description, canonical, Open Graph, Twitter, JSON-LD
  - Purane `page/[slug]/layout.tsx`, `video/[slug]/layout.tsx`, `graphic/[slug]/layout.tsx` ka logic yahan aayega
  - SEO ke hardcoded testimonials bhi yahin
  - Listing pages ka generated title, jaise "SEO in Texas, USA | Biztalbox"
- [ ] `breadcrumbs.ts`: `buildBreadcrumbs(config, country, state, page)` ek array `[{label, href?}]` dega. Isi se UI aur BreadcrumbList JSON-LD dono banenge.
- [ ] `render.tsx`: `renderLocationRoute(type, segments)` aur `generateLocationMetadata(type, segments)`. Har catch-all route inhi ko call karega.

### B2. Error handling
- [ ] Country, state ya page na mile, bina pages wali listing, ya galat format: `notFound()`, jisse existing `not-found.tsx` khulega
- [ ] CMS fetch fail ho (network ya 5xx): error throw karo, `notFound()` nahi. Error page aur status 500.
- [ ] `src/components/location-pages/RouteError.tsx`: shared error UI. Har folder ka `error.tsx` sirf isko re-export kare.
- [ ] CMS fetchers me 404 (data nahi hai) aur 5xx (CMS down hai) ka farq rakho

### B3. CMS fetchers aur types
- [ ] `lib/cms-types.ts`: `location_path`, `country`, `state`, `county`, `breadcrumb_label`, aur location types
- [ ] `lib/cms-api.ts`: `normalizePageData` me naye fields, aur `resolveSlug(type, slug)`, `fetchLocations(type)`, `fetchCountryLocations(type, country)`, `fetchStatePages(type, country, state)`
- [ ] `lib/cms-video-pages.ts` aur `lib/cms-graphic-pages.ts`: naye fields aur 404/5xx ka farq

### B4. Components
- [ ] `components/location-pages/Breadcrumbs.tsx` (server component):
  - [ ] `<nav aria-label="breadcrumb"><ol>`, aakhri item par `aria-current="page"` aur link nahi
  - [ ] Transparent background, header ke theek neeche (transparent header ke hisaab se top spacing)
  - [ ] Dark aur light theme: `html[data-theme="light"]` aur dark default ke styles
  - [ ] Tailwind ke bina plain CSS, taaki teeno page types me ek jaisa dikhe
  - [ ] Mobile par wrap ho, aur lamba label ellipsis se kate
- [ ] `components/location-pages/CountryHub.tsx`: header, breadcrumbs, states ya pages ki link list, footer. Existing site styles hi.
- [ ] `components/location-pages/StateHub.tsx`: header, breadcrumbs, county pages ki link list, footer
- [ ] `app/video/[slug]/VideoPageLayout.tsx` → `components/video-page/VideoPageLayout.tsx` (sirf jagah badlegi, code same)
- [ ] `app/graphic/[slug]/GraphicPageLayout.tsx` → `components/graphic-page/GraphicPageLayout.tsx` (code same)
- [ ] `SEOPageLayout`, `VideoPageLayout`, `GraphicPageLayout`: sirf optional `breadcrumbs?: React.ReactNode` prop, header ke neeche render. Prop na ho to render pehle jaisa.
- [ ] `components/schema/MarketingPageSchema.tsx`: optional `breadcrumbItems` prop. Na diya ho to purana Home > Page wala output.
- [ ] `components/seo-page/CountyList.tsx`: teeno types ka href `config.basePath + "/" + location_path`, aur state listing ka link

### B5. Routes
- [ ] Naya `app/seo-services/page.tsx`: `/best-seo-agency` par permanent redirect
- [ ] Naya `app/seo-services/[...slug]/page.tsx`: sirf `renderLocationRoute("seo", slug)` aur `generateLocationMetadata`
- [ ] `app/video/[slug]/` → `app/video/[...slug]/page.tsx` (`"video"` type). `video/layout.tsx` (TailwindScope) waisa hi.
- [ ] `app/graphic/[slug]/` → `app/graphic/[...slug]/page.tsx` (`"graphic"` type). `graphic/layout.tsx` waisa hi.
- [ ] `app/video/page.tsx`: redirect `/` se badal kar `/motion-graphics`
- [ ] `app/graphic/page.tsx`: redirect `/` se badal kar `/graphic-designing`
- [ ] `app/page/[slug]/page.tsx`: resolve karke naye URL par permanent redirect
  - Page mile par `location_path` null ho: purana render (safety net)
  - Page na mile: 404
- [ ] `app/page/[slug]/layout.tsx`: schema logic hatao (B1 me shift), sirf CSS import aur wrapper
- [ ] Har naye route folder me `error.tsx` (B2 ka re-export)
- [ ] Har catch-all me sahi CSS: SEO ke liye `styles.css` aur `data-cms-seo-page` wrapper, video ke liye `style.css`, graphic ke liye `graphic.css`. Ye config ke `Wrapper` se, folder ke path se nahi.

### B6. Sitemaps aur links
- [ ] `page-sitemap.xml/route.ts`, `video-page-sitemap.xml/route.ts`, `graphic-sitemap.xml/route.ts`:
  - Naye URLs (config ka base + `location_path`)
  - Country aur state listing pages bhi
- [ ] B0 me mile hardcoded links naye URLs se badlo
- [ ] `robots.txt` nahi badalna (sitemap URLs same hain)

---

# Part C: Go-live aur verification (dono repos)

### C1. Deploy order (isi order me)
1. [ ] CMS deploy, phir `migrate.js`, `audit-locations.js` aur `backfill-location-slugs.js`. Live site pehle jaisi chalti rahegi.
2. [ ] Audit me mili missing country/state CMS me theek karo, jab tak count 0 na ho
3. [ ] Main site deploy. Purane URLs naye URLs par 301 hone lagenge.
4. [ ] Slug mapping CSV banao aur review karo, phir `rename-slugs.js --dry-run` aur uske baad asli run
5. [ ] `fix-structured-data.js --dry-run`, phir asli run

### C2. Verification
- [ ] Script se purane sitemaps aur Search Console list ka har URL: 301, ek hop, final 200
- [ ] Teeno types me ye 404 dein: galat country, galat state, galat slug, 4 segments, draft page, bina pages ki listing
- [ ] CMS band karke check: error page aur status 500, 404 nahi
- [ ] Manual check, teeno types ke liye:
  - [ ] Content page
  - [ ] Country aur state listing
  - [ ] Flat country (NZ) ka page
  - [ ] Breadcrumb ke links: SEO → `/best-seo-agency`, Video → `/motion-graphics`, Graphic → `/graphic-designing`
  - [ ] Breadcrumbs dark aur light theme, desktop aur mobile
  - [ ] `/seo-services`, `/video`, `/graphic` ke redirects
  - [ ] Home page ka theme redirect pehle jaisa
- [ ] Google Rich Results Test: BreadcrumbList sahi
- [ ] Naye sitemaps Search Console me submit, aur 2–4 hafte coverage aur 404 report par nazar

### C3. Rollback
- Main site ka purana deploy wapas lagao to bhi `/page/{old-slug}` chalega, kyunki CMS ka public API history se page de deta hai.
- CMS ke migrations additive hain, unhe hatane ki zaroorat nahi.
- `cms_slug_history` table kabhi delete nahi karni, saare redirects isi par tike hain.
