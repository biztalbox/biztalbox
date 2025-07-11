export interface WordPressPost {
  yoast_head_json?: any;
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  categories: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

export interface WordPressComment {
  id?: number;
  author_name: string;
  author_email: string;
  author_url: string;
  content: string;
  post: number | string;
}

export async function getBlogPostBySlug(slug: string, retryCount = 0): Promise<WordPressPost | null> {
  const maxRetries = 3;
  const retryDelay = Math.pow(2, retryCount) * 1000; // Exponential backoff: 1s, 2s, 4s
  
  try {
    const apiUrl = `https://blog.biztalbox.com/wp-json/wp/v2/posts?slug=${slug}&_embed`;
    console.log(`Fetching blog post (attempt ${retryCount + 1}): ${apiUrl}`);
    
    const response = await fetch(apiUrl, { 
      next: { revalidate: 3600 }, // Cache for 1 hour
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'BiztalBox-Website/1.0'
      },
      // Add timeout to prevent hanging requests
      signal: AbortSignal.timeout(30000) // 30 second timeout
    });
    
    console.log(`Response status: ${response.status}, Content-Type: ${response.headers.get('content-type')}`);
    
    // Handle rate limiting
    if (response.status === 429) {
      console.warn('Rate limited, will retry...');
      if (retryCount < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, retryDelay));
        return getBlogPostBySlug(slug, retryCount + 1);
      }
      return null;
    }
    
    if (!response.ok) {
      console.error(`API request failed with status ${response.status}: ${response.statusText}`);
      
      // Try to get error details
      const errorText = await response.text();
      console.error(`Error response body: ${errorText.substring(0, 500)}`);
      
      // Retry on server errors (5xx) but not client errors (4xx)
      if (response.status >= 500 && retryCount < maxRetries) {
        console.log(`Server error, retrying in ${retryDelay}ms...`);
        await new Promise(resolve => setTimeout(resolve, retryDelay));
        return getBlogPostBySlug(slug, retryCount + 1);
      }
      
      return null;
    }

    // Check if response is actually JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.error(`Expected JSON but got: ${contentType}`);
      const responseText = await response.text();
      console.error(`Non-JSON response body: ${responseText.substring(0, 500)}`);
      
      // Retry if we got HTML (might be a temporary error page)
      if (responseText.includes('<!DOCTYPE') && retryCount < maxRetries) {
        console.log(`Got HTML response, retrying in ${retryDelay}ms...`);
        await new Promise(resolve => setTimeout(resolve, retryDelay));
        return getBlogPostBySlug(slug, retryCount + 1);
      }
      
      return null;
    }

    // Get the response text first to validate it's proper JSON
    const responseText = await response.text();
    
    if (!responseText.trim()) {
      console.error('Empty response body');
      
      // Retry on empty response
      if (retryCount < maxRetries) {
        console.log(`Empty response, retrying in ${retryDelay}ms...`);
        await new Promise(resolve => setTimeout(resolve, retryDelay));
        return getBlogPostBySlug(slug, retryCount + 1);
      }
      
      return null;
    }

    // Check if it starts with HTML (common error pattern)
    if (responseText.trim().startsWith('<!DOCTYPE') || responseText.trim().startsWith('<html')) {
      console.error('Received HTML instead of JSON');
      console.error(`HTML response: ${responseText.substring(0, 500)}`);
      
      // Retry if we got HTML
      if (retryCount < maxRetries) {
        console.log(`HTML response, retrying in ${retryDelay}ms...`);
        await new Promise(resolve => setTimeout(resolve, retryDelay));
        return getBlogPostBySlug(slug, retryCount + 1);
      }
      
      return null;
    }

    let posts;
    try {
      posts = JSON.parse(responseText);
    } catch (parseError) {
      console.error('JSON parsing failed:', parseError);
      console.error(`Response that failed to parse: ${responseText.substring(0, 500)}`);
      
      // Retry on JSON parse error
      if (retryCount < maxRetries) {
        console.log(`JSON parse error, retrying in ${retryDelay}ms...`);
        await new Promise(resolve => setTimeout(resolve, retryDelay));
        return getBlogPostBySlug(slug, retryCount + 1);
      }
      
      return null;
    }

    if (!Array.isArray(posts)) {
      console.error('Expected array of posts but got:', typeof posts);
      return null;
    }

    const post = posts[0] || null;
    console.log(`Found post: ${post ? post.title?.rendered || 'Untitled' : 'None'}`);
    
    return post;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    
    // Add more specific error information
    if (error instanceof TypeError && error.message.includes('fetch')) {
      console.error('Network error - possibly DNS or connectivity issue');
    } else if (error instanceof SyntaxError && error.message.includes('JSON')) {
      console.error('JSON parsing error - received non-JSON response');
    } else if ((error as any)?.name === 'AbortError') {
      console.error('Request timed out');
    }
    
    // Retry on network errors
    if ((error instanceof TypeError || (error as any)?.name === 'AbortError') && retryCount < maxRetries) {
      console.log(`Network error, retrying in ${retryDelay}ms...`);
      await new Promise(resolve => setTimeout(resolve, retryDelay));
      return getBlogPostBySlug(slug, retryCount + 1);
    }
    
    return null;
  }
}

export async function postComment(comment: WordPressComment): Promise<{ success: boolean; message: string }> {
  try {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') {
      throw new Error('Cannot submit form on the server side');
    }
    
    // Create a hidden form and submit it programmatically
    // This is a workaround for the authentication issue
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://blog.biztalbox.com/wp-comments-post.php';
    form.target = '_blank'; // Open in a new tab to avoid navigation issues
    
    // Add form fields
    const fields = {
      'comment': comment.content,
      'author': comment.author_name,
      'email': comment.author_email,
      'url': comment.author_url || '',
      'comment_post_ID': comment.post.toString(),
      'comment_parent': '0',
      'submit': 'Post Comment'
    };
    
    // Create and append form fields
    Object.entries(fields).forEach(([name, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      form.appendChild(input);
    });
    
    // Append form to document, submit it, and remove it
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    
    // Since we're submitting a form, we can't get a direct response
    // We'll assume success if no error was thrown
    return { 
      success: true, 
      message: 'Comment submitted successfully. It will appear after moderation.' 
    };
  } catch (error) {
    console.error('Error posting comment:', error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : 'Failed to post comment' 
    };
  }
} 