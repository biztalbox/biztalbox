import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";
import { useSearchParams } from "next/navigation";

import BlogSidebar from "./blog-sidebar";
import { blog_classic } from "@/data/blog-data";
import { Quote, QuoteTwo, RightArrow, SvgBgSm } from "../svg";
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
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
    "wp:term"?: Array<
      Array<{
        name: string;
      }>
    >;
  };
}

// WordPress Category interface
interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

// Helper function to decode HTML entities
const decodeHtmlEntities = (text: string): string => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
};

// Add shimmer animation to document
const addShimmerAnimation = () => {
  // Add shimmer animation to document if it doesn't exist
  if (!document.getElementById("skeleton-animations")) {
    const style = document.createElement("style");
    style.id = "skeleton-animations";
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
        <div
          style={{
            width: "100%",
            height: "300px",
            backgroundColor: "rgba(172, 171, 171, 0.05)",
            borderRadius: "8px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)",
              animation: "shimmer 1.5s infinite",
              transform: "translateX(-100%)",
            }}
          ></div>
        </div>
      </div>
      <div className="postbox__content">
        <div className="postbox__meta">
          <div
            style={{
              height: "20px",
              width: "150px",
              backgroundColor: "rgba(172, 171, 171, 0.05)",
              borderRadius: "3px",
              position: "relative",
              overflow: "hidden",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)",
                animation: "shimmer 1.5s infinite",
                transform: "translateX(-100%)",
              }}
            ></div>
          </div>
        </div>
        <div
          style={{
            height: "30px",
            width: "80%",
            backgroundColor: "rgba(172, 171, 171, 0.05)",
            borderRadius: "3px",
            position: "relative",
            overflow: "hidden",
            marginBottom: "15px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)",
              animation: "shimmer 1.5s infinite",
              transform: "translateX(-100%)",
            }}
          ></div>
        </div>
        <div
          style={{
            height: "20px",
            width: "100%",
            backgroundColor: "rgba(172, 171, 171, 0.05)",
            borderRadius: "3px",
            position: "relative",
            overflow: "hidden",
            marginBottom: "10px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)",
              animation: "shimmer 1.5s infinite",
              transform: "translateX(-100%)",
            }}
          ></div>
        </div>
        <div
          style={{
            height: "20px",
            width: "90%",
            backgroundColor: "rgba(172, 171, 171, 0.05)",
            borderRadius: "3px",
            position: "relative",
            overflow: "hidden",
            marginBottom: "10px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)",
              animation: "shimmer 1.5s infinite",
              transform: "translateX(-100%)",
            }}
          ></div>
        </div>
        <div
          style={{
            height: "20px",
            width: "70%",
            backgroundColor: "rgba(172, 171, 171, 0.05)",
            borderRadius: "3px",
            position: "relative",
            overflow: "hidden",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)",
              animation: "shimmer 1.5s infinite",
              transform: "translateX(-100%)",
            }}
          ></div>
        </div>
        <div
          style={{
            height: "40px",
            width: "120px",
            backgroundColor: "rgba(172, 171, 171, 0.05)",
            borderRadius: "4px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)",
              animation: "shimmer 1.5s infinite",
              transform: "translateX(-100%)",
            }}
          ></div>
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

export default function BlogClassicArea({
  setIsVideoOpen,
  setVideoId,
}: IProps) {
  const [wordpressPosts, setWordpressPosts] = useState<IBlogDT[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentCategory, setCurrentCategory] =
    useState<WordPressCategory | null>(null);
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get("category");
  const searchQuery = searchParams.get("search");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState<string>("");
  const [subscribeStatus, setSubscribeStatus] = useState<
    "success" | "error" | ""
  >("");

  // Add shimmer animation to document
  useEffect(() => {
    addShimmerAnimation();

    return () => {
      // Clean up if needed
      const style = document.getElementById("skeleton-animations");
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

        // If category is specified, fetch category info first
        if (categorySlug) {
          try {
            const categoryResponse = await fetch(
              `https://blog.biztalbox.com/wp-json/wp/v2/categories?slug=${categorySlug}`
            );
            if (categoryResponse.ok) {
              const categories: WordPressCategory[] =
                await categoryResponse.json();
              if (categories.length > 0) {
                setCurrentCategory(categories[0]);
              }
            }
          } catch (err) {
            console.error("Failed to fetch category info:", err);
          }
        } else {
          setCurrentCategory(null);
        }

        // Build API URL with category filter and search if specified
        let apiUrl =
          "https://blog.biztalbox.com/wp-json/wp/v2/posts?_embed&per_page=100";

        // Add category filter
        if (categorySlug) {
          // First get category ID by slug, then filter posts
          const categoryResponse = await fetch(
            `https://blog.biztalbox.com/wp-json/wp/v2/categories?slug=${categorySlug}`
          );
          if (categoryResponse.ok) {
            const categories: WordPressCategory[] =
              await categoryResponse.json();
            if (categories.length > 0) {
              apiUrl += `&categories=${categories[0].id}`;
            }
          }
        }

        // Add search query
        if (searchQuery) {
          apiUrl += `&search=${encodeURIComponent(searchQuery)}`;
        }

        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: WordPressPost[] = await response.json();

        // Map WordPress posts to our blog format
        const mappedPosts: IBlogDT[] = data.map((post) => {
          // Extract category name if available
          const category =
            post._embedded?.["wp:term"]?.[0]?.[0]?.name || "Uncategorized";

          // Format date
          const postDate = new Date(post.date);
          const formattedDate = postDate.toLocaleDateString("en-IN", {
            year: "numeric",
            month: "short",
            day: "numeric",
          });

          // Get featured image URL if available
          const featuredImageUrl =
            post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

          // Create a stripped HTML description from content
          const strippedContent = post.excerpt.rendered
            .replace(/<[^>]*>/g, "")
            .replace(/&nbsp;/g, "")
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
            author: "Biztal Box",
            desc: decodedContent,
            img: featuredImageUrl as any, // Using 'any' here as a workaround for StaticImageData
            featuredImage: featuredImageUrl,
            blogQuote: false,
            blogQuoteTwo: false,
            video: false,
            imgSlider: false,
            blogHeroSlider: false,
          };
        });

        setWordpressPosts(mappedPosts);
        setError(null);
      } catch (err) {
        setError("Failed to load blog posts. Please try again later.");
        // Fallback to static data if API fails
        setWordpressPosts([...blog_classic.filter((b) => !b.blogHeroSlider)]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [categorySlug, searchQuery]);

  const { currentItems, handlePageClick, pageCount } = usePagination<IBlogDT>(
    wordpressPosts,
    4
  );

  function handleVideoModal(id: string) {
    setIsVideoOpen(true);
    setVideoId(id);
  }

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; // Store form reference before async operation
    const subscribeEmail = (e.target as HTMLFormElement).email.value;

    if (!subscribeEmail || !subscribeEmail.includes("@")) {
      setSubscribeStatus("error");
      setSubscribeMessage("Please enter a valid email address");
      return;
    }

    setIsSubscribing(true);
    setSubscribeMessage("");
    setSubscribeStatus("");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: subscribeEmail }),
      });

      const result = await response.json();

      // Check both HTTP status and result.success
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to subscribe");
      }

      setSubscribeStatus("success");
      setSubscribeMessage(result.message);
      form.reset(); // Use stored form reference
    } catch (error) {
      console.log("Error caught:", error);
      setSubscribeStatus("error");
      setSubscribeMessage(error instanceof Error ? error.message : "An error occurred"); 
    } finally {
      setIsSubscribing(false);

      // Clear message after 5 seconds
      setTimeout(() => {
        setSubscribeMessage("");
        setSubscribeStatus("");
      }, 5000);
    }
  };

  return (
    <section
      id="postbox"
      className="postbox__area tp-blog-sidebar-sticky-area pt-120 pb-80"
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="postbox__wrapper">
              {(currentCategory || searchQuery) && (
                <div className="postbox__category-header mb-50">
                  <div className="postbox__category-title">
                    <h2 className="category-page-title text-white">
                      {searchQuery
                        ? `Search Results for "${searchQuery}"`
                        : currentCategory?.name}
                    </h2>
                    <p className="category-description">
                      {searchQuery
                        ? `Found ${wordpressPosts.length} posts matching "${searchQuery}"`
                        : `Found ${wordpressPosts.length} posts in "${currentCategory?.name}" category`}
                    </p>
                  </div>
                </div>
              )}
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
                    {!item.blogQuote &&
                      !item.blogQuoteTwo &&
                      !item.imgSlider && (
                        <div className="postbox__thumb">
                          <Link href={`/blog/${item.slug}`}>
                            {typeof item.img === "string" ? (
                              <Image
                                src={item.img}
                                alt="blog-img"
                                width={800}
                                height={400}
                                style={{ width: "100%", height: "auto" }}
                              />
                            ) : (
                              <Image
                                src={item.img!}
                                alt="blog-img"
                                width={800}
                                height={400}
                                style={{ width: "100%", height: "auto" }}
                              />
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
                                  {typeof src === "string" ? (
                                    <Image
                                      src={src}
                                      alt=""
                                      style={{ width: "100%", height: "auto" }}
                                    />
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
                            <Link href={`/blog?category=${item.category}`}>
                              {item.category}
                            </Link>{" "}
                            | {item.date}
                          </span>
                        </div>
                        <h3 className="postbox__title">
                          <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                        </h3>
                        <div className="postbox__text">
                          <p>{item.desc}</p>
                        </div>
                        <div className="postbox__read-more">
                          <Link
                            href={`/blog/${item.slug}`}
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
        <div className="tp-footer-3-widget mt-40">
                <h4 className="tp-footer-2-widget-title">
                  Subscribe to our newsletter
                </h4>
                <form
                  onSubmit={handleSubscribe}
                  className="tp-footer-3-input-box d-flex align-items-center"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Address..."
                    disabled={isSubscribing}
                    required
                  />
                  <button
                    type="submit"
                    className="tp-footer-3-btn p-relative"
                    disabled={isSubscribing}
                  >
                    {isSubscribing ? (
                      <span style={{ fontSize: "12px", padding: "0 5px" }}>
                        ...
                      </span>
                    ) : (
                      <>
                        <span className="icon-1">
                          <RightArrow clr="#19191A" />
                        </span>
                        <span className="icon-2">
                          <SvgBgSm />
                        </span>
                      </>
                    )}
                  </button>
                </form>
                {subscribeMessage && (
                  <div
                    style={{
                      marginTop: "10px",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      fontSize: "14px",
                      backgroundColor:
                        subscribeStatus === "success" ? "#d4edda" : "#f8d7da",
                      color:
                        subscribeStatus === "success" ? "#155724" : "#721c24",
                      border: `1px solid ${
                        subscribeStatus === "success" ? "#c3e6cb" : "#f5c6cb"
                      }`,
                    }}
                  >
                    {subscribeMessage}
                  </div>
                )}
              </div>
      </div>
    </section>
  );
}
