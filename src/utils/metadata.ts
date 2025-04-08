import { headers } from "next/headers";
import type { Metadata } from "next";

/**
 * Helper function to get canonical URL from middleware
 * This should only be called in Server Components during the request phase
 */
export function getCanonicalUrl(): string {
  try {
    const headersList = headers();
    return headersList.get("x-canonical-url") || process.env.NEXT_PUBLIC_DOMAIN || 'https://biztalbox.com';
  } catch (e) {
    // Fallback to domain if headers() fails (during build time)
    return process.env.NEXT_PUBLIC_DOMAIN || 'https://biztalbox.com';
  }
}

/**
 * Creates metadata with canonical URL
 * @param baseMetadata Your base metadata object
 * @param params Optional dynamic route params
 * @returns Metadata object with canonical URL
 */
export function createMetadata(
  baseMetadata: Metadata,
  path?: string
): Metadata {
  const domain = process.env.NEXT_PUBLIC_DOMAIN || 'https://biztalbox.com';
  const pathSegment = path || '';
  const canonicalPath = pathSegment === '/' ? pathSegment : pathSegment.replace(/\/$/, '');
  
  return {
    ...baseMetadata,
    alternates: {
      ...(baseMetadata.alternates || {}),
      canonical: `${domain}${canonicalPath}`,
    }
  };
} 