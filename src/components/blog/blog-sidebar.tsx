import React, { useState } from "react";
import Image from "next/image";
import avatar from "@/assets/img/inner-blog/blog-sidebar/avatar/avata-2.jpg";
import banner from "@/assets/img/inner-blog/blog-sidebar/banner/banner.jpg";
import { RightArrow, Search, SvgBgSm } from "../svg";
import Link from "next/link";
import RecentPostList from "./recentpostlist";
import CategoryList from "./categorylist";
import { useRouter } from "next/navigation";

export default function BlogSidebar() {
  const router = useRouter();
  const [subscribeLoading, setSubscribeLoading] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState("");
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchQuery = (e.target as HTMLFormElement).search.value;
    if (searchQuery) {
      router.push(`/blog?search=${searchQuery}`);
      e.currentTarget.reset();
    }
  };

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const subscribeEmail = form.email.value;

    if (!subscribeEmail) return;

    setSubscribeLoading(true);
    setSubscribeMessage("");

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: subscribeEmail }),
      });

      const result = await response.json();
      
      setSubscribeMessage(result.message);
      setSubscribeSuccess(result.success);
      
      if (result.success) {
        form.reset();
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubscribeMessage("");
          setSubscribeSuccess(false);
        }, 5000);
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setSubscribeMessage('Subscription failed. Please try again.');
      setSubscribeSuccess(false);
    } finally {
      setSubscribeLoading(false);
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
                <input type="text" placeholder="Search" name="search" />
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
      <div className="tp-footer-3-widget mb-65">
        <h4 className="tp-footer-2-widget-title">
          Subscribe to our newsletter
        </h4>
        <form onSubmit={handleSubscribe} className="tp-footer-3-input-box d-flex align-items-center">
          <input 
            type="email" 
            name="email" 
            placeholder="Enter Address..." 
            required
            disabled={subscribeLoading}
          />
          <button 
            type="submit" 
            className="tp-footer-3-btn p-relative"
            disabled={subscribeLoading}
          >
            <span className="icon-1">
              <RightArrow clr="#19191A" />
            </span>
            <span className="icon-2">
              <SvgBgSm />
            </span>
          </button>
        </form>
        {subscribeMessage && (
          <div className={`mt-2 p-2 text-sm rounded ${
            subscribeSuccess 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            {subscribeMessage}
          </div>
        )}
        {subscribeLoading && (
          <div className="mt-2 text-sm text-gray-600">
            Subscribing...
          </div>
        )}
      </div>

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
