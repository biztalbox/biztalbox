import Script from 'next/script';

interface RankMathSchemaProps {
  schemaData: any;
}

/**
 * RankMathSchema - Renders RankMath schema data as JSON-LD script tag
 * This component ensures the schema is properly rendered in the HTML head
 */
export default function RankMathSchema({ schemaData }: RankMathSchemaProps) {
  if (!schemaData) {
    return null;
  }

  return (
    <Script
      id="rankmath-schema"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData, null, 2)
      }}
    />
  );
}
