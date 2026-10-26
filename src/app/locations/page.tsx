import type { Metadata } from "next";
import LocationsDirectory, {
  type LocationServiceSection,
} from "@/components/location-pages/LocationsDirectory";
import { fetchCountries } from "@/lib/location-pages/cms";
import { absoluteUrl, type LocationPageType } from "@/lib/location-pages/config";

export const dynamic = "force-dynamic";

const SERVICE_ORDER: LocationPageType[] = ["seo", "video", "graphic"];

const TITLE = "Service Locations | biztalbox";
const DESCRIPTION =
  "Browse every country where biztalbox offers SEO, video editing, and graphic design services. Find your location and see how we help local businesses grow.";
const CANONICAL = absoluteUrl("/locations");

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: "biztalbox",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

function sortByName<T extends { name: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.name.localeCompare(b.name, "en"));
}

export default async function LocationsPage() {
  const results = await Promise.all(
    SERVICE_ORDER.map(async (type) => {
      const countries = (await fetchCountries(type)) ?? [];
      return {
        type,
        countries: sortByName(countries.filter((c) => c.page_count > 0)),
      } satisfies LocationServiceSection;
    }),
  );

  return <LocationsDirectory sections={results.filter((s) => s.countries.length > 0)} />;
}
