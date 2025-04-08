import { headers } from "next/headers";
import type { Metadata } from "next";

/**
 * Helper function to get canonical URL from middleware
 */
export function getCanonicalUrl(): string {
  const headersList = headers();
  return headersList.get("x-canonical-url") || process.env.NEXT_PUBLIC_DOMAIN || 'https://biztalbox.com';
}

/**
 * Creates metadata with canonical URL
 * @param baseMetadata Your base metadata object
 * @returns Metadata with canonical URL
 */
export function createMetadataWithCanonical(baseMetadata: Metadata): Metadata {
  return {
    ...baseMetadata,
    alternates: {
      ...(baseMetadata.alternates || {}),
      canonical: getCanonicalUrl(),
    }
  };
} 