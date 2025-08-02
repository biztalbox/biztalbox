# Global Schema System Documentation

## Overview

The global schema system provides structured data (Schema.org) for all pages across the website, helping search engines understand your content better and improving SEO performance.

## Architecture

### Core Components

1. **`GlobalSchema`** (`src/components/schema/GlobalSchema.tsx`)
   - Main schema generation component
   - Dynamically creates schemas based on page type
   - Supports all major Schema.org types

2. **`SchemaProvider`** (`src/components/schema/SchemaProvider.tsx`)
   - Convenient wrapper component
   - Simplifies schema integration into pages
   - Handles schema injection automatically

3. **Schema Types** (`src/types/schema-types.ts`)
   - TypeScript definitions for all Schema.org types
   - Ensures type safety and proper structure
   - Includes page-specific schema configurations

4. **Schema Data** (`src/data/schema-data.ts`)
   - Centralized schema data extracted from data.md
   - Service-specific information (FAQs, reviews, ratings)
   - Organization and business information

### Schema Types Supported

- **Organization** - Company information, contact details, social media
- **LocalBusiness** - Business location, hours, service areas
- **Service** - Individual service descriptions and details
- **WebPage** - Page-specific metadata and structure
- **BreadcrumbList** - Navigation breadcrumbs
- **FAQPage** - Frequently asked questions
- **Review & AggregateRating** - Customer reviews and ratings
- **Article** - Blog post structured data

## Usage

### Basic Implementation

```tsx
import SchemaProvider from "@/components/schema/SchemaProvider";
import { createSchemaProps, createFullUrl } from "@/utils/metadata";

export default function YourPage() {
  const schemaProps = createSchemaProps('pageType', '/your-path');

  return (
    <SchemaProvider 
      schemaProps={schemaProps}
      currentUrl={createFullUrl('/your-path')}
      title="Your Page Title"
      description="Your page description"
    >
      {/* Your page content */}
    </SchemaProvider>
  );
}
```

### Page Types

- `'home'` - Homepage with LocalBusiness and Organization schemas
- `'service'` - Service pages with Service, FAQ, and Review schemas
- `'about'` - About page with Organization and WebPage schemas
- `'blog'` - Blog listing page
- `'blogPost'` - Individual blog posts with Article schema
- `'contact'` - Contact page with organization details
- `'faq'` - FAQ pages

### Service Pages

Service pages automatically detect service type from the URL path:

```tsx
// For /best-seo-agency
const schemaProps = createSchemaProps('service', '/best-seo-agency');
// Automatically includes SEO service data, FAQs, reviews, and ratings
```

### Custom Schemas

You can add custom schemas for specific needs:

```tsx
const customSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Your Product",
    // ... other properties
  }
];

const schemaProps = createSchemaProps('service', '/your-path', {
  customSchemas
});
```

## Service Data Structure

Each service includes:

- **Basic Information**: name, URL, description, service type
- **Visual Assets**: service images and logos
- **Performance Data**: aggregate ratings and review counts
- **Customer Reviews**: individual customer testimonials
- **FAQs**: common questions and detailed answers
- **Breadcrumbs**: navigation structure

## SEO Benefits

1. **Rich Snippets** - Enhanced search result appearance
2. **Knowledge Panels** - Improved brand visibility
3. **Local SEO** - Better local search performance
4. **FAQ Integration** - Direct FAQ display in search results
5. **Review Stars** - Star ratings in search results
6. **Breadcrumb Navigation** - Clear site structure for search engines

## Maintenance

### Adding New Services

1. Add service data to `src/data/schema-data.ts`
2. Update `serviceUrlMap` with new URL mapping
3. Create service page with schema integration
4. Test schema markup using Google's Rich Results Test

### Updating Existing Data

- Modify service data in `src/data/schema-data.ts`
- Update organization information as needed
- Ensure all URLs and contact information are current

### Schema Validation

Use these tools to validate your schema markup:

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool)

## Best Practices

1. **Keep Data Current** - Regularly update reviews, ratings, and contact information
2. **Validate Markup** - Always test schema changes with validation tools
3. **Monitor Performance** - Track rich snippet appearance in search results
4. **Consistent Structure** - Maintain consistent schema structure across pages
5. **Unique Content** - Ensure each page has unique, relevant schema data

## Troubleshooting

### Common Issues

1. **Missing Properties** - Check TypeScript types for required fields
2. **Invalid URLs** - Ensure all URLs are absolute and accessible
3. **Date Formats** - Use ISO 8601 format for dates
4. **Duplicate Schemas** - Avoid multiple schemas of the same type on one page

### Debug Mode

Enable schema debugging by checking the browser's network tab for structured data validation errors.

## Future Enhancements

- Product schema for e-commerce functionality
- Event schema for webinars and workshops  
- Job posting schema for career pages
- Video schema for embedded content
- Recipe schema for tutorial content