export interface WordPressPost {
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

export async function getBlogPostBySlug(slug: string): Promise<WordPressPost | null> {
  try {
    const response = await fetch(
      `https://blog.biztalbox.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog post');
    }

    const posts = await response.json();
    return posts[0] || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
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