/**
 * WordPress Comment Submission Utility
 * 
 * This file provides functions for submitting comments to WordPress
 * using various methods, with fallbacks for different WordPress configurations.
 */

/**
 * Submit a comment to WordPress
 * @param commentData The comment data to submit
 * @returns A promise that resolves when the comment is submitted
 */
export function submitWordPressComment(commentData: {
  comment: string;
  author: string;
  email: string;
  url?: string;
  postId: string | number;
}): Promise<void> {
  return new Promise((resolve, reject) => {
    // Try our methods in sequence, starting with the most modern approach
    tryNextJsApiProxy(commentData)
      .then(resolve)
      .catch((error) => {
        console.log('API proxy failed, trying direct WP submission:', error);
        // If that fails, try traditional form submission as a fallback
        submitViaForm(commentData)
          .then(resolve)
          .catch(reject);
      });
  });
}

/**
 * Try to submit the comment via our Next.js API proxy
 */
async function tryNextJsApiProxy(commentData: {
  comment: string;
  author: string;
  email: string;
  url?: string;
  postId: string | number;
}): Promise<void> {
  // Prepare the comment data for the API
  const apiData = {
    content: commentData.comment,
    author_name: commentData.author,
    author_email: commentData.email,
    author_url: commentData.url || '',
    post: commentData.postId.toString(),
  };

  // Call our Next.js API route that acts as a proxy
  const response = await fetch('/api/wordpress/submit-comment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(apiData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || errorData.error || 'Failed to submit comment');
  }

  return;
}

/**
 * Submit a comment using the traditional form submission as a fallback
 * @param commentData The comment data to submit
 * @returns A promise that resolves when the comment is submitted
 */
function submitViaForm(commentData: {
  comment: string;
  author: string;
  email: string;
  url?: string;
  postId: string | number;
}): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      // Check if we're in a browser environment
      if (typeof window === 'undefined') {
        reject(new Error('Cannot submit form on the server side'));
        return;
      }
      
      // Create a hidden form and submit it programmatically
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://blog.biztalbox.com/wp-comments-post.php';
      form.target = '_blank'; // Open in a new tab to avoid navigation issues
      
      // Add form fields
      const fields = {
        'comment': commentData.comment,
        'author': commentData.author,
        'email': commentData.email,
        'url': commentData.url || '',
        'comment_post_ID': commentData.postId.toString(),
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
      
      // Create a submit button
      const submitButton = document.createElement('input');
      submitButton.type = 'submit';
      submitButton.name = 'submit';
      submitButton.value = 'Post Comment';
      submitButton.style.display = 'none';
      form.appendChild(submitButton);
      
      // Append form to document
      document.body.appendChild(form);
      
      // Trigger the submit button click
      submitButton.click();
      
      // Remove the form after a short delay to ensure submission starts
      setTimeout(() => {
        document.body.removeChild(form);
        resolve();
      }, 500);
    } catch (error) {
      reject(error);
    }
  });
} 