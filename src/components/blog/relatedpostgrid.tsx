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
  categories: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

interface RelatedPostGridProps {
  postsPerPage?: number;
  className?: string;
  title?: string;
  currentPostId?: number;
  currentPostCategories?: number[];
}

export default function RelatedPostGrid({ 
  postsPerPage = 3, 
  className = "",
  title = "Related Posts",
  currentPostId,
  currentPostCategories = []
}: RelatedPostGridProps) {
  const [relatedPosts, setRelatedPosts] = useState<WordPressPost[]>([]);
  const [postsLoading, setPostsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let url = `https://blog.biztalbox.com/wp-json/wp/v2/posts?per_page=${postsPerPage}&_embed`;
        
        // If we have current post categories, fetch related posts
        if (currentPostCategories.length > 0) {
          const categoriesQuery = currentPostCategories.join(',');
          url += `&categories=${categoriesQuery}`;
          // Exclude current post from results
          if (currentPostId) {
            url += `&exclude=${currentPostId}`;
          }
        }
        
        const response = await fetch(url);
        const data = await response.json();
        setRelatedPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setPostsLoading(false);
      }
    };

    fetchPosts();
  }, [postsPerPage, currentPostId, currentPostCategories]);

  // Add shimmer animation to document
  useEffect(() => {
    // Check if in browser environment
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

  // Skeleton loading component for related posts grid
  const RelatedPostsSkeleton = () => (
    <div className="row">
      {[1, 2, 3].map((item) => (
        <div key={item} className="col-xl-4 col-lg-6 col-md-6 mb-50">
          <div className="tp-blog-item tp_fade_bottom">
            <div className="tp-blog-thumb fix p-relative" style={{ 
              height: '250px', 
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
            <div className="tp-blog-content">
              <div style={{ 
                height: '16px', 
                width: '60%', 
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
              <div style={{ 
                height: '20px', 
                width: '90%', 
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
    <div className={`blog-details-realated-area grey-bg-2 pt-90 pb-40 ${className}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="blog-details-realated-title-box text-center mb-50">
              <h3 className="blog-details-realated-title">{title}</h3>
            </div>
          </div>
        </div>
        {postsLoading ? (
          <RelatedPostsSkeleton />
        ) : (
          <div className="row">
              {relatedPosts.map((post) => (
              <div key={post.id} className="col-xl-4 col-lg-6 col-md-6 mb-50">
                <div className="tp-blog-item tp_fade_bottom">
                  <div className="tp-blog-thumb fix p-relative">
                    {post._embedded?.['wp:featuredmedia']?.[0]?.source_url ? (
                      <Image 
                        src={post._embedded['wp:featuredmedia'][0].source_url} 
                        alt={decodeHtml(post.title.rendered)}
                        width={400} 
                        height={250} 
                        style={{ objectFit: "cover", }} 
                      />
                    ) : (
                      <div style={{ 
                        width: '100%', 
                        height: '250px', 
                        backgroundColor: 'rgba(172, 171, 171, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <span style={{ color: 'rgba(172, 171, 171, 0.5)' }}>No image</span>
                      </div>
                    )}
                    <div className="tp-blog-meta">
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                  <div className="tp-blog-content">
                    <h4 className="tp-blog-title-sm">
                      <Link href={`/blog/${post.slug}`}>
                        {decodeHtml(post.title.rendered)}
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 