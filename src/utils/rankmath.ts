
export interface RankMathResponse {
  success: boolean;
  head: string;
}

export interface FormattedRankMathData {
  title?: string;
  description?: string;
  robots?: string;
  ogLocale?: string;
  ogType?: string;
  ogSiteName?: string;
  twitterCard?: string;
  schema?: any;
  originalSchemaScript?: string;
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

/**
 * Fetches RankMath data for a given post slug and formats it
 * @param postSlug - The slug of the post/page
 * @param baseUrl - The base URL of the WordPress site (defaults to blog.biztalbox.com)
 * @returns Promise<FormattedRankMathData> - Formatted RankMath data
 */
export async function fetchRankMathData(
  postSlug: string, 
  baseUrl: string = 'https://blog.biztalbox.com'
): Promise<FormattedRankMathData> {
  try {
    const apiUrl = `${baseUrl}/wp-json/rankmath/v1/getHead?url=${baseUrl}/${postSlug}`;
    

    
    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'BiztalBox-Website/1.0'
      },
      signal: AbortSignal.timeout(30000) // 30 second timeout
    });

    if (!response.ok) {
      console.error(`RankMath API request failed with status ${response.status}: ${response.statusText}`);
      return {};
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.error(`Expected JSON but got: ${contentType}`);
      return {};
    }

    const data: RankMathResponse = await response.json();
    
    if (!data.success || !data.head) {
      console.warn('RankMath API returned unsuccessful response or empty head data');
      return {};
    }

    return formatRankMathData(data.head);
  } catch (error) {
    console.error('Error fetching RankMath data:', error);
    return {};
  }
}

/**
 * Formats the raw HTML head data from RankMath API into structured data
 * @param headHtml - The raw HTML head string from RankMath API
 * @returns FormattedRankMathData - Structured data object
 */
export function formatRankMathData(headHtml: string): FormattedRankMathData {
  const formattedData: FormattedRankMathData = {};

  try {
    // Decode HTML entities
    const decodedHtml = decodeHtmlEntities(headHtml);
    
    // Extract title
    const titleMatch = decodedHtml.match(/<title[^>]*>([^<]+)<\/title>/i);
    if (titleMatch) {
      formattedData.title = titleMatch[1].trim();
    }

    // Extract meta tags
    const metaTags = decodedHtml.match(/<meta[^>]+>/gi) || [];
    
    metaTags.forEach(tag => {
      const nameMatch = tag.match(/name=["']([^"']+)["']/i);
      const propertyMatch = tag.match(/property=["']([^"']+)["']/i);
      const contentMatch = tag.match(/content=["']([^"']+)["']/i);
      
      const name = nameMatch?.[1] || propertyMatch?.[1];
      const content = contentMatch?.[1];
      
      if (name && content) {
        switch (name.toLowerCase()) {
          case 'description':
            formattedData.description = content;
            break;
          case 'robots':
            formattedData.robots = content;
            break;
          case 'keywords':
            formattedData.keywords = content;
            break;
          case 'author':
            formattedData.author = content;
            break;
          case 'og:locale':
            formattedData.ogLocale = content;
            break;
          case 'og:type':
            formattedData.ogType = content;
            break;
          case 'og:site_name':
            formattedData.ogSiteName = content;
            break;
          case 'og:title':
            formattedData.ogTitle = content;
            break;
          case 'og:description':
            formattedData.ogDescription = content;
            break;
          case 'og:image':
            formattedData.ogImage = content;
            break;
          case 'twitter:card':
            formattedData.twitterCard = content;
            break;
          case 'twitter:title':
            formattedData.twitterTitle = content;
            break;
          case 'twitter:description':
            formattedData.twitterDescription = content;
            break;
          case 'twitter:image':
            formattedData.twitterImage = content;
            break;
        }
      }
    });

    // Extract canonical URL
    const canonicalMatch = decodedHtml.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
    if (canonicalMatch) {
      formattedData.canonical = canonicalMatch[1];
    }

    // Extract JSON-LD schema - improved regex to handle multiline content
    const schemaMatch = decodedHtml.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i);
    
    if (schemaMatch) {
      try {
        const schemaContent = schemaMatch[1].trim();
        const schemaData = JSON.parse(schemaContent);
        
        // Update URLs in schema to use new domain
        formattedData.schema = updateSchemaUrls(schemaData);
        
        // Also store the original script tag for direct use
        const originalScriptTag = decodedHtml.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/i);
        if (originalScriptTag) {
          formattedData.originalSchemaScript = originalScriptTag[0];
        }
        
      } catch (parseError) {
        console.warn('Failed to parse JSON-LD schema:', parseError);
      }
    }

  } catch (error) {
    console.error('Error formatting RankMath data:', error);
  }

  return formattedData;
}

/**
 * Updates URLs in schema data to use the new domain
 * @param schemaData - The schema data object
 * @returns Updated schema data with new URLs
 */
export function updateSchemaUrls(schemaData: any): any {
  if (!schemaData) return schemaData;
  
  const newDomain = 'https://biztalbox.com';
  
  // Function to recursively update URLs in an object
  const updateUrls = (obj: any): any => {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
    
    if (Array.isArray(obj)) {
      return obj.map(updateUrls);
    }
    
    const updated: any = {};
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'string' && (key === 'url' || key === '@id' || key === 'contentUrl')) {
        // Update URLs to use new domain
        if (value.includes('worldwidegraphics.in') || value.includes('blog.biztalbox.com')) {
          updated[key] = value.replace(/https?:\/\/(www\.)?(worldwidegraphics\.in|blog\.biztalbox\.com)/g, newDomain);
        } else {
          updated[key] = value;
        }
      } else {
        updated[key] = updateUrls(value);
      }
    }
    return updated;
  };
  
  return updateUrls(schemaData);
}

/**
 * Creates a default Article schema for blog posts
 * @param title - Article title
 * @param description - Article description
 * @param url - Article URL
 * @param image - Article image URL
 * @param author - Article author
 * @param datePublished - Publication date
 * @returns Article schema object
 */
export function createDefaultArticleSchema(
  title: string,
  description: string,
  url: string,
  image?: string,
  author: string = 'Biztal Box',
  datePublished?: string
): any {
  return {
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    image: image || 'https://biztalbox.com/logo.png',
    author: {
      '@type': 'Organization',
      name: author,
      url: 'https://biztalbox.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Biztal Box',
      logo: {
        '@type': 'ImageObject',
        url: 'https://biztalbox.com/logo.png'
      }
    },
    datePublished: datePublished || new Date().toISOString(),
    dateModified: new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  };
}

/**
 * Updates URLs within a script tag string
 * @param scriptTag - The original script tag string
 * @returns Updated script tag with new URLs
 */
export function updateUrlsInScriptTag(scriptTag: string): string {
  if (!scriptTag) return scriptTag;
  
  const newDomain = 'https://biztalbox.com';
  
  // Replace URLs in the script tag content
  return scriptTag.replace(
    /https?:\/\/(www\.)?(worldwidegraphics\.in|blog\.biztalbox\.com)/g, 
    newDomain
  );
}

/**
 * Decodes HTML entities in a string
 * @param html - HTML string with entities
 * @returns Decoded HTML string
 */
function decodeHtmlEntities(html: string): string {
  // Server-side safe HTML entity decoding
  return html
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, '/')
    .replace(/&#x60;/g, '`')
    .replace(/&#x3D;/g, '=');
}

/**
 * Creates metadata object from RankMath data
 * @param rankMathData - Formatted RankMath data
 * @param fallbackTitle - Fallback title if not found in RankMath data
 * @param fallbackDescription - Fallback description if not found in RankMath data
 * @returns Metadata object for Next.js
 */
export function createMetadataFromRankMath(
  rankMathData: FormattedRankMathData,
  fallbackTitle: string = 'Biztal Box',
  fallbackDescription: string = 'Your digital marketing partner'
): any {
  const metadata: any = {
    title: rankMathData.title || fallbackTitle,
    description: rankMathData.description || fallbackDescription,
  };

  // Add Open Graph metadata
  if (rankMathData.ogTitle || rankMathData.ogDescription || rankMathData.ogImage) {
    metadata.openGraph = {
      title: rankMathData.ogTitle || rankMathData.title,
      description: rankMathData.ogDescription || rankMathData.description,
      images: rankMathData.ogImage ? [{ url: rankMathData.ogImage }] : undefined,
      type: rankMathData.ogType || 'website',
      locale: rankMathData.ogLocale || 'en_US',
      siteName: rankMathData.ogSiteName || 'Biztalbox',
    };
  }

  // Add Twitter metadata
  if (rankMathData.twitterCard || rankMathData.twitterTitle || rankMathData.twitterDescription) {
    metadata.twitter = {
      card: rankMathData.twitterCard || 'summary_large_image',
      title: rankMathData.twitterTitle || rankMathData.title,
      description: rankMathData.twitterDescription || rankMathData.description,
      images: rankMathData.twitterImage ? [rankMathData.twitterImage] : undefined,
    };
  }

  // Add keywords
  if (rankMathData.keywords) {
    metadata.keywords = rankMathData.keywords;
  }

 
  metadata.authors = 'Biztalbox';

  // Add publisher meta tags
  metadata.other = {
    'publisher': 'Biztalbox',
    'article:publisher': 'https://www.facebook.com/biztalbox',
    'article:author': 'Biztalbox',
  };
  return metadata;
}
