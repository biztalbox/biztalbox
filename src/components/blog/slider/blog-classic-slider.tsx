'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import { Navigation, Pagination } from "swiper/modules";
import { ScrollDown } from "@/components/svg";
import { scroller } from "react-scroll";

// Define the WordPress post type
interface WordPressPost {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  featured_media: number;
  author: number;
  _embedded?: {
    author?: Array<{
      name: string;
      avatar_urls: {
        [key: string]: string;
      };
    }>;
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

// slider setting
const slider_setting: SwiperOptions = {
  slidesPerView: 1,
  loop: true,
  autoplay: false,
  spaceBetween: 0,
  speed: 1000,
  pagination: {
    el: ".blog-sidebar-dot",
    clickable: true,
  },
  navigation: {
    nextEl: ".blog-sidebar-prev",
    prevEl: ".blog-sidebar-next",
  },
};

export default function BlogClassicSlider() {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Fetch posts with embedded author and featured media
        const response = await fetch('https://blog.biztalbox.com/wp-json/wp/v2/posts?categories=7&_embed');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
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
      day: 'numeric' 
    });
  };

  const scrollTo = () => {
    scroller.scrollTo('postbox', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  if (loading) {
    return <div className="text-center py-5">Loading...</div>;
  }

  return (
    <div className="blog-sidebar-slider-area">
      <div className="blog-sidebar-slider-wrapper p-relative">
        <div className="blog-sidebar-scrollbar smooth">
          <a className="pointer" onClick={scrollTo}>
            Scroll to explore
            <span>
              <ScrollDown />
            </span>
          </a>
        </div>
        <div className="blog-sidebar-arrow-box">
          <button className="blog-sidebar-prev">Next</button>
          <button className="blog-sidebar-next d-none">prev</button>
        </div>
        <Swiper
          {...slider_setting}
          modules={[Navigation, Pagination]}
          className="swiper-container blog-sidebar-slider-active"
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <div
                className="blog-sidebar-slider-bg blog-sidebar-slider-height d-flex align-items-center pt-170 pb-120"
                style={{ 
                  backgroundImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url 
                    ? `url(${post._embedded['wp:featuredmedia'][0].source_url})` 
                    : `url(/assets/img/inner-blog/blog-sidebar/blog-sidebar-bg.jpg)` 
                }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-xl-9">
                      <div className="blog-sidebar-content-box">
                        <div className="blog-sidebar-avatar-box d-flex align-items-center">
                          {post._embedded?.author?.[0]?.avatar_urls?.['96'] && (
                            <Image
                              src={post._embedded.author[0].avatar_urls['96']}
                              alt="author avatar"
                              width={40}
                              height={40}
                            />
                          )}
                          <span>{post._embedded?.author?.[0]?.name || 'Unknown Author'}</span>
                        </div>
                        <div className="blog-sidebar-title-box">
                          <span className="blog-sidebar-slider-meta">
                            {formatDate(post.date)}
                          </span>
                          <h4 className="blog-sidebar-slider-title tp-char-animation">
                            {decodeHtml(post.title.rendered)}
                          </h4>
                          <Link href={`/blog-details/${post.slug}`}
                            className="blog-sidebar-slider-link"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
