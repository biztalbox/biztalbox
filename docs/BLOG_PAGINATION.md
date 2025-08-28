# Blog Pagination Implementation

This document describes the implementation of URL-based blog pagination with search parameters and API integration.

## Features

- **URL-based pagination**: Page numbers are reflected in the URL (e.g., `/blog?page=2`)
- **Search functionality**: Search queries are preserved in URLs (e.g., `/blog?search=marketing&page=2`)
- **Category filtering**: Category filters work with pagination (e.g., `/blog?category=seo&page=1`)
- **Parameter validation**: All URL parameters are validated and sanitized
- **Error handling**: Comprehensive error handling for API failures
- **SEO-friendly**: Dynamic metadata generation based on search parameters

## URL Structure

### Basic Pagination
```
/blog                    # Page 1 (default)
/blog?page=2            # Page 2
/blog?page=3            # Page 3
```

### Search with Pagination
```
/blog?search=marketing              # Search for "marketing" on page 1
/blog?search=marketing&page=2       # Search for "marketing" on page 2
```

### Category with Pagination
```
/blog?category=seo                  # SEO category on page 1
/blog?category=seo&page=2           # SEO category on page 2
```

### Combined Filters
```
/blog?category=seo&search=google&page=2  # SEO category, search "google", page 2
```

## Implementation Details

### 1. URL Parameter Handling

The system uses Next.js search parameters and validates all inputs:

```typescript
// Validation functions in src/utils/blog-utils.ts
const validatePageNumber = (page: string): number => {
  const pageNum = parseInt(page, 10);
  if (isNaN(pageNum) || pageNum < 1) {
    return 1;
  }
  return pageNum;
};

const validateSearchQuery = (search: string): string => {
  return search.replace(/[<>]/g, '').substring(0, 100).trim();
};

const validateCategorySlug = (category: string): string => {
  return category.replace(/[^a-zA-Z0-9-_]/g, '').substring(0, 50);
};
```

### 2. Pagination Hook

The `usePagination` hook has been updated to support URL-based pagination:

```typescript
// src/hooks/use-pagination.ts
function usePagination<T>(
  items: T[], 
  itemsPerPage: number, 
  initialPage?: number
): PaginationResult<T>
```

### 3. API Integration

The system fetches data from WordPress API with proper error handling:

- **Direct API calls**: Fetches from `https://blog.biztalbox.com/wp-json/wp/v2/posts`
- **Category filtering**: Resolves category slugs to IDs
- **Search functionality**: Uses WordPress search API
- **Fallback handling**: Falls back to static data if API fails

### 4. Error Handling

Comprehensive error handling includes:

- **API failures**: Graceful fallback to static data
- **Invalid parameters**: Automatic validation and correction
- **Network issues**: User-friendly error messages
- **Loading states**: Skeleton loading components

## Components

### BlogClassicArea
Main component handling:
- URL parameter parsing
- API data fetching
- Pagination state management
- Error handling

### BlogSidebar
Sidebar component with:
- Search functionality
- Category navigation
- Newsletter subscription

### PaginationCom
Pagination component with:
- Page number display
- Next/Previous buttons
- Current page highlighting

## API Routes

### `/api/blog/posts`
Handles blog post fetching with:
- Pagination support
- Search functionality
- Category filtering
- Parameter validation

## Usage Examples

### Basic Pagination
```typescript
// Navigate to page 2
router.push('/blog?page=2');
```

### Search with Pagination
```typescript
// Search and navigate to page 2
router.push('/blog?search=marketing&page=2');
```

### Category with Pagination
```typescript
// Navigate to SEO category page 2
router.push('/blog?category=seo&page=2');
```

## SEO Considerations

- **Dynamic metadata**: Page titles and descriptions update based on search parameters
- **Canonical URLs**: Proper canonical URL handling
- **Structured data**: Schema markup for blog posts
- **URL structure**: Clean, readable URLs for better SEO

## Security Features

- **Input validation**: All parameters are validated and sanitized
- **XSS prevention**: HTML entities are properly decoded
- **Parameter limits**: Search queries and category slugs have length limits
- **Character filtering**: Dangerous characters are removed from inputs

## Performance Optimizations

- **Client-side pagination**: Uses React state for smooth transitions
- **Skeleton loading**: Loading states for better UX
- **Error boundaries**: Graceful error handling
- **Debounced search**: Search input debouncing (if implemented)

## Testing

To test the pagination system:

1. Navigate to `/blog`
2. Try different page numbers: `/blog?page=2`, `/blog?page=3`
3. Test search: `/blog?search=marketing`
4. Test categories: `/blog?category=seo`
5. Test combinations: `/blog?category=seo&search=google&page=2`
6. Test invalid parameters: `/blog?page=invalid` (should default to page 1)

## Future Enhancements

- **Server-side pagination**: Implement true server-side pagination for large datasets
- **Caching**: Add Redis caching for API responses
- **Advanced search**: Implement full-text search with filters
- **URL history**: Add browser history management
- **Analytics**: Track pagination usage and search patterns
