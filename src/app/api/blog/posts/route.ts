import { NextRequest, NextResponse } from 'next/server';

// WordPress API response interface
interface WordPressPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  slug: string;
  featured_media: number;
  categories: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
    "wp:term"?: Array<
      Array<{
        name: string;
      }>
    >;
  };
}

// WordPress Category interface
interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

// Validation functions
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

// Helper function to decode HTML entities
const decodeHtmlEntities = (text: string): string => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Get and validate parameters
    const page = validatePageNumber(searchParams.get('page') || '1');
    const search = searchParams.get('search');
    const category = searchParams.get('category');
    const perPage = 4; // Posts per page
    
    // Validate search and category parameters
    const validatedSearch = search ? validateSearchQuery(search) : null;
    const validatedCategory = category ? validateCategorySlug(category) : null;
    
    // Build WordPress API URL
    let apiUrl = `https://blog.biztalbox.com/wp-json/wp/v2/posts?_embed&per_page=100`;
    
    // Add category filter if specified
    if (validatedCategory) {
      try {
        const categoryResponse = await fetch(
          `https://blog.biztalbox.com/wp-json/wp/v2/categories?slug=${validatedCategory}`
        );
        if (categoryResponse.ok) {
          const categories: WordPressCategory[] = await categoryResponse.json();
          if (categories.length > 0) {
            apiUrl += `&categories=${categories[0].id}`;
          }
        }
      } catch (error) {
        console.error('Error fetching category:', error);
      }
    }
    
    // Add search query if specified
    if (validatedSearch) {
      apiUrl += `&search=${encodeURIComponent(validatedSearch)}`;
    }
    
    // Fetch posts from WordPress
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }
    
    const posts: WordPressPost[] = await response.json();
    
    // Calculate pagination
    const totalPosts = posts.length;
    const totalPages = Math.ceil(totalPosts / perPage);
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedPosts = posts.slice(startIndex, endIndex);
    
    // Map posts to our format
    const mappedPosts = paginatedPosts.map((post) => {
      const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized";
      const postDate = new Date(post.date);
      const formattedDate = postDate.toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
      const featuredImageUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
      const strippedContent = post.excerpt.rendered
        .replace(/<[^>]*>/g, "")
        .replace(/&nbsp;/g, "")
        .trim();
      const decodedTitle = decodeHtmlEntities(post.title.rendered);
      const decodedContent = decodeHtmlEntities(strippedContent);
      
      return {
        id: post.id,
        slug: post.slug,
        title: decodedTitle,
        date: formattedDate,
        category: category,
        author: "Biztal Box",
        desc: decodedContent,
        img: featuredImageUrl,
        featuredImage: featuredImageUrl,
        blogQuote: false,
        blogQuoteTwo: false,
        video: false,
        imgSlider: false,
        blogHeroSlider: false,
      };
    });
    
    return NextResponse.json({
      success: true,
      data: {
        posts: mappedPosts,
        pagination: {
          currentPage: page,
          totalPages,
          totalPosts,
          hasNextPage: page < totalPages,
          hasPrevPage: page > 1,
        },
        filters: {
          search: validatedSearch,
          category: validatedCategory,
        },
      },
    });
    
  } catch (error) {
    console.error('Blog API error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch blog posts',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
