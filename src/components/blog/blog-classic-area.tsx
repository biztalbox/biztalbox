import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";

import BlogSidebar from "./blog-sidebar";
import { blog_classic } from "@/data/blog-data";
import { Quote, QuoteTwo } from "../svg";
import usePagination from "@/hooks/use-pagination";
import { IBlogDT } from "@/types/blog-d-t";
import PaginationCom from "../ui/pagination";

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
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
    'wp:term'?: Array<Array<{
      name: string;
    }>>;
  };
}

// Helper function to decode HTML entities
const decodeHtmlEntities = (text: string): string => {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
};

// Add shimmer animation to document
const addShimmerAnimation = () => {
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
};

// Blog Skeleton Component
const BlogSkeleton = () => {
  return (
    <div className="postbox__item mb-80">
      <div className="postbox__thumb">
        <div style={{ 
          width: '100%', 
          height: '300px', 
          backgroundColor: 'rgba(172, 171, 171, 0.05)',
          borderRadius: '8px',
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
      <div className="postbox__content">
        <div className="postbox__meta">
          <div style={{ 
            height: '20px', 
            width: '150px', 
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
        </div>
        <div style={{ 
          height: '30px', 
          width: '80%', 
          backgroundColor: 'rgba(172, 171, 171, 0.05)',
          borderRadius: '3px',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '15px'
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
        <div style={{ 
          height: '20px', 
          width: '90%', 
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
          width: '70%', 
          backgroundColor: 'rgba(172, 171, 171, 0.05)',
          borderRadius: '3px',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: '20px'
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
          height: '40px', 
          width: '120px', 
          backgroundColor: 'rgba(172, 171, 171, 0.05)',
          borderRadius: '4px',
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
  );
};

// slider setting
const slider_setting: SwiperOptions = {
  slidesPerView: 1,
  loop: true,
  autoplay: false,
  spaceBetween: 0,
  speed: 1000,
  effect: "fade",
  pagination: {
    el: ".blog-sidebar-dot",
    clickable: true,
  },
  navigation: {
    prevEl: ".postbox-arrow-prev",
    nextEl: ".postbox-arrow-next",
  },
};

// prop type
type IProps = {
  setIsVideoOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setVideoId: React.Dispatch<React.SetStateAction<string>>;
};

export default function BlogClassicArea({setIsVideoOpen,setVideoId}:IProps) {
  const [wordpressPosts, setWordpressPosts] = useState<IBlogDT[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // Add shimmer animation to document
  useEffect(() => {
    addShimmerAnimation();
    
    return () => {
      // Clean up if needed
      const style = document.getElementById('skeleton-animations');
      if (style) {
        style.remove();
      }
    };
  }, []);
  
  // Fetch WordPress posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://blog.biztalbox.com/wp-json/wp/v2/posts?_embed');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data: WordPressPost[] = await response.json();
        
        // Map WordPress posts to our blog format
        const mappedPosts: IBlogDT[] = data.map(post => {
          // Extract category name if available
          const category = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized';
          
          // Format date
          const postDate = new Date(post.date);
          const formattedDate = postDate.toLocaleDateString('en-IN', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
          });
          
          // Get featured image URL if available
          const featuredImageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '';
          
          // Create a stripped HTML description from content
          const strippedContent = post.excerpt.rendered
            .replace(/<[^>]*>/g, '')
            .replace(/&nbsp;/g, '')
            .trim();
          
          // Decode HTML entities in title and content
          const decodedTitle = decodeHtmlEntities(post.title.rendered);
          const decodedContent = decodeHtmlEntities(strippedContent);
          
          return {
            id: post.id,
            slug: post.slug,
            title: decodedTitle,
            date: formattedDate,
            category: category,
            author: 'Biztal Box',
            desc: decodedContent,
            img: featuredImageUrl as any, // Using 'any' here as a workaround for StaticImageData
            featuredImage: featuredImageUrl,
            blogQuote: false,
            blogQuoteTwo: false,
            video: false,
            imgSlider: false,
            blogHeroSlider: false
          };
        });
        
        setWordpressPosts(mappedPosts);
        setError(null);
      } catch (err) {
        setError('Failed to load blog posts. Please try again later.');
        // Fallback to static data if API fails
        setWordpressPosts([...blog_classic.filter((b) => !b.blogHeroSlider)]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, []);
  
  const { currentItems, handlePageClick, pageCount } = usePagination<IBlogDT>(wordpressPosts, 4);

  function handleVideoModal(id: string) {
    setIsVideoOpen(true);
    setVideoId(id);
  }
  
  return (
    <section
      id="postbox"
      className="postbox__area tp-blog-sidebar-sticky-area pt-120 pb-80"
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="postbox__wrapper">
              {loading ? (
                <>
                  <BlogSkeleton />
                  <BlogSkeleton />
                  <BlogSkeleton />
                  <BlogSkeleton />
                </>
              ) : error ? (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              ) : currentItems.length === 0 ? (
                <div className="alert alert-info" role="alert">
                  No blog posts found.
                </div>
              ) : (
                currentItems.map((item) => (
                  <article key={item.id} className="postbox__item mb-80">
                    {!item.blogQuote && !item.blogQuoteTwo && !item.imgSlider && (
                      <div className="postbox__thumb">
                        <Link href={`/blog/${item.slug}`}>
                          {typeof item.img === 'string' ? (
                            <Image src={item.img} alt="blog-img" width={800} height={400} style={{width: '100%', height: 'auto'}} />
                          ) : (
                            <Image src={item.img!} alt="blog-img" width={800} height={400} style={{width: '100%', height: 'auto'}} />
                          )}
                        </Link>
                        {/* {item.video && (
                          <div className="postbox__play-btn">
                            <a
                              className="popup-video pointer"
                              onClick={() => handleVideoModal(item.videoId!)}
                            >
                              <i className="fa-sharp fa-solid fa-play"></i>
                            </a>
                          </div>
                        )} */}
                      </div>
                    )}
                    {item.imgSlider && (
                      <div className="postbox__thumb w-img">
                        <div className="postbox__thumb-slider p-relative">
                          <Swiper
                            {...slider_setting}
                            modules={[Navigation, Pagination]}
                            className="swiper-container postbox__thumb-slider-active fix"
                          >
                            {item.images &&
                              item.images.map((src, i) => (
                                <SwiperSlide key={i}>
                                  {typeof src === 'string' ? (
                                    <Image src={src} alt="" style={{ width: '100%', height: 'auto' }} />
                                  ) : (
                                    <Image src={src} alt="" />
                                  )}
                                </SwiperSlide>
                              ))}
                          </Swiper>
                          <div className="postbox__slider-arrow-wrap d-none d-sm-block">
                            <button className="postbox-arrow-prev">
                              <i className="fa-sharp fa-solid fa-arrow-left"></i>
                            </button>
                            <button className="postbox-arrow-next">
                              <i className="fa-sharp fa-solid fa-arrow-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    {!item.blogQuote && !item.blogQuoteTwo && (
                      <div className="postbox__content">
                        <div className="postbox__meta">
                          <span>
                            {item.category} | {item.date}
                          </span>
                        </div>
                        <h3 className="postbox__title">
                          <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                        </h3>
                        <div className="postbox__text">
                          <p>{item.desc}</p>
                        </div>
                        <div className="postbox__read-more">
                          <Link href={`/blog/${item.slug}`}
                            className="tp-btn-border-lg"
                          >
                            read more
                          </Link>
                        </div>
                      </div>
                    )}
                  </article>
                ))
              )}

              {!loading && !error && currentItems.length > 0 && (
                <div className="basic-pagination">
                  <nav>
                    <PaginationCom
                      handlePageClick={handlePageClick}
                      pageCount={pageCount}
                    />
                  </nav>
                </div>
              )}
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            {/* blog sidebar area */}
            <BlogSidebar />
            {/* blog sidebar area */}
          </div>
        </div>
      </div>
    </section>
  );
}
