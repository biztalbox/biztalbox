# Adding Canonical URLs to Your Next.js Project

This document explains how the canonical URL implementation works in your project and how to apply it to all pages.

## How It Works

1. A middleware (`src/middleware.ts`) adds a canonical URL to all requests
2. The utility function (`src/utils/metadata.ts`) extracts this URL and adds it to the metadata
3. Each page layout needs to be updated to use this utility

## How to Update Layout Files

For each layout file in your project, update it using this pattern:

```tsx
import { Metadata } from "next/types";
import YourPageComponent from "./page";
import { createMetadataWithCanonical } from "@/utils/metadata";

const baseMetadata: Metadata = {
  title: "Your Page Title",
  description: "Your page description"
  // Add other metadata properties as needed
};

export const metadata = createMetadataWithCanonical(baseMetadata);

export default function YourLayout() {
  return <YourPageComponent />;
}
```

## Important Notes

1. Make sure to set your domain in `.env.local`:
   ```
   NEXT_PUBLIC_DOMAIN=https://yourwebsite.com
   ```

2. The canonical URL will be:
   - Your domain + current path
   - Trailing slashes are removed (except for homepage)
   - Query parameters are not included

## Files to Update

Update all layout files in your project:

- `src/app/layout.tsx` (root layout) - ✅ Done
- `src/app/(service)/best-seo-agency/layout.tsx` - ✅ Done
- Other service layouts
- All blog layouts
- Contact layouts
- About layouts
- Etc.

This consistent approach ensures proper SEO canonical tag handling for all pages. 