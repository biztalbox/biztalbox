"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Define the WordPress post type
interface WordPressPost {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

interface RecentPostListProps {
  postsPerPage?: number;
  className?: string;
}

export default function RecentPostList({ postsPerPage = 5, className = "" }: RecentPostListProps) {
  const [recentPosts, setRecentPosts] = useState<WordPressPost[]>([]);
  const [postsLoading, setPostsLoading] = useState(true);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const response = await fetch(`https://blog.biztalbox.com/wp-json/wp/v2/posts?per_page=${postsPerPage}&_embed`);
        const data = await response.json();
        setRecentPosts(data);
      } catch (error) {
        console.error('Error fetching recent posts:', error);
      } finally {
        setPostsLoading(false);
      }
    };

    fetchRecentPosts();
  }, [postsPerPage]);

  // Add shimmer animation to document
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
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
      if (typeof window === 'undefined') return;
      
      const style = document.getElementById('skeleton-animations');
      if (style) {
        style.remove();
      }
    };
  }, []);

  // Skeleton loading component for recent posts
  const RecentPostsSkeleton = () => (
    <div className="sidebar__post rc__post">
      {[1, 2, 3].map((item) => (
        <div key={item} className="rc__post mb-30 d-flex align-items-center">
          <div className="rc__post-thumb mr-20" style={{ 
            width: '100px', 
            height: '100px', 
            backgroundColor: 'rgba(172, 171, 171, 0.05)',
            borderRadius: '3px',
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
          <div className="rc__post-content" style={{ flex: 1 }}>
            <div className="rc__meta d-flex align-items-center mb-2">
              <div style={{ 
                height: '16px', 
                width: '60%', 
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
              height: '20px', 
              width: '90%', 
              backgroundColor: 'rgba(172, 171, 171, 0.05)',
              borderRadius: '3px',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '5px'
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
              height: '20px', 
              width: '70%', 
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
      ))}
    </div>
  );

  // Function to decode HTML entities
  const decodeHtml = (html: string) => {
    if (typeof window === 'undefined') return html;
    
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
      day: 'numeric' 
    });
  };

  return (
    <div className={`sidebar__post rc__post ${className}`}>
      {postsLoading ? (
        <RecentPostsSkeleton />
      ) : (
        <div className="sidebar__post rc__post">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="rc__post mb-30 d-flex align-items-center"
            >
              <div className="rc__post-thumb mr-20">
                <Link href={`/blog/${post.slug}`}>
                  {post._embedded?.['wp:featuredmedia']?.[0]?.source_url ? (
                    <Image
                      src={post._embedded['wp:featuredmedia'][0].source_url}
                      alt={decodeHtml(post.title.rendered)}
                      width={100}
                      height={100}
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <div style={{ 
                      width: '100px', 
                      height: '100px', 
                      backgroundColor: 'rgba(172, 171, 171, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <span style={{ color: 'rgba(172, 171, 171, 0.5)' }}>No image</span>
                    </div>
                  )}
                </Link>
              </div>
              <div className="rc__post-content">
                <div className="rc__meta d-flex align-items-center">
                  <span>{formatDate(post.date)}</span>
                </div>
                <h3 className="rc__post-title">
                  <Link href={`/blog/${post.slug}`}>
                    {decodeHtml(post.title.rendered)}
                  </Link>
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 