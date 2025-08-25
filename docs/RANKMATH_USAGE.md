# RankMath API Integration Guide

This guide explains how to use the RankMath API integration utility to fetch and format SEO metadata from your WordPress site.

## Overview

The RankMath integration consists of:
- `src/utils/rankmath.ts` - Core utility functions
- `src/components/rankmath/RankMathDataDisplay.tsx` - React component for displaying data
- `src/hooks/use-rankmath.ts` - Custom hook for client-side usage

## Basic Usage

### 1. Server-Side Usage (Recommended for Metadata)

Use in `generateMetadata` function for Next.js pages:

```typescript
import { fetchRankMathData, createMetadataFromRankMath } from '@/utils/rankmath';
import { createMetadata } from '@/utils/metadata';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    // Fetch RankMath data
    const rankMathData = await fetchRankMathData(params.slug);
    
    // Create metadata from RankMath data
    const baseMetadata = rankMathData.title || rankMathData.description 
      ? createMetadataFromRankMath(rankMathData, 'Fallback Title', 'Fallback Description')
      : {
          title: 'Fallback Title',
          description: 'Fallback Description',
        };
    
    return createMetadata(baseMetadata, `/your-path/${params.slug}`);
  } catch (error) {
    console.error('Error generating metadata:', error);
    return createMetadata({
      title: 'Fallback Title',
      description: 'Fallback Description',
    }, `/your-path/${params.slug}`);
  }
}
```

### 2. Client-Side Usage

Use the custom hook in React components:

```typescript
'use client';

import { useRankMath } from '@/hooks/use-rankmath';
import RankMathDataDisplay from '@/components/rankmath/RankMathDataDisplay';

export default function MyComponent({ slug }: { slug: string }) {
  const { data, loading, error } = useRankMath(slug);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>My Page</h1>
      <RankMathDataDisplay data={data} showSchema={true} />
    </div>
  );
}
```

## API Reference

### `fetchRankMathData(postSlug, baseUrl?)`

Fetches RankMath data for a given post slug.

**Parameters:**
- `postSlug` (string): The slug of the post/page
- `baseUrl` (string, optional): The base URL of the WordPress site (defaults to 'https://blog.biztalbox.com')

**Returns:** Promise<FormattedRankMathData>

**Example:**
```typescript
const data = await fetchRankMathData('my-blog-post');
console.log(data.title); // "My Blog Post Title"
console.log(data.description); // "My blog post description"
```

### `formatRankMathData(headHtml)`

Formats raw HTML head data from RankMath API into structured data.

**Parameters:**
- `headHtml` (string): The raw HTML head string from RankMath API

**Returns:** FormattedRankMathData

### `createMetadataFromRankMath(rankMathData, fallbackTitle?, fallbackDescription?)`

Creates a Next.js metadata object from RankMath data.

**Parameters:**
- `rankMathData` (FormattedRankMathData): Formatted RankMath data
- `fallbackTitle` (string, optional): Fallback title if not found in RankMath data
- `fallbackDescription` (string, optional): Fallback description if not found in RankMath data

**Returns:** Metadata object for Next.js

## Data Structure

The `FormattedRankMathData` interface includes:

```typescript
interface FormattedRankMathData {
  title?: string;
  description?: string;
  robots?: string;
  ogLocale?: string;
  ogType?: string;
  ogSiteName?: string;
  twitterCard?: string;
  schema?: any;
  canonical?: string;
  keywords?: string;
  author?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}
```

## Usage Examples

### Blog Post Page

```typescript
// src/app/(blog)/blog/[slug]/page.tsx
import { fetchRankMathData, createMetadataFromRankMath } from '@/utils/rankmath';
import { createMetadata } from '@/utils/metadata';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  try {
    const [blog, rankMathData] = await Promise.all([
      getBlogPostBySlug(params.slug),
      fetchRankMathData(params.slug)
    ]);
    
    if (!blog) {
      return createMetadata({
        title: 'Blog post not found - Biztal Box',
        description: 'The requested blog post could not be found.',
      }, '/blog/not-found');
    }
    
    const baseMetadata = rankMathData.title || rankMathData.description 
      ? createMetadataFromRankMath(rankMathData, blog.title?.rendered || 'Blog Post - Biztal Box')
      : {
          title: blog.title?.rendered || 'Blog Post - Biztal Box',
          description: blog.excerpt?.rendered || 'Blog post description',
        };
    
    return createMetadata(baseMetadata, `/blog/${params.slug}`);
  } catch (error) {
    return createMetadata({
      title: 'Blog Post - Biztal Box',
      description: 'Blog post description',
    }, `/blog/${params.slug}`);
  }
}
```

### Category Page

```typescript
// src/app/(blog)/blog/category/[category]/page.tsx
import { fetchRankMathData, createMetadataFromRankMath } from '@/utils/rankmath';
import { createMetadata } from '@/utils/metadata';

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  try {
    const rankMathData = await fetchRankMathData(`category/${params.category}`);
    
    const baseMetadata = rankMathData.title || rankMathData.description 
      ? createMetadataFromRankMath(rankMathData, `${params.category} - Blog Category`)
      : {
          title: `${params.category} - Blog Category`,
          description: `Browse all blog posts in the ${params.category} category.`,
        };
    
    return createMetadata(baseMetadata, `/blog/category/${params.category}`);
  } catch (error) {
    return createMetadata({
      title: `${params.category} - Blog Category`,
      description: `Browse all blog posts in the ${params.category} category.`,
    }, `/blog/category/${params.category}`);
  }
}
```

### Service Page

```typescript
// src/app/(service)/services/[service]/page.tsx
import { fetchRankMathData, createMetadataFromRankMath } from '@/utils/rankmath';
import { createMetadata } from '@/utils/metadata';

export async function generateMetadata({ params }: { params: { service: string } }): Promise<Metadata> {
  try {
    const rankMathData = await fetchRankMathData(`services/${params.service}`);
    
    const baseMetadata = rankMathData.title || rankMathData.description 
      ? createMetadataFromRankMath(rankMathData, `${params.service} Service`)
      : {
          title: `${params.service} Service - Biztal Box`,
          description: `Professional ${params.service} services to help your business grow.`,
        };
    
    return createMetadata(baseMetadata, `/services/${params.service}`);
  } catch (error) {
    return createMetadata({
      title: `${params.service} Service - Biztal Box`,
      description: `Professional ${params.service} services to help your business grow.`,
    }, `/services/${params.service}`);
  }
}
```

### Custom Base URL

```typescript
// For different WordPress sites
const rankMathData = await fetchRankMathData('my-post', 'https://myothersite.com');
```

## Error Handling

The utility includes comprehensive error handling:

- Network errors are logged and return empty data
- Invalid JSON responses are handled gracefully
- Timeout protection (30 seconds)
- Retry logic for transient failures
- Fallback to default metadata on errors

## Performance Considerations

- Data is cached for 1 hour using Next.js revalidation
- Parallel fetching with other API calls when possible
- Server-side rendering for optimal SEO
- Minimal client-side JavaScript for better performance

## URL Updates

The utility automatically updates URLs in the schema data to use the new domain `biztalbox.com`. This includes:
- Replacing `worldwidegraphics.in` URLs
- Replacing `blog.biztalbox.com` URLs
- Updating `url`, `@id`, and `contentUrl` fields in JSON-LD schema

## Debugging

Use the `RankMathDataDisplay` component to debug fetched data:

```typescript
import RankMathDataDisplay from '@/components/rankmath/RankMathDataDisplay';

// In development
{process.env.NODE_ENV === 'development' && (
  <RankMathDataDisplay data={rankMathData} showSchema={true} />
)}
```

## Best Practices

1. **Always provide fallbacks**: Use fallback titles and descriptions in case RankMath data is unavailable
2. **Handle errors gracefully**: Don't let RankMath API failures break your page
3. **Use server-side rendering**: Fetch data in `generateMetadata` for better SEO
4. **Cache appropriately**: The utility includes caching, but consider your specific needs
5. **Monitor performance**: Check API response times and adjust caching as needed
