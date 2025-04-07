import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Reply } from "@/components/svg";
import avatar_1 from "@/assets/img/inner-blog/blog-details/avatar/avatar-3.jpg";
import avatar_2 from "@/assets/img/inner-blog/blog-details/avatar/avatar-4.jpg";

// Define the WordPress comment type
interface WordPressComment {
  id: number;
  author_name: string;
  author_url: string;
  content: {
    rendered: string;
  };
  date: string;
  parent: number;
  _links?: {
    author?: Array<{
      href: string;
    }>;
  };
}

interface BlogDetailsCommentsApiProps {
  postId?: number;
  className?: string;
}

export default function BlogDetailsCommentsApi({ postId, className = "" }: BlogDetailsCommentsApiProps) {
  const [comments, setComments] = useState<WordPressComment[]>([]);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setCommentsLoading(true);
        // If postId is provided, fetch comments for that specific post
        // Otherwise, fetch all comments
        const url = postId 
          ? `https://blog.biztalbox.com/wp-json/wp/v2/comments?post=${postId}&_embed`
          : 'https://blog.biztalbox.com/wp-json/wp/v2/comments?_embed';
        
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        setComments(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching comments:', error);
        setError('Failed to load comments. Please try again later.');
        // Fallback to static data if API fails
        // setComments([
        //   {
        //     id: 1,
        //     author_name: "John Doe",
        //     author_url: "",
        //     content: {
        //       rendered: "Quisque est tortor, condimentum eget faucibus vel, condimentum quis felis. Nunc non orci augue. Pellentesque elementum gravida arcu."
        //     },
        //     date: "2024-04-08T07:38:00",
        //     parent: 0
        //   },
        //   {
        //     id: 2,
        //     author_name: "Mary Jane",
        //     author_url: "",
        //     content: {
        //       rendered: "Quisque est tortor, condimentum eget faucibus vel, condimentum quis felis. Nunc non orci augue. Pellentesque elementum gravida arcu."
        //     },
        //     date: "2024-05-10T08:40:00",
        //     parent: 1
        //   },
        //   {
        //     id: 3,
        //     author_name: "Nancy Doe",
        //     author_url: "",
        //     content: {
        //       rendered: "Quisque est tortor, condimentum eget faucibus vel, condimentum quis felis. Nunc non orci augue. Pellentesque elementum gravida arcu."
        //     },
        //     date: "2024-02-20T09:00:00",
        //     parent: 0
        //   }
        // ]);
      } finally {
        setCommentsLoading(false);
      }
    };

    fetchComments();
  }, [postId]);

  // Add shimmer animation to document
  useEffect(() => {
    // Add shimmer animation to document if it doesn't exist
    if (!document.getElementById('skeleton-animations')) {
      const style = document.createElement('style');
      style.id = 'skeleton-animations';
      style.innerHTML = `
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `;
      document.head.appendChild(style);
    }
    
    return () => {
      // Clean up if needed
      const style = document.getElementById('skeleton-animations');
      if (style) {
        style.remove();
      }
    };
  }, []);

  // Function to decode HTML entities
  const decodeHtml = (html: string) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  };

  // Skeleton loading component for comments
  const CommentsSkeleton = () => (
    <ul>
      {[1, 2, 3].map((item) => (
        <li key={item} className={item === 2 ? "children" : ""}>
          <div className="postbox__comment-box d-flex">
            <div className="postbox__comment-info">
              <div className="postbox__comment-avater mr-20" style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: 'rgba(172, 171, 171, 0.05)',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)',
                  animation: 'shimmer 1.5s infinite',
                  transform: 'translateX(-100%)'
                }}></div>
              </div>
            </div>
            <div className="postbox__comment-text" style={{ flex: 1 }}>
              <div className="postbox__comment-name d-flex justify-content-between align-items-center mb-2">
                <div style={{ 
                  height: '20px', 
                  width: '120px', 
                  backgroundColor: 'rgba(172, 171, 171, 0.05)',
                  borderRadius: '3px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)',
                    animation: 'shimmer 1.5s infinite',
                    transform: 'translateX(-100%)'
                  }}></div>
                </div>
                <div style={{ 
                  height: '16px', 
                  width: '150px', 
                  backgroundColor: 'rgba(172, 171, 171, 0.05)',
                  borderRadius: '3px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)',
                    animation: 'shimmer 1.5s infinite',
                    transform: 'translateX(-100%)'
                  }}></div>
                </div>
              </div>
              <div style={{ 
                height: '60px', 
                width: '100%', 
                backgroundColor: 'rgba(172, 171, 171, 0.05)',
                borderRadius: '3px',
                position: 'relative',
                overflow: 'hidden',
                marginBottom: '10px'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)',
                  animation: 'shimmer 1.5s infinite',
                  transform: 'translateX(-100%)'
                }}></div>
              </div>
              <div className="postbox__comment-reply">
                <div style={{ 
                  height: '30px', 
                  width: '80px', 
                  backgroundColor: 'rgba(172, 171, 171, 0.05)',
                  borderRadius: '3px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)',
                    animation: 'shimmer 1.5s infinite',
                    transform: 'translateX(-100%)'
                  }}></div>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );


  return (
    <div className={`postbox__comment ${className}`}>
      {commentsLoading ? (
        <CommentsSkeleton />
      ) : error ? (
        <div className="text-center py-3">
          <p>{error}</p>
        </div>
      ) : comments.length === 0 ? (
        <div className="text-center py-3">
          <p>No comments yet. Be the first to comment!</p>
        </div>
      ) : (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} className={comment.parent > 0 ? "children" : ""}>
              <div className="postbox__comment-box d-flex">
                <div className="postbox__comment-info">
                  <div className="postbox__comment-avater mr-20">
                    <Image 
                      src='/assets/image/user.png' 
                      alt={comment.author_name} 
                      width={150} 
                      height={150} 
                      style={{ borderRadius: '50%' }}
                    />
                  </div>
                </div>
                <div className="postbox__comment-text">
                  <div className="postbox__comment-name d-flex justify-content-between align-items-center">
                    <h5>{comment.author_name}</h5>
                    <span className="post-meta">{formatDate(comment.date)}</span>
                  </div>
                  <p dangerouslySetInnerHTML={{ __html: decodeHtml(comment.content.rendered) }} />
                  {/* <div className="postbox__comment-reply">
                    <a href="#">
                      Reply
                    </a>
                  </div> */}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 