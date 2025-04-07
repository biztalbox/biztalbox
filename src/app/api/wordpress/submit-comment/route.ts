import { NextResponse } from 'next/server';

/**
 * WordPress comment submission API route
 * 
 * This route acts as a proxy between the frontend and WordPress REST API.
 * It handles the authentication with WordPress and forwards the comment submission.
 */
export async function POST(request: Request) {
  try {
    // Parse the request body
    const commentData = await request.json();
    
    // Method 1: Try the standard WordPress REST API first with nonce token
    // This may work if the WordPress site has CORS and guest comments configured properly
    try {
      // Get a WordPress nonce first (some WordPress sites require this for comments)
      const nonceResponse = await fetch('https://blog.biztalbox.com/wp-json/wp/v2/nonce');
      
      if (nonceResponse.ok) {
        const { nonce } = await nonceResponse.json();
        
        // Try to submit with the nonce
        const standardApiResponse = await fetch('https://blog.biztalbox.com/wp-json/wp/v2/comments', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-WP-Nonce': nonce
          },
          body: JSON.stringify({
            content: commentData.content,
            author_name: commentData.author_name,
            author_email: commentData.author_email,
            author_url: commentData.author_url || '',
            post: parseInt(commentData.post),
          }),
        });
        
        if (standardApiResponse.ok) {
          const data = await standardApiResponse.json();
          return NextResponse.json({ 
            success: true, 
            message: 'Comment submitted successfully and is awaiting moderation.',
            data
          });
        }
      }
    } catch (e) {
      console.log('Standard WordPress API attempt failed:', e);
      // Continue to next method if this fails
    }
    
    // Method 2: Try a custom WordPress plugin endpoint for guest comments
    // Some sites install plugins that provide endpoints for guest comments
    try {
      const pluginResponse = await fetch('https://blog.biztalbox.com/wp-json/guest-comments/v1/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: commentData.content,
          author_name: commentData.author_name,
          author_email: commentData.author_email,
          author_url: commentData.author_url || '',
          post_id: commentData.post,
        }),
      });
      
      if (pluginResponse.ok) {
        const data = await pluginResponse.json();
        return NextResponse.json({ 
          success: true, 
          message: 'Comment submitted successfully and is awaiting moderation.',
          data
        });
      }
    } catch (e) {
      console.log('Guest comment plugin attempt failed:', e);
      // Continue to next method if this fails
    }
    
    // Method 3: Use the traditional wp-comments-post.php endpoint via server-side fetch
    // This is the most compatible method as it's how WordPress has handled comments for years
    const formData = new URLSearchParams();
    formData.append('comment', commentData.content);
    formData.append('author', commentData.author_name);
    formData.append('email', commentData.author_email);
    if (commentData.author_url) {
      formData.append('url', commentData.author_url);
    }
    formData.append('comment_post_ID', commentData.post);
    formData.append('comment_parent', '0');
    
    const traditionalResponse = await fetch('https://blog.biztalbox.com/wp-comments-post.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
      redirect: 'manual', // Don't follow redirects
    });
    
    // Check if we got a redirect (which usually means success for wp-comments-post.php)
    if (traditionalResponse.status === 302) {
      return NextResponse.json({ 
        success: true, 
        message: 'Comment submitted successfully and is awaiting moderation.'
      });
    }
    
    // If we reach here, all methods failed
    return NextResponse.json(
      { 
        error: 'Failed to submit comment to WordPress', 
        details: 'All submission methods failed. Your comment could not be submitted.'
      }, 
      { status: 400 }
    );
    
  } catch (error) {
    console.error('Error in comment submission API route:', error);
    
    // Return error response
    return NextResponse.json(
      { 
        error: 'Internal server error', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      }, 
      { status: 500 }
    );
  }
} 