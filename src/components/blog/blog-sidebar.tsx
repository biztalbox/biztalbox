import React, { useState } from "react";
import Image from "next/image";
import avatar from "@/assets/img/inner-blog/blog-sidebar/avatar/avata-2.jpg";
import banner from "@/assets/img/inner-blog/blog-sidebar/banner/banner.jpg";
import { RightArrow, Search, SvgBgSm } from "../svg";
import Link from "next/link";
import RecentPostList from "./recentpostlist";
import CategoryList from "./categorylist";
import { useRouter, usePathname } from "next/navigation";
import { validateSearchQuery, buildBlogUrl } from "@/utils/blog-utils";

export default function BlogSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState<string>("");
  const [subscribeStatus, setSubscribeStatus] = useState<
    "success" | "error" | ""
  >("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchQuery = (e.target as HTMLFormElement).search.value;
    
    if (searchQuery && searchQuery.trim()) {
      const validatedQuery = validateSearchQuery(searchQuery);
      if (validatedQuery) {
        const searchUrl = buildBlogUrl(pathname, { search: validatedQuery });
        router.push(searchUrl);
        e.currentTarget.reset();
      }
    }
  };

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
      console.log("API Response:", result);
      console.log("Response Status:", response.status);
      console.log("Response OK:", response.ok);

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
    <div className="sidebar__wrapper">
      {/* <div className="sidebar__widget mb-45">
        <div className="sidebar__author text-center">
          <div className="sidebar__author-thumb">
            <Image src={avatar} alt="avatar" style={{ height: "auto" }} />
          </div>
          <div className="sidebar__author-content">
            <h4 className="sidebar__author-title">Mark Hopkins</h4>
            <p>Lorem ipsum dolor consectetur adipiscing elit.</p>
          </div>
        </div>
      </div> */}
      <div className="sidebar__widget mb-65">
        <div className="sidebar__widget-content">
          <div className="sidebar__search">
            <form onSubmit={handleSearch}>
              <div className="sidebar__search-input-2">
                <input 
                  type="text" 
                  placeholder="Search" 
                  name="search" 
                  maxLength={100}
                  pattern="[^<>]*"
                  title="Search query cannot contain < or > characters"
                />
                <button type="submit">
                  <Search />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Category list */}
      <div className="sidebar__widget mb-65">
        <h3 className="sidebar__widget-title">Category</h3>
        <div className="sidebar__widget-content">
          <CategoryList />
        </div>
      </div>
      
      <div className="tp-footer-3-widget mb-65">
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
              <span style={{ fontSize: "12px", padding: "0 5px" }}>...</span>
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
              color: subscribeStatus === "success" ? "#155724" : "#721c24",
              border: `1px solid ${
                subscribeStatus === "success" ? "#c3e6cb" : "#f5c6cb"
              }`,
            }}
          >
            {subscribeMessage}
          </div>
        )}
      </div>

      {/* Recent Posts */}
      <div className="sidebar__widget mb-65">
        <h3 className="sidebar__widget-title">Recent Post</h3>
        <div className="sidebar__widget-content">
          <RecentPostList />
        </div>
      </div>

      {/* <div className="sidebar__widget mb-65">
        <h3 className="sidebar__widget-title">Tags</h3>
        <div className="sidebar__widget-content">
          <div className="tagcloud">
            <a href="#">Creative</a>
            <a href="#">Vision</a>
            <a href="#">Popular</a>
            <a href="#">Photography</a>
            <a href="#">Lifestyle</a>
          </div>
        </div>
      </div> */}
      {/* <div className="sidebar__widget mb-65">
        <div className="sidebar__widget-content">
          <div className="sidebar__banner-img">
            <Image src={banner} alt="banner" style={{ height: "auto" }} />
          </div>
        </div>
      </div> */}

      <div className="sidebar__widget mb-65">
        <h3 className="sidebar__widget-title">Follow Us</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__social">
            <a href="https://www.facebook.com/BiztalBox" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/biztalbox" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://x.com/BiztalBox" target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/company/biztal" target="_blank">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
