// Blog utility functions for URL parameter handling and validation

export interface BlogSearchParams {
  page?: string;
  category?: string;
  search?: string;
}

// Validation functions
export const validatePageNumber = (page: string): number => {
  const pageNum = parseInt(page, 10);
  if (isNaN(pageNum) || pageNum < 1) {
    return 1;
  }
  return pageNum;
};

export const validateSearchQuery = (search: string): string => {
  // Remove potentially dangerous characters and limit length
  return search.replace(/[<>]/g, '').substring(0, 100).trim();
};

export const validateCategorySlug = (category: string): string => {
  // Only allow alphanumeric characters, hyphens, and underscores
  return category.replace(/[^a-zA-Z0-9-_]/g, '').substring(0, 50);
};

// Build URL with search parameters
export const buildBlogUrl = (
  pathname: string,
  params: {
    page?: number;
    category?: string;
    search?: string;
  }
): string => {
  const urlParams = new URLSearchParams();
  
  if (params.page && params.page > 1) {
    urlParams.set("page", params.page.toString());
  }
  
  if (params.category) {
    urlParams.set("category", params.category);
  }
  
  if (params.search) {
    urlParams.set("search", params.search);
  }
  
  return urlParams.toString() ? `${pathname}?${urlParams.toString()}` : pathname;
};

// Parse and validate search parameters
export const parseAndValidateSearchParams = (
  searchParams: URLSearchParams | null,
  fallbackParams?: BlogSearchParams
): {
  page: number;
  category: string | null;
  search: string | null;
} => {
  const page = validatePageNumber(
    searchParams?.get("page") || fallbackParams?.page || "1"
  );
  
  const category = searchParams?.get("category") || fallbackParams?.category;
  const validatedCategory = category ? validateCategorySlug(category) : null;
  
  const search = searchParams?.get("search") || fallbackParams?.search;
  const validatedSearch = search ? validateSearchQuery(search) : null;
  
  return {
    page,
    category: validatedCategory,
    search: validatedSearch,
  };
};

// Error handling for API responses
export const handleApiError = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  
  if (typeof error === 'string') {
    return error;
  }
  
  return "An unexpected error occurred. Please try again later.";
};

// Debounce function for search inputs
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
