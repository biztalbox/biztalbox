import {
  HOME_PAGE_SCHEMAS,
} from "@/data/homepage-schema";

export default function HomePageSchema() {
  return (
    <>
      {HOME_PAGE_SCHEMAS.map((schema, index) => (
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          key={`home-schema-${index}`}
          type="application/ld+json"
          suppressHydrationWarning
        />
      ))}
    </>
  );
}
