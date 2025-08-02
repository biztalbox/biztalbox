import { headers } from "next/headers";
import type { Metadata } from "next";
import { SchemaProps } from '@/types/schema-types';
import { serviceUrlMap, ServiceUrlKey } from '@/data/schema-data';

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
 * @param path Optional dynamic route params
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

/**
 * Creates schema props for a given page type
 * @param pageType The type of page (home, service, about, etc.)
 * @param path The page path for service type detection
 * @param customProps Optional custom schema properties
 * @returns SchemaProps object for use with GlobalSchema component
 */
export function createSchemaProps(
  pageType: SchemaProps['pageType'],
  path?: string,
  customProps?: Partial<SchemaProps>
): SchemaProps {
  const baseProps: SchemaProps = {
    pageType,
    ...customProps
  };

  // Auto-detect service type from path
  if (pageType === 'service' && path) {
    const cleanPath = path.replace(/^\//, '').replace(/\/$/, '');
    if (cleanPath in serviceUrlMap) {
      baseProps.serviceType = cleanPath;
    }
  }

  return baseProps;
}

/**
 * Helper to create full URL from path
 */
export function createFullUrl(path: string): string {
  const domain = process.env.NEXT_PUBLIC_DOMAIN || 'https://biztalbox.com';
  const cleanPath = path === '/' ? '' : path.replace(/\/$/, '');
  return `${domain}${cleanPath}`;
} 