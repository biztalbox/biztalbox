import { ABOUT_PAGE_SCHEMA } from "@/data/about-schema";

export default function AboutPageSchema() {
  return (
    <script
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ABOUT_PAGE_SCHEMA) }}
      type="application/ld+json"
      suppressHydrationWarning
    />
  );
}
