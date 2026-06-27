import { CONTACT_PAGE_SCHEMA } from "@/data/contact-schema";

export default function ContactPageSchema() {
  return (
    <script
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(CONTACT_PAGE_SCHEMA) }}
      type="application/ld+json"
      suppressHydrationWarning
    />
  );
}
