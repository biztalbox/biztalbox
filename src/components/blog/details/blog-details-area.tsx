"use client";
import React from "react";
import Image from "next/image";
import BlogSidebar from "../blog-sidebar";
import { QuoteThree, Share, Tag } from "@/components/svg";
import BlogDetailsAuthor from "./blog-details-author";
import BlogDetailsNavigation from "./blog-details-navigation";
import BlogDetailsCommentsApi from "./blog-details-comments-api";
import BlogReplyForm from "@/components/form/blog-reply-form";
import { IBlogDT } from "@/types/blog-d-t";
import { useEffect } from "react";

// Define props interface
interface BlogDetailsAreaProps {
  blog: IBlogDT;
}

export default function BlogDetailsArea({ blog }: BlogDetailsAreaProps) {
  // Function to safely render HTML content
  const renderHtml = (html: string) => {
    return <div className="blog-details-content" dangerouslySetInnerHTML={{ __html: html }} />;
  };

  // Add WordPress block styles when component mounts
  useEffect(() => {
    // Only run on the client side
    if (typeof window === 'undefined') return;
    
    const style = document.createElement('style');
    style.textContent = `
      .blog-details-content {
        /* Base styles */
        font-size: 17px;
        line-height: 1.8;
        color: #5D5D63;
        
        /* Headings */
        h1, h2, h3, h4, h5, h6 {
          color: var(--tp-common-black);
          margin-bottom: 1em;
          font-weight: 700 !important;
        }
        
        h1 { font-size: 2.5em; }
        h2 { font-size: 2em; }
        h3 { font-size: 1.75em; }
        h4 { font-size: 1.5em; }
        h5 { font-size: 1.25em; }
        h6 { font-size: 1em; }
        
        /* Paragraphs */
        p {
          margin-bottom: 1.5em;
        }
        
        /* Lists */
        ul, ol {
          margin-bottom: 1.5em;
          padding-left: 2em;
        }
        
        ul { list-style-type: disc; }
        ol { list-style-type: decimal; }
        
        li {
          margin-bottom: 0.5em;
        }
        
        /* Blockquotes */
        blockquote {
          border-left: 4px solid var(--tp-theme-1);
          margin: 2em 0;
          padding: 1em 2em;
          background: #F4F6F8;
          font-style: italic;
        }
        
        /* Tables */
        table {
          width: 100%;
          border-collapse: collapse;
          margin: 2em 0;
        }
        
        th, td {
          border: 1px solid #ddd;
          padding: 12px;
          text-align: left;
        }
        
        th {
          background-color: #f5f5f5;
          font-weight: 600;
        }
        
        /* Images */
        img {
          max-width: 100%;
          height: auto;
          margin: 2em 0;
        }
        
        /* Links */
        a {
          color: var(--tp-theme-1);
          text-decoration: none;
          transition: color 0.3s ease;
          
          &:hover {
            color: var(--tp-theme-2);
          }
        }
        
        /* Code blocks */
        pre {
          background: #f5f5f5;
          padding: 1em;
          border-radius: 4px;
          overflow-x: auto;
          margin: 2em 0;
        }
        
        code {
          font-family: monospace;
          background: #f5f5f5;
          padding: 0.2em 0.4em;
          border-radius: 3px;
        }
        
        /* WordPress specific blocks */
        .wp-block-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1em;
          margin: 2em 0;
        }
        
        .wp-block-button__link {
          display: inline-block;
          padding: 0.8em 1.6em;
          background: var(--tp-theme-1);
          color: white;
          text-decoration: none;
          border-radius: 4px;
          transition: background 0.3s ease;
          
          &:hover {
            background: var(--tp-theme-2);
          }
        }
        
        .wp-block-columns {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2em;
          margin: 2em 0;
        }          
        .wp-block-cover {
          position: relative;
          min-height: 300px;
          margin: 2em 0;
          
          img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        
        /* Accordion blocks */
        .wp-block-accordion {
          margin: 2em 0;
          
          .wp-block-accordion-item {
            border: 1px solid #ddd;
            margin-bottom: 1em;
            
            .wp-block-accordion-header {
              padding: 1em;
              background: #f5f5f5;
              cursor: pointer;
              font-weight: 600;
            }
            
            .wp-block-accordion-content {
              padding: 1em;
            }
          }
        }
      }
      
      /* Dark mode support */
      [data-theme="dark"] .blog-details-content {
        color: rgba(245, 247, 245, 0.6);
        
        h1, h2, h3, h4, h5, h6 {
          color: var(--tp-common-white);
        }
        
        blockquote {
          background: #1e1e1e;
          border-left-color: var(--tp-theme-1);
        }
        
        pre, code {
          background: #1e1e1e;
        }
        
        .wp-block-accordion-item {
          border-color: rgba(245, 247, 245, 0.1);
          
          .wp-block-accordion-header {
            background: #1e1e1e;
          }
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="postbox__area tp-blog-sidebar-sticky-area pt-120 pb-120 biztal_post_area">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="postbox__wrapper">
              {/* Featured Image */}
              {blog.img && (
                <div className="blog-details-thumb mb-30">
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    width={800}
                    height={450}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              )}
              
              {/* Blog Content */}
              {renderHtml(blog.desc || '')}
              
              <hr />
              {/* Tags and Share */}
              {/* <div className="blog-details-share-wrap mb-40">
                <div className="row">
                  <div className="col-xl-8 col-lg-8">
                    <div className="blog-details-tag">
                      <span>
                        <Tag />
                      </span>
                      <a href="#">{blog.category}</a>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                    <div className="blog-details-share text-start text-md-end">
                      <span>
                        <Share />
                      </span>
                      <a href="#">Share Post</a>
                    </div>
                  </div>
                </div>
              </div> */}
              
              {/* Author Info */}
              {/* <BlogDetailsAuthor author={blog.author} /> */}
              
              {/* Navigation */}
              {/* <BlogDetailsNavigation /> */}
              
              {/* Comments */}
              <div className="postbox__comment mb-100">
                <h3 className="postbox__comment-title">Comments</h3>
                <BlogDetailsCommentsApi postId={blog.id} />
              </div>
              
              {/* Reply Form */}
              <div className="tp-postbox-details-form">
                <h3 className="tp-postbox-details-form-title">Leave a Reply</h3>
                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <BlogReplyForm postId={blog.id} />
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
}
