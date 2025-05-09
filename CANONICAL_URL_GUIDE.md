# Guide to Adding Canonical URLs to Pages

This guide explains how to properly implement canonical URLs for all pages in the Next.js application using our existing utility function.

## Why Canonical URLs are Important

Canonical URLs help:
- Prevent duplicate content issues for SEO
- Specify the preferred version of a page when multiple URLs exist
- Consolidate link signals for similar or duplicate pages
- Improve crawling efficiency by search engines

## Implementation Steps

### 1. Import the createMetadata Function

At the top of your page or layout file:

```typescript
import { createMetadata } from "@/utils/metadata";
```

### 2. Convert Your Metadata Object

Change this:
```typescript
export const metadata: Metadata = {
  title: "Your Page Title",
  description: "Your page description"
};
```

To this:
```typescript
const baseMetadata: Metadata = {
  title: "Your Page Title",
  description: "Your page description"
};

export const metadata = createMetadata(baseMetadata, '/your-page-path');
```

### 3. Use the Correct Path

The second parameter to `createMetadata` should be the page's URL path:
- For homepage: `/`
- For other pages: `/about`, `/services`, etc.
- For nested pages: `/blog/post-slug`

## Examples

### Homepage:
```typescript
const baseMetadata: Metadata = {
  title: "Home | Your Site Name",
  description: "Your homepage description"
};

export const metadata = createMetadata(baseMetadata, '/');
```

### Service Page:
```typescript
const baseMetadata: Metadata = {
  title: "Service Name | Your Site Name",
  description: "Description of this service"
};

export const metadata = createMetadata(baseMetadata, '/services/service-name');
```

### Dynamic Blog Posts:
For dynamic routes, you can use the path with parameters:

```typescript
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const blog = await getBlogPostBySlug(params.slug);
  
  if (!blog) {
    return createMetadata({
      title: 'Blog post not found',
      description: 'The requested blog post could not be found',
    }, '/blog/not-found');
  }
  
  const baseMetadata = {
    title: blog.title.rendered,
    description: blog.excerpt.rendered.replace(/<[^>]*>/g, '').slice(0, 160),
  };
  
  return createMetadata(baseMetadata, `/blog/${params.slug}`);
}
```

## Implementation for Service Pages

For service pages, use this pattern in your layout.tsx file:

```typescript
import { Metadata } from "next/types";
import ServiceNamePage from "./page";
import { createMetadata } from "@/utils/metadata";

const baseMetadata: Metadata = {
  title: "Service Name | Biztal Box",
  description: "Your service description"
};

export const metadata = createMetadata(baseMetadata, '/service-slug');

export default function ServiceNameLayout() {
  return <ServiceNamePage />;
}
```

## Finding Pages That Need Canonical URLs

We've created a utility script to help identify pages that need canonical URLs:

```bash
node scripts/add-canonical-urls.js
```

This script will scan all pages and layouts in the project and indicate which ones already have canonical URLs and which ones need them.

## Testing Canonical URLs

To verify your canonical URLs are working correctly:
1. View the page source in your browser
2. Look for the `<link rel="canonical" href="...">` tag in the `<head>` section
3. Confirm the URL is correct and includes the domain (e.g., `https://yourdomain.com/page-path`)

## Troubleshooting

If the canonical URL is not appearing:
- Make sure the `createMetadata` function is properly imported
- Check that the path parameter is correctly formatted (should start with a slash)
- Verify the NEXT_PUBLIC_DOMAIN environment variable is set correctly 